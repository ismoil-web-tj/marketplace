import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Headphones, 
  Users, 
  Award, 
  Heart, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail,
  MessageCircle,
  Send,
  X,
} from 'lucide-react';

export default function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const PHONE_NUMBER = '992927619070';
  const PHONE_DISPLAY = '+992 92 761 90 70';

  const contactMethods = [
    {
      name: 'Telegram',
      value: '@ваш_username', // замените на ваш юзернейм, если есть
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

  const stats = [
    { id: 1, value: '50,000+', label: 'Довольные клиенты', icon: Users },
    { id: 2, value: '100+', label: 'Товаров в каталоге', icon: ShoppingBag },
    { id: 4, value: '24/7', label: 'Поддержка клиентов', icon: Headphones },
  ];

  const values = [
    {
      id: 1,
      title: 'Гарантия качества',
      description: 'Мы тщательно отбираем поставщиков и гарантируем 100% оригинальность и надежность каждого товара в нашем каталоге.',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 2,
      title: 'Быстрая доставка',
      description: 'Оперативная и бережная доставка по Душанбе, Худжанду и всем остальным регионам Таджикистана в кратчайшие сроки.',
      icon: Truck,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 3,
      title: 'Поддержка 24/7',
      description: 'Наша служба заботы о клиентах всегда на связи, чтобы оперативно помочь вам с выбором, оформлением или возвратом.',
      icon: Headphones,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 4,
      title: 'Выгодные цены',
      description: 'Прямые контракты с производителями позволяют нам предлагать честные цены в сомони без скрытых переплат.',
      icon: Award,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
  ];

  const contacts = [
    { id: 1, icon: MapPin, text: '' },
    { id: 2, icon: Phone, text: '+992 (99) 111-22-33, +992 (44) 600-00-00' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200">
                  Главная
                </Link>
              </li>
              <li className="text-slate-500">/</li>
              <li className="text-slate-200 font-medium">О нас</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-6">
              <Sparkles className="w-3.5 h-3.5" /> О проекте  Market
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Ваш надежный маркетплейс качественных товаров
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Мы создаем современную экосистему покупок в Таджикистане, объединяя тысячи проверенных товаров, честные цены в национальной валюте TJS и безупречный сервис доставки.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y-0 divide-x-0 sm:divide-y-0 lg:divide-x divide-slate-100">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="flex flex-col items-center text-center lg:px-4 first:pl-0 last:pr-0">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text side */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Наша история и миссия
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Маркетплейс <strong className="text-slate-900">Market</strong> зародился как амбициозная идея — упростить процесс онлайн-покупок в Таджикистане, сделать его прозрачным, безопасным и по-настоящему удобным. Мы понимали, как сложно порой найти оригинальные товары по справедливой стоимости и без утомительного ожидания.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Сегодня Market — это динамично развивающаяся платформа. Мы ведем расчеты исключительно в национальной валюте <strong className="text-slate-900">Сомони (TJS)</strong>, сотрудничаем напрямую с официальными дистрибьюторами и развиваем собственную логистическую сеть. Наша цель — укрепить доверие к e-commerce в стране, предоставляя клиентам стандарты обслуживания мирового уровня.
            </p>
            <div className="border-l-4 border-blue-600 pl-4 py-1 my-4">
              <p className="italic text-slate-700 text-sm sm:text-base font-medium">
                «Мы стремимся построить не просто интернет-магазин, а надежного помощника для каждой семьи в Таджикистане, где каждый клик ведет к радости от удачной покупки.»
              </p>
              <span className="block text-xs sm:text-sm text-slate-500 mt-2 font-semibold">
                — Команда основателей Market
              </span>
            </div>
          </div>

          {/* Interactive Card / Photo placeholder side */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
                <div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">Заботимся о вашем комфорте</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">
                    Каждый заказ тщательно упаковывается и проверяется перед отправкой. Мы берем на себя все заботы по логистике, чтобы вы могли просто наслаждаться шопингом.
                  </p>
                </div>
                
                {/* Contact quick details inside the block */}
                <div className="border-t border-white/20 pt-4 space-y-2">
                  {contacts.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <div key={contact.id} className="flex items-center gap-3 text-xs sm:text-sm text-blue-50">
                        <Icon className="w-4 h-4 shrink-0 opacity-80" />
                        <span>{contact.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Values / Why Choose Us Section */}
      <section className="bg-slate-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Наши ценности
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Мы строим свою работу на принципах честности, технологичности и безусловного уважения к правам потребителя.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.id} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-lg ${value.bgColor} ${value.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-xl">
          <div className="absolute -left-16 -top-16 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Готовы к приятным покупкам?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-8 leading-relaxed">
              Откройте для себя широкий ассортимент товаров в нашем каталоге. Начните делать выгодные покупки в сомони прямо сейчас с гарантией качества и быстрой доставкой.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/catalog" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-semibold rounded-xl text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white transition-all duration-200"
              >
                Перейти в каталог
              </Link>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-sm sm:text-base font-semibold rounded-xl text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white transition-all duration-200"
              >
                Связаться с разработчиком
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-sm bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Связаться с разработчиком
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Выберите удобный способ связи
            </p>

            <div className="flex flex-col gap-3">
              {contactMethods.map(({ name, value, href, icon: Icon, color }) => (
                
                  key={name}
                  href={href}
                  target={name === 'Телефон' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className={`flex items-center justify-center w-11 h-11 rounded-full ${color} text-white shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900">{name}</span>
                    <span className="text-xs text-slate-500">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}