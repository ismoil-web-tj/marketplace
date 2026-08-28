// import React, { useState, useMemo, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Search, 
//   X, 
//   Phone, 
//   Send, 
//   MessageSquare,
//   ArrowUpRight,
//   Heart
// } from 'lucide-react';

// // Реалистичные товары таджикского маркетплейса на русском языке с ценами в Сомони
// const MOCK_PRODUCTS = [
//   {
//     id: 1,
//     name: 'Беспроводные наушники Pro',
//     category: 'accessories',
//     price: 350,
//     oldPrice: 420,
//     image: 'https://images.unsplash.com/photo-1588449668338-d15176891481?q=80&w=600&auto=format&fit=crop',
//     description: 'Современные беспроводные наушники с активным шумоподавлением, интуитивным сенсорным управлением и глубоким басом. Работают до 6 часов на одном заряде.'
//   },
//   {
//     id: 2,
//     name: 'Смарт-часы Active 4',
//     category: 'accessories',
//     price: 890,
//     oldPrice: 990,
//     image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=600&auto=format&fit=crop',
//     description: 'Умные спортивные часы с AMOLED-экраном. Отслеживают пульс, фазы сна, шаги и уровень кислорода в крови. Полная защита от пыли и воды по стандарту IP68.'
//   },
//   {
//     id: 3,
//     name: 'Дорожный рюкзак Explorer',
//     category: 'accessories',
//     price: 450,
//     image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop',
//     description: 'Прочный рюкзак из водонепроницаемого нейлона с ортопедической спинкой и множеством удобных карманов. Идеальный выбор для работы, учебы и путешествий.'
//   },
//   {
//     id: 4,
//     name: 'Кожаный мужской кошелек',
//     category: 'accessories',
//     price: 180,
//     image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop',
//     description: 'Классическое мужское портмоне из натуральной кожи. Несколько отделений для купюр, отсеки для банковских карт и удобный карман для монет.'
//   },
//   {
//     id: 5,
//     name: 'Умный робот-пылесос',
//     category: 'home',
//     price: 2100,
//     oldPrice: 2400,
//     image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
//     description: 'Робот-пылесос с функцией влажной уборки и интеллектуальной лазерной навигацией. Настройка зон уборки и графиков через мобильное приложение.'
//   },
//   {
//     id: 6,
//     name: 'Капельная кофеварка',
//     category: 'home',
//     price: 320,
//     image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop',
//     description: 'Компактная капельная кофеварка для быстрого приготовления ароматного американо. Стеклянный графин объемом 1.2 литра надежно сохраняет тепло готового напитка.'
//   },
//   {
//     id: 7,
//     name: 'Флагманский смартфон 5G',
//     category: 'electronics',
//     price: 5499,
//     image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop',
//     description: 'Смартфон с мощным процессором, сверхъярким экраном 120 Гц и тройной камерой на 108 Мп. Поддержка быстрой зарядки мощностью 67 Вт.'
//   },
//   {
//     id: 8,
//     name: 'Худи Оверсайз хлопковое',
//     category: 'clothing',
//     price: 250,
//     image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=600&auto=format&fit=crop',
//     description: 'Стильное худи свободного кроя из плотного хлопкового трикотажа с мягким начесом. Прекрасно сохраняет форму и насыщенность цвета после частых стирок.'
//   },
//   {
//     id: 9,
//     name: 'Набор натуральных специй',
//     category: 'food',
//     price: 120,
//     image: 'https://images.unsplash.com/photo-1517093602195-b40af9688b46?q=80&w=600&auto=format&fit=crop',
//     description: 'Тщательно отобранные традиционные специи высшего качества для приготовления настоящего ароматного восточного плова, шашлыка или запеченных овощей.'
//   },
//   {
//     id: 10,
//     name: 'Механическая клавиатура',
//     category: 'electronics',
//     price: 650,
//     oldPrice: 720,
//     image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=600&auto=format&fit=crop',
//     description: 'Компактная механическая клавиатура с настраиваемой RGB-подсветкой и тихими переключателями. Идеально подходит как для комфортной работы, так и для игр.'
//   }
// ];

// const CATEGORY_NAMES = {
//   all: 'Все',
//   electronics: 'Электроника',
//   clothing: 'Одежда',
//   home: 'Дом',
//   food: 'Еда',
//   accessories: 'Аксессуары',
//   others: 'Другое'
// };

