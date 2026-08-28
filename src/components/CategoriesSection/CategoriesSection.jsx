import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Apple, 
  Headphones, 
  LayoutGrid, 
  ArrowRight 
} from 'lucide-react';

export default function CategoriesSection() {
  const categories = [
    {
      id: 1,
      name: 'Электроника',
      count: '120+ товаров',
      path: '/catalog?category=electronics',
      icon: Smartphone,
      bgColor: 'bg-blue-50/50',
      iconColor: 'text-blue-600',
    },
    {
      id: 2,
      name: 'Одежда',
      count: '250+ товаров',
      path: '/catalog?category=clothing',
      icon: Shirt,
      bgColor: 'bg-amber-50/50',
      iconColor: 'text-amber-600',
    },
    {
      id: 3,
      name: 'Дом и уют',
      count: '180+ товаров',
      path: '/catalog?category=home',
      icon: Home,
      bgColor: 'bg-emerald-50/50',
      iconColor: 'text-emerald-600',
    },
    {
      id: 4,
      name: 'Еда и продукты',
      count: '95+ товаров',
      path: '/catalog?category=food',
      icon: Apple,
      bgColor: 'bg-rose-50/50',
      iconColor: 'text-rose-600',
    },
    {
      id: 5,
      name: 'Аксессуары',
      count: '320+ товаров',
      path: '/catalog?category=accessories',
      icon: Headphones,
      bgColor: 'bg-indigo-50/50',
      iconColor: 'text-indigo-600',
    },
    {
      id: 6,
      name: 'Все категории',
      count: 'Смотреть все',
      path: '/catalog',
      icon: LayoutGrid,
      bgColor: 'bg-slate-100/50',
      iconColor: 'text-slate-600',
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#0F172A] font-extrabold text-xl sm:text-2xl tracking-tight">
            Shop by Category
          </h2>
          <Link
            to="/catalog"
            className="group inline-flex items-center gap-1 text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
            aria-label="Смотреть все категории товаров"
          >
            View All Categories
            <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* CATEGORIES GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={category.path}
                className="group flex flex-col items-center text-center bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-slate-100 hover:border-blue-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                {/* Icon Wrapper */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 transition-colors duration-200 ${category.bgColor} group-hover:bg-blue-600/5`}>
                  <Icon className={`w-7 h-7 sm:w-9 sm:h-9 ${category.iconColor} group-hover:text-blue-600 transition-colors duration-200`} />
                </div>

                {/* Category Details */}
                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] tracking-tight group-hover:text-blue-600 transition-colors duration-150 line-clamp-1">
                  {category.name}
                </h3>
                <span className="text-xs text-slate-400 font-medium mt-1">
                  {category.count}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}