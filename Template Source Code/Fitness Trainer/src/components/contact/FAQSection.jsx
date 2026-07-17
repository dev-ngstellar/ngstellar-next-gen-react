import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { contactFAQs } from '../../utils/data';
import { viewportOnce, staggerContainer, fadeUp } from '../../utils/animations';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding" style={{ background: 'var(--secondary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">✦ FAQ</span>
          <h2>
            Frequently Asked<br />
            <span className="text-gradient">Questions</span>
          </h2>
          <p>Everything you need to know before getting started.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto flex flex-col gap-3"
        >
          {contactFAQs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-200 hover:bg-white/5 group"
              >
                <span
                  className="text-sm font-semibold leading-relaxed pr-4 transition-colors duration-200"
                  style={{ color: openIndex === i ? 'var(--primary)' : 'var(--text)' }}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    className="w-4 h-4"
                    style={{ color: openIndex === i ? 'var(--primary)' : 'var(--text-muted)' }}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className="px-6 pb-5"
                      style={{ borderTop: '1px solid var(--border)' }}
                    >
                      <p className="text-sm leading-relaxed pt-4" style={{ color: 'var(--text-muted)' }}>
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <div
            className="inline-block glass rounded-3xl p-8 max-w-lg"
            style={{ border: '1px solid var(--border)' }}
          >
            <div className="text-4xl mb-3">⏰</div>
            <h3 className="font-display font-bold text-2xl mb-2" style={{ color: 'var(--text)' }}>
              Don't Wait For Monday.
            </h3>
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              The best time to start was yesterday. The second best time is <strong style={{ color: 'var(--primary)' }}>right now.</strong>
            </p>
            <a href="#contact-form">
              <button className="btn-primary py-3.5 px-8">
                Start Today
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
