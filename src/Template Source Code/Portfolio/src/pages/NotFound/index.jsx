import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiArrowRight } from 'react-icons/fi';
import { fadeUp, staggerContainer } from '../../animations/variants';

export default function NotFoundPage() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--color-bg)', paddingTop: '80px', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div className="animated-bg" style={{ top: '-100px', left: '10%' }} />
      <div className="animated-bg" style={{ bottom: '-100px', right: '10%', animationDelay: '3s' }} />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div variants={fadeUp} style={{ fontSize: '8rem', lineHeight: 1, marginBottom: '1rem' }}>
          404
        </motion.div>
        <motion.h1 variants={fadeUp} style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem' }}>
          Page Not Found
        </motion.h1>
        <motion.p variants={fadeUp} style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '400px' }}>
          The page you're looking for doesn't exist. It might have been moved or the URL may be incorrect.
        </motion.p>
        <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary">
            <FiHome size={16} /> Go Home
          </Link>
          <Link to="/portfolio" className="btn-outline">
            Browse Templates <FiArrowRight size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
