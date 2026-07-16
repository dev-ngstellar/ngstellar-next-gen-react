import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFileText, FiShield, FiBriefcase, FiTrendingUp, FiAward, FiBook, FiUsers, FiClock, FiMapPin, FiSend, FiArrowRight, FiCheckCircle, FiHelpCircle, FiLock } from 'react-icons/fi';
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants';
import SectionWrapper, { AnimatedDiv } from '../components/common/SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';

export default function LegalPortfolio() {
  const { selectedProfession: profession, activeProfileData: data } = usePortfolio();
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [caseType, setCaseType] = useState('corporate');
  const [hourEstimate, setHourEstimate] = useState('10');

  if (!profession || !data) return null;

  const toggleFaq = (idx) => setActiveFaq(activeFaq === idx ? null : idx);

  const practiceAreas = [
    { title: "Corporate Mergers & Acquisitions", desc: "Structuring cross-border transactions, asset acquisition agreements, strategic joint ventures, and post-merger integration compliance." },
    { title: "Intellectual Property Litigation", desc: "Filing defense plans, trademark opposition proceedings, patent licensing audits, and software code copyright enforcement." },
    { title: "Regulatory Compliance & Risk", desc: "Advising on FTC regulations, SEC disclosure reports, anti-trust compliance audits, and multi-jurisdictional risk profiles." },
    { title: "Executive Compensation & Labor", desc: "Drafting employment agreements, stock options plans, non-compete covenants, and severance structures." }
  ];

  const educationTimeline = [
    { degree: "Juris Doctor (J.D.), Magna Cum Laude", institution: "Harvard Law School", period: "2013 - 2016" },
    { degree: "Master of Laws (LL.M.) in Corporate Law", institution: "London School of Economics", period: "2012 - 2013" },
    { degree: "B.A. in Political Science, Phi Beta Kappa", institution: "Yale University", period: "2008 - 2012" }
  ];

  const legalPublications = [
    { title: "Navigating AI Governance & Intellectual Property Safe Harbors", journal: "Stanford Tech Law Review", year: "2025" },
    { title: "The Evolution of De Facto Merger Doctrines in Tech Sector Acquisitions", journal: "Harvard Business Law Review", year: "2024" }
  ];

  const calculateRetainer = () => {
    let hourlyRate = 450;
    if (caseType === 'litigation') hourlyRate = 600;
    if (caseType === 'ip') hourlyRate = 500;
    const hours = parseInt(hourEstimate || '0');
    return hourlyRate * hours;
  };

  return (
    <div style={{ background: '#0A0A0A', color: '#F9FAFB', minHeight: '100vh', fontFamily: "'Cinzel', Georgia, serif" }}>
      
      {/* 1. LEGAL HERO */}
      <section style={{ padding: '8rem 0 5rem', borderBottom: '1px solid #2A2A2A', background: 'linear-gradient(to bottom, #111111 0%, #0A0A0A 100%)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <div style={{ color: '#D4AF37', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', fontFamily: 'sans-serif', marginBottom: '0.5rem' }}>
                ✦ Counsel & Representation ✦
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#F9FAFB', lineHeight: 1.15 }}>
                {data.name}
              </h1>
              <p style={{ fontFamily: 'sans-serif', color: '#D4AF37', fontSize: '1.2rem', margin: '0.5rem 0' }}>
                {data.title}
              </p>
              <p style={{ fontFamily: 'sans-serif', color: '#D1D5DB', fontSize: '0.9rem', lineHeight: '1.75', marginBottom: '2.5rem' }}>
                {data.bio}
              </p>
            </AnimatedDiv>

            <AnimatedDiv variant={fadeUp}>
              <div style={{ display: 'flex', gap: '1rem', fontFamily: 'sans-serif', flexWrap: 'wrap' }}>
                <a href="#practices" className="btn-primary" style={{ background: '#D4AF37', color: '#0A0A0A', border: 'none', fontWeight: 700, padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
                  Practice Areas
                </a>
                <a href="#cases" className="btn-outline" style={{ borderColor: '#D4AF37', color: '#D4AF37', padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
                  Case Highlights
                </a>
              </div>
            </AnimatedDiv>
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" animate="visible" style={{
            background: '#111111',
            border: '1px solid #2A2A2A',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(212,175,55,0.05)'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#D4AF37', borderBottom: '1px solid #2A2A2A', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
              Authority Metrics
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', fontFamily: 'sans-serif' }}>
              {data.stats ? data.stats.map((stat, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#F9FAFB' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>{stat.label}</div>
                </div>
              )) : (
                <>
                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#F9FAFB' }}>250+</div>
                    <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>M&A Deals Advised</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#F9FAFB' }}>98.2%</div>
                    <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>Compliance Close Rate</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE STATEMENT */}
      <SectionWrapper className="section" style={{ background: '#0D0D0D', borderBottom: '1px solid #1E1E1E' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#D4AF37', marginBottom: '1.5rem' }}>Advocacy & Legal Philosophy</h2>
            <p style={{ fontFamily: 'sans-serif', color: '#D1D5DB', fontSize: '1rem', lineHeight: '1.8' }}>
              We deliver rigorous corporate representation and IP protection with maximum discretion. Our practice centers on proactive mitigation of transactional disputes and providing clear, actionable regulatory advisory guidelines.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. PRACTICE AREAS */}
      <SectionWrapper className="section" id="practices" style={{ background: '#111111', borderBottom: '1px solid #2A2A2A' }}>
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#D4AF37' }}>Core Practice Areas</h2>
          </AnimatedDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', fontFamily: 'sans-serif' }}>
            {practiceAreas.map((prac, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                <FiShield size={24} color="#D4AF37" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.5rem' }}>{prac.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#9CA3AF', lineHeight: 1.6, flex: 1 }}>{prac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. FEE ESTIMATOR & RETAINER CALCULATOR */}
      <SectionWrapper className="section" style={{ background: '#0A0A0A', borderBottom: '1px solid #1A1A1A' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#D4AF37', marginBottom: '1.5rem', textAlign: 'center' }}>Retainer Fee Assessor</h2>
          <div style={{ background: '#111111', border: '1px solid #2A2A2A', borderRadius: '0.5rem', padding: '2rem', fontFamily: 'sans-serif' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 700, marginBottom: '0.5rem' }}>MATTER TYPE</label>
              <select
                value={caseType}
                onChange={(e) => setCaseType(e.target.value)}
                style={{ width: '100%', padding: '0.625rem', background: '#1A1A1A', border: '1px solid #2A2A2A', color: 'white', outline: 'none' }}
              >
                <option value="corporate">Standard Corporate Advisory ($450/hr)</option>
                <option value="ip">IP Filing & Trademark Counsel ($500/hr)</option>
                <option value="litigation">Trial Litigation & M&A Representation ($600/hr)</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 700, marginBottom: '0.5rem' }}>PROJECTED SERVICE HOURS</label>
              <input
                type="number"
                min="5"
                max="100"
                value={hourEstimate}
                onChange={(e) => setHourEstimate(e.target.value)}
                style={{ width: '100%', padding: '0.625rem', background: '#1A1A1A', border: '1px solid #2A2A2A', color: 'white', outline: 'none' }}
              />
            </div>

            <div style={{ borderTop: '1px dashed #2A2A2A', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 700 }}>RETAINER ESTIMATE:</span>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#D4AF37' }}>${calculateRetainer().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. CASE LEDGER HIGHLIGHTS */}
      <SectionWrapper className="section" id="cases" style={{ background: '#111111', borderBottom: '1px solid #2A2A2A' }}>
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#D4AF37' }}>Litigation Highlights</h2>
          </AnimatedDiv>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'sans-serif' }}>
            {[
              { title: "Acquisition of TechCorp Inc by GlobalFlow Group", role: "Lead M&A Counsel", value: "$45,000,000", result: "Successfully Closed" },
              { title: "Patent Defense Case - DataOptima vs SoftSystems", role: "Lead IP Counsel", value: "$12,000,000", result: "Settled Favorably" },
              { title: "SEC Regulatory Disclosure Settlement - Apex Holdings", role: "Special Regulatory Counsel", value: "Dismissed with prejudice", result: "Complete Defense Verdict" }
            ].map((c, idx) => (
              <div key={idx} style={{ background: '#1A1A1A', border: '1px solid #2A2A2A', padding: '1.5rem', borderRadius: '0.5rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F9FAFB', margin: '0 0 0.25rem' }}>{c.title}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}>{c.role}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#D4AF37' }}>{c.value}</div>
                  <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{c.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. EDUCATION & PEDIGREE */}
      <SectionWrapper className="section" style={{ background: '#0D0D0D', borderBottom: '1px solid #2A2A2A' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#D4AF37', marginBottom: '2.5rem' }}>Academic Pedigree</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontFamily: 'sans-serif' }}>
            {educationTimeline.map((item, idx) => (
              <div key={idx} style={{ padding: '1.25rem', background: '#111111', border: '1px solid #2A2A2A', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ fontWeight: 700, color: '#F9FAFB', fontSize: '1rem' }}>{item.degree}</h4>
                  <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>{item.institution}</div>
                </div>
                <span style={{ fontSize: '0.85rem', color: '#D4AF37', fontWeight: 700 }}>{item.period}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. LEGAL PUBLICATIONS */}
      <SectionWrapper className="section" style={{ background: '#111111', borderBottom: '1px solid #2A2A2A' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#D4AF37', marginBottom: '2rem' }}>Publications & Scholarly Postings</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', fontFamily: 'sans-serif' }}>
            {legalPublications.map((pub, idx) => (
              <div key={idx} style={{ borderLeft: '3px solid #D4AF37', padding: '1.25rem', background: '#1A1A1A', borderRadius: '0 0.5rem 0.5rem 0' }}>
                <FiBook color="#D4AF37" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '0.5rem' }}>{pub.title}</h4>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{pub.journal} • {pub.year}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 8. BAR ADMISSIONS & LICENSES */}
      <SectionWrapper className="section" style={{ background: '#0D0D0D', borderBottom: '1px solid #2A2A2A' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#D4AF37', marginBottom: '2rem' }}>Bar Admissions & Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', fontFamily: 'sans-serif' }}>
            {[
              { name: "State Bar of California", body: "Active Member in Good Standing", year: "2016" },
              { name: "U.S. District Court, Northern District of CA", body: "Federal Admissions", year: "2017" },
              { name: "State Bar of New York", body: "Admitted to Practice", year: "2018" }
            ].map((admit, idx) => (
              <div key={idx} style={{ background: '#111111', border: '1px solid #2A2A2A', padding: '1.25rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FiAward size={24} color="#D4AF37" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F9FAFB' }}>{admit.name}</div>
                  <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>{admit.body} • {admit.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 9. PRO BONO / COMMUNITY LEADERSHIP */}
      <SectionWrapper className="section" style={{ background: '#111111', borderBottom: '1px solid #2A2A2A' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#D4AF37', marginBottom: '1.5rem' }}>Advisory & Pro Bono Advocacy</h2>
          <div style={{ background: '#1A1A1A', border: '1px solid #2A2A2A', padding: '1.75rem', borderRadius: '0.5rem', fontFamily: 'sans-serif' }}>
            <h4 style={{ fontWeight: 700, color: '#F9FAFB', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Sovereign Micro-Finance Legal Structuring</h4>
            <p style={{ fontSize: '0.85rem', color: '#9CA3AF', lineHeight: '1.7' }}>
              Volunteered 120+ hours advising local community micro-lenders on regulatory tax loopholes and drafting unified borrower templates, protecting over 4,000 small local business owners from predatory financing terms.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 10. LEGAL JOURNAL / BLOG */}
      <SectionWrapper className="section" style={{ background: '#0D0D0D', borderBottom: '1px solid #2A2A2A' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#D4AF37', marginBottom: '2rem' }}>Corporate Law Insights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', fontFamily: 'sans-serif' }}>
            {[
              { title: "FTC Non-Compete Bans: Compliance Checklists for Multi-Nationals", date: "May 2026", length: "8 min read" },
              { title: "Standard Representations & Warranties in Venture Capital Audits", date: "March 2026", length: "12 min read" }
            ].map((insight, idx) => (
              <div key={idx} style={{ background: '#111111', border: '1px solid #2A2A2A', padding: '1.5rem', borderRadius: '0.5rem' }}>
                <FiFileText size={20} color="#D4AF37" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#F9FAFB', marginBottom: '0.5rem' }}>{insight.title}</h4>
                <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>{insight.date} • {insight.length}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 11. EXPERIENCE TIMELINE */}
      {data.experience && (
        <SectionWrapper className="section" style={{ background: '#111111', borderBottom: '1px solid #2A2A2A' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#D4AF37', marginBottom: '2.5rem' }}>Professional Experience Matrix</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'sans-serif' }}>
              {data.experience.map((item, idx) => (
                <div key={idx} style={{ padding: '1.5rem', border: '1px solid #2A2A2A', borderRadius: '0.5rem', background: '#1A1A1A' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700, color: '#F9FAFB' }}>{item.role}</span>
                    <span style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 700 }}>{item.period}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}><strong>{item.company}</strong> — {item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 12. CLIENT REVIEWS */}
      <SectionWrapper className="section" style={{ background: '#0D0D0D', borderBottom: '1px solid #2A2A2A' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#D4AF37', marginBottom: '2rem' }}>Corporate References</h2>
          <div style={{ padding: '1.5rem', background: '#111111', border: '1px solid #2A2A2A', borderRadius: '0.5rem', fontFamily: 'sans-serif' }}>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#D1D5DB', lineHeight: '1.6' }}>
              "Rigorous, precise, and completely trustworthy. Their advice was instrumental during our Series B capitalization and regulatory clearances."
            </p>
            <div style={{ marginTop: '1rem', fontWeight: 700, color: '#D4AF37', fontSize: '0.8rem' }}>
              — CFO, QuantumFlow Systems Inc
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 13. FAQ */}
      <SectionWrapper className="section" style={{ background: '#111111', borderBottom: '1px solid #2A2A2A' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#D4AF37', marginBottom: '2rem', textAlign: 'center' }}>Advisory FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'sans-serif' }}>
            {[
              { q: "How are consultation fees structured?", a: "Initial consultations are billed at flat rates. Long-term corporate advisory matters are handled via structured quarterly retainers or standard hourly rate contracts." },
              { q: "How do you handle conflict of interest screenings?", a: "Before executing any retainer, our operations team performs a comprehensive database conflict sweep across all active and historical client entities." }
            ].map((faq, idx) => (
              <div key={idx} style={{ background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '0.5rem' }}>
                <button onClick={() => toggleFaq(idx)} style={{ width: '100%', background: 'none', border: 'none', padding: '1rem 1.25rem', textAlign: 'left', color: '#F9FAFB', fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', fontFamily: 'inherit' }}>
                  <span>{faq.q}</span>
                  <span>{activeFaq === idx ? '[-]' : '[+]'}</span>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ padding: '0 1.25rem 1.25rem', color: '#9CA3AF', fontSize: '0.8rem', lineHeight: '1.6' }}>
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 14. RETAIN COUNSEL INTAKE FORM */}
      <SectionWrapper className="section" id="contact" style={{ background: '#0D0D0D' }}>
        <div className="container" style={{ maxWidth: '600px', fontFamily: 'sans-serif' }}>
          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#D4AF37', fontFamily: "'Cinzel', serif" }}>Retain Counsel</h2>
            <p style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>Initialize formal intake verification.</p>
          </AnimatedDiv>

          <div style={{ background: '#111111', border: '1px solid #2A2A2A', borderRadius: '0.5rem', padding: '2rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h4 style={{ color: '#D4AF37', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>✔ Intake Registered</h4>
                <p style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>Our operations team will contact you to perform standard conflict clearance.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.25rem', color: '#D4AF37' }}>Corporate Entity / Full Name</label>
                  <input required type="text" placeholder="Acme Corporation Ltd" style={{ width: '100%', padding: '0.625rem', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '0.25rem', color: 'white', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.25rem', color: '#D4AF37' }}>Contact Email Address</label>
                  <input required type="email" placeholder="legal@acme.com" style={{ width: '100%', padding: '0.625rem', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '0.25rem', color: 'white', outline: 'none' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ background: '#D4AF37', border: 'none', color: '#0A0A0A', padding: '0.75rem', borderRadius: '0.25rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 700 }}>
                  Initialize Comms <FiArrowRight />
                </button>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* 15. CONFIDENTIALITY DISCLAIMER FOOTNOTE */}
      <footer style={{ background: '#050505', color: '#666666', fontSize: '0.7rem', padding: '2rem 0', borderTop: '1px solid #1A1A1A', fontFamily: 'sans-serif' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '1.5' }}>
          <FiLock style={{ marginBottom: '0.5rem' }} />
          <div>
            ATTORNEY-CLIENT PRIVILEGE NOTICE: The content on this portfolio website is for informational purposes only and does not constitute formal legal counsel. Transmission of details via forms does not establish an attorney-client relationship.
          </div>
        </div>
      </footer>
      
      <style>{`
        @media (max-width: 768px) {
          .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
