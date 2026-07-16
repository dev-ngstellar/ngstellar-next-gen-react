import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  FiMapPin, FiMail, FiArrowLeft, FiDownload, FiGithub,
  FiLinkedin, FiTwitter, FiExternalLink, FiSend, FiCheck,
} from 'react-icons/fi';
import {
  FaCode, FaLaptopCode, FaPaintBrush, FaServer, FaBrain, FaShieldAlt,
  FaChartBar, FaFlask, FaFigma, FaPalette, FaCamera, FaVideo, FaYoutube,
  FaStar, FaRocket, FaBuilding, FaBriefcase, FaChartLine, FaHandshake,
  FaGraduationCap, FaChalkboardTeacher, FaUniversity, FaDraftingCompass,
  FaCouch, FaHardHat, FaCogs, FaUserMd, FaDumbbell, FaBalanceScale,
  FaMicrophone,
} from 'react-icons/fa';
import { getProfessionById } from '../data/professions';
import { getAllTestimonials } from '../data/testimonials';
import { fadeUp, staggerContainer, scaleIn, slideLeft, slideRight, progressBar } from '../animations/variants';
import SectionWrapper, { AnimatedDiv } from '../components/common/SectionWrapper';
import ProjectCard from '../components/cards/ProjectCard';
import TestimonialCard from '../components/cards/TestimonialCard';
import { useTheme } from '../context/ThemeContext';
import { getThemeById } from '../config/themes';
import { usePortfolio } from '../context/PortfolioContext';

const iconMap = {
  FaCode, FaLaptopCode, FaPaintBrush, FaServer, FaBrain, FaShieldAlt,
  FaChartBar, FaFlask, FaFigma, FaPalette, FaCamera, FaVideo, FaYoutube,
  FaStar, FaRocket, FaBuilding, FaBriefcase, FaChartLine, FaHandshake,
  FaGraduationCap, FaChalkboardTeacher, FaUniversity, FaDraftingCompass,
  FaCouch, FaHardHat, FaCogs, FaUserMd, FaDumbbell, FaBalanceScale,
  FaMicrophone,
};

// ─── SKILL BAR ───────────────────────────────────────────────
function SkillBar({ skill }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text)' }}>{skill.name}</span>
        <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 700 }}>{skill.level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          variants={progressBar(skill.level)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="skill-bar-fill"
        />
      </div>
    </div>
  );
}

// ─── TIMELINE ITEM ────────────────────────────────────────────
function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: '1rem',
        padding: '1.5rem',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>{item.role}</h4>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600, background: 'rgba(37,99,235,0.1)', padding: '0.2rem 0.75rem', borderRadius: '100px' }}>
            {item.period}
          </span>
        </div>
        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-accent)', marginBottom: '0.5rem' }}>{item.company}</div>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.description}</p>
      </div>
    </div>
  );
}