// export default function CatalogPage() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedProduct, setSelectedProduct] = useState(null);
  
//   // Инициализация избранного из localStorage
//   const [favorites, setFavorites] = useState(() => {
//     try {
//       const saved = localStorage.getItem('accesora_favorites');
//       return saved ? JSON.parse(saved) : [];
//     } catch {
//       return [];
//     }
//   });

//   // Состояние всплывающего уведомления (Toast)
//   const [toast, setToast] = useState({ show: false, message: '' });

//   // Сохранение избранного при изменении состояния
//   useEffect(() => {
//     localStorage.setItem('accesora_favorites', JSON.stringify(favorites));
//   }, [favorites]);

//   // Скрытие тоста через 4 секунды
//   useEffect(() => {
//     if (toast.show) {
//       const timer = setTimeout(() => {
//         setToast({ show: false, message: '' });
//       }, 4000);
//       return () => clearTimeout(timer);
//     }
//   }, [toast.show]);

//   // Запрет прокрутки страницы при открытом модальном окне
//   useEffect(() => {
//     if (selectedProduct) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [selectedProduct]);

//   // Логика добавления / удаления из избранного
//   const handleToggleFavorite = (e, productId, productName) => {
//     e.stopPropagation(); // Исключает открытие модального окна при клике на сердечко
//     const isAlreadyFavorited = favorites.includes(productId);
    
//     if (isAlreadyFavorited) {
//       setFavorites(prev => prev.filter(id => id !== productId));
//     } else {
//       setFavorites(prev => [...prev, productId]);
//       setToast({
//         show: true,
//         message: `Товар «${productName}» успешно добавлен в избранное`
//       });
//     }
//   };

//   // Фильтрация товаров по поиску и по категориям
//   const filteredProducts = useMemo(() => {
//     return MOCK_PRODUCTS.filter(product => {
//       const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
//       return matchesSearch && matchesCategory;
//     });
//   }, [searchQuery, selectedCategory]);

//   return (
//     <div className="w-full bg-[#FCFDFE] min-h-screen pb-16 sm:pb-24 relative">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
//         {/* ХЛЕБНЫЕ КРОШКИ И ЗАГОЛОВОК */}
//         <nav className="mb-4" aria-label="Breadcrumbs">
//           <ol className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
//             <li>
//               <a href="/" className="hover:text-[#2563EB] transition-colors">Главная</a>
//             </li>
//             <li className="before:content-['/'] before:mr-1.5 before:text-slate-300">
//               <span className="text-slate-900 font-semibold" aria-current="page">Каталог</span>
//             </li>
//           </ol>
//         </nav>

//         <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-8 border-b border-slate-100 pb-5">
//           <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
//             Каталог товаров
//           </h1>
//           <span className="text-xs sm:text-sm text-slate-500 font-semibold">
//             Найдено <strong className="text-slate-900">{filteredProducts.length}</strong> товаров
//           </span>
//         </div>

//         {/* ГОРИЗОНТАЛЬНАЯ ПАНЕЛЬ ФИЛЬТРОВ И ПОИСКА */}
//         <div className="w-full bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 flex flex-col gap-4 shadow-sm mb-8">
          
//           {/* Поле поиска */}
//           <div className="relative w-full max-w-xl">
//             <input
//               type="text"
//               placeholder="Поиск по названию товара..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full h-11 pl-11 pr-4 bg-slate-50/70 border border-slate-200/80 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all"
//             />
//             <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
//           </div>

