import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlusSquare, FiUser, FiActivity, FiCalendar, FiClock, FiAward, FiBook, FiHeart, FiFileText, FiMapPin, FiTrendingUp, FiSend, FiArrowRight, FiCheckCircle, FiHelpCircle } from 'react-icons/fi';
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants';
import SectionWrapper, { AnimatedDiv } from '../components/common/SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';

export default function HealthcarePortfolio() {
  const { selectedProfession: profession, activeProfileData: data } = usePortfolio();
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [symptomScore, setSymptomScore] = useState(null);
  const [intakeSymptom, setIntakeSymptom] = useState('');

  if (!profession || !data) return null;

  const specialties = [
    { title: "Clinical Assessment", desc: "Detailed biological scans, full metabolic panel diagnostic breakdowns, and personalized treatment pathways." },
    { title: "Preventive Care", desc: "Immunological strategy, cardiovascular risk screens, nutritional optimization, and lifestyle redesign." },
    { title: "Telehealth Diagnostics", desc: "Virtual primary care access utilizing high-definition video diagnostics and integrated home monitoring." },
    { title: "Post-Acute Rehabilitation", desc: "Neuromuscular coordination, post-op physical rehabilitation, and muscle memory recovery plans." }
  ];

  const educationTimeline = [
    { degree: "Fellowship in Integrative Health", institution: "Stanford Medical Center", period: "2021 - 2023" },
    { degree: "Residency in Internal Medicine", institution: "Johns Hopkins Hospital", period: "2018 - 2021" },
    { degree: "Doctor of Medicine (M.D.)", institution: "Harvard Medical School", period: "2014 - 2018" }
  ];

  const researchPapers = [
    { title: "Optimizing Cardiovascular Biomarkers in Non-Pharmacological Interventions", journal: "Journal of Clinical Cardiology", year: "2025" },
    { title: "Telemedicine and Patient Outcomes in Rural Primary Care Facilities", journal: "Global Health Review", year: "2024" }
  ];

  const handleSymptomCheck = (e) => {
    e.preventDefault();
    if (!intakeSymptom) return;
    const lower = intakeSymptom.toLowerCase();
    if (lower.includes('chest') || lower.includes('breathing') || lower.includes('severe')) {
      setSymptomScore({ level: 'Critical/Urgent', advice: 'Please dial 911 or visit the nearest Emergency Room immediately.' });
    } else if (lower.includes('fever') || lower.includes('cough') || lower.includes('pain')) {
      setSymptomScore({ level: 'Standard Consult', advice: 'Recommended to book a clinic consultation within the next 48 hours.' });
    } else {
      setSymptomScore({ level: 'Routine Wellness', advice: 'Suitable for a routine monthly health review or telehealth check.' });
    }
  };

  return (
    <div style={{ background: '#F0FDFA', color: '#0F172A', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* 1. HEALTHCARE HERO */}
      <section style={{ padding: '8rem 0 4rem', background: 'radial-gradient(circle at top right, rgba(20,184,166,0.12), transparent)', borderBottom: '1px solid #CCFBF1' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <span style={{ fontSize: '0.8rem', background: '#CCFBF1', color: '#0F766E', padding: '0.35rem 0.75rem', borderRadius: '100px', fontWeight: 700, textTransform: 'uppercase', display: 'inline-block', marginBottom: '1rem' }}>
                Licensed Care & Medicine
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#0F766E', margin: '0.5rem 0', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                {data.name}
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#14B8A6', fontWeight: 600 }}>
                {data.title}
              </p>
              <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                {data.bio}
              </p>
            </AnimatedDiv>

            <AnimatedDiv variant={fadeUp}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#services" className="btn-primary" style={{ background: '#0D9488', color: '#FFF', border: 'none', borderRadius: '0.5rem', padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
                  Medical Services
                </a>
                <a href="#appointment" className="btn-secondary" style={{ background: 'transparent', border: '1px solid #0D9488', color: '#0D9488', borderRadius: '0.5rem', padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
                  Book Appointment
                </a>
              </div>
            </AnimatedDiv>
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" animate="visible" style={{
            background: '#FFFFFF',
            border: '1px solid #CCFBF1',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 10px 25px rgba(20,184,166,0.05)'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F766E', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FiActivity color="#14B8A6" /> Clinical Statistics
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {data.stats ? data.stats.map((stat, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F766E' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{stat.label}</div>
                </div>
              )) : (
                <>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F766E' }}>850+</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Active Patients</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F766E' }}>12+ Yrs</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Practice Residency</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CARE PHILOSOPHY */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E', marginBottom: '1rem' }}>Patient-Centered Care Philosophy</h2>
            <p style={{ color: '#334155', fontSize: '1rem', lineHeight: 1.8 }}>
              Integrating cutting-edge evidence-based clinical diagnostics with a holistic patient outlook. We prioritize addressing root causes over symptom management, empowering patients to make informed recovery decisions.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. PRACTICE SPECIALIZATIONS */}
      <SectionWrapper className="section" id="services" style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E' }}>Practice Specialties & Treatments</h2>
          </AnimatedDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {specialties.map((srv, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#F0FDFA', border: '1px solid #CCFBF1', borderRadius: '0.75rem', display: 'flex', flexDirection: 'column' }}>
                <FiPlusSquare size={24} color="#0D9488" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F766E', marginBottom: '0.5rem' }}>{srv.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: 1.6, flex: 1 }}>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. SYMPTOM ASSESSOR WIDGET */}
      <SectionWrapper className="section" style={{ background: '#F0FDFA', borderBottom: '1px solid #CCFBF1' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E', marginBottom: '1rem', textAlign: 'center' }}>Symptom Severity Pre-Assessor</h2>
          <div style={{ background: '#FFFFFF', border: '1px solid #CCFBF1', borderRadius: '1rem', padding: '2rem' }}>
            <form onSubmit={handleSymptomCheck} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0F766E', marginBottom: '0.5rem' }}>DESCRIBE YOUR CURRENT SYMPTOMS</label>
                <input
                  type="text"
                  placeholder="e.g., Mild cough, light fever, or chest tightness"
                  value={intakeSymptom}
                  onChange={(e) => setIntakeSymptom(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #CCFBF1', borderRadius: '0.5rem', outline: 'none' }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ background: '#0D9488', border: 'none', color: '#FFF', padding: '0.75rem', borderRadius: '0.5rem', width: '100%' }}>
                Assess Priority
              </button>
            </form>
            {symptomScore && (
              <div style={{ marginTop: '1.5rem', background: '#F0FDFA', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #14B8A6' }}>
                <div style={{ fontWeight: 700, color: '#0F766E', fontSize: '0.9rem' }}>ASSESSMENT LEVEL: {symptomScore.level}</div>
                <p style={{ fontSize: '0.8rem', color: '#334155', marginTop: '0.25rem', lineHeight: '1.4' }}>{symptomScore.advice}</p>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. CLINIC LOCATIONS */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E', marginBottom: '2rem' }}>Office Locations & Hours</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', border: '1px solid #E2E8F0', borderRadius: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F766E', fontWeight: 700, marginBottom: '0.5rem' }}>
                <FiMapPin /> Metro Health Pavilion
              </div>
              <p style={{ fontSize: '0.85rem', color: '#334155', marginBottom: '0.5rem' }}>Suite 410, Medical Center Blvd, Chicago, IL</p>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Mon - Fri: 8:00 AM - 5:00 PM</div>
            </div>
            <div style={{ padding: '1.5rem', border: '1px solid #E2E8F0', borderRadius: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0F766E', fontWeight: 700, marginBottom: '0.5rem' }}>
                <FiMapPin /> Oakwood Wellness Center
              </div>
              <p style={{ fontSize: '0.85rem', color: '#334155', marginBottom: '0.5rem' }}>820 Maple Ave, Oakwood, IL</p>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Saturdays: 9:00 AM - 1:00 PM (By Appt Only)</div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. EDUCATION & TRAININGS */}
      <SectionWrapper className="section" style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E', marginBottom: '2.5rem' }}>Medical Education & Residency</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {educationTimeline.map((item, idx) => (
              <div key={idx} style={{ padding: '1.25rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h4 style={{ fontWeight: 700, color: '#0F766E', fontSize: '1rem' }}>{item.degree}</h4>
                  <div style={{ fontSize: '0.85rem', color: '#64748B' }}>{item.institution}</div>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#14B8A6', fontWeight: 700 }}>{item.period}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. MEDICAL PUBLICATIONS */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E', marginBottom: '2rem' }}>Clinical Research & Publications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {researchPapers.map((paper, idx) => (
              <div key={idx} style={{ borderLeft: '4px solid #14B8A6', padding: '1.25rem', background: '#F8FAFC', borderRadius: '0 0.5rem 0.5rem 0' }}>
                <FiBook color="#0F766E" style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>{paper.title}</h4>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{paper.journal} • {paper.year}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 8. CERTIFICATIONS & BOARD STATUS */}
      <SectionWrapper className="section" style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E', marginBottom: '2rem' }}>Licensure & Board Certifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { name: "Board Certified in Family Medicine", body: "American Board of Family Medicine", year: "2019" },
              { name: "State Medical License (Full & Active)", body: "State Medical Board of Illinois", year: "2018" },
              { name: "DEA Controlled Substance Registration", body: "U.S. Drug Enforcement Administration", year: "2018" }
            ].map((license, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '1rem 1.25rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FiAward size={24} color="#0D9488" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>{license.name}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748B' }}>{license.body} • Issued {license.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 9. MEDICAL PROJECTS & HEALTH CAMPAIGNS */}
      {data.projects && (
        <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E', marginBottom: '2rem' }}>Public Health Campaigns & Programs</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {data.projects.map((project, idx) => (
                <div key={idx} style={{ background: '#F0FDFA', border: '1px solid #CCFBF1', padding: '1.5rem', borderRadius: '0.75rem' }}>
                  <FiHeart color="#0D9488" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F766E', margin: '0 0 0.5rem' }}>{project.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.6' }}>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 10. CLINICAL CASE REPORTS */}
      <SectionWrapper className="section" style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E', marginBottom: '1.5rem' }}>Anonymized Case Report Summaries</h2>
          <div style={{ background: '#FFFFFF', padding: '1.75rem', border: '1px solid #E2E8F0', borderRadius: '0.5rem' }}>
            <h4 style={{ fontWeight: 700, color: '#0F766E', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Diagnosis & Recovery Plan for Chronic Migraine & Metabolic Syndrome</h4>
            <p style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.7' }}>
              A 45-year-old patient presented with daily chronic migraines and high glucose resistance. Established a personalized, multi-stage metabolic shift protocol including carbohydrate restriction, targeted supplementation, and sleep hygiene mapping. Observed an 80% reduction in headache frequency within 90 days, with complete metabolic stabilization.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 11. CLINICAL EXPERIENCE TIMELINE */}
      {data.experience && (
        <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E', marginBottom: '2.5rem' }}>Clinical Practice History</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {data.experience.map((item, idx) => (
                <div key={idx} style={{ padding: '1.25rem', border: '1px solid #E2E8F0', borderRadius: '0.5rem', background: '#F8FAFC' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700, color: '#0F766E' }}>{item.role}</span>
                    <span style={{ color: '#14B8A6', fontSize: '0.8rem', fontWeight: 700 }}>{item.period}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#334155' }}><strong>{item.company}</strong> — {item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 12. PATIENT TESTIMONIALS */}
      <SectionWrapper className="section" style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E', marginBottom: '2rem' }}>Patient Testimonials</h2>
          <div style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '0.5rem' }}>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#334155', lineHeight: '1.6' }}>
              "The telemedicine calls are highly professional and detailed. I never felt rushed, and the metabolic recovery plan completely resolved my fatigue."
            </p>
            <div style={{ marginTop: '1rem', fontWeight: 700, color: '#0F766E', fontSize: '0.8rem' }}>
              — Patient Review, March 2026
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 13. HEALTH DISCOVERIES BLOG */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E', marginBottom: '2rem' }}>Health & Wellness Insight Articles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: "Understanding Blood Glucose Dynamics & Morning Energy Levels", date: "May 2026", length: "5 min read" },
              { title: "The Neuromuscular Benefits of Daily Low-Impact Flexibility Routines", date: "April 2026", length: "7 min read" }
            ].map((article, idx) => (
              <div key={idx} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '1.5rem', borderRadius: '0.5rem' }}>
                <FiFileText size={20} color="#0D9488" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0F172A', marginBottom: '0.5rem' }}>{article.title}</h4>
                <div style={{ fontSize: '0.7rem', color: '#64748B' }}>{article.date} • {article.length}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 14. NEW PATIENT FAQ ACCORDION */}
      <SectionWrapper className="section" style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F766E', marginBottom: '2rem', textAlign: 'center' }}>Patient FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { q: "Do you accept commercial insurance plans?", a: "Yes, we accept major commercial insurance providers, including Blue Cross Blue Shield, Aetna, and Cigna. Please contact our front office to confirm specific co-pays." },
              { q: "How do I request medical records transfer?", a: "You can download our HIPAA-compliant records release form and email the filled copy to our intake coordinator." }
            ].map((faq, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '0.5rem' }}>
                <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} style={{ width: '100%', background: 'none', border: 'none', padding: '1rem 1.25rem', textAlign: 'left', color: '#0F766E', fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', fontFamily: 'inherit' }}>
                  <span>{faq.q}</span>
                  <span>{activeFaq === idx ? '[-]' : '[+]'}</span>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ padding: '0 1.25rem 1.25rem', color: '#334155', fontSize: '0.8rem', lineHeight: '1.6' }}>
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 15. APPOINTMENT REQUEST FORM */}
      <SectionWrapper className="section" id="appointment" style={{ background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F766E' }}>Schedule Appointment</h2>
            <p style={{ color: '#334155', fontSize: '0.9rem' }}>Initiate patient contact and book clinical slots.</p>
          </AnimatedDiv>

          <div style={{ background: '#FFFFFF', border: '1px solid #CCFBF1', borderRadius: '1rem', padding: '2rem', boxShadow: '0 10px 25px rgba(20,184,166,0.05)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h4 style={{ color: '#0D9488', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>✔ Request Submitted</h4>
                <p style={{ color: '#64748B', fontSize: '0.85rem' }}>We will contact you shortly to confirm your booking.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.25rem', color: '#0F766E' }}>Full Name</label>
                  <input required type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.625rem', border: '1px solid #CCFBF1', borderRadius: '0.375rem', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.25rem', color: '#0F766E' }}>Email Address</label>
                  <input required type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.625rem', border: '1px solid #CCFBF1', borderRadius: '0.375rem', outline: 'none' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ background: '#0D9488', border: 'none', color: '#FFF', padding: '0.75rem', borderRadius: '0.375rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 700 }}>
                  Submit Request <FiArrowRight />
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
