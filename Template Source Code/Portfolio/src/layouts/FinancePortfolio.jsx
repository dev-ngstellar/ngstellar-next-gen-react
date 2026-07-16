import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrendingUp, FiTrendingDown, FiShield, FiFileText, FiAward, FiBook, FiBriefcase, FiDollarSign, FiClock, FiActivity, FiArrowRight, FiSend, FiHelpCircle } from 'react-icons/fi';
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants';
import SectionWrapper, { AnimatedDiv } from '../components/common/SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';

export default function FinancePortfolio() {
  const { selectedProfession: profession, activeProfileData: data } = usePortfolio();
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [compoundInputs, setCompoundInputs] = useState({ principal: '10000', rate: '8', years: '10' });
  const [interestResult, setInterestResult] = useState(null);

  if (!profession || !data) return null;

  const toggleFaq = (idx) => setActiveFaq(activeFaq === idx ? null : idx);

  const services = [
    { title: "Tax Optimization Strategies", desc: "Developing compliant onshore/offshore tax holdings, corporate restructure schemes, and custom estate setups." },
    { title: "Portfolio Asset Management", desc: "Formulating modern portfolio theory allocation strategies, risk-adjusted returns modeling, and diversification grids." },
    { title: "M&A Due Diligence Auditing", desc: "Detailed balance sheet audits, transaction risk reporting, and capital structure valuation models." },
    { title: "Corporate Treasury Services", desc: "Optimizing short-term liquid asset yields, cash flow buffering schemas, and commercial paper placements." }
  ];

  const educationList = [
    { degree: "Chartered Financial Analyst (CFA) Charterholder", institution: "CFA Institute", period: "2020" },
    { degree: "MBA in Finance & Quantitative Methods", institution: "The Wharton School", period: "2016 - 2018" },
    { degree: "B.S. in Economics & Actuarial Science", institution: "NYU Stern School of Business", period: "2012 - 2016" }
  ];

  const publications = [
    { title: "Yield Curve Inversions and Hedging Strategies in Tech Equity Markets", journal: "Journal of Financial Strategy", year: "2025" },
    { title: "Managing Short-Term Liquidity Ratios in Non-Profit Balance Sheets", journal: "Asset Allocation Quarterly", year: "2024" }
  ];

  const calculateCompoundInterest = (e) => {
    e.preventDefault();
    const p = parseFloat(compoundInputs.principal || '0');
    const r = parseFloat(compoundInputs.rate || '0') / 100;
    const t = parseFloat(compoundInputs.years || '0');
    const total = p * Math.pow(1 + r, t);
    setInterestResult(Math.round(total));
  };

  return (
    <div style={{ background: '#ECFDF5', color: '#064E3B', minHeight: '100vh', fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* 1. FINANCE HERO */}
      <section style={{ padding: '8rem 0 4rem', background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)', borderBottom: '1px solid #A7F3D0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <span style={{ fontSize: '0.75rem', background: '#D1FAE5', color: '#059669', padding: '0.35rem 0.75rem', borderRadius: '4px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-block', marginBottom: '1rem' }}>
                Corporate Advisory & Wealth
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: '#064E3B', margin: '0.5rem 0', lineHeight: 1.1 }}>
                {data.name}
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#059669', fontWeight: 700, margin: '0.5rem 0' }}>
                {data.title}
              </p>
              <p style={{ color: '#0F766E', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                {data.bio}
              </p>
            </AnimatedDiv>

            <AnimatedDiv variant={fadeUp}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#audit" className="btn-primary" style={{ background: '#059669', color: '#FFF', border: 'none', borderRadius: '4px', fontWeight: 600, padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
                  Audit History
                </a>
                <a href="#advisory" className="btn-secondary" style={{ background: 'transparent', border: '1px solid #059669', color: '#059669', borderRadius: '4px', padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
                  Risk Advisory
                </a>
              </div>
            </AnimatedDiv>
          </motion.div>

          {/* Metric Dashboard */}
          <motion.div variants={scaleIn} initial="hidden" animate="visible" style={{
            background: '#FFFFFF',
            border: '1px solid #A7F3D0',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(5,150,105,0.05)'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#064E3B', borderBottom: '1px solid #D1FAE5', paddingBottom: '0.5rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FiTrendingUp color="#059669" /> Advisory Ledger
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {data.stats ? data.stats.map((stat, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#064E3B' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#0F766E' }}>{stat.label}</div>
                </div>
              )) : (
                <>
                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#064E3B' }}>$15M+</div>
                    <div style={{ fontSize: '0.75rem', color: '#0F766E' }}>Tax Restructured</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#064E3B' }}>480+</div>
                    <div style={{ fontSize: '0.75rem', color: '#0F766E' }}>Audits Logged</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INVESTMENT PHILOSOPHY */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D1FAE5' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#064E3B', marginBottom: '1.5rem' }}>Wealth Preservation Philosophy</h2>
            <p style={{ color: '#0F766E', fontSize: '1rem', lineHeight: '1.8' }}>
              Minimizing systemic risk while maximizing compounding efficiency. We combine macroeconomic cycle mapping with micro-level balance sheet optimization to construct institutional-grade equity and debt portfolios.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. FINANCE ADVISORY SERVICES */}
      <SectionWrapper className="section" id="advisory" style={{ background: '#FFFFFF', borderBottom: '1px solid #D1FAE5' }}>
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#064E3B' }}>Corporate Finance Services</h2>
          </AnimatedDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {services.map((srv, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '6px', display: 'flex', flexDirection: 'column' }}>
                <FiShield size={24} color="#059669" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#064E3B', marginBottom: '0.5rem' }}>{srv.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#0F766E', lineHeight: 1.6, flex: 1 }}>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. COMPOUND INTEREST WIDGET */}
      <SectionWrapper className="section" style={{ background: '#ECFDF5', borderBottom: '1px solid #A7F3D0' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#064E3B', marginBottom: '1.5rem', textAlign: 'center' }}>Portfolio Compound Growth Estimator</h2>
          <div style={{ background: '#FFFFFF', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '2rem' }}>
            <form onSubmit={calculateCompoundInterest} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#064E3B', marginBottom: '0.5rem' }}>INITIAL CAPITAL ($)</label>
                <input
                  type="number"
                  value={compoundInputs.principal}
                  onChange={(e) => setCompoundInputs({ ...compoundInputs, principal: e.target.value })}
                  style={{ width: '100%', padding: '0.625rem', border: '1px solid #A7F3D0', borderRadius: '4px', outline: 'none' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#064E3B', marginBottom: '0.5rem' }}>ANNUAL YIELD (%)</label>
                  <input
                    type="number"
                    value={compoundInputs.rate}
                    onChange={(e) => setCompoundInputs({ ...compoundInputs, rate: e.target.value })}
                    style={{ width: '100%', padding: '0.625rem', border: '1px solid #A7F3D0', borderRadius: '4px', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#064E3B', marginBottom: '0.5rem' }}>DURATION (YEARS)</label>
                  <input
                    type="number"
                    value={compoundInputs.years}
                    onChange={(e) => setCompoundInputs({ ...compoundInputs, years: e.target.value })}
                    style={{ width: '100%', padding: '0.625rem', border: '1px solid #A7F3D0', borderRadius: '4px', outline: 'none' }}
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ background: '#059669', border: 'none', color: '#FFF', padding: '0.75rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 700 }}>
                Project Growth Rate
              </button>
            </form>
            {interestResult !== null && (
              <div style={{ marginTop: '1.5rem', borderTop: '1px dashed #A7F3D0', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#064E3B' }}>ESTIMATED FUTURE VALUE:</span>
                <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#059669' }}>${interestResult.toLocaleString()}</span>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. AUDIT CASE LEDGERS */}
      <SectionWrapper className="section" id="audit" style={{ background: '#FFFFFF', borderBottom: '1px solid #D1FAE5' }}>
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#064E3B' }}>Case Audit Archives</h2>
          </AnimatedDiv>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { title: "Risk Compliance Review - FinGlobal SA", dept: "Corporate Audit Division", value: "+18% Compliance Score", type: "Full Asset Review" },
              { title: "Offshore Holding Restructure - BioPharma Labs", dept: "International Tax Division", value: "$1.2M Saved Annually", type: "Tax Restructuring" },
              { title: "Series C Treasury Asset Allocation - QuantGroup LLC", dept: "Advisory Services", value: "8.4% Yield Target Secured", type: "Portfolio Placement" }
            ].map((item, idx) => (
              <div key={idx} style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '1.5rem', borderRadius: '6px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#064E3B', margin: '0 0 0.25rem' }}>{item.title}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 600 }}>{item.dept}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#059669' }}>{item.value}</div>
                  <span style={{ fontSize: '0.75rem', color: '#0F766E' }}>{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. EDUCATION & CFA PEDIGREE */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D1FAE5' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#064E3B', marginBottom: '2.5rem' }}>Academic Credentials</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {educationList.map((item, idx) => (
              <div key={idx} style={{ padding: '1.25rem', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ fontWeight: 800, color: '#064E3B', fontSize: '1rem' }}>{item.degree}</h4>
                  <div style={{ fontSize: '0.85rem', color: '#0F766E' }}>{item.institution}</div>
                </div>
                <span style={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700 }}>{item.period}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. FINANCIAL PUBLICATIONS */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D1FAE5' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#064E3B', marginBottom: '2rem' }}>Publications & Treasury Alerts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {publications.map((pub, idx) => (
              <div key={idx} style={{ borderLeft: '3px solid #059669', padding: '1.25rem', background: '#ECFDF5', borderRadius: '0 6px 6px 0' }}>
                <FiBook color="#059669" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#064E3B', marginBottom: '0.5rem' }}>{pub.title}</h4>
                <div style={{ fontSize: '0.75rem', color: '#0F766E' }}>{pub.journal} • {pub.year}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 8. LICENSURE & FINRA ACCREDITATIONS */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D1FAE5' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#064E3B', marginBottom: '2rem' }}>Professional Licenses & Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { name: "CPA License - State Board of Accountancy", body: "Active Registry", year: "2017" },
              { name: "FINRA Series 7 - General Securities Representative", body: "Financial Regulatory Authority", year: "2018" },
              { name: "FINRA Series 63 - Uniform Agent State Law", body: "Financial Regulatory Authority", year: "2018" }
            ].map((license, idx) => (
              <div key={idx} style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '1.25rem', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FiAward size={24} color="#059669" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#064E3B' }}>{license.name}</div>
                  <div style={{ fontSize: '0.7rem', color: '#0F766E' }}>{license.body} • Issued {license.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 9. PORTFOLIO AND PROJECTS */}
      {data.projects && (
        <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D1FAE5' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#064E3B', marginBottom: '2rem' }}>Featured Asset Portfolios</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {data.projects.map((project, idx) => (
                <div key={idx} style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '1.5rem', borderRadius: '6px' }}>
                  <FiDollarSign color="#059669" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#064E3B', margin: '0 0 0.5rem' }}>{project.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#0F766E', lineHeight: '1.6' }}>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 10. ADVISORY HISTORY / TIMELINE */}
      {data.experience && (
        <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D1FAE5' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#064E3B', marginBottom: '2.5rem' }}>Professional History</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {data.experience.map((item, idx) => (
                <div key={idx} style={{ padding: '1.25rem', border: '1px solid #A7F3D0', borderRadius: '6px', background: '#ECFDF5' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 800, color: '#064E3B' }}>{item.role}</span>
                    <span style={{ color: '#059669', fontSize: '0.8rem', fontWeight: 700 }}>{item.period}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#0F766E' }}><strong>{item.company}</strong> — {item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 11. PARTNERS & REVIEWS */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D1FAE5' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#064E3B', marginBottom: '2rem' }}>Corporate References</h2>
          <div style={{ padding: '1.5rem', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '6px' }}>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#064E3B', lineHeight: '1.6' }}>
              "An exceptional asset advisor. Rebuilt our short-term cash deployment strategy and safely generated an additional 3.2% yield without increasing volatility."
            </p>
            <div style={{ marginTop: '1rem', fontWeight: 800, color: '#059669', fontSize: '0.8rem' }}>
              — CFO, Zenith Capital Corp
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 12. FAQ */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D1FAE5' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#064E3B', marginBottom: '2rem', textAlign: 'center' }}>Advisory FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { q: "What is your investment minimum?", a: "We primarily work with corporate treasury holdings exceeding $2,500,000 or high-net-worth individual portfolios exceeding $1,000,000." },
              { q: "How are advisory fee structures aligned?", a: "Our corporate services operate under asset-under-advisory (AUA) percentage models or fixed quarterly audit retainers." }
            ].map((faq, idx) => (
              <div key={idx} style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '6px' }}>
                <button onClick={() => toggleFaq(idx)} style={{ width: '100%', background: 'none', border: 'none', padding: '1rem 1.25rem', textAlign: 'left', color: '#064E3B', fontWeight: 800, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', fontFamily: 'inherit' }}>
                  <span>{faq.q}</span>
                  <span>{activeFaq === idx ? '[-]' : '[+]'}</span>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ padding: '0 1.25rem 1.25rem', color: '#0F766E', fontSize: '0.8rem', lineHeight: '1.6' }}>
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 13. ADVISORY INTAKE FORM */}
      <SectionWrapper className="section" id="contact" style={{ background: '#FFFFFF', borderBottom: '1px solid #D1FAE5' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#064E3B' }}>Request Consultation</h2>
            <p style={{ color: '#0F766E', fontSize: '0.9rem' }}>Initiate due diligence and financial review options.</p>
          </AnimatedDiv>

          <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '2rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h4 style={{ color: '#059669', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>✔ Request Logged</h4>
                <p style={{ color: '#0F766E', fontSize: '0.85rem' }}>Our operations manager will contact you within 24 business hours to arrange intake audits.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, marginBottom: '0.25rem', color: '#064E3B' }}>Corporate Entity Name</label>
                  <input required type="text" placeholder="Acme Treasury Ltd" style={{ width: '100%', padding: '0.625rem', border: '1px solid #A7F3D0', borderRadius: '4px', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, marginBottom: '0.25rem', color: '#064E3B' }}>Treasury Email</label>
                  <input required type="email" placeholder="cfo@acme.com" style={{ width: '100%', padding: '0.625rem', border: '1px solid #A7F3D0', borderRadius: '4px', outline: 'none' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ background: '#059669', border: 'none', color: '#FFF', padding: '0.75rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 700 }}>
                  Initiate Engagement <FiArrowRight />
                </button>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* 14. REGULATORY SEC DISCLAIMER */}
      <footer style={{ background: '#D1FAE5', color: '#064E3B', fontSize: '0.7rem', padding: '2rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '1.5' }}>
          <div>
            SEC REGULATORY DISCLAIMER: Past performance is not indicative of future returns. The financial tools and metrics displayed on this template are for illustrative purposes and do not represent formal investment advisor certification or guarantees.
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
