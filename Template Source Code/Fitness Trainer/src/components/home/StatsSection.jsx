import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../../utils/data';
import { useCounter } from '../../hooks/useCounter';
import { viewportOnce } from '../../utils/animations';

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { count, start } = useCounter(value, 2400);

  useEffect(() => {
    if (inView) start();
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6 }}
      className="text-center px-4 py-8"
    >
      <div
        className="font-display font-black leading-none mb-3"
        style={{
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          color: 'var(--primary)',
          textShadow: '0 0 40px var(--glow)',
          letterSpacing: '-0.02em',
        }}
      >
        {count}{suffix}
      </div>
      <div
        className="text-sm uppercase tracking-widest font-medium"
        style={{ color: 'var(--text-muted)' }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section
      className="section-padding-sm relative overflow-hidden"
      style={{ background: 'var(--secondary-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      {/* Aurora */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, var(--glow-soft) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          className="text-center mb-4"
        >
          <span className="section-label">✦ By The Numbers</span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0"
          style={{ borderColor: 'var(--border)', border: '1px solid var(--border)', borderRadius: '24px', overflow: 'hidden' }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass"
              style={{ background: 'var(--surface)' }}
            >
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
