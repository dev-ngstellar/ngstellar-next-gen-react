import { useState } from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '+919790652929';

  const handleClick = (e) => {
    // Direct dialer trigger
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      style={{ zIndex: 9999 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] pointer-events-auto flex items-center gap-2"
    >
      {/* Desktop Hover Tooltip */}
      <div
        className={`hidden sm:block pointer-events-none transition-all duration-200 transform ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <div className="px-3 py-1.5 rounded-lg bg-slate-900/95 text-white text-xs font-semibold shadow-2xl border border-white/20 backdrop-blur-md whitespace-nowrap">
          Call NG Stellar (+91 9790652929)
        </div>
      </div>

      {/* Circular Floating Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Call NG Stellar"
        title="Call NG Stellar"
        className="group relative flex items-center justify-center rounded-full bg-gradient-to-tr from-primary-600 via-primary-500 to-secondary-500 text-white shadow-[0_8px_30px_rgba(30,58,138,0.6)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.8)] border-2 border-white/30 hover:border-white/60 transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer overflow-hidden"
        style={{
          width: 'clamp(52px, 5vw, 56px)',
          height: 'clamp(52px, 5vw, 56px)',
          minWidth: '52px',
          minHeight: '52px',
        }}
      >
        {/* Subtle glowing pulse ring */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 opacity-20 group-hover:opacity-60 animate-ping pointer-events-none" />

        {/* Ambient background sheen */}
        <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

        {/* Phone Icon */}
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300 relative z-10 drop-shadow-md" />
      </a>
    </div>
  );
}
