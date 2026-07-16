import React, { useEffect } from 'react';
import { MapPin, Navigation, Car, Shield, Train, Plane, Building } from 'lucide-react';

const Location = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const connectivity = [
    {
      icon: <Plane className="w-5 h-5 text-[#D4AF37]" />,
      title: "International Airport",
      time: "18 Mins Drive",
      desc: "Direct signal-free corridor expressway access straight to the airport terminals."
    },
    {
      icon: <Building className="w-5 h-5 text-[#D4AF37]" />,
      title: "Central Business District",
      time: "10 Mins Drive",
      desc: "Minutes away from primary commercial hubs, multi-national tech parks, and banks."
    },
    {
      icon: <Train className="w-5 h-5 text-[#D4AF37]" />,
      title: "Rapid Transit Metro Station",
      time: "5 Mins Walk",
      desc: "Private touchless pathway access from the tower entrance to the metro station corridor."
    },
    {
      icon: <Car className="w-5 h-5 text-[#D4AF37]" />,
      title: "National Expressway Zone",
      time: "3 Mins Drive",
      desc: "Instant access to major national highway arteries connecting key satellite cities."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col gap-6 max-w-3xl mb-16 md:mb-20 animate-[slide-up_0.8s_ease-out_forwards]">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">Strategic Coordinates</span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight">
            An Address of Pure Privilege
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37] mt-1" />
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mt-2">
            Skyline Residences is strategically situated at the convergence of high-speed connectivity corridors, luxury retail hubs, and elite corporate parks.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch mb-20">
          
          {/* Detailed Points (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-center">
            <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider pl-3 border-l-2 border-[#D4AF37]">
              Proximity Metrics
            </h3>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Crafted for global citizens, the location ensures that elite international schools, world-class multi-specialty hospitals, and premium lifestyle clubs are always within immediate reach.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span className="text-xs font-medium text-slate-350">8 Mins to Medicity Hospital complex</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span className="text-xs font-medium text-slate-350">5 Mins to The Grand Galleria Mall</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span className="text-xs font-medium text-slate-350">12 Mins to St. Xavier's World School</span>
              </div>
            </div>
          </div>

          {/* Map Placeholder Frame (7 Columns) */}
          <div className="lg:col-span-7 bg-[#0b0f19] border border-slate-900 rounded-2xl overflow-hidden p-8 flex flex-col gap-6 justify-center items-center text-center min-h-[350px] relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
            <MapPin className="w-12 h-12 text-[#D4AF37] animate-bounce" />
            <div className="flex flex-col gap-2 relative z-10">
              <h4 className="font-serif text-lg font-bold text-white">Interactive Location Map</h4>
              <p className="text-slate-400 text-xs max-w-sm leading-relaxed font-light">
                Map coordinates: 28°27'43.2"N 77°04'12.8"E. View private high-speed drive paths and entrance corridors.
              </p>
            </div>
          </div>

        </div>

        {/* Connectivity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {connectivity.map((conn, idx) => (
            <div key={idx} className="p-8 bg-[#0b0f19] border border-slate-900 rounded-xl flex flex-col gap-4 hover:border-[#D4AF37]/20 transition-all duration-300">
              <div className="w-10 h-10 rounded bg-[#D4AF37]/5 border border-[#D4AF37]/15 flex items-center justify-center">
                {conn.icon}
              </div>
              <div>
                <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold block">{conn.time}</span>
                <h4 className="font-serif text-base font-bold text-white mt-1">{conn.title}</h4>
              </div>
              <p className="text-slate-450 text-[11px] leading-relaxed font-light">{conn.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Location;
