import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, Ship, Truck, Train, Zap, Warehouse, Thermometer, ShieldCheck, 
  Boxes, Cpu, ArrowRight, CheckCircle2, Clock, Globe, HelpCircle, ChevronDown 
} from 'lucide-react';
import CostEstimator from '../components/CostEstimator';
import { servicesData } from '../data/servicesData';

export default function Services({ onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState(null);

  const categories = ['All', 'Freight', 'Ground', 'Express', 'Warehousing', 'Specialized', 'Consulting'];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  const faqs = [
    {
      q: 'How are air freight rates calculated?',
      a: 'Air freight rates are calculated based on either actual weight or volumetric weight (Dimensional Weight = L x W x H in cm / 6000), whichever is higher, as mandated by IATA standards.'
    },
    {
      q: 'What is the difference between FCL and LCL ocean shipping?',
      a: 'FCL (Full Container Load) means you rent an entire 20ft or 40ft ocean container for your cargo exclusively. LCL (Less than Container Load) consolidates your cargo with other shippers in a shared container.'
    },
    {
      q: 'Do you provide continuous temperature monitoring for pharmaceuticals?',
      a: 'Yes! All cold chain shipments feature real-time IoT thermal logging with GPS telematics, instant SMS/email threshold alerts, and GDP-certified airport handling.'
    },
    {
      q: 'Can CargoFlow manage customs clearance on our company’s behalf?',
      a: 'Absolutely. Our licensed internal customs brokerage team files electronic entry declarations directly with customs authorities worldwide, handling duty classification and tax payments.'
    }
  ];

  return (
    <div className="space-y-24 pt-28 pb-20 overflow-hidden">
      {/* Luxury Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase tracking-wider">
          <Boxes className="w-3.5 h-3.5" />
          <span>Comprehensive Logistics Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white max-w-4xl mx-auto leading-tight">
          Precision Freight & <span className="text-primary-gradient">Supply Chain Services.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Explore our suite of air freight, ocean maritime lines, intermodal rail, cold chain, and automated smart warehousing services.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-brand-500 text-white shadow-glow'
                  : 'glass-card text-slate-400 border border-surface-border hover:text-white hover:border-brand-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="glass-card rounded-3xl overflow-hidden border border-surface-border p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-brand-500/60 transition-all"
              >
                {/* Service Image */}
                <div className={`lg:col-span-5 h-64 sm:h-80 rounded-2xl overflow-hidden relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-brand-500 text-xs font-bold uppercase">
                    {service.category}
                  </div>
                </div>

                {/* Service Content */}
                <div className={`lg:col-span-7 space-y-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs font-bold text-brand-500 font-mono uppercase tracking-wider">{service.tagline}</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metadata Specs Bar */}
                  <div className="p-4 rounded-xl bg-surface-bg border border-surface-border grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Est. Transit</span>
                      <span className="text-white font-bold">{service.transitTime}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Coverage</span>
                      <span className="text-white font-bold">{service.coverage.split(' ')[0]} {service.coverage.split(' ')[1]}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Rate Estimate</span>
                      <span className="text-brand-500 font-bold">{service.pricingEstimate}</span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenQuoteModal}
                    className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-xl shadow-glow flex items-center gap-2"
                  >
                    <span>Request Rate For {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Instant Cost Estimator Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostEstimator onOpenQuoteModal={onOpenQuoteModal} />
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold font-heading text-white">Logistics FAQs</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="glass-card rounded-2xl border border-surface-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-brand-500 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-brand-500' : 'text-slate-400'}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-slate-300 leading-relaxed border-t border-surface-border/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
