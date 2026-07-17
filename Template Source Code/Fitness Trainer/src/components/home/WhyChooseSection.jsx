import { motion } from 'framer-motion';
import { Award, ClipboardList, Salad, MessageCircle, ShieldCheck } from 'lucide-react';
import { whyChooseItems } from '../../utils/data';
import { fadeLeft, fadeRight, staggerContainer, fadeUp, viewportOnce } from '../../utils/animations';

const iconMap = { Award, ClipboardList, Salad, MessageCircle, ShieldCheck };

export default function WhyChooseSection() {
  return (
    <section className="section-padding" style={{ background: 'var(--secondary)' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Trainer Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            {/* Glow ring */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-20"
              style={{ background: 'var(--glow)', filter: 'blur(40px)' }}
            />
            <div className="relative rounded-3xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              <img
                src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=700&q=85"
                alt="Personal trainer coaching session"
                className="w-full h-full object-cover"
                style={{ minHeight: '560px', objectPosition: 'center top' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, var(--secondary) 0%, transparent 50%)' }}
              />
            </div>

            {/* Floating badge — Experience */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-2 sm:-right-4 top-8 glass-strong rounded-2xl p-4"
              style={{ border: '1px solid rgba(255,255,255,0.12)', zIndex: 10 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}
                >
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-xl leading-none">10+</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Years Expert</div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge — Clients */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute left-2 sm:-left-4 bottom-12 glass-strong rounded-2xl p-4"
              style={{ border: '1px solid rgba(255,255,255,0.12)', zIndex: 10 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--glow-soft)', border: '1px solid var(--primary)' }}
                >
                  <span className="text-lg">⭐</span>
                </div>
                <div>
                  <div className="font-display font-bold text-white text-xl leading-none">98%</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Success Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Features */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="section-label">✦ Why Choose Me</span>
            <h2 className="font-display font-extrabold leading-tight tracking-tight mb-5 mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--text)' }}>
              The Difference Is in<br />
              <span className="text-gradient">The Details</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Premium personal training isn't just about workouts. It's about a comprehensive system that addresses every aspect of your transformation.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-5"
            >
              {whyChooseItems.map((item, i) => {
                const Icon = iconMap[item.icon] || Award;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'var(--glow-soft)',
                        border: '1px solid rgba(var(--primary-rgb), 0.3)',
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-base mb-1.5 group-hover:text-gradient transition-all duration-300" style={{ color: 'var(--text)' }}>
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-10">
              <a href="/contact">
                <button className="btn-primary py-4 px-8">
                  Work With Me
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
