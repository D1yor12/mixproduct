import { STORE_INFO } from '../data/storeData';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function PremiumSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#080808] via-[#050505] to-[#0A0A0A] border-t border-[#1C1C1C] relative overflow-hidden">
      {/* Subtle luxury glow effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C8A45D]/[0.05] blur-[180px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Editorial content */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#C8A45D]/30 text-xs font-semibold text-[#C8A45D]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Эксклюзивная категория</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F3] tracking-tight leading-[1.12]">
              Премиальная техника —{' '}
              <span className="gold-gradient-text">без компромиссов.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
              <p>
                MixProduct предлагает не только повседневную потребительскую электронику, но и устройства премиального и люксового сегмента для тех, кто ценит исключительное качество материалов, эстетику и максимальную производительность.
              </p>
              <p>
                От флагманских смартфонов в титановых корпусах и профессиональных рабочих станций до премиальной акустики и передовой техники для дома — каждый девайс проходит строгую проверку подлинности.
              </p>
            </div>

            {/* Premium feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0F0F0F] border border-[#202020]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-white">Титановые корпуса & Сапфир</h3>
                  <p className="text-[11px] text-[#8A8A8A] mt-0.5">Флагманы последнего поколения</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0F0F0F] border border-[#202020]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-white">Hi-Fi Звучание</h3>
                  <p className="text-[11px] text-[#8A8A8A] mt-0.5">Безупречная акустика премиум-класса</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0F0F0F] border border-[#202020]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-white">Интеллектуальный дом</h3>
                  <p className="text-[11px] text-[#8A8A8A] mt-0.5">Инновационная бытовая техника</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0F0F0F] border border-[#202020]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-white">Персональный подбор</h3>
                  <p className="text-[11px] text-[#8A8A8A] mt-0.5">Консультация в шоуруме на Малика 44B</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={STORE_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#080808] bg-[#C8A45D] hover:bg-[#D8B873] rounded-md transition-all duration-200 shadow-gold-sm"
              >
                <span>Получить консультацию</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Cinematic Imagery Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Image 1: High-end acoustics */}
              <div className="relative rounded-2xl overflow-hidden border border-[#262626] aspect-[4/5] bg-[#0E0E0E] group">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
                  alt="Премиальная акустика"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold text-[#C8A45D] uppercase tracking-wider block">Акустика</span>
                  <span className="text-sm font-bold text-white">Иммерсивный звук</span>
                </div>
              </div>

              {/* Image 2: Flagship device / styling */}
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-[#262626] aspect-square bg-[#0E0E0E] group">
                  <img
                    src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop"
                    alt="Премиальные планшеты и ноутбуки"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-bold text-[#C8A45D] uppercase tracking-wider block">Флагманы</span>
                    <span className="text-xs sm:text-sm font-bold text-white">OLED & Мощность</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#111111] border border-[#262626] space-y-2">
                  <div className="flex items-center gap-2 text-[#C8A45D]">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Шоурум MixProduct</span>
                  </div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    Оцените эргономику, материалы и качество сборки вживую в нашем магазине на Малике.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
