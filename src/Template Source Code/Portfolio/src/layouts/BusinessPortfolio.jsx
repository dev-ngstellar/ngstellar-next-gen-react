import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiAward, FiMessageSquare, FiExternalLink, FiRadio, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants';
import SectionWrapper, { AnimatedDiv } from '../components/common/SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';

export default function BusinessPortfolio() {
  const { selectedProfession: profession, activeProfileData: data } = usePortfolio();
  const [openFaq, setOpenFaq] = useState(null);

  if (!profession || !data) return null;

  return (
    <div style={{ background: '#FFFCF4', color: '#111827', minHeight: '100vh', fontFamily: "'Playfair Display', Georgia, serif", overflow: 'hidden' }}>
      
      {/* 1. BUSINESS HERO */}
      <section style={{ padding: '8rem 0 5rem', borderBottom: '1px solid #FDE68A', background: 'linear-gradient(to bottom, #FFFBEB 0%, #FFFCF4 100%)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <div style={{ color: '#B8962E', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', fontFamily: 'sans-serif', marginBottom: '0.5rem' }}>
                Executive Leadership Portfolio
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#111827', lineHeight: 1.15 }}>
                Building Ventures. <br />Scaling <span style={{ color: '#B8962E' }}>Impact</span>.
              </h1>
              <p style={{ fontFamily: 'sans-serif', color: '#374151', fontSize: '1.1rem', margin: '1rem 0 1.5rem', fontWeight: 600 }}>
                {data.name} — {data.title}
              </p>
            </AnimatedDiv>
            <AnimatedDiv variant={fadeUp}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontFamily: 'sans-serif' }}>
                <a href="#ventures" className="btn-primary" style={{ background: '#111827', color: '#FFFCF4', border: 'none' }}>
                  Venture History
                </a>
                <a href="#speaking" className="btn-outline" style={{ borderColor: '#B8962E', color: '#B8962E' }}>
                  Keynote Events
                </a>
              </div>
            </AnimatedDiv>
          </motion.div>

          {data.avatar && (
            <AnimatedDiv variant={scaleIn} initial="hidden" animate="visible">
              <div style={{ width: '280px', height: '360px', borderRadius: '1rem', overflow: 'hidden', border: '6px solid #FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src={data.avatar} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </AnimatedDiv>
          )}
        </div>
      </section>

      {/* 2. FOUNDER STORY */}
      <SectionWrapper className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>My Founder Journey</h2>
          <p style={{ fontFamily: 'sans-serif', color: '#475569', fontSize: '1.05rem', lineHeight: '1.8', textAlign: 'center' }}>
            {data.bio}
          </p>
        </div>
      </SectionWrapper>

      {/* 3. COMPANIES BUILT */}
      <SectionWrapper className="section" id="ventures" style={{ background: '#FFFBEB' }}>
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800 }}>Ventures & Milestones</h2>
            <p style={{ fontFamily: 'sans-serif', color: '#6B7280', fontSize: '0.9rem' }}>Companies built, led, and scaled over the years.</p>
          </AnimatedDiv>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.experience?.map((company, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #FDE68A', padding: '2rem', borderRadius: '1rem', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: '#FFFBEB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FiBriefcase size={20} color="#B8962E" />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>{company.role}</h4>
                    <span style={{ fontFamily: 'sans-serif', fontSize: '0.8rem', color: '#B8962E', fontWeight: 700 }}>{company.period}</span>
                  </div>
                  <div style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', color: '#B8962E', fontWeight: 600, margin: '0.25rem 0' }}>{company.company}</div>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '0.85rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{company.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. SUCCESS METRICS */}
      {data.stats && (
        <section className="container" style={{ padding: '3rem 0', fontFamily: 'sans-serif' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {data.stats.map((stat, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid #FDE68A', padding: '1.5rem', borderRadius: '0.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#B8962E' }}>
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#6B7280', marginTop: '0.25rem', textTransform: 'uppercase', fontWeight: 700 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. STRATEGIC SERVICES */}
      <SectionWrapper className="section" style={{ background: '#FFFBEB' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>Consulting & Advisory Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', fontFamily: 'sans-serif' }}>
            {[
              { title: "Growth & Scaling Strategy", desc: "Helping growth-stage startups implement frameworks to optimize pricing, team design, and market fit." },
              { title: "Executive Mentorship", desc: "One-on-one coaching for founders and key executives to scale leadership and company culture." }
            ].map((srv, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #FDE68A', borderRadius: '0.5rem' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#B8962E', marginBottom: '0.5rem' }}>{srv.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.6' }}>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. INVESTMENTS PORTFOLIO */}
      <SectionWrapper className="section">
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Angel Investment Portfolio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', fontFamily: 'sans-serif' }}>
            {[
              { name: "FinTech Flow Corp", sector: "Payment Infrastructure", stage: "Seed Stage" },
              { name: "SaaS Automate Labs", sector: "AI Process Management", stage: "Series A Stage" }
            ].map((inv, idx) => (
              <div key={idx} style={{ padding: '1.25rem', background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '0.5rem' }}>
                <div style={{ fontWeight: 700, color: '#111827' }}>{inv.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#B8962E', marginTop: '0.25rem' }}>{inv.sector} • {inv.stage}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. MEDIA WALL */}
      <section style={{ padding: '3rem 0', background: '#FFFBEB', opacity: 0.6 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', fontSize: '1.1rem', fontWeight: 700 }}>
          <span>Forbes Feature</span>
          <span>Bloomberg Market</span>
          <span>TechCrunch Venture</span>
          <span>Wired Interview</span>
        </div>
      </section>

      {/* 8. KEYNOTE SPEAKING */}
      <SectionWrapper className="section" id="speaking">
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Keynote Highlights</h2>
            <p style={{ fontFamily: 'sans-serif', color: '#6B7280' }}>Sharing knowledge with international corporate audiences.</p>
          </AnimatedDiv>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { topic: "Strategic Leadership in tech", venue: "Global Tech Summit, Davos", attendance: "1,500 delegates" },
              { topic: "The Future of Seed Investments", venue: "Angel Investor Summit, Austin", attendance: "800 attendees" }
            ].map((talk, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #FDE68A', borderRadius: '0.75rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#B8962E', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'sans-serif' }}>Keynote</div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0.5rem 0' }}>{talk.topic}</h4>
                <div style={{ fontFamily: 'sans-serif', fontSize: '0.85rem', color: '#6B7280' }}>📍 {talk.venue}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 9. VENTURE CASE STUDIES */}
      <SectionWrapper className="section" style={{ background: '#FFFBEB' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Acquisition & Exit Case Files</h2>
          <div style={{ background: '#FFFFFF', border: '1px solid #FDE68A', padding: '2rem', borderRadius: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#B8962E', marginBottom: '0.5rem' }}>The exit of TechNova Corp</h4>
            <p style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', color: '#475569', lineHeight: 1.7 }}>
              Guided TechNova Corp from launch to acquisition by an enterprise SaaS giant, achieving a 15x return for early institutional investors within 36 months.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 10. PODCAST FEATURES */}
      <SectionWrapper className="section">
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>Featured Podcasts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', fontFamily: 'sans-serif' }}>
            {[
              { show: "Founder Founders Podcast", episode: "Ep 88: Building Ventures and Taking Risks", length: "45 mins" },
              { show: "Venture Capital Daily", episode: "Ep 124: The Pitch Desk Blueprint", length: "30 mins" }
            ].map((p, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #FDE68A', borderRadius: '0.75rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <FiRadio size={24} color="#B8962E" />
                <div>
                  <div style={{ fontWeight: 700 }}>{p.show}</div>
                  <div style={{ fontSize: '0.8rem', color: '#6B7280' }}>{p.episode} • {p.length}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 11. BUSINESS BLOG */}
      <SectionWrapper className="section" style={{ background: '#FFFBEB' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>Founder Insights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', fontFamily: 'sans-serif' }}>
            {[
              { title: "How To Pitch Your Venture Seed Round", date: "May 2026", read: "5 min read" },
              { title: "Building Board Competency In Startups", date: "April 2026", read: "8 min read" }
            ].map((post, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #FDE68A', borderRadius: '0.75rem' }}>
                <FiBookOpen size={20} color="#B8962E" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{post.title}</h4>
                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{post.date} • {post.read}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 12. FAQ ACCORDION */}
      <SectionWrapper className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>Executive FAQs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'sans-serif' }}>
            {[
              { q: "What is your typical board advisory term?", a: "I generally join tech and finance boards for 12 to 24 month advisor agreements." },
              { q: "Do you invest globally?", a: "Yes, I participate in seed-stage syndicates in the US, Europe, and Asia." }
            ].map((faq, idx) => (
              <div key={idx} style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} style={{ width: '100%', background: 'none', border: 'none', padding: '1.25rem', textAlign: 'left', color: '#111827', fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{faq.q}</span>
                  <span>{openFaq === idx ? '-' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ padding: '0 1.25rem 1.25rem', color: '#6B7280', fontSize: '0.85rem' }}>
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 13. CTA BANNER & CONTACT */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #111827 0%, #FFFCF4 100%)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>Partner / Consult</h2>
          <p style={{ fontFamily: 'sans-serif', color: '#D1D5DB', marginBottom: '2.5rem' }}>Request an initial strategic consultation session.</p>
          <a href={`mailto:${data.email}`} className="btn-primary" style={{ background: '#111827', color: '#FFFCF4', border: 'none', padding: '0.875rem 2rem', fontFamily: 'sans-serif' }}>
            Book Consultation
          </a>
        </div>
      </section>

    </div>
  );
}
