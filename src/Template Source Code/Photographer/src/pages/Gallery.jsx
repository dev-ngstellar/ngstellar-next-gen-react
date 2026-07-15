import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All", "Wedding", "Portrait", "Travel", "Nature", "Commercial", "Fashion"];

const galleryData = [
  { id: 1, category: "Wedding", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop", span: "row-span-2 col-span-2" },
  { id: 2, category: "Portrait", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { id: 3, category: "Fashion", src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop", span: "row-span-2 col-span-1" },
  { id: 4, category: "Travel", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop", span: "row-span-1 col-span-2" },
  { id: 5, category: "Nature", src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop", span: "row-span-2 col-span-1" },
  { id: 6, category: "Commercial", src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { id: 7, category: "Wedding", src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", span: "row-span-1 col-span-1" },
  { id: 8, category: "Portrait", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop", span: "row-span-2 col-span-2" },
  { id: 9, category: "Fashion", src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop", span: "row-span-1 col-span-1" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-[var(--background)] min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Portfolio</h1>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-[var(--accent)] text-[var(--background)]' 
                    : 'border border-[var(--border)] text-[var(--muted)] hover:text-white hover:border-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`relative group overflow-hidden rounded-xl cursor-pointer ${image.span} h-[250px] md:h-auto`}
              >
                <img 
                  src={image.src} 
                  alt={image.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex flex-col items-center justify-center">
                  <span className="text-[var(--accent)] tracking-widest uppercase text-xs mb-2">{image.category}</span>
                  <span className="text-white tracking-widest uppercase text-sm border border-white/50 px-6 py-2 rounded-full">View</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            >
              <motion.img 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedImage.src} 
                alt="Enlarged" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </div>
  );
};

export default Gallery;