//           {/* Категории (Чипсы/Табы) */}
//           <div className="w-full">
//             <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none whitespace-nowrap">
//               {Object.entries(CATEGORY_NAMES).map(([key, label]) => (
//                 <button
//                   key={key}
//                   onClick={() => setSelectedCategory(key)}
//                   className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer select-none border ${
//                     selectedCategory === key
//                       ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-sm'
//                       : 'bg-slate-50 border-slate-200/60 hover:border-slate-300 hover:bg-slate-100 text-slate-700'
//                   }`}
//                 >
//                   {label}
//                 </button>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* СЕТКА ТОВАРОВ */}
//         {filteredProducts.length === 0 ? (
//           <div className="w-full bg-white border border-slate-100 rounded-3xl p-12 text-center shadow-sm flex flex-col items-center justify-center">
//             <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-4">
//               <Search className="w-8 h-8" />
//             </div>
//             <h3 className="text-base font-extrabold text-slate-900 tracking-tight mb-2">Товары не найдены</h3>
//             <p className="text-xs text-slate-400 max-w-xs mb-6">Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
//             <button
//               onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
//               className="px-5 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
//             >
//               Сбросить фильтры
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//             {filteredProducts.map((product) => {
//               const isFavorited = favorites.includes(product.id);
//               return (
//                 <article 
//                   key={product.id}
//                   onClick={() => setSelectedProduct(product)}
//                   className="group relative flex flex-col bg-white border border-slate-100 rounded-2xl p-4 transition-all duration-200 hover:shadow-md hover:shadow-slate-100 hover:border-blue-600/15 cursor-pointer"
//                 >
//                   {/* Кнопка-сердечко (Абсолютное позиционирование) */}
//                   <button
//                     onClick={(e) => handleToggleFavorite(e, product.id, product.name)}
//                     className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white active:scale-90 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
//                     aria-label={isFavorited ? "Удалить из избранного" : "Добавить в избранное"}
//                   >
//                     <Heart 
//                       className={`w-4 h-4 transition-colors ${
//                         isFavorited 
//                           ? 'text-red-500 fill-red-500 scale-105' 
//                           : 'text-slate-400 hover:text-red-500'
//                       }`} 
//                     />
//                   </button>

//                   {/* Изображение товара */}
//                   <div className="w-full aspect-square bg-[#F8FAFC] rounded-xl flex items-center justify-center p-4 mb-4 select-none relative">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="max-h-full max-w-full object-contain mix-blend-multiply select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
//                       draggable="false"
//                       loading="lazy"
//                     />
//                   </div>

//                   {/* Информация */}
//                   <div className="flex flex-col flex-1 items-start text-left">
//                     <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase mb-1">
//                       {CATEGORY_NAMES[product.category] || 'Другое'}
//                     </span>
//                     <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-blue-600 transition-colors line-clamp-2">
//                       {product.name}
//                     </h3>

//                     {/* Блок цены и кнопка */}
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mt-auto pt-3 border-t border-slate-50 gap-2">
//                       <div className="flex flex-col text-left">
//                         <span className="text-sm font-black text-slate-900 whitespace-nowrap">
//                           {product.price.toLocaleString('ru-RU')} сомони
//                         </span>
//                         {product.oldPrice && (
//                           <span className="text-[10px] text-slate-400 font-medium line-through">
//                             {product.oldPrice.toLocaleString('ru-RU')} сомони
//                           </span>
//                         )}
//                       </div>
//                       <span className="inline-flex items-center justify-center gap-1 text-[11px] font-extrabold text-[#2563EB] sm:bg-blue-50 sm:px-3 sm:py-1.5 sm:rounded-lg group-hover:bg-[#2563EB] group-hover:text-white transition-all">
//                         Подробнее <ArrowUpRight className="w-3 h-3" />
//                       </span>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}

//       </div>

//       {/* МОДАЛЬНОЕ ОКНО ТОВАРА */}
//       {selectedProduct && (
//         <>
//           {/* Полупрозрачный фон */}
//           <div 
//             className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 transition-opacity duration-200" 
//             onClick={() => setSelectedProduct(null)}
//             aria-hidden="true"
//           />
//           {/* Контейнер модального окна */}
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//             <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible animate-scale-up">
              
//               {/* Кнопка закрытия */}
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/95 border border-slate-100 hover:bg-slate-50 active:scale-95 text-slate-400 hover:text-slate-900 shadow-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
//                 aria-label="Закрыть модальное окно"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               {/* Левая сторона: Изображение товара */}
//               <div className="w-full md:w-1/2 bg-[#F8FAFC] flex items-center justify-center p-8 relative">
//                 <div className="w-full aspect-square flex items-center justify-center">
//                   <img
//                     src={selectedProduct.image}
//                     alt={selectedProduct.name}
//                     className="max-h-full max-w-full object-contain mix-blend-multiply select-none"
//                     draggable="false"
//                   />
//                 </div>
//               </div>

//               {/* Правая сторона: Описание и кнопки быстрой связи */}
//               <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col text-left justify-between bg-white">
//                 <div>
//                   <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase mb-1 select-none">
//                     {CATEGORY_NAMES[selectedProduct.category] || 'Другое'}
//                   </span>
//                   <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mb-3">
//                     {selectedProduct.name}
//                   </h2>
                  
