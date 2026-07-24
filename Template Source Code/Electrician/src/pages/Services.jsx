import React, { useState } from 'react';
import { SERVICES, FAQS, COMPANY_INFO } from '../data/electricianData';
import { CheckCircle2, ArrowRight, Phone, ShieldCheck, Zap } from 'lucide-react';

export const Services = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Clean Energy', 'Specialized', 'Technology'];

  const filteredServices = SERVICES.filter(s => 
    selectedCategory === 'All' || s.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold">
          Master Electrical Solutions
        </span>
        <h1 className="text-4xl font-extrabold text-[var(--text-heading)] font-mono">
          Residential, Commercial & Industrial Services
        </h1>
        <p className="text-sm text-[var(--text-muted)]">
          Licensed electrical engineering executed to strict NEC safety codes across the Chicago metro area.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-bold font-mono rounded-xl transition-all ${
              selectedCategory === cat
                ? 'bg-[var(--color-primary)] text-slate-950 shadow-md'
                : 'bg-[var(--bg-card)] text-[var(--text-body)] border border-[var(--border-color)] hover:border-[var(--color-primary)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Detailed Services Grid */}
      <div className="space-y-12">
        {filteredServices.map((srv, idx) => (
          <div
            key={srv.id}
            className={`glass-card p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-[var(--border-color)]`}
          >
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs font-mono font-bold">
                {srv.category}
              </span>
              <h2 className="text-2xl font-bold text-[var(--text-heading)] font-mono">{srv.title}</h2>
              <p className="text-xs text-[var(--text-body)] leading-relaxed">{srv.shortDesc}</p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-[var(--text-heading)] uppercase tracking-wider font-mono">Service Deliverables:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs text-[var(--text-heading)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[var(--text-muted)] block">Upfront Estimate</span>
                  <span className="text-xl font-extrabold text-[var(--text-heading)] font-mono">{srv.startingPrice}</span>
                </div>
                <button
                  onClick={() => onOpenQuoteModal(true)}
                  className="px-6 py-2.5 rounded-xl bg-[var(--color-primary)] text-slate-950 text-xs font-bold shadow-md hover:opacity-90 transition-opacity flex items-center space-x-2"
                >
                  <span>Book Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="h-80 rounded-2xl overflow-hidden shadow-xl">
              <img src={srv.image} alt={srv.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
