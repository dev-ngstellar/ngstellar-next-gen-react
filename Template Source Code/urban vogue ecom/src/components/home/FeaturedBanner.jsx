import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedBanner = () => {
  return (
    <section className="bg-neutral-50 py-24 border-y border-gray-100">
      <div className="global-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text content */}
          <div className="lg:col-span-5 space-y-8 animate-[fade-in_1s_ease-out]">
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-light block">
              Curated Editorial
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] tracking-wide text-black">
              Monochrome Luxe: <br />
              The Art of Contrast
            </h2>
            
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed tracking-wide">
              An exploration of shadow and light. This season's capsule collection focuses on tailored purity—blending clean structural lines with rich organic cottons and silk satin fabrics. A perfect harmony of minimalist styling designed for the discerning individual.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/products?category=Women"
                className="bg-black text-white text-[10px] tracking-widest font-light uppercase py-3.5 px-8 text-center border border-black hover:bg-neutral-850 transition-all duration-300"
              >
                Discover Women
              </Link>
              <Link
                to="/products?category=Men"
                className="bg-transparent text-black text-[10px] tracking-widest font-light uppercase py-3.5 px-8 text-center border border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                Discover Men
              </Link>
            </div>
          </div>

          {/* Right Image content */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative translate-y-6">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80"
                alt="Minimalist Silk Styling"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
              <span className="absolute bottom-4 left-4 bg-white text-[9px] font-light tracking-widest uppercase px-3 py-1 text-black shadow-xs">
                Look 01
              </span>
            </div>
            
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&auto=format&fit=crop&q=80"
                alt="Double Breasted Editorial Coat"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
              <span className="absolute bottom-4 left-4 bg-white text-[9px] font-light tracking-widest uppercase px-3 py-1 text-black shadow-xs">
                Look 02
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
