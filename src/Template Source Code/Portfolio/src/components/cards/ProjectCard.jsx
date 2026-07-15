import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { hoverLift, scaleIn } from '../../animations/variants';

export default function ProjectCard({ project }) {
  return (
    <motion.div variants={scaleIn} whileHover="hover" initial="rest" animate="rest">
      <motion.div variants={hoverLift}>
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Image */}
          {project.image && (
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              {project.featured && (
                <div style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  padding: '0.25rem 0.75rem', borderRadius: '100px',
                  background: 'var(--color-primary)',
                  color: 'white', fontSize: '0.75rem', fontWeight: 700,
                }}>
                  Featured
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>{project.title}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flex: 1 }}>
              {project.description}
            </p>

            {/* Tech Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {(project.tech || []).map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem' }}>
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none' }}>
                  <FiExternalLink size={13} /> Live Demo
                </a>
              )}
              {project.github && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)', textDecoration: 'none' }}>
                  <FiGithub size={13} /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
