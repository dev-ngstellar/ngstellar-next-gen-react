import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, HeartHandshake, Sparkles, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { SOCIETY_INFO, STAFF_MEMBERS } from '../../data/mockData';

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest theme-accent-text block">
          Our Heritage & Vision
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Redefining Residential Excellence
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Built with precision engineering, biophilic design, and smart automation, SkyNest offers a tranquil sanctuary amidst the bustling metropolitan skyline.
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 space-y-4 relative overflow-hidden">
          <div className="p-3 rounded-2xl theme-accent-light-bg theme-accent-text inline-block">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Community Vision</h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            To create a self-sustaining luxury residential ecosystem where cutting-edge security, environmental sustainability, and vibrant social community converge seamlessly.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 space-y-4 relative overflow-hidden">
          <div className="p-3 rounded-2xl theme-accent-light-bg theme-accent-text inline-block">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Governance Mission</h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            To empower society administration with automated billing, transparent accounting, instant gate security, and instant resident feedback loops.
          </p>
        </div>
      </div>

      {/* Leadership & Management Team */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Society Board & Operations Team</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Dedicated professionals managing day-to-day community life.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAFF_MEMBERS.slice(0, 4).map((member) => (
            <div key={member.id} className="glass-card rounded-3xl p-6 text-center border border-slate-200/80 dark:border-slate-800 space-y-3">
              <img src={member.avatar} alt={member.name} className="w-20 h-20 rounded-2xl object-cover mx-auto ring-4 ring-teal-500/20" />
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{member.name}</h4>
                <span className="text-xs theme-accent-text font-semibold">{member.role}</span>
              </div>
              <p className="text-[11px] text-slate-400">Shift: {member.shift}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
