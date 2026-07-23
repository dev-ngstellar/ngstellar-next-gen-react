import React, { useState } from 'react';
import { Calculator, ArrowRight, Plane, Ship, Truck, Check, RefreshCw } from 'lucide-react';

export default function CostEstimator({ onOpenQuoteModal }) {
  const [mode, setMode] = useState('air');
  const [weight, setWeight] = useState(500);
  const [originRegion, setOriginRegion] = useState('asia');
  const [destRegion, setDestRegion] = useState('europe');

  // Simple calculation multiplier
  const calculateRate = () => {
    let baseRate = 3.5;
    if (mode === 'air') baseRate = 4.8;
    if (mode === 'ocean') baseRate = 1.2;
    if (mode === 'road') baseRate = 2.1;

    let regionMultiplier = 1.0;
    if (originRegion === 'asia' && destRegion === 'americas') regionMultiplier = 1.4;
    if (originRegion === 'asia' && destRegion === 'europe') regionMultiplier = 1.35;
    if (originRegion === 'europe' && destRegion === 'americas') regionMultiplier = 1.25;

    const estimatedTotal = Math.round(weight * baseRate * regionMultiplier);
    const minEstimate = Math.max(150, Math.round(estimatedTotal * 0.9));
    const maxEstimate = Math.max(200, Math.round(estimatedTotal * 1.15));

    return { minEstimate, maxEstimate };
  };

  const { minEstimate, maxEstimate } = calculateRate();

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-surface-border space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-500 border border-brand-500/30 flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading text-white">Instant Freight Rate Estimator</h3>
          <p className="text-xs text-slate-400">Calculate estimated shipping cost based on cargo specs & mode</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mode Selector */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Mode of Freight
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'air', label: 'Air', icon: Plane },
              { id: 'ocean', label: 'Sea', icon: Ship },
              { id: 'road', label: 'Truck', icon: Truck }
            ].map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMode(item.id)}
                  className={`p-3 rounded-xl border flex flex-col items-center gap-1 transition-all text-xs font-bold ${
                    mode === item.id
                      ? 'bg-brand-500 border-brand-500 text-white shadow-glow'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Origin & Destination Regions */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Trade Corridor
          </label>
          <div className="grid grid-cols-2 gap-2">
            <select
              value={originRegion}
              onChange={(e) => setOriginRegion(e.target.value)}
              className="p-2.5 bg-surface-bg border border-surface-border rounded-xl text-xs text-white focus:outline-none focus:border-brand-500"
            >
              <option value="asia">Asia Pacific</option>
              <option value="europe">Europe</option>
              <option value="americas">North America</option>
              <option value="middleeast">Middle East</option>
            </select>

            <select
              value={destRegion}
              onChange={(e) => setDestRegion(e.target.value)}
              className="p-2.5 bg-surface-bg border border-surface-border rounded-xl text-xs text-white focus:outline-none focus:border-brand-500"
            >
              <option value="europe">Europe</option>
              <option value="americas">North America</option>
              <option value="asia">Asia Pacific</option>
              <option value="middleeast">Middle East</option>
            </select>
          </div>
        </div>

        {/* Cargo Weight Range Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Cargo Weight:
            </label>
            <span className="text-xs font-bold text-brand-500 font-mono">{weight} kg</span>
          </div>
          <input
            type="range"
            min="50"
            max="5000"
            step="50"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>50 kg</span>
            <span>2,500 kg</span>
            <span>5,000 kg</span>
          </div>
        </div>
      </div>

      {/* Result Display Box */}
      <div className="p-6 rounded-2xl bg-surface-bg border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-400 uppercase tracking-wider">Estimated Freight Cost Range:</div>
          <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
            ${minEstimate.toLocaleString()} — ${maxEstimate.toLocaleString()} <span className="text-xs text-slate-400 font-normal font-sans">USD</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Includes estimated fuel surcharge, security handling, and airport/port origin fees.</p>
        </div>

        <button
          onClick={onOpenQuoteModal}
          className="w-full sm:w-auto px-6 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-xl transition-all shadow-glow flex items-center justify-center gap-2 shrink-0"
        >
          <span>Lock In Official Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
