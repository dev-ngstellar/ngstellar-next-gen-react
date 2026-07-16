import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  FiArrowRight, FiEye, FiZap, FiLayout, FiSmartphone, FiSliders,
  FiAward, FiTrendingUp, FiChevronDown, FiChevronUp, FiCheck,
} from 'react-icons/fi';
import SectionWrapper, { AnimatedDiv } from '../../components/common/SectionWrapper';
import TestimonialCard from '../../components/cards/TestimonialCard';
import { fadeUp, staggerContainer, scaleIn, slideLeft, slideRight, floatingCard, floatingCardAlt } from '../../animations/variants';
import { industryThemes } from '../../data/industryThemes';
import { getAllTestimonials } from '../../data/testimonials';
import { useTheme } from '../../context/ThemeContext';

// ─── FAQ DATA ────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'Can I use these templates for commercial projects?', a: 'Yes! All templates come with a commercial license. You can use them for client projects, personal portfolios, or any commercial purpose.' },
  { q: 'How do I change the profession template?', a: 'Simply navigate to the /portfolio/:role route. Each profession is dynamically rendered from the centralized data files. Editing your data takes minutes.' },
  { q: 'Are the templates mobile responsive?', a: 'Absolutely. All templates are built mobile-first, tested on screens from 320px to 1920px wide.' },
  { q: 'Can I add more professions to the template?', a: 'Yes! The AI-ready architecture is designed for scalability. Simply add a new object to src/data/professions.js and the new profession will appear automatically.' },
  { q: 'Does PortfolioForge support custom domains?', a: 'Yes. You can deploy your portfolio to any hosting platform including Vercel, Netlify, or your own server with a custom domain.' },
  { q: 'How do I switch themes?', a: 'Use the floating theme switcher button at the bottom right of any page. Themes update instantly across all components without a page reload.' },
];

const whyCards = [
  { icon: FiLayout, title: 'Modern Design', desc: '2026-quality aesthetics with glassmorphism, gradients, and micro-animations.' },
  { icon: FiSliders, title: 'Multiple Themes', desc: '6 premium themes including dark, light, gold, purple, and more. Switch instantly.' },
  { icon: FiSmartphone, title: 'Fully Responsive', desc: 'Pixel-perfect layouts from 320px mobile to 4K widescreen.' },
  { icon: FiZap, title: 'Easy Customization', desc: 'All content lives in data files. Edit once, update everywhere.' },
  { icon: FiAward, title: 'Professional Layouts', desc: '30+ profession-specific layouts crafted by senior UI/UX designers.' },
  { icon: FiTrendingUp, title: 'Performance Optimized', desc: 'Lazy loading, code splitting, and optimized assets out of the box.' },
];

