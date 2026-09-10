import { BENEFITS } from '../data/storeData';
import { ShieldCheck, CreditCard, Store, Award } from 'lucide-react';

const ICON_MAP = {
  ShieldCheck,
  CreditCard,
  Store,
  Award,
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-[#080808] border-t border-[#181818] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#C8A45D]">
            Надёжность и сервис
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F3] tracking-tight">
            Почему MixProduct?
          </h2>
          <p className="text-sm sm:text-base text-[#8A8A8A]">
            Мы создали магазин, в котором удобно выбирать, тестировать и покупать оригинальную электронику в Ташкенте.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((item) => {
            const IconComponent = ICON_MAP[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.title}
                className="group relative p-7 rounded-xl bg-[#111111] border border-[#202020] hover:border-[#C8A45D]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Gold Accent Top Bar */}
                <div className="w-8 h-[2px] bg-[#222222] group-hover:bg-[#C8A45D] group-hover:w-14 transition-all duration-300 rounded-full mb-6" />

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#161616] border border-[#262626] group-hover:border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] transition-colors">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#F5F5F3] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-6 mt-6 border-t border-[#1C1C1C]">
                  <span className="text-[11px] font-semibold text-[#C8A45D] tracking-wide">
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
