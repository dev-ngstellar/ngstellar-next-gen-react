import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, AtSign, Share2, Globe, Rss, Send } from 'lucide-react';
import { siteConfig } from '../../utils/data';
import { fadeLeft, fadeRight, viewportOnce } from '../../utils/animations';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-20 overflow-hidden pt-32" style={{ background: 'var(--secondary)' }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1600&q=80" alt="Contact" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--secondary), transparent 60%)' }} />
        </div>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="section-label">Get In Touch</span>
            <h1 className="font-display text-white mt-4" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              CONTACT<br /><span className="text-gradient">US</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Layout */}
      <section className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.8 }}>
              <h2 className="font-display text-white text-4xl mb-6">
                LET'S START YOUR <span className="text-gradient">JOURNEY</span>
              </h2>
              <p className="mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Have questions about our programs, memberships, or facilities? Our team is ready to help you take the first step toward your strongest version.
              </p>

              {/* Contact Details */}
              <div className="flex flex-col gap-6 mb-10">
                {[
                  { Icon: MapPin, label: 'Address', value: siteConfig.address },
                  { Icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                  { Icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--glow-soft)', border: '1px solid var(--primary)' }}>
                      <Icon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>{label}</div>
                      {href ? (
                        <a href={href} className="text-white hover:text-primary transition-colors duration-200">{value}</a>
                      ) : (
                        <span className="text-white">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="glass rounded-2xl p-6 mb-8" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                  <h3 className="font-display text-white text-xl">Working Hours</h3>
                </div>
                {[
                  { day: 'Monday — Friday', time: siteConfig.hours.weekdays },
                  { day: 'Saturday', time: siteConfig.hours.saturday },
                  { day: 'Sunday', time: siteConfig.hours.sunday },
                ].map(({ day, time }) => (
                  <div key={day} className="flex justify-between py-2 border-b text-sm" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{day}</span>
                    <span className="text-white font-medium">{time}</span>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>Follow Us</p>
                <div className="flex gap-3">
                  {[AtSign, Share2, Globe, Rss].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = ''}>
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.8 }}>
              <div className="glass rounded-2xl p-8" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 className="font-display text-white text-3xl mb-8">SEND A MESSAGE</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    {[
                      { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                      { id: 'email', label: 'Email', type: 'email', placeholder: 'Your email' },
                    ].map((f) => (
                      <div key={f.id}>
                        <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: 'var(--text-muted)' }}>{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.id]}
                          onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none text-sm transition-all duration-200"
                          onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                          onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: 'var(--text-muted)' }}>Phone (Optional)</label>
                    <input
                      type="tel" placeholder="Your phone number"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none text-sm transition-all duration-200"
                      onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: 'var(--text-muted)' }}>Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm transition-all duration-200"
                      style={{ color: form.subject ? 'white' : '#6b7280' }}
                      onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    >
                      <option value="" style={{ background: '#0b1220', color: 'gray' }}>Select a subject</option>
                      {['Membership Enquiry', 'Free Trial', 'Personal Training', 'Corporate Wellness', 'General Question'].map(s => (
                        <option key={s} value={s} style={{ background: '#0b1220', color: 'white' }}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: 'var(--text-muted)' }}>Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none text-sm resize-none transition-all duration-200"
                      onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-4">
                    <span>{sent ? '✓ Message Sent!' : 'Send Message'}</span>
                    {!sent && <Send className="w-4 h-4 relative z-10" />}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding-sm" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden" style={{ height: '400px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <iframe
              title="GymForge Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.234!2d-73.9857!3d40.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
