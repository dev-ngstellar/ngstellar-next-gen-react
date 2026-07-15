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
      title: "Main Dining Salon & Amber Glows",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "food",
      title: "Seared A5 Wagyu Tenderloin Plating",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "private",
      title: "Acoustic Wine Cellar Chamber",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "chef",
      title: "Executive Chef Garnishing Herbs",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "interiors",
      title: "45th Floor Sky Deck Glass Terrace",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "food",
      title: "Pan Seared Atlantic Sea Scallops",
      image: "https://images.unsplash.com/photo-1532636875304-0c8fe119aba9?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "private",
      title: "Bespoke VIP acoustic lounge",
      image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "chef",
      title: "Kitchen Brigade Finishing Binchotan Sear",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handleOpenLightbox = (index) => {
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
    { label: "All Portfolios", value: "all" },
    { label: "Salons", value: "interiors" },
    { label: "Gourmet Plates", value: "food" },
    { label: "Cellar Lounges", value: "private" },
    { label: "Chef Process", value: "chef" }
  ];

  return (
    <div className="bg-white text-[#111827] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col gap-6 max-w-3xl mb-16 animate-[slide-up_0.8s_ease-out_forwards]">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#EAB308] font-bold">The Portfolios</span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight">
            Visual Storytelling
          </h1>
          <div className="w-20 h-[2.5px] bg-[#EAB308] mt-1" />
          <p className="text-[#6B7280] text-xs md:text-sm font-light leading-relaxed mt-2">
            An aesthetic registry of our design coordinates. View our dining salons, acoustic cellars, and plating protocols.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 border-b border-gray-150 pb-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setFilter(cat.value);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                filter === cat.value 
                  ? 'bg-[#EAB308] text-white font-extrabold shadow-[0_4px_12px_rgba(234,179,8,0.2)]' 
                  : 'bg-gray-50 text-[#6B7280] border border-gray-100 hover:bg-gray-100 hover:text-[#111827]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => handleOpenLightbox(idx)}
              className="group cursor-pointer bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm relative hover-lift"
            >
              <div className="zoom-container aspect-[4/3] w-full">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="zoom-image w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6 transition-opacity duration-300">
                  <span className="text-[9px] tracking-widest text-[#EAB308] uppercase font-bold mb-1">{item.category}</span>
                  <h4 className="font-serif text-base font-bold text-[#111827]">{item.title}</h4>
                  <span className="mt-3 text-[9px] uppercase tracking-wider text-slate-500 flex items-center gap-1.5 font-bold">
                    <Maximize2 className="w-3.5 h-3.5 text-[#EAB308]" /> Enlarge Frame
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-md flex items-center justify-center p-6"
        >
          {/* Close */}
          <button 
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gray-50 hover:bg-[#EAB308] hover:text-white text-[#111827] flex items-center justify-center transition-colors focus:outline-none z-50 border border-gray-200"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button 
            onClick={handlePrev}
            className="absolute left-6 w-12 h-12 rounded-full bg-gray-50 hover:bg-[#EAB308] hover:text-white text-[#111827] flex items-center justify-center transition-colors focus:outline-none z-50 border border-gray-200"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button 
            onClick={handleNext}
            className="absolute right-6 w-12 h-12 rounded-full bg-gray-50 hover:bg-[#EAB308] hover:text-white text-[#111827] flex items-center justify-center transition-colors focus:outline-none z-50 border border-gray-200"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image content */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-[1200px] max-h-[80vh] flex flex-col items-center gap-4 relative border border-gray-200 p-2 bg-white rounded-2xl shadow-xl"
          >
            <img 
              src={filteredItems[lightboxIndex].image} 
              alt={filteredItems[lightboxIndex].title} 
              className="max-h-[70vh] max-w-full object-contain rounded-xl" 
            />
            
            <div className="text-center mt-2 flex flex-col gap-1">
              <span className="text-[10px] tracking-widest text-[#EAB308] uppercase font-bold">
                Frame {lightboxIndex + 1} of {filteredItems.length} &middot; {filteredItems[lightboxIndex].category}
              </span>
              <h4 className="font-serif text-sm font-semibold text-[#111827]">
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
