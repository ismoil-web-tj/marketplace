import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, RotateCcw, ShieldCheck, Headset } from 'lucide-react';

export default function Hero() {
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80'
  ];

  return (
    <section className="w-full bg-white py-6 sm:py-10 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN BANNER CONTAINER */}
        <div className="relative w-full bg-[#F8FAFC] rounded-3xl overflow-hidden px-6 py-12 sm:px-12 sm:py-16 lg:py-20 lg:px-20 xl:py-24 xl:px-24 border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.01)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            
            {/* Left Content (Text, CTAs, Social Proof) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left max-w-xl">
              
              {/* Badge */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-100/50 mb-5 select-none">
                New Collection 2026
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-5">
                Покупай товары{' '}
                <span className="text-[#2563EB] block sm:inline lg:block xl:inline">Выгодно</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8 max-w-md">
                Premium accessories designed for work, travel and lifestyle. Experience the perfect blend of modern aesthetics, premium materials and daily utility.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <Link
                  to="/catalog"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#2563EB] hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-xl transition-all duration-150 shadow-sm hover:shadow-md hover:shadow-blue-600/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer text-center"
                  aria-label="Shop the collection"
                >
                  Оформить заказ
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  to="/aboutus"
                  className="inline-flex items-center justify-center px-7 py-4 bg-white hover:bg-slate-50 active:bg-slate-100 text-[#0F172A] font-semibold text-sm rounded-xl border border-slate-200 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer text-center"
                  aria-label="Explore daily deals"
                >
                  О нас
                </Link>
              </div>

              {/* Social Proof Section */}
              

            </div>

            {/* Right Side (Visual Collage & Promo Sticker) */}
            <div className="lg:col-span-7 flex items-center justify-center relative w-full lg:h-[460px] xl:h-[520px]">
              
              {/* Promo Sticker */}
              <div className="absolute top-2 right-2 sm:top-6 sm:right-6 lg:-top-2 lg:right-2 xl:top-6 xl:right-6 z-20 flex flex-col items-center justify-center w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-[#2563EB] text-white text-center shadow-lg shadow-blue-600/20 transform rotate-12 select-none pointer-events-none animate-[pulse_3s_infinite_ease-in-out]">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-90 leading-tight">Up to</span>
                <span className="text-xl sm:text-2xl font-black leading-none">50%</span>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-90 leading-tight">Off</span>
              </div>

              {/* Main Premium Product Mockup Composition */}
              <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] xl:max-w-[580px] aspect-[1.15/1] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
                <img
                  src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80"
                  alt="Curated premium work and travel accessories"
                  className="w-full h-full object-cover rounded-2xl select-none pointer-events-none drop-shadow-[0_12px_32px_rgba(15,23,42,0.04)]"
                  draggable="false"
                />
              </div>

            </div>

          </div>
        </div>

        {/* TRUST BADGES / FEATURES BAR */}
        <div className="w-full mt-10 sm:mt-12 lg:mt-14 border border-slate-100 rounded-2xl bg-white px-6 py-6 sm:py-8 shadow-[0_2px_12px_rgba(15,23,42,0.02)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-4 lg:justify-center pt-5 sm:pt-0 first:pt-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50/80 text-[#2563EB] shrink-0">
                <Truck className="w-5.5 h-5.5 stroke-[1.8]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] tracking-tight">Быстрая доставка</h4>
                <p className="text-xs text-slate-500 mt-0.5">Доставка бесплатная начиная с 99 смн</p>
              </div>
            </div>

            {/* Feature 2 */}
            

            {/* Feature 3 */}
            <div className="flex items-center gap-4 lg:justify-center pt-5 sm:pt-0 lg:pl-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-50/80 text-violet-600 shrink-0">
                <ShieldCheck className="w-5.5 h-5.5 stroke-[1.8]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] tracking-tight">Хорошее качество</h4>
                <p className="text-xs text-slate-500 mt-0.5">100% увереность в качестве</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4 lg:justify-center pt-5 sm:pt-0 sm:pl-4 lg:pl-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-50/80 text-orange-600 shrink-0">
                <Headset className="w-5.5 h-5.5 stroke-[1.8]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] tracking-tight">24/7 подержка</h4>
                <p className="text-xs text-slate-500 mt-0.5">Мы здесь чтобы помочь вам</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}