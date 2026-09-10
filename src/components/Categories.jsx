import { CATEGORIES } from '../data/storeData';
import { ArrowUpRight } from 'lucide-react';

export default function Categories({ onSelectCategory }) {
  return (
    <section id="categories" className="py-20 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#C8A45D]">
              Направления магазина
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F3] tracking-tight">
              Выберите свою технику
            </h2>
          </div>
          <p className="text-sm text-[#8A8A8A] mt-3 md:mt-0 max-w-md">
            От актуальных флагманских смартфонов до премиальной климатической и кухонной техники.
          </p>
        </div>

        {/* Categories Grid: 4 columns on lg, 2 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                if (onSelectCategory) onSelectCategory(cat.id);
                const el = document.getElementById('catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  if (onSelectCategory) onSelectCategory(cat.id);
                  const el = document.getElementById('catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative h-[360px] rounded-xl overflow-hidden cursor-pointer border border-[#202020] hover:border-[#C8A45D]/60 hover:-translate-y-1 transition-all duration-300 bg-[#111111] flex flex-col justify-end p-6"
            >
              {/* Background Image with subtle zoom on hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.7] group-hover:brightness-[0.8]"
                  loading="lazy"
                />
                {/* Gradient Overlays for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
                <div className="absolute inset-0 bg-[#080808]/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded bg-[#080808]/80 text-[#C8A45D] border border-[#2A2A2A] backdrop-blur-sm">
                  {cat.featuredTag}
                </span>
              </div>

              {/* Arrow Icon button */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#141414]/90 border border-[#2A2A2A] flex items-center justify-center text-white group-hover:border-[#C8A45D] group-hover:text-[#C8A45D] group-hover:bg-[#080808] transition-all duration-200">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 space-y-2">
                {/* Gold Accent Line */}
                <div className="w-8 h-[2px] bg-[#C8A45D] group-hover:w-16 transition-all duration-300 rounded-full" />
                
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#C8A45D] transition-colors">
                  {cat.title}
                </h3>
                
                <p className="text-xs text-[#8A8A8A] line-clamp-1 font-normal">
                  {cat.subtitle}
                </p>

                <p className="text-[11px] text-[#A0A0A0] font-medium pt-1">
                  {cat.count}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
