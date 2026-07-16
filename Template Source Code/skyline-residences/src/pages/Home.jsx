import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Compass, Waves, Shield, Calendar, Trees, ArrowRight, ArrowUpRight } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const highlights = [
    {
      icon: <Building2 className="w-6 h-6 text-[#D4AF37]" />,
      title: "Signature Residences",
      desc: "Limited collection of 3 & 4 BHK ultra-luxury apartments and sky penthouses with double-height ceilings."
    },
    {
      icon: <Trees className="w-6 h-6 text-[#D4AF37]" />,
      title: "25 Acres Oasis",
      desc: "Expansive high-end township designed with 80% open landscaped spaces, water bodies, and botanical parks."
    },
    {
      icon: <Compass className="w-6 h-6 text-[#D4AF37]" />,
      title: "Smart Automations",
      desc: "Every home is integrated with smart locks, climate presets, automated lighting, and touchless concierge call systems."
    },
    {
      icon: <Waves className="w-6 h-6 text-[#D4AF37]" />,
      title: "Rooftop Infinity Pool",
      desc: "An architectural marvel offering panoramic city skyline views from the highest suspended deck in NCR."
    }
  ];

  const quickShowcases = [
    {
      title: "The Master Plan",
      category: "Architectural Layout",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      link: "/master-plan",
      desc: "Explore the futuristic layout mapping towers, linear parks, and private road entries."
    },
    {
      title: "Signature Amenities",
      category: "Sky Lounge & Theatre",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      link: "/amenities",
      desc: "Discover the 75,000 sq. ft. club house, private mini theatre, and health spa zones."
    },
    {
      title: "Luxury Floor Plans",
      category: "Double-Height Spaces",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      link: "/floor-plans",
      desc: "Examine detailed architectural blueprints for our 3 BHK, 4 BHK, and Penthouses."
    }
  ];

  return (
    <div className="bg-[#020617] text-[#F8FAFC]">
      {/* 1. Hero Section (Full Screen Video Backdrop) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Dark Video / Overlay */}
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-black/30 z-10" />

        {/* Background Drone Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
          poster="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://player.vimeo.com/external/494162024.sd.mp4?s=d00e40b3cb1783517c24a2ef37b2d56e9c1e6fb6&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6 flex flex-col items-center gap-6 pt-[120px] animate-[slide-up_1.2s_ease-out_forwards]">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-4 py-1.5 rounded-full border border-[#D4AF37]/20">
            A New Icon of Sky Living
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide leading-tight mt-2">
            Elevate Your <span className="text-gold-gradient block sm:inline">Lifestyle</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base font-light tracking-wide max-w-xl leading-relaxed">
            Experience world-class living in the heart of the city. A legacy residential project crafted by award-winning global architects.
          </p>
          <div className="mt-12 mb-20 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link
              to="/overview"
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#AA7C11] text-black font-bold text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
            >
              Explore Project
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border border-[#D4AF37] hover:bg-[#D4AF37]/15 text-[#D4AF37] font-bold text-xs tracking-[0.25em] uppercase transition-colors flex items-center justify-center gap-2"
            >
              Schedule Site Visit <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5">
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold animate-pulse">Scroll to discover</span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-[#D4AF37] to-transparent animate-pulse" />
        </div>
      </section>

      {/* 2. Brand Pitch & Highlights */}
      <section className="py-24 md:py-32 bg-[#020617] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Pitch Text (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold">The Architecture</span>
              <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-snug">
                Where High Design Meets Architectural Grandeur
              </h2>
              <div className="w-16 h-[2px] bg-[#D4AF37]" />
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                Rising majestically into the Gurugram sky, Skyline Residences is a testament to ultra-luxury living. Inspired by global luxury icons, the project offers unparalleled scale, absolute privacy, and bespoke fittings.
              </p>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                Featuring double-height sun decks, custom Italian marble flooring, VRV air filtration, and 24/7 biometric elevators directly accessing your private lobby.
              </p>
            </div>

            {/* Highlights Grid (7 Columns) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {highlights.map((h, i) => (
                <div key={i} className="p-8 bg-[#0F172A]/40 border border-[#D4AF37]/10 rounded-xl flex flex-col gap-4 gold-glow-hover">
                  <div className="w-12 h-12 rounded bg-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/20">
                    {h.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white tracking-wide">{h.title}</h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-light">{h.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Immersive Preview Section */}
      <section className="py-24 md:py-32 bg-[#080E21]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Showcase Blueprint</span>
              <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white mt-1">
                Luxury Unfolding
              </h2>
            </div>
            <Link
              to="/overview"
              className="text-[#D4AF37] hover:text-[#AA7C11] text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-colors"
            >
              See Project Specifications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickShowcases.map((s, idx) => (
              <Link
                key={idx}
                to={s.link}
                className="group flex flex-col gap-4 bg-[#020617]/50 border border-slate-900 rounded-xl overflow-hidden gold-glow-hover hover:border-[#D4AF37]/30"
              >
                <div className="zoom-container h-60">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="zoom-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className="text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold">{s.category}</span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">{s.title}</h3>
                  <p className="text-slate-450 text-[11px] leading-relaxed font-light">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Luxury Testimonial/Callout section */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1920&q=80')` }}>
        <div className="absolute inset-0 bg-black/85 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/85 to-transparent z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6 justify-center">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Limited Edition Club</span>
            <h2 className="font-serif text-4xl font-extrabold text-white leading-tight">
              A Private Heaven For The Select Few
            </h2>
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed max-w-lg">
              Skyline Residences represents more than a residence—it represents a landmark legacy. With only 148 residences across 4 towers, each apartment occupies half of an entire floor, ensuring maximum privacy and open-sky layouts.
            </p>
            <div className="flex gap-10 mt-4">
              <div>
                <span className="font-serif text-3xl font-extrabold text-[#D4AF37]">148</span>
                <span className="text-[9px] text-slate-500 uppercase tracking-widest block font-bold mt-1">Total Residencies</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-extrabold text-[#D4AF37]">80%</span>
                <span className="text-[9px] text-slate-500 uppercase tracking-widest block font-bold mt-1">Lush Open Areas</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-extrabold text-[#D4AF37]">75K</span>
                <span className="text-[9px] text-slate-500 uppercase tracking-widest block font-bold mt-1">Sq. Ft. Club House</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Concierge / Call to Action */}
      <section className="py-24 bg-[#020617] border-t border-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-6">
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37] font-bold">Exclusive Site Tours</span>
          <h2 className="font-serif text-3xl font-extrabold text-white">
            Schedule a Private Viewing
          </h2>
          <p className="text-slate-400 text-xs font-light leading-relaxed max-w-md">
            Our luxury consultants are available for personalized private showcases. Book your tour of the experience centre and custom scale model gallery.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#AA7C11] text-black font-bold text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] mt-4"
          >
            Book Concierge Tour
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
