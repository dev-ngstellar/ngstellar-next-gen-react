import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { transformationStats } from '../../utils/data';
import { useCounter } from '../../hooks/useCounter';
import { fadeLeft, fadeRight, viewportOnce } from '../../utils/animations';

function AnimatedCounter({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { count, start } = useCounter(value, 2200);

  useEffect(() => {
    if (inView) start();
  }, [inView]);

  return (
    <div ref={ref} className="text-center">
      <div className="counter-value">
        {count}{suffix}
      </div>
      <div className="text-sm uppercase tracking-widest mt-2" style={{ color: 'var(--text-muted)' }}>
        {label}
      </div>
    </div>
  );
}

export default function TransformationSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateSlider = (clientX) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const pos = Math.min(Math.max(((clientX - left) / width) * 100, 5), 95);
    setSliderPos(pos);
  };

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e) => { if (dragging.current) updateSlider(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };
  const onTouchMove = (e) => updateSlider(e.touches[0].clientX);

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="section-padding" style={{ background: 'var(--secondary)' }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">Transformations</span>
          <h2>
            REAL RESULTS,
            <br />
            <span className="text-gradient">REAL PEOPLE</span>
          </h2>
          <p>
            Over 1,000 members have transformed their bodies and lives with GymForge. Here's the proof.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Before / After Slider */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
          >
            <div
              ref={containerRef}
              className="before-after-slider rounded-2xl overflow-hidden"
              style={{ height: '500px', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseDown={onMouseDown}
              onTouchMove={onTouchMove}
            >
              {/* After Image (full) */}
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=700&q=80"
                alt="After transformation"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                draggable={false}
              />

              {/* Before Image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=700&q=80"
                  alt="Before transformation"
                  className="absolute inset-0 h-full object-cover pointer-events-none"
                  style={{ width: `${(100 / sliderPos) * 100}%` }}
                  draggable={false}
                />
                <div className="absolute top-4 left-4 glass-dark rounded-lg px-3 py-1.5 text-xs font-bold text-white uppercase tracking-widest">
                  Before
                </div>
              </div>

              {/* After Label */}
              <div className="absolute top-4 right-4 glass-dark rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--primary)' }}>
                After
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 cursor-ew-resize"
                style={{ left: `${sliderPos}%`, background: 'var(--primary)', transform: 'translateX(-50%)' }}
              >
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: 'var(--primary)', boxShadow: '0 0 20px var(--glow)' }}
                >
                  <span className="text-white text-sm font-bold">⇔</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-center mt-3" style={{ color: 'var(--text-muted)' }}>
              Drag slider to compare • 12-week transformation
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {transformationStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-6 text-center glow-hover card-hover"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-8" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="font-display text-white text-2xl mb-4">
                YOUR TRANSFORMATION STARTS TODAY
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Join 1,000+ members who have already transformed their bodies. Our proven 3-phase methodology delivers measurable results within your first 30 days — guaranteed.
              </p>
              <div className="flex flex-col gap-3 text-sm mb-6">
                {['Science-backed training protocols', 'Weekly check-ins & progress tracking', 'Nutrition plans tailored to you', '30-Day results guarantee'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ background: 'var(--glow-soft)', color: 'var(--primary)', border: '1px solid var(--primary)' }}>✓</span>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary w-full justify-center">
                <span>Start My Transformation</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
