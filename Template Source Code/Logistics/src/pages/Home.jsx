import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, ArrowRight, ShieldCheck, Globe, Zap, Clock, Package, Plane, Ship, 
  Truck, Train, Warehouse, CheckCircle2, ChevronRight, Star, Cpu, Lock, 
  BarChart3, Users, Award, FileText, ArrowUpRight 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import WorldMap from '../components/WorldMap';
import FleetShowcase from '../components/FleetShowcase';
import AIRouteOptimization from '../components/AIRouteOptimization';
import CostEstimator from '../components/CostEstimator';
import { servicesData } from '../data/servicesData';
import { testimonialsData } from '../data/testimonialsData';
import { newsData } from '../data/newsData';

export default function Home({ onOpenTrackModal, onOpenQuoteModal }) {
  const [heroWaybill, setHeroWaybill] = useState('');
  const navigate = useNavigate();

  const handleHeroTrack = (e) => {
    e.preventDefault();
    if (!heroWaybill.trim()) return;
    navigate(`/tracking?id=${encodeURIComponent(heroWaybill.trim())}`);
  };

  const serviceIconMap = {
    Plane, Ship, Truck, Train, Zap, Warehouse, Thermometer: Lock, ShieldCheck, Boxes: Package, Cpu
  };

  const industries = [
    { title: 'Healthcare & Pharma', icon: ShieldCheck, desc: 'GDP-certified cold chain & urgent bio-pharma logistics.' },
    { title: 'Automotive & Mobility', icon: Truck, desc: 'Just-in-time (JIT) spare parts & vehicle component freight.' },
    { title: 'High-Tech & Electronics', icon: Cpu, desc: 'Secure high-value semiconductor & hardware distribution.' },
    { title: 'E-Commerce & Retail', icon: Package, desc: 'API-driven automated micro-fulfillment & last-mile delivery.' },
    { title: 'Industrial Manufacturing', icon: FactoryIcon, desc: 'Heavy machinery, raw metals, & plant project cargo.' },
    { title: 'Food & Perishables', icon: LeafIcon, desc: 'Temperature-monitored refrigerated food transport.' }
  ];

  function FactoryIcon(props) {
    return <Warehouse {...props} />;
  }
  function LeafIcon(props) {
    return <Zap {...props} />;
  }

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Cinematic Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2000&q=80"
            alt="Global Logistics Cargo Hub"
            className="w-full h-full object-cover opacity-25 scale-105 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-bg via-surface-bg/85 to-surface-bg/60" />
          <div className="absolute inset-0 aurora-bg opacity-60" />
          <div className="absolute inset-0 mesh-grid opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase tracking-wider shadow-glow"
          >
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
            <span>Next-Gen Global Supply Chain Network</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.1] max-w-5xl mx-auto"
          >
            Delivering The Future Of <span className="text-primary-gradient">Global Logistics.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Fast, secure, and intelligent freight solutions connecting businesses across 150+ countries through air, sea, rail, and autonomous ground transportation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={onOpenTrackModal}
              className="px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm transition-all shadow-glow flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Search className="w-4 h-4" />
              <span>Track Shipment Live</span>
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-xl glass-card text-white font-bold text-sm hover:border-brand-500 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Request Instant Quote</span>
              <ArrowUpRight className="w-4 h-4 text-brand-500" />
            </button>
          </motion.div>

          {/* Floating Shipment Search Bar Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-2xl mx-auto pt-6"
          >
            <form onSubmit={handleHeroTrack} className="glass-panel p-2.5 rounded-2xl border border-surface-border flex items-center gap-2 shadow-2xl">
              <div className="pl-3 text-brand-500">
                <Package className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Enter Waybill / Container # (e.g. CF-9842-X7)"
                value={heroWaybill}
                onChange={(e) => setHeroWaybill(e.target.value)}
                className="flex-1 bg-transparent border-none text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-0 px-2"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold rounded-xl transition-all shadow-glow flex items-center gap-1.5 shrink-0"
              >
                <span>Track Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 max-w-4xl mx-auto"
          >
            {[
              { label: 'Countries Served', value: '150+' },
              { label: 'Annual Deliveries', value: '500K+' },
              { label: 'On-Time Rate', value: '99.8%' },
              { label: 'Customer Support', value: '24/7 Live' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: GLOBAL PARTNERS LOGO MARQUEE */}
      <section className="border-y border-surface-border py-8 bg-surface-card/40 backdrop-blur-md overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Trusted By Global Fortune 500 Supply Chain Partners
          </p>
        </div>
        <div className="flex overflow-hidden whitespace-nowrap space-x-12 select-none py-2">
          <div className="flex items-center space-x-12 animate-marquee">
            {['MAERSK', 'DHL EXPRESS', 'FEDEX LOGISTICS', 'PORT OF ROTTERDAM', 'CATHAY CARGO', 'DB SCHENKER', 'KUEHNE+NAGEL', 'CEVA LOGISTICS', 'STALLION AIR'].map((partner, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-400 font-extrabold text-lg tracking-wider opacity-70 hover:opacity-100 hover:text-brand-500 transition-all cursor-pointer">
                <Globe className="w-5 h-5 text-brand-500" />
                <span>{partner}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-12 animate-marquee" aria-hidden="true">
            {['MAERSK', 'DHL EXPRESS', 'FEDEX LOGISTICS', 'PORT OF ROTTERDAM', 'CATHAY CARGO', 'DB SCHENKER', 'KUEHNE+NAGEL', 'CEVA LOGISTICS', 'STALLION AIR'].map((partner, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-3 text-slate-400 font-extrabold text-lg tracking-wider opacity-70 hover:opacity-100 hover:text-brand-500 transition-all cursor-pointer">
                <Globe className="w-5 h-5 text-brand-500" />
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase tracking-wider">
            <Package className="w-3.5 h-3.5" />
            <span>End-to-End Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Integrated Global Logistics Services
          </h2>
          <p className="text-sm text-slate-400">
            From high-priority air express charters to ocean freight liners and smart automated fulfillment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.slice(0, 8).map((service) => {
            const IconComponent = serviceIconMap[service.icon] || Package;
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-6 border border-surface-border hover:border-brand-500 flex flex-col justify-between group transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all shadow-glow">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-500">{service.category}</span>
                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-brand-500 transition-colors mt-0.5">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="text-[11px] text-slate-300 font-mono pt-2 border-t border-surface-border">
                    <span className="text-slate-500">Transit:</span> {service.transitTime}
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-500 group-hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE WORLD ROUTE MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorldMap />
      </section>

      {/* SECTION 5: HOW IT WORKS TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>Streamlined Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            How CargoFlow Ships Worldwide
          </h2>
          <p className="text-sm text-slate-400">
            A frictionless 5-step digital supply chain execution workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {[
            { step: '01', title: 'Request Quote', desc: 'Instant pricing & automated customs pre-filing.' },
            { step: '02', title: 'Cargo Pickup', desc: 'GPS-monitored fleet pickup & smart scanning.' },
            { step: '03', title: 'Transportation', desc: 'Multimodal air, sea, or ground linehaul.' },
            { step: '04', title: 'Customs Clear', desc: 'Automated digital tariff clearance at ports.' },
            { step: '05', title: 'Final Delivery', desc: 'Last-mile electric van delivery with e-signature.' }
          ].map((item, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-surface-border text-center space-y-3 relative group">
              <div className="w-10 h-10 rounded-full bg-brand-500/20 text-brand-500 border border-brand-500/30 flex items-center justify-center mx-auto text-sm font-extrabold font-mono group-hover:bg-brand-500 group-hover:text-white transition-all shadow-glow">
                {item.step}
              </div>
              <h3 className="text-base font-bold font-heading text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: AI ROUTE OPTIMIZATION DASHBOARD SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AIRouteOptimization />
      </section>

      {/* SECTION 7: FLEET & WAREHOUSE SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase tracking-wider">
            <Plane className="w-3.5 h-3.5" />
            <span>Infrastructure & Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            State-Of-The-Art Logistics Infrastructure
          </h2>
        </div>
        <FleetShowcase />
      </section>

      {/* SECTION 8: FREIGHT COST ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostEstimator onOpenQuoteModal={onOpenQuoteModal} />
      </section>

      {/* SECTION 9: INDUSTRIES WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Specialized Industry Logistics
          </h2>
          <p className="text-sm text-slate-400">
            Tailored supply chain solutions engineered for complex vertical requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const IconComp = ind.icon;
            return (
              <div key={i} className="glass-card p-6 rounded-2xl border border-surface-border hover:border-brand-500/60 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/15 text-brand-500 border border-brand-500/30 flex items-center justify-center shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold font-heading text-white">{ind.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 10: TESTIMONIALS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Trusted By Global Supply Chain Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((test) => (
            <div key={test.id} className="glass-card p-8 rounded-3xl border border-surface-border space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-500/15 border border-brand-500/30 text-brand-500 text-[11px] font-bold">
                    {test.metrics}
                  </span>
                </div>
                <p className="text-sm text-slate-200 italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-surface-border">
                <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full object-cover border border-brand-500/40" />
                <div>
                  <div className="text-sm font-bold text-white">{test.name}</div>
                  <div className="text-xs text-slate-400">{test.role} • <span className="text-brand-500 font-semibold">{test.company}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 11: LATEST INSIGHTS BLOG PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Industry Insights</span>
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-white">Latest Supply Chain Research</h2>
          </div>
          <Link to="/services" className="text-xs font-bold text-brand-500 flex items-center gap-1 hover:underline">
            View All Articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <div key={news.id} className="glass-card rounded-2xl overflow-hidden border border-surface-border group flex flex-col justify-between">
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-brand-500 text-[10px] font-bold">
                    {news.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-[11px] text-slate-400 font-mono">{news.date} • {news.readTime}</div>
                  <h3 className="text-base font-bold font-heading text-white group-hover:text-brand-500 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{news.excerpt}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <span className="text-xs font-bold text-brand-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Full Report <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 12: CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-10 sm:p-16 border border-brand-500/40 relative overflow-hidden text-center space-y-6 shadow-glow-lg">
          <div className="absolute inset-0 aurora-bg opacity-70 pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white max-w-3xl mx-auto leading-tight">
            Ready To Ship Worldwide With Zero Friction?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Connect with our global freight operations desk today and lock in transparent rates with guaranteed carrier capacity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm transition-all shadow-glow flex items-center gap-2"
            >
              <span>Request Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl glass-panel text-white font-bold text-sm hover:border-brand-500 transition-all flex items-center gap-2"
            >
              <span>Contact Global Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
