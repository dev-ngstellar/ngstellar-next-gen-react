import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaLocationDot, FaClock, FaCircleCheck, FaArrowRight } from 'react-icons/fa6';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa6';
import siteConfig from '../config/siteConfig';
import { pageTransition } from '../utils/animations';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const eventTypes = [
    'Wedding', 'Corporate Event', 'Birthday Celebration', 'Music Festival',
    'Concert', 'Trade Show', 'Exhibition', 'Award Ceremony', 'Product Launch',
    'Cultural Event', 'Sports Event', 'Community Event', 'Other',
  ];

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      {/* Page Header */}
      <div className="relative py-32 pt-40 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, var(--color-secondary) 100%)' }}>
        <div className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at top, var(--color-primary) 0%, transparent 70%)' }} />
        <div className="container-custom relative z-10 text-center">
          <div className="section-label mx-auto">Let's Connect</div>
          <h1 className="heading-display text-white mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Plan Your <span style={{ color: 'var(--color-primary)' }}>Next Event</span>
          </h1>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            Ready to start planning? Fill out the form below or reach out directly. Our team will respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick contact */}
            {[
              { icon: FaPhone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
              { icon: FaEnvelope, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: FaLocationDot, label: 'Office', value: siteConfig.address, href: '#' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 p-5 transition-all group"
                style={{ borderRadius: 'var(--border-radius)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary)22, var(--color-accent)11)' }}>
                  <Icon style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-white text-sm font-medium group-hover:text-primary transition-colors"
                    style={{ transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--color-primary)'}
                    onMouseLeave={e => e.target.style.color = ''}
                  >{value}</p>
                </div>
              </a>
            ))}

            {/* Business Hours */}
            <div className="p-5" style={{ borderRadius: 'var(--border-radius)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-center gap-2 mb-4">
                <FaClock style={{ color: 'var(--color-primary)' }} />
                <h3 className="text-white font-bold text-sm">Business Hours</h3>
              </div>
              {siteConfig.businessHours.map(({ day, hours }) => (
                <div key={day} className="flex justify-between py-2 border-b border-white/06 text-sm">
                  <span className="text-white/50">{day}</span>
                  <span className="text-white font-medium">{hours}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="p-5" style={{ borderRadius: 'var(--border-radius)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-2">
                {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white/40"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}
                    whileHover={{ scale: 1.1, color: 'var(--color-primary)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="text-sm" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="overflow-hidden h-52 relative"
              style={{ borderRadius: 'var(--border-radius)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <FaLocationDot className="text-4xl" style={{ color: 'var(--color-primary)' }} />
                <p className="text-white/40 text-sm">Interactive Map</p>
                <p className="text-white/25 text-xs">Integrate Google Maps here</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8" style={{ borderRadius: 'var(--border-radius)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {submitted ? (
                <motion.div
                  className="py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(var(--color-primary), 0.15)', border: '2px solid var(--color-primary)' }}>
                    <FaCircleCheck className="text-4xl" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    Message Sent!
                  </h3>
                  <p className="text-white/50 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-white font-bold text-2xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">First Name *</label>
                        <input
                          {...register('firstName', { required: 'Required' })}
                          className="input-field"
                          placeholder="John"
                          id="contact-first-name"
                        />
                        {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Last Name *</label>
                        <input
                          {...register('lastName', { required: 'Required' })}
                          className="input-field"
                          placeholder="Doe"
                          id="contact-last-name"
                        />
                        {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Email Address *</label>
                        <input
                          {...register('email', {
                            required: 'Required',
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                          })}
                          className="input-field"
                          placeholder="john@example.com"
                          type="email"
                          id="contact-email"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Phone Number</label>
                        <input
                          {...register('phone')}
                          className="input-field"
                          placeholder="+1 (000) 000-0000"
                          type="tel"
                          id="contact-phone"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Event Type</label>
                        <select
                          {...register('eventType')}
                          className="input-field"
                          id="contact-event-type"
                          style={{ color: 'rgba(255,255,255,0.8)' }}
                        >
                          <option value="" style={{ background: '#111' }}>Select Event Type</option>
                          {eventTypes.map(t => (
                            <option key={t} value={t} style={{ background: '#111' }}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Expected Date</label>
                        <input
                          {...register('eventDate')}
                          className="input-field"
                          type="date"
                          id="contact-event-date"
                          style={{ colorScheme: 'dark' }}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Expected Guests</label>
                        <select
                          {...register('guestCount')}
                          className="input-field"
                          id="contact-guest-count"
                          style={{ color: 'rgba(255,255,255,0.8)' }}
                        >
                          <option value="" style={{ background: '#111' }}>Select range</option>
                          {['1-50', '51-100', '101-250', '251-500', '501-1000', '1000+'].map(r => (
                            <option key={r} value={r} style={{ background: '#111' }}>{r} guests</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Budget Range</label>
                        <select
                          {...register('budget')}
                          className="input-field"
                          id="contact-budget"
                          style={{ color: 'rgba(255,255,255,0.8)' }}
                        >
                          <option value="" style={{ background: '#111' }}>Select budget</option>
                          {['Under $5,000', '$5,000 - $15,000', '$15,000 - $30,000', '$30,000 - $60,000', '$60,000+', 'Custom'].map(b => (
                            <option key={b} value={b} style={{ background: '#111' }}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/60 text-sm mb-2">Tell Us About Your Event *</label>
                      <textarea
                        {...register('message', { required: 'Please describe your event' })}
                        className="input-field resize-none"
                        rows={5}
                        placeholder="Describe your event vision, requirements, and any special requests..."
                        id="contact-message"
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <button type="submit" className="btn-primary w-full text-base">
                      <span>Send Message</span>
                      <FaArrowRight />
                    </button>

                    <p className="text-white/25 text-xs text-center">
                      By submitting this form, you agree to our Privacy Policy. We'll respond within 24 hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
