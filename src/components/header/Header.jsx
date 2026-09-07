import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Heart, User, Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    // Динамическое состояние счетчиков
    const [favoritesCount, setFavoritesCount] = useState(0);
    const cartCount = 3;

    // Синхронизация счетчика Избранного в реальном времени
    useEffect(() => {
        const updateFavoritesCount = () => {
            try {
                const saved = localStorage.getItem('accesora_favorites');
                const favs = saved ? JSON.parse(saved) : [];
                setFavoritesCount(favs.length);
            } catch {
                setFavoritesCount(0);
            }
        };

        // Первоначальный подсчет при монтировании
        updateFavoritesCount();

        // Слушатели событий для синхронизации между компонентами и вкладками
        window.addEventListener('favoritesUpdated', updateFavoritesCount);
        window.addEventListener('storage', updateFavoritesCount);

        return () => {
            window.removeEventListener('favoritesUpdated', updateFavoritesCount);
            window.removeEventListener('storage', updateFavoritesCount);
        };
    }, []);

    // Автоматическое закрытие мобильного меню при смене пути
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Закрытие меню по клику вне области, нажатию Escape и блокировка прокрутки
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };

        const handleClickOutside = (e) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(e.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Стилизация активных ссылок на десктопе в стиле макета Accesora
    const desktopNavLinkClass = ({ isActive }) =>
        `relative py-2 text-sm font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 rounded-md flex items-center gap-1.5 ${isActive
            ? 'text-blue-600 after:absolute after:-bottom-[29px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600'
            : 'text-slate-600 hover:text-slate-900'
        }`;

    // Стилизация активных ссылок в мобильном меню
    const mobileNavLinkClass = ({ isActive }) =>
        `flex items-center w-full px-4 py-3.5 rounded-xl text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${isActive
            ? 'bg-blue-50 text-blue-600'
            : 'text-slate-700 hover:bg-slate-50 hover:text-gray-900 active:bg-slate-100'
        }`;

    return (
        <>
            {/* TOP BANNER */}
            <div className="w-full bg-[#0B0F19] text-white py-2 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] sm:text-xs font-medium tracking-wide">
                    <div className="flex items-center gap-1.5 text-center sm:text-left">
                        <span>🔥 Самые качественные товары по хорошей цене</span>
                        <Link to="/catalog" className="underline hover:text-blue-400 font-bold transition-colors">
                            Shop Now →
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-1 text-slate-300">
                        <span>📦 бесплатная доставка от 999смн</span>
                    </div>
                </div>
            </div>

            {/* MAIN HEADER */}
            <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-[0_1px_3px_rgba(15,23,42,0.02)] transition-all duration-200">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* DESKTOP LAYOUT */}
                    <div className="hidden lg:flex items-center justify-between h-20 gap-4 xl:gap-8">

                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-xl font-bold text-slate-900 tracking-tight shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 rounded-md"
                        >
                            <svg className="w-7 h-7 text-blue-600 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 20L12 4L20 20H16L12 12L8 20H4Z" />
                            </svg>
                            <span className="text-slate-900 font-black tracking-tight text-xl">Market</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="flex items-center gap-5 xl:gap-6 shrink-0" aria-label="Основная навигация">
                            <NavLink to="/" end className={desktopNavLinkClass}>
                                Главная
                            </NavLink>
                            <NavLink to="/catalog" className={desktopNavLinkClass}>
                                Каталог
                            </NavLink>
                            <Link to="/aboutus" className="text-sm font-semibold text-slate-600 hover:text-slate-900 tracking-wide transition-colors">
                                О нас
                            </Link>
                        </nav>

                        {/* Search Bar */}
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex-1 max-w-[200px] xl:max-w-[260px] relative mx-2"
                            role="search"
                        >

                        </form>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 xl:gap-4 shrink-0">
                            {/* Account / User */}
                            <Link
                                to="/login"
                                className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                aria-label="Войти в личный кабинет"
                            >
                                <User className="w-5.5 h-5.5 stroke-[1.8]" />
                            </Link>

                            {/* Favorites / Heart */}
                            <Link
                                to="/favorites"
                                className="relative p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                aria-label={`В избранном ${favoritesCount} товаров`}
                            >
                                <Heart className="w-5.5 h-5.5 stroke-[1.8]" />
                                {favoritesCount > 0 && (
                                    <span className="absolute top-1 right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white ring-2 ring-white select-none">
                                        {favoritesCount}
                                    </span>
                                )}
                            </Link>

                            {/* Shopping Bag / Cart */}
                            <Link
                                to="/catalog"
                                className="relative p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                aria-label={`В корзине ${cartCount} товаров`}
                            >
                                <ShoppingBag className="w-5.5 h-5.5 stroke-[1.8]" />
                                {cartCount > 0 && (
                                    <span className="absolute top-1 right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white ring-2 ring-white select-none">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>

                    </div>

                    {/* MOBILE LAYOUT */}
                    <div className="lg:hidden flex flex-col py-3">

                        {/* Top Row */}
                        <div className="flex items-center justify-between h-12">

                            {/* Hamburger Menu */}
                            <button
                                ref={toggleButtonRef}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 -ml-2 text-slate-900 hover:bg-slate-50 active:bg-slate-100 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                aria-expanded={isMenuOpen}
                                aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>

                            {/* Logo */}
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-1.5 text-lg font-bold text-slate-900 tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md"
                                aria-label="Accesora Home"
                            >
                                <svg className="w-6 h-6 text-blue-600 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 20L12 4L20 20H16L12 12L8 20H4Z" />
                                </svg>
                                <span className="font-extrabold tracking-tight">Market</span>
                            </Link>

                            {/* Quick Actions */}
                            {/* Quick Actions (Мобильная версия) */}
                            <div className="flex items-center gap-0.5 -mr-2">
                                {/* Favorites / Heart */}
                                <Link
                                    to="/favorites"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="relative p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                    aria-label={`В избранном ${favoritesCount} товаров`}
                                >
                                    <Heart className="w-5.5 h-5.5 stroke-[1.8]" />
                                    {favoritesCount > 0 && (
                                        <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white ring-2 ring-white">
                                            {favoritesCount}
                                        </span>
                                    )}
                                </Link>

                                {/* Shopping Bag / Cart (ДОБАВЛЕНО) */}
                                <Link
                                    to="/catalog"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="relative p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                    aria-label={`В корзине ${cartCount} товаров`}
                                >
                                    <ShoppingBag className="w-5.5 h-5.5 stroke-[1.8]" />
                                    {cartCount > 0 && (
                                        <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white ring-2 ring-white">
                                            {cartCount}
                                        </span>
                                    )}
                                </Link>

                                {/* User */}
                                <Link
                                    to="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                                    aria-label="Личный кабинет"
                                >
                                    <User className="w-5.5 h-5.5 stroke-[1.8]" />
                                </Link>
                            </div>

                        </div>

                        {/* Bottom Row - Search */}
                        <div className="mt-2.5">
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="relative w-full"
                                role="search"
                            >

                            </form>
                        </div>

                    </div>

                </div>

                {/* MOBILE NAVIGATION DRAWER */}
                {isMenuOpen && (
                    <>
                        {/* Backdrop overlay */}
                        <div
                            className="lg:hidden fixed inset-0 top-[145px] sm:top-[137px] bg-slate-900/20 backdrop-blur-xs z-40 transition-opacity duration-200"
                            onClick={() => setIsMenuOpen(false)}
                            aria-hidden="true"
                        />
                        {/* Drawer */}
                        <div
                            ref={menuRef}
                            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl z-50 transform origin-top transition-transform duration-200 ease-out"
                        >
                            <nav className="flex flex-col p-4 gap-1" aria-label="Мобильная навигация">
                                <NavLink to="/" end className={mobileNavLinkClass}>
                                    Главная
                                </NavLink>
                                <NavLink to="/catalog" className={mobileNavLinkClass}>
                                    Каталог
                                </NavLink>

                                <Link to="/aboutus" onClick={() => setIsMenuOpen(false)} className="flex items-center w-full px-4 py-3.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-gray-900">
                                    О нас
                                </Link>
                            </nav>
                        </div>
                    </>
                )}
            </header>
        </>
    );
}