import React from 'react';
import { COMPANY_INFO, TESTIMONIALS } from '../data/electricianData';
import { ShieldCheck, Award, Users, Zap, CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold">
          24+ Years of Master Workmanship
        </span>
        <h1 className="text-4xl font-extrabold text-[var(--text-heading)] font-mono">
          About VoltagePro Electrical Systems
        </h1>
        <p className="text-sm text-[var(--text-muted)]">
          Built on a foundation of unyielding safety standards, code compliance, and customer transparency.
        </p>
      </div>

      {/* Story & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <span className="text-xs font-mono text-[var(--color-primary)] font-bold uppercase">Master Electrician Heritage</span>
          <h2 className="text-2xl font-bold text-[var(--text-heading)]">Dedicated To Zero Electrical Hazards</h2>
          <p className="text-xs text-[var(--text-body)] leading-relaxed">
            Founded in 2002, VoltagePro grew from a 2-man emergency repair unit into Chicago's most trusted commercial and residential electrical contractor. We combine FLIR thermal diagnostic imaging, heavy-machinery switchgear expertise, and modern EV charger installations.
          </p>
          <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--color-primary)] font-mono font-bold flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5" />
            <span>{COMPANY_INFO.license}</span>
          </div>
        </div>

        <div className="h-80 rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" alt="Electrician Work" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Certifications & Standards */}
      <div className="glass-card p-8 rounded-3xl space-y-6 border border-[var(--border-color)]">
        <h3 className="text-xl font-bold text-[var(--text-heading)] font-mono">Safety Licenses & Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "NEC 2026 Code Compliant",
            "OSHA-30 Certified Crews",
            "Tesla Certified Installer",
            "NFPA 70E Arc Flash Safe"
          ].map((cert, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
              <span className="text-xs font-bold text-[var(--text-heading)] font-mono">{cert}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
