import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Landmark, BarChart3, ChevronRight } from 'lucide-react';

export default function InvestorSection() {
  return (
    <section id="investors" className="py-24 bg-white border-t border-[#F1F5F9]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px]">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div>
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-[0.25em] block mb-3 font-sans">
              Capital Partners
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-syne">
              Investor Relations & Growth
            </h2>
          </div>
          <p className="text-[#64748B] font-light max-w-xl">
            Titan Construct represents a high-growth asset vehicle, backing smart-city infrastructure initiatives with solid multi-decade capital guarantees.
          </p>
        </div>

        {/* Numeric Telemetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          <motion.div 
            className="bg-slate-50 border border-[#E2E8F0] p-8 rounded-3xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block mb-4">
              Portfolio Valuation
            </span>
            <span className="text-4xl font-extrabold text-[#0F172A] font-syne block mb-2">
              $14.8B
            </span>
            <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
              <TrendingUp size={14} /> Assets Managed
            </span>
          </motion.div>

          <motion.div 
            className="bg-slate-50 border border-[#E2E8F0] p-8 rounded-3xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block mb-4">
              Annual growth
            </span>
            <span className="text-4xl font-extrabold text-[#0F172A] font-syne block mb-2">
              +12.4%
            </span>
            <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
              <TrendingUp size={14} /> CAGR YoY
            </span>
          </motion.div>

          <motion.div 
            className="bg-slate-50 border border-[#E2E8F0] p-8 rounded-3xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block mb-4">
              Active Megastructures
            </span>
            <span className="text-4xl font-extrabold text-[#0F172A] font-syne block mb-2">
              28 Sites
            </span>
            <span className="text-xs text-[#F59E0B] font-bold flex items-center gap-1">
              <Landmark size={14} /> Globally Monitored
            </span>
          </motion.div>

          <motion.div 
            className="bg-slate-50 border border-[#E2E8F0] p-8 rounded-3xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block mb-4">
              Projected Revenue
            </span>
            <span className="text-4xl font-extrabold text-[#0F172A] font-syne block mb-2">
              $4.2B
            </span>
            <span className="text-xs text-[#F59E0B] font-bold flex items-center gap-1">
              <BarChart3 size={14} /> Target By 2028
            </span>
          </motion.div>

        </div>

        {/* Call-to-action Board */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-2xl">
            <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-widest block mb-2">
              Investor Portal Access
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white font-syne mb-4">
              Schedule an Executive Briefing
            </h3>
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
              Gain access to detailed quarterly yield breakdowns, financial audits, physical engineering reports, and VIP site visit reservations.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <a 
              href="#contact" 
              className="btn btn-primary !bg-[#F59E0B] !text-[#0F172A] !border-[#F59E0B] font-bold flex items-center gap-2"
            >
              Request Briefing Package
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Background glowing design items */}
          <div className="absolute right-0 bottom-0 w-[40%] h-[100%] bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
