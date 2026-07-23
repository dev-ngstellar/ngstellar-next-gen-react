import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Plane, ArrowRight, Shield, Zap, Globe2 } from 'lucide-react';

export default function WorldMap() {
  const [selectedHub, setSelectedHub] = useState('rotterdam');

  const hubs = [
    {
      id: 'rotterdam',
      name: 'Port of Rotterdam',
      country: 'Netherlands',
      coords: { x: 48, y: 32 },
      volume: '14.5M TEU / Year',
      transit: 'Europe Gateway',
      icon: Anchor,
      description: 'Europe’s largest seaport handling automated container terminals and deepsea vessels.'
    },
    {
      id: 'shanghai',
      name: 'Shanghai PVG & Port',
      country: 'China',
      coords: { x: 80, y: 44 },
      volume: '47.3M TEU / Year',
      transit: 'Asia Export Hub',
      icon: Plane,
      description: 'World’s busiest cargo container port and high-density air cargo international terminal.'
    },
    {
      id: 'singapore',
      name: 'Singapore Tuas Mega Hub',
      country: 'Singapore',
      coords: { x: 76, y: 60 },
      volume: '37.5M TEU / Year',
      transit: 'Transshipment Center',
      icon: Anchor,
      description: 'Premier transshipment hub connecting intra-Asia trade routes to Europe and Americas.'
    },
    {
      id: 'dubai',
      name: 'Dubai Jebel Ali FTZ',
      country: 'UAE',
      coords: { x: 62, y: 46 },
      volume: '13.8M TEU / Year',
      transit: 'Middle East Crossroads',
      icon: Plane,
      description: 'Free zone cargo hub facilitating sea-air multimodal expedited transfers.'
    },
    {
      id: 'la',
      name: 'Port of Los Angeles / Long Beach',
      country: 'USA',
      coords: { x: 20, y: 38 },
      volume: '10.6M TEU / Year',
      transit: 'Transpacific Gateway',
      icon: Anchor,
      description: 'Primary Pacific trade gateway connecting Asian manufacturing hubs to North America.'
    },
    {
      id: 'frankfurt',
      name: 'Frankfurt Airport FRA Hub',
      country: 'Germany',
      coords: { x: 51, y: 30 },
      volume: '2.1M Tons Air Cargo',
      transit: 'Central Air Hub',
      icon: Plane,
      description: 'Europe’s leading pharma and time-critical air freight aviation logistics airport.'
    }
  ];

  const routes = [
    { from: 'rotterdam', to: 'shanghai' },
    { from: 'rotterdam', to: 'dubai' },
    { from: 'dubai', to: 'singapore' },
    { from: 'singapore', to: 'shanghai' },
    { from: 'shanghai', to: 'la' },
    { from: 'rotterdam', to: 'la' },
    { from: 'frankfurt', to: 'dubai' },
  ];

  const currentHub = hubs.find((h) => h.id === selectedHub) || hubs[0];

  return (
    <div className="relative w-full glass-card rounded-3xl p-6 sm:p-10 overflow-hidden border border-surface-border">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase tracking-wider mb-2">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Interactive Freight Corridors</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
            Global Trade Network Map
          </h3>
          <p className="text-sm text-slate-400">
            Click any trade gateway hub below to view live vessel schedules & route capacities.
          </p>
        </div>

        {/* Selected Hub Summary Card */}
        <div className="p-4 rounded-2xl bg-surface-bg/80 border border-brand-500/40 min-w-[280px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-500 flex items-center justify-center">
              <currentHub.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{currentHub.name}</div>
              <div className="text-xs text-brand-500 font-semibold">{currentHub.country} • {currentHub.transit}</div>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">{currentHub.description}</p>
          <div className="mt-3 pt-2.5 border-t border-surface-border flex justify-between text-[11px]">
            <span className="text-slate-400">Annual Volume:</span>
            <span className="text-white font-bold">{currentHub.volume}</span>
          </div>
        </div>
      </div>

      {/* SVG Map Container */}
      <div className="relative w-full aspect-[2/1] min-h-[320px] bg-slate-950/60 rounded-2xl border border-surface-border p-4 overflow-hidden flex items-center justify-center">
        {/* World Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Simplified Continents Silhouette background representation */}
        <svg className="w-full h-full relative z-10" viewBox="0 0 100 60" preserveAspectRatio="none">
          {/* Animated Route Lines */}
          {routes.map((route, idx) => {
            const start = hubs.find((h) => h.id === route.from)?.coords;
            const end = hubs.find((h) => h.id === route.to)?.coords;
            if (!start || !end) return null;

            const isRouteActive = selectedHub === route.from || selectedHub === route.to;

            // Curved SVG quadratic path calculation
            const midX = (start.x + end.x) / 2;
            const midY = (start.y + end.y) / 2 - 8;

            return (
              <g key={idx}>
                <path
                  d={`M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`}
                  fill="none"
                  stroke={isRouteActive ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.15)'}
                  strokeWidth={isRouteActive ? '0.8' : '0.4'}
                  className={isRouteActive ? 'route-line' : ''}
                />
              </g>
            );
          })}

          {/* Interactive Hub Nodes */}
          {hubs.map((hub) => {
            const isSelected = hub.id === selectedHub;
            return (
              <g key={hub.id} onClick={() => setSelectedHub(hub.id)} className="cursor-pointer group">
                {/* Radar pulse effect for selected hub */}
                {isSelected && (
                  <circle
                    cx={hub.coords.x}
                    cy={hub.coords.y}
                    r="4"
                    fill="none"
                    stroke="var(--primary-color)"
                    strokeWidth="0.5"
                    className="radar-ring"
                  />
                )}
                {/* Outer halo */}
                <circle
                  cx={hub.coords.x}
                  cy={hub.coords.y}
                  r={isSelected ? '2.5' : '1.8'}
                  fill={isSelected ? 'var(--primary-color)' : '#ffffff'}
                  className="transition-all duration-300 group-hover:scale-125"
                />
                {/* Inner dot */}
                <circle cx={hub.coords.x} cy={hub.coords.y} r="0.8" fill="#080d1a" />

                {/* Hub Name Label */}
                <text
                  x={hub.coords.x}
                  y={hub.coords.y + 4.5}
                  fontSize="2.2"
                  textAnchor="middle"
                  fill={isSelected ? '#ffffff' : '#94a3b8'}
                  fontWeight={isSelected ? 'bold' : 'normal'}
                  className="pointer-events-none select-none transition-colors"
                >
                  {hub.name.split(' ')[0]}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Legend */}
        <div className="absolute bottom-4 left-4 flex items-center gap-4 text-[10px] text-slate-400 bg-surface-card/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-surface-border">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping"></span>
            <span className="text-slate-200">Active Cargo Corridor</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span>Gateway Node</span>
          </div>
        </div>
      </div>
    </div>
  );
}
