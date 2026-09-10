import { useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { Send } from 'lucide-react';

export default function FloatingContact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Expanded pill label on hover / desktop */}
      <div 
        className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111]/95 border border-[#2B2B2B] text-xs font-semibold text-white shadow-xl transition-all duration-300 backdrop-blur-md ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Чат в Telegram</span>
      </div>

      {/* Floating Button */}
      <a
        href={STORE_INFO.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-12 h-12 rounded-full bg-[#111111] hover:bg-[#161616] text-[#C8A45D] border border-[#C8A45D]/40 hover:border-[#C8A45D] flex items-center justify-center shadow-lg hover:shadow-gold-sm transition-all duration-300 hover:scale-105"
        aria-label="Написать в Telegram MixProduct"
      >
        <Send className="w-5 h-5 text-[#C8A45D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        
        {/* Pulse beacon */}
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#080808]" />
      </a>
    </div>
  );
}
