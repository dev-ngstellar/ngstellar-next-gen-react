import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/mockData';
import { Eye, Play, Sparkles, X } from 'lucide-react';
import { Modal } from '../../components/ui/Modal';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);

  const categories = ['All', 'Common Areas', 'Amenities', 'Building', 'Landscape', 'Events'];

  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest theme-accent-text block">
          Architectural Showcase
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Visual Living Gallery
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Immerse yourself in the aesthetic splendor of SkyNest.
        </p>

        {/* 360 Virtual Tour Banner Button */}
        <button
          onClick={() => setVirtualTourOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl theme-accent-bg text-white font-bold text-xs shadow-xl hover:opacity-95 transition"
        >
          <Play className="w-4 h-4 fill-white" />
          Launch 360° Virtual Tour Preview
        </button>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition ${
                activeCategory === cat
                  ? 'theme-accent-bg text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightboxImage(item)}
            className="group relative h-80 rounded-3xl overflow-hidden glass-card border border-slate-200/80 dark:border-slate-800 shadow-md cursor-pointer"
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] uppercase font-bold text-teal-300">{item.category}</span>
              <h4 className="text-lg font-bold">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Modal isOpen={!!lightboxImage} onClose={() => setLightboxImage(null)} title={lightboxImage?.title || 'Gallery Preview'} maxWidth="max-w-4xl">
        {lightboxImage && (
          <div className="space-y-4">
            <img src={lightboxImage.image} alt={lightboxImage.title} className="w-full max-h-[70vh] object-cover rounded-2xl" />
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold theme-accent-text">{lightboxImage.category}</span>
              <span className="text-slate-400">SkyNest Residence High Resolution Capture</span>
            </div>
          </div>
        )}
      </Modal>

      {/* Virtual Tour Modal */}
      <Modal isOpen={virtualTourOpen} onClose={() => setVirtualTourOpen(false)} title="360° Virtual SkyNest Walkthrough" maxWidth="max-w-4xl">
        <div className="h-[60vh] bg-slate-950 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-800">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80"
            alt="Virtual Tour panorama"
            className="w-full h-full object-cover animate-pulse"
          />
          <div className="absolute inset-0 bg-slate-950/50 flex flex-col items-center justify-center p-6 text-center text-white space-y-4">
            <Play className="w-16 h-16 text-teal-400 animate-bounce" />
            <h3 className="text-2xl font-black">Interactive 360° Panorama Engine Loaded</h3>
            <p className="text-xs text-slate-300 max-w-md">
              Drag mouse or tilt mobile gyroscope to navigate through SkyNest Grand Entrance, Sky Lounge, and Club House.
            </p>
          </div>
        </div>
      </Modal>

    </div>
  );
};