const stats = [
  { value: 10, suffix: '', label: 'Industry Themes' },
  { value: 9, suffix: '', label: 'Premium Themes' },
  { value: 10000, suffix: '+', label: 'Portfolios Built' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
];

const previewCards = [
  { label: 'Technology', emoji: '💻', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80', id: 'technology' },
  { label: 'Creative', emoji: '🎨', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80', id: 'creative' },
  { label: 'Business', emoji: '🚀', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', id: 'business' },
  { label: 'Academic', emoji: '👩‍🏫', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', id: 'academic' },
  { label: 'Legal', emoji: '⚖️', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80', id: 'legal' },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-trigger" onClick={() => setOpen(!open)}>
        <span>{faq.q}</span>
        {open ? <FiChevronUp size={18} color="var(--color-primary)" /> : <FiChevronDown size={18} color="var(--color-text-muted)" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="faq-content"
        style={{ overflow: 'hidden' }}
      >
        <p style={{ paddingBottom: '1.25rem' }}>{faq.a}</p>
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  const { themes, switchTheme, activeThemeId } = useTheme();
  const featuredIndustries = industryThemes.slice(0, 3);
  const testimonials = getAllTestimonials();

  return (
    <div style={{ background: 'var(--color-bg)' }}>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--gradient-hero)',
          paddingTop: '80px',
        }}
      >
        {/* Animated glow blobs */}
        <div className="animated-bg" style={{ top: '-200px', left: '-200px' }} />
        <div className="animated-bg" style={{ bottom: '-150px', right: '-150px', animationDelay: '3s' }} />

        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.25,
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Left: Text */}
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp}>
                <span className="section-label">✦ 2026 Edition — 30+ Templates</span>
              </motion.div>

              <motion.h1 variants={fadeUp} style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                margin: '1.25rem 0 1.5rem',
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
              }}>
                Build A Portfolio{' '}
                <span className="gradient-text">That Gets You Noticed</span>
              </motion.h1>

              <motion.p variants={fadeUp} style={{
                fontSize: '1.15rem',
                color: 'var(--color-text-muted)',
                lineHeight: '1.75',
                maxWidth: '520px',
                marginBottom: '2.5rem',
              }}>
                Showcase your skills, projects, achievements, and experience with professionally designed portfolio templates. 30+ professions. 6 premium themes.
              </motion.p>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/portfolio" className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                  Explore Portfolios <FiArrowRight />
                </Link>
                <Link to="/themes" className="btn-outline" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                  Choose Theme
                </Link>
              </motion.div>

              {/* Quick stats */}
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                {stats.map((s) => (
                  <div key={s.label} style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1 }}>
                      {s.value}{s.suffix}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Floating Preview Cards */}
            <div style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Main card */}
              <motion.div
                variants={floatingCard}
                animate="animate"
                style={{
                  position: 'absolute', left: '50%', top: '50%',
                  transform: 'translate(-60%, -60%)',
                  width: '280px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
                  zIndex: 3,
                }}
              >
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" alt="Developer" style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.375rem' }}>Developer Portfolio</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Full Stack • AI Engineer • Frontend</div>
                  <div style={{ marginTop: '1rem', display: 'flex', gap: '0.375rem' }}>
                    {['React', 'Node.js', 'Python'].map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>

              {/* Secondary card */}
              <motion.div
                variants={floatingCardAlt}
                animate="animate"
                style={{
                  position: 'absolute', right: '2%', top: '15%',
                  width: '200px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
                  zIndex: 2,
                }}
              >
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80" alt="Designer" style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                <div style={{ padding: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text)' }}>Designer Portfolio</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>UI/UX • Graphic Design</div>
                </div>
              </motion.div>

              {/* Third card */}
              <motion.div
                animate={{ y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 } }}
                style={{
                  position: 'absolute', left: '0%', bottom: '10%',
                  width: '190px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  padding: '1.25rem',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                  zIndex: 2,
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🚀</div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-text)' }}>Entrepreneur</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', marginTop: '0.375rem' }}>4 Companies • $50M+</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
            color: 'var(--color-text-subtle)', fontSize: '0.75rem',
          }}
        >
          <span>Scroll to explore</span>
          <FiChevronDown size={20} />
        </motion.div>

        <style>{`
          @media (max-width: 768px) {
            section > .container > div { grid-template-columns: 1fr !important; }
            section > .container > div > div:last-child { display: none !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURED PROFESSIONS
      ═══════════════════════════════════════════════════════════ */}
      <SectionWrapper className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">✦ Premium Industry Templates</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
              Curated Portfolio <span className="gradient-text">Themes</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto', maxWidth: '600px' }}>
              Select a core industry theme. Instantly switch and preview any specialized role inside the template.
            </p>
          </AnimatedDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {featuredIndustries.map((theme) => (
              <AnimatedDiv key={theme.slug} variant={scaleIn}>
                <div style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <img src={theme.thumbnail} alt={theme.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)' }} />
                    <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                      <h3 style={{ margin: 0, color: 'white', fontSize: '1.25rem', fontWeight: 800 }}>{theme.title}</h3>
                    </div>
                  </div>
                  <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0, flex: 1 }}>
                      {theme.description}
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {theme.supportedRoles.slice(0, 3).map(r => (
                        <span key={r} style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-subtle)' }}>
                          {r}
                        </span>
                      ))}
                      {theme.supportedRoles.length > 3 && (
                        <span style={{ fontSize: '0.7rem', color: 'var(--color-text-subtle)', alignSelf: 'center' }}>
                          +{theme.supportedRoles.length - 3} more
                        </span>
                      )}
                    </div>
                    <Link to={`/portfolio/${theme.slug}`} className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem', width: '100%', justifyContent: 'center' }}>
                      Preview Portfolio <FiArrowRight style={{ marginLeft: '0.375rem' }} />
                    </Link>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>

          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/portfolio" className="btn-outline">
              View All 10 Industry Themes <FiArrowRight />
            </Link>
          </AnimatedDiv>
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════════════════════════
          WHY CHOOSE
      ═══════════════════════════════════════════════════════════ */}
      <SectionWrapper className="section">
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">✦ Why PortfolioForge</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
              Everything You Need to{' '}
              <span className="gradient-text">Stand Out</span>
            </h2>
          </AnimatedDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {whyCards.map((card, i) => (
              <AnimatedDiv key={card.title} variant={scaleIn}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 20px 40px var(--color-glow)' }}
                  transition={{ duration: 0.25 }}
                  style={{
                    padding: '1.75rem',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '1.25rem',
                    height: '100%',
                  }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(37,99,235,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}>
                    <card.icon size={22} color="var(--color-primary)" />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.65' }}>
                    {card.desc}
                  </p>
                </motion.div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════════════════════════
          PORTFOLIO SHOWCASE
      ═══════════════════════════════════════════════════════════ */}
      <SectionWrapper className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">✦ Portfolio Showcase</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
              See It In <span className="gradient-text">Action</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Browse real portfolio previews across different professions.
            </p>
          </AnimatedDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {previewCards.map((card, i) => (
              <AnimatedDiv key={card.id} variant={scaleIn}>
                <Link to={`/portfolio/${card.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,0,0,0.25)' }}
                    transition={{ duration: 0.25 }}
                    style={{
                      borderRadius: '1.25rem', overflow: 'hidden',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-surface-alt)',
                    }}
                  >
                    <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                      <img
                        src={card.image}
                        alt={card.label}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                      />
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                      }} />
                      <div style={{
                        position: 'absolute', bottom: '1rem', left: '1rem',
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                      }}>
                        <span style={{ fontSize: '1.25rem' }}>{card.emoji}</span>
                        <span style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>{card.label}</span>
                      </div>
                    </div>
                    <div style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>View Portfolio</span>
                      <FiArrowRight size={14} color="var(--color-primary)" />
                    </div>
                  </motion.div>
                </Link>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════════════════════════
          THEME SHOWCASE
      ═══════════════════════════════════════════════════════════ */}
      <SectionWrapper className="section">
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">✦ 6 Premium Themes</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
              Find Your <span className="gradient-text">Perfect Style</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Switch themes instantly. See how your portfolio transforms with each aesthetic.
            </p>
          </AnimatedDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {themes.map((theme) => (
              <AnimatedDiv key={theme.id} variant={scaleIn}>
                <motion.button
                  onClick={() => switchTheme(theme.id)}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: '100%', border: 'none', cursor: 'pointer',
                    background: 'none', padding: 0, textAlign: 'left',
                  }}
                >
                  <div style={{
                    borderRadius: '1.25rem', overflow: 'hidden',
                    border: `2px solid ${activeThemeId === theme.id ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    transition: 'border-color 0.3s',
                    boxShadow: activeThemeId === theme.id ? '0 0 0 4px var(--color-glow)' : 'none',
                  }}>
                    {/* Theme preview bar */}
                    <div style={{
                      height: '80px',
                      background: theme.colors.gradient,
                      display: 'flex', alignItems: 'flex-end',
                      padding: '1rem',
                      gap: '0.5rem',
                    }}>
                      {[theme.preview.swatch1, theme.preview.swatch2, theme.preview.swatch3].map((color, i) => (
                        <div key={i} style={{ width: '32px', height: '32px', borderRadius: '8px', background: color, border: '2px solid rgba(255,255,255,0.2)' }} />
                      ))}
                    </div>
                    <div style={{
                      padding: '1.25rem',
                      background: 'var(--color-surface)',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text)' }}>{theme.name}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>{theme.description}</div>
                      </div>
                      {activeThemeId === theme.id && (
                        <div style={{
                          width: '24px', height: '24px', borderRadius: '50%',
                          background: 'var(--color-primary)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <FiCheck size={14} color="white" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.button>
              </AnimatedDiv>
            ))}
          </div>

          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/themes" className="btn-primary">
              Explore All Themes <FiArrowRight />
            </Link>
          </AnimatedDiv>
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <SectionWrapper className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">✦ What Users Say</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
              Loved By <span className="gradient-text">Professionals Worldwide</span>
            </h2>
          </AnimatedDiv>

          <AnimatedDiv variant={fadeUp}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              style={{ paddingBottom: '3rem' }}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <TestimonialCard testimonial={t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatedDiv>
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════ */}
      <SectionWrapper className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">✦ FAQs</span>
            <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </AnimatedDiv>

          <AnimatedDiv variant={fadeUp}>
            <div style={{ border: '1px solid var(--color-border)', borderRadius: '1.25rem', overflow: 'hidden', background: 'var(--color-surface)', padding: '0 1.5rem' }}>
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} />
              ))}
            </div>
          </AnimatedDiv>
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <SectionWrapper className="section-sm" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <motion.div
            variants={scaleIn}
            style={{
              borderRadius: '2rem',
              background: 'var(--gradient-hero)',
              border: '1px solid var(--color-border)',
              padding: 'clamp(3rem, 5vw, 5rem)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div className="animated-bg" style={{ top: '-100px', left: '30%', width: '400px', height: '400px', opacity: 0.4 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="section-label" style={{ marginBottom: '1.5rem' }}>✦ Get Started Today</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'var(--color-text)', marginBottom: '1rem', lineHeight: 1.2 }}>
                Create A Portfolio That <span className="gradient-text">Stands Out</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                Join 10,000+ professionals who have already built their dream portfolio with PortfolioForge.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/portfolio" className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                  Explore Templates <FiArrowRight />
                </Link>
                <Link to="/contact" className="btn-ghost" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

    </div>
  );
}
