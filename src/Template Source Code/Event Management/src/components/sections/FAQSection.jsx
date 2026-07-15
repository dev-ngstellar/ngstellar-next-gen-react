import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { AnimatePresence } from 'framer-motion';
import siteConfig from '../../config/siteConfig';
import { staggerContainer, staggerItem } from '../../utils/animations';

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid rgba(255,255,255,0.15)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left transition-all duration-300"
        style={{ background: open ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)' }}
        aria-expanded={open}
        id={`faq-btn-${index}`}
      >
        <span className="text-white font-semibold text-sm pr-4 leading-snug">{faq.question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
          style={{ color: open ? 'var(--color-primary)' : 'rgba(255,255,255,0.5)' }}
        >
          <FaChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
            role="region"
            aria-labelledby={`faq-btn-${index}`}
          >
            <div className="px-5 pb-5 pt-2">
              <p className="text-white/55 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding relative" ref={ref} style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">FAQ</div>
            <h2 className="heading-section text-white mt-2 mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Frequently Asked <span style={{ color: 'var(--color-primary)' }}>Questions</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Have questions about our event management services? We've gathered the most common queries below.
            </p>
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <p className="text-white font-semibold mb-2">Still have questions?</p>
              <p className="text-white/50 text-sm mb-4">Our team is here to help you plan the perfect event.</p>
              <a
                href="mailto:hello@eventpro.com"
                className="btn-primary text-sm"
              >
                <span>Contact Our Team</span>
              </a>
            </div>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            {siteConfig.faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
