import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhone } from 'react-icons/fa6';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=70"
          alt="CTA background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.88)' }} />
      </div>

      {/* Ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 border-2"
        style={{ borderColor: 'var(--color-primary)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-8 border"
        style={{ borderColor: 'var(--color-primary)' }} />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label mx-auto">Ready to Begin?</div>
          <h2
            className="heading-display text-white mt-4 mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
          >
            Let's Plan Your{' '}
            <span style={{ color: 'var(--color-primary)' }}>Next Event</span>
          </h2>

          <div className="divider-ornament mx-auto">
            <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}>✦</span>
          </div>

          <p className="text-white/55 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From intimate gatherings to grand productions — we're here to make your event vision a breathtaking reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/contact" className="btn-primary text-base">
              <span>Book a Free Consultation</span>
              <FaArrowRight />
            </Link>
            <a href="tel:+18000000000" className="btn-outline text-base">
              <FaPhone />
              <span>Call +1 (800) 000-0000</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              '✓ No Hidden Fees',
              '✓ Free Initial Consultation',
              '✓ 100% Client Satisfaction',
              '✓ 12+ Years Experience',
            ].map(item => (
              <span key={item} className="text-white/40 text-sm font-medium">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
