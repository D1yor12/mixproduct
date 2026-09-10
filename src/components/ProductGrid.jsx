import { useState } from 'react';
import { PRODUCTS, STORE_INFO } from '../data/storeData';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { Send } from 'lucide-react';

const FILTER_TABS = [
  { id: 'all', label: 'Все' },
  { id: 'smartphones', label: 'Смартфоны' },
  { id: 'premium', label: 'Электроника' },
  { id: 'appliances', label: 'Бытовая техника' },
  { id: 'accessories', label: 'Аксессуары' },
];

export default function ProductGrid({ activeCategory, onCategoryChange, onRequestProduct }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const currentTab = activeCategory || 'all';

  const filteredProducts = currentTab === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === currentTab);

  return (
    <section id="catalog" className="py-24 bg-[#0A0A0A] border-t border-[#181818] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#C8A45D]">
              Каталог товаров
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F3] tracking-tight">
              Популярные модели
            </h2>
            <p className="text-sm text-[#8A8A8A]">
              Актуальные устройства в наличии и под заказ с официальной гарантией.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {FILTER_TABS.map((tab) => {
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onCategoryChange(tab.id)}
                  type="button"
                  className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#C8A45D] text-[#080808] shadow-gold-sm font-bold'
                      : 'bg-[#141414] text-[#8A8A8A] hover:text-[#F5F5F3] hover:bg-[#1A1A1A] border border-[#222222]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Action Button: Смотреть весь каталог */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#111111] border border-[#222222] max-w-xl mx-auto">
            <div className="text-left flex-1">
              <p className="text-sm font-bold text-white">
                Нужна модель, которой нет в превью?
              </p>
              <p className="text-xs text-[#8A8A8A] mt-0.5">
                Ежедневные поставки и полный прайс-лист в нашем Telegram-канале
              </p>
            </div>
            
            <a
              href={STORE_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#080808] bg-[#C8A45D] hover:bg-[#D8B873] rounded-lg transition-all duration-200 shadow-gold-sm"
            >
              <span>Смотреть весь каталог</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onRequestProduct={onRequestProduct}
        />
      )}
    </section>
  );
}
