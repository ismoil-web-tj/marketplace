import React, { useState, useEffect, useRef } from 'react';
import {
  Heart, Search, Phone, Send, MessageCircle, X, Lock, Plus, Loader2, ImageIcon,
  LogOut, UserPlus, Users, User, Trash2, Ban, CheckCircle2, KeyRound, CalendarPlus,
  ChevronDown, ChevronUp,
} from 'lucide-react';
import bcrypt from 'bcryptjs';
import { supabase } from '../supabase';


const ADMIN_PASSWORD = 'admin123';

const STORAGE_BUCKET = 'product-images';

const DEFAULT_PHONE = '+99292*******';
const DEFAULT_TELEGRAM = 'your_username';
const DEFAULT_WHATSAPP = '99292*******';

const CATEGORIES = ['Все', 'Электроника', 'Одежда', 'Дом', 'Еда', 'Аксессуары'];

const EMPTY_FORM = {
  title: '',
  description: '',
  price: '',
  category: 'Электроника',
  phone: DEFAULT_PHONE,
  telegram: DEFAULT_TELEGRAM,
  whatsapp: DEFAULT_WHATSAPP,
};

const EMPTY_SELLER_FORM = {
  name: '',
  password: '',
};

const SELLER_SESSION_KEY = 'accesora_seller_session';

