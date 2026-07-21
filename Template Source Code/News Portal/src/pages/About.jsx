import React from 'react';
import { Target, Shield, Zap, Globe, Award, Users } from 'lucide-react';
import Badge from '../components/ui/Badge';

const About = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-[var(--color-border)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-50)] to-transparent dark:from-[var(--color-surface-900)] -z-10"></div>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
          <Badge variant="primary" className="mb-6">Our Story</Badge>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-[var(--color-text)] mb-8 leading-tight">
            Journalism for a <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-accent-500)]">Complex World</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
            NovaPress was founded on a simple premise: in an age of information overload, clarity is the ultimate luxury. We provide signal in the noise.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Editorial Mission</h2>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-6">
              To empower global citizens, professionals, and policymakers with deeply reported journalism, rigorous analysis, and diverse perspectives on the issues shaping our future.
            </p>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              We believe that good journalism requires time, expertise, and independence. Our editorial board operates completely autonomously from our advertising and corporate partnerships.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Shield, title: 'Independent', desc: 'Free from corporate or political influence.' },
              { icon: Target, title: 'Accurate', desc: 'Rigorous fact-checking standards.' },
              { icon: Zap, title: 'Forward-Looking', desc: 'Focusing on tomorrow\'s impact today.' },
              { icon: Globe, title: 'Global', desc: 'Perspectives from across the world.' }
            ].map((val, idx) => (
              <div key={idx} className="bg-[var(--color-bg-secondary)] p-6 rounded-3xl border border-[var(--color-border)]">
                <val.icon className="w-8 h-8 text-[var(--color-primary-500)] mb-4" />
                <h3 className="font-bold text-[var(--color-text)] mb-2">{val.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Impact */}
      <section className="bg-[var(--color-primary-950)] text-white py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="text-5xl font-black text-[var(--color-accent-500)] mb-4">5M+</div>
              <div className="text-lg font-bold">Monthly Readers</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[var(--color-primary-400)] mb-4">120+</div>
              <div className="text-lg font-bold">Countries Reached</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[var(--color-accent-500)] mb-4">45</div>
              <div className="text-lg font-bold">Journalism Awards</div>
            </div>
            <div>
              <div className="text-5xl font-black text-[var(--color-primary-400)] mb-4">250k</div>
              <div className="text-lg font-bold">Newsletter Subs</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