//                   {/* Подробное описание */}
//                   <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
//                     {selectedProduct.description}
//                   </p>

//                   {/* Цена в Сомони */}
//                   <div className="flex items-baseline gap-2.5 mb-8">
//                     <span className="text-xl sm:text-2xl font-black text-slate-900">
//                       {selectedProduct.price.toLocaleString('ru-RU')} сомони
//                     </span>
//                     {selectedProduct.oldPrice && (
//                       <span className="text-xs sm:text-sm text-slate-400 font-medium line-through">
//                         {selectedProduct.oldPrice.toLocaleString('ru-RU')} сомони
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* Быстрые CTA-кнопки связи внизу модального окна */}
//                 <div className="flex flex-col gap-2.5 mt-auto">
//                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 select-none">
//                     Связаться для покупки:
//                   </span>
                  
//                   {/* 1. Позвонить */}
//                   <a
//                     href="tel:+992927777777"
//                     className="inline-flex items-center justify-center gap-2.5 h-11 px-5 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-colors cursor-pointer text-center"
//                   >
//                     <Phone className="w-4 h-4" />
//                     Позвонить
//                   </a>

//                   {/* 2. Написать в Telegram */}
//                   <a
//                     href="https://t.me/accesora_support"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center gap-2.5 h-11 px-5 bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-colors cursor-pointer text-center"
//                   >
//                     <Send className="w-4 h-4" />
//                     Написать в Telegram
//                   </a>

//                   {/* 3. Написать в WhatsApp */}
//                   <a
//                     href="https://wa.me/992927777777"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center gap-2.5 h-11 px-5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-colors cursor-pointer text-center"
//                   >
//                     <MessageSquare className="w-4 h-4" />
//                     Написать в WhatsApp
//                   </a>
//                 </div>

//               </div>

//             </div>
//           </div>
//         </>
//       )}

//       {/* ВСПЛЫВАЮЩЕЕ УВЕДОМЛЕНИЕ (TOAST) */}
//       {toast.show && (
//         <div className="fixed bottom-6 right-6 z-50 bg-[#0F172A] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center justify-between gap-4 animate-slide-in text-xs sm:text-sm border border-slate-800">
//           <div className="flex items-center gap-2">
//             <span className="text-red-500 text-base">❤️</span>
//             <span className="font-medium text-slate-100">{toast.message}</span>
//           </div>
//           <Link 
//             to="/favorites" 
//             className="text-[#2563EB] hover:text-blue-400 font-bold underline whitespace-nowrap transition-colors"
//           >
//             Перейти
//           </Link>
//           <button 
//             onClick={() => setToast({ show: false, message: '' })} 
//             className="text-slate-400 hover:text-white p-0.5 transition-colors cursor-pointer"
//             aria-label="Закрыть уведомление"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>
//       )}

//     </div>
//   );
// }


// import React, { useState, useMemo, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Search, 
//   X, 
//   Phone, 
//   Send, 
//   MessageSquare,
//   ArrowUpRight,
//   Heart
// } from 'lucide-react';

