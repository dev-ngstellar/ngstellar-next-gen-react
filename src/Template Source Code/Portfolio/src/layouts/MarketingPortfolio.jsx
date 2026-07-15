import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrendingUp, FiTarget, FiLayers, FiUsers, FiAward, FiBook, FiBriefcase, FiCpu, FiClock, FiActivity, FiArrowRight, FiSend, FiHelpCircle, FiFileText } from 'react-icons/fi';
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants';
import SectionWrapper, { AnimatedDiv } from '../components/common/SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';

export default function MarketingPortfolio() {
  const { selectedProfession: profession, activeProfileData: data } = usePortfolio();
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [roasInputs, setRoasInputs] = useState({ spend: '5000', cpc: '1.5', conv: '3' });
  const [roasResult, setRoasResult] = useState(null);

  if (!profession || !data) return null;

  const toggleFaq = (idx) => setActiveFaq(activeFaq === idx ? null : idx);

  const services = [
    { title: "SEO Strategy & Search Engines", desc: "Technical site architecture audits, rank tracking systems, long-term backlink plans, and index coverage tuning." },
    { title: "Conversion Optimization (CRO)", desc: "Heatmap analytics routing, A/B copy tests, registration flow friction reduction, and cohort analysis metrics." },
    { title: "Paid Acquisition (PPC/Paid Social)", desc: "Deploying high-intent search ads, retargeting funnels, creative asset iteration, and custom attribution models." },
    { title: "Brand Narrative & Content Strategy", desc: "High-quality industry whitepapers, viral loops, PR campaigns, and organic community growth engines." }
  ];

  const educationList = [
    { degree: "HubSpot Inbound Marketing Master Certification", institution: "HubSpot Academy", period: "2021" },
    { degree: "Google Analytics Individual Qualification (GA4)", institution: "Google", period: "2020" },
    { degree: "B.S. in Marketing & Digital Communications", institution: "University of Southern California", period: "2014 - 2018" }
  ];

  const marketingInsights = [
    { title: "How We Scaled SaaS Organic Signups by 240% Without Ad Spend", journal: "GrowthHacker Journal", year: "2025" },
    { title: "The Death of Third-Party Cookies: Re-architecting Retargeting Funnels", journal: "Marketing Tech Insider", year: "2024" }
  ];

  const calculateRoas = (e) => {
    e.preventDefault();
    const spend = parseFloat(roasInputs.spend || '0');
    const cpc = parseFloat(roasInputs.cpc || '0');
    const conv = parseFloat(roasInputs.conv || '0') / 100;

    const clicks = spend / cpc;
    const leads = clicks * conv;
    const estimatedValue = leads * 150; // Assume $150 average contract/lead value
    const roas = estimatedValue / spend;

    setRoasResult({
      leads: Math.round(leads),
      revenue: Math.round(estimatedValue),
      roas: roas.toFixed(1)
    });
  };

  return (
    <div style={{ background: '#FFF8F6', color: '#0F172A', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* 1. MARKETING HERO */}
      <section style={{ padding: '8rem 0 4rem', background: 'radial-gradient(circle at top right, rgba(234,88,12,0.12), transparent)', borderBottom: '1px solid #FED7AA' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <span style={{ fontSize: '0.8rem', background: '#FFEDD5', color: '#C2410C', padding: '0.35rem 0.75rem', borderRadius: '100px', fontWeight: 700, textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
                Growth Marketing Portfolio
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', margin: '0.5rem 0', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                {data.name}
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#EA580C', fontWeight: 700, margin: '0.5rem 0' }}>
                {data.title}
              </p>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                {data.bio}
              </p>
            </AnimatedDiv>

            <AnimatedDiv variant={fadeUp}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#campaigns" className="btn-primary" style={{ background: '#EA580C', color: '#FFF', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
                  Active Campaigns
                </a>
                <a href="#results" className="btn-secondary" style={{ background: 'transparent', border: '1px solid #EA580C', color: '#EA580C', borderRadius: '0.5rem', padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
                  Growth Metrics
                </a>
              </div>
            </AnimatedDiv>
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" animate="visible" style={{
            background: '#FFFFFF',
            border: '1px solid #FED7AA',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 10px 25px rgba(234,88,12,0.05)'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#C2410C', borderBottom: '1px solid #FFEDD5', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FiActivity color="#EA580C" /> Conversion Ledger
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {data.stats ? data.stats.map((stat, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{stat.label}</div>
                </div>
              )) : (
                <>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>+480%</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Organic Traffic Growth</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>$18M+</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Attributed Revenue</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW STATEMENT */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #FFEDD5' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#C2410C', marginBottom: '1rem' }}>Data-Driven Growth Engine</h2>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8 }}>
              We design and execute multi-channel growth sprints that lower customer acquisition costs (CAC) and compound organic traffic. By matching content strategy with rigorous technical funnel audits, we create predictable pipelines for modern brands.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. MARKETING STRATEGIES */}
      <SectionWrapper className="section" id="campaigns" style={{ background: '#FFFFFF', borderBottom: '1px solid #FFEDD5' }}>
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#C2410C' }}>Core Marketing Services</h2>
          </AnimatedDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {services.map((srv, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#FFF8F6', border: '1px solid #FED7AA', borderRadius: '0.75rem', display: 'flex', flexDirection: 'column' }}>
                <FiTarget size={24} color="#EA580C" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#C2410C', marginBottom: '0.5rem' }}>{srv.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6, flex: 1 }}>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. ROAS SIMULATOR */}
      <SectionWrapper className="section" style={{ background: '#FFF8F6', borderBottom: '1px solid #FED7AA' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#C2410C', marginBottom: '1.5rem', textAlign: 'center' }}>ROAS & Funnel Simulator</h2>
          <div style={{ background: '#FFFFFF', border: '1px solid #FED7AA', borderRadius: '1rem', padding: '2rem' }}>
            <form onSubmit={calculateRoas} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#C2410C', marginBottom: '0.5rem' }}>AD SPEND BUDGET ($)</label>
                <input
                  type="number"
                  value={roasInputs.spend}
                  onChange={(e) => setRoasInputs({ ...roasInputs, spend: e.target.value })}
                  style={{ width: '100%', padding: '0.625rem', border: '1px solid #FED7AA', borderRadius: '0.5rem', outline: 'none' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#C2410C', marginBottom: '0.5rem' }}>COST PER CLICK ($)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={roasInputs.cpc}
                    onChange={(e) => setRoasInputs({ ...roasInputs, cpc: e.target.value })}
                    style={{ width: '100%', padding: '0.625rem', border: '1px solid #FED7AA', borderRadius: '0.5rem', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#C2410C', marginBottom: '0.5rem' }}>CONVERSION RATE (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={roasInputs.conv}
                    onChange={(e) => setRoasInputs({ ...roasInputs, conv: e.target.value })}
                    style={{ width: '100%', padding: '0.625rem', border: '1px solid #FED7AA', borderRadius: '0.5rem', outline: 'none' }}
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ background: '#EA580C', border: 'none', color: '#FFF', padding: '0.75rem', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 700 }}>
                Calculate Return Metrics
              </button>
            </form>
            {roasResult && (
              <div style={{ marginTop: '1.5rem', borderTop: '1px dashed #FED7AA', paddingTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>ESTIMATED LEADS:</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#EA580C' }}>{roasResult.leads}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>ROAS SCORE:</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#EA580C' }}>{roasResult.roas}x</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. RESULTS DISPLAY */}
      {data.projects && (
        <SectionWrapper className="section" id="results" style={{ background: '#FFEDD5', borderBottom: '1px solid #FED7AA' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#C2410C', marginBottom: '2rem' }}>Campaign Performance Ledgers</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {data.projects.map((project, idx) => (
                <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #FED7AA', padding: '1.5rem', borderRadius: '0.75rem' }}>
                  <FiTrendingUp size={24} color="#EA580C" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', margin: '0 0 0.5rem' }}>{project.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: '1.6' }}>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 6. EDUCATION & CERTIFICATIONS */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #FFEDD5' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#C2410C', marginBottom: '2.5rem' }}>Marketing Pedigree</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {educationList.map((item, idx) => (
              <div key={idx} style={{ padding: '1.25rem', background: '#FFF8F6', border: '1px solid #FED7AA', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ fontWeight: 700, color: '#C2410C', fontSize: '1rem' }}>{item.degree}</h4>
                  <div style={{ fontSize: '0.85rem', color: '#64748B' }}>{item.institution}</div>
                </div>
                <span style={{ fontSize: '0.85rem', color: '#EA580C', fontWeight: 700 }}>{item.period}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. SCHOLARLY / GUEST POSTS */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #FFEDD5' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#C2410C', marginBottom: '2rem' }}>Publications & Growth Articles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {marketingInsights.map((paper, idx) => (
              <div key={idx} style={{ borderLeft: '3px solid #EA580C', padding: '1.25rem', background: '#FFF8F6', borderRadius: '0 0.5rem 0.5rem 0' }}>
                <FiBook color="#EA580C" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>{paper.title}</h4>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{paper.journal} • {paper.year}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 8. MARKETING TOOLS TECH STACK */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #FFEDD5' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#C2410C', marginBottom: '2rem' }}>Core Analytics & Marketing Tech Stack</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { name: "Google Analytics 4 & BigQuery", tag: "Analytics" },
              { name: "SEMrush & Ahrefs Enterprise", tag: "SEO Search" },
              { name: "Mixpanel & Amplitude Cohorts", tag: "CRO Analytics" },
              { name: "Meta Pixel & Custom API", tag: "Attribution" }
            ].map((tool, idx) => (
              <div key={idx} style={{ background: '#FFF8F6', border: '1px solid #FED7AA', padding: '1rem 1.25rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FiAward size={24} color="#EA580C" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>{tool.name}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748B' }}>{tool.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 9. VIRAL CASE ANALYSIS */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #FFEDD5' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#C2410C', marginBottom: '1.5rem' }}>Viral Loop & Referral Funnel Case Study</h2>
          <div style={{ background: '#FFEDD5', padding: '1.75rem', border: '1px solid #FED7AA', borderRadius: '0.5rem' }}>
            <h4 style={{ fontWeight: 700, color: '#C2410C', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Scaling FlowSaaS Referral Pipeline</h4>
            <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: '1.7' }}>
              Designed a dual-sided incentive loop offering API credits to both referrer and referee. Scaled the organic activation coefficient from 0.12 to 1.48 within six weeks. Attributed to generating 50,000 net-new users with a zero-dollar customer acquisition cost (CAC).
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 10. EXPERIENCE HISTORY TIMELINE */}
      {data.experience && (
        <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #FFEDD5' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#C2410C', marginBottom: '2.5rem' }}>Growth Career History</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {data.experience.map((item, idx) => (
                <div key={idx} style={{ padding: '1.25rem', border: '1px solid #FED7AA', borderRadius: '0.5rem', background: '#FFF8F6' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700, color: '#0F172A' }}>{item.role}</span>
                    <span style={{ color: '#EA580C', fontSize: '0.8rem', fontWeight: 700 }}>{item.period}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#475569' }}><strong>{item.company}</strong> — {item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 11. PARTNERS & REVIEWS */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #FFEDD5' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#C2410C', marginBottom: '2rem' }}>Brand & Founder Testimonials</h2>
          <div style={{ padding: '1.5rem', background: '#FFF8F6', border: '1px solid #FED7AA', borderRadius: '0.5rem' }}>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#0F172A', lineHeight: '1.6' }}>
              "An absolute growth engine. They completely restructured our Google Search campaign bids, driving lead conversions up by 85% while cutting costs by 30%."
            </p>
            <div style={{ marginTop: '1rem', fontWeight: 700, color: '#C2410C', fontSize: '0.8rem' }}>
              — CMO, DataPulse Corp
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 12. FAQ */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #FFEDD5' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#C2410C', marginBottom: '2rem', textAlign: 'center' }}>Growth FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { q: "What is your typical audit turnaround?", a: "Standard website technical audits and initial funnels reviews are delivered within 10 to 14 business days." },
              { q: "Do you offer fractional CMO engagements?", a: "Yes, I offer structured weekly fractional CMO consulting packages for seed and Series A startups." }
            ].map((faq, idx) => (
              <div key={idx} style={{ background: '#FFF8F6', border: '1px solid #FED7AA', borderRadius: '0.5rem' }}>
                <button onClick={() => toggleFaq(idx)} style={{ width: '100%', background: 'none', border: 'none', padding: '1rem 1.25rem', textAlign: 'left', color: '#0F172A', fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', fontFamily: 'inherit' }}>
                  <span>{faq.q}</span>
                  <span>{activeFaq === idx ? '[-]' : '[+]'}</span>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ padding: '0 1.25rem 1.25rem', color: '#475569', fontSize: '0.8rem', lineHeight: '1.6' }}>
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 13. AUDIT BOOKING INTENT */}
      <SectionWrapper className="section" id="contact" style={{ background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#C2410C' }}>Start A Growth Sprint</h2>
            <p style={{ color: '#475569', fontSize: '0.9rem' }}>Book your technical marketing review slots today.</p>
          </AnimatedDiv>

          <div style={{ background: '#FFF8F6', border: '1px solid #FED7AA', borderRadius: '1rem', padding: '2rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h4 style={{ color: '#EA580C', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>✔ Audit Slot Requested</h4>
                <p style={{ color: '#64748B', fontSize: '0.85rem' }}>We will contact you shortly to perform initial traffic screening.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.25rem', color: '#C2410C' }}>Corporate Site URL</label>
                  <input required type="text" placeholder="https://acme.com" style={{ width: '100%', padding: '0.625rem', border: '1px solid #FED7AA', borderRadius: '0.375rem', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.25rem', color: '#C2410C' }}>Corporate Email</label>
                  <input required type="email" placeholder="growth@acme.com" style={{ width: '100%', padding: '0.625rem', border: '1px solid #FED7AA', borderRadius: '0.375rem', outline: 'none' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ background: '#EA580C', border: 'none', color: '#FFF', padding: '0.75rem', borderRadius: '0.375rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 700 }}>
                  Initialize Review <FiArrowRight />
                </button>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>
      
      <style>{`
        @media (max-width: 768px) {
          .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
