import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { viewportOnce } from '../../utils/animations';

const fitnessGoals = ['Weight Loss', 'Muscle Gain', 'Body Transformation', 'Strength Training', 'Nutrition Coaching', 'Online Coaching', 'General Fitness'];
const trainingPrefs = ['Online', 'In-Person', 'Both'];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', goal: '', currentWeight: '',
    targetWeight: '', training: 'Online', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: 'var(--text)',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    fontFamily: "'Inter', sans-serif",
  };

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '8px',
    color: 'var(--text-muted)',
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = 'var(--primary)';
    e.target.style.boxShadow = '0 0 0 3px var(--glow-soft)';
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = 'var(--border)';
    e.target.style.boxShadow = 'none';
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-10 text-center"
        style={{ border: '1px solid var(--border)' }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: 'var(--glow-soft)', border: '1px solid var(--primary)' }}
        >
          <CheckCircle className="w-8 h-8" style={{ color: 'var(--primary)' }} />
        </div>
        <h3 className="font-display font-bold text-2xl mb-3" style={{ color: 'var(--text)' }}>
          Message Sent! 🎉
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Thank you for reaching out. I will get back to you within 24 hours to schedule your free consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7 }}
    >
      <div className="glass rounded-2xl p-8" style={{ border: '1px solid var(--border)' }}>
        <h3 className="font-display font-bold text-xl mb-6" style={{ color: 'var(--text)' }}>
          Send A Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Alex Johnson"
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label style={labelStyle}>Email Address *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          </div>

          {/* Phone + Goal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={form.phone}
                onChange={handleChange}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label style={labelStyle}>Fitness Goal *</label>
              <select
                name="goal"
                required
                value={form.goal}
                onChange={handleChange}
                style={{ ...inputStyle, cursor: 'pointer' }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <option value="" style={{ background: '#0d1117' }}>Select your goal...</option>
                {fitnessGoals.map(g => (
                  <option key={g} value={g} style={{ background: '#0d1117' }}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Weight fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Current Weight (kg)</label>
              <input
                type="text"
                name="currentWeight"
                placeholder="e.g. 85 kg"
                value={form.currentWeight}
                onChange={handleChange}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label style={labelStyle}>Target Weight (kg)</label>
              <input
                type="text"
                name="targetWeight"
                placeholder="e.g. 75 kg"
                value={form.targetWeight}
                onChange={handleChange}
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          </div>

          {/* Training preference */}
          <div>
            <label style={labelStyle}>Preferred Training</label>
            <div className="flex gap-3">
              {trainingPrefs.map((pref) => (
                <button
                  key={pref}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, training: pref }))}
                  className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    background: form.training === pref ? 'var(--primary)' : 'var(--surface)',
                    color: form.training === pref ? 'white' : 'var(--text-muted)',
                    border: `1px solid ${form.training === pref ? 'var(--primary)' : 'var(--border)'}`,
                    boxShadow: form.training === pref ? '0 0 16px var(--glow-soft)' : 'none',
                  }}
                >
                  {pref}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your fitness goals, current routine, any injuries or limitations..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full justify-center py-4 gap-2.5 mt-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
