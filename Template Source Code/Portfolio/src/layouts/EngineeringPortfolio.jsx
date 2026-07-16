import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSliders, FiCheckSquare, FiMap, FiAward, FiCpu, FiSettings, FiLayers, FiTool, FiCheckCircle, FiBookOpen, FiTrendingUp, FiSend, FiArrowRight, FiCompass, FiHelpCircle, FiInfo } from 'react-icons/fi';
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants';
import SectionWrapper, { AnimatedDiv } from '../components/common/SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';

export default function EngineeringPortfolio() {
  const { selectedProfession: profession, activeProfileData: data } = usePortfolio();
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [calcInputs, setCalcInputs] = useState({ complexity: 'medium', duration: '3' });

  if (!profession || !data) return null;

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const designProcess = [
    { title: "Requirements & Feasibility", desc: "Define technical boundaries, structural constraints, and safety margins." },
    { title: "CAD Schematic & Modeling", desc: "Build exact SolidWorks/AutoCAD 3D geometries and physical tolerances." },
    { title: "Finite Element Analysis (FEA)", desc: "Simulate structural stress, thermal dissipation, and fluid dynamics." },
    { title: "Rapid Prototyping", desc: "3D printing, CNC milling, and physical model assembly." },
    { title: "Sensor & System Validation", desc: "Stress-testing under load and thermal cycles to calibrate data." }
  ];

  const equipmentList = [
    { name: "SolidWorks Simulation Premium", desc: "High-end FEA and CFD solver license." },
    { name: "3-Axis CNC Machining Center", desc: "High-precision structural prototyping tool." },
    { name: "Tektronix MSO Series Oscilloscope", desc: "4-channel analog/digital sensor analysis." },
    { name: "Markforged Onyx 3D Printer", desc: "Continuous carbon fiber composite prototyping." }
  ];

  const calculateEstimate = () => {
    let base = 2500;
    if (calcInputs.complexity === 'high') base = 6000;
    if (calcInputs.complexity === 'custom') base = 12000;
    const hours = parseInt(calcInputs.duration || '0') * 40;
    return base + hours * 85;
  };

  return (
    <div style={{
      background: '#F4F7F6',
      color: '#1C1C1C',
      minHeight: '100vh',
      fontFamily: "'Space Mono', monospace",
      backgroundImage: 'radial-gradient(#0B5394 0.5px, transparent 0.5px)',
      backgroundSize: '24px 24px'
    }}>
      {/* 1. BLUEPRINT HERO */}
      <section style={{ padding: '8rem 0 4rem', borderBottom: '2px dashed #0B5394', background: 'rgba(255,255,255,0.92)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <div style={{ color: '#0B5394', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                // SCHEMATIC & BUILD PROFILE
              </div>
              <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', fontWeight: 800, color: '#073763', margin: '0.75rem 0' }}>
                {data.name}
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#E69138', fontWeight: 600 }}>
                &gt; {data.title}
              </p>
              <p style={{ color: '#595959', fontSize: '0.85rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                {data.bio}
              </p>
            </AnimatedDiv>

            <AnimatedDiv variant={fadeUp}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn-primary" style={{ background: '#0B5394', color: '#FFF', border: 'none', borderRadius: 0, padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
                  Build Portfolio
                </a>
                <a href="#specs" className="btn-secondary" style={{ background: 'transparent', border: '1px solid #0B5394', color: '#0B5394', borderRadius: 0, padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
                  Specs
                </a>
              </div>
            </AnimatedDiv>
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" animate="visible" style={{
            background: '#FFFFFF',
            border: '2px solid #0B5394',
            padding: '2rem',
            position: 'relative'
          }}>
            <div style={{ position: 'absolute', top: '-1px', left: '1rem', background: '#0B5394', color: 'white', padding: '0.15rem 0.75rem', fontSize: '0.7rem' }}>
              CALIBRATION
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '0.5rem' }}>
              {data.stats ? data.stats.map((stat, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#7F7F7F' }}>{stat.label}</div>
                </div>
              )) : (
                <>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763' }}>45+</div>
                    <div style={{ fontSize: '0.7rem', color: '#7F7F7F' }}>Hardware Designs</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763' }}>25%</div>
                    <div style={{ fontSize: '0.7rem', color: '#7F7F7F' }}>Power Saved</div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. OVERVIEW SPECIFICATION */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D9D9D9' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763', marginBottom: '1.5rem' }}>[01] Professional Statement</h2>
          <p style={{ fontSize: '0.95rem', color: '#444444', lineHeight: '1.8', maxWidth: '800px' }}>
            Designing mission-critical mechanical, aerospace, and electromechanical systems. Applying rigorous thermodynamic analysis, Finite Element Analysis (FEA), and hardware prototyping standards to maximize efficiency and system lifetime.
          </p>
        </div>
      </SectionWrapper>

      {/* 3. TECHNICAL SPECIFICATIONS */}
      <SectionWrapper className="section" id="specs" style={{ background: '#FFFFFF', borderBottom: '1px solid #D9D9D9' }}>
        <div className="container">
          <AnimatedDiv variant={fadeUp} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763' }}>[02] Technical Core Competencies</h2>
          </AnimatedDiv>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {data.skills && data.skills.map((skill, idx) => (
              <div key={idx} style={{ border: '1px solid #D9D9D9', padding: '1.25rem', background: '#F4F7F6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 700 }}>{skill.name}</span>
                  <span style={{ color: '#0B5394' }}>{skill.level}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: '#D9D9D9' }}>
                  <div style={{ width: `${skill.level}%`, height: '100%', background: '#0B5394' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. DISCIPLINE DEEP DIVE */}
      <SectionWrapper className="section" style={{ background: '#E8ECEF', borderBottom: '1px solid #D9D9D9' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763', marginBottom: '2rem' }}>[03] Areas of Concentration</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <FiCpu />, title: "Electromechanical Design", desc: "Integrating actuators, precision controllers, and telemetry sensors." },
              { icon: <FiLayers />, title: "Thermodynamics & Heat Sinks", desc: "Designing convection cooling systems for extreme operational stresses." },
              { icon: <FiCompass />, title: "Fluid Dynamics Simulation", desc: "CFD analysis to minimize drag coefficients and lift vortex generation." }
            ].map((disc, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '1.5rem', borderLeft: '4px solid #E69138', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '1.5rem', color: '#0B5394', marginBottom: '0.75rem' }}>{disc.icon}</div>
                <h4 style={{ fontWeight: 700, color: '#073763', marginBottom: '0.5rem' }}>{disc.title}</h4>
                <p style={{ fontSize: '0.8rem', color: '#595959', lineHeight: '1.6' }}>{disc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 5. LAB EQUIPMENT CONFIG */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D9D9D9' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763', marginBottom: '2rem' }}>[04] Laboratory & Diagnostic Equipment</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {equipmentList.map((item, idx) => (
              <div key={idx} style={{ padding: '1.5rem', border: '1px dashed #0B5394', background: '#F9FAFA' }}>
                <FiTool color="#0B5394" size={20} style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontWeight: 700, fontSize: '0.9rem', color: '#073763', margin: '0 0 0.5rem' }}>{item.name}</h4>
                <p style={{ fontSize: '0.75rem', color: '#666666', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. ENGINEERING METHODOLOGY */}
      <SectionWrapper className="section" style={{ background: '#E8ECEF', borderBottom: '1px solid #D9D9D9' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763', marginBottom: '2rem' }}>[05] System Design Methodology</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {designProcess.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    background: activeStep === idx ? '#0B5394' : '#FFFFFF',
                    color: activeStep === idx ? '#FFFFFF' : '#1C1C1C',
                    border: '1px solid #0B5394',
                    padding: '0.75rem 1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}
                >
                  STEP 0{idx + 1}: {step.title.split(' ')[0]}
                </button>
              ))}
            </div>
            <div style={{ background: '#FFFFFF', border: '1px solid #0B5394', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ color: '#E69138', fontWeight: 700, fontSize: '0.7rem', marginBottom: '0.5rem' }}>
                ACTIVE PROTOCOL // PHASE 0{activeStep + 1}
              </div>
              <h4 style={{ fontWeight: 700, color: '#073763', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                {designProcess[activeStep].title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#595959', lineHeight: '1.7' }}>
                {designProcess[activeStep].desc}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 7. MAJOR BUILD LOGS */}
      {data.projects && (
        <SectionWrapper className="section" id="projects" style={{ background: '#FFFFFF', borderBottom: '1px solid #D9D9D9' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763', marginBottom: '2rem' }}>[06] Structural Schematics & CAD Logs</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {data.projects.map((project, idx) => (
                <div key={idx} style={{ background: '#FFFFFF', border: '2px solid #0B5394', padding: '1.5rem' }}>
                  <div style={{ color: '#E69138', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>// SPEC_BUILD_{idx + 1}</div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#073763', margin: '0 0 0.5rem' }}>{project.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#595959', lineHeight: '1.6', marginBottom: '1rem' }}>{project.description}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.technologies?.map((tech, i) => (
                      <span key={i} style={{ fontSize: '0.65rem', background: '#F4F7F6', border: '1px solid #D9D9D9', padding: '0.15rem 0.5rem' }}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 8. LICENSURE & CERTIFICATIONS */}
      <SectionWrapper className="section" style={{ background: '#E8ECEF', borderBottom: '1px solid #D9D9D9' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763', marginBottom: '2rem' }}>[07] Licensures & Accreditations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              { name: "Professional Engineer (PE) License", authority: "State Board of Engineers", id: "PE-884321" },
              { name: "Certified SolidWorks Professional (CSWP)", authority: "Dassault Systèmes", id: "C-SW-99824" }
            ].map((cert, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #D9D9D9', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FiAward size={24} color="#0B5394" />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#073763' }}>{cert.name}</div>
                  <div style={{ fontSize: '0.7rem', color: '#7F7F7F' }}>{cert.authority} • {cert.id}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 9. ROOT CAUSE CASE STUDY */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D9D9D9' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763', marginBottom: '2rem' }}>[08] Root Cause & Simulation Case Study</h2>
          <div style={{ background: '#F4F7F6', borderLeft: '4px solid #0B5394', padding: '2rem' }}>
            <h4 style={{ fontWeight: 700, color: '#073763', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Turbine Blade Structural Integrity Optimization
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#595959', lineHeight: '1.7' }}>
              Identified a vibration stress anomaly in a 1.2MW steam turbine exhaust block. Initiated detailed FEA vibration spectrum analyses, shifting the first modal natural frequency by 18% to avert resonant micro-cracking risk and extend the component lifespan by an estimated 10 years.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 10. TECHNICAL BLOG / LOGS */}
      <SectionWrapper className="section" style={{ background: '#E8ECEF', borderBottom: '1px solid #D9D9D9' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763', marginBottom: '2rem' }}>[09] Engineering Journal Entries</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: "Mitigating Thermal Expansion Fatigue in Titanium Assemblies", date: "April 2026", duration: "10 min read" },
              { title: "Standard Tolerances: DIN ISO 2768 Calibration Walkthrough", date: "March 2026", duration: "15 min read" }
            ].map((entry, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #D9D9D9', padding: '1.5rem' }}>
                <FiBookOpen size={20} color="#0B5394" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#073763', marginBottom: '0.5rem' }}>{entry.title}</h4>
                <div style={{ fontSize: '0.7rem', color: '#888' }}>{entry.date} • {entry.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 11. EXPERIENCE TIMELINE */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D9D9D9' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763', marginBottom: '2.5rem' }}>[10] Professional History Matrix</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.experience && data.experience.map((item, idx) => (
              <div key={idx} style={{ border: '1px solid #D9D9D9', padding: '1.5rem', background: '#F9FAFA' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 700, color: '#073763' }}>{item.role}</span>
                  <span style={{ color: '#0B5394', fontSize: '0.8rem' }}>{item.period}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#595959' }}><strong>{item.company}</strong> — {item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 12. CLIENT REVIEWS */}
      <SectionWrapper className="section" style={{ background: '#E8ECEF', borderBottom: '1px solid #D9D9D9' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763', marginBottom: '2rem' }}>[11] Peer & Stakeholder Feedback</h2>
          <div style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #D9D9D9' }}>
            <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#444444', lineHeight: '1.6' }}>
              "Exceptional rigor. The prototype phase was delivered ahead of schedule with zero compliance non-conformances in structural testing."
            </p>
            <div style={{ marginTop: '1rem', fontWeight: 700, color: '#0B5394', fontSize: '0.8rem' }}>
              — Lead Systems Architect, AeroDyn Global
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 13. FAQ ACCORDION */}
      <SectionWrapper className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid #D9D9D9' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763', marginBottom: '2rem', textAlign: 'center' }}>[12] FAQ Specs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { q: "What modeling suites do you support?", a: "My primary toolset includes SolidWorks Simulation Premium, Autodesk Inventor, and ANSYS Workbench." },
              { q: "Do you sign standard NDA agreements for proprietary schematics?", a: "Yes, standard industrial NDAs can be executed prior to sharing any CAD files or design parameters." }
            ].map((faq, idx) => (
              <div key={idx} style={{ background: '#F4F7F6', border: '1px solid #D9D9D9' }}>
                <button onClick={() => toggleFaq(idx)} style={{ width: '100%', background: 'none', border: 'none', padding: '1rem 1.25rem', textAlign: 'left', color: '#073763', fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', fontFamily: 'inherit' }}>
                  <span>{faq.q}</span>
                  <span>{openFaq === idx ? '[-]' : '[+]'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ padding: '0 1.25rem 1.25rem', color: '#595959', fontSize: '0.8rem', lineHeight: '1.6' }}>
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 14. INTERACTIVE PROJECT ESTIMATION WIDGET */}
      <SectionWrapper className="section" style={{ background: '#E8ECEF', borderBottom: '1px solid #D9D9D9' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#073763', marginBottom: '1.5rem', textAlign: 'center' }}>[13] Budget & Scope Calculator</h2>
          <div style={{ background: '#FFFFFF', padding: '2rem', border: '1px solid #D9D9D9' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>SYSTEM COMPLEXITY</label>
              <select
                value={calcInputs.complexity}
                onChange={(e) => setCalcInputs({ ...calcInputs, complexity: e.target.value })}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #D9D9D9', fontFamily: 'inherit' }}
              >
                <option value="medium">Standard CAD Modeling & Audit</option>
                <option value="high">Advanced FEA Simulation & Redesign</option>
                <option value="custom">Full System Prototyping & Stamp</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>PROJECTED TIME (WEEKS)</label>
              <input
                type="number"
                min="1"
                max="12"
                value={calcInputs.duration}
                onChange={(e) => setCalcInputs({ ...calcInputs, duration: e.target.value })}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #D9D9D9', fontFamily: 'inherit' }}
              />
            </div>

            <div style={{ borderTop: '1px dashed #0B5394', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, fontSize: '0.8rem' }}>ESTIMATED COST:</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B5394' }}>${calculateEstimate().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 15. CONTACT & COMM HANDSHAKE */}
      <section className="section" style={{ background: '#FFFFFF', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#073763' }}>[14] Project Intake Handshake</h2>
          <p style={{ color: '#595959', fontSize: '0.8rem', margin: '0.5rem 0 2rem' }}>Available for technical audits, hardware layout design, and CAD drafting consultation.</p>
          <a href={`mailto:${data.email}`} className="btn-primary" style={{ background: '#0B5394', color: '#FFF', border: 'none', borderRadius: 0, padding: '0.875rem 2rem', textDecoration: 'none', display: 'inline-block' }}>
            Initialize Comms
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
