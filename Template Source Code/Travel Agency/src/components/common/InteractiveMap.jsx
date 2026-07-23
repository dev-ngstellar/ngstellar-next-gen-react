import React, { useState } from 'react';
import { DESTINATIONS } from '../../data/travelData';
import { MapPin, Star, Sun, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InteractiveMap() {
  const [activeDest, setActiveDest] = useState(DESTINATIONS[0]);

  // World map coordinates projection positions in percentage (x, y)
  const mapHotspots = [
    { id: 'maldives', x: 70, y: 58 },
    { id: 'bali', x: 79, y: 64 },
    { id: 'santorini', x: 55, y: 38 },
    { id: 'swiss-alps', x: 49, y: 32 },
    { id: 'dubai', x: 63, y: 44 },
    { id: 'japan', x: 84, y: 36 },
    { id: 'serengeti', x: 58, y: 59 },
    { id: 'amalfi', x: 51, y: 36 },
  ];

  return (
    <div className="w-full glass-panel rounded-3xl p-6 sm:p-8 border border-border/80 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
        <div>
          <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-1.5">
            <Compass className="w-4 h-4" /> Global Footprint
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-bright mt-1">
            Interactive Destination Radar
          </h3>
          <p className="text-text-muted text-sm mt-1">
            Tap any illuminated sanctuary node across the globe to preview live weather & luxury rates.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs text-text-muted bg-surface/60 px-4 py-2 rounded-full border border-border">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping inline-block" /> Active Hub</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-gold inline-block" /> 5★ Partner Resort</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* World Map Interactive Canvas */}
        <div className="lg:col-span-2 relative min-h-[320px] sm:min-h-[420px] rounded-2xl bg-slate-950/90 border border-slate-800 p-4 flex items-center justify-center overflow-hidden group">
          {/* World Map SVG Silhouette */}
          <svg
            className="w-full h-full opacity-30 text-slate-600 fill-current"
            viewBox="0 0 1000 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M150,150 Q200,100 300,120 T450,200 T300,350 T150,250 Z M550,100 Q650,80 750,150 T850,300 T700,400 T550,250 Z M350,380 Q400,370 450,420 T350,480 Z" />
            {/* Grid Lines */}
            <line x1="0" y1="250" x2="1000" y2="250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
            <line x1="500" y1="0" x2="500" y2="500" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
          </svg>

          {/* Interactive Hotspot Buttons */}
          {mapHotspots.map((spot) => {
            const destObj = DESTINATIONS.find((d) => d.id === spot.id);
            if (!destObj) return null;
            const isSelected = activeDest?.id === spot.id;

            return (
              <button
                key={spot.id}
                onClick={() => setActiveDest(destObj)}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group/spot focus:outline-none z-20"
                title={destObj.name}
              >
                <span className={`relative flex h-6 w-6 items-center justify-center`}>
                  {isSelected && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-4 w-4 border-2 transition-transform duration-300 ${
                      isSelected
                        ? 'bg-primary border-white scale-125 shadow-lg shadow-primary'
                        : 'bg-slate-900 border-gold hover:scale-125'
                    }`}
                  />
                </span>
                
                {/* Hover Quick Tooltip */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/spot:block px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-bold whitespace-nowrap shadow-xl border border-slate-700 z-30">
                  {destObj.country}
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Destination Preview Side Card */}
        {activeDest && (
          <div className="glass-card rounded-2xl p-6 border border-border space-y-4 bg-surface/80">
            <div className="relative h-48 rounded-xl overflow-hidden">
              <img
                src={activeDest.image}
                alt={activeDest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-amber-300 text-xs font-bold backdrop-blur-md flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {activeDest.rating}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-primary font-bold tracking-wider uppercase flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {activeDest.country}
              </span>
              <h4 className="font-heading text-xl font-bold text-text-bright">{activeDest.name}</h4>
              <p className="text-text-muted text-xs leading-relaxed line-clamp-2">{activeDest.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/60 text-xs">
              <div className="p-2 rounded-xl bg-background border border-border">
                <span className="text-[10px] text-text-muted block">Weather</span>
                <span className="font-bold text-text-bright flex items-center gap-1 mt-0.5">
                  <Sun className="w-3 h-3 text-amber-400" /> {activeDest.weather}
                </span>
              </div>
              <div className="p-2 rounded-xl bg-background border border-border">
                <span className="text-[10px] text-text-muted block">Starting Rate</span>
                <span className="font-bold text-primary mt-0.5 block">${activeDest.startingPrice?.toLocaleString()}</span>
              </div>
            </div>

            <Link
              to={`/packages?dest=${encodeURIComponent(activeDest.country)}`}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary-hover text-white text-xs font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Explore {activeDest.country} Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
