import React, { useState } from 'react';
import { BreadcrumbBanner } from '../components/common/BreadcrumbBanner';
import { SERVICES_DATA, FAQS_DATA } from '../data/mockData';
import { 
  Stethoscope, 
  Scissors, 
  Hotel, 
  Footprints, 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  HeartPulse, 
  Apple, 
  CheckCircle,
  ArrowRight,
  ChevronDown,
  X
} from 'lucide-react';

export const Services = ({ onOpenAppointment }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const categories = ['All', 'Veterinary', 'Grooming & Spa', 'Boarding & Wellness'];

  const filterService = (srv) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Veterinary' && ['vet-care', 'vaccination', 'dental-care', 'emergency-care', 'nutrition-consultation'].includes(srv.id)) return true;
    if (selectedCategory === 'Grooming & Spa' && ['pet-grooming', 'pet-spa'].includes(srv.id)) return true;
    if (selectedCategory === 'Boarding & Wellness' && ['pet-boarding', 'dog-walking'].includes(srv.id)) return true;
    return false;
  };

  const renderIcon = (iconName) => {
    const props = { className: "w-7 h-7 text-[var(--primary)]" };
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'Scissors': return <Scissors {...props} />;
      case 'Hotel': return <Hotel {...props} />;
      case 'Footprints': return <Footprints {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'HeartPulse': return <HeartPulse className="w-7 h-7 text-red-500" />;
      case 'Apple': return <Apple {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors">
      
      {/* Header Banner */}
      <BreadcrumbBanner
        pageName="Services"
        title="Comprehensive Pet Healthcare & Wellness"
        subtitle="Explore our full range of certified veterinary treatments, luxury grooming, resort boarding, and 24/7 emergency care."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[var(--primary)] text-white shadow-md'
                  : 'bg-[var(--surface)] text-[var(--muted-text)] border border-[var(--border)] hover:bg-[var(--background)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.filter(filterService).map((service) => (
            <div
              key={service.id}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-[var(--primary)]/10">
                      {renderIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--heading)] group-hover:text-[var(--primary)] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--muted-text)] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-4 space-y-2">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[var(--body-text)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveServiceModal(service)}
                  className="px-4 py-2 rounded-xl bg-[var(--background)] border border-[var(--border)] text-xs font-semibold text-[var(--heading)] hover:bg-[var(--border)] transition-colors"
                >
                  View Details & Workflow
                </button>
                <button
                  onClick={onOpenAppointment}
                  className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold hover:bg-[var(--primary-hover)] transition-colors"
                >
                  Book Visit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service Workflow Modal */}
        {activeServiceModal && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-3xl bg-[var(--surface)] border border-[var(--border)] rounded-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl custom-scrollbar">
              
              <button
                onClick={() => setActiveServiceModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[var(--background)] text-[var(--heading)]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="h-64 rounded-2xl overflow-hidden">
                  <img src={activeServiceModal.image} alt={activeServiceModal.title} className="w-full h-full object-cover" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">{activeServiceModal.badge}</span>
                  <h2 className="text-2xl font-bold text-[var(--heading)] mt-1">{activeServiceModal.title}</h2>
                  <p className="text-sm text-[var(--muted-text)] mt-2 leading-relaxed">{activeServiceModal.fullDesc}</p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-[var(--heading)]">Key Service Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeServiceModal.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-[var(--background)] text-xs font-semibold text-[var(--body-text)]">
                        <CheckCircle className="w-4 h-4 text-[var(--primary)] shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Treatment Process */}
                <div className="space-y-3 pt-4 border-t border-[var(--border)]">
                  <h4 className="text-sm font-bold text-[var(--heading)]">Treatment & Care Process</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeServiceModal.process.map((p, i) => (
                      <div key={i} className="p-4 rounded-xl border border-[var(--border)] bg-[var(--background)] space-y-1">
                        <span className="text-xs font-bold text-[var(--primary)]">{p.step}</span>
                        <h5 className="text-xs font-bold text-[var(--heading)]">{p.title}</h5>
                        <p className="text-[11px] text-[var(--muted-text)]">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    onClick={() => setActiveServiceModal(null)}
                    className="px-5 py-2.5 rounded-xl border border-[var(--border)] text-xs font-semibold"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setActiveServiceModal(null);
                      onOpenAppointment();
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-bold shadow"
                  >
                    Book This Service
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
