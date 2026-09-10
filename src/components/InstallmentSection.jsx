import { STORE_INFO } from '../data/storeData';
import { CreditCard, Send, Phone } from 'lucide-react';

export default function InstallmentSection() {
  const telegramInstallmentUrl = `${STORE_INFO.telegramUrl}?text=${encodeURIComponent('Здравствуйте! Хочу уточнить условия покупки в рассрочку в MixProduct.')}`;

  return (
    <section id="installment" className="py-24 bg-[#080808] border-t border-[#181818] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-2xl bg-gradient-to-br from-[#121212] via-[#0E0E0E] to-[#141414] border border-[#242424] p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          {/* Subtle gold accent aura */}
          <div 
            className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#C8A45D]/[0.08] blur-[100px] pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="max-w-3xl space-y-6 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#2F2F2F] text-xs font-semibold text-[#C8A45D]">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Удобная оплата</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F3] tracking-tight leading-tight">
              Рассрочка — выбирайте удобный формат покупки
            </h2>

            <p className="text-base sm:text-lg text-[#8A8A8A] max-w-2xl leading-relaxed">
              Хотите приобрести технику сейчас? В MixProduct доступна покупка в рассрочку.
            </p>

            {/* Realistic Process Steps (no fake interest rates, no fake bank promises) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0A0A0A]/80 border border-[#202020] space-y-1.5">
                <span className="text-xs font-extrabold text-[#C8A45D] tracking-wider uppercase block">
                  Шаг 01
                </span>
                <p className="text-sm font-bold text-white">Выбор модели</p>
                <p className="text-xs text-[#8A8A8A]">
                  Определитесь с нужным смартфоном, гаджетом или бытовой техникой.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0A0A0A]/80 border border-[#202020] space-y-1.5">
                <span className="text-xs font-extrabold text-[#C8A45D] tracking-wider uppercase block">
                  Шаг 02
                </span>
                <p className="text-sm font-bold text-white">Консультация</p>
                <p className="text-xs text-[#8A8A8A]">
                  Напишите нам в Telegram или позвоните для расчета удобного формата.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0A0A0A]/80 border border-[#202020] space-y-1.5">
                <span className="text-xs font-extrabold text-[#C8A45D] tracking-wider uppercase block">
                  Шаг 03
                </span>
                <p className="text-sm font-bold text-white">Получение</p>
                <p className="text-xs text-[#8A8A8A]">
                  Оформите технику и заберите её в магазине Малик, 44B.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <a
                href={telegramInstallmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-[#080808] bg-[#C8A45D] hover:bg-[#D8B873] rounded-md transition-all duration-200 shadow-gold-sm"
              >
                <span>Уточнить условия</span>
                <Send className="w-4 h-4" />
              </a>

              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F5F5F3] bg-[#1A1A1A] hover:bg-[#222222] border border-[#2D2D2D] rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C8A45D]" />
                <span>Позвонить: {STORE_INFO.phone}</span>
              </a>
            </div>

            <p className="text-[11px] text-[#8A8A8A]/80 pt-2">
              * Подробные требования к документам и доступные варианты уточняйте у менеджеров MixProduct.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
