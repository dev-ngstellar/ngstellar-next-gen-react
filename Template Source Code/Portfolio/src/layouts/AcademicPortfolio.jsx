import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBookOpen, FiFileText, FiAward, FiCalendar, FiClock, FiActivity } from 'react-icons/fi';
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants';
import SectionWrapper, { AnimatedDiv } from '../components/common/SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';

export default function AcademicPortfolio() {
  const { selectedProfession: profession, activeProfileData: data } = usePortfolio();
  const [openFaq, setOpenFaq] = useState(null);

  if (!profession || !data) return null;

  return (
    <div style={{ background: '#F7FFF8', color: '#0F172A', minHeight: '100vh', fontFamily: "'Inter', sans-serif", overflow: 'hidden' }}>
      
      {/* 1. ACADEMIC HERO */}
      <section style={{ padding: '7rem 0 4rem', background: 'linear-gradient(135deg, #F0FDF4 0%, #F7FFF8 100%)', borderBottom: '1px solid #D1FAE5' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <span style={{ fontSize: '0.8rem', background: 'rgba(21,128,61,0.1)', color: '#15803D', padding: '0.35rem 0.75rem', borderRadius: '100px', fontWeight: 700, textTransform: 'uppercase' }}>
                Academic & Research Portfolio
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', marginTop: '1rem', letterSpacing: '-0.02em' }}>
                {data.name}
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#15803D', fontWeight: 600, margin: '0.5rem 0' }}>
                {data.title}
              </p>
            </AnimatedDiv>
            <AnimatedDiv variant={fadeUp}>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <a href="#publications" className="btn-primary" style={{ background: '#15803D', color: '#FFF', border: 'none' }}>
                  Publications Database
                </a>
              </div>
            </AnimatedDiv>
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" animate="visible" style={{
            background: '#FFFFFF', border: '1px solid #D1FAE5', borderRadius: '1rem', padding: '2rem', boxShadow: '0 10px 25px rgba(21,128,61,0.05)'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#15803D', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              Academic Statistics
            </h3>
            {data.stats ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {data.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A' }}>{stat.value}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A' }}>18</div>
                  <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>Publications</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A' }}>950+</div>
                  <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>Citations</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 2. ACADEMIC PROFILE */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#15803D', marginBottom: '1.5rem' }}>Scholar Bio</h2>
          <p style={{ color: '#374151', fontSize: '1.05rem', lineHeight: 1.8 }}>{data.bio}</p>
        </div>
      </SectionWrapper>

      {/* 3. EDUCATION HISTORY */}
      <SectionWrapper className="section" style={{ background: '#F0FDF4' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>Education Credentials</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { degree: "Ph.D. in Theoretical Physics", school: "Boston University", year: "2019" },
              { degree: "M.Sc. in Physics", school: "Stanford University", year: "2015" }
            ].map((edu, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #D1FAE5', borderRadius: '0.75rem' }}>
                <FiAward size={24} color="#15803D" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{edu.degree}</h4>
                <p style={{ fontSize: '0.85rem', color: '#6B7280' }}>{edu.school} • {edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Core Research Areas */}
      <SectionWrapper className="section">
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Core Research Spheres</h2>
          </AnimatedDiv>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: "Quantum Computing & Information Theory", desc: "Developing algorithms for decoherence mitigation in superconducting systems." },
              { title: "Advanced Computational Physics", desc: "Simulating molecular dynamics in crystalline networks." }
            ].map((area, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #D1FAE5', borderRadius: '0.75rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#15803D', marginBottom: '0.5rem' }}>{area.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. RESEARCH PAPERS */}
      <SectionWrapper className="section" style={{ background: '#F0FDF4' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Featured Research Papers</h2>
          <div style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #D1FAE5', borderRadius: '0.75rem' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#15803D', marginBottom: '0.5rem' }}>Quantum Decoherence Mitigation Schemes</h4>
            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.6' }}>
              Our work introduces a novel algorithm to extend qubit coherent phases inside superconducting quantum registers, reducing gate error boundaries by 15%.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. PUBLICATIONS */}
      <SectionWrapper className="section" id="publications">
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Publications & Articles</h2>
            <p style={{ color: '#475569', fontSize: '0.9rem' }}>Academic papers compiled in peer-reviewed science journals.</p>
          </AnimatedDiv>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { title: "Decoherence Mitigation Schemes in Superconducting Circuits", journal: "Nature Physics Reviews", year: "2024", type: "Review Paper" },
              { title: "Molecular Dynamics Simulations in Crystalline Solid Networks", journal: "Journal of Computational Chemistry", year: "2022", type: "Research Paper" }
            ].map((pub, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #D1FAE5', padding: '1.5rem', borderRadius: '0.75rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <FiBookOpen size={24} color="#15803D" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.25rem' }}>{pub.title}</h4>
                  <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>
                    <span>{pub.journal}</span> • <span style={{ color: '#15803D', fontWeight: 600 }}>{pub.year}</span> • <span style={{ background: '#F0FDF4', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>{pub.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. RESEARCH PROJECTS */}
      <SectionWrapper className="section" style={{ background: '#F0FDF4' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Active Research Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: "Qubit Noise Decoupling Simulator", desc: "A simulation framework modeling high-frequency thermal noise patterns in quantum gates." }
            ].map((p, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #D1FAE5', borderRadius: '0.75rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#15803D', marginBottom: '0.5rem' }}>{p.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#475569' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 8. ACADEMIC ACHIEVEMENTS */}
      <SectionWrapper className="section">
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>Fellowships & Achievements</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', opacity: 0.8 }}>
            <div style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #D1FAE5', borderRadius: '0.5rem', textAlign: 'center' }}>
              <FiAward size={32} color="#15803D" style={{ marginBottom: '0.5rem' }} />
              <h4>NSF Research Fellowship</h4>
              <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>National Science Foundation 2024</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 9. CERTIFICATIONS */}
      <SectionWrapper className="section" style={{ background: '#F0FDF4' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Professional Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { name: "Advanced Data Science Certification", auth: "Johns Hopkins University" }
            ].map((cert, idx) => (
              <div key={idx} style={{ padding: '1rem', background: '#FFFFFF', border: '1px solid #D1FAE5', borderRadius: '0.5rem' }}>
                <div style={{ fontWeight: 700 }}>{cert.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#6B7280' }}>{cert.auth}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 10. CONFERENCES */}
      <SectionWrapper className="section">
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Conference Participation</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { event: "APS March Meeting 2025", role: "Keynote Speaker", topic: "Decoherence Limits" }
            ].map((conf, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #D1FAE5', borderRadius: '0.75rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#15803D', fontWeight: 700 }}>{conf.event}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.25rem 0' }}>{conf.role}</h4>
                <p style={{ fontSize: '0.8rem', color: '#6B7280' }}>Topic: {conf.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 11. CITATIONS DASHBOARD */}
      <SectionWrapper className="section" style={{ background: '#F0FDF4' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <h3>Citation Benchmarks</h3>
            <p style={{ fontSize: '0.85rem', color: '#6B7280' }}>Research citation progress tracking metrics.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', textAlign: 'center' }}>
            <div style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #D1FAE5' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#15803D' }}>950+</div>
              <div>Citations</div>
            </div>
            <div style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #D1FAE5' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#15803D' }}>12</div>
              <div>H-Index</div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 12. ACADEMIC BLOG */}
      <SectionWrapper className="section">
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>Academic Insights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: "Conducting Noise Audits In Superconducting Gates", date: "May 2026", cat: "Methodology" }
            ].map((post, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #D1FAE5', borderRadius: '0.75rem' }}>
                <FiBookOpen size={20} color="#15803D" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{post.title}</h4>
                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{post.date} • {post.cat}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 13. FAQ ACCORDION */}
      <SectionWrapper className="section" style={{ background: '#F0FDF4' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>Research FAQs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { q: "Are preprint PDFs of your work available?", a: "Yes, arXiv preprints are available for download under each publication link." }
            ].map((faq, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #D1FAE5', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} style={{ width: '100%', background: 'none', border: 'none', padding: '1.25rem', textAlign: 'left', color: '#0F172A', fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
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

      {/* CONTACT */}
      <section className="section" id="contact" style={{ background: '#F7FFF8' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Academic Inquiries</h2>
          <p style={{ color: '#475569', margin: '0.5rem 0 2rem' }}>Reach out for post-doc requests, speaking keynotes, or research partnerships.</p>
          <a href={`mailto:${data.email}`} className="btn-primary" style={{ background: '#15803D', color: '#FFF', border: 'none', padding: '0.875rem 2rem' }}>
            Contact Scholar
          </a>
        </div>
      </section>

    </div>
  );
}
