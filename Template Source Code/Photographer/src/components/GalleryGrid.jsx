import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1554046920-90dcac824c04?q=80&w=1974&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1964&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2" },
  { id: 5, src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
  { id: 6, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop", span: "md:col-span-1 md:row-span-2" }, // Changed to row-span-2 to complete the perfect 3x4 grid!
];

const GalleryGrid = () => {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Selected Works
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-12 h-px bg-[var(--accent)] mx-auto mb-6"
          ></motion.div>
          <p className="text-[var(--muted)] max-w-2xl mx-auto font-light">
            A curated selection of my favorite moments captured around the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[300px] gap-0 grid-flow-row-dense">
          {images.map((image, i) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group overflow-hidden cursor-pointer ${image.span} h-[300px] md:h-auto`}
            >
              <img 
                src={image.src} 
                alt="Gallery Item" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center">
                <span className="text-white tracking-widest uppercase text-sm border border-white/50 px-6 py-2 rounded-full">View</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/gallery" className="inline-block px-12 py-4 border border-[var(--border)] hover:border-[var(--accent)] text-white hover:text-[var(--accent)] transition-all duration-300 rounded-full tracking-widest uppercase text-sm">
            Load More
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
