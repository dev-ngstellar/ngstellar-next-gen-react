import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
import { viewportOnce } from '../../utils/animations';

export default function CTASection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, var(--secondary) 0%, rgba(11,18,32,0.9) 50%, var(--secondary) 100%)',
          }}
        />
        {/* Animated orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[100px] animate-pulse-glow"
          style={{ background: 'var(--primary)', opacity: 0.15 }}
        />
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'var(--accent)', opacity: 0.05 }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-pulse-glow"
            style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}
          >
            <Flame className="w-8 h-8 text-white" />
          </div>

          <h2
            className="font-display text-white leading-none mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            START YOUR
            <br />
            <span className="text-gradient">FITNESS JOURNEY</span>
            <br />
            TODAY
          </h2>

          <p className="text-xl max-w-2xl mx-auto mb-12" style={{ color: 'var(--text-muted)' }}>
            No more waiting. No more excuses. Join over 500 members who chose to forge their strongest version. Your first session is on us.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/membership">
              <button className="btn-primary text-base py-5 px-10">
                <span>Join Now — First Month Free</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-outline text-base py-5 px-10">
                Book Free Trial
              </button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-14">
            {[
              { icon: '🏆', text: 'No Contract Required' },
              { icon: '💳', text: 'Cancel Anytime' },
              { icon: '🔒', text: 'Secure Payment' },
              { icon: '⭐', text: '4.9/5 Rating' },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <span className="text-lg">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
