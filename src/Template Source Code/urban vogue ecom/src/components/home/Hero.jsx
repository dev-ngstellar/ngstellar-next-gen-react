import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-gray-50 flex items-center justify-center">
      {/* Background Image with Slow Ken Burns Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop&q=80"
          alt="Urban Vogue Summer Collection Model"
          className="w-full h-full object-cover object-top scale-105 animate-[zoom-slow_25s_infinite]"
        />
        {/* Soft dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        
        {/* Editorial Subheading */}
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-light mb-4 sm:mb-6 animate-[slide-down_1s_cubic-bezier(0.16,1,0.3,1)]">
          Urban Vogue Editorial
        </span>
        
        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-wide mb-6 sm:mb-8 leading-[1.15] max-w-3xl animate-[slide-up_1s_cubic-bezier(0.16,1,0.3,1)]">
          Summer Collection <br className="hidden sm:inline" /> 2026
        </h1>
        
        {/* Subtitle */}
        <p className="text-sm sm:text-base font-light tracking-widest max-w-lg mb-8 sm:mb-12 opacity-90 animate-[fade-in_1.5s_ease-out_forwards]">
          Discover Timeless Fashion
        </p>
        
        {/* CTA */}
        <div className="animate-[slide-up_1.2s_cubic-bezier(0.16,1,0.3,1)]">
          <Link
            to="/products"
            className="bg-white text-black text-xs tracking-[0.25em] font-light uppercase py-4 px-10 border border-white hover:bg-transparent hover:text-white transition-all duration-500 shadow-lg hover:shadow-none"
          >
            Shop Collection
          </Link>
        </div>
      </div>

      {/* Custom Keyframes for slow Ken Burns zoom */}
      <style>{`
        @keyframes zoom-slow {
          0%, 100% { transform: scale(1.03); }
          50% { transform: scale(1.10); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
