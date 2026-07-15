import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiTerminal, FiDatabase, FiCpu, FiExternalLink, FiDownload, FiSend, FiGitPullRequest, FiStar, FiAward, FiBookOpen, FiHelpCircle, FiArrowRight } from 'react-icons/fi';
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants';
import SectionWrapper, { AnimatedDiv } from '../components/common/SectionWrapper';
import { usePortfolio } from '../context/PortfolioContext';

export default function TechnologyPortfolio() {
  const { selectedProfession: profession, activeProfileData: data } = usePortfolio();
  const [terminalLine, setTerminalLine] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  if (!profession || !data) return null;

  const mockGitCommits = Array.from({ length: 52 }, () => Array.from({ length: 7 }, () => Math.floor(Math.random() * 5)));
  
  const terminalCommands = [
    { cmd: "npm run dev", output: "✔ Vite Dev Server started on http://localhost:3000" },
    { cmd: "curl -s https://api.rivera.dev/profile", output: `{\n  "name": "${data.name}",\n  "role": "${data.title}",\n  "status": "Looking for opportunities",\n  "location": "${data.location || 'Remote'}"\n}` }
  ];

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div style={{ background: '#0B1120', color: '#F9FAFB', minHeight: '100vh', fontFamily: "'Fira Code', monospace, Courier", overflow: 'hidden' }}>
      
      {/* 1. TERMINAL HERO */}
      <section style={{ padding: '8rem 0 4rem', background: 'radial-gradient(circle at top right, rgba(37,99,235,0.1), transparent)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                $ cat introduction.md
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1 }}>
                Hi, I'm <span className="gradient-text">{data.name}</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-primary-light)', margin: '0.75rem 0' }}>
                &gt; {data.title}
              </p>
            </AnimatedDiv>
            <AnimatedDiv variant={fadeUp}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <a href="#contact" className="btn-primary" style={{ fontFamily: 'sans-serif' }}>
                  Contact Developer <FiSend style={{ marginLeft: '0.5rem' }} />
                </a>
                <a href="#projects" className="btn-outline" style={{ fontFamily: 'sans-serif' }}>
                  Explore Repos <FiGithub style={{ marginLeft: '0.5rem' }} />
                </a>
              </div>
            </AnimatedDiv>
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" animate="visible" style={{
            background: '#030712', borderRadius: '1rem', border: '1px solid #1F2937', overflow: 'hidden'
          }}>
            <div style={{ background: '#111827', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #1F2937' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
              <span style={{ fontSize: '0.75rem', color: '#6B7280', marginLeft: 'auto' }}>bash - rivera@devbox</span>
            </div>
            <div style={{ padding: '1.5rem', minHeight: '200px', fontSize: '0.85rem', lineHeight: '1.5', color: '#10B981' }}>
              <div>$ {terminalCommands[0].cmd}</div>
              <div style={{ color: '#9CA3AF', marginBottom: '1rem' }}>{terminalCommands[0].output}</div>
              {terminalLine >= 1 ? (
                <>
                  <div>$ {terminalCommands[1].cmd}</div>
                  <pre style={{ color: '#60A5FA', margin: '0.5rem 0 1rem' }}>{terminalCommands[1].output}</pre>
                </>
              ) : (
                <button onClick={() => setTerminalLine(1)} style={{ background: 'rgba(16,185,129,0.1)', border: '1px dashed #10B981', color: '#10B981', padding: '0.25rem 0.75rem', cursor: 'pointer', borderRadius: '4px' }}>
                  Click to fetch JSON Profile API
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT DEVELOPER */}
      <SectionWrapper className="section" style={{ background: '#111827' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderBottom: '2px solid #1F2937', paddingBottom: '0.5rem' }}>
            &gt; whoami --verbose
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '800px' }}>
            {data.bio}
          </p>
        </div>
      </SectionWrapper>

      {/* 3. TECH STACK */}
      <SectionWrapper className="section">
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', borderBottom: '2px solid #1F2937', paddingBottom: '0.5rem' }}>
            &gt; cat tech_stack.json
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {data.techStack?.map((tech) => (
              <span key={tech} style={{ padding: '0.5rem 1rem', background: '#111827', border: '1px solid #1F2937', borderRadius: '0.5rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiCpu color="var(--color-primary)" /> {tech}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 4. CODE METRICS */}
      <section className="container" style={{ padding: '2rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {data.stats?.map((stat, i) => (
            <div key={i} style={{ background: '#111827', border: '1px solid #1F2937', padding: '1.5rem', borderRadius: '0.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--color-primary)' }}>
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '0.5rem', textTransform: 'uppercase' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GITHUB ACTIVITY */}
      <SectionWrapper className="section" style={{ background: '#111827' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', borderBottom: '2px solid #1F2937', paddingBottom: '0.5rem' }}>
            &gt; git log --contributions --year=2026
          </h2>
          <div style={{ background: '#0B1120', border: '1px solid #1F2937', borderRadius: '0.75rem', padding: '1.5rem', overflowX: 'auto' }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {mockGitCommits.slice(0, 40).map((week, wIdx) => (
                <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {week.map((level, dIdx) => {
                    const colors = ['#1F2937', '#0E4429', '#006D32', '#26A641', '#39D353'];
                    return <div key={dIdx} style={{ width: '10px', height: '10px', borderRadius: '2px', background: colors[level] }} />;
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. OPEN SOURCE CONTRIBUTIONS */}
      <SectionWrapper className="section">
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', borderBottom: '2px solid #1F2937', paddingBottom: '0.5rem' }}>
            &gt; gh pr list --state=merged
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { repo: "facebook/react", desc: "Fixed memory leak in useEffect cleanups", pr: "#28442" },
              { repo: "vercel/next.js", desc: "Optimized server rendering hydration routes", pr: "#8831" }
            ].map((contrib, idx) => (
              <div key={idx} style={{ background: '#111827', border: '1px solid #1F2937', padding: '1.25rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FiGitPullRequest size={20} color="#10B981" />
                <div>
                  <div style={{ fontWeight: 700 }}>{contrib.repo} <span style={{ color: '#6B7280' }}>{contrib.pr}</span></div>
                  <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>{contrib.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 7. FEATURED PROJECTS */}
      {data.projects && (
        <SectionWrapper className="section" id="projects" style={{ background: '#111827' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', borderBottom: '2px solid #1F2937', paddingBottom: '0.5rem' }}>
              &gt; gh repo list
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {data.projects.map((project, idx) => (
                <div key={idx} style={{ background: '#0B1120', border: '1px solid #1F2937', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <FiTerminal color="#9CA3AF" />
                    <span style={{ color: '#60A5FA', fontWeight: 700 }}>{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#9CA3AF', lineHeight: '1.5', flex: 1, marginBottom: '1rem' }}>{project.description}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {project.tech?.map(t => (
                      <span key={t} style={{ fontSize: '0.7rem', color: 'var(--color-primary-light)', background: '#111827', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* 8. CERTIFICATIONS */}
      <SectionWrapper className="section">
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', borderBottom: '2px solid #1F2937', paddingBottom: '0.5rem' }}>
            &gt; cat certifications.list
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { name: "AWS Certified Solutions Architect", authority: "Amazon Web Services", date: "2025" },
              { name: "Google Professional Cloud Dev", authority: "Google Cloud", date: "2024" }
            ].map((cert, idx) => (
              <div key={idx} style={{ background: '#111827', border: '1px solid #1F2937', padding: '1.25rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FiAward size={24} color="#F59E0B" />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{cert.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{cert.authority} • {cert.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 9. CASE STUDIES */}
      <SectionWrapper className="section" style={{ background: '#111827' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', borderBottom: '2px solid #1F2937', paddingBottom: '0.5rem' }}>
            &gt; cat case_study_01.log
          </h2>
          <div style={{ background: '#0B1120', border: '1px solid #1F2937', borderRadius: '0.75rem', padding: '2rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#60A5FA', marginBottom: '0.5rem' }}>Scaling CloudSync to 50k Concurrent Users</h4>
            <p style={{ fontSize: '0.9rem', color: '#9CA3AF', lineHeight: 1.7 }}>
              Rebuilt the event synchronization queues from Redis memory stores to Apache Kafka streams, achieving 99.99% database delivery rates and reducing sync latencies from 450ms down to 12ms under load spikes.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 10. DEVELOPER BLOG */}
      <SectionWrapper className="section">
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', borderBottom: '2px solid #1F2937', paddingBottom: '0.5rem' }}>
            &gt; ls blog_posts/
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: "Understanding Event Loops in High-Performance Servers", date: "May 2026", readTime: "5 min read" },
              { title: "Why We Switched From REST API to gRPC Structures", date: "April 2026", readTime: "8 min read" }
            ].map((post, idx) => (
              <div key={idx} style={{ background: '#111827', border: '1px solid #1F2937', padding: '1.5rem', borderRadius: '0.5rem' }}>
                <FiBookOpen size={20} color="var(--color-primary-light)" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{post.title}</h4>
                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{post.date} • {post.readTime}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 11. CLIENT REVIEWS */}
      <SectionWrapper className="section" style={{ background: '#111827' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', borderBottom: '2px solid #1F2937', paddingBottom: '0.5rem' }}>
            &gt; cat testimonials.db
          </h2>
          <div style={{ padding: '1.5rem', background: '#0B1120', border: '1px solid #1F2937', borderRadius: '0.75rem' }}>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#D1D5DB' }}>
              "An exceptional software architect. Rebuilt our core APIs on time and doubled our service throughput within weeks."
            </p>
            <div style={{ marginTop: '1rem', fontWeight: 700, color: 'var(--color-primary-light)' }}>
              — Director of Engineering, TechNova Corp
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 12. EXPERIENCE TIMELINE */}
      <SectionWrapper className="section" id="experience">
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2.5rem', borderBottom: '2px solid #1F2937', paddingBottom: '0.5rem' }}>
            &gt; history | grep "work"
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.experience?.map((item, idx) => (
              <div key={idx} style={{ background: '#111827', border: '1px solid #1F2937', padding: '1.5rem', borderRadius: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 700 }}>{item.role}</span>
                  <span style={{ color: 'var(--color-primary-light)' }}>{item.period}</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>{item.company} — {item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 13. FAQ ACCORDION */}
      <SectionWrapper className="section" style={{ background: '#111827' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', borderBottom: '2px solid #1F2937', paddingBottom: '0.5rem', textAlign: 'center' }}>
            &gt; help --faq
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { q: "What is your primary programming language setup?", a: "I specialize in TypeScript, Go, and Python for building backend systems." },
              { q: "Are you open to remote contract options?", a: "Yes, I accept remote contract terms globally." }
            ].map((faq, idx) => (
              <div key={idx} style={{ background: '#0B1120', border: '1px solid #1F2937', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <button onClick={() => toggleFaq(idx)} style={{ width: '100%', background: 'none', border: 'none', padding: '1.25rem', textAlign: 'left', color: 'white', fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{faq.q}</span>
                  <span>{openFaq === idx ? '-' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ padding: '0 1.25rem 1.25rem', color: '#9CA3AF', fontSize: '0.85rem' }}>
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 14. CTA BANNER */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, #0B1120 100%)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem' }}>Initiate Handshake Protocol</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '2rem', fontSize: '0.9rem' }}>Deploy high-performance systems to production today.</p>
          <a href="#contact" className="btn-primary" style={{ background: 'white', color: '#0B1120', border: 'none', display: 'inline-flex', alignItems: 'center' }}>
            Start Project <FiArrowRight style={{ marginLeft: '0.5rem' }} />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact" style={{ background: '#0B1120' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>&gt; ping {data.name.toLowerCase().replace(/\s+/g, '')}</h2>
          <div style={{ background: '#111827', border: '1px solid #1F2937', padding: '1.5rem', borderRadius: '0.75rem', textAlign: 'left' }}>
            <span style={{ color: '#10B981' }}>$ mailto:{data.email}</span>
            <div style={{ color: '#9CA3AF', fontSize: '0.85rem', marginTop: '0.5rem' }}>Feel free to email directly for consulting or contract options.</div>
          </div>
        </div>
      </section>

    </div>
  );
}
