import React, { useState, useEffect } from 'react';
import { galleryImages } from '../../data/mockData';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [activeImageIdx, setActiveImageIdx] = useState(null);

  const openLightbox = (idx) => {
    setActiveImageIdx(idx);
  };

  const closeLightbox = () => {
    setActiveImageIdx(null);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIdx((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  // Keyboard Navigation & Escape closure
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIdx === null) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIdx]);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (activeImageIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImageIdx]);

  return (
    <section id="gallery" className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs tracking-[0.25em] uppercase text-[#c5a880] font-semibold">Visual Splendor</span>
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mt-2 mb-4">
          Photo Gallery
        </h2>
        <div className="w-16 h-[1px] bg-[#c5a880] mx-auto mb-6" />
        <p className="text-[#1a1a1a]/60 text-sm font-light leading-relaxed">
          Embark on a visual journey through our majestic corridors, panoramic suites, tranquil pools, and award-winning dining halls.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, idx) => (
          <div 
            key={image.id}
            onClick={() => openLightbox(idx)}
            className="group relative h-64 overflow-hidden border border-[#c5a880]/15 cursor-pointer shadow-sm"
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
              <div className="self-end text-white/80">
                <ZoomIn className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] tracking-widest text-[#c5a880] uppercase block">Royal Stay</span>
                <h4 className="text-white text-sm font-serif font-light tracking-wider mt-0.5">{image.caption}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal Container */}
      {activeImageIdx !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 select-none animate-[fade-in_0.3s_ease-out_forwards]"
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-300 focus:outline-none"
            title="Close Gallery (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls & Image Area */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[1200px] w-full flex flex-col items-center justify-center px-12 md:px-20"
          >
            {/* Previous Button */}
            <button 
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-300 focus:outline-none"
              title="Previous Image (←)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button 
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-300 focus:outline-none"
              title="Next Image (→)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Display Image */}
            <img 
              src={galleryImages[activeImageIdx].url} 
              alt={galleryImages[activeImageIdx].caption}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-[#c5a880]/15"
            />

            {/* Caption & Image Counter below image */}
            <div className="text-center mt-6">
              <h4 className="text-white font-serif font-light tracking-wide text-lg md:text-xl">
                {galleryImages[activeImageIdx].caption}
              </h4>
              <span className="block text-xs font-sans font-light text-white/50 uppercase tracking-[0.25em] mt-2">
                Image {activeImageIdx + 1} of {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
