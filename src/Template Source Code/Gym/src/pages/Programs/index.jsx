import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, BarChart2, Calendar, ChevronDown, ArrowRight } from 'lucide-react';
import { programs, programFAQs } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';
import { Link } from 'react-router-dom';

const categories = ['All', 'Cardio & Conditioning', 'Hypertrophy', 'Functional', 'Movement', 'Powerlifting', '1-on-1'];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-white">{q}</span>
        <ChevronDown
          className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
          style={{ color: 'var(--primary)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? programs : programs.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden pt-32" style={{ background: 'var(--secondary)' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=1600&q=80" alt="Programs" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--secondary), transparent 60%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="section-label">Training Programs</span>
            <h1 className="font-display text-white mt-4" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              OUR<br /><span className="text-gradient">PROGRAMS</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8" style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300"
                style={{
                  background: activeCategory === cat ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                  color: activeCategory === cat ? 'white' : 'var(--text-muted)',
                  border: activeCategory === cat ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: activeCategory === cat ? '0 0 20px var(--glow)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((program, i) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="glass rounded-2xl overflow-hidden card-hover group"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {/* Image */}
                  <div className="relative h-56 img-zoom-container">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)' }} />
                    <span className="absolute top-4 left-4 inline-flex items-center justify-center text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full leading-none"
                      style={{ background: 'rgba(0,0,0,0.6)', color: program.color, border: `1px solid ${program.color}` }}>
                      {program.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-white text-2xl mb-3">{program.title}</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{program.description}</p>
                    <div className="flex items-center gap-6 mb-6">
                      <span className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <Clock className="w-4 h-4" style={{ color: 'var(--primary)' }} /> {program.duration}
                      </span>
                      <span className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <BarChart2 className="w-4 h-4" style={{ color: 'var(--primary)' }} /> {program.level}
                      </span>
                      <span className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <Calendar className="w-4 h-4" style={{ color: 'var(--primary)' }} /> {program.sessions}
                      </span>
                    </div>
                    <Link to="/membership">
                      <button className="btn-primary w-full justify-center text-sm py-3">
                        <span>Enroll Now</span>
                        <ArrowRight className="w-4 h-4 relative z-10" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-header"
          >
            <h2>
              EVERY PROGRAM INCLUDES <span className="text-gradient">THESE BENEFITS</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '📋', title: 'Personalized Plan', desc: 'Tailored to your goals and fitness level' },
              { icon: '📊', title: 'Progress Tracking', desc: 'Weekly assessments and metrics' },
              { icon: '🥗', title: 'Nutrition Guide', desc: 'Macro-based meal planning included' },
              { icon: '🤝', title: 'Coach Support', desc: '24/7 messaging with your coach' },
            ].map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6 text-center card-hover" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-4xl mb-4">{b.icon}</div>
                <h4 className="font-display text-white text-lg mb-2">{b.title}</h4>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="section-header"
          >
            <h2>
              FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
            </h2>
          </motion.div>
          <div className="flex flex-col gap-4">
            {programFAQs.map((faq) => <FAQItem key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
