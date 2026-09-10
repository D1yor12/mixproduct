import { BRANDS } from '../data/storeData';
import { CheckCircle2 } from 'lucide-react';

export default function Brands({ onSelectBrand }) {
  return (
    <section id="brands" className="py-20 bg-[#080808] border-t border-[#181818] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#C8A45D]">
            Мировые производители
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F3] tracking-tight">
            Популярные бренды
          </h2>
          <p className="text-base text-[#8A8A8A]">
            Выбирайте технику ведущих мировых производителей с гарантией качества и оригинальности.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              onClick={() => {
                if (onSelectBrand) onSelectBrand(brand.name);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && onSelectBrand) {
                  onSelectBrand(brand.name);
                }
              }}
              className="group relative p-5 rounded-xl bg-[#111111] border border-[#202020] hover:border-[#C8A45D]/50 hover:bg-[#151515] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Top Accent line indicator */}
              <div className="w-6 h-[2px] bg-[#222222] group-hover:bg-[#C8A45D] group-hover:w-10 transition-all duration-300 rounded-full mb-4" />

              <div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#F5F5F3] group-hover:text-white transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-[#8A8A8A] mt-1 line-clamp-2 leading-relaxed font-normal">
                  {brand.category}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                <span className="text-[10px] text-[#C8A45D] font-medium tracking-wide">
                  {brand.count}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8A8A8A]/40 group-hover:text-[#C8A45D] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
