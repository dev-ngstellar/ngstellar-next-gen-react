import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/eventsData';
import { Heart, Maximize2, X, Sparkles } from 'lucide-react';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Technology', 'Fashion', 'Music', 'Corporate', 'Exhibition', 'Weddings'];

  const filteredItems = GALLERY_ITEMS.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-semibold">
          Visual Archives
        </span>
        <h1 className="text-4xl font-extrabold text-[var(--text-heading)]">
          Flagship Gallery & Moments
        </h1>
        <p className="text-sm text-[var(--text-muted)]">
          Explore keynotes, haute couture galas, music stages, and luxury banquets produced worldwide.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              selectedCategory === cat
                ? 'bg-[var(--color-primary)] text-white shadow-md'
                : 'bg-[var(--bg-card)] text-[var(--text-body)] border border-[var(--border-color)] hover:border-[var(--color-primary)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Pinterest Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="break-inside-avoid glass-card rounded-3xl overflow-hidden relative group cursor-pointer border border-[var(--border-color)]"
          >
            <img src={item.image} alt={item.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-between">
              <span className="self-end px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold">
                {item.category}
              </span>
              <div className="space-y-1 text-white">
                <h4 className="text-base font-bold">{item.title}</h4>
                <div className="flex items-center space-x-2 text-xs text-white/80 font-mono">
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                  <span>{item.likes} Likes</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl overflow-hidden glass-panel">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col md:flex-row">
              <img src={activeImage.image} alt={activeImage.title} className="w-full md:w-2/3 max-h-[70vh] object-cover" />
              <div className="p-6 md:w-1/3 space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-semibold">
                    {activeImage.category}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-heading)]">{activeImage.title}</h3>
                  <p className="text-xs text-[var(--text-body)]">
                    Captured live at our flagship production venue with multi-angle spatial lighting and 4K cinema cameras.
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-xs text-rose-400 font-mono">
                  <Heart className="w-4 h-4 fill-rose-400" />
                  <span>{activeImage.likes} Attendees Loved This Moment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
