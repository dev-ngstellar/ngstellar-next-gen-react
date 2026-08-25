import { Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export default function FloatingContactButton() {
  const location = useLocation();

  // Hide on contact page since user is already on the Contact page
  if (location.pathname === '/contact' || location.pathname.startsWith('/contact/')) {
    return null;
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[1100] pointer-events-auto">
      <Link
        to="/contact"
        onClick={handleClick}
        aria-label="Contact Us"
        title="Contact Us"
        className="group relative flex items-center gap-2 sm:gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white font-semibold text-xs sm:text-sm shadow-[0_8px_30px_rgba(30,58,138,0.45)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.65)] border border-white/30 hover:border-white/60 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer overflow-hidden backdrop-blur-sm"
      >
        {/* Ambient background sheen animation */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

        {/* MessageCircle Icon */}
        <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white group-hover:scale-110 transition-transform relative z-10 drop-shadow" />

        {/* Visible Text */}
        <span className="tracking-tight whitespace-nowrap relative z-10 font-semibold">
          Contact Us
        </span>
      </Link>
    </div>
  );
}
