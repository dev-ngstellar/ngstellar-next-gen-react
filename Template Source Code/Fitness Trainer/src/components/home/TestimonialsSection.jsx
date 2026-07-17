import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../utils/data';
import { viewportOnce } from '../../utils/animations';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding" style={{ background: 'var(--secondary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">✦ Testimonials</span>
          <h2>
            Client Success<br />
            <span className="text-gradient">Stories</span>
          </h2>
          <p>
            Real words from real people who transformed their lives with EliteFit coaching.
          </p>
        </motion.div>

        {/* Desktop grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -8 }}
              className="glass gradient-border rounded-2xl p-6 flex flex-col gap-4 cursor-default"
              style={{ border: '1px solid var(--border)' }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-current" style={{ color: 'var(--accent)' }} />
                ))}
              </div>

              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  style={{ border: '2px solid var(--primary)' }}
                />
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--primary)' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="glass rounded-2xl p-6"
              style={{ border: '1px solid var(--border)' }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-current" style={{ color: 'var(--accent)' }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-10 h-10 rounded-full object-cover"
                  style={{ border: '2px solid var(--primary)' }}
                />
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{testimonials[current].name}</div>
                  <div className="text-xs" style={{ color: 'var(--primary)' }}>{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === current ? 'var(--primary)' : 'var(--border)',
                    width: i === current ? '24px' : '8px',
                    boxShadow: i === current ? '0 0 8px var(--glow)' : 'none',
                  }}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
