/**
 * Official MixProduct Logo Component
 * Preserves the original black-and-white brand identity:
 * 3D isometric box with two smartphones emerging and bold "Mix Product" typography.
 */
export default function Logo({ className = "h-9", showText = true }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Crisp Vector Emblem */}
      <div className="relative flex-shrink-0 aspect-[14/11] h-full flex items-center justify-center">
        <svg 
          viewBox="0 0 140 100" 
          className="h-full w-auto" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-label="MixProduct emblem"
        >
          {/* Left tilted smartphone */}
          <g transform="translate(34, 42) rotate(-14) translate(-34, -42)">
            <rect x="18" y="4" width="34" height="60" rx="6" fill="#FFFFFF" stroke="#080808" strokeWidth="2.5" />
            <rect x="22" y="11" width="26" height="46" rx="3" fill="#080808" />
            <circle cx="35" cy="8" r="1.5" fill="#080808" />
          </g>
          
          {/* Right smartphone */}
          <g transform="translate(86, 38) rotate(4) translate(-86, -38)">
            <rect x="68" y="2" width="36" height="64" rx="6" fill="#FFFFFF" stroke="#080808" strokeWidth="2.5" />
            <rect x="72" y="9" width="28" height="50" rx="3" fill="#080808" />
            <rect x="80" y="5.5" width="12" height="2" rx="1" fill="#080808" />
          </g>

          {/* Perspective 3D Open Box Flaps */}
          <polygon points="12,46 38,52 36,42 10,38" fill="#D9D9D9" />
          <polygon points="128,46 102,52 104,42 130,38" fill="#C4C4C4" />
          <polygon points="38,52 70,62 68,52 36,46" fill="#ECECEC" />
          <polygon points="102,52 70,62 72,52 104,46" fill="#FFFFFF" />

          {/* Front faces of the carton */}
          <polygon points="14,48 70,65 70,95 14,75" fill="#E2E2E2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="70,65 126,48 126,75 70,95" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
          <line x1="70" y1="65" x2="70" y2="95" stroke="#BFBFBF" strokeWidth="1.8" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-lg md:text-xl font-extrabold tracking-tight text-[#F5F5F3] font-sans">
            Mix <span className="text-white font-extrabold">Product</span>
          </span>
          <span className="text-[9px] tracking-[0.2em] uppercase text-[#8A8A8A] font-semibold mt-0.5">
            Tashkent • Malika 44B
          </span>
        </div>
      )}
    </div>
  );
}