// // Реалистичные товары таджикского маркетплейса на русском языке с ценами в Сомони
// export const MOCK_PRODUCTS = [
//   {
//     id: 1,
//     name: 'Беспроводные наушники Pro',
//     category: 'accessories',
//     price: 350,
//     oldPrice: 420,
//     image: 'https://images.unsplash.com/photo-1588449668338-d15176891481?q=80&w=600&auto=format&fit=crop',
//     description: 'Современные беспроводные наушники с активным шумоподавлением, интуитивным сенсорным управлением и глубоким басом. Работают до 6 часов на одном заряде.'
//   },
//   {
//     id: 2,
//     name: 'Смарт-часы Active 4',
//     category: 'accessories',
//     price: 890,
//     oldPrice: 990,
//     image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=600&auto=format&fit=crop',
//     description: 'Умные спортивные часы с AMOLED-экраном. Отслеживают пульс, фазы сна, шаги и уровень кислорода в крови. Полная защита от пыли и воды по стандарту IP68.'
//   },
//   {
//     id: 3,
//     name: 'Дорожный рюкзак Explorer',
//     category: 'accessories',
//     price: 450,
//     image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop',
//     description: 'Прочный рюкзак из водонепроницаемого нейлона с ортопедической спинкой и множеством удобных карманов. Идеальный выбор для работы, учебы и путешествий.'
//   },
//   {
//     id: 4,
//     name: 'Кожаный мужской кошелек',
//     category: 'accessories',
//     price: 180,
//     image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop',
//     description: 'Классическое мужское портмоне из натуральной кожи. Несколько отделений для купюр, отсеки для банковских карт и удобный карман для монет.'
//   },
//   {
//     id: 5,
//     name: 'Умный робот-пылесос',
//     category: 'home',
//     price: 2100,
//     oldPrice: 2400,
//     image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
//     description: 'Робот-пылесос с функцией влажной уборки и интеллектуальной лазерной навигацией. Настройка зон уборки и графиков через мобильное приложение.'
//   },
//   {
//     id: 6,
//     name: 'Капельная кофеварка',
//     category: 'home',
//     price: 320,
//     image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop',
//     description: 'Компактная капельная кофеварка для быстрого приготовления ароматного американо. Стеклянный графин объемом 1.2 литра надежно сохраняет тепло готового напитка.'
//   },
//   {
//     id: 7,
//     name: 'Флагманский смартфон 5G',
//     category: 'electronics',
//     price: 5499,
//     image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop',
//     description: 'Смартфон с мощным процессором, сверхъярким экраном 120 Гц и тройной камерой на 108 Мп. Поддержка быстрой зарядки мощностью 67 Вт.'
//   },
//   {
//     id: 8,
//     name: 'Худи Оверсайз хлопковое',
//     category: 'clothing',
//     price: 250,
//     image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=600&auto=format&fit=crop',
//     description: 'Стильное худи свободного кроя из плотного хлопкового трикотажа с мягким начесом. Прекрасно сохраняет форму и насыщенность цвета после частых стирок.'
//   },
//   {
//     id: 9,
//     name: 'Набор натуральных специй',
//     category: 'food',
//     price: 120,
//     image: 'https://images.unsplash.com/photo-1517093602195-b40af9688b46?q=80&w=600&auto=format&fit=crop',
//     description: 'Тщательно отобранные традиционные специи высшего качества для приготовления настоящего ароматного восточного плова, шашлыка или запеченных овощей.'
//   },
//   {
//     id: 10,
//     name: 'Механическая клавиатура',
//     category: 'electronics',
//     price: 650,
//     oldPrice: 720,
//     image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=600&auto=format&fit=crop',
//     description: 'Компактная механическая клавиатура с настраиваемой RGB-подсветкой и тихими переключателями. Идеально подходит как для комфортной работы, так и для игр.'
//   }
// ];

// const CATEGORY_NAMES = {
//   all: 'Все',
//   electronics: 'Электроника',
//   clothing: 'Одежда',
//   home: 'Дом',
//   food: 'Еда',
//   accessories: 'Аксессуары',
//   others: 'Другое'
// };

// export default function CatalogPage() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedProduct, setSelectedProduct] = useState(null);
  
//   // Инициализация избранного из localStorage
//   const [favorites, setFavorites] = useState(() => {
//     try {
//       const saved = localStorage.getItem('accesora_favorites');
//       return saved ? JSON.parse(saved) : [];
//     } catch {
//       return [];
//     }
//   });

//   // Состояние всплывающего уведомления (Toast)
//   const [toast, setToast] = useState({ show: false, message: '' });

//   // Сохранение избранного при изменении состояния + оповещение других компонентов
//   useEffect(() => {
//     localStorage.setItem('accesora_favorites', JSON.stringify(favorites));
//     window.dispatchEvent(new Event('favoritesUpdated'));
//   }, [favorites]);

//   // Скрывать Toast через 4 секунды
//   useEffect(() => {
//     if (toast.show) {
//       const timer = setTimeout(() => {
//         setToast({ show: false, message: '' });
//       }, 4000);
//       return () => clearTimeout(timer);
//     }
//   }, [toast.show]);

//   // Запрет прокрутки страницы при открытом модальном окне
//   useEffect(() => {
//     if (selectedProduct) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [selectedProduct]);

//   // Логика добавления / удаления из избранного
//   const handleToggleFavorite = (e, productId, productName) => {
//     e.stopPropagation(); // Исключает открытие модального окна при клике на сердечко
//     const isAlreadyFavorited = favorites.includes(productId);
    
