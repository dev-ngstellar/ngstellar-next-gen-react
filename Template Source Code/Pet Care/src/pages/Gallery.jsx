import React, { useState } from 'react';
import { BreadcrumbBanner } from '../components/common/BreadcrumbBanner';
import { GALLERY_DATA } from '../data/mockData';
import { Maximize2, X, Play } from 'lucide-react';

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filters = ['All', 'Dogs', 'Cats', 'Birds', 'Rabbits', 'Before & After', 'Pet Spa', 'Happy Moments'];

  const filteredItems = activeFilter === 'All' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors">
      
      <BreadcrumbBanner
        pageName="Gallery"
        title="Happy Moments & Spa Transformations"
        subtitle="A visual celebration of our healthy patients, before & after grooming makeovers, and state-of-the-art clinic moments."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeFilter === f
                  ? 'bg-[var(--primary)] text-white shadow-md'
                  : 'bg-[var(--surface)] text-[var(--muted-text)] border border-[var(--border)] hover:bg-[var(--background)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="relative rounded-3xl overflow-hidden border border-[var(--border)] group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 break-inside-avoid"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
                  <Maximize2 className="w-4 h-4" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Overlay */}
        {activeLightbox && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveLightbox(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-[60vh] sm:h-[70vh]">
                <img src={activeLightbox.src} alt={activeLightbox.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 bg-[var(--surface)] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">{activeLightbox.category}</span>
                  <h3 className="text-xl font-bold text-[var(--heading)]">{activeLightbox.title}</h3>
                </div>
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="px-5 py-2 rounded-xl bg-[var(--background)] text-xs font-bold text-[var(--heading)] border border-[var(--border)]"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
