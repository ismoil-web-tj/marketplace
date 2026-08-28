import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag } from 'lucide-react';

export default function Favorites() {
  const [favoriteItems, setFavoriteItems] = useState([]);

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
            className="bg-white border border-slate-200 rounded-2xl p-4 relative flex flex-col justify-between"
          >
            <button
              onClick={() => removeItem(product.id)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              title="Удалить из избранного"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            <div>
              <div className="w-full h-44 bg-slate-50 rounded-xl overflow-hidden mb-3">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-slate-900 text-base mb-1">{product.title}</h3>
              <p className="text-blue-600 font-bold text-lg">{product.price} TJS</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}