import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Play, Tag } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, item }) {
  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 z-10 flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-primary transition-colors backdrop-blur-md"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Media Player / Image Display */}
          <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] sm:min-h-[500px]">
            {item.type === 'video' ? (
              <div className="w-full h-full relative flex items-center justify-center">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40">
                  <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl shadow-primary animate-pulse">
                    <Play className="w-8 h-8 fill-white translate-x-0.5" />
                  </div>
                  <span className="text-white text-xs font-semibold tracking-wider uppercase bg-black/60 px-4 py-1.5 rounded-full border border-white/20">
                    Cinema Preview Stream
                  </span>
                </div>
              </div>
            ) : (
              <img src={item.url} alt={item.title} className="w-full h-full object-contain max-h-[70vh]" />
            )}
          </div>

          {/* Info Footer Bar */}
          <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-primary font-bold tracking-wider uppercase">
                <MapPin className="w-3.5 h-3.5" /> {item.location}
              </div>
              <h3 className="font-heading text-xl font-bold text-white">{item.title}</h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-medium flex items-center gap-1.5 border border-slate-700">
              <Tag className="w-3.5 h-3.5 text-gold" /> {item.category}
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
