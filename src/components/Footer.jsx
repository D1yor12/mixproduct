import { STORE_INFO } from '../data/storeData';
import Logo from './Logo';
import { Send, Phone } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#181818] pt-16 pb-12 text-[#8A8A8A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#181818]">
          
          {/* Left Column: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="inline-block">
              <Logo className="h-9" />
            </a>
            <p className="text-sm text-[#8A8A8A] max-w-sm leading-relaxed">
              Техника для вашего дома и вашего стиля.
            </p>
            <p className="text-xs text-[#666666]">
              {STORE_INFO.address}
            </p>
          </div>

          {/* Center Column: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Навигация
            </span>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-[#C8A45D] transition-colors">Главная</a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#C8A45D] transition-colors">Каталог</a>
              </li>
              <li>
                <a href="#brands" className="hover:text-[#C8A45D] transition-colors">Бренды</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#C8A45D] transition-colors">Преимущества</a>
              </li>
              <li>
                <a href="#store" className="hover:text-[#C8A45D] transition-colors">О магазине</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C8A45D] transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          {/* Right Column: Contacts & Socials */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Связь и соцсети
            </span>
            <div className="space-y-2 text-sm">
              <a 
                href={`tel:${STORE_INFO.phoneRaw}`} 
                className="flex items-center gap-2 text-white hover:text-[#C8A45D] font-semibold transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#C8A45D] flex-shrink-0" />
                <span className="whitespace-nowrap">{STORE_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={STORE_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#111111] border border-[#222222] text-[#F5F5F3] hover:text-[#C8A45D] hover:border-[#C8A45D]/50 transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>

                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#111111] border border-[#222222] text-[#F5F5F3] hover:text-[#C8A45D] hover:border-[#C8A45D]/50 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 text-[#666666]">
          <p>
            © {STORE_INFO.year} {STORE_INFO.name}. Все права защищены.
          </p>

          <p className="flex items-center gap-1.5 whitespace-nowrap">
            <span>Телефон:</span>
            <a href={`tel:${STORE_INFO.phoneRaw}`} className="text-[#8A8A8A] hover:text-[#C8A45D] whitespace-nowrap">
              {STORE_INFO.phone}
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
