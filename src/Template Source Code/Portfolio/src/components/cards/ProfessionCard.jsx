import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiEye, FiLayout, FiDroplet, FiArrowRight } from 'react-icons/fi';
import { hoverLift, scaleIn } from '../../animations/variants';

export default function ProfessionCard({ profession }) {
  // Format layout name
  const layoutName = profession.layout
    ? profession.layout.charAt(0).toUpperCase() + profession.layout.slice(1) + ' Layout'
    : 'Developer Layout';

  // Format theme name
  const themeName = profession.suggestedTheme
    ? profession.suggestedTheme.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'Developer Dark';

  return (
    <motion.div
      variants={scaleIn}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.div variants={hoverLift} style={{ height: '100%' }}>
        <div
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          {/* Thumbnail */}
          <div style={{ height: '140px', width: '100%', overflow: 'hidden', position: 'relative' }}>
            <img 
              src={profession.heroImage || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80'} 
              alt={profession.label} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Gradient Overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, var(--color-surface) 0%, transparent 100%)'
            }} />
          </div>

          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
            
            {/* Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text)' }}>
                  {profession.label}
                </h3>
                <span style={{ fontSize: '1.1rem' }}>{profession.emoji}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {profession.description}
              </p>
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
              <span style={{
                display: 'flex', alignItems: 'center', gap: '0.375rem',
                fontSize: '0.75rem', fontWeight: 600,
                background: 'rgba(37,99,235,0.1)', color: 'var(--color-primary)',
                padding: '0.375rem 0.75rem', borderRadius: '100px',
              }}>
                <FiLayout size={12} />
                {layoutName}
              </span>
              <span style={{
                display: 'flex', alignItems: 'center', gap: '0.375rem',
                fontSize: '0.75rem', fontWeight: 600,
                background: 'var(--color-surface-alt)', color: 'var(--color-text-muted)',
                border: '1px solid var(--color-border)',
                padding: '0.375rem 0.75rem', borderRadius: '100px',
              }}>
                <FiDroplet size={12} />
                {themeName}
              </span>
            </div>

            {/* Action */}
            <Link
              to={`/portfolio/${profession.id}`}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                fontSize: '0.85rem', fontWeight: 600,
                color: 'var(--color-primary)', textDecoration: 'none',
                padding: '0.75rem 1rem', borderRadius: '0.75rem',
                border: '1px solid rgba(37,99,235,0.25)',
                background: 'rgba(37,99,235,0.05)',
                transition: 'all 0.2s', marginTop: '0.5rem'
              }}
            >
              <FiEye size={16} />
              Preview Portfolio
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
