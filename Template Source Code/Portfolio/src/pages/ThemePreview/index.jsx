import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import SectionWrapper, { AnimatedDiv } from '../../components/common/SectionWrapper';
import { useTheme } from '../../context/ThemeContext';
import { fadeUp, staggerContainer, scaleIn } from '../../animations/variants';

export default function ThemePreviewPage() {
  const { themes, activeThemeId, switchTheme } = useTheme();

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
      <section style={{ background: 'var(--gradient-hero)', padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="animated-bg" style={{ top: '-100px', right: '20%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <span className="section-label">✦ 6 Premium Themes</span>
            </AnimatedDiv>
            <AnimatedDiv variant={fadeUp}>
              <h1 className="section-title" style={{ marginTop: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Find Your <span className="gradient-text">Perfect Style</span>
              </h1>
              <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
                Click any theme to preview it live. All colors, gradients, and components update instantly.
              </p>
            </AnimatedDiv>
          </motion.div>
        </div>
      </section>

      {/* Theme Grid */}
      <SectionWrapper className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {themes.map((theme) => (
              <AnimatedDiv key={theme.id} variant={scaleIn}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    border: `2px solid ${activeThemeId === theme.id ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    boxShadow: activeThemeId === theme.id ? '0 0 0 4px var(--color-glow)' : 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => switchTheme(theme.id)}
                >
                  {/* Large color preview */}
                  <div style={{ height: '200px', background: theme.colors.gradient, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                    {/* Mock UI elements */}
                    <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: theme.colors.primary }} />
                        <div style={{ height: '4px', width: '80px', borderRadius: '4px', background: 'rgba(255,255,255,0.2)' }} />
                      </div>
                      <div style={{ height: '6px', borderRadius: '4px', background: theme.colors.primary, width: '60%', marginBottom: '0.5rem' }} />
                      <div style={{ height: '4px', borderRadius: '4px', background: 'rgba(255,255,255,0.15)', width: '80%', marginBottom: '0.375rem' }} />
                      <div style={{ height: '4px', borderRadius: '4px', background: 'rgba(255,255,255,0.15)', width: '70%' }} />
                    </div>

                    {/* Color swatches */}
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {[theme.preview.swatch1, theme.preview.swatch2, theme.preview.swatch3].map((color, i) => (
                        <div key={i} style={{ width: '40px', height: '40px', borderRadius: '10px', background: color, border: '2px solid rgba(255,255,255,0.2)' }} />
                      ))}
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: '1.5rem', background: 'var(--color-surface)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>{theme.name}</h3>
                      {activeThemeId === theme.id && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                          <FiCheck size={14} /> Active
                        </div>
                      )}
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{theme.description}</p>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => switchTheme(theme.id)}
                        className={activeThemeId === theme.id ? 'btn-outline' : 'btn-primary'}
                        style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '0.625rem' }}
                      >
                        {activeThemeId === theme.id ? 'Applied ✓' : 'Apply Theme'}
                      </button>
                      <Link
                        to="/portfolio/programmer"
                        onClick={() => switchTheme(theme.id)}
                        className="btn-ghost"
                        style={{ fontSize: '0.85rem', padding: '0.625rem 1rem' }}
                      >
                        <FiArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="section-sm" style={{ background: 'var(--color-surface)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedDiv variant={fadeUp}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem' }}>
              Ready to Build Your Portfolio?
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Choose your theme and pick a profession template to get started.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/portfolio" className="btn-primary">
                Explore Templates <FiArrowRight />
              </Link>
            </div>
          </AnimatedDiv>
        </div>
      </SectionWrapper>
    </div>
  );
}
