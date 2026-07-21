import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Award, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[var(--color-bg)]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--color-text)] mb-6">
              Empowering The Next Generation of <span className="gradient-text">Leaders</span>
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed">
              Founded in 2010, Elevate Academy has been at the forefront of redefining competitive education. We believe in nurturing talent with precision, passion, and purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-panel p-10 rounded-3xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary-100)] dark:bg-[var(--color-primary-900)]/40 flex items-center justify-center text-[var(--color-primary-600)] mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--color-text)] mb-4">Our Mission</h3>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                To provide accessible, high-quality education that bridges the gap between ambition and achievement. We strive to create an ecosystem where every student realizes their true potential.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-panel p-10 rounded-3xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent-100)] dark:bg-[var(--color-accent-900)]/40 flex items-center justify-center text-[var(--color-accent-600)] mb-8">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-[var(--color-text)] mb-4">Our Vision</h3>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                To be the global benchmark for academic excellence, inspiring lifelong learning, critical thinking, and innovation in the leaders of tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[var(--color-bg-secondary)] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">Our Journey</h2>
          </div>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-primary-500)] before:to-[var(--color-accent-500)]">
            {[
              { year: '2010', title: 'The Inception', desc: 'Started in a small garage with just 20 ambitious students.' },
              { year: '2015', title: 'Expanding Horizons', desc: 'Opened our first 5 premium centers across major metropolitan cities.' },
              { year: '2020', title: 'Digital Transformation', desc: 'Launched our state-of-the-art interactive online learning platform.' },
              { year: '2026', title: 'Global Recognition', desc: 'Awarded "Best EdTech Platform" and crossed 100k+ success stories.' }
            ].map((item, idx) => (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-bg-secondary)] bg-[var(--color-primary-500)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl shadow-[var(--card-shadow)]">
                  <div className="text-[var(--color-primary-500)] font-bold text-sm mb-1">{item.year}</div>
                  <h4 className="text-xl font-bold text-[var(--color-text)] mb-2">{item.title}</h4>
                  <p className="text-[var(--color-text-muted)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-16">Meet The Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Robert Kiyosaki', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
              { name: 'Sarah Jenkins', role: 'Chief Academic Officer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
              { name: 'Michael Chang', role: 'Head of Digital Strategy', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' }
            ].map((leader, idx) => (
              <div key={idx} className="group">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[var(--color-bg-secondary)] shadow-xl">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-xl font-bold text-[var(--color-text)]">{leader.name}</h4>
                <p className="text-[var(--color-primary-500)] font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
