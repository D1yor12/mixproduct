import { useState, useEffect } from 'react';
import { STORE_INFO, NAV_LINKS } from '../data/storeData';
import Logo from './Logo';
import { Menu, X, Send, Phone } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveHash('#' + sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-[#080808]/90 backdrop-blur-md border-b border-[#222222]/80 shadow-lg'
          : 'py-4 md:py-5 bg-transparent border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Official Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]"
          aria-label="MixProduct - На главную"
        >
          <Logo className={isScrolled ? "h-8 md:h-9" : "h-9 md:h-10"} />
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Основное меню">
          {NAV_LINKS.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md ${
                  isActive
                    ? 'text-[#C8A45D]'
                    : 'text-[#F5F5F3]/80 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#C8A45D] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Social & Quick Contact Buttons */}
        <div className="hidden sm:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
          {/* Telegram Button */}
          <a
            href={STORE_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-md bg-[#141414] hover:bg-[#1A1A1A] text-[#F5F5F3] border border-[#262626] hover:border-[#C8A45D]/60 transition-all duration-200 whitespace-nowrap flex-shrink-0"
            aria-label="Telegram канал MixProduct"
          >
            <Send className="w-3.5 h-3.5 text-[#C8A45D] flex-shrink-0" />
            <span>Telegram</span>
          </a>

          {/* Instagram Button */}
          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-md bg-[#141414] hover:bg-[#1A1A1A] text-[#F5F5F3] border border-[#262626] hover:border-[#C8A45D]/60 transition-all duration-200 whitespace-nowrap flex-shrink-0"
            aria-label="Instagram аккаунт MixProduct"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#C8A45D] flex-shrink-0" />
            <span>Instagram</span>
          </a>

          {/* Request Form Button */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-[#080808] bg-[#C8A45D] hover:bg-[#D8B873] rounded-md transition-all duration-200 shadow-sm whitespace-nowrap flex-shrink-0"
          >
            <span>Оставить заявку</span>
          </a>

          {/* Phone call pill */}
          <a
            href={`tel:${STORE_INFO.phoneRaw}`}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#F5F5F3] bg-[#141414] hover:bg-[#1A1A1A] border border-[#262626] rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0"
            aria-label={`Позвонить по номеру ${STORE_INFO.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#C8A45D] flex-shrink-0" />
            <span className="whitespace-nowrap">{STORE_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={STORE_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#C8A45D] bg-[#141414] border border-[#262626] rounded-md sm:hidden"
            aria-label="Telegram"
          >
            <Send className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F5F5F3] hover:text-[#C8A45D] bg-[#141414] border border-[#262626] rounded-md focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 ${isScrolled ? 'top-[57px]' : 'top-[68px] sm:top-[72px]'} bg-[#080808]/98 backdrop-blur-xl z-40 lg:hidden flex flex-col justify-between p-6 border-t border-[#222222] animate-fadeIn`}>
          <nav className="flex flex-col space-y-4 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium tracking-wide py-2 border-b border-white/[0.05] transition-colors ${
                  activeHash === link.href ? 'text-[#C8A45D] pl-2 font-semibold' : 'text-[#F5F5F3]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#222222]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold bg-[#C8A45D] text-[#080808] rounded-md transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Оставить заявку</span>
            </a>

            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold bg-[#141414] text-white border border-[#2B2B2B] rounded-md transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#C8A45D] flex-shrink-0" />
              <span className="whitespace-nowrap">{STORE_INFO.phone}</span>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={STORE_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold bg-[#141414] border border-[#262626] text-[#F5F5F3] rounded-md"
              >
                <Send className="w-4 h-4 text-[#C8A45D]" />
                <span>Telegram</span>
              </a>

              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold bg-[#141414] border border-[#262626] text-[#F5F5F3] rounded-md"
              >
                <InstagramIcon className="w-4 h-4 text-[#C8A45D]" />
                <span>Instagram</span>
              </a>
            </div>

            <p className="text-center text-xs text-[#8A8A8A] pt-2">
              {STORE_INFO.address} • {STORE_INFO.hours}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
