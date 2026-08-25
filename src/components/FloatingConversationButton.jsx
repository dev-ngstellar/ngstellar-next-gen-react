import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function FloatingConversationButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-[80px] right-4 sm:top-[96px] sm:right-6 lg:top-[100px] z-40 pointer-events-auto">
      <Link
        to="/contact/transformation-conversation"
        onClick={handleClick}
        aria-label="Start a Transformation Conversation"
        className="group relative flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 text-white font-bold text-xs sm:text-sm shadow-[0_10px_35px_rgba(30,58,138,0.45)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.55)] border border-white/25 hover:border-white/40 transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden"
      >
        {/* Subtle glowing sheen overlay */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

        {/* Pulse effect indicator */}
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-secondary-400" />
        </span>

        {/* Icon & Label */}
        <MessageSquare className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0 text-white group-hover:scale-110 transition-transform" />
        <span className="tracking-tight whitespace-nowrap font-semibold">
          Start a Conversation
        </span>
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
