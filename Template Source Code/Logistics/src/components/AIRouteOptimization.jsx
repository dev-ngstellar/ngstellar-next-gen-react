import React, { useState } from 'react';
import { Cpu, Zap, Leaf, DollarSign, Clock, ShieldCheck, CheckCircle2, Sliders, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AIRouteOptimization() {
  const [selectedStrategy, setSelectedStrategy] = useState('eco');

  const strategies = [
    {
      id: 'fast',
      title: 'Ultra-Fast Priority',
      icon: Zap,
      badgeColor: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
      transit: '18 Hours Door-to-Door',
      co2: '1,420 kg CO₂',
      cost: '$4,850',
      confidence: '99.8%',
      highlights: 'Direct Air Charter express routing via PVG to FRA terminal.'
    },
    {
      id: 'eco',
      title: 'Green Freight (Eco Optimal)',
      icon: Leaf,
      badgeColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
      transit: '32 Hours Multimodal',
      co2: '410 kg CO₂ (-71%)',
      cost: '$2,410',
      confidence: '99.4%',
      highlights: 'Rail intermodal + LNG feeder liner route reducing carbon footprint.'
    },
    {
      id: 'cost',
      title: 'Economy Freight',
      icon: DollarSign,
      badgeColor: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
      transit: '48 Hours Consolidated',
      co2: '650 kg CO₂',
      cost: '$1,650 (-66%)',
      confidence: '98.9%',
      highlights: 'LCL maritime consolidation with scheduled batch dispatch.'
    }
  ];

  const current = strategies.find((s) => s.id === selectedStrategy) || strategies[1];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-surface-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: AI Route Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI Neural Route Dispatch Engine</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
            Intelligent Supply Chain Route Optimization
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            CargoFlow’s proprietary AI control tower evaluates live weather radar, port congestion metrics, fuel surcharges, and customs clearance queues to dynamically recommend optimal shipment paths.
          </p>

          {/* Strategy Selectors */}
          <div className="space-y-3 pt-2">
            {strategies.map((strat) => {
              const IconComp = strat.icon;
              const isSelected = selectedStrategy === strat.id;
              return (
                <button
                  key={strat.id}
                  onClick={() => setSelectedStrategy(strat.id)}
                  className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-brand-500/15 border-brand-500 text-white shadow-glow'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl border ${strat.badgeColor}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{strat.title}</div>
                      <div className="text-xs text-slate-400">{strat.transit}</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-brand-500 translate-x-1' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive SaaS Telemetry Preview Dashboard */}
        <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-surface-border p-6 sm:p-8 space-y-6 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-surface-border pb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-slate-400 ml-2">route_optimizer_v4.2.py</span>
            </div>
            <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              LIVE TELEMETRY
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Estimated Transit</div>
              <div className="text-base font-bold text-white font-mono">{current.transit.split(' ')[0]} {current.transit.split(' ')[1]}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Carbon Footprint</div>
              <div className="text-base font-bold text-emerald-400 font-mono">{current.co2}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Est. Freight Cost</div>
              <div className="text-base font-bold text-brand-500 font-mono">{current.cost}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">AI Confidence</div>
              <div className="text-base font-bold text-white font-mono">{current.confidence}</div>
            </div>
          </div>

          {/* Route path visual simulation */}
          <div className="p-4 rounded-xl bg-surface-bg border border-surface-border space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-white">Recommended Corridor:</span>
              <span className="text-brand-500 font-mono">Shanghai (PVG) ➔ Frankfurt (FRA)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{current.highlights}</p>
            
            {/* Animated progress bar */}
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <motion.div
                key={selectedStrategy}
                initial={{ width: '0%' }}
                animate={{ width: '85%' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-r from-brand-500 to-cyan-400 h-full rounded-full"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
              Automated Customs Pre-Filing Active
            </span>
            <span>Refreshed 2 sec ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
