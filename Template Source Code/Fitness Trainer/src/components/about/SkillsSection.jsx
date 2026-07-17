import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../utils/data';
import { fadeLeft, fadeRight, viewportOnce } from '../../utils/animations';

function SkillBar({ name, level, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), index * 100);
      return () => clearTimeout(timer);
    }
  }, [inView, level, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{name}</span>
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ background: 'var(--glow-soft)', color: 'var(--primary)', border: '1px solid rgba(var(--primary-rgb), 0.3)' }}
        >
          {level}%
        </span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${width}%`, transition: `width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s` }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      className="section-padding"
      style={{ background: 'var(--secondary-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <span className="section-label">✦ Expertise</span>
            <h2
              className="font-display font-extrabold tracking-tight leading-tight mt-3 mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--text)' }}
            >
              Areas of<br />
              <span className="text-gradient">Deep Mastery</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              10+ years of deliberate practice, continuous education, and real-world results have built deep expertise across all dimensions of fitness and performance.
            </p>
            <a href="/contact">
              <button className="btn-primary">
                Start Training Together
              </button>
            </a>
          </motion.div>

          {/* Right — Bars */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
