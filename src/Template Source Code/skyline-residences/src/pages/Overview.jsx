import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HardDrive, Feather, Sun, Droplet, Sparkles, Building2 } from 'lucide-react';

const Overview = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const coreSpecs = [
    {
      title: "Structure & Architecture",
      icon: <Building2 className="w-5 h-5 text-[#D4AF37]" />,
      details: "Seismic Zone IV compliant structural design with reinforced concrete shear walls and premium double-glazed acoustic facade panels."
    },
    {
      title: "Luxury Flooring",
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      details: "Bespoke Italian Carrara marble in living areas, engineered teakwood flooring in bedrooms, and non-skid premium deck tiles on balconies."
    },
    {
      title: "Smart Home Integration",
      icon: <HardDrive className="w-5 h-5 text-[#D4AF37]" />,
      details: "Fully integrated smart home hub supporting voice commands, smartphone panels, biometric door access, and smart gas detection."
    },
    {
      title: "Eco Green Standards",
      icon: <Feather className="w-5 h-5 text-[#D4AF37]" />,
      details: "Gold rated IGBC certification with organic waste compost systems, solar roof tiles, and localized greywater drip irrigation."
    },
    {
      title: "Central Filtration",
      icon: <Droplet className="w-5 h-5 text-[#D4AF37]" />,
      details: "Zero-pressure reverse osmosis water treatment plant supplying pure drinking water directly to all kitchen tabs."
    },
    {
      title: "Lighting & Ventilation",
      icon: <Sun className="w-5 h-5 text-[#D4AF37]" />,
      details: "Double-height ceilings (3.6m slab-to-slab) with floor-to-ceiling premium fenestrations providing natural wind ventilation."
    }
  ];

  const highlightsTable = [
    { label: "Total Site Area", value: "25 Acres premium township" },
    { label: "Open Landscape Area", value: "80% of total acreage" },
    { label: "Number of Towers", value: "4 Exclusive towers (T1, T2, T3, T4)" },
    { label: "Floors per Tower", value: "36 Residential floors" },
    { label: "Apartments per Floor", value: "Only 2 residences (Private elevator access)" },
    { label: "Club House Area", value: "75,000 sq. ft. multi-tier layout" },
    { label: "Expected Handover", value: "December 2028" }
  ];

  return (
    <div className="bg-[#020617] text-[#F8FAFC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title & Introduction */}
        <div className="flex flex-col gap-6 max-w-3xl mb-16 md:mb-24 animate-[slide-up_0.8s_ease-out_forwards]">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Project Overview</span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight">
            The Skyline Residences Legacy
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37] mt-1" />
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mt-2">
            A premium township project that balances sleek modern architectural lines with lush green spaces. Designed for those who demand unmatched privacy, Skyline Residences towers offer an elite collection of signature flats and double-height penthouses.
          </p>
        </div>

        {/* Dual columns: Image & Specifications Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24 md:mb-32">
          
          {/* Showcase Image (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="zoom-container rounded-xl overflow-hidden border border-[#D4AF37]/10 aspect-[16/10] shadow-[0_0_30px_rgba(212,175,55,0.05)]">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80" 
                alt="Skyline Tower Exterior" 
                className="zoom-image w-full h-full object-cover" 
              />
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-500 tracking-wider">
              <span>* Architectural design drawing under construct reference</span>
              <span>Visual rendering</span>
            </div>
          </div>

          {/* Quick Specifications Table (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-serif text-xl font-bold text-white uppercase tracking-wider pl-3 border-l-2 border-[#D4AF37]">
              Key Details
            </h3>
            <div className="bg-[#0F172A]/50 border border-slate-900 rounded-xl overflow-hidden">
              <div className="divide-y divide-slate-900">
                {highlightsTable.map((h, i) => (
                  <div key={i} className="flex justify-between items-center p-4.5 text-xs font-light">
                    <span className="text-slate-400 font-medium">{h.label}</span>
                    <span className="text-white font-semibold text-right">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* High-end Specifications Grids */}
        <div className="flex flex-col gap-12 mb-16">
          <div className="text-center max-w-xl mx-auto flex flex-col items-center gap-3">
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Materials & Fit-outs</span>
            <h2 className="font-serif text-3xl font-extrabold text-white">
              Signature Specifications
            </h2>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Every detail is meticulously planned and sourced from world-renowned luxury brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSpecs.map((spec, i) => (
              <div key={i} className="p-8 bg-[#0F172A]/30 border border-slate-900 rounded-xl flex flex-col gap-4 hover:border-[#D4AF37]/35 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/20">
                  {spec.icon}
                </div>
                <h3 className="font-serif text-base font-bold text-white tracking-wide">{spec.title}</h3>
                <p className="text-slate-450 text-[11px] leading-relaxed font-light">{spec.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 md:p-12 bg-gradient-to-r from-[#0F172A] to-[#020617] border border-[#D4AF37]/10 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-xl mt-12">
          <div className="flex flex-col gap-2.5 max-w-xl">
            <h4 className="font-serif text-lg md:text-xl font-bold text-white">
              Elevate Your Living Standard Today
            </h4>
            <p className="text-slate-400 text-xs font-light leading-relaxed">
              Schedule an exclusive concierge-guided virtual walkthrough or book an appointment for a physical site inspection with scale-model presentations.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#AA7C11] text-black font-bold text-xs tracking-[0.25em] uppercase transition-colors shrink-0"
          >
            Request Call Back
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Overview;
