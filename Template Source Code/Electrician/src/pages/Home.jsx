import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Phone, ShieldCheck, CheckCircle2, Clock, Award, Star, 
  ArrowRight, Users, Home as HomeIcon, Building2, Factory, Sun, Shield, FileText 
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, PROJECTS, TESTIMONIALS, FAQS } from '../data/electricianData';

export const Home = ({ onOpenQuoteModal }) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12">
        {/* Background Image with Amber Electric Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000"
            alt="Professional Electrician Work"
            className="w-full h-full object-cover opacity-20 filter blur-xs scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-[var(--bg-primary)]"></div>
          {/* Glowing Ambient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/15 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Emergency 24/7 Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-[var(--color-primary)]/30 text-xs font-bold text-[var(--color-primary)] uppercase tracking-widest glow-amber">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>24/7 Emergency Dispatch • Arrival &lt; 30 Mins</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-heading)] tracking-tight leading-tight max-w-5xl mx-auto font-mono">
            Powering Homes & Industry With <span className="gradient-text-amber">Reliable Electrical Solutions</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-body)] max-w-3xl mx-auto font-light leading-relaxed">
            Licensed master electricians providing residential rewiring, commercial panel upgrades, EV fast chargers, solar systems, and 24/7 emergency repair.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${COMPANY_INFO.emergencyPhone}`}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-amber-600 text-slate-950 font-extrabold text-base shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-3 glow-amber"
            >
              <Phone className="w-5 h-5 fill-slate-950" />
              <span>Call Dispatch: {COMPANY_INFO.phone}</span>
            </a>
            
            <button
              onClick={() => onOpenQuoteModal(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[var(--bg-card)] text-[var(--text-heading)] font-bold text-base border border-[var(--border-color)] hover:border-[var(--color-primary)] hover:bg-[var(--bg-surface)] transition-all flex items-center justify-center space-x-2"
            >
              <FileText className="w-5 h-5 text-[var(--color-primary)]" />
              <span>Request Service Quote</span>
            </button>
          </div>

          {/* Trust Statistics Bar */}
          <div className="max-w-4xl mx-auto pt-10">
            <div className="glass-card p-6 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-[var(--border-color)] shadow-2xl">
              {[
                { label: 'Years Experience', val: `${COMPANY_INFO.experienceYears}+ Years` },
                { label: 'Projects Completed', val: COMPANY_INFO.projectsCompleted },
                { label: 'Satisfied Clients', val: COMPANY_INFO.satisfiedClients },
                { label: 'Emergency Response', val: COMPANY_INFO.emergencyResponseMins }
              ].map((st, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-heading)] font-mono gradient-text-amber">{st.val}</div>
                  <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-mono">{st.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold">
              Full-Spectrum Electrical Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-[var(--text-heading)] mt-1 font-mono">
              Our Professional Electrical Services
            </h2>
          </div>
          <Link to="/services" className="text-xs font-bold text-[var(--color-primary)] hover:underline flex items-center space-x-1 uppercase tracking-wider font-mono">
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div key={srv.id} className="glass-card rounded-3xl overflow-hidden flex flex-col group border border-[var(--border-color)]">
              <div className="relative h-52 overflow-hidden">
                <img src={srv.image} alt={srv.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-extrabold text-slate-950 bg-[var(--color-primary)] rounded-full uppercase font-mono shadow-md">
                    {srv.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[var(--text-heading)] group-hover:text-[var(--color-primary)] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed line-clamp-2">{srv.shortDesc}</p>
                </div>

                <div className="space-y-2 pt-2">
                  {srv.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs text-[var(--text-heading)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)]">Starting at <strong className="text-[var(--text-heading)] font-mono">{srv.startingPrice}</strong></span>
                  <Link to="/services" className="px-3 py-1.5 rounded-xl bg-[var(--bg-primary)] text-xs font-bold text-[var(--color-primary)] border border-[var(--border-color)] hover:border-[var(--color-primary)]">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[var(--bg-secondary)] py-16 border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold">
              Uncompromising Safety & Quality
            </span>
            <h2 className="text-3xl font-extrabold text-[var(--text-heading)] font-mono">
              Why Homeowners & Enterprises Choose VoltagePro
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Licensed Master Electricians", desc: "100% certified technicians adhering strictly to National Electrical Code (NEC) standards." },
              { title: "24/7 Emergency Dispatch", desc: "On-call mobile units fully stocked with breakers, transformers, and industrial wire." },
              { title: "Transparent Upfront Pricing", desc: "No hidden hourly fees. Detailed flat-rate estimates provided before any tool touches your wall." },
              { title: "5-Year Guarantee", desc: "Every installation, panel upgrade, and wiring job is backed by our 5-year workmanship warranty." },
              { title: "Thermal Imaging Audits", desc: "FLIR thermal diagnostic scanners to detect invisible electrical hot spots before breaker trips." },
              { title: "$5M Liability & Insurance", desc: "Fully bonded and insured for residential estates, high-rise buildings, and industrial plants." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl space-y-3 border border-[var(--border-color)]">
                <ShieldCheck className="w-8 h-8 text-[var(--color-primary)]" />
                <h3 className="text-base font-bold text-[var(--text-heading)]">{item.title}</h3>
                <p className="text-xs text-[var(--text-body)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold">Proven Field Record</span>
            <h2 className="text-3xl font-extrabold text-[var(--text-heading)] font-mono">Recent Electrical Projects</h2>
          </div>
          <Link to="/projects" className="text-xs font-bold text-[var(--color-primary)] hover:underline uppercase tracking-wider font-mono">
            View Full Portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((prj) => (
            <div key={prj.id} className="glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row border border-[var(--border-color)]">
              <img src={prj.image} alt={prj.title} className="w-full md:w-52 h-48 md:h-auto object-cover" />
              <div className="p-6 flex-1 space-y-3">
                <span className="px-2.5 py-0.5 rounded bg-[var(--color-primary)]/20 text-[var(--color-primary)] font-mono font-bold text-[10px]">
                  {prj.category}
                </span>
                <h3 className="text-base font-bold text-[var(--text-heading)]">{prj.title}</h3>
                <p className="text-xs text-[var(--text-muted)] font-mono">{prj.location}</p>
                <p className="text-xs text-[var(--text-body)] line-clamp-2">{prj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold">Simple Step-By-Step</span>
          <h2 className="text-3xl font-extrabold text-[var(--text-heading)] font-mono">Our Service Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Free Diagnostic", desc: "Comprehensive on-site inspection and safety assessment." },
            { step: "02", title: "Flat-Rate Estimate", desc: "Clear itemized quote provided with zero obligation." },
            { step: "03", title: "Precision Install", desc: "Executed by Master Electricians following NEC code." },
            { step: "04", title: "Safety Testing", desc: "Full voltage testing & city permit inspection signoff." }
          ].map((pr, i) => (
            <div key={i} className="glass-card p-6 rounded-3xl space-y-2 border border-[var(--border-color)] relative">
              <span className="text-3xl font-mono font-extrabold text-[var(--color-primary)]">{pr.step}</span>
              <h3 className="text-base font-bold text-[var(--text-heading)]">{pr.title}</h3>
              <p className="text-xs text-[var(--text-body)]">{pr.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EMERGENCY CTA BANNER */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="glass-card p-10 rounded-3xl space-y-6 border border-[var(--color-primary)]/40 text-center relative overflow-hidden glow-amber">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] font-mono">
            Electrical Emergency? We are Dispatched Right Now.
          </h2>
          <p className="text-xs text-[var(--text-body)] max-w-xl mx-auto">
            Power outages, burning smells from outlets, or tripped main breakers require immediate master electrician intervention.
          </p>
          <a
            href={`tel:${COMPANY_INFO.emergencyPhone}`}
            className="px-8 py-4 rounded-2xl bg-[var(--color-primary)] text-slate-950 font-extrabold text-sm inline-flex items-center space-x-3 shadow-xl hover:scale-105 transition-all"
          >
            <Phone className="w-5 h-5 fill-slate-950" />
            <span>Call 24/7 Hotline Immediately: {COMPANY_INFO.emergencyPhone}</span>
          </a>
        </div>
      </section>

    </div>
  );
};
