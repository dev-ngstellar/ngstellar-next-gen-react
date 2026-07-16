import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTrophy, FaLightbulb, FaCircleCheck, FaStar, FaHeadset, FaMicrochip } from 'react-icons/fa6';

import { staggerContainer, staggerItem } from '../../utils/animations';
import siteConfig from '../../config/siteConfig';

const iconMap = { FaTrophy, FaLightbulb, FaCircleCheck, FaStar, FaHeadset, FaMicrochip };


export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-5"
        style={{ background: 'var(--color-primary)', transform: 'translate(-50%, -50%)' }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">Why Choose Us</div>
            <h2 className="heading-section text-white mt-2 mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              The Difference Is in{' '}
              <span style={{ color: 'var(--color-primary)' }}>the Details</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              We don't just manage events — we craft experiences. Every event is approached with the same passion, precision, and dedication to excellence that has made us an industry leader.
            </p>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden h-72">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
                alt="Event team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
              {/* Award badge */}
              <div
                className="absolute bottom-6 left-6 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(212,175,55,0.3)' }}
              >
                <p className="text-xs text-white/50 uppercase tracking-wider">Industry Recognition</p>
                <p className="text-white font-bold text-sm mt-0.5">Best Event Management Company 2025</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {siteConfig.whyChooseUs.map(({ icon, title, description }) => {
              const Icon = iconMap[icon] || FaStar;
              return (
                <motion.div
                  key={title}
                  variants={staggerItem}
                  className="p-5 rounded-2xl group transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  whileHover={{ borderColor: 'var(--color-primary)', y: -4 }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, var(--color-primary)22, var(--color-accent)11)' }}
                  >
                    <Icon className="text-xl" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h3 className="text-white font-bold mb-2 text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                    {title}
                  </h3>
                  <p className="text-white/45 text-xs leading-relaxed">{description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
