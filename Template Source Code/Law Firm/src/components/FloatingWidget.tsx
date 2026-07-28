import React, { useState } from 'react';
import { MessageSquare, PhoneCall, ChevronUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onOpenConsultation: () => void;
}

export const FloatingWidget: React.FC<Props> = ({ onOpenConsultation }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsappTooltip, setShowWhatsappTooltip] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsappClick = () => {
    window.open('https://wa.me/15550007890?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20legal%20services.', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-heading)] shadow-luxury hover:bg-[var(--color-surface-hover)] transition-all hover:scale-110"
          >
            <ChevronUp className="w-5 h-5 text-[#D4A34B]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Fast Advisory */}
      <div className="relative group">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsappClick}
          onMouseEnter={() => setShowWhatsappTooltip(true)}
          onMouseLeave={() => setShowWhatsappTooltip(false)}
          className="p-3.5 rounded-full bg-emerald-600 text-white shadow-luxury hover:bg-emerald-500 transition-all flex items-center justify-center border border-emerald-400/30"
          aria-label="WhatsApp Legal Help"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
        </motion.button>

        {showWhatsappTooltip && (
          <div className="absolute right-14 top-1.5 whitespace-nowrap bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl border border-slate-700 pointer-events-none">
            Direct Legal Counsel WhatsApp
          </div>
        )}
      </div>

      {/* Floating Book Consultation Bar (Mobile & Desktop Accent) */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onOpenConsultation}
        className="px-5 py-3 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#D4A34B] to-[#9A661F] text-slate-950 font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-gold-glow border border-[#F3E5AB]/40"
      >
        <PhoneCall className="w-4 h-4 text-slate-950" />
        <span className="hidden sm:inline">Book Consultation</span>
      </motion.button>
    </div>
  );
};
