import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronDown, Zap, Star, Crown } from 'lucide-react';
import { membershipPlans, membershipFAQs } from '../../utils/data';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations';

const iconMap = { Zap, Star, Crown };

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left">
        <span className="font-semibold text-white">{q}</span>
        <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300" style={{ color: 'var(--primary)', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
            <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Membership() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-20 overflow-hidden pt-32" style={{ background: 'var(--secondary)' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1600&q=80" alt="Membership" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--secondary), transparent 60%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="section-label">Membership</span>
            <h1 className="font-display text-white mt-4" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              MEMBERSHIP<br /><span className="text-gradient">PLANS</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Toggle + Plans */}
      <section className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container-custom">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className="text-sm font-medium" style={{ color: yearly ? 'var(--text-muted)' : 'var(--primary)' }}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-14 h-7 rounded-full transition-all duration-300 flex items-center px-1"
              style={{ background: yearly ? 'var(--primary)' : 'rgba(255,255,255,0.15)' }}
            >
              <div className="w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-300" style={{ transform: yearly ? 'translateX(28px)' : 'translateX(0)' }} />
            </button>
            <span className="text-sm font-medium" style={{ color: !yearly ? 'var(--text-muted)' : 'var(--primary)' }}>
              Yearly <span className="ml-1 text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'var(--glow-soft)', color: 'var(--primary)', border: '1px solid var(--primary)' }}>Save 17%</span>
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {membershipPlans.map((plan) => {
              const Icon = iconMap[plan.icon];
              const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: plan.id * 0.1 }}
                  className="relative rounded-2xl p-8 flex flex-col card-hover"
                  style={{
                    background: plan.highlighted ? 'var(--glow-soft)' : 'var(--surface)',
                    border: plan.highlighted ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: plan.highlighted ? '0 0 40px var(--glow-soft)' : 'none',
                    transform: plan.highlighted ? 'scale(1.03)' : 'scale(1)',
                  }}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white" style={{ background: 'var(--primary)' }}>
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: plan.highlighted ? 'var(--primary)' : 'var(--glow-soft)', border: plan.highlighted ? 'none' : '1px solid var(--primary)' }}>
                      {Icon && <Icon className="w-5 h-5 text-white" />}
                    </div>
                    <span className="font-display text-white text-2xl">{plan.name}</span>
                  </div>
                  <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>{plan.description}</p>
                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className="font-display" style={{ fontSize: '3.5rem', lineHeight: 1, color: 'var(--primary)' }}>${price}</span>
                      <span className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>/{yearly ? 'year' : 'month'}</span>
                    </div>
                  </div>
                  <div className="divider-gradient mb-6" />
                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-3">
                        {f.included ? <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--primary)' }} /> : <X className="w-4 h-4 flex-shrink-0 text-gray-600" />}
                        <span className={`text-sm ${f.included ? 'text-white' : 'text-gray-500'}`}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full justify-center ${plan.highlighted ? 'btn-primary' : 'btn-outline'}`} style={{ display: 'flex', alignItems: 'center' }}>
                    <span>Get Started</span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="text-center mb-12">
            <h2 className="font-display text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              PLAN <span className="text-gradient">COMPARISON</span>
            </h2>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                  <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                  {membershipPlans.map((plan) => (
                    <th key={plan.id} className="py-4 px-4 text-center font-display text-xl" style={{ color: plan.highlighted ? 'var(--primary)' : 'white' }}>{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {membershipPlans[2].features.map((feature) => (
                  <tr key={feature.text} className="border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    <td className="py-4 px-4" style={{ color: 'var(--text-muted)' }}>{feature.text}</td>
                    {membershipPlans.map((plan) => {
                      const f = plan.features.find(f => f.text === feature.text);
                      return (
                        <td key={plan.id} className="py-4 px-4 text-center">
                          {f?.included ? <Check className="w-4 h-4 mx-auto" style={{ color: 'var(--primary)' }} /> : <X className="w-4 h-4 mx-auto text-gray-600" />}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportOnce} className="text-center mb-12">
            <h2 className="font-display text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              MEMBERSHIP <span className="text-gradient">FAQS</span>
            </h2>
          </motion.div>
          <div className="flex flex-col gap-4">
            {membershipFAQs.map((faq) => <FAQItem key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
