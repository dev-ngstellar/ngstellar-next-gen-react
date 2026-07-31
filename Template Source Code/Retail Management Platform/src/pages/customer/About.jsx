import React from 'react';
import { ShieldCheck, Leaf, Globe, Store, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-16">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-extrabold text-xs">
          Our Retail Story
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Redefining Retail Grocery Infrastructure
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          StellarRetail bridges certified organic agriculture with high-throughput micro-fulfillment centers, serving over 500,000 households across North America.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[
          { metric: '48+', label: 'Retail Branches' },
          { metric: '100%', label: 'Certified Farm Sourced' },
          { metric: '30 Mins', label: 'Average Delivery Time' },
          { metric: '$120M+', label: 'Annual Produce Volume' }
        ].map((s, i) => (
          <div key={i} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm">
            <h3 className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">{s.metric}</h3>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Sustainability Pillar */}
      <div className="p-8 rounded-3xl bg-slate-900 text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-slate-800">
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Leaf className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold">Zero Food Waste & Cold-Chain Efficiency</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Through real-time predictive demand forecasting, our fulfillment centers achieve less than 0.2% inventory spoilage, donating surplus produce to regional food banks daily.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" alt="Sustainable Farm" className="w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  );
}
