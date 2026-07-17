import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { viewportOnce } from '../../utils/animations';

export default function CTASection() {
  return (
    <section className="section-padding-sm relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, var(--secondary) 0%, var(--secondary-alt) 50%, var(--secondary) 100%)',
        }}
      />
      {/* Aurora orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, var(--glow-soft) 0%, transparent 70%)',
        }}
      />
      {/* Decorative ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 animate-pulse-glow"
        style={{
          width: '600px', height: '600px',
          border: '1px solid var(--primary)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-05"
        style={{
          width: '900px', height: '900px',
          border: '1px solid var(--primary)',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-label">✦ Get Started Today</span>

          <h2
            className="font-display font-extrabold leading-tight tracking-tight mt-4 mb-5"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--text)' }}
          >
            Ready To Transform<br />
            <span className="text-gradient">Your Body?</span>
          </h2>

          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 40px' }}>
            Book your first consultation today — it's completely free. No commitment, no pressure. Just a conversation about your goals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                className="btn-primary py-4 px-10 text-base gap-2.5"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                className="btn-outline py-4 px-10 text-base gap-2.5"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Calendar className="w-4 h-4" style={{ color: 'var(--primary)' }} />
                Learn More About Me
              </motion.button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            {['NASM Certified', 'ACE Certified', '10+ Years Experience', '2500+ Clients'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--primary)', fontSize: '8px' }}>◆</span>
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
