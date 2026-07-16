import React, { useEffect } from 'react';
import { Waves, Flame, Building2, Smile, Target, Compass, Film, Route } from 'lucide-react';

const Amenities = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const amenitiesList = [
    {
      icon: <Waves className="w-6 h-6 text-[#D4AF37]" />,
      title: "Rooftop Infinity Pool",
      desc: "A stunning suspended glass-walled pool offering breathtaking panoramic skyline views from the 36th-floor deck.",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Flame className="w-6 h-6 text-[#D4AF37]" />,
      title: "High-Tech Fitness Gym",
      desc: "Equipped with biometric strength trackers, cardio stations, a separate yoga studio, and live athletic advisors.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#D4AF37]" />,
      title: "The Grand Pavilion Clubhouse",
      desc: "A massive 75,000 sq. ft. social space featuring private dining rooms, luxury business lounges, and library galleries.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Smile className="w-6 h-6 text-[#D4AF37]" />,
      title: "Safe Kids Play Area",
      desc: "Soft-cushion rubber floor playground, interactive learning tables, and dedicated safety personnel.",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Target className="w-6 h-6 text-[#D4AF37]" />,
      title: "Sports Arena & Courts",
      desc: "Features professional standard lawn tennis courts, squash courts, and outdoor basketball facilities.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Compass className="w-6 h-6 text-[#D4AF37]" />,
      title: "Vip Sky Lounge",
      desc: "Double-height open air lounge on the crown of towers, perfect for champagne evenings and sunset viewings.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Film className="w-6 h-6 text-[#D4AF37]" />,
      title: "Private Mini Theatre",
      desc: "A 24-seater acoustically isolated projection theatre with leather recliners and direct food concierge support.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Route className="w-6 h-6 text-[#D4AF37]" />,
      title: "Forest Jogging Loop",
      desc: "A continuous 2km paved jogging track wrapping around botanical tree structures and artificial ponds.",
      image: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="bg-[#020617] text-[#F8FAFC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title & Introduction */}
        <div className="flex flex-col gap-6 max-w-3xl mb-16 md:mb-24 animate-[slide-up_0.8s_ease-out_forwards]">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Lifestyle Spaces</span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight">
            World-Class Amenities
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37] mt-1" />
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mt-2">
            Experience resort-style living at Skyline Residences. Access the grand clubhouse, multiple outdoor sports zones, and relax at the sky lounge with private butler service.
          </p>
        </div>

        {/* Amenities grid (8 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenitiesList.map((a, idx) => (
            <div 
              key={idx} 
              className="group bg-[#0F172A]/40 border border-slate-900 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between gold-glow-hover hover:border-[#D4AF37]/30"
            >
              <div className="zoom-container h-48 border-b border-slate-900/60">
                <img 
                  src={a.image} 
                  alt={a.title} 
                  className="zoom-image w-full h-full object-cover" 
                />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#020617]/80 backdrop-blur-md flex items-center justify-center border border-[#D4AF37]/35 shadow z-10">
                  {a.icon}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col gap-2">
                <h3 className="font-serif text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">{a.title}</h3>
                <p className="text-slate-450 text-[11px] leading-relaxed font-light">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Amenities;