export default function Catalog() {
  // --- Витрина ---
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // --- Админ-доступ (скрытый) ---
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const logoClickCount = useRef(0);
  const logoClickTimer = useRef(null);

  // --- Форма добавления товара ---
  const [form, setForm] = useState(EMPTY_FORM);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  // --- Удаление товара ---
  const [deletingId, setDeletingId] = useState(null);

  // --- Добавление продавца (Edge Function 'create-seller') ---
  const [showAddSellerModal, setShowAddSellerModal] = useState(false);
  const [sellerForm, setSellerForm] = useState(EMPTY_SELLER_FORM);
  const [sellerCreateSubmitting, setSellerCreateSubmitting] = useState(false);
  const [sellerCreateError, setSellerCreateError] = useState('');
  const [sellerCreateSuccess, setSellerCreateSuccess] = useState('');

  // --- Список пользователей/продавцов (панель ГЛАВНОГО АДМИНА) ---
  const [showUsersListModal, setShowUsersListModal] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState('');
  // Какая строка продавца сейчас раскрыта (показывает его товары)
  const [expandedSellerId, setExpandedSellerId] = useState(null);
  // id продавца, для которого сейчас идёт действие (блок/продление/пароль/удаление)
  const [sellerRowActionLoadingId, setSellerRowActionLoadingId] = useState(null);

  // --- Вход ПРОДАВЦА: иконка рядом с поиском -> список продавцов ->
  //     выбор продавца -> пароль именно для него -> кабинет ---
  const [sellerSession, setSellerSession] = useState(null); // {id, name, status, expires_at}
  const [showSellerLoginModal, setShowSellerLoginModal] = useState(false);
  const [sellersForLogin, setSellersForLogin] = useState([]);
  const [sellersForLoginLoading, setSellersForLoginLoading] = useState(false);
  const [sellersForLoginError, setSellersForLoginError] = useState('');
  const [selectedLoginSeller, setSelectedLoginSeller] = useState(null);
  const [sellerLoginPassword, setSellerLoginPassword] = useState('');
  const [sellerLoginError, setSellerLoginError] = useState('');
  const [sellerLoginSubmitting, setSellerLoginSubmitting] = useState(false);
  const [showSellerDashboard, setShowSellerDashboard] = useState(false);

  // --- Кто сейчас добавляет товар через общую форму: 'admin' или 'seller' ---
  const [addProductRole, setAddProductRole] = useState('admin');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('accesora_favorites');
      setFavorites(saved ? JSON.parse(saved) : []);
    } catch {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  // Восстановление входа продавца после обновления страницы
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SELLER_SESSION_KEY);
      if (!saved) return;
      const session = JSON.parse(saved);
      if (session.expires_at && new Date(session.expires_at) < new Date()) {
        localStorage.removeItem(SELLER_SESSION_KEY);
        return;
      }
      setSellerSession(session);
    } catch {
      localStorage.removeItem(SELLER_SESSION_KEY);
    }
  }, []);

  const fetchProducts = async () => {
    setLoadingProducts(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Ошибка загрузки товаров:', error.message);
      setProducts([]);
    } else {
      setProducts(data || []);
    }
    setLoadingProducts(false);
  };

  const toggleFavorite = (e, product) => {
    e.stopPropagation();
    let updated;
    const isFav = favorites.some((item) => item.id === product.id);

    if (isFav) {
      updated = favorites.filter((item) => item.id !== product.id);
    } else {
      updated = [...favorites, product];
    }

    setFavorites(updated);
    localStorage.setItem('accesora_favorites', JSON.stringify(updated));
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  const filteredProducts = products.filter((product) => {
    const matchesCat = selectedCategory === 'Все' || product.category === selectedCategory;
    const matchesSearch = (product.title || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const myProducts = sellerSession
    ? products.filter((p) => p.seller_id === sellerSession.id)
    : [];

  // --- Скрытый вход в админ-панель: тройной клик по заголовку/логотипу ---
  const handleLogoClick = () => {
    if (isAdmin) return;

    logoClickCount.current += 1;

    if (logoClickCount.current >= 3) {
      logoClickCount.current = 0;
      if (logoClickTimer.current) clearTimeout(logoClickTimer.current);
      openPasswordModal();
      return;
    }

    if (logoClickTimer.current) clearTimeout(logoClickTimer.current);
    logoClickTimer.current = setTimeout(() => {
      logoClickCount.current = 0;
    }, 600);
  };

  const openPasswordModal = () => {
    setPasswordInput('');
    setPasswordError('');
    setShowPasswordModal(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setShowPasswordModal(false);
      setPasswordInput('');
      setPasswordError('');
      setIsAdmin(true);
    } else {
      setPasswordError('Неверный пароль. Попробуйте снова.');
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setShowAddProductModal(false);
    setShowAddSellerModal(false);
    setShowUsersListModal(false);
  };

  // --- Логика формы добавления товара ---
  const handleFormChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleOpenAddProductModal = (role = 'admin') => {
    setAddProductRole(role);
    setSubmitError('');
    setSubmitSuccess('');
    setShowAddProductModal(true);
  };

  const handleCloseAddProductModal = () => {
    setShowAddProductModal(false);
    resetForm();
    setSubmitError('');
    setSubmitSuccess('');
  };

  // --- Удаление товара из Supabase (без перезагрузки страницы) ---
  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('Вы уверены, что хотите удалить этот товар?')) return;

    setDeletingId(productId);

    try {
      const { data, error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId)
        .select();

      if (error) throw error;

      if (!data || data.length === 0) {
        throw new Error(
          'Товар не найден или удаление запрещено политикой доступа (RLS) в Supabase.'
        );
      }

      setProducts((prev) => prev.filter((p) => p.id !== productId));
      setSelectedProduct((prev) => (prev && prev.id === productId ? null : prev));
    } catch (err) {
      console.error('Ошибка удаления товара:', err.message);
      alert('Не удалось удалить товар: ' + err.message);
    } finally {
      setDeletingId(null);
    }
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setImageFile(null);
    setImagePreview('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setImageFile(null);
      setImagePreview('');
      return;
    }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const uploadImageToStorage = async (file) => {
    const rawExt = file.name.split('.').pop() || 'jpg';
    const safeExt = rawExt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'jpg';
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${safeExt}`;

    const safeFile = new File([file], fileName, {
      type: file.type || 'application/octet-stream',
    });

    const { error: uploadError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(fileName, safeFile, {
        cacheControl: '3600',
        upsert: false,
        contentType: safeFile.type,
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess('');

    if (!form.title.trim() || !form.price) {
      setSubmitError('Заполните хотя бы название и цену.');
      return;
    }

    setSubmitting(true);

    let imageUrl = '';

    try {
      if (imageFile) {
        setUploadingImage(true);
        imageUrl = await uploadImageToStorage(imageFile);
        setUploadingImage(false);
      }

      const payload = {
        title: form.title.trim(),
        description: form.description.trim(),
        price: Number(form.price),
        image_url: imageUrl,
        category: form.category,
        phone: form.phone.trim(),
        telegram: form.telegram.trim(),
        whatsapp: form.whatsapp.trim(),
      };

      // Если товар добавляет продавец — привязываем его seller_id.
      // Админ добавляет товары без привязки к конкретному продавцу.
      if (addProductRole === 'seller' && sellerSession) {
        payload.seller_id = sellerSession.id;
      }

      const { data, error } = await supabase
        .from('products')
        .insert([payload])
        .select();

      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        setProducts((prev) => [data[0], ...prev]);
      } else {
        fetchProducts();
      }

      setSubmitSuccess('Товар успешно добавлен!');
      resetForm();
    } catch (err) {
      console.error('Ошибка добавления товара:', err.message);
      setSubmitError('Не удалось сохранить товар: ' + err.message);
    } finally {
      setUploadingImage(false);
      setSubmitting(false);
    }
  };

  // ==========================================================
  // Добавление продавца (панель главного админа) — Edge Function 'create-seller'
  // ==========================================================
  const handleSellerFormChange = (field, value) => {
    setSellerForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleOpenAddSellerModal = () => {
    setSellerForm(EMPTY_SELLER_FORM);
    setSellerCreateError('');
    setSellerCreateSuccess('');
    setShowAddSellerModal(true);
  };

  const handleCloseAddSellerModal = () => {
    setShowAddSellerModal(false);
    setSellerForm(EMPTY_SELLER_FORM);
    setSellerCreateError('');
    setSellerCreateSuccess('');
  };

  const handleCreateSeller = async (e) => {
    e.preventDefault();
    setSellerCreateError('');
    setSellerCreateSuccess('');

    if (!sellerForm.name.trim() || !sellerForm.password.trim()) {
      setSellerCreateError('Заполните все поля.');
      return;
    }

    setSellerCreateSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('create-seller', {
        body: {
          name: sellerForm.name.trim(),
          password: sellerForm.password,
        },
      });

      if (error) throw error;

      if (data && data.error) {
        throw new Error(data.error);
      }

      setSellerCreateSuccess('Продавец успешно создан!');
      setSellerForm(EMPTY_SELLER_FORM);

      if (showUsersListModal) {
        fetchUsersList();
      }
    } catch (err) {
      console.error('Ошибка создания продавца:', err.message);
      setSellerCreateError('Не удалось создать продавца: ' + err.message);
    } finally {
      setSellerCreateSubmitting(false);
    }
  };

  // ==========================================================
  // Список пользователей/продавцов — панель ГЛАВНОГО АДМИНА
  // ==========================================================
  const fetchUsersList = async () => {
    setUsersLoading(true);
    setUsersError('');
    try {
      const { data, error } = await supabase
        .from('sellers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsersList(data || []);
    } catch (err) {
      console.error('Ошибка загрузки пользователей:', err.message);
      setUsersError('Не удалось загрузить список пользователей: ' + err.message);
      setUsersList([]);
    } finally {
      setUsersLoading(false);
    }
  };

  const handleOpenUsersListModal = () => {
    setShowUsersListModal(true);
    fetchUsersList();
  };

  // ==========================================================
  // Действия ГЛАВНОГО АДМИНА над конкретным продавцом:
  // блокировка/разблокировка, продление доступа ("подписка"),
  // смена пароля, удаление, просмотр и удаление его товаров.
  // ==========================================================
  const handleToggleSellerBlock = async (seller) => {
    const newStatus = seller.status === 'blocked' ? 'active' : 'blocked';
    setSellerRowActionLoadingId(seller.id);
    try {
      const { error } = await supabase
        .from('sellers')
        .update({ status: newStatus })
        .eq('id', seller.id);

      if (error) throw error;

      setUsersList((prev) => prev.map((u) => (u.id === seller.id ? { ...u, status: newStatus } : u)));
    } catch (err) {
      console.error('Ошибка изменения статуса продавца:', err.message);
      alert('Не удалось изменить статус: ' + err.message);
    } finally {
      setSellerRowActionLoadingId(null);
    }
  };

  const handleExtendSellerAccess = async (seller) => {
    const daysStr = window.prompt('На сколько дней продлить доступ (как подписку)?', '30');
    if (!daysStr) return;
    const days = Number(daysStr);
    if (!days || days <= 0) {
      alert('Введите положительное число дней.');
      return;
    }

    setSellerRowActionLoadingId(seller.id);
    try {
      const currentExpiry = seller.expires_at ? new Date(seller.expires_at) : new Date();
      const base = currentExpiry > new Date() ? currentExpiry : new Date();
      const newExpiresAt = new Date(base.getTime() + days * 24 * 60 * 60 * 1000).toISOString();

      const { error } = await supabase
        .from('sellers')
        .update({ expires_at: newExpiresAt })
        .eq('id', seller.id);

      if (error) throw error;

      setUsersList((prev) => prev.map((u) => (u.id === seller.id ? { ...u, expires_at: newExpiresAt } : u)));
    } catch (err) {
      console.error('Ошибка продления доступа:', err.message);
      alert('Не удалось продлить доступ: ' + err.message);
    } finally {
      setSellerRowActionLoadingId(null);
    }
  };

  const handleResetSellerPasswordAdmin = async (seller) => {
    const newPassword = window.prompt(`Новый пароль для продавца "${seller.name}":`);
    if (!newPassword || !newPassword.trim()) return;

    setSellerRowActionLoadingId(seller.id);
    try {
      // Хешируем прямо в браузере (bcryptjs) — по сети уходит только хеш,
      // сам пароль в открытом виде никуда не отправляется и не сохраняется.
      const passwordHash = bcrypt.hashSync(newPassword.trim(), 10);

      const { error } = await supabase
        .from('sellers')
        .update({ password_hash: passwordHash })
        .eq('id', seller.id);

      if (error) throw error;

      alert('Пароль продавца обновлён.');
    } catch (err) {
      console.error('Ошибка смены пароля:', err.message);
      alert('Не удалось изменить пароль: ' + err.message);
    } finally {
      setSellerRowActionLoadingId(null);
    }
  };

  const handleDeleteSellerAdmin = async (seller) => {
    if (!window.confirm(`Удалить продавца "${seller.name}"? Его товары останутся в каталоге.`)) return;

    setSellerRowActionLoadingId(seller.id);
    try {
      const { error } = await supabase
        .from('sellers')
        .delete()
        .eq('id', seller.id);

      if (error) throw error;

      setUsersList((prev) => prev.filter((u) => u.id !== seller.id));
      if (expandedSellerId === seller.id) setExpandedSellerId(null);
    } catch (err) {
      console.error('Ошибка удаления продавца:', err.message);
      // Частая причина: у продавца ещё есть товары, а внешний ключ не
      // разрешает удаление (ON DELETE RESTRICT). См. инструкцию про
      // ALTER TABLE ... ON DELETE SET NULL.
      alert('Не удалось удалить продавца: ' + err.message);
    } finally {
      setSellerRowActionLoadingId(null);
    }
  };

  const handleToggleExpandSellerProducts = (sellerId) => {
    setExpandedSellerId((prev) => (prev === sellerId ? null : sellerId));
  };

  // ==========================================================
  // Вход ПРОДАВЦА — иконка рядом с поиском (видна всем).
  // Шаг 1: показываем список продавцов (только id/name/status).
  // Шаг 2: после выбора — пароль именно для него.
  // Пароль сверяется на сервере (Edge Function 'seller-login', bcrypt),
  // не в React.
  // ==========================================================
  const fetchSellersForLogin = async () => {
    setSellersForLoginLoading(true);
    setSellersForLoginError('');
    try {
      const { data, error } = await supabase
        .from('sellers')
        .select('id, name, status')
        .order('name', { ascending: true });

      if (error) throw error;
      setSellersForLogin(data || []);
    } catch (err) {
      console.error('Ошибка загрузки списка продавцов:', err.message);
      setSellersForLoginError('Не удалось загрузить список продавцов: ' + err.message);
      setSellersForLogin([]);
    } finally {
      setSellersForLoginLoading(false);
    }
  };

  const handleUserIconClick = () => {
    if (sellerSession) {
      setShowSellerDashboard(true);
    } else {
      setSelectedLoginSeller(null);
      setSellerLoginPassword('');
      setSellerLoginError('');
      setShowSellerLoginModal(true);
      fetchSellersForLogin();
    }
  };

  const handleSelectLoginSeller = (seller) => {
    setSelectedLoginSeller(seller);
    setSellerLoginPassword('');
    setSellerLoginError('');
  };

  const handleBackToSellerList = () => {
    setSelectedLoginSeller(null);
    setSellerLoginPassword('');
    setSellerLoginError('');
  };

  const handleCloseSellerLoginModal = () => {
    setShowSellerLoginModal(false);
    setSelectedLoginSeller(null);
    setSellerLoginPassword('');
    setSellerLoginError('');
  };

  const handleSellerLogin = async (e) => {
    e.preventDefault();
    setSellerLoginError('');

    if (!selectedLoginSeller) return;

    if (!sellerLoginPassword.trim()) {
      setSellerLoginError('Введите пароль.');
      return;
    }

    setSellerLoginSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('seller-login', {
        body: { sellerId: selectedLoginSeller.id, password: sellerLoginPassword },
      });

      if (error) throw error;

      if (data && data.error) {
        if (data.error === 'BLOCKED') {
          setSellerLoginError('Ваш доступ заблокирован.');
        } else if (data.error === 'EXPIRED') {
          setSellerLoginError('Срок доступа закончился. Обратитесь к администратору.');
        } else {
          setSellerLoginError('Неверный пароль.');
        }
        return;
      }

      const seller = data?.seller;
      if (!seller) {
        setSellerLoginError('Неверный пароль.');
        return;
      }

      setSellerSession(seller);
      localStorage.setItem(SELLER_SESSION_KEY, JSON.stringify(seller));
      setSellerLoginPassword('');
      setSelectedLoginSeller(null);
      setShowSellerLoginModal(false);
      setShowSellerDashboard(true);
    } catch (err) {
      console.error('Ошибка входа продавца:', err.message);
      setSellerLoginError('Не удалось войти: ' + err.message);
    } finally {
      setSellerLoginSubmitting(false);
    }
  };

  const handleSellerLogout = () => {
    setSellerSession(null);
    localStorage.removeItem(SELLER_SESSION_KEY);
    setShowSellerDashboard(false);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Заголовок и поиск (кнопка админки скрыта — тройной клик по заголовку) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 flex-wrap">
          <div onClick={handleLogoClick} className="select-none">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Каталог товаров</h1>
            <p className="text-sm text-slate-500 mt-1">Найдено товаров: {filteredProducts.length}</p>
          </div>

          {isAdmin && (
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => handleOpenAddProductModal('admin')}
                className="flex items-center gap-2 h-11 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
              >
                <Plus className="w-4 h-4" />
                Добавить товар
              </button>
              <button
                onClick={handleOpenAddSellerModal}
                className="flex items-center gap-2 h-11 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
              >
                <UserPlus className="w-4 h-4" />
                Добавить продавца
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <input
              type="text"
              placeholder="Поиск по названию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {isAdmin && (
            <button
              onClick={handleOpenUsersListModal}
              title="Список пользователей (админ)"
              className="shrink-0 h-11 w-11 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors cursor-pointer"
            >
              <Users className="w-4 h-4" />
            </button>
          )}

          {/* Вход/кабинет продавца — рядом с поиском, доступно всем */}
          <button
            onClick={handleUserIconClick}
            title="Кабинет продавца"
            className="shrink-0 h-11 w-11 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors cursor-pointer relative"
          >
            <User className="w-4 h-4" />
            {sellerSession && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500" />
            )}
          </button>

          {isAdmin && (
            <button
              onClick={handleAdminLogout}
              title="Выйти из режима администратора"
              className="shrink-0 h-11 w-11 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Мобильные кнопки админа */}
      {isAdmin && (
        <div className="sm:hidden flex flex-col gap-2 mb-6">
          <button
            onClick={() => handleOpenAddProductModal('admin')}
            className="flex items-center justify-center gap-2 w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Добавить товар
          </button>
          <button
            onClick={handleOpenAddSellerModal}
            className="flex items-center justify-center gap-2 w-full h-11 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            Добавить продавца
          </button>
          <button
            onClick={handleOpenUsersListModal}
            className="flex items-center justify-center gap-2 w-full h-11 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-xl transition-colors cursor-pointer"
          >
            <Users className="w-4 h-4" />
            Список пользователей
          </button>
        </div>
      )}

      {/* Кабинет продавца — кнопка на мобильных, видна всем */}
      <button
        onClick={handleUserIconClick}
        className="sm:hidden flex items-center justify-center gap-2 w-full h-11 mb-6 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-xl transition-colors cursor-pointer relative"
      >
        <User className="w-4 h-4" />
        {sellerSession ? `Кабинет продавца (${sellerSession.name})` : 'Кабинет продавца'}
      </button>

      {/* Горизонтальные Категории (без sidebar) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Состояние загрузки */}
      {loadingProducts && (
        <div className="flex items-center justify-center py-20 text-slate-400 gap-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          Загрузка товаров...
        </div>
      )}

      {/* Сетка товаров */}
      {!loadingProducts && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => {
            const isFav = favorites.some((item) => item.id === product.id);
            const isDeleting = deletingId === product.id;

            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                <button
                  onClick={(e) => toggleFavorite(e, product)}
                  className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  title={isFav ? 'Убрать из избранного' : 'Добавить в избранное'}
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      isFav ? 'text-red-500 fill-red-500' : 'text-slate-400 hover:text-red-500'
                    }`}
                  />
                </button>

                {isAdmin && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteProduct(product.id);
                    }}
                    disabled={isDeleting}
                    title="Удалить товар"
                    className="absolute top-5 left-5 z-10 p-2 rounded-full bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  >
                    {isDeleting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <X className="w-4 h-4" />
                    )}
                  </button>
                )}

                <div>
                  <div className="w-full h-44 sm:h-52 bg-slate-50 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
                    <img
                      src={product.image_url}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base line-clamp-2 mt-0.5">
                    {product.title}
                  </h3>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Цена</span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">{product.price} TJS</span>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 group-hover:underline">
                    Подробнее →
                  </span>
                </div>
              </div>
            );
          })}

          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-16 text-slate-400 text-sm">
              Товары не найдены.
            </div>
          )}
        </div>
      )}

      {/* Модальное окно товара */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-150">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedProduct.image_url}
              alt={selectedProduct.title}
              className="w-full h-56 object-cover rounded-2xl mb-4"
            />

            <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
              {selectedProduct.category}
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-1">{selectedProduct.title}</h2>
            <p className="text-slate-600 text-sm mt-2">{selectedProduct.description}</p>

            <div className="my-4 p-3 bg-slate-50 rounded-xl flex items-center justify-between">
              <span className="text-sm text-slate-500 font-medium">Стоимость:</span>
              <span className="text-2xl font-black text-blue-600">{selectedProduct.price} TJS</span>
            </div>

            <div className="flex flex-col gap-2.5 mt-4">
              {selectedProduct.phone && (
                <a
                  href={`tel:${selectedProduct.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Позвонить
                </a>
              )}
              {selectedProduct.telegram && (
                <a
                  href={`https://t.me/${selectedProduct.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Написать в Telegram
                </a>
              )}
              {selectedProduct.whatsapp && (
                <a
                  href={`https://wa.me/${selectedProduct.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Написать в WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно ввода пароля главного админа (тройной клик по заголовку) */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-150">
            <button
              onClick={() => setShowPasswordModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Доступ к админ-панели</h2>
            </div>

            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                autoFocus
                placeholder="Введите пароль"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
              />
              {passwordError && (
                <p className="text-xs text-red-500 mt-2">{passwordError}</p>
              )}
              <button
                type="submit"
                className="w-full mt-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Модальное окно: форма добавления/редактирования товара (общая для admin и seller) */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-150">
            <button
              onClick={handleCloseAddProductModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Добавить новый товар</h2>
            </div>

            <form onSubmit={handleAddProduct} className="flex flex-col gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-500 block mb-1">Название</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => handleFormChange('title', e.target.value)}
                  className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                  placeholder="Например: Беспроводные наушники Pro 2"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-500 block mb-1">Описание</label>
                <textarea
                  value={form.description}
                  onChange={(e) => handleFormChange('description', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                  placeholder="Краткое описание товара"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">Цена (TJS)</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.price}
                    onChange={(e) => handleFormChange('price', e.target.value)}
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                    placeholder="450"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">Категория</label>
                  <select
                    value={form.category}
                    onChange={(e) => handleFormChange('category', e.target.value)}
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                  >
                    {CATEGORIES.filter((c) => c !== 'Все').map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-500 block mb-1">Фото товара</label>
                <label className="flex items-center gap-3 w-full px-4 py-3 bg-slate-50 border border-dashed border-slate-300 rounded-xl text-sm cursor-pointer hover:bg-slate-100 transition-colors">
                  <ImageIcon className="w-5 h-5 text-slate-400 shrink-0" />
                  <span className="text-slate-500 truncate">
                    {imageFile ? imageFile.name : 'Выбрать файл из галереи или ПК'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
                {imagePreview && (
                  <div className="w-full h-40 bg-slate-50 rounded-xl overflow-hidden mt-2 flex items-center justify-center">
                    <img src={imagePreview} alt="Предпросмотр" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">Телефон</label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                    placeholder="+992900000000"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">Telegram</label>
                  <input
                    type="text"
                    value={form.telegram}
                    onChange={(e) => handleFormChange('telegram', e.target.value)}
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                    placeholder="username"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">WhatsApp</label>
                  <input
                    type="text"
                    value={form.whatsapp}
                    onChange={(e) => handleFormChange('whatsapp', e.target.value)}
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                    placeholder="992900000000"
                  />
                </div>
              </div>

              {submitError && <p className="text-xs text-red-500">{submitError}</p>}
              {submitSuccess && <p className="text-xs text-emerald-600">{submitSuccess}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {uploadingImage ? 'Загрузка фото...' : submitting ? 'Сохранение...' : 'Добавить товар'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Модальное окно: вход продавца — шаг 1: список продавцов, шаг 2: пароль выбранного */}
      {showSellerLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-150">
            <button
              onClick={handleCloseSellerLoginModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                {selectedLoginSeller ? selectedLoginSeller.name : 'Кабинет продавца'}
              </h2>
            </div>

            {/* Шаг 1: список продавцов */}
            {!selectedLoginSeller && (
              <>
                {sellersForLoginLoading && (
                  <div className="flex items-center justify-center py-10 text-slate-400 gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Загрузка...
                  </div>
                )}

                {!sellersForLoginLoading && sellersForLoginError && (
                  <p className="text-sm text-red-500 text-center py-6">{sellersForLoginError}</p>
                )}

                {!sellersForLoginLoading && !sellersForLoginError && sellersForLogin.length === 0 && (
                  <p className="text-sm text-slate-400 text-center py-10">Продавцов пока нет.</p>
                )}

                {!sellersForLoginLoading && !sellersForLoginError && sellersForLogin.length > 0 && (
                  <div className="flex flex-col gap-2">
                    {sellersForLogin.map((seller) => {
                      const isBlocked = seller.status === 'blocked';
                      return (
                        <button
                          key={seller.id}
                          onClick={() => handleSelectLoginSeller(seller)}
                          className="w-full flex items-center justify-between h-11 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 transition-colors cursor-pointer"
                        >
                          {seller.name}
                          {isBlocked && (
                            <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-red-100 text-red-600">
                              заблокирован
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {/* Шаг 2: пароль выбранного продавца */}
            {selectedLoginSeller && (
              <form onSubmit={handleSellerLogin} className="flex flex-col gap-3">
                <input
                  type="password"
                  autoFocus
                  placeholder="Введите пароль"
                  value={sellerLoginPassword}
                  onChange={(e) => setSellerLoginPassword(e.target.value)}
                  className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                />
                {sellerLoginError && (
                  <p className="text-xs text-red-500">{sellerLoginError}</p>
                )}
                <button
                  type="submit"
                  disabled={sellerLoginSubmitting}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  {sellerLoginSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  Войти
                </button>
                <button
                  type="button"
                  onClick={handleBackToSellerList}
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  ← Назад к списку
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Модальное окно: кабинет продавца после успешного входа */}
      {showSellerDashboard && sellerSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-150">
            <button
              onClick={() => setShowSellerDashboard(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-1 pr-10">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">{sellerSession.name}</h2>
                <p className="text-xs text-slate-500">
                  Статус: <span className="font-semibold text-emerald-600">активен</span>
                  {sellerSession.expires_at && ` · доступ до ${new Date(sellerSession.expires_at).toLocaleDateString('ru-RU')}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-5 mb-5">
              <button
                onClick={() => handleOpenAddProductModal('seller')}
                className="flex items-center gap-2 h-11 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Добавить товар
              </button>
              <button
                onClick={handleSellerLogout}
                className="flex items-center gap-2 h-11 px-4 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-xl transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                Выйти
              </button>
            </div>

            <h3 className="text-sm font-bold text-slate-900 mb-3">Мои товары ({myProducts.length})</h3>

            {myProducts.length === 0 ? (
              <p className="text-center text-slate-400 text-sm py-10">У вас пока нет товаров.</p>
            ) : (
              <div className="flex flex-col gap-2.5">
                {myProducts.map((product) => {
                  const isDeleting = deletingId === product.id;
                  return (
                    <div
                      key={product.id}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3"
                    >
                      <div className="w-14 h-14 bg-white rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                        <img src={product.image_url} alt={product.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">{product.title}</p>
                        <p className="text-xs text-slate-500">{product.price} TJS · {product.category}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        disabled={isDeleting}
                        title="Удалить"
                        className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-red-50 text-red-600 disabled:opacity-50 cursor-pointer transition-colors shrink-0"
                      >
                        {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Модальное окно: форма добавления продавца (панель главного админа) — Edge Function 'create-seller' */}
      {showAddSellerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-150">
            <button
              onClick={handleCloseAddSellerModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Добавить продавца</h2>
            </div>

            <form onSubmit={handleCreateSeller} className="flex flex-col gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-500 block mb-1">Имя</label>
                <input
                  type="text"
                  value={sellerForm.name}
                  onChange={(e) => handleSellerFormChange('name', e.target.value)}
                  className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                  placeholder="Рустам"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-500 block mb-1">Пароль</label>
                <input
                  type="text"
                  value={sellerForm.password}
                  onChange={(e) => handleSellerFormChange('password', e.target.value)}
                  className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                  placeholder="583921"
                />
              </div>

              {sellerCreateError && <p className="text-xs text-red-500">{sellerCreateError}</p>}
              {sellerCreateSuccess && <p className="text-xs text-emerald-600">{sellerCreateSuccess}</p>}

              <button
                type="submit"
                disabled={sellerCreateSubmitting}
                className="w-full mt-2 py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {sellerCreateSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {sellerCreateSubmitting ? 'Создание...' : 'Создать продавца'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Модальное окно: список пользователей/продавцов (панель главного админа) */}
      {showUsersListModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-150">
            <button
              onClick={() => setShowUsersListModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-slate-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Список пользователей</h2>
            </div>

            {usersLoading && (
              <div className="flex items-center justify-center py-10 text-slate-400 gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Загрузка...
              </div>
            )}

            {!usersLoading && usersError && (
              <p className="text-sm text-red-500 text-center py-6">{usersError}</p>
            )}

            {!usersLoading && !usersError && usersList.length === 0 && (
              <p className="text-sm text-slate-400 text-center py-10">Пользователей пока нет.</p>
            )}

            {!usersLoading && !usersError && usersList.length > 0 && (
              <div className="flex flex-col gap-2.5">
                {usersList.map((seller) => {
                  const isBlocked = seller.status === 'blocked';
                  const isExpired = seller.expires_at && new Date(seller.expires_at) < new Date();
                  const isBusy = sellerRowActionLoadingId === seller.id;
                  const isExpanded = expandedSellerId === seller.id;
                  const sellerProducts = products.filter((p) => p.seller_id === seller.id);

                  return (
                    <div
                      key={seller.id}
                      className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
                    >
                      <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-semibold text-slate-900 truncate">{seller.name || '—'}</span>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full shrink-0 ${
                                isBlocked
                                  ? 'bg-red-100 text-red-600'
                                  : isExpired
                                  ? 'bg-amber-100 text-amber-600'
                                  : 'bg-emerald-100 text-emerald-600'
                              }`}
                            >
                              {isBlocked ? 'заблокирован' : isExpired ? 'истёк срок' : 'активен'}
                            </span>
                          </div>
                          {seller.expires_at && (
                            <p className="text-xs text-slate-500 mt-0.5">
                              Доступ до: {new Date(seller.expires_at).toLocaleDateString('ru-RU')}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5 flex-wrap">
                          <button
                            onClick={() => handleToggleSellerBlock(seller)}
                            disabled={isBusy}
                            title={isBlocked ? 'Разблокировать' : 'Заблокировать'}
                            className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-50 cursor-pointer transition-colors"
                          >
                            {isBlocked ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Ban className="w-4 h-4 text-red-500" />}
                          </button>
                          <button
                            onClick={() => handleExtendSellerAccess(seller)}
                            disabled={isBusy}
                            title="Продлить доступ (подписка)"
                            className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 disabled:opacity-50 cursor-pointer transition-colors"
                          >
                            <CalendarPlus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleResetSellerPasswordAdmin(seller)}
                            disabled={isBusy}
                            title="Изменить пароль"
                            className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 disabled:opacity-50 cursor-pointer transition-colors"
                          >
                            <KeyRound className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleToggleExpandSellerProducts(seller.id)}
                            title="Товары продавца"
                            className="flex items-center gap-1 p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 cursor-pointer transition-colors text-xs font-semibold"
                          >
                            {sellerProducts.length}
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => handleDeleteSellerAdmin(seller)}
                            disabled={isBusy}
                            title="Удалить продавца"
                            className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-red-50 text-red-600 disabled:opacity-50 cursor-pointer transition-colors"
                          >
                            {isBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Раскрывающийся список товаров этого продавца — админ может удалить любой */}
                      {isExpanded && (
                        <div className="border-t border-slate-200 p-3 bg-white flex flex-col gap-2">
                          {sellerProducts.length === 0 ? (
                            <p className="text-xs text-slate-400 text-center py-4">У этого продавца пока нет товаров.</p>
                          ) : (
                            sellerProducts.map((product) => {
                              const isDeleting = deletingId === product.id;
                              return (
                                <div
                                  key={product.id}
                                  className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-3"
                                >
                                  <div className="w-10 h-10 bg-white rounded-md overflow-hidden shrink-0 flex items-center justify-center">
                                    <img src={product.image_url} alt={product.title} className="w-full h-full object-cover" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold text-slate-900 truncate">{product.title}</p>
                                    <p className="text-[11px] text-slate-500">{product.price} TJS</p>
                                  </div>
                                  <button
                                    onClick={() => handleDeleteProduct(product.id)}
                                    disabled={isDeleting}
                                    title="Удалить товар"
                                    className="p-1.5 rounded-md bg-white border border-slate-200 hover:bg-red-50 text-red-600 disabled:opacity-50 cursor-pointer transition-colors shrink-0"
                                  >
                                    {isDeleting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                                  </button>
                                </div>
                              );
                            })
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
