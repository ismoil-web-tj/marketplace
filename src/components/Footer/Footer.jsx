import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingBag,
    Mail,
    Phone,
    MapPin,
    Send,
    MessageCircle,
    X,
} from 'lucide-react';

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const PHONE_NUMBER = '992927619070';
    const PHONE_DISPLAY = '+992 92 761 90 70';

    const contactMethods = [
        {
            name: 'Telegram',
            value: '@ваш_username', // замените на ваш реальный юзернейм, если есть
            href: `https://t.me/+${PHONE_NUMBER}`,
            icon: Send,
            color: 'bg-[#229ED9]',
        },
        {
            name: 'WhatsApp',
            value: PHONE_DISPLAY,
            href: `https://wa.me/${PHONE_NUMBER}`,
            icon: MessageCircle,
            color: 'bg-[#25D366]',
        },
        {
            name: 'Телефон',
            value: PHONE_DISPLAY,
            href: `tel:+${PHONE_NUMBER}`,
            icon: Phone,
            color: 'bg-[#2563EB]',
        },
    ];

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
                                <a href={`tel:+${PHONE_NUMBER}`} className="hover:text-white transition-colors">{PHONE_DISPLAY}</a>
                            </li>
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

                </div>
            </div>

            {/* 3. BOTTOM BAR */}
            <div className="w-full border-t border-slate-800/80 bg-[#0B0F19]/50">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <span className="text-xs text-slate-500 text-center md:text-left select-none">
                        © 2026 Market. Все права защищены.
                    </span>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-slate-500">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                        >
                            Связатся с разработчиком
                        </button>
                    </div>

                </div>
            </div>

            {/* CONTACT MODAL */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setIsModalOpen(false)}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Modal content */}
                    <div
                        className="relative w-full max-w-sm bg-[#111827] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-7"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                            aria-label="Закрыть"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="text-lg font-bold text-white mb-1">
                            Связаться с разработчиком
                        </h3>
                        <p className="text-sm text-slate-400 mb-6">
                            Выберите удобный способ связи
                        </p>

                        <div className="flex flex-col gap-3">
                            {contactMethods.map(({ name, value, href, icon: Icon, color }) => (
                                
                                    key={name}
                                    href={href}
                                    target={name === 'Телефон' ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 transition-colors"
                                >
                                    <span className={`flex items-center justify-center w-11 h-11 rounded-full ${color} text-white shrink-0`}>
                                        <Icon className="w-5 h-5" />
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="text-sm font-semibold text-white">{name}</span>
                                        <span className="text-xs text-slate-400">{value}</span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </footer>
    );
}