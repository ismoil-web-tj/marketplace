import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag, X, Phone, Send, MessageCircle } from 'lucide-react';

export default function Favorites() {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Состояние для модального окна

  useEffect(() => {
    try {
      const saved = localStorage.getItem('accesora_favorites');
      setFavoriteItems(saved ? JSON.parse(saved) : []);
    } catch {
      setFavoriteItems([]);
    }
  }, []);

  const removeItem = (id) => {
    const updated = favoriteItems.filter((item) => item.id !== id);
    setFavoriteItems(updated);
    localStorage.setItem('accesora_favorites', JSON.stringify(updated));
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  if (favoriteItems.length === 0) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Список избранного пуст</h2>
        <p className="text-slate-500 mb-6">Вы пока не добавили ни одного товара в избранное.</p>
        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Избранные товары</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {favoriteItems.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)} // Открывает модалку при клике на карточку
            className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <button
              onClick={(e) => {
                e.stopPropagation(); // Чтобы при клике на крестик не открывалась модалка
                removeItem(product.id);
              }}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm cursor-pointer"
              title="Удалить из избранного"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <div>
              <div className="w-full h-44 sm:h-52 bg-slate-50 rounded-xl overflow-hidden mb-3 flex items-center justify-center">
                <img
                  src={product.image_url || product.image || 'https://via.placeholder.com/300'}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                {product.category}
              </span>
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base line-clamp-2 mt-0.5 mb-2">
                {product.title}
              </h3>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-400 block">Цена</span>
              <span className="text-base sm:text-lg font-bold text-slate-900">{product.price} TJS</span>
            </div>
          </div>
        ))}
      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full h-64 bg-slate-50 rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
              <img
                src={selectedProduct.image_url || selectedProduct.image || 'https://via.placeholder.com/300'}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              {selectedProduct.category}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1 mb-2">
              {selectedProduct.title}
            </h2>
            <p className="text-slate-600 text-sm mb-6 whitespace-pre-wrap">
              {selectedProduct.description || 'Описание отсутствует'}
            </p>

            <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl mb-6">
              <span className="text-slate-500 font-medium">Стоимость:</span>
              <span className="text-2xl font-bold text-blue-600">{selectedProduct.price} TJS</span>
            </div>

            <div className="space-y-3">
              {selectedProduct.phone && (
                <a
                  href={`tel:${selectedProduct.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-600/20"
                >
                  <Phone className="w-5 h-5" />
                  Позвонить
                </a>
              )}
              {selectedProduct.telegram && (
                <a
                  href={`https://t.me/${selectedProduct.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-sky-500/20"
                >
                  <Send className="w-5 h-5" />
                  Написать в Telegram
                </a>
              )}
              {selectedProduct.whatsapp && (
                <a
                  href={`https://wa.me/${selectedProduct.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Написать в WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}