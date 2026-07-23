import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Award, Users, Warehouse, CheckCircle2, ArrowRight, Building2, Cpu, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About({ onOpenQuoteModal }) {
  const [activeGalleryTab, setActiveGalleryTab] = useState('all');

  const milestones = [
    { year: '2000', title: 'Company Founded', desc: 'Established as an international air cargo broker in Rotterdam.' },
    { year: '2008', title: 'Global Ocean Expansion', desc: 'Launched direct carrier agreements across Asia-Europe sea routes.' },
    { year: '2016', title: 'Automated WMS Launch', desc: 'Deployed first robotic fulfillment center in Singapore FTZ.' },
    { year: '2021', title: 'AI Route Tower Engine', desc: 'Introduced predictive machine learning for real-time freight telematics.' },
    { year: '2026', title: 'Net-Zero Green Fleet', desc: 'Over 250 autonomous electric linehaul vehicles deployed globally.' }
  ];

  const leadership = [
    {
      name: 'Alexander Sterling',
      role: 'Founder & Chief Executive Officer',
      experience: '25+ Years in Maritime Freight',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. Evelyn Chen',
      role: 'Chief Technology & AI Officer',
      experience: 'Ex-MIT Logistics AI Architect',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Henrik Lindqvist',
      role: 'VP of European Operations',
      experience: 'Former Rotterdam Port Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Samantha Vance',
      role: 'Head of Global Compliance & Customs',
      experience: 'Licensed Master Broker & IATA Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const galleryItems = [
    {
      category: 'air',
      title: 'Frankfurt Air Cargo Terminal',
      location: 'FRA Airport, Germany',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'sea',
      title: 'Rotterdam Sea Terminal Yard',
      location: 'Port of Rotterdam, NLD',
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'hub',
      title: 'Automated Robotic Fulfillment',
      location: 'Singapore Tuas Mega Hub',
      image: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'hub',
      title: 'Cold Chain Pharma Vaults',
      location: 'Chicago Logistics Center',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredGallery = activeGalleryTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeGalleryTab);

  return (
    <div className="space-y-24 pt-28 pb-20 overflow-hidden">
      {/* Luxury Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs font-bold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5" />
          <span>Our Corporate Story & Purpose</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white max-w-4xl mx-auto leading-tight">
          Architecting The Backbone Of <span className="text-primary-gradient">Global Commerce.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          CargoFlow was established with a singular mission: to eliminate friction from global trade through technology, precision freight execution, and unwavering reliability.
        </p>
      </section>

      {/* Mission & Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-3xl border border-surface-border space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-500 flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">Our Mission</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              To empower enterprises with instant, reliable, and transparent freight solutions that bridge continents and streamline global supply chains.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-surface-border space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-500 flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">Our Vision</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              To become the world’s most trusted technology-native logistics engine, powered by AI control towers and zero-emission transit networks.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-surface-border space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-500 flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">Sustainability</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Committed to 100% net-zero carbon operations by 2035 through sustainable aviation fuels, LNG liners, and electric last-mile vans.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline & Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold font-heading text-white">Quarter-Century of Innovation</h2>
          <p className="text-sm text-slate-400">Key milestones in our evolution into a global logistics powerhouse.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {milestones.map((m, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-surface-border space-y-2">
              <div className="text-2xl font-extrabold font-mono text-brand-500">{m.year}</div>
              <h3 className="text-sm font-bold font-heading text-white">{m.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold font-heading text-white">Executive Leadership</h2>
          <p className="text-sm text-slate-400">Led by veteran logistics pioneers and technology innovators.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((leader, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden border border-surface-border group">
              <div className="h-64 overflow-hidden">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-1">
                <h3 className="text-base font-bold font-heading text-white">{leader.name}</h3>
                <div className="text-xs text-brand-500 font-semibold">{leader.role}</div>
                <div className="text-[11px] text-slate-400 pt-1">{leader.experience}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold font-heading text-white">Global Facilities Gallery</h2>
            <p className="text-sm text-slate-400">Take a visual tour inside our air cargo hubs, deepsea ports, and automated fulfillment vaults.</p>
          </div>
          <div className="flex gap-2">
            {['all', 'air', 'sea', 'hub'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveGalleryTab(tab)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
                  activeGalleryTab === tab ? 'bg-brand-500 text-white' : 'bg-surface-card text-slate-400 border border-surface-border hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredGallery.map((item, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden border border-surface-border group relative">
              <div className="h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs text-brand-500 font-mono font-bold uppercase">{item.location}</div>
                <div className="text-lg font-bold font-heading">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-surface-border pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="glass-card p-6 rounded-2xl border border-surface-border">
            <Award className="w-8 h-8 text-brand-500 mx-auto mb-2" />
            <div className="text-sm font-bold text-white">ISO 9001:2015</div>
            <div className="text-[10px] text-slate-400">Quality Management System</div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-surface-border">
            <Award className="w-8 h-8 text-brand-500 mx-auto mb-2" />
            <div className="text-sm font-bold text-white">IATA Cargo Agent</div>
            <div className="text-[10px] text-slate-400">Air Transport Association</div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-surface-border">
            <Award className="w-8 h-8 text-brand-500 mx-auto mb-2" />
            <div className="text-sm font-bold text-white">GDP Certified</div>
            <div className="text-[10px] text-slate-400">Good Distribution Practice</div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-surface-border">
            <Award className="w-8 h-8 text-brand-500 mx-auto mb-2" />
            <div className="text-sm font-bold text-white">C-TPAT Partner</div>
            <div className="text-[10px] text-slate-400">Customs Trade Partnership</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-10 text-center space-y-4 border border-brand-500/40">
          <h2 className="text-3xl font-extrabold font-heading text-white">Moving Businesses Forward.</h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">Experience seamless global shipping backed by a dedicated account management team.</p>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs rounded-xl shadow-glow"
          >
            Get Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
