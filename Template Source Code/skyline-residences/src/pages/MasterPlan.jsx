import React, { useState, useEffect } from 'react';
import { Compass, HelpCircle, CheckCircle, MapPin } from 'lucide-react';

const MasterPlan = () => {
  const [activeArea, setActiveArea] = useState('clubhouse');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const layoutAreas = [
    {
      id: "clubhouse",
      name: "The Grand Pavilion Club",
      category: "Recreation & Spa",
      desc: "A massive 75,000 sq. ft. clubhouse featuring double-height squash courts, heated indoor pools, private dining chambers, and a health spa.",
      size: "75,000 Sq. Ft.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "towers",
      name: "Towers 1 - 4 (Residencies)",
      category: "Signature Flats",
      desc: "Four ultra-luxury high-rise towers rising 36 floors. Each tower features direct smart-elevator access, floor-to-ceiling glass fenestrations, and private foyer entries.",
      size: "148 Luxury Suites",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "greens",
      name: "Botanical Linear Gardens",
      category: "Eco Space & Lakes",
      desc: "80% of open landscaped spaces comprising continuous linear gardens, a zen butterfly sanctuary, jogging loops, and clear natural water-retention bodies.",
      size: "20 Acres Forest Canopy",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sports",
      name: "Multi-sport Arena",
      category: "Athletics Deck",
      desc: "Lawn tennis courts, half-court basketball grids, a grass running turf, and dedicated outdoor yoga bays insulated by buffer tree hedges.",
      size: "2.5 Acres Sports Court",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "portal",
      name: "Signature Guard Portal",
      category: "Entry & Security",
      desc: "Guarded double-lane entry portal with direct smart vehicle license-plate scanning, biometric gates, and an isolated courier-dispatch kiosk.",
      size: "24/7 Shielded Gates",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const currentArea = layoutAreas.find(a => a.id === activeArea) || layoutAreas[0];

  return (
    <div className="bg-[#020617] text-[#F8FAFC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title & Concept */}
        <div className="flex flex-col gap-6 max-w-3xl mb-16 md:mb-20 animate-[slide-up_0.8s_ease-out_forwards]">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Interactive Layout</span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight">
            The Township Master Plan
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37]" />
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mt-2">
            Explore the spatial layout of Skyline Residences. Built across 25 contiguous acres, the project isolates residential towers from sports areas and vehicle entries to ensure absolute peace and quiet.
          </p>
        </div>

        {/* Master Plan Map & Information grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Interactive Layout SVG Map (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-serif text-base font-bold text-white uppercase tracking-wider pl-3 border-l-2 border-[#D4AF37] mb-2">
              Interactive Layout Map
            </h3>

            {/* Premium Vector Layout Plan */}
            <div className="relative bg-[#0F172A]/40 border border-slate-900 rounded-2xl p-6 md:p-10 aspect-[4/3] flex flex-col justify-between overflow-hidden shadow-2xl">
              
              {/* Abstract Blueprint Grid Backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#020617]/40 pointer-events-none" />

              {/* North Pointer */}
              <div className="absolute top-6 right-6 flex items-center gap-1.5 opacity-60">
                <Compass className="w-4 h-4 text-[#D4AF37] animate-pulse" />
                <span className="text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold">N</span>
              </div>

              {/* Master Plan Render Elements */}
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Roads / Paths layout */}
                <div className="absolute w-[85%] h-[80%] border-2 border-dashed border-slate-800/60 rounded-[40px] pointer-events-none flex items-center justify-center">
                  <div className="w-[85%] h-[80%] border border-dotted border-[#D4AF37]/5 rounded-[30px]" />
                </div>

                {/* Entry Road */}
                <div className="absolute bottom-0 w-8 h-20 bg-slate-900/60 border-l border-r border-slate-800/80 pointer-events-none" />

                {/* Main Interactive Map Nodes */}
                
                {/* 1. Guard Entry Portal */}
                <button 
                  onClick={() => setActiveArea('portal')}
                  className={`absolute bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 border rounded text-[10px] tracking-wider uppercase font-bold transition-all duration-300 z-10 ${
                    activeArea === 'portal' 
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37] scale-105 shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                      : 'bg-[#020617] text-[#D4AF37] border-[#D4AF37]/30 hover:border-[#D4AF37]'
                  }`}
                >
                  Guard Gate Portal
                </button>

                {/* 2. Central Green linear park */}
                <button 
                  onClick={() => setActiveArea('greens')}
                  className={`absolute top-[40%] left-[25%] px-5 py-4.5 border rounded-full text-[10px] tracking-widest uppercase font-bold transition-all duration-300 z-10 ${
                    activeArea === 'greens' 
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37] scale-105 shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                      : 'bg-[#020617] text-[#D4AF37] border-[#D4AF37]/30 hover:border-[#D4AF37]'
                  }`}
                >
                  Central Greens
                </button>

                {/* 3. The Grand Pavilion Clubhouse */}
                <button 
                  onClick={() => setActiveArea('clubhouse')}
                  className={`absolute top-[40%] right-[22%] px-6 py-6 border rounded-2xl text-[10px] tracking-widest uppercase font-bold transition-all duration-300 z-10 ${
                    activeArea === 'clubhouse' 
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37] scale-105 shadow-[0_0_20px_rgba(212,175,55,0.5)]' 
                      : 'bg-[#0F172A] text-slate-200 border-slate-800 hover:border-[#D4AF37]'
                  }`}
                >
                  The Club House
                </button>

                {/* 4. Luxury Towers (T1 - T4) */}
                <div className="absolute top-[12%] left-1/2 -translate-x-1/2 flex gap-4 z-10">
                  {['towers'].map((id) => (
                    <button
                      key={id}
                      onClick={() => setActiveArea(id)}
                      className={`px-6 py-3.5 border rounded-xl text-[10px] tracking-widest uppercase font-bold transition-all duration-300 ${
                        activeArea === id 
                          ? 'bg-[#D4AF37] text-black border-[#D4AF37] scale-105 shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                          : 'bg-[#020617] text-[#D4AF37] border-[#D4AF37]/30 hover:border-[#D4AF37]'
                      }`}
                    >
                      Residential Towers (T1 - T4)
                    </button>
                  ))}
                </div>

                {/* 5. Sports Arena */}
                <button 
                  onClick={() => setActiveArea('sports')}
                  className={`absolute bottom-24 right-[25%] px-4 py-2.5 border rounded text-[10px] tracking-widest uppercase font-bold transition-all duration-300 z-10 ${
                    activeArea === 'sports' 
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37] scale-105 shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                      : 'bg-[#020617] text-slate-300 border-slate-800 hover:border-[#D4AF37]'
                  }`}
                >
                  Sports Deck
                </button>

              </div>

              {/* Bottom Instructions hint */}
              <div className="flex items-center gap-2 text-[10px] text-slate-500 font-light">
                <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Click layout areas on the vector map to display blueprints & renderings.</span>
              </div>

            </div>
          </div>

          {/* Area Details & Metrics Panel (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-serif text-base font-bold text-white uppercase tracking-wider pl-3 border-l-2 border-[#D4AF37]">
              Section Details
            </h3>

            {/* Information Card */}
            <div className="bg-[#0F172A]/50 border border-slate-900 rounded-2xl overflow-hidden shadow-xl flex flex-col gap-6 p-6 md:p-8 animate-fade-in">
              <div className="zoom-container rounded-lg overflow-hidden h-48 border border-slate-900">
                <img 
                  src={currentArea.image} 
                  alt={currentArea.name} 
                  className="zoom-image w-full h-full object-cover" 
                />
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold block">{currentArea.category}</span>
                  <h4 className="font-serif text-xl font-bold text-white mt-1">{currentArea.name}</h4>
                </div>
                
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  {currentArea.desc}
                </p>

                <div className="flex justify-between items-center bg-[#020617] border border-slate-900 p-4 rounded-lg mt-2">
                  <span className="text-[10px] uppercase text-slate-500 tracking-wider font-semibold">Allocated Scale</span>
                  <span className="text-xs font-bold text-[#D4AF37]">{currentArea.size}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-900 text-[10px] text-slate-500 font-light">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Fully integrated under the Master Plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Seismic zone compliance certification logged</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MasterPlan;
