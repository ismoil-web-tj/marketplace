


// // import React, { useState, useEffect } from 'react';
// // import { Heart, Search, Phone, Send, MessageCircle, X } from 'lucide-react';

// // const PRODUCTS = [
// //   { id: 1, title: 'Беспроводные наушники Pro 2', price: 450, category: 'Электроника', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60', description: 'Отличный звук, активное шумоподавление и комфортная посадка.' },
// //   { id: 2, title: 'Смарт-часы Classic 6', price: 890, category: 'Электроника', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60', description: 'Отслеживание здоровья, стильный корпус и ёмкий аккумулятор.' },
// //   { id: 3, title: 'Кожаный городской рюкзак', price: 320, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60', description: 'Прочный материал, отделение для ноутбука и стильный дизайн.' },
// //   { id: 4, title: 'Механическая клавиатура RGB', price: 540, category: 'Электроника', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60', description: 'Быстрый отклик, приятный клик и настраиваемая подсветка.' },
// //   { id: 5, title: 'Спортивные оправы и очки', price: 180, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60', description: 'Защита от солнца и качественные поляризационные линзы.' },
// //   { id: 6, title: 'Куртка хлопковая Unisex', price: 620, category: 'Одежда', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60', description: 'Удобный крой, надежная молния и качественная ткань.' },
// //   { id: 7, title: 'Термокружка 500 мл', price: 120, category: 'Дом', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60', description: 'Сохраняет тепло до 12 часов. Не протекает.' },
// //   { id: 8, title: 'Набор премиум кофе', price: 95, category: 'Еда', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=60', description: 'Арабика 100%, средняя обжарка с шоколадным нотками.' },
// // ];

// // const CATEGORIES = ['Все', 'Электроника', 'Одежда', 'Дом', 'Еда', 'Аксессуары'];

// // export default function Catalog() {
// //   const [selectedCategory, setSelectedCategory] = useState('Все');
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [selectedProduct, setSelectedProduct] = useState(null);
// //   const [favorites, setFavorites] = useState([]);

// //   useEffect(() => {
// //     try {
// //       const saved = localStorage.getItem('accesora_favorites');
// //       setFavorites(saved ? JSON.parse(saved) : []);
// //     } catch {
// //       setFavorites([]);
// //     }
// //   }, []);

// //   const toggleFavorite = (e, product) => {
// //     e.stopPropagation();
// //     let updated;
// //     const isFav = favorites.some((item) => item.id === product.id);

// //     if (isFav) {
// //       updated = favorites.filter((item) => item.id !== product.id);
// //     } else {
// //       updated = [...favorites, product];
// //     }

// //     setFavorites(updated);
// //     localStorage.setItem('accesora_favorites', JSON.stringify(updated));
// //     window.dispatchEvent(new Event('favoritesUpdated'));
// //   };

// //   const filteredProducts = PRODUCTS.filter((product) => {
// //     const matchesCat = selectedCategory === 'Все' || product.category === selectedCategory;
// //     const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
// //     return matchesCat && matchesSearch;
// //   });

// //   return (
// //     <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //       {/* Заголовок и поиск */}
// //       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
// //         <div>
// //           <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Каталог товаров</h1>
// //           <p className="text-sm text-slate-500 mt-1">Найдено товаров: {filteredProducts.length}</p>
// //         </div>

// //         <div className="relative w-full md:w-80">
// //           <input
// //             type="text"
// //             placeholder="Поиск по названию..."
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //             className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
// //           />
// //           <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
// //         </div>
// //       </div>

// //       {/* Горизонтальные Категории (без sidebar) */}
// //       <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
// //         {CATEGORIES.map((cat) => (
// //           <button
// //             key={cat}
// //             onClick={() => setSelectedCategory(cat)}
// //             className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
// //               selectedCategory === cat
// //                 ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
// //                 : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
// //             }`}
// //           >
// //             {cat}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Сетка товаров */}
// //       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
// //         {filteredProducts.map((product) => {
// //           const isFav = favorites.some((item) => item.id === product.id);

// //           return (
// //             <div
// //               key={product.id}
// //               onClick={() => setSelectedProduct(product)}
// //               className="group bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
// //             >
// //               {/* Кнопка Избранного */}
// //               <button
// //                 onClick={(e) => toggleFavorite(e, product)}
// //                 className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
// //                 title={isFav ? 'Убрать из избранного' : 'Добавить в избранное'}
// //               >
// //                 <Heart
// //                   className={`w-5 h-5 transition-colors ${
// //                     isFav ? 'text-red-500 fill-red-500' : 'text-slate-400 hover:text-red-500'
// //                   }`}
// //                 />
// //               </button>

// //               <div>
// //                 <div className="w-full h-44 sm:h-52 bg-slate-50 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
// //                   <img
// //                     src={product.image}
// //                     alt={product.title}
// //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// //                   />
// //                 </div>
// //                 <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
// //                   {product.category}
// //                 </span>
// //                 <h3 className="font-semibold text-slate-900 text-sm sm:text-base line-clamp-2 mt-0.5">
// //                   {product.title}
// //                 </h3>
// //               </div>

// //               <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
// //                 <div>
// //                   <span className="text-xs text-slate-400 block">Цена</span>
// //                   <span className="text-base sm:text-lg font-bold text-slate-900">{product.price} TJS</span>
// //                 </div>
// //                 <span className="text-xs font-semibold text-blue-600 group-hover:underline">
// //                   Подробнее →
// //                 </span>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>

// //       {/* Модальное окно товара */}
// //       {selectedProduct && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
// //           <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-150">
// //             <button
// //               onClick={() => setSelectedProduct(null)}
// //               className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
// //             >
// //               <X className="w-5 h-5" />
// //             </button>

// //             <img
// //               src={selectedProduct.image}
// //               alt={selectedProduct.title}
// //               className="w-full h-56 object-cover rounded-2xl mb-4"
// //             />

// //             <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
// //               {selectedProduct.category}
// //             </span>
// //             <h2 className="text-xl font-bold text-slate-900 mt-1">{selectedProduct.title}</h2>
// //             <p className="text-slate-600 text-sm mt-2">{selectedProduct.description}</p>

// //             <div className="my-4 p-3 bg-slate-50 rounded-xl flex items-center justify-between">
// //               <span className="text-sm text-slate-500 font-medium">Стоимость:</span>
// //               <span className="text-2xl font-black text-blue-600">{selectedProduct.price} TJS</span>
// //             </div>

// //             {/* Три кнопки связи */}
// //             <div className="flex flex-col gap-2.5 mt-4">
// //               <a
// //                 href="tel:+992900000000"
// //                 className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
// //               >
// //                 <Phone className="w-5 h-5" />
// //                 Позвонить
// //               </a>
// //               <a
// //                 href="https://t.me/username"
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 className="flex items-center justify-center gap-2 w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-colors"
// //               >
// //                 <Send className="w-5 h-5" />
// //                 Написать в Telegram
// //               </a>
// //               <a
// //                 href="https://wa.me/992900000000"
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
// //               >
// //                 <MessageCircle className="w-5 h-5" />
// //                 Написать в WhatsApp
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }






// import React, { useState, useEffect, useRef } from 'react';
// import { Heart, Search, Phone, Send, MessageCircle, X, Lock, Plus, Loader2, ImageIcon, LogOut } from 'lucide-react';
// import { supabase } from '../supabase';


// const ADMIN_PASSWORD = 'admin123';

// const STORAGE_BUCKET = 'product-images';

// const DEFAULT_PHONE = '+992927619070';
// const DEFAULT_TELEGRAM = 'your_username';
// const DEFAULT_WHATSAPP = '992927619070';

// const CATEGORIES = ['Все', 'Электроника', 'Одежда', 'Дом', 'Еда', 'Аксессуары'];

// const EMPTY_FORM = {
//   title: '',
//   description: '',
//   price: '',
//   category: 'Электроника',
//   phone: DEFAULT_PHONE,
//   telegram: DEFAULT_TELEGRAM,
//   whatsapp: DEFAULT_WHATSAPP,
// };

// export default function Catalog() {
//   // --- Витрина ---
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('Все');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [favorites, setFavorites] = useState([]);

//   // --- Админ-доступ (скрытый) ---
//   const [showPasswordModal, setShowPasswordModal] = useState(false);
//   const [passwordInput, setPasswordInput] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   // isAdmin — админ вошёл в систему (сохраняется, пока не нажмёт "Выйти")
//   const [isAdmin, setIsAdmin] = useState(false);
//   // showAddProductModal — открыто ли модальное окно добавления товара
//   const [showAddProductModal, setShowAddProductModal] = useState(false);
//   const logoClickCount = useRef(0);
//   const logoClickTimer = useRef(null);

