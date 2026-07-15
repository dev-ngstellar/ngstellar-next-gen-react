import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import SectionWrapper, { AnimatedDiv } from '../../components/common/SectionWrapper';
import { fadeUp, staggerContainer, scaleIn, slideLeft, slideRight } from '../../animations/variants';
import { siteConfig } from '../../config/siteConfig';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: FiPhone, label: 'Phone', value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
  { icon: FiMapPin, label: 'Location', value: siteConfig.contact.address, href: '#' },
];

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { isSubmitting, isSubmitSuccessful } } = useForm();

  const onSubmit = (data) => {
    return new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
      <section style={{ background: 'var(--gradient-hero)', padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="animated-bg" style={{ top: '-100px', right: '10%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <AnimatedDiv variant={fadeUp}>
              <span className="section-label">✦ Contact Us</span>
            </AnimatedDiv>
            <AnimatedDiv variant={fadeUp}>
              <h1 className="section-title" style={{ marginTop: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Let's <span className="gradient-text">Work Together</span>
              </h1>
              <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
                Have a question about our templates or need a custom solution? We'd love to hear from you.
              </p>
            </AnimatedDiv>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <SectionWrapper className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem', alignItems: 'start' }}>
            {/* Left: Info */}
            <AnimatedDiv variant={slideLeft}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem' }}>
                  Get In Touch
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.75', marginBottom: '2.5rem' }}>
                  We're here to help you build the perfect portfolio. Reach out for template customization, enterprise plans, or just to say hello!
                </p>

                {/* Contact info cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '1rem',
                        padding: '1.25rem',
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '1rem',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                    >
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={20} color="var(--color-primary)" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-subtle)', marginBottom: '0.2rem' }}>{label}</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text)' }}>{value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social */}
                <div>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-subtle)', marginBottom: '1rem' }}>Follow Us</p>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {[FiTwitter, FiLinkedin, FiGithub].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        style={{
                          width: '44px', height: '44px', borderRadius: '12px',
                          background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'var(--color-text-muted)', textDecoration: 'none',
                          transition: 'all 0.2s',
                        }}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedDiv>

            {/* Right: Form */}
            <AnimatedDiv variant={slideRight}>
              {isSubmitSuccessful ? (
                <div style={{
                  textAlign: 'center', padding: '4rem 2rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1.5rem',
                }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <FiCheck size={40} color="white" />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.75rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>We'll get back to you within 24 hours.</p>
                  <button onClick={() => reset()} className="btn-primary">Send Another Message</button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '1.5rem',
                    padding: '2.5rem',
                    display: 'flex', flexDirection: 'column', gap: '1.5rem',
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>Send Us a Message</h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    {[
                      { label: 'First Name', name: 'firstName', placeholder: 'John' },
                      { label: 'Last Name', name: 'lastName', placeholder: 'Doe' },
                    ].map(({ label, name, placeholder }) => (
                      <div key={name}>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>{label}</label>
                        <input
                          {...register(name, { required: true })}
                          placeholder={placeholder}
                          style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)', borderRadius: '0.75rem', color: 'var(--color-text)', fontSize: '0.9rem', outline: 'none' }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Email *</label>
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      placeholder="john@example.com"
                      style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)', borderRadius: '0.75rem', color: 'var(--color-text)', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Subject</label>
                    <select
                      {...register('subject')}
                      style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)', borderRadius: '0.75rem', color: 'var(--color-text)', fontSize: '0.9rem', outline: 'none' }}
                    >
                      <option value="">Select a subject</option>
                      <option>Template Customization</option>
                      <option>Pricing & Plans</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.5rem' }}>Message *</label>
                    <textarea
                      {...register('message', { required: true })}
                      rows={5}
                      placeholder="Tell us how we can help..."
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
        </div>
      </SectionWrapper>
    </div>
  );
}
