import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { FaXmark, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa6';


export default function Lightbox({ items, currentIndex, onClose }) {
  const [idx, setIdx] = useState(currentIndex);

  useEffect(() => {
    setIdx(currentIndex);
  }, [currentIndex]);

  const prev = useCallback(() => setIdx(i => (i - 1 + items.length) % items.length), [items.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % items.length), [items.length]);

  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [prev, next, onClose]);

  const item = items[idx];

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close */}
        <button
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          onClick={onClose}
        >
          <FaXmark />

        </button>

        {/* Counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white/70 text-sm px-4 py-1.5 rounded-full">
          {idx + 1} / {items.length}
        </div>

        {/* Prev */}
        <button
          className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          onClick={e => { e.stopPropagation(); prev(); }}
        >
          <FaChevronLeft />
        </button>

        {/* Image */}
        <motion.div
          key={idx}
          className="max-w-5xl max-h-[85vh] mx-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          onClick={e => e.stopPropagation()}
        >
          <img
            src={item.src}
            alt={item.title}
            className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
          />
          {item.title && (
            <p className="text-white/70 text-center mt-3 text-sm">{item.title}</p>
          )}
        </motion.div>

        {/* Next */}
        <button
          className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          onClick={e => { e.stopPropagation(); next(); }}
        >
          <FaChevronRight />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
