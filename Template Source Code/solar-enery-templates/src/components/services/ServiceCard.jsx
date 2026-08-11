import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Building2, Factory, BatteryCharging, Wrench, Zap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { ImageWithFallback } from '../common/ImageWithFallback';

const iconMap = {
  Home,
  Building2,
  Factory,
  BatteryCharging,
  Wrench,
  Zap,
};

export const ServiceCard = ({ service, compact = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const IconComponent = iconMap[service.icon] || Zap;

  // Active hash highlighting logic (shared across Navbar and Footer navigation)
  const isHighlighted = location.hash === `#${service.id}`;

  const handleRequestQuote = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    navigate('/contact', {
      state: {
        selectedService: service.title
      }
    });
  };

  return (
    <div
      id={service.id}
      className={`scroll-mt-28 bg-white rounded-2xl transition-all duration-500 flex flex-col h-full overflow-hidden group relative ${
        isHighlighted
          ? 'border-2 border-[#f0771a] ring-4 ring-orange-500/20 shadow-2xl scale-[1.01]'
          : 'border border-slate-100 shadow-md hover:shadow-xl'
      }`}
    >
      {/* Active Service Badge Tag */}
      {isHighlighted && (
        <div className="absolute top-4 right-4 z-20 bg-[#f0771a] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg border border-orange-400 flex items-center gap-1.5 animate-in fade-in zoom-in-95 duration-200">
          <Sparkles className="w-3.5 h-3.5 fill-white" />
          <span>Active Selection</span>
        </div>
      )}

      {/* Service Image Header */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
        <ImageWithFallback
          src={service.image}
          alt={`${service.title} solar service installation`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
        
        {/* Category Icon Badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md text-[#f0771a] flex items-center justify-center shadow-lg border border-white/40">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Highlight Stat Tag */}
        {service.highlightStats && !isHighlighted && (
          <div className="absolute bottom-4 left-4 right-4 bg-amber-950/80 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-amber-800/60 truncate">
            {service.highlightStats}
          </div>
        )}
      </div>

      {/* Service Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <h3 className={`text-xl sm:text-2xl font-bold transition-colors mb-3 ${isHighlighted ? 'text-[#f0771a]' : 'text-slate-900 group-hover:text-[#f0771a]'}`}>
          {service.title}
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
          {compact ? service.shortDescription : service.fullDescription || service.shortDescription}
        </p>

        {/* Key Features Bullet List */}
        {service.features && service.features.length > 0 && (
          <ul className="space-y-2 mb-6 pt-4 border-t border-slate-100">
            {service.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#f0771a] shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Link — Direct navigation to /contact */}
        <div className="pt-2">
          <Button
            onClick={handleRequestQuote}
            variant="outline"
            size="sm"
            icon={ArrowRight}
            className="w-full justify-center"
          >
            Request Service Quote
          </Button>
        </div>
      </div>
    </div>
  );
};
