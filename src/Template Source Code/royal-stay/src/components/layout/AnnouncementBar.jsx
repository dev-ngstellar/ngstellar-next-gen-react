import React from 'react';
import { Phone, Sparkles } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-[#1a1a1a] text-[#c5a880] text-xs font-light tracking-[0.15em] uppercase py-2 px-4 border-b border-[#c5a880]/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Luxury Stay Experience — Book Direct For Best Rates</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-white/50">|</span>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            <span>24/7 Customer Support: +1 (800) Royal Stay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
