import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop", // Replaced index 5
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop", // Replaced index 9
  "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1200&auto=format&fit=crop"
];

export default function GalleryPage() {
  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-accent/80 text-lg max-w-xl mx-auto">A visual journey through the moments, spaces, and crafted coffees at Stellar Cafe.</p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
          {galleryImages.map((src, idx) => {
            // Perfect interlocking grid layout
            let spanClass = "md:col-span-1 md:row-span-1";
            if (idx === 0) spanClass = "md:col-span-2 md:row-span-2";
            else if (idx === 3) spanClass = "md:col-span-2 md:row-span-1";
            else if (idx === 4) spanClass = "md:col-span-2 md:row-span-1";
            else if (idx === 7) spanClass = "md:col-span-1 md:row-span-2";
            else if (idx === 9) spanClass = "md:col-span-2 md:row-span-2";
            else if (idx === 11) spanClass = "md:col-span-4 md:row-span-1";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                className={`group relative overflow-hidden rounded-xl bg-card cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${spanClass}`}
              >
                <img 
                  src={src} 
                  alt={`Gallery image ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white border border-white/50 px-6 py-2 rounded-full font-medium tracking-wide backdrop-blur-sm">View</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
