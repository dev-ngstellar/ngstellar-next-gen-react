import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AtSign, Share2, Globe } from 'lucide-react';
import { trainers } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';

const specializations = ['All', 'Powerlifting', 'CrossFit', 'Fat Loss', 'Yoga', 'Speed & Agility', 'Nutrition'];
const socialIcons = { instagram: AtSign, twitter: Share2, linkedin: Globe };

export default function Trainers() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? trainers : trainers.filter(t => t.specializations.some(s => s.includes(filter)));

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-20 overflow-hidden pt-32" style={{ background: 'var(--secondary)' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=1600&q=80" alt="Trainers" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--secondary), transparent 60%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="section-label">The Team</span>
            <h1 className="font-display text-white mt-4" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              OUR<br /><span className="text-gradient">EXPERT TRAINERS</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8" style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {specializations.map((spec) => (
              <button
                key={spec}
                onClick={() => setFilter(spec)}
                className="px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300"
                style={{
                  background: filter === spec ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                  color: filter === spec ? 'white' : 'var(--text-muted)',
                  border: filter === spec ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: filter === spec ? '0 0 20px var(--glow)' : 'none',
                }}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Grid */}
      <section className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((trainer, i) => (
                <motion.div
                  key={trainer.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="glass rounded-2xl overflow-hidden card-hover group"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {/* Photo */}
                  <div className="relative h-72 img-zoom-container">
                    <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%)' }} />

                    {/* Social Icons on hover */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                      {Object.entries(trainer.social).map(([platform, url]) => {
                        const Icon = socialIcons[platform];
                        return Icon ? (
                          <a key={platform} href={url} className="w-9 h-9 glass-dark rounded-lg flex items-center justify-center text-white hover:text-primary transition-colors duration-200">
                            <Icon className="w-4 h-4" />
                          </a>
                        ) : null;
                      })}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--primary)' }}>
                      {trainer.role}
                    </div>
                    <h3 className="font-display text-white text-2xl mb-1">{trainer.name}</h3>
                    <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{trainer.experience} Experience</p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{trainer.bio}</p>

                    {/* Specializations */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trainer.specializations.map((spec) => (
                        <span key={spec} className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'var(--glow-soft)', color: 'var(--primary)', border: '1px solid var(--primary)' }}>
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Certs */}
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert) => (
                        <span key={cert} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="container-custom text-center">
          <div className="section-header mb-8">
            <h2>
              READY TO TRAIN WITH THE <span className="text-gradient">BEST?</span>
            </h2>
            <p>Book a free consultation with any of our certified coaches.</p>
          </div>
          <a href="/contact">
            <button className="btn-primary text-base py-4 px-10">
              <span>Book Free Session</span>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
