import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TemplateLightbox = ({ isOpen, currentIndex, pages, onClose, onPrev, onNext }) => {
  const scrollContainerRef = React.useRef(null);
  const [showScrollHint, setShowScrollHint] = React.useState(true);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      setShowScrollHint(true);
    }
  }, [currentIndex]);

  const handleScroll = (e) => {
    if (e.target.scrollTop > 50) {
      setShowScrollHint(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  const currentPage = pages[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex flex-col justify-between bg-slate-950/95 backdrop-blur-md p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between text-white py-2 px-4 z-10">
          <div className="flex flex-col">
            <span className="text-lg font-bold">{currentPage.title}</span>
            <span className="text-xs text-slate-400">
              Page {currentIndex + 1} of {pages.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-105 active:scale-95 transition-all text-white"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Area */}
        <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4">
          
          <AnimatePresence>
            {showScrollHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-2 bg-slate-950/90 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-md shadow-xl"
              >
                <span className="text-sm font-semibold text-slate-200">Scroll down to view full page</span>
                <motion.svg 
                  animate={{ y: [0, 4, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Prev Button */}
          <button
            onClick={onPrev}
            className="absolute left-4 z-10 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-105 active:scale-95 transition-all text-white focus:outline-none"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Image View */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="max-w-[90%] max-h-[75vh] md:max-h-[80vh] overflow-y-auto rounded-xl border border-white/10 shadow-2xl p-1 bg-slate-900/50"
          >
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              src={currentPage.image}
              alt={currentPage.title}
              className="max-w-full h-auto object-contain rounded-lg shadow-xl"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="absolute right-4 z-10 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-105 active:scale-95 transition-all text-white focus:outline-none"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Keyboard hints footer */}
        <div className="text-center text-slate-500 text-xs py-4">
          Tip: Navigate using <span className="text-slate-400">Left Arrow</span>, <span className="text-slate-400">Right Arrow</span> keys, or close with <span className="text-slate-400">ESC</span>.
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TemplateLightbox;
