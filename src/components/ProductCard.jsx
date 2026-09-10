import { Eye } from 'lucide-react';

export default function ProductCard({ product, onOpenDetails }) {
  return (
    <div className="group relative rounded-xl bg-[#111111] border border-[#202020] hover:border-[#C8A45D]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg">
      
      {/* Top Media Area */}
      <div className="relative aspect-[4/3] bg-[#0A0A0A] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-70" />

        {/* Brand Tag / Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-[#080808]/85 text-[#C8A45D] border border-[#2A2A2A] backdrop-blur-sm">
            {product.brand}
          </span>
          {product.badge && (
            <span className="px-2 py-0.5 text-[10px] font-medium rounded bg-[#C8A45D]/15 text-[#E5CCA0] border border-[#C8A45D]/30 backdrop-blur-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Quick View Button on Hover */}
        <button
          onClick={() => onOpenDetails(product)}
          type="button"
          className="absolute bottom-3 right-3 z-10 p-2 rounded-lg bg-[#080808]/90 text-white border border-[#333333] opacity-0 group-hover:opacity-100 transition-all duration-200 hover:border-[#C8A45D] hover:text-[#C8A45D]"
          aria-label={`Быстрый просмотр ${product.name}`}
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] text-[#8A8A8A]">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              В наличии
            </span>
            <span>Малик, 44B</span>
          </div>

          <h3 className="text-base font-bold text-[#F5F5F3] group-hover:text-white transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-[#8A8A8A] line-clamp-2 leading-relaxed font-normal">
            {product.specs}
          </p>
        </div>

        {/* Price status & CTA */}
        <div className="pt-3 border-t border-[#1C1C1C] flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#8A8A8A] block">
              Стоимость
            </span>
            <span className="text-sm font-bold text-[#C8A45D]">
              {product.priceLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onOpenDetails(product)}
            className="px-3.5 py-1.5 text-xs font-semibold text-[#F5F5F3] bg-[#181818] hover:bg-[#C8A45D] hover:text-[#080808] border border-[#2A2A2A] hover:border-[#C8A45D] rounded-md transition-all duration-200"
          >
            Подробнее
          </button>
        </div>
      </div>

    </div>
  );
}
