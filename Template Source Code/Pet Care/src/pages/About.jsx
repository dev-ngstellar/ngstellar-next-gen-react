import React from 'react';
import { BreadcrumbBanner } from '../components/common/BreadcrumbBanner';
import { VETS_DATA } from '../data/mockData';
import { Award, ShieldCheck, Heart, Users, Target, Eye, Sparkles } from 'lucide-react';

export const About = () => {
  const timeline = [
    { year: '2010', title: 'Founded in New York', desc: 'Started as a boutique 2-doctor veterinary practice.' },
    { year: '2015', title: 'AAHA Accreditation', desc: 'Achieved top 12% national clinical excellence certification.' },
    { year: '2019', title: '24/7 ER ICU Launch', desc: 'Expanded hospital facility with state-of-the-art trauma surgery wing.' },
    { year: '2023', title: 'Luxury Grooming & Spa Resort', desc: 'Added climate-controlled boarding suites and organic hydro-baths.' }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors">
      
      <BreadcrumbBanner
        pageName="About Us"
        title="Our Story, Mission & Certified Team"
        subtitle="Dedicated to redefining animal healthcare standards through clinical innovation, transparent medicine, and heartfelt empathy."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">Our Legacy</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading)] tracking-tight">
              A Decade of Unwavering Love for Animals
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted-text)] leading-relaxed">
              Founded by Dr. Sarah Jenkins in 2010, AuraPet Veterinary Hospital was born out of a desire to eliminate fear and anxiety from pet clinic visits. We built our facility with acoustic soundproofing, species-segregated wings, and transparent surgical suites.
            </p>
            <p className="text-sm sm:text-base text-[var(--muted-text)] leading-relaxed">
              Today, our multidisciplinary medical center combines board-certified surgeons, critical care emergency physicians, and master groomers under one luxurious roof.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)]">
              <img 
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1000&q=80" 
                alt="Clinic Tour" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--heading)]">Our Mission</h3>
            <p className="text-xs sm:text-sm text-[var(--muted-text)] leading-relaxed">
              To deliver uncompromising, evidence-based veterinary care with low-stress handling protocols while empowering pet owners with digital transparency and compassionate guidance.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--heading)]">Our Vision</h3>
            <p className="text-xs sm:text-sm text-[var(--muted-text)] leading-relaxed">
              To set the benchmark for modern SaaS-level pet hospital experiences, merging luxury hospitality with cutting-edge medical diagnostic technology.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">Our Milestones</span>
            <h2 className="text-3xl font-extrabold text-[var(--heading)] mt-1">Hospital History Timeline</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] space-y-2 relative">
                <span className="text-2xl font-extrabold text-[var(--primary)]">{item.year}</span>
                <h4 className="text-base font-bold text-[var(--heading)]">{item.title}</h4>
                <p className="text-xs text-[var(--muted-text)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Doctors */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">Expert Leadership</span>
            <h2 className="text-3xl font-extrabold text-[var(--heading)] mt-1">Meet Our Board Specialists</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VETS_DATA.map((vet) => (
              <div key={vet.id} className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden space-y-3 p-4">
                <img src={vet.image} alt={vet.name} className="w-full h-56 object-cover rounded-2xl" />
                <h4 className="text-base font-bold text-[var(--heading)]">{vet.name}</h4>
                <p className="text-xs font-semibold text-[var(--primary)]">{vet.specialization}</p>
                <p className="text-xs text-[var(--muted-text)] line-clamp-2">{vet.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