//   // --- Форма добавления товара ---
//   const [form, setForm] = useState(EMPTY_FORM);
//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState('');
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState('');
//   const [submitSuccess, setSubmitSuccess] = useState('');

//   // --- Удаление товара ---
//   const [deletingId, setDeletingId] = useState(null);

//   useEffect(() => {
//     try {
//       const saved = localStorage.getItem('accesora_favorites');
//       setFavorites(saved ? JSON.parse(saved) : []);
//     } catch {
//       setFavorites([]);
//     }
//   }, []);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     const { data, error } = await supabase
//       .from('products')
//       .select('*')
//       .order('created_at', { ascending: false });

//     if (error) {
//       console.error('Ошибка загрузки товаров:', error.message);
//       setProducts([]);
//     } else {
//       setProducts(data || []);
//     }
//     setLoadingProducts(false);
//   };

//   const toggleFavorite = (e, product) => {
//     e.stopPropagation();
//     let updated;
//     const isFav = favorites.some((item) => item.id === product.id);

//     if (isFav) {
//       updated = favorites.filter((item) => item.id !== product.id);
//     } else {
//       updated = [...favorites, product];
//     }

//     setFavorites(updated);
//     localStorage.setItem('accesora_favorites', JSON.stringify(updated));
//     window.dispatchEvent(new Event('favoritesUpdated'));
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesCat = selectedCategory === 'Все' || product.category === selectedCategory;
//     const matchesSearch = (product.title || '').toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCat && matchesSearch;
//   });

//   // --- Скрытый вход в админ-панель: тройной клик по заголовку/логотипу ---
//   const handleLogoClick = () => {
//     // Если админ уже вошёл — тройной клик по заголовку не нужен
//     if (isAdmin) return;

//     logoClickCount.current += 1;

//     if (logoClickCount.current >= 3) {
//       logoClickCount.current = 0;
//       if (logoClickTimer.current) clearTimeout(logoClickTimer.current);
//       openPasswordModal();
//       return;
//     }

//     if (logoClickTimer.current) clearTimeout(logoClickTimer.current);
//     logoClickTimer.current = setTimeout(() => {
//       logoClickCount.current = 0;
//     }, 600);
//   };

//   const openPasswordModal = () => {
//     setPasswordInput('');
//     setPasswordError('');
//     setShowPasswordModal(true);
//   };

//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     if (passwordInput === ADMIN_PASSWORD) {
//       setShowPasswordModal(false);
//       setPasswordInput('');
//       setPasswordError('');
//       setIsAdmin(true);
//     } else {
//       setPasswordError('Неверный пароль. Попробуйте снова.');
//     }
//   };

//   const handleAdminLogout = () => {
//     setIsAdmin(false);
//     setShowAddProductModal(false);
//   };

//   // --- Логика формы добавления товара ---
//   const handleFormChange = (field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleOpenAddProductModal = () => {
//     setSubmitError('');
//     setSubmitSuccess('');
//     setShowAddProductModal(true);
//   };

//   const handleCloseAddProductModal = () => {
//     setShowAddProductModal(false);
//     resetForm();
//     setSubmitError('');
//     setSubmitSuccess('');
//   };

//   // --- Удаление товара из Supabase (без перезагрузки страницы) ---
//   const handleDeleteProduct = async (productId) => {
//     if (!window.confirm('Вы уверены, что хотите удалить этот товар?')) return;

//     setDeletingId(productId);

//     try {
//       const { error } = await supabase
//         .from('products')
//         .delete()
//         .eq('id', productId);

//       if (error) throw error;

//       // Локально убираем товар из состояния — страница не перезагружается
//       setProducts((prev) => prev.filter((p) => p.id !== productId));