//     if (isAlreadyFavorited) {
//       setFavorites(prev => prev.filter(id => id !== productId));
//     } else {
//       setFavorites(prev => [...prev, productId]);
//       setToast({
//         show: true,
//         message: `Товар «${productName}» успешно добавлен в избранное`
//       });
//     }
//   };

//   // Фильтрация товаров по поиску и по категориям
//   const filteredProducts = useMemo(() => {
//     return MOCK_PRODUCTS.filter(product => {
//       const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
//       return matchesSearch && matchesCategory;
//     });
//   }, [searchQuery, selectedCategory]);

//   return (
//     <div className="w-full bg-[#FCFDFE] min-h-screen pb-16 sm:pb-24 relative">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
//         {/* ХЛЕБНЫЕ КРОШКИ И ЗАГОЛОВОК */}
//         <nav className="mb-4" aria-label="Breadcrumbs">
//           <ol className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
//             <li>
//               <a href="/" className="hover:text-[#2563EB] transition-colors">Главная</a>
//             </li>
//             <li className="before:content-['/'] before:mr-1.5 before:text-slate-300">
//               <span className="text-slate-900 font-semibold" aria-current="page">Каталог</span>
//             </li>
//           </ol>
//         </nav>

//         <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-8 border-b border-slate-100 pb-5">
//           <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
//             Каталог товаров
//           </h1>
//           <span className="text-xs sm:text-sm text-slate-500 font-semibold">
//             Найдено <strong className="text-slate-900">{filteredProducts.length}</strong> товаров
//           </span>
//         </div>

//         {/* ГОРИЗОНТАЛЬНАЯ ПАНЕЛЬ ФИЛЬТРОВ И ПОИСКА */}
//         <div className="w-full bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 flex flex-col gap-4 shadow-sm mb-8">
          
//           {/* Поле поиска */}
//           <div className="relative w-full max-w-xl">
//             <input
//               type="text"
//               placeholder="Поиск по названию товара..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full h-11 pl-11 pr-4 bg-slate-50/70 border border-slate-200/80 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all"
//             />
//             <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
//           </div>

//           {/* Категории (Чипсы/Табы) */}
//           <div className="w-full">
//             <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none whitespace-nowrap">
//               {Object.entries(CATEGORY_NAMES).map(([key, label]) => (
//                 <button
//                   key={key}
//                   onClick={() => setSelectedCategory(key)}
//                   className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer select-none border ${
//                     selectedCategory === key
//                       ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-sm'
//                       : 'bg-slate-50 border-slate-200/60 hover:border-slate-300 hover:bg-slate-100 text-slate-700'
//                   }`}
//                 >
//                   {label}
//                 </button>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* СЕТКА ТОВАРОВ */}
//         {filteredProducts.length === 0 ? (
//           <div className="w-full bg-white border border-slate-100 rounded-3xl p-12 text-center shadow-sm flex flex-col items-center justify-center">
//             <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-4">
//               <Search className="w-8 h-8" />
//             </div>
//             <h3 className="text-base font-extrabold text-slate-900 tracking-tight mb-2">Товары не найдены</h3>
//             <p className="text-xs text-slate-400 max-w-xs mb-6">Попробуйте изменить поисковый запрос или выбрать другую категорию</p>
//             <button
//               onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
//               className="px-5 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
//             >
//               Сбросить фильтры
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//             {filteredProducts.map((product) => {
//               const isFavorited = favorites.includes(product.id);
//               return (
//                 <article 
//                   key={product.id}
//                   onClick={() => setSelectedProduct(product)}
//                   className="group relative flex flex-col bg-white border border-slate-100 rounded-2xl p-4 transition-all duration-200 hover:shadow-md hover:shadow-slate-100 hover:border-blue-600/15 cursor-pointer"
//                 >
//                   {/* Кнопка-сердечко (Абсолютное позиционирование) */}
//                   <button
//                     onClick={(e) => handleToggleFavorite(e, product.id, product.name)}
//                     className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white active:scale-90 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
//                     aria-label={isFavorited ? "Удалить из избранного" : "Добавить в избранное"}
//                   >
//                     <Heart 
//                       className={`w-4 h-4 transition-colors ${
//                         isFavorited 
//                           ? 'text-red-500 fill-red-500 scale-105' 
//                           : 'text-slate-400 hover:text-red-500'
//                       }`} 
//                     />
//                   </button>

