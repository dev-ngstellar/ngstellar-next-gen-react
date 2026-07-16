import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiActivity, FiAward, FiStar, FiCalendar, FiBook, FiBriefcase, FiZap, FiTarget, FiTrendingUp, FiArrowRight, FiSend, FiHelpCircle, FiFileText } from 'react-icons/fi';
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants';
import SectionWrapper, { AnimatedDiv } from '../components/common/SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';

export default function SportsPortfolio() {
  const { selectedProfession: profession, activeProfileData: data } = usePortfolio();
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [paceDistance, setPaceDistance] = useState('100');
  const [paceTarget, setPaceTarget] = useState('10.5');

  if (!profession || !data) return null;

  const toggleFaq = (idx) => setActiveFaq(activeFaq === idx ? null : idx);

  const specialties = [
    { title: "Sprint & Acceleration Mechanics", desc: "Optimizing ground reaction forces, triple extension alignment, and starting block biomechanics." },
    { title: "Strength & Power Conditioning", desc: "Designing Olympic lifting programs, velocity-based training schedules, and plyometric routines." },
    { title: "Sports Nutrition & Hydration", desc: "Formulating metabolic recovery guidelines, electrolyte protocols, and intra-workout supplement stacks." },
    { title: "Injury Prevention & Recovery", desc: "Implementing active myofascial release, cold-exposure protocols, and joint mobility screenings." }
  ];

  const weeklyRoutine = [
    { day: "Monday: Speed Development", focus: "Starting block drills, 30m-60m acceleration strides, low-volume explosive plyometrics." },
    { day: "Wednesday: Strength Capacity", focus: "Heavy back squats, clean pulls, core trunk stability workouts, and active mobility." },
    { day: "Friday: Lactate Tolerance", focus: "Tempo sprints (150m-250m), speed endurance drills, and vascular recovery runs." }
  ];

  const medalLog = [
    { title: "National Track & Field Championships", medal: "Gold Medal (100m)", year: "2025" },
    { title: "Pan-American Games Selection", medal: "Silver Medal (200m)", year: "2024" },
    { title: "State Invitational Sprint Classic", medal: "Gold Medal (100m)", year: "2023" }
  ];

  const calculateSplitTimes = () => {
    const dist = parseFloat(paceDistance || '100');
    const time = parseFloat(paceTarget || '10');
    if (dist === 0) return 0;
    const velocity = dist / time;
    return velocity.toFixed(2);
  };

  return (
    <div style={{ background: '#0F0905', color: '#FFF7ED', minHeight: '100vh', fontFamily: "'Oswald', sans-serif" }}>
      
      {/* 1. SPORTS HERO */}
      <section style={{ padding: '8rem 0 4rem', background: 'linear-gradient(135deg, #2C160B 0%, #0F0905 100%)', borderBottom: '2px solid #47220E' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <span style={{ fontSize: '0.85rem', background: '#EA580C', color: 'white', padding: '0.35rem 0.75rem', borderRadius: '4px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-block', marginBottom: '1rem' }}>
                Athletic Profile & Coaching
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', fontWeight: 900, color: 'white', margin: '0.5rem 0', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                {data.name}
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#FB923C', fontWeight: 600, margin: '0.5rem 0' }}>
                {data.title}
              </p>
              <p style={{ color: '#FFC899', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem', fontFamily: 'sans-serif' }}>
                {data.bio}
              </p>
            </AnimatedDiv>

            <AnimatedDiv variant={fadeUp}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#stats" className="btn-primary" style={{ background: '#EA580C', color: '#FFF', border: 'none', borderRadius: '4px', fontWeight: 700, textTransform: 'uppercase', padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
                  Performance Stats
                </a>
                <a href="#experience" className="btn-secondary" style={{ background: 'transparent', border: '1px solid #EA580C', color: '#EA580C', borderRadius: '4px', padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
                  Career Logs
                </a>
              </div>
            </AnimatedDiv>
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" animate="visible" style={{
            background: '#1A0E07',
            border: '2px solid #47220E',
            padding: '2rem',
            boxShadow: '0 10px 35px rgba(234,88,12,0.08)'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FB923C', borderBottom: '1px solid #47220E', paddingBottom: '0.5rem', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              Conditioning Metrics
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {data.stats ? data.stats.map((stat, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>{stat.value}{stat.suffix}</div>
                  <div style={{ fontSize: '0.75rem', color: '#FFC899' }}>{stat.label}</div>
                </div>
              )) : (
                <>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>12+</div>
                    <div style={{ fontSize: '0.75rem', color: '#FFC899' }}>Medals Logged</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>9.95s</div>
                    <div style={{ fontSize: '0.75rem', color: '#FFC899' }}>100m Personal Best</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW STATEMENT */}
      <SectionWrapper className="section" style={{ background: '#130C08', borderBottom: '1px solid #2C160B' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', textTransform: 'uppercase', marginBottom: '1rem' }}>Athletic Vision & Philosophy</h2>
            <p style={{ color: '#FFC899', fontSize: '1rem', lineHeight: '1.8', fontFamily: 'sans-serif' }}>
              Pushing human velocity limits through strict scientific training methods and structured biomechanical analysis. We focus on explosive power delivery and fast neural recovery paths to maintain long-term competitive excellence.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. ATHLETIC SPECIALTIES */}
      <SectionWrapper className="section" id="stats" style={{ background: '#1A0E07', borderBottom: '1px solid #2C160B' }}>
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'white', textTransform: 'uppercase' }}>Core Competencies</h2>
          </AnimatedDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {specialties.map((srv, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#2C160B', border: '1px solid #47220E', borderRadius: '4px', display: 'flex', flexDirection: 'column' }}>
                <FiZap size={24} color="#EA580C" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{srv.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#FFC899', lineHeight: 1.6, flex: 1, fontFamily: 'sans-serif' }}>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. PERFORMANCE VELOCITY CALCULATOR */}
      <SectionWrapper className="section" style={{ background: '#0F0905', borderBottom: '1px solid #2C160B' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', textAlign: 'center', textTransform: 'uppercase' }}>Velocity & Pace Calculator</h2>
          <div style={{ background: '#1A0E07', border: '2px solid #47220E', borderRadius: '4px', padding: '2rem', fontFamily: 'sans-serif' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#FFC899', fontWeight: 700, marginBottom: '0.5rem' }}>DISTANCE (METERS)</label>
              <select
                value={paceDistance}
                onChange={(e) => setPaceDistance(e.target.value)}
                style={{ width: '100%', padding: '0.625rem', background: '#2C160B', border: '1px solid #47220E', color: 'white', outline: 'none' }}
              >
                <option value="100">100m Dash</option>
                <option value="200">200m Sprint</option>
                <option value="400">400m Run</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#FFC899', fontWeight: 700, marginBottom: '0.5rem' }}>TARGET TIME (SECONDS)</label>
              <input
                type="number"
                step="0.1"
                value={paceTarget}
                onChange={(e) => setPaceTarget(e.target.value)}
                style={{ width: '100%', padding: '0.625rem', background: '#2C160B', border: '1px solid #47220E', color: 'white', outline: 'none' }}
              />
            </div>

            <div style={{ borderTop: '1px dashed #47220E', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#FFC899', fontWeight: 700 }}>PREDICTED VELOCITY:</span>
              <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#EA580C' }}>{calculateSplitTimes()} m/s</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. MEDAL LOG */}
      <SectionWrapper className="section" style={{ background: '#1A0E07', borderBottom: '1px solid #2C160B' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }}>Championship Medals</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {medalLog.map((log, idx) => (
              <div key={idx} style={{ background: '#2C160B', border: '1px solid #47220E', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FiAward size={28} color="#EA580C" />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white' }}>{log.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#FFC899', fontFamily: 'sans-serif' }}>{log.medal} • {log.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. WEEKLY TRAINING SPLIT */}
      <SectionWrapper className="section" style={{ background: '#0D0907', borderBottom: '1px solid #2C160B' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', marginBottom: '2.5rem', textTransform: 'uppercase' }}>Weekly Training Split</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontFamily: 'sans-serif' }}>
            {weeklyRoutine.map((routine, idx) => (
              <div key={idx} style={{ padding: '1.25rem', background: '#1A0E07', border: '1px solid #2C160B', borderRadius: '4px' }}>
                <h4 style={{ fontWeight: 700, color: '#FB923C', fontSize: '1rem', fontFamily: "'Oswald', sans-serif", textTransform: 'uppercase' }}>{routine.day}</h4>
                <p style={{ fontSize: '0.85rem', color: '#FFC899', marginTop: '0.25rem', lineHeight: '1.5' }}>{routine.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. SPONSORSHIPS WALL */}
      <SectionWrapper className="section" style={{ background: '#1A0E07', borderBottom: '1px solid #2C160B' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }}>Brand & Sponsorship Partners</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center', opacity: 0.75 }}>
            {["NIKE RUNNING", "RED BULL ATHLETICS", "GATORADE LABS", "APEX ATHLETIC CORP"].map((brand, i) => (
              <span key={i} style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.15em', color: '#FFC899' }}>{brand}</span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 8. CAREER HISTORY */}
      {data.experience && (
        <SectionWrapper className="section" id="experience" style={{ background: '#0F0905', borderBottom: '1px solid #2C160B' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }}>Career Logs</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.experience.map((item, idx) => (
                <div key={idx} style={{ background: '#1A0E07', border: '1px solid #47220E', padding: '1.5rem', borderRadius: '4px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white', margin: '0 0 0.25rem' }}>{item.role}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#FB923C' }}>{item.company}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.85rem', color: '#FFC899' }}>{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 9. NUTRITION JOURNAL / ARTICLES */}
      <SectionWrapper className="section" style={{ background: '#1A0E07', borderBottom: '1px solid #2C160B' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }}>Training & Recovery Logs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: "Optimizing High-Volume Carbohydrate Stacking for Marathon Sprints", date: "May 2026", duration: "6 min read" },
              { title: "The Physiology of Cold Exposure and Delayed Muscle Fatigue (DOMS)", date: "April 2026", duration: "10 min read" }
            ].map((insight, idx) => (
              <div key={idx} style={{ background: '#2C160B', border: '1px solid #47220E', padding: '1.5rem' }}>
                <FiFileText size={20} color="#EA580C" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'white', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{insight.title}</h4>
                <div style={{ fontSize: '0.75rem', color: '#FFC899', fontFamily: 'sans-serif' }}>{insight.date} • {insight.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 10. SPONSORS REVIEWS / COACH FEEDBACK */}
      <SectionWrapper className="section" style={{ background: '#0D0907', borderBottom: '1px solid #2C160B' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }}>Coaching References</h2>
          <div style={{ padding: '1.5rem', background: '#1A0E07', border: '1px solid #47220E', borderRadius: '4px' }}>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#FFC899', lineHeight: '1.6', fontFamily: 'sans-serif' }}>
              "An extraordinary coach. The bio-mechanics changes suggested completely restructured my starting stride and chopped 0.2s off my personal best 100m sprint."
            </p>
            <div style={{ marginTop: '1rem', fontWeight: 700, color: '#EA580C', fontSize: '0.8rem', textTransform: 'uppercase' }}>
              — Head Coach, WestCoast Sprint Academy
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 11. PROJECTS / CAMPAIGNS */}
      {data.projects && (
        <SectionWrapper className="section" style={{ background: '#1A0E07', borderBottom: '1px solid #2C160B' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', marginBottom: '2rem', textTransform: 'uppercase' }}>Athletic Projects & Camps</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {data.projects.map((project, idx) => (
                <div key={idx} style={{ background: '#2C160B', border: '1px solid #47220E', padding: '1.5rem' }}>
                  <FiTarget color="#EA580C" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', margin: '0 0 0.5rem', textTransform: 'uppercase' }}>{project.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#FFC899', lineHeight: '1.6', fontFamily: 'sans-serif' }}>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 12. FAQ */}
      <SectionWrapper className="section" style={{ background: '#0F0905', borderBottom: '1px solid #2C160B' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'white', marginBottom: '2rem', textAlign: 'center', textTransform: 'uppercase' }}>Sponsorship & Coaching FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'sans-serif' }}>
            {[
              { q: "Are you open to corporate brand sponsorship?", a: "Yes, we review seasonal brand-alignment opportunities. Please contact our representation team using the form below." },
              { q: "What is your private coaching intake format?", a: "We run monthly 1-on-1 sprint clinics requiring a baseline fitness screening and metabolic profiling." }
            ].map((faq, idx) => (
              <div key={idx} style={{ background: '#1A0E07', border: '1px solid #47220E' }}>
                <button onClick={() => toggleFaq(idx)} style={{ width: '100%', background: 'none', border: 'none', padding: '1rem 1.25rem', textAlign: 'left', color: 'white', fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', fontFamily: 'inherit' }}>
                  <span>{faq.q}</span>
                  <span>{activeFaq === idx ? '[-]' : '[+]'}</span>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ padding: '0 1.25rem 1.25rem', color: '#FFC899', fontSize: '0.8rem', lineHeight: '1.6' }}>
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 13. SPONSORSHIP INQUIRY FORM */}
      <SectionWrapper className="section" id="contact" style={{ background: '#1A0E07' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'white', textTransform: 'uppercase' }}>Initiate Sponsorship / Coaching</h2>
            <p style={{ color: '#FFC899', fontSize: '0.9rem', fontFamily: 'sans-serif' }}>Open to brand deals, athletic consultation sessions, and training engagements.</p>
          </AnimatedDiv>

          <div style={{ background: '#2C160B', border: '1px solid #47220E', padding: '2rem', fontFamily: 'sans-serif' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h4 style={{ color: '#EA580C', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', textTransform: 'uppercase', fontFamily: "'Oswald', sans-serif" }}>✔ Inquiry Logged</h4>
                <p style={{ color: '#FFC899', fontSize: '0.85rem' }}>Our team will review your brand assets and follow up shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.25rem', color: '#FB923C' }}>Brand / Contact Name</label>
                  <input required type="text" placeholder="Brand Manager" style={{ width: '100%', padding: '0.625rem', background: '#1A0E07', border: '1px solid #47220E', color: 'white', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.25rem', color: '#FB923C' }}>Inquiry Email</label>
                  <input required type="email" placeholder="manager@brand.com" style={{ width: '100%', padding: '0.625rem', background: '#1A0E07', border: '1px solid #47220E', color: 'white', outline: 'none' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ background: '#EA580C', border: 'none', color: 'white', padding: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 700, textTransform: 'uppercase', fontFamily: "'Oswald', sans-serif" }}>
                  Initialize Comms <FiArrowRight />
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
