import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop", // cafe wide
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop", // latte art
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop", // coffee beans
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop", // pouring
  "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop", // interior detail
];

export default function Gallery() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Gallery</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Stellar Moments</h2>
      </div>

      {/* Simplified Masonry-like grid using flex/grid */}
      <div className="flex flex-col md:flex-row gap-4 px-4 h-auto md:h-[600px]">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 rounded-2xl overflow-hidden relative group">
            <img src={images[0]} alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        {/* Middle Column */}
        <div className="flex-[1.5] flex flex-col gap-4">
          <div className="flex-1 rounded-2xl overflow-hidden relative group">
            <img src={images[1]} alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden relative group">
            <img src={images[2]} alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-4">
           <div className="flex-[1.5] rounded-2xl overflow-hidden relative group">
            <img src={images[3]} alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden relative group">
            <img src={images[4]} alt="Gallery 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
