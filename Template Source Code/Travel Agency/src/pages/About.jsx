import React from 'react';
import { TEAM_MEMBERS, STATS } from '../data/travelData';
import { Award, Compass, ShieldCheck, Heart, Sparkles, ArrowRight, CheckCircle2, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About({ onOpenBooking }) {
  const values = [
    { title: 'Bespoke Perfection', desc: 'No two itineraries are ever duplicated. Every expedition is handcrafted from scratch.' },
    { title: 'Uncompromising Safety', desc: 'Direct partnership with certified air charters, medical support, and emergency evacuation.' },
    { title: 'Cultural Stewardship', desc: 'Supporting local indigenous communities, wildlife conservation, and heritage preservation.' },
    { title: 'White-Glove Hospitality', desc: 'Proactive 24/7 concierge service before, during, and after your expedition.' },
  ];

  const partners = ['Aman Resorts', 'Four Seasons', 'Belmond', 'Singita Safaris', 'Emirates First Class', 'Ritz-Carlton Reserve'];

  return (
    <div className="space-y-20 pb-24 pt-28">
      
      {/* Luxury Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80"
            alt="About VOYAGE"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-gold text-xs font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4" /> Travel Atelier Heritage
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white">
            Redefining Luxury Exploration
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Founded in 2011, VOYAGE is a world-renowned travel atelier dedicated to crafting extraordinary, high-net-worth global journeys.
          </p>
        </div>
      </section>

      {/* Our Story, Mission, Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Our Origin Story
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-text-bright">
              From Private Expeditions to Global Leadership
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">
              VOYAGE was born out of a desire to eliminate cookie-cutter tourism. We believe that true luxury lies in privacy, authenticity, and seamless execution. Over the past 15 years, we have built exclusive relationships with private island owners, tribal elders, and Michelin-starred chefs worldwide.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-surface border border-border space-y-1">
                <h4 className="font-heading font-bold text-primary text-base">Our Mission</h4>
                <p className="text-text-muted text-xs">To inspire wonder by opening doors to the world’s most pristine and restricted sanctuaries.</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface border border-border space-y-1">
                <h4 className="font-heading font-bold text-gold text-base">Our Vision</h4>
                <p className="text-text-muted text-xs">To remain the world’s undisputed benchmark in bespoke travel design and VIP guest experiences.</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-96 sm:h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
              alt="VOYAGE Expedition"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="font-heading text-4xl sm:text-5xl font-black gradient-text block">50+</span>
            <span className="text-text-bright text-xs font-bold block mt-1">Countries Covered</span>
          </div>
          <div>
            <span className="font-heading text-4xl sm:text-5xl font-black gradient-text block">12K+</span>
            <span className="text-text-bright text-xs font-bold block mt-1">Satisfied Travelers</span>
          </div>
          <div>
            <span className="font-heading text-4xl sm:text-5xl font-black gradient-text block">15+</span>
            <span className="text-text-bright text-xs font-bold block mt-1">Years Experience</span>
          </div>
          <div>
            <span className="font-heading text-4xl sm:text-5xl font-black gradient-text block">3,500+</span>
            <span className="text-text-bright text-xs font-bold block mt-1">Trips Organized</span>
          </div>
        </div>
      </section>

      {/* Meet Our Travel Experts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Master Travel Architects</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-text-bright">Meet Our Travel Experts</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="glass-card rounded-3xl overflow-hidden border border-border group flex flex-col justify-between p-5 text-center space-y-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto ring-4 ring-primary/30 group-hover:scale-105 transition-transform duration-500">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-text-bright text-lg">{member.name}</h4>
                <span className="text-xs text-primary font-semibold block">{member.role}</span>
                <p className="text-text-muted text-xs leading-relaxed pt-2">{member.bio}</p>
              </div>
              <div className="pt-3 border-t border-border/60 text-[11px] text-gold font-bold uppercase tracking-wider">
                Specialty: {member.specialty}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Guiding Principles</span>
          <h2 className="font-heading text-3xl font-bold text-text-bright">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                0{i + 1}
              </div>
              <h4 className="font-heading font-bold text-base text-text-bright">{v.title}</h4>
              <p className="text-text-muted text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Partner Logos Marquee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 rounded-3xl border border-border text-center space-y-6">
          <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Prestigious Luxury Partners</span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {partners.map((partner, idx) => (
              <span key={idx} className="font-heading font-bold text-lg text-text-muted/60 hover:text-primary transition-colors">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-10 sm:p-14 rounded-3xl border border-border text-center space-y-4">
          <h2 className="font-heading text-3xl font-black text-text-bright">Let's Explore Together.</h2>
          <p className="text-text-muted text-sm max-w-md mx-auto">
            Reach out to our principal travel designers to begin curating your custom journey.
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-3.5 rounded-full bg-primary text-white font-bold text-xs shadow-lg shadow-primary/30 hover:scale-105 transition-all"
          >
            Schedule Private Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