export default function DeveloperLayout() {
  const { selectedProfession: profession, activeProfileData: data } = usePortfolio();
  const { switchTheme } = useTheme();
  const testimonials = getAllTestimonials().slice(0, 4);
  const { register, handleSubmit, reset, formState: { isSubmitting, isSubmitSuccessful } } = useForm();
  
  if (!profession) return null;
  const Icon = iconMap[profession.icon] || FaCode;
  const hasSection = (s) => profession.sections.includes(s) || profession.extraSections?.includes(s);

  const onSubmit = (formData) => {
    return new Promise(resolve => setTimeout(resolve, 1500));
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingBottom: '80px' }}>

      {/* ═══════ HERO ═══════ */}
      <section style={{
        minHeight: '100vh',
        background: 'var(--gradient-hero)',
        display: 'flex', alignItems: 'center',
        paddingTop: '140px', paddingBottom: '80px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="animated-bg" style={{ top: '-100px', left: '-100px' }} />
        <div className="animated-bg" style={{ bottom: '-100px', right: '0', animationDelay: '3s' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="visible"
            style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}
          >
            {/* Text */}
            <div>
              <AnimatedDiv variant={fadeUp}>
                <span className="section-label">
                  {profession.emoji} {profession.label}
                </span>
              </AnimatedDiv>

              <AnimatedDiv variant={fadeUp}>
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 900, lineHeight: 1.1,
                  color: 'var(--color-text)',
                  margin: '1rem 0 0.5rem',
                  letterSpacing: '-0.02em',
                }}>
                  Hi, I'm <span className="gradient-text">{data.name}</span>
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '1rem' }}>
                  {data.title}
                </p>
                <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.75', maxWidth: '560px', marginBottom: '2rem' }}>
                  {data.bio}
                </p>
              </AnimatedDiv>

              <AnimatedDiv variant={fadeUp}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                  <a href="#contact" className="btn-primary">
                    Get In Touch <FiSend size={14} />
                  </a>
                  <a href="#projects" className="btn-outline">
                    View My Work
                  </a>
                </div>

                {/* Location / Email */}
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  {data.location && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                      <FiMapPin size={14} color="var(--color-primary)" /> {data.location}
                    </div>
                  )}
                  {data.email && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                      <FiMail size={14} color="var(--color-primary)" /> {data.email}
                    </div>
                  )}
                </div>
              </AnimatedDiv>
            </div>

            {/* Avatar */}
            {data.avatar && (
              <AnimatedDiv variant={scaleIn}>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    width: 'clamp(200px, 20vw, 280px)',
                    height: 'clamp(200px, 20vw, 280px)',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid var(--color-primary)',
                    boxShadow: '0 0 0 8px var(--color-glow)',
                  }}>
                    <img src={data.avatar} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  {/* Status dot */}
                  <div style={{
                    position: 'absolute', bottom: '16px', right: '16px',
                    background: '#22c55e', width: '20px', height: '20px',
                    borderRadius: '50%', border: '3px solid var(--color-bg)',
                    boxShadow: '0 0 0 3px rgba(34,197,94,0.3)',
                  }} />
                </div>
              </AnimatedDiv>
            )}
          </motion.div>

          {/* Stats */}
          {data.stats && data.stats.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                marginTop: '4rem',
                display: 'grid',
                gridTemplateColumns: `repeat(${Math.min(data.stats.length, 4)}, 1fr)`,
                gap: '1rem',
              }}
            >
              {data.stats.map((stat) => (
                <div key={stat.label} style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-text)', lineHeight: 1 }}>
                    {stat.prefix && <span>{stat.prefix}</span>}
                    {stat.value}{stat.suffix}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.375rem' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════ SKILLS ═══════ */}
      {hasSection('skills') && data.skills && data.skills.length > 0 && (
        <SectionWrapper className="section" style={{ background: 'var(--color-surface)' }} id="skills">
          <div className="container">
            <AnimatedDiv variant={fadeUp} style={{ marginBottom: '2.5rem' }}>
              <span className="section-label">✦ Expertise</span>
              <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
                Skills & <span className="gradient-text">Proficiency</span>
              </h2>
            </AnimatedDiv>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '3rem 4rem' }}>
              {data.skills.map((skill) => <SkillBar key={skill.name} skill={skill} />)}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ═══════ TECH STACK ═══════ */}
      {hasSection('techStack') && data.techStack && data.techStack.length > 0 && (
        <SectionWrapper className="section" id="tech-stack">
          <div className="container">
            <AnimatedDiv variant={fadeUp} style={{ marginBottom: '2.5rem' }}>
              <span className="section-label">✦ Tech Stack</span>
              <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
                Tools & <span className="gradient-text">Technologies</span>
              </h2>
            </AnimatedDiv>

            <AnimatedDiv variant={scaleIn}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
                {data.techStack.map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ y: -3, scale: 1.05 }}
                    style={{
                      padding: '0.625rem 1.25rem',
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '0.75rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      cursor: 'default',
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </AnimatedDiv>
          </div>
        </SectionWrapper>
      )}

      {/* ═══════ PROJECTS ═══════ */}
      {hasSection('projects') && data.projects && data.projects.length > 0 && (
        <SectionWrapper className="section" style={{ background: 'var(--color-surface)' }} id="projects">
          <div className="container">
            <AnimatedDiv variant={fadeUp} style={{ marginBottom: '2.5rem' }}>
              <span className="section-label">✦ Portfolio</span>
              <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </AnimatedDiv>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {data.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ═══════ EXPERIENCE ═══════ */}
      {hasSection('experience') && data.experience && data.experience.length > 0 && (
        <SectionWrapper className="section" id="experience">
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedDiv variant={fadeUp} style={{ marginBottom: '2.5rem' }}>
              <span className="section-label">✦ Career</span>
              <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
                Work <span className="gradient-text">Experience</span>
              </h2>
            </AnimatedDiv>

            <AnimatedDiv variant={fadeUp}>
              {data.experience.map((item) => (
                <TimelineItem key={item.company + item.role} item={item} />
              ))}
            </AnimatedDiv>
          </div>
        </SectionWrapper>
      )}

      {/* ═══════ TESTIMONIALS ═══════ */}
      {hasSection('testimonials') && (
        <SectionWrapper className="section" style={{ background: 'var(--color-surface)' }} id="testimonials">
          <div className="container">
            <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-label">✦ Testimonials</span>
              <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
                What People <span className="gradient-text">Say</span>
              </h2>
            </AnimatedDiv>

            <AnimatedDiv variant={fadeUp}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', paddingBottom: '3rem' }}>
                {testimonials.map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} />
                ))}
              </div>
            </AnimatedDiv>
          </div>
        </SectionWrapper>
      )}

      {/* ═══════ CONTACT ═══════ */}
      {hasSection('contact') && (
        <SectionWrapper className="section" id="contact">
          <div className="container" style={{ maxWidth: '700px' }}>
            <AnimatedDiv variant={fadeUp} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="section-label">✦ Let's Connect</span>
              <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0.75rem auto 0' }}>
                Have a project in mind or want to collaborate? Send a message!
              </p>
            </AnimatedDiv>

            <AnimatedDiv variant={scaleIn}>
              {isSubmitSuccessful ? (
                <div style={{
                  textAlign: 'center', padding: '3rem',
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: '1.5rem',
                }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <FiCheck size={32} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--color-text-muted)' }}>Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '1.5rem',
                    padding: '2.5rem',
                    display: 'flex', flexDirection: 'column', gap: '1.25rem',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Name *</label>
                      <input
                        {...register('name', { required: true })}
                        placeholder="Your name"
                        style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)', borderRadius: '0.75rem', color: 'var(--color-text)', fontSize: '0.9rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Email *</label>
                      <input
                        {...register('email', { required: true })}
                        type="email"
                        placeholder="your@email.com"
                        style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)', borderRadius: '0.75rem', color: 'var(--color-text)', fontSize: '0.9rem', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Subject</label>
                    <input
                      {...register('subject')}
                      placeholder="How can I help you?"
                      style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)', borderRadius: '0.75rem', color: 'var(--color-text)', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Message *</label>
                    <textarea
                      {...register('message', { required: true })}
                      rows={5}
                      placeholder="Tell me about your project..."
                      style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)', borderRadius: '0.75rem', color: 'var(--color-text)', fontSize: '0.9rem', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ justifyContent: 'center', padding: '0.875rem', fontSize: '1rem', opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? 'Sending...' : (<><FiSend size={16} /> Send Message</>)}
                  </motion.button>
                </form>
              )}
            </AnimatedDiv>
          </div>
        </SectionWrapper>
      )}

    </div>
  );
}
