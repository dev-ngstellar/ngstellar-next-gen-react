import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiSliders, FiArrowRight, FiCheck } from 'react-icons/fi';
import SectionWrapper, { AnimatedDiv } from '../../components/common/SectionWrapper';
import { industryThemes } from '../../data/industryThemes';
import { fadeUp, staggerContainer, scaleIn } from '../../animations/variants';

export default function PortfolioCategoriesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = [
    { id: 'all', label: 'All Categories' },
    { id: 'technology', label: 'Technology' },
    { id: 'creative', label: 'Creative' },
    { id: 'business', label: 'Business' },
    { id: 'academic', label: 'Academic' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'legal', label: 'Legal' },
    { id: 'finance', label: 'Finance' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'sports', label: 'Sports' }
  ];

  const filteredThemes = industryThemes.filter((theme) => {
    const matchCat = activeCategory === 'all' || theme.slug === activeCategory;
    const matchSearch = 
      theme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.supportedRoles.some(role => role.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header Section */}
      <section style={{
        background: 'var(--gradient-hero)',
        padding: '5rem 0 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="animated-bg" style={{ top: '-100px', right: '10%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <span className="section-label">✦ Premium Industry Portfolio Ecosystem</span>
            </AnimatedDiv>
            <AnimatedDiv variant={fadeUp}>
              <h1 className="section-title" style={{ marginTop: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Industry Portfolio <span className="gradient-text">Themes</span>
              </h1>
              <p className="section-subtitle" style={{ margin: '1rem auto 0', maxWidth: '600px' }}>
                Discover our curated suite of 10 industry themes designed to automatically adapt to any professional role.
              </p>
            </AnimatedDiv>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search Bar */}
      <div style={{
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        position: 'sticky',
        top: '72px',
        zIndex: 40,
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container" style={{ padding: '1rem 1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          
          {/* Search Input */}
          <div style={{ position: 'relative', flex: '1', minWidth: '220px', maxWidth: '360px' }}>
            <FiSearch size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-subtle)' }} />
            <input
              type="text"
              placeholder="Search industry themes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.625rem 1rem 0.625rem 2.75rem',
                background: 'var(--color-surface-alt)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.75rem',
                color: 'var(--color-text)',
                fontSize: '0.875rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
            />
          </div>

          {/* Categories Horizontal Filter list */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {filterOptions.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.125rem',
                  borderRadius: '100px',
                  border: '1px solid',
                  borderColor: activeCategory === cat.id ? 'var(--color-primary)' : 'var(--color-border)',
                  background: activeCategory === cat.id ? 'var(--color-primary)' : 'transparent',
                  color: activeCategory === cat.id ? 'white' : 'var(--color-text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)', marginLeft: 'auto' }}>
            {filteredThemes.length} Theme{filteredThemes.length !== 1 ? 's' : ''} available
          </span>
        </div>
      </div>

      {/* Industry Themes Grid */}
      <div className="container section">
        {filteredThemes.length > 0 ? (
          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredThemes.map((theme) => (
              <AnimatedDiv key={theme.slug} variant={scaleIn}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px var(--color-glow)' }}
                  transition={{ duration: 0.25 }}
                  style={{
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-surface)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  {/* Thumbnail Preview */}
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={theme.thumbnail}
                      alt={theme.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)'
                    }} />
                    
                    {/* Role Counter Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      border: '1px solid rgba(255,255,255,0.15)'
                    }}>
                      {theme.supportedRoles.length} Roles Supported
                    </div>

                    {/* Theme Name */}
                    <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                      <h3 style={{ margin: 0, color: '#fff', fontSize: '1.5rem', fontWeight: 800 }}>
                        {theme.title}
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600, display: 'block', marginTop: '0.25rem' }}>
                        {theme.industry} Industry
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    
                    {/* Badges Row */}
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                      <span style={{
                        background: 'rgba(37,99,235,0.08)',
                        color: 'var(--color-primary)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'capitalize'
                      }}>
                        {theme.layout} Layout
                      </span>
                      <span style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-muted)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}>
                        Style: {theme.style}
                      </span>
                    </div>

                    {/* Description */}
                    <p style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: '1.6',
                      marginBottom: '1.25rem',
                      flex: 1
                    }}>
                      {theme.description}
                    </p>

                    {/* Used For Tags */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <span style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--color-text-subtle)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.5rem'
                      }}>
                        Used For:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                        {theme.supportedRoles.slice(0, 4).map((role) => (
                          <span
                            key={role}
                            style={{
                              padding: '0.2rem 0.5rem',
                              background: 'var(--color-surface-alt)',
                              border: '1px solid var(--color-border)',
                              borderRadius: '4px',
                              color: 'var(--color-text-muted)',
                              fontSize: '0.75rem'
                            }}
                          >
                            {role}
                          </span>
                        ))}
                        {theme.supportedRoles.length > 4 && (
                          <span style={{
                            padding: '0.2rem 0.5rem',
                            color: 'var(--color-text-subtle)',
                            fontSize: '0.75rem',
                            alignSelf: 'center'
                          }}>
                            +{theme.supportedRoles.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      to={`/portfolio/${theme.slug}`}
                      className="btn-primary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        padding: '0.75rem',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        borderRadius: '0.75rem'
                      }}
                    >
                      Preview Theme <FiArrowRight style={{ marginLeft: '0.5rem' }} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedDiv>
            ))}
          </motion.div>
        ) : (
          <div style={{ textAlign: 'center', padding: '6rem 0', color: 'var(--color-text-muted)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>No Themes Found</h3>
            <p>Try adjusting your search query or categories.</p>
            <button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} className="btn-primary" style={{ marginTop: '1.5rem' }}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
