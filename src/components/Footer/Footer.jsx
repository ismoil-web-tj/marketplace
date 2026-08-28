import React from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingBag,
    Mail,
    Phone,
    MapPin,
    Send,

} from 'lucide-react';

export default function Footer() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <footer className="w-full bg-[#0F172A] text-slate-300">

            {/* 1. NEWSLETTER BANNER */}
            <div className="w-full bg-[#2563EB]">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">

                        <div className="text-left max-w-xl">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                                Следите за нами за самыми лучшими ценами
                            </h3>
                            
                        </div>

                        <form onSubmit={handleSubmit} className="w-full lg:max-w-md">
                            <div className="flex flex-col sm:flex-row items-stretch gap-2.5">


                            </div>
                        </form>

                    </div>
                </div>
            </div>

            {/* 2. MAIN FOOTER CONTENT */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Column 1: Brand & Contact */}
                    <div className="lg:col-span-4 flex flex-col items-start text-left">
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-xl font-bold text-white tracking-tight mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                            aria-label="Accesora Logo"
                        >
                            <svg className="w-7 h-7 text-[#2563EB] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 20L12 4L20 20H16L12 12L8 20H4Z" />
                            </svg>
                            <span className="font-black text-xl tracking-tight">Market</span>
                        </Link>

                        <p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Самые лучшие и качественые товары по хроршей цене можете найти на Market            </p>

                        <ul className="space-y-3.5 text-sm">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                                <span>....................................................</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                                <a href="tel:+18005550199" className="hover:text-white transition-colors">+992 92 7777777</a>
                            </li>
                            {/* <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                <a href="mailto:support@accesora.com" className="hover:text-white transition-colors">support@accesora.com</a>
              </li> */}
                        </ul>
                    </div>

                    {/* Column 2: Categories */}
                    <div className="lg:col-span-2 flex flex-col items-start text-left">
                        <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-5 select-none">
                            Категории
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/catalog?category=electronics" className="text-slate-400 hover:text-white transition-colors">Электроника</Link></li>
                            <li><Link to="/catalog?category=clothing" className="text-slate-400 hover:text-white transition-colors">Одежда</Link></li>
                            <li><Link to="/catalog?category=home" className="text-slate-400 hover:text-white transition-colors">Товары для дома</Link></li>
                            <li><Link to="/catalog?category=food" className="text-slate-400 hover:text-white transition-colors">Еда</Link></li>
                            <li><Link to="/catalog?category=accessories" className="text-slate-400 hover:text-white transition-colors">Аксесураы</Link></li>
                            <li><Link to="/catalog" className="text-[#2563EB] hover:text-blue-400 font-semibold transition-colors">Все товары</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Shop */}
                    <div className="lg:col-span-2 flex flex-col items-start text-left">
                        <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-5 select-none">
                            Покупка
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link to="/catalog" className="hover:text-white transition-colors">Каталог</Link></li>
                            {/* <li><Link to="/catalog" className="hover:text-white transition-colors">Deals & Offers</Link></li> */}
                            {/* <li><Link to="/catalog" className="hover:text-white transition-colors">New Arrivals</Link></li> */}
                            {/* <li><Link to="/catalog" className="hover:text-white transition-colors">Featured Brands</Link></li> */}
                            <li><Link to="/favorites" className="hover:text-white transition-colors">Избранные</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Support */}
                    <div className="lg:col-span-2 flex flex-col items-start text-left">
                        <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-5 select-none">
                            Помощь
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link to="/catalog" className="hover:text-white transition-colors">О нас</Link></li>
                            <li><Link to="/catalog" className="hover:text-white transition-colors">Отличное качество</Link></li>
                            <li><Link to="/catalog" className="hover:text-white transition-colors">Каталог</Link></li>
                            <li><Link to="/favorites" className="hover:text-white transition-colors">Избранные</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Social Media */}
                    {/* <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-5 select-none">
              Follow Us
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Stay tuned on our social feeds for real-time announcements.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-[#2563EB] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Follow us on Facebook"
              >
              </a>
             
            </div>
          </div> */}

                </div>
            </div>

            {/* 3. BOTTOM BAR */}
            <div className="w-full border-t border-slate-800/80 bg-[#0B0F19]/50">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Left: Copyright */}
                    <span className="text-xs text-slate-500 text-center md:text-left select-none">
                        © 2026 Market. Все права защищены.
                    </span>

                    {/* Center: Legal Links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-slate-500">
                        <a
                            href="tel:+992927619070"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                        >
                            Связатся с разработчиком
                        </a>
                    </div>

                    {/* Right: Payment Badges */}


                </div>
            </div>

        </footer>
    );
}