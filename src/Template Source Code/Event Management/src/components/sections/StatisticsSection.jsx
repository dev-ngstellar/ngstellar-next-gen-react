import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from '../ui/AnimatedCounter';
import siteConfig from '../../config/siteConfig';

export default function StatisticsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=70"
          alt="Statistics background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.85)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--color-secondary)dd 0%, var(--color-secondary)99 100%)' }} />
      </div>

      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)' }} />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mx-auto">Our Track Record</div>
          <h2 className="heading-section text-white mt-2" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
            Numbers That Speak for <span style={{ color: 'var(--color-primary)' }}>Themselves</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteConfig.stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              className="text-center p-8 rounded-2xl relative group"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -4, borderColor: 'var(--color-primary)' }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'radial-gradient(ellipse at center, var(--color-primary)15 0%, transparent 70%)' }}
              />
              <div
                className="text-4xl md:text-5xl font-black mb-2 relative z-10"
                style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
              >
                <AnimatedCounter value={value} suffix={suffix} />
              </div>
              <div className="text-white/50 text-sm uppercase tracking-wider font-semibold relative z-10">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