//       // На случай если удалённый товар был открыт в модалке
//       setSelectedProduct((prev) => (prev && prev.id === productId ? null : prev));
//     } catch (err) {
//       console.error('Ошибка удаления товара:', err.message);
//       alert('Не удалось удалить товар: ' + err.message);
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   const resetForm = () => {
//     setForm(EMPTY_FORM);
//     setImageFile(null);
//     setImagePreview('');
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) {
//       setImageFile(null);
//       setImagePreview('');
//       return;
//     }
//     setImageFile(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const uploadImageToStorage = async (file) => {
//     // Берём расширение и оставляем только латинские буквы/цифры —
//     // если в оригинальном имени файла есть кириллица (даже "невидимая",
//     // например похожая на латиницу буква "Н"), это ломает HTTP-заголовки.
//     const rawExt = file.name.split('.').pop() || 'jpg';
//     const safeExt = rawExt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'jpg';
//     const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${safeExt}`;

//     // Пересоздаём File с новым безопасным именем, чтобы оригинальное имя
//     // (которое могло содержать кириллицу) нигде не использовалось при загрузке.
//     const safeFile = new File([file], fileName, {
//       type: file.type || 'application/octet-stream',
//     });

//     const { error: uploadError } = await supabase.storage
//       .from(STORAGE_BUCKET)
//       .upload(fileName, safeFile, {
//         cacheControl: '3600',
//         upsert: false,
//         contentType: safeFile.type,
//       });

//     if (uploadError) {
//       throw uploadError;
//     }

//     const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(fileName);
//     return data.publicUrl;
//   };

//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     setSubmitError('');
//     setSubmitSuccess('');

//     if (!form.title.trim() || !form.price) {
//       setSubmitError('Заполните хотя бы название и цену.');
//       return;
//     }

//     setSubmitting(true);

//     let imageUrl = '';

//     try {
//       if (imageFile) {
//         setUploadingImage(true);
//         imageUrl = await uploadImageToStorage(imageFile);
//         setUploadingImage(false);
//       }

//       const payload = {
//         title: form.title.trim(),
//         description: form.description.trim(),
//         price: Number(form.price),
//         image_url: imageUrl,
//         category: form.category,
//         phone: form.phone.trim(),
//         telegram: form.telegram.trim(),
//         whatsapp: form.whatsapp.trim(),
//       };

//       const { data, error } = await supabase
//         .from('products')
//         .insert([payload])
//         .select();

//       if (error) {
//         throw error;
//       }

//       if (data && data.length > 0) {
//         setProducts((prev) => [data[0], ...prev]);
//       } else {
//         fetchProducts();
//       }

//       setSubmitSuccess('Товар успешно добавлен!');
//       resetForm();
//     } catch (err) {
//       console.error('Ошибка добавления товара:', err.message);
//       setSubmitError('Не удалось сохранить товар: ' + err.message);
//     } finally {
//       setUploadingImage(false);
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Заголовок и поиск (кнопка админки скрыта — тройной клик по заголовку) */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//         <div className="flex items-center gap-3">
//           <div onClick={handleLogoClick} className="select-none">
//             <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Каталог товаров</h1>
//             <p className="text-sm text-slate-500 mt-1">Найдено товаров: {filteredProducts.length}</p>
//           </div>

//           {/* Постоянная видимая кнопка добавления товара — только для вошедшего админа */}
//           {isAdmin && (
//             <button
//               onClick={handleOpenAddProductModal}
//               className="hidden sm:flex items-center gap-2 h-11 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
//             >
//               <Plus className="w-4 h-4" />
//               Добавить товар
//             </button>
//           )}
//         </div>

//         <div className="flex items-center gap-2 w-full md:w-auto">
//           <div className="relative flex-1 md:w-80">
//             <input
//               type="text"
//               placeholder="Поиск по названию..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//             />
//             <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
//           </div>

//           {isAdmin && (
//             <button
//               onClick={handleAdminLogout}
//               title="Выйти из режима администратора"
//               className="shrink-0 h-11 w-11 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors cursor-pointer"
//             >
//               <LogOut className="w-4 h-4" />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Мобильная кнопка "Добавить товар" — на маленьких экранах шапка становится в столбец,
//           поэтому дублируем кнопку на всю ширину под поиском */}
//       {isAdmin && (
//         <button
//           onClick={handleOpenAddProductModal}
//           className="sm:hidden flex items-center justify-center gap-2 w-full h-11 mb-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors cursor-pointer"
//         >
//           <Plus className="w-4 h-4" />
//           Добавить товар
//         </button>
//       )}

//       {/* Горизонтальные Категории (без sidebar) */}
//       <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
//         {CATEGORIES.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
//               selectedCategory === cat
//                 ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
//                 : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Состояние загрузки */}
//       {loadingProducts && (
//         <div className="flex items-center justify-center py-20 text-slate-400 gap-2">
//           <Loader2 className="w-5 h-5 animate-spin" />
//           Загрузка товаров...
//         </div>
//       )}

//       {/* Сетка товаров */}
//       {!loadingProducts && (
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {filteredProducts.map((product) => {
//             const isFav = favorites.some((item) => item.id === product.id);
//             const isDeleting = deletingId === product.id;

//             return (
//               <div
//                 key={product.id}
//                 onClick={() => setSelectedProduct(product)}
//                 className="group bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
//               >
//                 {/* Кнопка Избранного */}
//                 <button
//                   onClick={(e) => toggleFavorite(e, product)}
//                   className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
//                   title={isFav ? 'Убрать из избранного' : 'Добавить в избранное'}
//                 >
//                   <Heart
//                     className={`w-5 h-5 transition-colors ${
//                       isFav ? 'text-red-500 fill-red-500' : 'text-slate-400 hover:text-red-500'
//                     }`}
//                   />
//                 </button>

//                 {/* Кнопка удаления — только в режиме админа, смещена левее сердечка чтобы не перекрывались */}
//                 {isAdmin && (
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleDeleteProduct(product.id);
//                     }}
//                     disabled={isDeleting}
//                     title="Удалить товар"
//                     className="absolute top-5 left-5 z-10 p-2 rounded-full bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
//                   >
//                     {isDeleting ? (
//                       <Loader2 className="w-4 h-4 animate-spin" />
//                     ) : (
//                       <X className="w-4 h-4" />
//                     )}
//                   </button>
//                 )}

//                 <div>
//                   <div className="w-full h-44 sm:h-52 bg-slate-50 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
//                     <img
//                       src={product.image_url}
//                       alt={product.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
//                     {product.category}
//                   </span>
//                   <h3 className="font-semibold text-slate-900 text-sm sm:text-base line-clamp-2 mt-0.5">
//                     {product.title}
//                   </h3>
//                 </div>

//                 <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
//                   <div>
//                     <span className="text-xs text-slate-400 block">Цена</span>
//                     <span className="text-base sm:text-lg font-bold text-slate-900">{product.price} TJS</span>
//                   </div>
//                   <span className="text-xs font-semibold text-blue-600 group-hover:underline">
//                     Подробнее →
//                   </span>
//                 </div>
//               </div>
//             );
//           })}

//           {filteredProducts.length === 0 && (
//             <div className="col-span-full text-center py-16 text-slate-400 text-sm">
//               Товары не найдены.
//             </div>
//           )}
//         </div>
//       )}

//       {/* Модальное окно товара */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
//           <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-150">
//             <button
//               onClick={() => setSelectedProduct(null)}
//               className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <img
//               src={selectedProduct.image_url}
//               alt={selectedProduct.title}
//               className="w-full h-56 object-cover rounded-2xl mb-4"
//             />

//             <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
//               {selectedProduct.category}
//             </span>
//             <h2 className="text-xl font-bold text-slate-900 mt-1">{selectedProduct.title}</h2>
//             <p className="text-slate-600 text-sm mt-2">{selectedProduct.description}</p>

//             <div className="my-4 p-3 bg-slate-50 rounded-xl flex items-center justify-between">
//               <span className="text-sm text-slate-500 font-medium">Стоимость:</span>
//               <span className="text-2xl font-black text-blue-600">{selectedProduct.price} TJS</span>
//             </div>

//             {/* Три кнопки связи — используют контакты конкретного товара */}
//             <div className="flex flex-col gap-2.5 mt-4">
//               {selectedProduct.phone && (
//                 <a
//                   href={`tel:${selectedProduct.phone}`}
//                   className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
//                 >
//                   <Phone className="w-5 h-5" />
//                   Позвонить
//                 </a>
//               )}
//               {selectedProduct.telegram && (
//                 <a
//                   href={`https://t.me/${selectedProduct.telegram.replace('@', '')}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-center gap-2 w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-colors"
//                 >
//                   <Send className="w-5 h-5" />
//                   Написать в Telegram
//                 </a>
//               )}
//               {selectedProduct.whatsapp && (
//                 <a
//                   href={`https://wa.me/${selectedProduct.whatsapp.replace(/\D/g, '')}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
//                 >
//                   <MessageCircle className="w-5 h-5" />
//                   Написать в WhatsApp
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Модальное окно ввода пароля (открывается скрытым тройным кликом) */}
//       {showPasswordModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
//           <div className="bg-white rounded-3xl max-w-sm w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-150">
//             <button
//               onClick={() => setShowPasswordModal(false)}
//               className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
//                 <Lock className="w-5 h-5 text-white" />
//               </div>
//               <h2 className="text-lg font-bold text-slate-900">Доступ к админ-панели</h2>
//             </div>

//             <form onSubmit={handlePasswordSubmit}>
//               <input
//                 type="password"
//                 autoFocus
//                 placeholder="Введите пароль"
//                 value={passwordInput}
//                 onChange={(e) => setPasswordInput(e.target.value)}
//                 className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//               />
//               {passwordError && (
//                 <p className="text-xs text-red-500 mt-2">{passwordError}</p>
//               )}
//               <button
//                 type="submit"
//                 className="w-full mt-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors cursor-pointer"
//               >
//                 Войти
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Модальное окно: форма добавления товара — открывается кнопкой "+ Добавить товар" */}
//       {showAddProductModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
//           <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-150">
//             <button
//               onClick={handleCloseAddProductModal}
//               className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="flex items-center gap-2 mb-5">
//               <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
//                 <Plus className="w-5 h-5 text-white" />
//               </div>
//               <h2 className="text-lg font-bold text-slate-900">Добавить новый товар</h2>
//             </div>

//             <form onSubmit={handleAddProduct} className="flex flex-col gap-3">
//               <div>
//                 <label className="text-xs font-semibold text-slate-500 block mb-1">Название</label>
//                 <input
//                   type="text"
//                   value={form.title}
//                   onChange={(e) => handleFormChange('title', e.target.value)}
//                   className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                   placeholder="Например: Беспроводные наушники Pro 2"
//                 />
//               </div>

//               <div>
//                 <label className="text-xs font-semibold text-slate-500 block mb-1">Описание</label>
//                 <textarea
//                   value={form.description}
//                   onChange={(e) => handleFormChange('description', e.target.value)}
//                   rows={3}
//                   className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                   placeholder="Краткое описание товара"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">Цена (TJS)</label>
//                   <input
//                     type="number"
//                     min="0"
//                     step="0.01"
//                     value={form.price}
//                     onChange={(e) => handleFormChange('price', e.target.value)}
//                     className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                     placeholder="450"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">Категория</label>
//                   <select
//                     value={form.category}
//                     onChange={(e) => handleFormChange('category', e.target.value)}
//                     className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                   >
//                     {CATEGORIES.filter((c) => c !== 'Все').map((cat) => (
//                       <option key={cat} value={cat}>{cat}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Загрузка изображения из галереи/файловой системы */}
//               <div>
//                 <label className="text-xs font-semibold text-slate-500 block mb-1">Фото товара</label>
//                 <label className="flex items-center gap-3 w-full px-4 py-3 bg-slate-50 border border-dashed border-slate-300 rounded-xl text-sm cursor-pointer hover:bg-slate-100 transition-colors">
//                   <ImageIcon className="w-5 h-5 text-slate-400 shrink-0" />
//                   <span className="text-slate-500 truncate">
//                     {imageFile ? imageFile.name : 'Выбрать файл из галереи или ПК'}
//                   </span>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="hidden"
//                   />
//                 </label>
//                 {imagePreview && (
//                   <div className="w-full h-40 bg-slate-50 rounded-xl overflow-hidden mt-2 flex items-center justify-center">
//                     <img src={imagePreview} alt="Предпросмотр" className="w-full h-full object-cover" />
//                   </div>
//                 )}
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">Телефон</label>
//                   <input
//                     type="text"
//                     value={form.phone}
//                     onChange={(e) => handleFormChange('phone', e.target.value)}
//                     className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                     placeholder="+992900000000"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">Telegram</label>
//                   <input
//                     type="text"
//                     value={form.telegram}
//                     onChange={(e) => handleFormChange('telegram', e.target.value)}
//                     className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                     placeholder="username"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">WhatsApp</label>
//                   <input
//                     type="text"
//                     value={form.whatsapp}
//                     onChange={(e) => handleFormChange('whatsapp', e.target.value)}
//                     className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                     placeholder="992900000000"
//                   />
//                 </div>
//               </div>

//               {submitError && <p className="text-xs text-red-500">{submitError}</p>}
//               {submitSuccess && <p className="text-xs text-emerald-600">{submitSuccess}</p>}

//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
//               >
//                 {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
//                 {uploadingImage ? 'Загрузка фото...' : submitting ? 'Сохранение...' : 'Добавить товар'}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect, useRef } from 'react';
import { Heart, Search, Phone, Send, MessageCircle, X, Lock, Plus, Loader2, ImageIcon, LogOut } from 'lucide-react';
import { supabase } from '../supabase';


const ADMIN_PASSWORD = 'admin123';

const STORAGE_BUCKET = 'product-images';

const DEFAULT_PHONE = '+992927619070';
const DEFAULT_TELEGRAM = 'your_username';
const DEFAULT_WHATSAPP = '992927619070';

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
  // isAdmin — админ вошёл в систему (сохраняется, пока не нажмёт "Выйти")
  const [isAdmin, setIsAdmin] = useState(false);
  // showAddProductModal — открыто ли модальное окно добавления товара
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

  // --- Скрытый вход в админ-панель: тройной клик по заголовку/логотипу ---
  const handleLogoClick = () => {
    // Если админ уже вошёл — тройной клик по заголовку не нужен
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
  };

  // --- Логика формы добавления товара ---
  const handleFormChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleOpenAddProductModal = () => {
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
      // .select() важен: без него Supabase не вернёт удалённые строки,
      // и мы не сможем отличить "удалено" от "RLS молча заблокировал,
      // удалено 0 строк, но error === null".
      const { data, error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId)
        .select();

      if (error) throw error;

      if (!data || data.length === 0) {
        // Запрос прошёл без ошибки, но ни одна строка не была удалена —
        // почти всегда означает, что RLS-политика на DELETE не разрешает
        // это действие для текущей роли (anon). Нужно добавить/проверить
        // policy на DELETE для таблицы products в Supabase.
        throw new Error(
          'Товар не найден или удаление запрещено политикой доступа (RLS) в Supabase.'
        );
      }

      // Локально убираем товар из состояния — страница не перезагружается
      setProducts((prev) => prev.filter((p) => p.id !== productId));

      // На случай если удалённый товар был открыт в модалке
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
    // Берём расширение и оставляем только латинские буквы/цифры —
    // если в оригинальном имени файла есть кириллица (даже "невидимая",
    // например похожая на латиницу буква "Н"), это ломает HTTP-заголовки.
    const rawExt = file.name.split('.').pop() || 'jpg';
    const safeExt = rawExt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'jpg';
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${safeExt}`;

    // Пересоздаём File с новым безопасным именем, чтобы оригинальное имя
    // (которое могло содержать кириллицу) нигде не использовалось при загрузке.
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

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Заголовок и поиск (кнопка админки скрыта — тройной клик по заголовку) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div onClick={handleLogoClick} className="select-none">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Каталог товаров</h1>
            <p className="text-sm text-slate-500 mt-1">Найдено товаров: {filteredProducts.length}</p>
          </div>

          {/* Постоянная видимая кнопка добавления товара — только для вошедшего админа */}
          {isAdmin && (
            <button
              onClick={handleOpenAddProductModal}
              className="hidden sm:flex items-center gap-2 h-11 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4" />
              Добавить товар
            </button>
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
              onClick={handleAdminLogout}
              title="Выйти из режима администратора"
              className="shrink-0 h-11 w-11 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Мобильная кнопка "Добавить товар" — на маленьких экранах шапка становится в столбец,
          поэтому дублируем кнопку на всю ширину под поиском */}
      {isAdmin && (
        <button
          onClick={handleOpenAddProductModal}
          className="sm:hidden flex items-center justify-center gap-2 w-full h-11 mb-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Добавить товар
        </button>
      )}

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
                {/* Кнопка Избранного */}
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

                {/* Кнопка удаления — только в режиме админа, смещена левее сердечка чтобы не перекрывались */}
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

            {/* Три кнопки связи — используют контакты конкретного товара */}
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

      {/* Модальное окно ввода пароля (открывается скрытым тройным кликом) */}
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

      {/* Модальное окно: форма добавления товара — открывается кнопкой "+ Добавить товар" */}
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

              {/* Загрузка изображения из галереи/файловой системы */}
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
    </div>
  );
}


// import React, { useState, useEffect, useRef } from 'react';
// import {
//   Heart, Search, Phone, Send, MessageCircle, X, Lock, Plus, Loader2, ImageIcon,
//   LogOut, User, Users, Pencil, Ban, CheckCircle2, Trash2, KeyRound, CalendarPlus,
// } from 'lucide-react';
// import { supabase } from '../supabase';


// const ADMIN_PASSWORD = 'admin123';

// const STORAGE_BUCKET = 'product-images';

// const DEFAULT_PHONE = '+992927619070';
// const DEFAULT_TELEGRAM = 'your_username';
// const DEFAULT_WHATSAPP = '992927619070';

// const SELLER_SESSION_KEY = 'accesora_seller_session';

// const CATEGORIES = ['Все', 'Электроника', 'Одежда', 'Дом', 'Еда', 'Аксессуары'];

// const EMPTY_FORM = {
//   title: '',
//   description: '',
//   price: '',
//   category: 'Электроника',
//   phone: DEFAULT_PHONE,
//   telegram: DEFAULT_TELEGRAM,
//   whatsapp: DEFAULT_WHATSAPP,
// };

// const formatDate = (value) => {
//   if (!value) return '—';
//   try {
//     return new Date(value).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
//   } catch {
//     return value;
//   }
// };

// export default function Catalog() {
//   // --- Витрина ---
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('Все');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [favorites, setFavorites] = useState([]);

//   // --- Главный админ (существующий скрытый вход — не тронут) ---
//   const [showPasswordModal, setShowPasswordModal] = useState(false);
//   const [passwordInput, setPasswordInput] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [isAdmin, setIsAdmin] = useState(false);
//   const logoClickCount = useRef(0);
//   const logoClickTimer = useRef(null);

//   // --- Панель "Продавцы" (главный админ) ---
//   const [showSellersPanel, setShowSellersPanel] = useState(false);
//   const [sellers, setSellers] = useState([]);
//   const [sellersLoading, setSellersLoading] = useState(false);
//   const [sellerActionLoadingId, setSellerActionLoadingId] = useState(null);
//   const [showAddSellerInlineForm, setShowAddSellerInlineForm] = useState(false);
//   const [sellerCreateForm, setSellerCreateForm] = useState({ name: '', password: '', days: 30 });
//   const [sellerCreateSubmitting, setSellerCreateSubmitting] = useState(false);
//   const [sellerCreateError, setSellerCreateError] = useState('');

//   // --- Продавец: сессия / вход / кабинет ---
//   const [sellerSession, setSellerSession] = useState(null); // {token, sellerId, name, status, expiresAt}
//   const [showSellerLoginModal, setShowSellerLoginModal] = useState(false);
//   const [sellerLoginPassword, setSellerLoginPassword] = useState('');
//   const [sellerLoginError, setSellerLoginError] = useState('');
//   const [sellerLoginSubmitting, setSellerLoginSubmitting] = useState(false);
//   const [showSellerDashboard, setShowSellerDashboard] = useState(false);

//   // --- Форма добавления/редактирования товара (общая для админа и продавца) ---
//   // productFormMode: null | { role: 'admin' | 'seller', action: 'add' | 'edit', productId? }
//   const [productFormMode, setProductFormMode] = useState(null);
//   const [form, setForm] = useState(EMPTY_FORM);
//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState('');
//   const [editImageUrl, setEditImageUrl] = useState('');
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState('');
//   const [submitSuccess, setSubmitSuccess] = useState('');

//   // --- Удаление товара ---
//   const [deletingId, setDeletingId] = useState(null);

//   useEffect(() => {
//     try {
//       const saved = localStorage.getItem('accesora_favorites');
//       setFavorites(saved ? JSON.parse(saved) : []);
//     } catch {
//       setFavorites([]);
//     }
//   }, []);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Восстановление сессии продавца при обновлении страницы
//   useEffect(() => {
//     const token = localStorage.getItem(SELLER_SESSION_KEY);
//     if (!token) return;

//     (async () => {
//       const { data, error } = await supabase.rpc('seller_session_info', { p_session_token: token });
//       if (error || !data || data.length === 0) {
//         localStorage.removeItem(SELLER_SESSION_KEY);
//         return;
//       }
//       const row = data[0];
//       setSellerSession({
//         token,
//         sellerId: row.seller_id,
//         name: row.name,
//         status: row.status,
//         expiresAt: row.expires_at,
//       });
//     })();
//   }, []);

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     const { data, error } = await supabase
//       .from('products')
//       .select('*')
//       .order('created_at', { ascending: false });

//     if (error) {
//       console.error('Ошибка загрузки товаров:', error.message);
//       setProducts([]);
//     } else {
//       setProducts(data || []);
//     }
//     setLoadingProducts(false);
//   };

//   const toggleFavorite = (e, product) => {
//     e.stopPropagation();
//     let updated;
//     const isFav = favorites.some((item) => item.id === product.id);

//     if (isFav) {
//       updated = favorites.filter((item) => item.id !== product.id);
//     } else {
//       updated = [...favorites, product];
//     }

//     setFavorites(updated);
//     localStorage.setItem('accesora_favorites', JSON.stringify(updated));
//     window.dispatchEvent(new Event('favoritesUpdated'));
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesCat = selectedCategory === 'Все' || product.category === selectedCategory;
//     const matchesSearch = (product.title || '').toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCat && matchesSearch;
//   });

//   const myProducts = sellerSession
//     ? products.filter((p) => p.seller_id === sellerSession.sellerId)
//     : [];

//   // --- Скрытый вход в админ-панель: тройной клик по заголовку/логотипу ---
//   const handleLogoClick = () => {
//     if (isAdmin) return;

//     logoClickCount.current += 1;

//     if (logoClickCount.current >= 3) {
//       logoClickCount.current = 0;
//       if (logoClickTimer.current) clearTimeout(logoClickTimer.current);
//       openPasswordModal();
//       return;
//     }

//     if (logoClickTimer.current) clearTimeout(logoClickTimer.current);
//     logoClickTimer.current = setTimeout(() => {
//       logoClickCount.current = 0;
//     }, 600);
//   };

//   const openPasswordModal = () => {
//     setPasswordInput('');
//     setPasswordError('');
//     setShowPasswordModal(true);
//   };

//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     if (passwordInput === ADMIN_PASSWORD) {
//       setShowPasswordModal(false);
//       setPasswordInput('');
//       setPasswordError('');
//       setIsAdmin(true);
//     } else {
//       setPasswordError('Неверный пароль. Попробуйте снова.');
//     }
//   };

//   const handleAdminLogout = () => {
//     setIsAdmin(false);
//     setShowSellersPanel(false);
//     if (productFormMode?.role === 'admin') closeProductFormModal();
//   };

//   // ==========================================================
//   // ПРОДАВЦЫ (главный админ)
//   // ==========================================================
//   const fetchSellers = async () => {
//     setSellersLoading(true);
//     const { data, error } = await supabase.rpc('admin_list_sellers');
//     if (error) {
//       console.error('Ошибка загрузки продавцов:', error.message);
//       setSellers([]);
//     } else {
//       setSellers(data || []);
//     }
//     setSellersLoading(false);
//   };

//   const handleOpenSellersPanel = () => {
//     setShowSellersPanel(true);
//     fetchSellers();
//   };

//   const handleCreateSeller = async (e) => {
//     e.preventDefault();
//     setSellerCreateError('');

//     if (!sellerCreateForm.name.trim() || !sellerCreateForm.password.trim() || !sellerCreateForm.days) {
//       setSellerCreateError('Заполните все поля.');
//       return;
//     }

//     setSellerCreateSubmitting(true);
//     try {
//       const { data, error } = await supabase.rpc('admin_create_seller', {
//         p_name: sellerCreateForm.name.trim(),
//         p_password: sellerCreateForm.password,
//         p_days: Number(sellerCreateForm.days),
//       });
//       if (error) throw error;

//       setSellers((prev) => [data[0], ...prev]);
//       setSellerCreateForm({ name: '', password: '', days: 30 });
//       setShowAddSellerInlineForm(false);
//     } catch (err) {
//       setSellerCreateError('Не удалось создать продавца: ' + err.message);
//     } finally {
//       setSellerCreateSubmitting(false);
//     }
//   };

//   const handleToggleSellerStatus = async (seller) => {
//     const newStatus = seller.status === 'blocked' ? 'active' : 'blocked';
//     setSellerActionLoadingId(seller.id);
//     try {
//       const { error } = await supabase.rpc('admin_set_seller_status', {
//         p_seller_id: seller.id,
//         p_status: newStatus,
//       });
//       if (error) throw error;
//       setSellers((prev) => prev.map((s) => (s.id === seller.id ? { ...s, status: newStatus } : s)));
//     } catch (err) {
//       alert('Не удалось изменить статус продавца: ' + err.message);
//     } finally {
//       setSellerActionLoadingId(null);
//     }
//   };

//   const handleExtendSeller = async (seller) => {
//     const daysStr = window.prompt('На сколько дней продлить доступ?', '30');
//     if (!daysStr) return;
//     const days = Number(daysStr);
//     if (!days || days <= 0) return;

//     setSellerActionLoadingId(seller.id);
//     try {
//       const { data, error } = await supabase.rpc('admin_extend_seller', {
//         p_seller_id: seller.id,
//         p_days: days,
//       });
//       if (error) throw error;
//       const newExpiry = data && data[0] ? data[0].expires_at : seller.expires_at;
//       setSellers((prev) => prev.map((s) => (s.id === seller.id ? { ...s, expires_at: newExpiry } : s)));
//     } catch (err) {
//       alert('Не удалось продлить доступ: ' + err.message);
//     } finally {
//       setSellerActionLoadingId(null);
//     }
//   };

//   const handleResetSellerPassword = async (seller) => {
//     const newPassword = window.prompt(`Новый пароль для продавца "${seller.name}":`);
//     if (!newPassword || !newPassword.trim()) return;

//     setSellerActionLoadingId(seller.id);
//     try {
//       const { error } = await supabase.rpc('admin_reset_seller_password', {
//         p_seller_id: seller.id,
//         p_new_password: newPassword.trim(),
//       });
//       if (error) throw error;
//       alert('Пароль продавца обновлён.');
//     } catch (err) {
//       alert('Не удалось изменить пароль: ' + err.message);
//     } finally {
//       setSellerActionLoadingId(null);
//     }
//   };

//   const handleDeleteSeller = async (seller) => {
//     if (!window.confirm(`Удалить продавца "${seller.name}"?`)) return;

//     setSellerActionLoadingId(seller.id);
//     try {
//       const { error } = await supabase.rpc('admin_delete_seller', { p_seller_id: seller.id });
//       if (error) throw error;
//       setSellers((prev) => prev.filter((s) => s.id !== seller.id));
//     } catch (err) {
//       alert('Не удалось удалить продавца: ' + err.message);
//     } finally {
//       setSellerActionLoadingId(null);
//     }
//   };

//   // ==========================================================
//   // ПРОДАВЕЦ: вход / выход / кабинет
//   // ==========================================================
//   const handleUserIconClick = () => {
//     if (sellerSession) {
//       setShowSellerDashboard(true);
//     } else {
//       setSellerLoginError('');
//       setSellerLoginPassword('');
//       setShowSellerLoginModal(true);
//     }
//   };

//   const handleSellerLogin = async (e) => {
//     e.preventDefault();
//     setSellerLoginError('');

//     if (!sellerLoginPassword.trim()) {
//       setSellerLoginError('Введите пароль.');
//       return;
//     }

//     setSellerLoginSubmitting(true);
//     try {
//       const { data, error } = await supabase.rpc('seller_login', { p_password: sellerLoginPassword });

//       if (error) {
//         if (error.message.includes('BLOCKED')) {
//           setSellerLoginError('Ваш доступ заблокирован.');
//         } else if (error.message.includes('EXPIRED')) {
//           setSellerLoginError('Срок доступа закончился. Обратитесь к администратору.');
//         } else {
//           setSellerLoginError('Неверный пароль.');
//         }
//         return;
//       }

//       const row = data && data[0];
//       if (!row) {
//         setSellerLoginError('Неверный пароль.');
//         return;
//       }

//       const session = {
//         token: row.session_token,
//         sellerId: row.seller_id,
//         name: row.name,
//         status: row.status,
//         expiresAt: row.expires_at,
//       };
//       setSellerSession(session);
//       localStorage.setItem(SELLER_SESSION_KEY, row.session_token);
//       setSellerLoginPassword('');
//       setShowSellerLoginModal(false);
//       setShowSellerDashboard(true);
//     } catch (err) {
//       setSellerLoginError('Ошибка входа: ' + err.message);
//     } finally {
//       setSellerLoginSubmitting(false);
//     }
//   };

//   const handleSellerLogout = () => {
//     setSellerSession(null);
//     localStorage.removeItem(SELLER_SESSION_KEY);
//     setShowSellerDashboard(false);
//     if (productFormMode?.role === 'seller') closeProductFormModal();
//   };

//   // Если сессия истекла/отозвана прямо во время действия — разлогиниваем
//   // и просим войти заново, вместо того чтобы тихо ничего не делать.
//   const handleSellerAuthError = (err) => {
//     if (err?.message && err.message.includes('SESSION_EXPIRED')) {
//       handleSellerLogout();
//       alert('Сессия истекла или доступ отозван администратором. Пожалуйста, войдите снова.');
//       return true;
//     }
//     return false;
//   };

//   // ==========================================================
//   // Форма добавления / редактирования товара (общая)
//   // ==========================================================
//   const handleFormChange = (field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   const resetForm = () => {
//     setForm(EMPTY_FORM);
//     setImageFile(null);
//     setImagePreview('');
//   };

//   const openAddProductModal = (role) => {
//     resetForm();
//     setEditImageUrl('');
//     setSubmitError('');
//     setSubmitSuccess('');
//     setProductFormMode({ role, action: 'add' });
//   };

//   const openEditProductModal = (role, product) => {
//     setForm({
//       title: product.title || '',
//       description: product.description || '',
//       price: product.price ?? '',
//       category: product.category || CATEGORIES[1],
//       phone: product.phone || DEFAULT_PHONE,
//       telegram: product.telegram || DEFAULT_TELEGRAM,
//       whatsapp: product.whatsapp || DEFAULT_WHATSAPP,
//     });
//     setImageFile(null);
//     setImagePreview(product.image_url || '');
//     setEditImageUrl(product.image_url || '');
//     setSubmitError('');
//     setSubmitSuccess('');
//     setProductFormMode({ role, action: 'edit', productId: product.id });
//   };

//   const closeProductFormModal = () => {
//     setProductFormMode(null);
//     resetForm();
//     setEditImageUrl('');
//     setSubmitError('');
//     setSubmitSuccess('');
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) {
//       setImageFile(null);
//       setImagePreview('');
//       return;
//     }
//     setImageFile(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const uploadImageToStorage = async (file) => {
//     // Берём расширение и оставляем только латинские буквы/цифры —
//     // если в оригинальном имени файла есть кириллица (даже "невидимая",
//     // например похожая на латиницу буква "Н"), это ломает HTTP-заголовки.
//     const rawExt = file.name.split('.').pop() || 'jpg';
//     const safeExt = rawExt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() || 'jpg';
//     const fileName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${safeExt}`;

//     // Пересоздаём File с новым безопасным именем, чтобы оригинальное имя
//     // (которое могло содержать кириллицу) нигде не использовалось при загрузке.
//     const safeFile = new File([file], fileName, {
//       type: file.type || 'application/octet-stream',
//     });

//     const { error: uploadError } = await supabase.storage
//       .from(STORAGE_BUCKET)
//       .upload(fileName, safeFile, {
//         cacheControl: '3600',
//         upsert: false,
//         contentType: safeFile.type,
//       });

//     if (uploadError) {
//       throw uploadError;
//     }

//     const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(fileName);
//     return data.publicUrl;
//   };

//   // Добавление/редактирование товара — вызывает нужную RPC-функцию
//   // в зависимости от того, кто сохраняет (admin/seller) и что делает (add/edit).
//   // seller_id для продавца НИКОГДА не идёт с фронтенда — он определяется
//   // на сервере по токену сессии внутри RPC-функции.
//   const handleSubmitProductForm = async (e) => {
//     e.preventDefault();
//     setSubmitError('');
//     setSubmitSuccess('');

//     if (!form.title.trim() || !form.price) {
//       setSubmitError('Заполните хотя бы название и цену.');
//       return;
//     }
//     if (!productFormMode) return;

//     setSubmitting(true);

//     try {
//       let imageUrl = editImageUrl;
//       if (imageFile) {
//         setUploadingImage(true);
//         imageUrl = await uploadImageToStorage(imageFile);
//         setUploadingImage(false);
//       }

//       const basePayload = {
//         p_title: form.title.trim(),
//         p_description: form.description.trim(),
//         p_price: Number(form.price),
//         p_image_url: imageUrl || '',
//         p_category: form.category,
//         p_phone: form.phone.trim(),
//         p_telegram: form.telegram.trim(),
//         p_whatsapp: form.whatsapp.trim(),
//       };

//       const { role, action, productId } = productFormMode;
//       let result;

//       if (action === 'add') {
//         result = role === 'admin'
//           ? await supabase.rpc('admin_add_product', basePayload)
//           : await supabase.rpc('seller_add_product', { p_session_token: sellerSession?.token, ...basePayload });
//       } else {
//         const payload = { p_product_id: productId, ...basePayload };
//         result = role === 'admin'
//           ? await supabase.rpc('admin_update_product', payload)
//           : await supabase.rpc('seller_update_product', { p_session_token: sellerSession?.token, ...payload });
//       }

//       const { data, error } = result;
//       if (error) {
//         if (handleSellerAuthError(error)) return;
//         throw error;
//       }

//       const savedProduct = data && data[0];
//       if (savedProduct) {
//         setProducts((prev) => {
//           const exists = prev.some((p) => p.id === savedProduct.id);
//           return exists
//             ? prev.map((p) => (p.id === savedProduct.id ? savedProduct : p))
//             : [savedProduct, ...prev];
//         });
//       } else {
//         fetchProducts();
//       }

//       setSubmitSuccess(action === 'add' ? 'Товар успешно добавлен!' : 'Товар обновлён!');
//       resetForm();
//       setEditImageUrl('');
//       setProductFormMode(null);
//     } catch (err) {
//       console.error('Ошибка сохранения товара:', err.message);
//       setSubmitError('Не удалось сохранить товар: ' + err.message);
//     } finally {
//       setUploadingImage(false);
//       setSubmitting(false);
//     }
//   };

//   // Удаление товара из Supabase (без перезагрузки страницы).
//   // role определяет, какая RPC вызывается: admin_delete_product — без
//   // ограничений, seller_delete_product — только если товар принадлежит
//   // текущему продавцу (проверяется на сервере по токену сессии).
//   const handleDeleteProduct = async (productId, role = 'admin') => {
//     if (!window.confirm('Вы уверены, что хотите удалить этот товар?')) return;

//     setDeletingId(productId);

//     try {
//       const result = role === 'admin'
//         ? await supabase.rpc('admin_delete_product', { p_product_id: productId })
//         : await supabase.rpc('seller_delete_product', { p_session_token: sellerSession?.token, p_product_id: productId });

//       const { error } = result;
//       if (error) {
//         if (handleSellerAuthError(error)) return;
//         throw error;
//       }

//       setProducts((prev) => prev.filter((p) => p.id !== productId));
//       setSelectedProduct((prev) => (prev && prev.id === productId ? null : prev));
//     } catch (err) {
//       console.error('Ошибка удаления товара:', err.message);
//       alert('Не удалось удалить товар: ' + err.message);
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   return (
//     <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Заголовок и поиск (кнопка админки скрыта — тройной клик по заголовку) */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//         <div className="flex items-center gap-3 flex-wrap">
//           <div onClick={handleLogoClick} className="select-none">
//             <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Каталог товаров</h1>
//             <p className="text-sm text-slate-500 mt-1">Найдено товаров: {filteredProducts.length}</p>
//           </div>

//           {isAdmin && (
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => openAddProductModal('admin')}
//                 className="hidden sm:flex items-center gap-2 h-11 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
//               >
//                 <Plus className="w-4 h-4" />
//                 Добавить товар
//               </button>
//               <button
//                 onClick={handleOpenSellersPanel}
//                 className="hidden sm:flex items-center gap-2 h-11 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
//               >
//                 <Users className="w-4 h-4" />
//                 Продавцы
//               </button>
//             </div>
//           )}
//         </div>

//         <div className="flex items-center gap-2 w-full md:w-auto">
//           <div className="relative flex-1 md:w-80">
//             <input
//               type="text"
//               placeholder="Поиск по названию..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//             />
//             <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
//           </div>

//           {/* Иконка кабинета продавца */}
//           <button
//             onClick={handleUserIconClick}
//             title="Кабинет продавца"
//             className="shrink-0 h-11 w-11 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors cursor-pointer relative"
//           >
//             <User className="w-4 h-4" />
//             {sellerSession && (
//               <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500" />
//             )}
//           </button>

//           {isAdmin && (
//             <button
//               onClick={handleAdminLogout}
//               title="Выйти из режима администратора"
//               className="shrink-0 h-11 w-11 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-colors cursor-pointer"
//             >
//               <LogOut className="w-4 h-4" />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Мобильные кнопки админа — шапка складывается в столбец на маленьких экранах */}
//       {isAdmin && (
//         <div className="sm:hidden flex flex-col gap-2 mb-6">
//           <button
//             onClick={() => openAddProductModal('admin')}
//             className="flex items-center justify-center gap-2 w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors cursor-pointer"
//           >
//             <Plus className="w-4 h-4" />
//             Добавить товар
//           </button>
//           <button
//             onClick={handleOpenSellersPanel}
//             className="flex items-center justify-center gap-2 w-full h-11 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors cursor-pointer"
//           >
//             <Users className="w-4 h-4" />
//             Продавцы
//           </button>
//         </div>
//       )}

//       {/* Горизонтальные Категории (без sidebar) */}
//       <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
//         {CATEGORIES.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
//               selectedCategory === cat
//                 ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
//                 : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Состояние загрузки */}
//       {loadingProducts && (
//         <div className="flex items-center justify-center py-20 text-slate-400 gap-2">
//           <Loader2 className="w-5 h-5 animate-spin" />
//           Загрузка товаров...
//         </div>
//       )}

//       {/* Сетка товаров */}
//       {!loadingProducts && (
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {filteredProducts.map((product) => {
//             const isFav = favorites.some((item) => item.id === product.id);
//             const isDeleting = deletingId === product.id;

//             return (
//               <div
//                 key={product.id}
//                 onClick={() => setSelectedProduct(product)}
//                 className="group bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
//               >
//                 {/* Кнопка Избранного */}
//                 <button
//                   onClick={(e) => toggleFavorite(e, product)}
//                   className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
//                   title={isFav ? 'Убрать из избранного' : 'Добавить в избранное'}
//                 >
//                   <Heart
//                     className={`w-5 h-5 transition-colors ${
//                       isFav ? 'text-red-500 fill-red-500' : 'text-slate-400 hover:text-red-500'
//                     }`}
//                   />
//                 </button>

//                 {/* Кнопки редактирования/удаления — только в режиме главного админа */}
//                 {isAdmin && (
//                   <div className="absolute top-5 left-5 z-10 flex items-center gap-1.5">
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         openEditProductModal('admin', product);
//                       }}
//                       title="Редактировать товар"
//                       className="p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer text-slate-600 hover:text-blue-600"
//                     >
//                       <Pencil className="w-4 h-4" />
//                     </button>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleDeleteProduct(product.id, 'admin');
//                       }}
//                       disabled={isDeleting}
//                       title="Удалить товар"
//                       className="p-2 rounded-full bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer"
//                     >
//                       {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <X className="w-4 h-4" />}
//                     </button>
//                   </div>
//                 )}

//                 <div>
//                   <div className="w-full h-44 sm:h-52 bg-slate-50 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
//                     <img
//                       src={product.image_url}
//                       alt={product.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
//                     {product.category}
//                   </span>
//                   <h3 className="font-semibold text-slate-900 text-sm sm:text-base line-clamp-2 mt-0.5">
//                     {product.title}
//                   </h3>
//                 </div>

//                 <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
//                   <div>
//                     <span className="text-xs text-slate-400 block">Цена</span>
//                     <span className="text-base sm:text-lg font-bold text-slate-900">{product.price} TJS</span>
//                   </div>
//                   <span className="text-xs font-semibold text-blue-600 group-hover:underline">
//                     Подробнее →
//                   </span>
//                 </div>
//               </div>
//             );
//           })}

//           {filteredProducts.length === 0 && (
//             <div className="col-span-full text-center py-16 text-slate-400 text-sm">
//               Товары не найдены.
//             </div>
//           )}
//         </div>
//       )}

//       {/* Модальное окно товара */}
//       {selectedProduct && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
//           <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-150">
//             <button
//               onClick={() => setSelectedProduct(null)}
//               className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <img
//               src={selectedProduct.image_url}
//               alt={selectedProduct.title}
//               className="w-full h-56 object-cover rounded-2xl mb-4"
//             />

//             <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
//               {selectedProduct.category}
//             </span>
//             <h2 className="text-xl font-bold text-slate-900 mt-1">{selectedProduct.title}</h2>
//             <p className="text-slate-600 text-sm mt-2">{selectedProduct.description}</p>

//             <div className="my-4 p-3 bg-slate-50 rounded-xl flex items-center justify-between">
//               <span className="text-sm text-slate-500 font-medium">Стоимость:</span>
//               <span className="text-2xl font-black text-blue-600">{selectedProduct.price} TJS</span>
//             </div>

//             {/* Три кнопки связи — используют контакты конкретного товара */}
//             <div className="flex flex-col gap-2.5 mt-4">
//               {selectedProduct.phone && (
//                 <a
//                   href={`tel:${selectedProduct.phone}`}
//                   className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
//                 >
//                   <Phone className="w-5 h-5" />
//                   Позвонить
//                 </a>
//               )}
//               {selectedProduct.telegram && (
//                 <a
//                   href={`https://t.me/${selectedProduct.telegram.replace('@', '')}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-center gap-2 w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-colors"
//                 >
//                   <Send className="w-5 h-5" />
//                   Написать в Telegram
//                 </a>
//               )}
//               {selectedProduct.whatsapp && (
//                 <a
//                   href={`https://wa.me/${selectedProduct.whatsapp.replace(/\D/g, '')}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
//                 >
//                   <MessageCircle className="w-5 h-5" />
//                   Написать в WhatsApp
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Модальное окно ввода пароля главного админа (тройной клик по заголовку) */}
//       {showPasswordModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
//           <div className="bg-white rounded-3xl max-w-sm w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-150">
//             <button
//               onClick={() => setShowPasswordModal(false)}
//               className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
//                 <Lock className="w-5 h-5 text-white" />
//               </div>
//               <h2 className="text-lg font-bold text-slate-900">Доступ к админ-панели</h2>
//             </div>

//             <form onSubmit={handlePasswordSubmit}>
//               <input
//                 type="password"
//                 autoFocus
//                 placeholder="Введите пароль"
//                 value={passwordInput}
//                 onChange={(e) => setPasswordInput(e.target.value)}
//                 className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//               />
//               {passwordError && (
//                 <p className="text-xs text-red-500 mt-2">{passwordError}</p>
//               )}
//               <button
//                 type="submit"
//                 className="w-full mt-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors cursor-pointer"
//               >
//                 Войти
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Модальное окно: "Продавцы" — раздел главного админа */}
//       {showSellersPanel && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
//           <div className="bg-white rounded-3xl max-w-2xl w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-150">
//             <button
//               onClick={() => setShowSellersPanel(false)}
//               className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="flex items-center justify-between gap-3 mb-5 pr-10">
//               <div className="flex items-center gap-2">
//                 <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
//                   <Users className="w-5 h-5 text-white" />
//                 </div>
//                 <h2 className="text-lg font-bold text-slate-900">Продавцы</h2>
//               </div>
//               <button
//                 onClick={() => setShowAddSellerInlineForm((v) => !v)}
//                 className="flex items-center gap-2 h-10 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
//               >
//                 <Plus className="w-4 h-4" />
//                 Добавить продавца
//               </button>
//             </div>

//             {/* Форма создания продавца */}
//             {showAddSellerInlineForm && (
//               <form
//                 onSubmit={handleCreateSeller}
//                 className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-3"
//               >
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">Имя продавца</label>
//                   <input
//                     type="text"
//                     value={sellerCreateForm.name}
//                     onChange={(e) => setSellerCreateForm((p) => ({ ...p, name: e.target.value }))}
//                     className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                     placeholder="Рустам"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">Пароль</label>
//                   <input
//                     type="text"
//                     value={sellerCreateForm.password}
//                     onChange={(e) => setSellerCreateForm((p) => ({ ...p, password: e.target.value }))}
//                     className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                     placeholder="583921"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">Срок доступа (дней)</label>
//                   <input
//                     type="number"
//                     min="1"
//                     value={sellerCreateForm.days}
//                     onChange={(e) => setSellerCreateForm((p) => ({ ...p, days: e.target.value }))}
//                     className="w-full h-11 px-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                     placeholder="30"
//                   />
//                 </div>

//                 {sellerCreateError && (
//                   <p className="text-xs text-red-500 sm:col-span-3">{sellerCreateError}</p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={sellerCreateSubmitting}
//                   className="sm:col-span-3 h-11 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
//                 >
//                   {sellerCreateSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
//                   Создать продавца
//                 </button>
//               </form>
//             )}

//             {/* Список продавцов */}
//             {sellersLoading ? (
//               <div className="flex items-center justify-center py-10 text-slate-400 gap-2">
//                 <Loader2 className="w-5 h-5 animate-spin" />
//                 Загрузка продавцов...
//               </div>
//             ) : sellers.length === 0 ? (
//               <p className="text-center text-slate-400 text-sm py-10">Продавцов пока нет.</p>
//             ) : (
//               <div className="flex flex-col gap-2.5">
//                 {sellers.map((seller) => {
//                   const isBlocked = seller.status === 'blocked';
//                   const isExpired = new Date(seller.expires_at) < new Date();
//                   const isBusy = sellerActionLoadingId === seller.id;

//                   return (
//                     <div
//                       key={seller.id}
//                       className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
//                     >
//                       <div>
//                         <div className="flex items-center gap-2">
//                           <span className="font-semibold text-slate-900 text-sm">{seller.name}</span>
//                           <span
//                             className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
//                               isBlocked
//                                 ? 'bg-red-100 text-red-600'
//                                 : isExpired
//                                 ? 'bg-amber-100 text-amber-600'
//                                 : 'bg-emerald-100 text-emerald-600'
//                             }`}
//                           >
//                             {isBlocked ? 'заблокирован' : isExpired ? 'истёк срок' : 'активен'}
//                           </span>
//                         </div>
//                         <p className="text-xs text-slate-500 mt-0.5">Доступ до: {formatDate(seller.expires_at)}</p>
//                       </div>

//                       <div className="flex items-center gap-1.5 flex-wrap">
//                         <button
//                           onClick={() => handleToggleSellerStatus(seller)}
//                           disabled={isBusy}
//                           title={isBlocked ? 'Разблокировать' : 'Заблокировать'}
//                           className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 disabled:opacity-50 cursor-pointer transition-colors"
//                         >
//                           {isBlocked ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Ban className="w-4 h-4 text-red-500" />}
//                         </button>
//                         <button
//                           onClick={() => handleExtendSeller(seller)}
//                           disabled={isBusy}
//                           title="Продлить доступ"
//                           className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 disabled:opacity-50 cursor-pointer transition-colors"
//                         >
//                           <CalendarPlus className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => handleResetSellerPassword(seller)}
//                           disabled={isBusy}
//                           title="Изменить пароль"
//                           className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 disabled:opacity-50 cursor-pointer transition-colors"
//                         >
//                           <KeyRound className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => handleDeleteSeller(seller)}
//                           disabled={isBusy}
//                           title="Удалить продавца"
//                           className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-red-50 text-red-600 disabled:opacity-50 cursor-pointer transition-colors"
//                         >
//                           {isBusy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Модальное окно: вход продавца ("Кабинет продавца") */}
//       {showSellerLoginModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
//           <div className="bg-white rounded-3xl max-w-sm w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-150">
//             <button
//               onClick={() => setShowSellerLoginModal(false)}
//               className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
//                 <User className="w-5 h-5 text-white" />
//               </div>
//               <h2 className="text-lg font-bold text-slate-900">Кабинет продавца</h2>
//             </div>

//             <form onSubmit={handleSellerLogin}>
//               <input
//                 type="password"
//                 autoFocus
//                 placeholder="Пароль"
//                 value={sellerLoginPassword}
//                 onChange={(e) => setSellerLoginPassword(e.target.value)}
//                 className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//               />
//               {sellerLoginError && (
//                 <p className="text-xs text-red-500 mt-2">{sellerLoginError}</p>
//               )}
//               <button
//                 type="submit"
//                 disabled={sellerLoginSubmitting}
//                 className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
//               >
//                 {sellerLoginSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
//                 Войти
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Модальное окно: кабинет продавца */}
//       {showSellerDashboard && sellerSession && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
//           <div className="bg-white rounded-3xl max-w-2xl w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-150">
//             <button
//               onClick={() => setShowSellerDashboard(false)}
//               className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="flex items-center gap-2 mb-1 pr-10">
//               <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
//                 <User className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-lg font-bold text-slate-900">{sellerSession.name}</h2>
//                 <p className="text-xs text-slate-500">
//                   Статус: <span className="font-semibold text-emerald-600">активен</span> · доступ до {formatDate(sellerSession.expiresAt)}
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2 mt-5 mb-5">
//               <button
//                 onClick={() => openAddProductModal('seller')}
//                 className="flex items-center gap-2 h-11 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors cursor-pointer"
//               >
//                 <Plus className="w-4 h-4" />
//                 Добавить товар
//               </button>
//               <button
//                 onClick={handleSellerLogout}
//                 className="flex items-center gap-2 h-11 px-4 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-xl transition-colors cursor-pointer"
//               >
//                 <LogOut className="w-4 h-4" />
//                 Выйти
//               </button>
//             </div>

//             <h3 className="text-sm font-bold text-slate-900 mb-3">Мои товары ({myProducts.length})</h3>

//             {myProducts.length === 0 ? (
//               <p className="text-center text-slate-400 text-sm py-10">У вас пока нет товаров.</p>
//             ) : (
//               <div className="flex flex-col gap-2.5">
//                 {myProducts.map((product) => {
//                   const isDeleting = deletingId === product.id;
//                   return (
//                     <div
//                       key={product.id}
//                       className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3"
//                     >
//                       <div className="w-14 h-14 bg-white rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
//                         <img src={product.image_url} alt={product.title} className="w-full h-full object-cover" />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-semibold text-slate-900 truncate">{product.title}</p>
//                         <p className="text-xs text-slate-500">{product.price} TJS · {product.category}</p>
//                       </div>
//                       <div className="flex items-center gap-1.5 shrink-0">
//                         <button
//                           onClick={() => openEditProductModal('seller', product)}
//                           title="Редактировать"
//                           className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 cursor-pointer transition-colors"
//                         >
//                           <Pencil className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => handleDeleteProduct(product.id, 'seller')}
//                           disabled={isDeleting}
//                           title="Удалить"
//                           className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-red-50 text-red-600 disabled:opacity-50 cursor-pointer transition-colors"
//                         >
//                           {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Модальное окно: форма добавления/редактирования товара —
//           общая для главного админа и продавца (только меняется заголовок
//           и то, какая RPC-функция вызывается при сохранении) */}
//       {productFormMode && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
//           <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-150">
//             <button
//               onClick={closeProductFormModal}
//               className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="flex items-center gap-2 mb-5">
//               <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
//                 <Plus className="w-5 h-5 text-white" />
//               </div>
//               <h2 className="text-lg font-bold text-slate-900">
//                 {productFormMode.action === 'add' ? 'Добавить новый товар' : 'Редактировать товар'}
//               </h2>
//             </div>

//             <form onSubmit={handleSubmitProductForm} className="flex flex-col gap-3">
//               <div>
//                 <label className="text-xs font-semibold text-slate-500 block mb-1">Название</label>
//                 <input
//                   type="text"
//                   value={form.title}
//                   onChange={(e) => handleFormChange('title', e.target.value)}
//                   className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                   placeholder="Например: Беспроводные наушники Pro 2"
//                 />
//               </div>

//               <div>
//                 <label className="text-xs font-semibold text-slate-500 block mb-1">Описание</label>
//                 <textarea
//                   value={form.description}
//                   onChange={(e) => handleFormChange('description', e.target.value)}
//                   rows={3}
//                   className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                   placeholder="Краткое описание товара"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">Цена (TJS)</label>
//                   <input
//                     type="number"
//                     min="0"
//                     step="0.01"
//                     value={form.price}
//                     onChange={(e) => handleFormChange('price', e.target.value)}
//                     className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                     placeholder="450"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">Категория</label>
//                   <select
//                     value={form.category}
//                     onChange={(e) => handleFormChange('category', e.target.value)}
//                     className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                   >
//                     {CATEGORIES.filter((c) => c !== 'Все').map((cat) => (
//                       <option key={cat} value={cat}>{cat}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Загрузка изображения из галереи/файловой системы */}
//               <div>
//                 <label className="text-xs font-semibold text-slate-500 block mb-1">Фото товара</label>
//                 <label className="flex items-center gap-3 w-full px-4 py-3 bg-slate-50 border border-dashed border-slate-300 rounded-xl text-sm cursor-pointer hover:bg-slate-100 transition-colors">
//                   <ImageIcon className="w-5 h-5 text-slate-400 shrink-0" />
//                   <span className="text-slate-500 truncate">
//                     {imageFile ? imageFile.name : 'Выбрать файл из галереи или ПК'}
//                   </span>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="hidden"
//                   />
//                 </label>
//                 {imagePreview && (
//                   <div className="w-full h-40 bg-slate-50 rounded-xl overflow-hidden mt-2 flex items-center justify-center">
//                     <img src={imagePreview} alt="Предпросмотр" className="w-full h-full object-cover" />
//                   </div>
//                 )}
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">Телефон</label>
//                   <input
//                     type="text"
//                     value={form.phone}
//                     onChange={(e) => handleFormChange('phone', e.target.value)}
//                     className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                     placeholder="+992900000000"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">Telegram</label>
//                   <input
//                     type="text"
//                     value={form.telegram}
//                     onChange={(e) => handleFormChange('telegram', e.target.value)}
//                     className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                     placeholder="username"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-slate-500 block mb-1">WhatsApp</label>
//                   <input
//                     type="text"
//                     value={form.whatsapp}
//                     onChange={(e) => handleFormChange('whatsapp', e.target.value)}
//                     className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
//                     placeholder="992900000000"
//                   />
//                 </div>
//               </div>

//               {submitError && <p className="text-xs text-red-500">{submitError}</p>}
//               {submitSuccess && <p className="text-xs text-emerald-600">{submitSuccess}</p>}

//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
//               >
//                 {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
//                 {uploadingImage
//                   ? 'Загрузка фото...'
//                   : submitting
//                   ? 'Сохранение...'
//                   : productFormMode.action === 'add' ? 'Добавить товар' : 'Сохранить изменения'}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }