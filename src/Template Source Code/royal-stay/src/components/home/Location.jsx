import React from 'react';
import { MapPin, Compass, Car, ShieldCheck } from 'lucide-react';

const Location = () => {
  const attractions = [
    { name: "JFK International Airport", dist: "35 mins (via Chauffeur)", icon: Car },
    { name: "Cliffside Shore Private Beach", dist: "Direct Beach Access", icon: Compass },
    { name: "The Grand Royal Museum", dist: "10 mins (via City Shuttle)", icon: MapPin },
    { name: "Historic Palace Gardens", dist: "On-site (Walking distance)", icon: ShieldCheck }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-[#c5a880] font-semibold">Prime Spot</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mt-2 mb-4 text-[#1a1a1a]">
              Location & Access
            </h2>
            <div className="w-16 h-[1px] bg-[#c5a880] mb-6" />
          </div>

          <p className="text-[#1a1a1a]/70 text-sm font-light leading-relaxed">
            Nestled on the prestigious cliffs overlooking the endless ocean, Royal Stay offers a tranquil haven that is conveniently accessible from major transport hubs.
          </p>

          {/* Attraction List */}
          <div className="flex flex-col gap-4 mt-2">
            {attractions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-4 items-start border-b border-[#c5a880]/15 pb-4 last:border-0 last:pb-0">
                  <div className="p-2 border border-[#c5a880]/30 text-[#c5a880]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1a1a1a] tracking-wide">{item.name}</h4>
                    <span className="text-xs text-[#1a1a1a]/50 font-light">{item.dist}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Map Placeholder */}
        <div className="lg:col-span-7 h-[420px] w-full border border-[#c5a880]/20 relative overflow-hidden group">
          {/* Map Graphic (Unsplash Aerial Map style or luxury styled graphic) */}
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
            alt="Royal Stay Map Location"
            className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.05] group-hover:scale-105 transition-transform duration-750 ease-out"
          />

          {/* Golden Grid Overlay representing maps */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a]/90 via-transparent to-[#1a1a1a]/20" />
          
          {/* Location Marker Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pointer-events-none">
            <div className="relative flex items-center justify-center">
              {/* Pulsing ring */}
              <div className="absolute w-12 h-12 rounded-full bg-[#c5a880]/30 border border-[#c5a880] animate-ping" />
              <div className="relative w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#c5a880] flex items-center justify-center shadow-2xl">
                <MapPin className="w-4.5 h-4.5 text-[#c5a880]" />
              </div>
            </div>
            <span className="bg-[#1a1a1a] text-white border border-[#c5a880] text-[10px] tracking-[0.2em] uppercase py-1 px-3 shadow-md">
              Royal Stay Resort
            </span>
          </div>

          {/* Interactive Map Overlay Controls */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md border border-[#c5a880]/30 p-4 max-w-xs shadow-lg">
            <h5 className="font-serif text-sm font-semibold tracking-wider text-[#1a1a1a] mb-1">
              Main Palace Gateway
            </h5>
            <p className="text-[11px] text-[#1a1a1a]/60 leading-relaxed mb-3">
              102 Ocean Ridge Boulevard, Cliffside Heights, NY
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#c5a880] hover:text-[#1a1a1a] transition-colors duration-300"
            >
              Get Directions
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;
