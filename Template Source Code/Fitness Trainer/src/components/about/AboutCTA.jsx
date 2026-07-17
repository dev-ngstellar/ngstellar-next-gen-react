import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { viewportOnce } from '../../utils/animations';

export default function AboutCTA() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'var(--secondary)' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, var(--glow-soft) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 animate-pulse-glow"
        style={{ width: '500px', height: '500px', border: '1px solid var(--primary)' }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="section-label">✦ Ready?</span>
          <h2
            className="font-display font-extrabold tracking-tight leading-tight mt-4 mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', color: 'var(--text)' }}
          >
            Let's Build The Best<br />
            <span className="text-gradient">Version Of You</span>
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>
            The journey starts with a single conversation. Book a free consultation and let's create a plan that transforms your body and changes your life — for good.
          </p>
          <Link to="/contact">
            <motion.button
              className="btn-primary py-4 px-10 text-base gap-2.5"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Your Journey Today
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
