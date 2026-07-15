import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSearch = () => {
    const el = document.getElementById('search-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[scale-up_12s_ease-out_forwards]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      
      {/* Dark Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-[#111]/60" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        {/* Crown Badge */}
        <div className="flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#c5a880]/30 bg-[#1a1a1a]/50 backdrop-blur-md rounded-none text-[10px] tracking-[0.25em] uppercase text-[#c5a880] animate-[fade-in_1s_ease-out_forwards]">
          <Compass className="w-3.5 h-3.5 animate-spin-slow" />
          <span>A World of Opulence Awaits</span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide leading-tight mb-6 animate-[slide-up_1s_ease-out_forwards]">
          Luxury Stay <br />
          <span className="italic font-normal text-[#c5a880]">Experience</span>
        </h1>

        {/* Subheading */}
        <p className="text-sm md:text-lg lg:text-xl font-light text-white/80 max-w-2xl tracking-wide leading-relaxed mb-10 animate-[fade-in_1.2s_ease-out_forwards]">
          Discover comfort, elegance and world-class hospitality in an iconic sanctuary designed for the refined traveler.
        </p>

        {/* CTA Button */}
        <div className="flex gap-4 animate-[slide-up_1.2s_ease-out_forwards]">
          <Link
            to="/rooms"
            className="px-8 py-4 bg-[#c5a880] text-[#1a1a1a] hover:bg-white hover:text-[#1a1a1a] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg"
          >
            Book Your Room
          </Link>
          <button
            onClick={scrollToSearch}
            className="px-8 py-4 border border-white/30 hover:border-[#c5a880] text-white hover:bg-white/10 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300"
          >
            Explore Amenities
          </button>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <button 
        onClick={scrollToSearch}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-[#c5a880] transition-colors duration-300 focus:outline-none"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-light">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </div>
  );
};

export default Hero;
