import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight, FaStar, FaGem, FaCrown, FaBuilding } from 'react-icons/fa6';
import { packages } from '../../data/packages';
import { staggerContainer, staggerItem } from '../../utils/animations';

const iconMap = { FaStar, FaGem, FaCrown, FaBuilding };

export default function PackagesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding relative" ref={ref} style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mx-auto">Pricing</div>
          <h2 className="heading-section text-white mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
            Transparent <span style={{ color: 'var(--color-primary)' }}>Packages</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            Choose the plan that fits your event. All packages are fully customizable to your needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {packages.map((pkg, i) => {
            const Icon = iconMap[pkg.icon] || FaStar;
            return (
              <motion.div
                key={pkg.id}
                variants={staggerItem}
                className="relative rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: pkg.popular
                    ? 'linear-gradient(135deg, var(--color-primary)22 0%, var(--color-accent)11 100%)'
                    : 'rgba(255,255,255,0.04)',
                  border: pkg.popular
                    ? '1px solid var(--color-primary)'
                    : '1px solid rgba(255,255,255,0.07)',
                  transform: pkg.popular ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div
                    className="absolute top-0 left-0 right-0 py-1.5 text-center text-xs font-bold uppercase tracking-wider"
                    style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                  >
                    Most Popular
                  </div>
                )}

                <div className={`p-6 flex flex-col h-full ${pkg.popular ? 'pt-10' : ''}`}>
                  {/* Icon & Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: pkg.popular ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.06)' }}
                    >
                      <Icon className="text-xl" style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider">{pkg.tier}</p>
                      <p className="text-white font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{pkg.name}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-3xl font-black" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                      {pkg.price}
                    </div>
                    <div className="text-white/40 text-xs mt-1">{pkg.priceNote}</div>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-5">{pkg.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map(({ text, included }) => (
                      <li key={text} className="flex items-start gap-2.5 text-sm">
                        <FaCheck
                          className="mt-0.5 shrink-0"
                          style={{ color: included ? 'var(--color-primary)' : 'rgba(255,255,255,0.15)' }}
                        />
                        <span style={{ color: included ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.25)' }}>
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={pkg.popular ? 'btn-primary w-full justify-center text-sm' : 'btn-outline w-full justify-center text-sm'}
                  >
                    <span>{pkg.cta}</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          className="text-center text-white/30 text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          All prices are starting prices. Contact us for a detailed custom quote.
          <Link to="/packages" className="ml-2 underline" style={{ color: 'var(--color-primary)' }}>
            View full comparison →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
