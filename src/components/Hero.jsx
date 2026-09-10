import { STORE_INFO } from '../data/storeData';
import { ArrowRight, MapPin, ShieldCheck, CreditCard, Sparkles, Store } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      {/* Ambient subtle luxury lighting */}
      <div 
        className="absolute top-1/4 right-10 w-[500px] h-[500px] rounded-full bg-[#C8A45D]/[0.06] blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography and CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Store Location & Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-medium text-[#C8A45D]">
              <span className="w-2 h-2 rounded-full bg-[#C8A45D] animate-pulse" />
              <span>Ташкент • ТРЦ «Малика», 44B</span>
              <span className="text-[#8A8A8A] hidden sm:inline">• 09:00 — 22:00</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F5F5F3] leading-[1.08]">
                Техника, которая выбирает{' '}
                <span className="gold-gradient-text">ваш стиль.</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#8A8A8A] font-normal max-w-2xl leading-relaxed">
                {STORE_INFO.subtagline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-[#080808] bg-[#C8A45D] hover:bg-[#D8B873] rounded-md transition-all duration-200 shadow-gold-sm hover:shadow-gold-md focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
              >
                <span>Смотреть каталог</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#store"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F5F5F3] bg-[#141414] hover:bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#C8A45D]/50 rounded-md transition-all duration-200"
              >
                <Store className="w-4 h-4 text-[#C8A45D]" />
                <span>Посетить магазин</span>
              </a>
            </div>

            {/* Information Row: Physical store, Installment, Warranty */}
            <div className="pt-6 border-t border-[#1C1C1C] grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#F5F5F3]">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A45D] flex-shrink-0" />
                  <span>Физический магазин</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#8A8A8A]">
                  Малик, 44B
                </p>
              </div>

              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#F5F5F3]">
                  <CreditCard className="w-3.5 h-3.5 text-[#C8A45D] flex-shrink-0" />
                  <span>Рассрочка</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#8A8A8A]">
                  Удобный формат
                </p>
              </div>

              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#F5F5F3]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8A45D] flex-shrink-0" />
                  <span>Гарантия</span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#8A8A8A]">
                  100% Оригинал
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Composed Product Imagery */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Primary Showcase Card */}
            <div className="relative w-full max-w-md lg:max-w-none rounded-xl overflow-hidden bg-gradient-to-b from-[#181818] to-[#0F0F0F] border border-[#262626] p-4 sm:p-5 shadow-2xl group hover:border-[#C8A45D]/40 transition-all duration-300">
              
              {/* Product Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#080808]/80 border border-[#333333] text-[11px] font-semibold text-[#C8A45D]">
                  <Sparkles className="w-3 h-3 text-[#C8A45D]" />
                  <span>Флагманские коллекции</span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#8A8A8A] font-semibold">
                  MixProduct
                </span>
              </div>

              {/* Main Image: Premium Smartphone Photography */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#0A0A0A] mb-4">
                <img
                  src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop"
                  alt="Флагманский смартфон в MixProduct"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#C8A45D] font-bold">Смартфоны & Флагманы</p>
                    <p className="text-base font-bold text-white">Apple • Samsung • Xiaomi • Google</p>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-medium bg-[#080808]/90 text-white rounded border border-[#333]">
                    В наличии
                  </span>
                </div>
              </div>

              {/* Mini Devices Row */}
              <div className="grid grid-cols-3 gap-2.5">
                {/* Device 1: Laptop */}
                <div className="p-2.5 rounded-lg bg-[#111111] border border-[#222222] flex flex-col justify-between hover:border-[#C8A45D]/40 transition-colors">
                  <div className="w-full aspect-square rounded overflow-hidden mb-1.5 bg-[#080808]">
                    <img 
                      src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=300&auto=format&fit=crop" 
                      alt="Премиальные ноутбуки"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] text-[#8A8A8A] block">Ноутбуки</span>
                  <span className="text-xs font-semibold text-white truncate">MacBook Pro</span>
                </div>

                {/* Device 2: Home Appliance */}
                <div className="p-2.5 rounded-lg bg-[#111111] border border-[#222222] flex flex-col justify-between hover:border-[#C8A45D]/40 transition-colors">
                  <div className="w-full aspect-square rounded overflow-hidden mb-1.5 bg-[#080808]">
                    <img 
                      src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=300&auto=format&fit=crop" 
                      alt="Бытовая техника премиум-класса"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] text-[#8A8A8A] block">Бытовая</span>
                  <span className="text-xs font-semibold text-white truncate">Кофемашины</span>
                </div>

                {/* Device 3: Acoustics / Accessories */}
                <div className="p-2.5 rounded-lg bg-[#111111] border border-[#222222] flex flex-col justify-between hover:border-[#C8A45D]/40 transition-colors">
                  <div className="w-full aspect-square rounded overflow-hidden mb-1.5 bg-[#080808]">
                    <img 
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop" 
                      alt="Премиальная акустика"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] text-[#8A8A8A] block">Аудио</span>
                  <span className="text-xs font-semibold text-white truncate">AirPods Max</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
