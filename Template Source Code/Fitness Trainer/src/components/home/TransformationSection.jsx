import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';
import { transformations } from '../../utils/data';
import { useCounter } from '../../hooks/useCounter';
import { viewportOnce, fadeLeft, fadeRight } from '../../utils/animations';

function AnimatedCounter({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { count, start } = useCounter(value, 2200);

  useEffect(() => {
    if (inView) start();
  }, [inView]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="counter-value">{count}{suffix}</div>
      <div className="text-xs uppercase tracking-widest mt-2 font-medium" style={{ color: 'var(--text-muted)' }}>
        {label}
      </div>
    </div>
  );
}

export default function TransformationSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);
  const currentTransform = transformations[0];

  const updateSlider = (clientX) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const pos = Math.min(Math.max(((clientX - left) / width) * 100, 5), 95);
    setSliderPos(pos);
  };

  useEffect(() => {
    const onMouseUp = () => { dragging.current = false; };
    const onMouseMove = (e) => { if (dragging.current) updateSlider(e.clientX); };
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const quickStats = [
    { value: 2500, suffix: '+', label: 'Clients' },
    { value: 98, suffix: '%', label: 'Success' },
    { value: 15000, suffix: '+', label: 'Hours' },
    { value: 10, suffix: '+', label: 'Years' },
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--secondary-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">✦ Transformations</span>
          <h2>
            Real Results,<br />
            <span className="text-gradient">Real People</span>
          </h2>
          <p>
            Over 2,500 clients have completely transformed their bodies. Here's the evidence — unfiltered.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Before/After Slider */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div
              ref={containerRef}
              className="before-after-slider rounded-3xl overflow-hidden h-[300px] sm:h-[400px] md:h-[520px]"
              style={{ border: '1px solid var(--border)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}
              onMouseDown={() => { dragging.current = true; }}
              onTouchMove={(e) => updateSlider(e.touches[0].clientX)}
            >
              {/* After image (full) */}
              <img
                src={currentTransform.after}
                alt="After transformation"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              {/* Before image (clipped) */}
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                <img
                  src={currentTransform.before}
                  alt="Before transformation"
                  className="absolute inset-0 h-full object-cover pointer-events-none"
                  style={{ width: `${(100 / sliderPos) * 100}%` }}
                  draggable={false}
                />
                <div className="absolute top-4 left-4 glass-dark rounded-xl px-3 py-1.5 text-xs font-bold text-white uppercase tracking-widest">
                  Before
                </div>
              </div>

              {/* After label */}
              <div className="absolute top-4 right-4 glass-dark rounded-xl px-3 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--primary)' }}>
                After
              </div>

              {/* Slider handle */}
              <div
                className="absolute top-0 bottom-0 w-px cursor-ew-resize"
                style={{ left: `${sliderPos}%`, background: 'var(--primary)', transform: 'translateX(-50%)', boxShadow: '0 0 16px var(--glow)' }}
              >
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--primary)', boxShadow: '0 0 24px var(--glow)' }}
                >
                  <ArrowLeftRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Result badge */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-dark rounded-xl px-4 py-2 text-sm font-bold"
                style={{ color: 'var(--primary)', border: '1px solid var(--glow-soft)' }}
              >
                Result: {currentTransform.result} · {currentTransform.duration}
              </div>
            </div>
            <p className="text-xs text-center mt-3" style={{ color: 'var(--text-subtle)' }}>
              Drag slider to compare transformation
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl glow-hover card-hover"
                  style={{ border: '1px solid var(--border)' }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-8" style={{ border: '1px solid var(--border)' }}>
              <h3 className="font-display font-bold text-2xl mb-3" style={{ color: 'var(--text)' }}>
                Your Transformation <span className="text-gradient">Starts Here</span>
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                Join 2,500+ clients who have already transformed their bodies. Our proven methodology delivers visible results within your first 30 days — guaranteed.
              </p>
              {[
                'Science-backed training protocols',
                'Weekly progress check-ins',
                'Custom nutrition plans',
                '30-day results guarantee',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mb-3 text-sm">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                    style={{ background: 'var(--glow-soft)', color: 'var(--primary)', border: '1px solid var(--primary)' }}
                  >
                    ✓
                  </span>
                  <span style={{ color: 'var(--text)' }}>{item}</span>
                </div>
              ))}
              <a href="/contact">
                <button className="btn-primary w-full justify-center mt-4">
                  Start My Transformation
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
