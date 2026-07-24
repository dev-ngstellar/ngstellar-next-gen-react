import React from 'react';
import { Award, ShieldCheck, Users, Globe, Sparkles } from 'lucide-react';
import { SPEAKERS, TRUSTED_BRANDS } from '../data/eventsData';

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-semibold">
          Our Heritage & Vision
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-heading)]">
          Redefining Global Event Engineering
        </h1>
        <p className="text-sm text-[var(--text-body)]">
          Founded in 2020, Stellar Events fuses luxury physical staging with next-generation SaaS event management software.
        </p>
      </div>

      {/* Stats Counter Bar */}
      <div className="glass-card p-8 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-[var(--border-color)]">
        {[
          { label: 'Global Events Host', val: '450+' },
          { label: 'Registered Attendees', val: '1.2M+' },
          { label: 'International Venues', val: '80+' },
          { label: 'Satisfaction Score', val: '99.8%' }
        ].map((st, i) => (
          <div key={i} className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] font-mono gradient-text">{st.val}</div>
            <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{st.label}</div>
          </div>
        ))}
      </div>

      {/* Story & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <span className="text-xs font-mono text-[var(--color-primary)] font-bold uppercase">The Stellar Philosophy</span>
          <h2 className="text-3xl font-extrabold text-[var(--text-heading)]">Where Aesthetic Perfection Meets Code</h2>
          <p className="text-xs text-[var(--text-body)] leading-relaxed">
            We believe an event isn’t just a gathering—it is a high-stakes brand narrative. Our platform empowers creators, corporate leaders, and founders to deliver unforgettable moments backed by Stripe ticketing, real-time analytics, and smooth glassmorphism design.
          </p>
        </div>
        <div className="h-80 rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" alt="Summit" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Leadership Team */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-[var(--text-heading)]">Executive Leadership</h2>
          <p className="text-xs text-[var(--text-muted)]">Industry veterans in AI, luxury design, and distributed software.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SPEAKERS.map((spk) => (
            <div key={spk.id} className="glass-card p-6 rounded-3xl text-center space-y-3">
              <img src={spk.avatar} alt={spk.name} className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-[var(--color-primary)]" />
              <h4 className="text-sm font-bold text-[var(--text-heading)]">{spk.name}</h4>
              <p className="text-xs text-[var(--color-primary)]">{spk.role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
