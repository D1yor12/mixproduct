import { STORE_INFO } from '../data/storeData';
import { MapPin, Clock, Navigation, Phone, CheckCircle2, Store } from 'lucide-react';

export default function StoreLocation() {
  return (
    <section id="store" className="py-24 bg-[#0A0A0A] border-t border-[#181818] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Store Details & Action */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-semibold text-[#C8A45D]">
              <Store className="w-3.5 h-3.5" />
              <span>Фирменный магазин</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F3] tracking-tight leading-tight">
              Приезжайте в MixProduct
            </h2>

            <p className="text-base sm:text-lg text-[#C8A45D] font-medium">
              Можно посмотреть технику вживую и получить консультацию.
            </p>

            <p className="text-sm text-[#8A8A8A] leading-relaxed">
              В отличие от виртуальных страниц без адреса, MixProduct — это реальный физический магазин в крупнейшем технологическом центре Ташкента (ТРЦ «Малика»). Приезжайте, протестируйте устройство перед покупкой и оформите официальную гарантию на месте.
            </p>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Address Card */}
              <div className="p-5 rounded-xl bg-[#111111] border border-[#222222] space-y-2">
                <div className="flex items-center gap-2 text-[#C8A45D]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-wider">Адрес магазина</span>
                </div>
                <p className="text-base font-bold text-white leading-snug">
                  Малик, 44B
                </p>
                <p className="text-xs text-[#8A8A8A]">
                  Ташкент, Узбекистан (ТРЦ «Малика»)
                </p>
              </div>

              {/* Working Hours Card */}
              <div className="p-5 rounded-xl bg-[#111111] border border-[#222222] space-y-2">
                <div className="flex items-center gap-2 text-[#C8A45D]">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-wider">График работы</span>
                </div>
                <p className="text-base font-bold text-white leading-snug">
                  Ежедневно
                </p>
                <p className="text-xs text-[#C8A45D] font-medium">
                  09:00 — 22:00
                </p>
              </div>

            </div>

            {/* Route Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-[#080808] bg-[#C8A45D] hover:bg-[#D8B873] rounded-md transition-all duration-200 shadow-gold-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Построить маршрут</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#F5F5F3] bg-[#141414] hover:bg-[#1C1C1C] border border-[#282828] rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C8A45D]" />
                <span>{STORE_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Showroom / Map Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#111111] border border-[#262626] p-4 sm:p-6 shadow-2xl">
              
              {/* Showroom Photo Card */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-[#080808]">
                <img
                  src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop"
                  alt="Электроника в MixProduct"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#C8A45D] font-bold block">
                      Локация
                    </span>
                    <span className="text-base font-bold text-white">
                      Ташкент, ТРЦ «Малика», магазин 44B
                    </span>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#080808]/90 text-[#C8A45D] rounded border border-[#333]">
                    Открыто до 22:00
                  </span>
                </div>
              </div>

              {/* Features in-store */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-[#D5D5D5]">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A45D] flex-shrink-0" />
                  <span>Удобная парковка возле торгового комплекса Малика</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#D5D5D5]">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A45D] flex-shrink-0" />
                  <span>Возможность протестировать экран, камеру и звук любого гаджета</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#D5D5D5]">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A45D] flex-shrink-0" />
                  <span>Помощь в переносе данных со старого смартфона на новый</span>
                </div>
              </div>

              {/* Direct Maps Quick Link */}
              <div className="mt-5 pt-4 border-t border-[#1F1F1F] flex items-center justify-between text-xs text-[#8A8A8A]">
                <span>Открыть в картах:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8A45D] hover:underline font-semibold"
                  >
                    Google Maps →
                  </a>
                  <a
                    href={STORE_INFO.yandexMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8A45D] hover:underline font-semibold"
                  >
                    Яндекс Карты →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
