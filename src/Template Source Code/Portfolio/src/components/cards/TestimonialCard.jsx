import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { scaleIn } from '../../animations/variants';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div variants={scaleIn}>
      <div style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '1.25rem',
        padding: '1.75rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}>
        {/* Stars */}
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
            <FiStar key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" />
          ))}
        </div>

        {/* Quote */}
        <p style={{
          fontSize: '0.95rem', color: 'var(--color-text-muted)',
          lineHeight: '1.75', flex: 1,
          fontStyle: 'italic',
        }}>
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-primary)' }}
          />
          <div>
            <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text)' }}>{testimonial.name}</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)' }}>{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
