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
                Stay Updated on Special Offers
              </h3>
              <p className="text-sm text-blue-100 opacity-90 leading-relaxed">
                Subscribe to our newsletter for exclusive discounts, new arrivals, and weekly product updates directly to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full lg:max-w-md">
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full h-12 pl-4 pr-10 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-100/75 text-sm focus:outline-none focus:bg-white/15 focus:border-white focus:ring-4 focus:ring-white/10 transition-all duration-150"
                  />
                  <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-blue-100/70 pointer-events-none" />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-white hover:bg-blue-50 active:bg-blue-100 text-[#2563EB] font-bold text-sm rounded-xl shadow-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 cursor-pointer"
                >
                  Subscribe
                  <Send className="w-4 h-4" />
                </button>
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
              <span className="font-black text-xl tracking-tight">Accesora</span>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Your ultimate destination for premium lifestyle, travel, and tech accessories. Elevating your daily essentials since 2020.
            </p>

            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span>123 Innovation Drive, Tech Suite 404, San Francisco, CA</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                <a href="tel:+18005550199" className="hover:text-white transition-colors">+1 (800) 555-0199</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                <a href="mailto:support@accesora.com" className="hover:text-white transition-colors">support@accesora.com</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Categories */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-5 select-none">
              Categories
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/catalog?category=electronics" className="text-slate-400 hover:text-white transition-colors">Electronics</Link></li>
              <li><Link to="/catalog?category=clothing" className="text-slate-400 hover:text-white transition-colors">Clothing</Link></li>
              <li><Link to="/catalog?category=home" className="text-slate-400 hover:text-white transition-colors">Home & Living</Link></li>
              <li><Link to="/catalog?category=food" className="text-slate-400 hover:text-white transition-colors">Food & Pantry</Link></li>
              <li><Link to="/catalog?category=accessories" className="text-slate-400 hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/categories" className="text-[#2563EB] hover:text-blue-400 font-semibold transition-colors">View All</Link></li>
            </ul>
          </div>

          {/* Column 3: Shop */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-5 select-none">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/catalog" className="hover:text-white transition-colors">Catalog</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Deals & Offers</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Featured Brands</Link></li>
              <li><Link to="/favorites" className="hover:text-white transition-colors">Favorites</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-5 select-none">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/catalog" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Easy Returns</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 5: Social Media */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
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
                {/* <Facebook className="w-4.5 h-4.5" /> */}
              </a>
             
            </div>
          </div>

        </div>
      </div>

      {/* 3. BOTTOM BAR */}
      <div className="w-full border-t border-slate-800/80 bg-[#0B0F19]/50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Copyright */}
          <span className="text-xs text-slate-500 text-center md:text-left select-none">
            © 2026 Accesora. Все права защищены.
          </span>

          {/* Center: Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-slate-500">
            <Link to="/catalog" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/catalog" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>

          {/* Right: Payment Badges */}
          

        </div>
      </div>

    </footer>
  );
}