//                   {/* Изображение товара */}
//                   <div className="w-full aspect-square bg-[#F8FAFC] rounded-xl flex items-center justify-center p-4 mb-4 select-none relative">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="max-h-full max-w-full object-contain mix-blend-multiply select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
//                       draggable="false"
//                       loading="lazy"
//                     />
//                   </div>

//                   {/* Информация */}
//                   <div className="flex flex-col flex-1 items-start text-left">
//                     <span className="text-[10px] font-extrabold text-slate-400 tracking-wider uppercase mb-1">
//                       {CATEGORY_NAMES[product.category] || 'Другое'}
//                     </span>
//                     <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-blue-600 transition-colors line-clamp-2">
//                       {product.name}
//                     </h3>

//                     {/* Блок цены и кнопка */}
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mt-auto pt-3 border-t border-slate-50 gap-2">
//                       <div className="flex flex-col text-left">
//                         <span className="text-sm font-black text-slate-900 whitespace-nowrap">
//                           {product.price.toLocaleString('ru-RU')} сомони
//                         </span>
//                         {product.oldPrice && (
//                           <span className="text-[10px] text-slate-400 font-medium line-through">
//                             {product.oldPrice.toLocaleString('ru-RU')} сомони
//                           </span>
//                         )}
//                       </div>
//                       <span className="inline-flex items-center justify-center gap-1 text-[11px] font-extrabold text-[#2563EB] sm:bg-blue-50 sm:px-3 sm:py-1.5 sm:rounded-lg group-hover:bg-[#2563EB] group-hover:text-white transition-all">
//                         Подробнее <ArrowUpRight className="w-3 h-3" />
//                       </span>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}

//       </div>

//       {/* МОДАЛЬНОЕ ОКНО ТОВАРА */}
//       {selectedProduct && (
//         <>
//           {/* Полупрозрачный фон */}
//           <div 
//             className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 transition-opacity duration-200" 
//             onClick={() => setSelectedProduct(null)}
//             aria-hidden="true"
//           />
//           {/* Контейнер модального окна */}
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//             <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible animate-scale-up">
              
//               {/* Кнопка закрытия */}
//               <button
//                 onClick={() => setSelectedProduct(null)}
//                 className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/95 border border-slate-100 hover:bg-slate-50 active:scale-95 text-slate-400 hover:text-slate-900 shadow-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
//                 aria-label="Закрыть модальное окно"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               {/* Левая сторона: Изображение товара */}
//               <div className="w-full md:w-1/2 bg-[#F8FAFC] flex items-center justify-center p-8 relative">
//                 <div className="w-full aspect-square flex items-center justify-center">
//                   <img
//                     src={selectedProduct.image}
//                     alt={selectedProduct.name}
//                     className="max-h-full max-w-full object-contain mix-blend-multiply select-none"
//                     draggable="false"
//                   />
//                 </div>
//               </div>

//               {/* Правая сторона: Описание и кнопки быстрой связи */}
//               <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col text-left justify-between bg-white">
//                 <div>
//                   <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase mb-1 select-none">
//                     {CATEGORY_NAMES[selectedProduct.category] || 'Другое'}
//                   </span>
//                   <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mb-3">
//                     {selectedProduct.name}
//                   </h2>
                  
//                   {/* Подробное описание */}
//                   <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
//                     {selectedProduct.description}
//                   </p>

//                   {/* Цена в Сомони */}
//                   <div className="flex items-baseline gap-2.5 mb-8">
//                     <span className="text-xl sm:text-2xl font-black text-slate-900">
//                       {selectedProduct.price.toLocaleString('ru-RU')} сомони
//                     </span>
//                     {selectedProduct.oldPrice && (
//                       <span className="text-xs sm:text-sm text-slate-400 font-medium line-through">
//                         {selectedProduct.oldPrice.toLocaleString('ru-RU')} сомони
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* Быстрые CTA-кнопки связи внизу модального окна */}
//                 <div className="flex flex-col gap-2.5 mt-auto">
//                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 select-none">
//                     Связаться для покупки:
//                   </span>
                  
//                   {/* 1. Позвонить */}
//                   <a
//                     href="tel:+992927777777"
//                     className="inline-flex items-center justify-center gap-2.5 h-11 px-5 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-colors cursor-pointer text-center"
//                   >
//                     <Phone className="w-4 h-4" />
//                     Позвонить
//                   </a>

