import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaXmark, FaArrowRight, FaStar, FaGem, FaCrown, FaBuilding } from 'react-icons/fa6';

import { packages, packageComparison } from '../data/packages';
import { pageTransition, staggerContainer, staggerItem } from '../utils/animations';

const iconMap = { FaStar, FaGem, FaCrown, FaBuilding };

export default function Packages() {
  return (
    <motion.div {...pageTransition} className="min-h-screen">
      {/* Page Header */}
      <div className="relative py-32 pt-40 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, var(--color-secondary) 100%)' }}>
        <div className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at top, var(--color-primary) 0%, transparent 70%)' }} />
        <div className="container-custom relative z-10 text-center">
          <div className="section-label mx-auto">Pricing</div>
          <h1 className="heading-display text-white mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Event Management <span style={{ color: 'var(--color-primary)' }}>Packages</span>
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            Choose the plan that fits your event. All packages are fully customizable and transparently priced.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Packages Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {packages.map(pkg => {
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
                  border: pkg.popular ? '2px solid var(--color-primary)' : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {pkg.popular && (
                  <div className="py-2 text-center text-xs font-bold uppercase tracking-wider"
                    style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)' }}>
                    Most Popular
                  </div>
                )}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <Icon className="text-xl" style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider">{pkg.tier}</p>
                      <p className="text-white font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{pkg.name}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-3xl font-black" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
                      {pkg.price}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5">{pkg.priceNote}</div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{pkg.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map(({ text, included }) => (
                      <li key={text} className="flex items-start gap-2.5 text-sm">
                        {included
                          ? <FaCheck className="mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                          : <FaXmark className="mt-0.5 shrink-0 text-white/20" />
                        }
                        <span style={{ color: included ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.25)' }}>
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className={pkg.popular ? 'btn-primary w-full justify-center text-sm py-3' : 'btn-outline w-full justify-center text-sm py-3'}>
                    <span>{pkg.cta}</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center mb-10">
            <div className="section-label mx-auto">Detailed Comparison</div>
            <h2 className="heading-section text-white mt-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}>
              Feature <span style={{ color: 'var(--color-primary)' }}>Comparison</span>
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl"
            style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <th className="text-left p-4 text-white/50 font-semibold w-1/3">Feature</th>
                  {['Essential', 'Professional', 'Premium', 'Custom'].map(tier => (
                    <th key={tier} className="p-4 text-center text-white font-bold" style={{ color: tier === 'Professional' ? 'var(--color-primary)' : 'white' }}>
                      {tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packageComparison.categories.map(cat => (
                  <>
                    <tr key={cat.name} style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <td colSpan={5} className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-primary)' }}>
                        {cat.name}
                      </td>
                    </tr>
                    {cat.features.map(feat => (
                      <tr key={feat.name} style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                        <td className="p-4 text-white/60">{feat.name}</td>
                        {['essential', 'professional', 'premium', 'custom'].map(tier => (
                          <td key={tier} className="p-4 text-center text-white/70">
                            {typeof feat[tier] === 'boolean'
                              ? feat[tier]
                                ? <FaCheck className="mx-auto text-sm" style={{ color: 'var(--color-primary)' }} />
                                : <FaXmark className="mx-auto text-sm text-white/20" />
                              : <span className="text-xs">{feat[tier]}</span>
                            }
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
