import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e) => {
    if (!isDragging && e.type !== 'mousemove') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    if (!x) return;
    const relativeX = x - rect.left;
    let percentage = (relativeX / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  return (
    <div className="py-20 bg-[var(--surface)] border-y border-[var(--border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Grooming Lounge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading)] tracking-tight">
            Before & After Grooming Transformation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted-text)]">
            Drag the interactive slider below to reveal our spa team’s miraculous fluff & style makeovers.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative h-[350px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)] select-none cursor-ew-resize"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            
            {/* After Image (Full width background) */}
            <img 
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=1200&q=80" 
              alt="After Grooming"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
              AFTER SPA TREATMENT ✨
            </div>

            {/* Before Image (Clipped overlay) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80" 
                alt="Before Grooming"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                BEFORE GROOMING 🐾
              </div>
            </div>

            {/* Divider Bar */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-800 shadow-xl border-2 border-[var(--primary)] flex items-center justify-center font-bold text-xs">
                ↔
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
