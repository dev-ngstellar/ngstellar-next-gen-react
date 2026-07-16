import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, Zap, Star, Crown } from 'lucide-react';
import { membershipPlans } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';

const iconMap = { Zap, Star, Crown };

export default function MembershipSection() {
  const [yearly, setYearly] = useState(false);

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
          <span className="section-label">Membership Plans</span>
          <h2>
            CHOOSE YOUR
            <br />
            <span className="text-gradient">MEMBERSHIP PLAN</span>
          </h2>
          <p>
            No hidden fees. No joining charge. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!yearly ? 'text-white' : ''}`} style={{ color: yearly ? 'var(--text-muted)' : 'var(--primary)' }}>
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-14 h-7 rounded-full transition-all duration-300 flex items-center px-1"
              style={{ background: yearly ? 'var(--primary)' : 'rgba(255,255,255,0.15)' }}
            >
              <div
                className="w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-300"
                style={{ transform: yearly ? 'translateX(28px)' : 'translateX(0)' }}
              />
            </button>
            <span className={`text-sm font-medium ${yearly ? 'text-white' : ''}`} style={{ color: !yearly ? 'var(--text-muted)' : 'var(--primary)' }}>
              Yearly
              <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'var(--glow-soft)', color: 'var(--primary)', border: '1px solid var(--primary)' }}>
                Save 17%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {membershipPlans.map((plan) => {
            const Icon = iconMap[plan.icon];
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <motion.div
                key={plan.id}
                variants={fadeUp}
                className={`relative rounded-2xl p-6 flex flex-col card-hover ${plan.highlighted ? 'glow' : ''}`}
                style={{
                  background: plan.highlighted ? 'var(--glow-soft)' : 'var(--surface)',
                  border: plan.highlighted ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.08)',
                  transform: plan.highlighted ? 'scale(1.03)' : 'scale(1)',
                }}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white"
                    style={{ background: 'var(--primary)' }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: plan.highlighted ? 'var(--primary)' : 'var(--glow-soft)',
                      border: plan.highlighted ? 'none' : '1px solid var(--primary)',
                    }}
                  >
                    {Icon && <Icon className="w-5 h-5 text-white" />}
                  </div>
                  <span className="font-display text-white text-2xl">{plan.name}</span>
                </div>

                <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="font-display text-white" style={{ fontSize: '3rem', lineHeight: 1, color: 'var(--primary)' }}>
                      ${price}
                    </span>
                    <span className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                      /{yearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {yearly && (
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      ${(plan.monthlyPrice * 12).toFixed(0)} if billed monthly
                    </p>
                  )}
                </div>

                <div className="divider-gradient mb-6" />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                      ) : (
                        <X className="w-4 h-4 flex-shrink-0 text-gray-600" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-500'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to="/membership">
                  <button
                    className={`w-full justify-center ${plan.highlighted ? 'btn-primary' : 'btn-outline'}`}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <span>Get Started</span>
                  </button>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
