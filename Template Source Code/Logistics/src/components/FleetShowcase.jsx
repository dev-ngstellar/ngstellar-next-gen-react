import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Ship, Truck, Warehouse, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { fleetCategories } from '../data/fleetData';

export default function FleetShowcase() {
  const [activeTab, setActiveTab] = useState('air');

  const currentCategory = fleetCategories.find((cat) => cat.id === activeTab) || fleetCategories[0];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Plane': return Plane;
      case 'Ship': return Ship;
      case 'Truck': return Truck;
      case 'Warehouse': return Warehouse;
      default: return Plane;
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Category Tabs Header */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-2 bg-surface-card/60 backdrop-blur-md rounded-2xl border border-surface-border max-w-3xl mx-auto">
        {fleetCategories.map((cat) => {
          const IconComp = getIcon(cat.icon);
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-brand-500 text-white shadow-glow'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <IconComp className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-500'}`} />
              <span>{cat.title.split(' ')[0]} Fleet</span>
            </button>
          );
        })}
      </div>

      {/* Selected Category Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-white">{currentCategory.title}</h3>
            <p className="text-xs text-slate-400 mt-1">{currentCategory.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {currentCategory.vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden border border-surface-border group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Zoom effect */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-bg via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-brand-500 text-[11px] font-bold">
                      {vehicle.payload} Payload
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h4 className="text-lg font-bold font-heading text-white group-hover:text-brand-500 transition-colors">
                      {vehicle.name}
                    </h4>

                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex justify-between py-1.5 border-b border-surface-border">
                        <span className="text-slate-400">Operational Range:</span>
                        <span className="font-semibold text-white">{vehicle.range}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-surface-border">
                        <span className="text-slate-400">Climate & Temp Control:</span>
                        <span className="font-semibold text-white">{vehicle.tempControl}</span>
                      </div>
                      <div className="py-1.5">
                        <span className="text-slate-400 block mb-1">Specifications:</span>
                        <p className="text-slate-300 leading-relaxed font-mono text-[11px] bg-white/5 p-2 rounded-lg border border-white/5">
                          {vehicle.specs}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Real-Time Fleet Telemetry Connected</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
