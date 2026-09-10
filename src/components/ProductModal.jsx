import { useEffect } from 'react';
import { STORE_INFO } from '../data/storeData';
import { X, Send, Phone, ShieldCheck, CreditCard, Store } from 'lucide-react';

export default function ProductModal({ product, onClose, onRequestProduct }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const inquiryUrl = `${STORE_INFO.telegramUrl}?text=${encodeURIComponent(`Здравствуйте! Интересует наличие и цена на: ${product.name}`)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#080808]/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to close */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#111111] border border-[#2A2A2A] rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">
        
        {/* Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F1F1F]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded bg-[#080808] text-[#C8A45D] border border-[#2A2A2A]">
              {product.brand}
            </span>
            {product.badge && (
              <span className="px-2 py-0.5 text-xs font-medium rounded bg-[#C8A45D]/15 text-[#E5CCA0] border border-[#C8A45D]/30">
                {product.badge}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg text-[#8A8A8A] hover:text-white hover:bg-[#1A1A1A] transition-colors"
            aria-label="Закрыть окно"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            {/* Image */}
            <div className="sm:col-span-5 aspect-[4/3] rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#222222]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Info */}
            <div className="sm:col-span-7 space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#F5F5F3] leading-tight">
                {product.name}
              </h2>
              
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#8A8A8A]">Стоимость</span>
                <p className="text-lg font-bold text-[#C8A45D]">
                  {product.priceLabel}
                </p>
                <p className="text-[11px] text-[#8A8A8A]">
                  Актуальный курс и наличие уточняйте у менеджера
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed pt-1">
                {product.description}
              </p>
            </div>
          </div>

          {/* Specifications */}
          <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#1F1F1F] space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A45D]">
              Характеристики модели
            </h3>
            <p className="text-xs sm:text-sm text-[#D1D1D1] leading-relaxed">
              {product.specs}
            </p>
          </div>

          {/* Guarantees row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#141414] border border-[#222222]">
              <ShieldCheck className="w-4 h-4 text-[#C8A45D] flex-shrink-0" />
              <span className="text-xs text-[#F5F5F3] font-medium">Официальная гарантия</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#141414] border border-[#222222]">
              <CreditCard className="w-4 h-4 text-[#C8A45D] flex-shrink-0" />
              <span className="text-xs text-[#F5F5F3] font-medium">Доступно в рассрочку</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#141414] border border-[#222222]">
              <Store className="w-4 h-4 text-[#C8A45D] flex-shrink-0" />
              <span className="text-xs text-[#F5F5F3] font-medium">Малик, 44B</span>
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="p-6 border-t border-[#1F1F1F] bg-[#0E0E0E] flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={(e) => {
              if (e && typeof e.preventDefault === 'function') e.preventDefault();
              if (typeof onRequestProduct === 'function' && product) {
                onRequestProduct(product);
              }
              if (typeof onClose === 'function') {
                onClose();
              }
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 50);
            }}
            className="flex items-center justify-center gap-2 w-full sm:flex-1 py-3 px-5 text-sm font-bold text-[#080808] bg-[#C8A45D] hover:bg-[#D8B873] rounded-lg transition-all duration-200 shadow-gold-sm"
          >
            <span>Оставить заявку на модель</span>
          </button>

          <a
            href={inquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-4 text-sm font-semibold text-white bg-[#181818] hover:bg-[#222222] border border-[#2B2B2B] rounded-lg transition-colors"
          >
            <Send className="w-4 h-4 text-[#C8A45D]" />
            <span>Telegram</span>
          </a>

          <a
            href={`tel:${STORE_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-4 text-sm font-semibold text-[#F5F5F3] bg-[#181818] hover:bg-[#222222] border border-[#2A2A2A] rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C8A45D]" />
            <span>Позвонить</span>
          </a>
        </div>

      </div>
    </div>
  );
}
