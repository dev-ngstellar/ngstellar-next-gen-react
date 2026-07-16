import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const galleryItems = [
    {
      category: "interiors",
      title: "Double-Height Grand Living Room",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "bedrooms",
      title: "Master Suite with Forest Views",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "pool",
      title: "Infinity Pool Sky Deck",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "club",
      title: "The Cigar Lounge & Club House",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "outdoors",
      title: "Landscape Botanical Gardens",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "interiors",
      title: "Gourmet Modular Kitchen",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "bedrooms",
      title: "Walk-in Dressing Closet",
      image: "https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "outdoors",
      title: "Private Deck & Sun Loungers",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handleOpenLightbox = (index) => {
    // Find index in filteredItems
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const categories = [
    { label: "Show All", value: "all" },
    { label: "Luxury Interiors", value: "interiors" },
    { label: "Bedrooms", value: "bedrooms" },
    { label: "Pool & Club", value: "pool" },
    { label: "Gardens & Decks", value: "outdoors" }
  ];

  return (
    <div className="bg-[#020617] text-[#F8FAFC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col gap-6 max-w-3xl mb-16 animate-[slide-up_0.8s_ease-out_forwards]">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Showcase Gallery</span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Immersive Galleries
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37] mt-1" />
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mt-2">
            View authentic architectural renders and custom model photographs detailing high-end interiors, rooftop decks, and linear botanical pathways.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 border-b border-slate-900 pb-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setFilter(cat.value);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 rounded text-xs font-semibold tracking-wider uppercase transition-colors ${
                filter === cat.value 
                  ? 'bg-[#D4AF37] text-black' 
                  : 'bg-[#0F172A]/50 text-slate-400 border border-slate-900 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => handleOpenLightbox(idx)}
              className="group cursor-pointer bg-[#0F172A]/30 border border-slate-900 rounded-xl overflow-hidden shadow-md relative"
            >
              <div className="zoom-container aspect-[4/3] w-full">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="zoom-image w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6 transition-opacity duration-400">
                  <span className="text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold mb-1">{item.category}</span>
                  <h4 className="font-serif text-base font-bold text-white">{item.title}</h4>
                  <span className="mt-3 text-[10px] uppercase text-slate-400 flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Enlarge Image
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Airbnb / Marriott Inspired) */}
      {lightboxIndex !== null && (
        <div 
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
        >
          {/* Close Button */}
          <button 
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button 
            onClick={handlePrev}
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-[1200px] max-h-[80vh] flex flex-col items-center gap-4 relative"
          >
            <img 
              src={filteredItems[lightboxIndex].image} 
              alt={filteredItems[lightboxIndex].title} 
              className="max-h-[72vh] max-w-full object-contain rounded shadow-2xl" 
            />
            
            <div className="text-center mt-2 flex flex-col gap-1">
              <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold">
                Image {lightboxIndex + 1} of {filteredItems.length} &middot; {filteredItems[lightboxIndex].category}
              </span>
              <h4 className="font-serif text-sm font-semibold text-white">
                {filteredItems[lightboxIndex].title}
              </h4>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