//                   {/* 2. Написать в Telegram */}
//                   <a
//                     href="https://t.me/accesora_support"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center gap-2.5 h-11 px-5 bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-colors cursor-pointer text-center"
//                   >
//                     <Send className="w-4 h-4" />
//                     Написать в Telegram
//                   </a>

//                   {/* 3. Написать в WhatsApp */}
//                   <a
//                     href="https://wa.me/992927777777"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center gap-2.5 h-11 px-5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-colors cursor-pointer text-center"
//                   >
//                     <MessageSquare className="w-4 h-4" />
//                     Написать в WhatsApp
//                   </a>
//                 </div>

//               </div>

//             </div>
//           </div>
//         </>
//       )}

//       {/* ВСПЛЫВАЮЩЕЕ УВЕДОМЛЕНИЕ (TOAST) */}
//       {toast.show && (
//         <div className="fixed bottom-6 right-6 z-50 bg-[#0F172A] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center justify-between gap-4 animate-slide-in text-xs sm:text-sm border border-slate-800">
//           <div className="flex items-center gap-2">
//             <span className="text-red-500 text-base">❤️</span>
//             <span className="font-medium text-slate-100">{toast.message}</span>
//           </div>
//           <Link 
//             to="/favorites" 
//             className="text-[#2563EB] hover:text-blue-400 font-bold underline whitespace-nowrap transition-colors"
//           >
//             Перейти
//           </Link>
//           <button 
//             onClick={() => setToast({ show: false, message: '' })} 
//             className="text-slate-400 hover:text-white p-0.5 transition-colors cursor-pointer"
//             aria-label="Закрыть уведомление"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>
//       )}

//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Heart, Search, Phone, Send, MessageCircle, X } from 'lucide-react';

const PRODUCTS = [
  { id: 1, title: 'Беспроводные наушники Pro 2', price: 450, category: 'Электроника', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60', description: 'Отличный звук, активное шумоподавление и комфортная посадка.' },
  { id: 2, title: 'Смарт-часы Classic 6', price: 890, category: 'Электроника', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60', description: 'Отслеживание здоровья, стильный корпус и ёмкий аккумулятор.' },
  { id: 3, title: 'Кожаный городской рюкзак', price: 320, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60', description: 'Прочный материал, отделение для ноутбука и стильный дизайн.' },
  { id: 4, title: 'Механическая клавиатура RGB', price: 540, category: 'Электроника', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60', description: 'Быстрый отклик, приятный клик и настраиваемая подсветка.' },
  { id: 5, title: 'Спортивные оправы и очки', price: 180, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60', description: 'Защита от солнца и качественные поляризационные линзы.' },
  { id: 6, title: 'Куртка хлопковая Unisex', price: 620, category: 'Одежда', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60', description: 'Удобный крой, надежная молния и качественная ткань.' },
  { id: 7, title: 'Термокружка 500 мл', price: 120, category: 'Дом', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60', description: 'Сохраняет тепло до 12 часов. Не протекает.' },
  { id: 8, title: 'Набор премиум кофе', price: 95, category: 'Еда', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=60', description: 'Арабика 100%, средняя обжарка с шоколадным нотками.' },
];

const CATEGORIES = ['Все', 'Электроника', 'Одежда', 'Дом', 'Еда', 'Аксессуары'];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('accesora_favorites');
      setFavorites(saved ? JSON.parse(saved) : []);
    } catch {
      setFavorites([]);
    }
  }, []);

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

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCat = selectedCategory === 'Все' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Заголовок и поиск */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Каталог товаров</h1>
          <p className="text-sm text-slate-500 mt-1">Найдено товаров: {filteredProducts.length}</p>
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Поиск по названию..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

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

      {/* Сетка товаров */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => {
          const isFav = favorites.some((item) => item.id === product.id);

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

              <div>
                <div className="w-full h-44 sm:h-52 bg-slate-50 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
                  <img
                    src={product.image}
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
      </div>

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
              src={selectedProduct.image}
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

            {/* Три кнопки связи */}
            <div className="flex flex-col gap-2.5 mt-4">
              <a
                href="tel:+992900000000"
                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                Позвонить
              </a>
              <a
                href="https://t.me/username"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-colors"
              >
                <Send className="w-5 h-5" />
                Написать в Telegram
              </a>
              <a
                href="https://wa.me/992900000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}