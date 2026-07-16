import React, { useState, useEffect } from 'react';
import { Eye, Shield, CheckSquare, Download, CheckCircle } from 'lucide-react';

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState('3bhk');
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const floorPlans = [
    {
      id: "2bhk",
      type: "2 BHK Luxury Suite",
      size: "1,850 Sq. Ft.",
      carpet: "1,420 Sq. Ft.",
      price: "₹ 4.5 Crore onwards",
      rooms: "2 Bedrooms, 2 Bathrooms, 3 Balconies",
      features: [
        "Private entry foyer to isolate living rooms",
        "Large panoramic sun deck in master bedroom",
        "Premium quartz modular kitchen layout",
        "Dedicated utility deck and smart laundry cabinet"
      ],
      blueprint: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
      highlights: "Ideal for modern elite couples who appreciate smart spatial layouts."
    },
    {
      id: "3bhk",
      type: "3 BHK Signature flat",
      size: "2,850 Sq. Ft.",
      carpet: "2,200 Sq. Ft.",
      price: "₹ 8.5 Crore onwards",
      rooms: "3 Bedrooms, 4 Bathrooms, 4 Balconies, Maid Room",
      features: [
        "Double-height ceiling (3.6m slab-to-slab)",
        "Biometric card reader directly unlocking private lobby",
        "Exclusive walk-in closet attached to master bedroom",
        "Isolated maid quarters with dedicated rear entry gate"
      ],
      blueprint: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      highlights: "Our signature configuration designed with complete luxury specifications."
    },
    {
      id: "4bhk",
      type: "4 BHK Grande Residence",
      size: "4,250 Sq. Ft.",
      carpet: "3,400 Sq. Ft.",
      price: "₹ 14.5 Crore onwards",
      rooms: "4 Bedrooms, 5 Bathrooms, 5 Balconies, Maid Quarters",
      features: [
        "Bespoke Italian Carrara marble in all dining and foyer lines",
        "Expansive 400 sq. ft. central double-glazed wooden deck balcony",
        "His & Hers private vanity counter sinks with brass fixtures",
        "Automated smart ambient lighting panels by Lutron"
      ],
      blueprint: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      highlights: "Spacious estate layouts designed for multigenerational families."
    },
    {
      id: "penthouse",
      type: "Imperial Sky Penthouse",
      size: "6,800 Sq. Ft.",
      carpet: "5,450 Sq. Ft.",
      price: "₹ 24 Crore onwards",
      rooms: "5 Bedrooms, 6 Bathrooms, 6 Balconies, Private Rooftop Pool",
      features: [
        "Duplex layout with internal glass stairs and private elevators",
        "Suspended private infinity dip pool facing direct forest canopy views",
        "Private family lounge, study office suite, and bar lounge zone",
        "Custom master bath fitted with direct skyline sky windows"
      ],
      blueprint: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
      highlights: "Ultra luxury duplexes crowning the top floors. True sky living."
    }
  ];

  const currentPlan = floorPlans.find(plan => plan.id === activeTab) || floorPlans[1];

  const handleDownloadBrochure = () => {
    setLoading(true);
    setComplete(false);
    setTimeout(() => {
      setLoading(false);
      setComplete(true);
      setTimeout(() => setComplete(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-[#020617] text-[#F8FAFC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="flex flex-col gap-6 max-w-3xl mb-16 animate-[slide-up_0.8s_ease-out_forwards]">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold">Residency Layouts</span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Floor Plans & Layouts
          </h1>
          <div className="w-20 h-[2px] bg-[#D4AF37] mt-1" />
          <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mt-2">
            Meticulously planned blueprints balancing space efficiency with absolute design grandeur. Each configuration isolates private bedroom suites from active dining halls.
          </p>
        </div>

        {/* Tab Buttons (2 BHK, 3 BHK, 4 BHK, Penthouse) */}
        <div className="flex border-b border-slate-900 mb-12 overflow-x-auto gap-4 md:gap-8 pb-3">
          {floorPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActiveTab(plan.id)}
              className={`text-xs md:text-sm font-semibold tracking-widest uppercase pb-2 shrink-0 transition-colors ${
                activeTab === plan.id 
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' 
                  : 'text-slate-500 hover:text-slate-350'
              }`}
            >
              {plan.type.split(' ')[0]} {plan.type.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Floor Plan detail split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Blueprint image preview (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="font-serif text-base font-bold text-white uppercase tracking-wider pl-3 border-l-2 border-[#D4AF37]">
              Architectural Layout Rendering
            </h3>
            <div className="bg-[#0F172A]/40 border border-slate-900 rounded-2xl p-6 md:p-10 flex items-center justify-center aspect-square shadow-2xl relative group">
              <img 
                src={currentPlan.blueprint} 
                alt={currentPlan.type} 
                className="max-h-full max-w-full object-contain rounded opacity-80 group-hover:scale-[1.02] transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity pointer-events-none">
                <span className="px-4 py-2 border border-[#D4AF37] text-[#D4AF37] bg-[#020617] text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" /> Enlarge Blueprint
                </span>
              </div>
            </div>
          </div>

          {/* Configuration specifications (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div>
              <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold block">{currentPlan.carpet} Carpet Area</span>
              <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-white mt-1.5">{currentPlan.type}</h2>
              <p className="text-slate-400 text-xs font-light mt-3 leading-relaxed">
                {currentPlan.highlights}
              </p>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#0F172A]/50 border border-slate-900 rounded-xl">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block">Super Built-up Area</span>
                <span className="text-base font-bold text-[#D4AF37] mt-1 block">{currentPlan.size}</span>
              </div>
              <div className="p-4 bg-[#0F172A]/50 border border-slate-900 rounded-xl">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block">Pricing Range</span>
                <span className="text-base font-bold text-white mt-1 block">{currentPlan.price}</span>
              </div>
            </div>

            {/* Key Features list */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Key Plan Specifications</h4>
              <div className="flex flex-col gap-3">
                {currentPlan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs font-light text-slate-350">
                    <CheckSquare className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownloadBrochure}
                disabled={loading}
                className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#AA7C11] disabled:bg-slate-800 text-black font-bold text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                {loading ? 'Generating Brochure...' : 'Download Plan PDF'}
              </button>
            </div>

            {complete && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-900/50 rounded text-emerald-400 text-[10px] font-medium flex items-center gap-1.5 animate-[scale-up_0.3s_ease-out_forwards]">
                <CheckCircle className="w-4.5 h-4.5" />
                High-res architectural floor plan brochure successfully downloaded.
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default FloorPlans;
