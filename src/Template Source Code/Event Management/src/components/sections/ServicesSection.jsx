import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import {
  FaCalendarCheck, FaBuilding, FaWandMagicSparkles, FaCamera,
  FaMusic, FaBriefcase, FaHeart, FaStar,
} from 'react-icons/fa6';

import { staggerContainer, staggerItem } from '../../utils/animations';
import services from '../../data/services';

const iconMap = {
  FaCalendarCheck, FaBuilding, FaWandMagicSparkles, FaCamera,
  FaMusic, FaBriefcase, FaHeart, FaStar,
};


export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at top, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label mx-auto">Our Services</div>
          <h2 className="heading-section text-white mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            Everything You Need for a{' '}
            <span style={{ color: 'var(--color-primary)' }}>Flawless Event</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive event management services designed to handle every aspect of your event with professionalism and creativity.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || FaCalendarCheck;
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="group p-6 rounded-2xl relative overflow-hidden cursor-pointer flex flex-col h-full"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'border-color 0.3s',
                }}
                whileHover={{ y: -6, borderColor: 'var(--color-primary)' }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(ellipse at top left, rgba(212, 175, 55, 0.08) 0%, transparent 70%)' }} />

                <div className="flex-1 flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative z-10"
                    style={{ background: 'linear-gradient(135deg, var(--color-primary)22, var(--color-accent)11)' }}
                  >
                    <Icon className="text-2xl" style={{ color: 'var(--color-primary)' }} />
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 relative z-10">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-6 relative z-10 flex-1">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-white/40">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--color-primary)' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider relative z-10 transition-colors mt-auto"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Learn More <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Link to="/contact" className="btn-outline">
            <span>Discuss Your Requirements</span>
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
