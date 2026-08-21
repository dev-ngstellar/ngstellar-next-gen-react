import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';
import { BsBuildingsFill } from 'react-icons/bs';
import { Sparkles, Send, Loader2, CheckCircle2, AlertCircle, ArrowLeft, Check } from 'lucide-react';
import { sendContactEmail } from '../services/emailService';

const DISCUSSION_TOPICS = [
  'Business transformation',
  'Growth challenges',
  'Process improvement',
  'Technology transformation',
  'Digital growth',
  'AI adoption',
  'Sustainability',
  'Organizational transformation',
  'Strategic partnerships',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // '' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Inline validation
    let error = '';
    if (name === 'name') {
      if (value.trim() && value.trim().length < 2) error = 'Full Name must be at least 2 characters';
      else if (/\d/.test(value)) error = 'Name should not contain numbers';
    }
    if (name === 'email') {
      if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email address';
    }
    if (name === 'subject') {
      if (value.trim() && value.trim().length < 2) error = 'Subject must be at least 2 characters';
    }
    if (name === 'message') {
      if (value.trim() && value.trim().length < 5) error = 'Message must not be empty';
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Full Name must be at least 2 characters';
    else if (/\d/.test(formData.name)) newErrors.name = 'Name should not contain numbers';

    if (!formData.email.trim()) newErrors.email = 'Email Address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate() || status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage('');

    // Exact template parameters specified
    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    const result = await sendContactEmail(templateParams);

    if (result.success) {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    } else {
      setStatus('error');
      setErrorMessage(result.error || "We couldn't submit your message right now. Please check your details and try again.");
    }
  };

  const handleResetForm = () => {
    setStatus('');
    setErrorMessage('');
  };

  return (
    <section className="py-12 md:py-20 min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Start a Transformation Conversation | NG Stellar</title>
        <meta
          name="description"
          content="Start a conversation with NG Stellar about business transformation, growth, technology, digital transformation, AI, sustainability and organizational change."
        />
        <meta
          name="keywords"
          content="Contact NG Stellar, Start a Transformation Conversation, Advisory Consultation, Digital Growth, Sustainability Advisory"
        />
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT SIDE: HERO NARRATIVE & CONTACT INFO */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
                Start a Conversation
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
                Start a Transformation Conversation
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Your transformation journey can start with a conversation.
              </p>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                Tell us about your business, the challenge you are facing or the opportunity you want to pursue.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                You don&apos;t need to have all the answers.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                We can start by understanding the problem.
              </p>
            </div>

            {/* Supporting Text: Let's discuss */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary-300 flex items-center gap-2">
                Let&apos;s discuss:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {DISCUSSION_TOPICS.map((topic) => (
                  <div key={topic} className="flex items-center gap-2 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Organization Tag */}
            <div className="space-y-1 p-3.5 rounded-xl bg-slate-900/60 border border-white/10">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <BsBuildingsFill className="text-base text-primary-400" />
                NGStellar Solutions
              </h3>
              <p className="text-slate-400 text-xs">
                By TrueConnect Strategic Services Private Limited
              </p>
            </div>

            {/* Direct Phone & Email Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href="tel:+919790652929"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/10 text-slate-200 text-xs hover:border-primary-500/50 hover:text-primary-300 transition-all group"
              >
                <FaPhone className="text-xs text-primary-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate">+91 9790652929</span>
              </a>
              <a
                href="mailto:contact@ngstellar.com"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/10 text-slate-200 text-xs hover:border-primary-500/50 hover:text-primary-300 transition-all group"
              >
                <FaEnvelope className="text-xs text-primary-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate">contact@ngstellar.com</span>
              </a>
            </div>

            {/* Address & Embedded Map */}
            <div className="space-y-2 pt-1">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <FaMapLocationDot className="text-base text-primary-400" />
                Our Location
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                151/18, D R Avenue 1, Netaji Nagar, Moolapalayam, Erode, Tamil Nadu 638002
              </p>
              <div className="w-full h-40 sm:h-44 rounded-xl overflow-hidden shadow-lg border border-white/10">
                <iframe
                  title="NG Stellar Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.859664536294!2d77.7194252758548!3d11.306791978438159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f98aba9f235%3A0x6f743610f354489c!2sNithya%20Gokul%20Associates%20(Since%202010)%20%7C%20Corporate%20Compliance%20%26%20Legal%20Advisors!5e0!3m2!1sen!2sin!4v1715243880000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ONE MINIMAL CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-primary-500/20 backdrop-blur-xl border border-white/12 bg-slate-950/85">
              {/* Success State View */}
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-10 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Thank you for reaching out to NG Stellar.
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    We have received your message and will review your enquiry.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Our team will get back to you shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-primary-500/25 hover:brightness-110 transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                      Start a Conversation
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Fill out the form below and our team will get in touch with you.
                    </p>
                  </div>

                  {/* Error Feedback Alert */}
                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="mb-6 p-4 rounded-xl bg-rose-950/70 border border-rose-500/40 text-rose-200 flex items-start gap-3"
                      >
                        <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-rose-200/90 leading-relaxed">
                          {errorMessage || "We couldn't submit your message right now. Please check your details and try again."}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                    {/* Field 1: Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name <span className="text-primary-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-900/70 border ${
                          errors.name ? 'border-rose-500/70 focus:ring-rose-500' : 'border-slate-700/60 focus:ring-primary-500'
                        } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                      />
                      {errors.name && (
                        <p className="text-rose-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Field 2: Email Address */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-primary-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-900/70 border ${
                          errors.email ? 'border-rose-500/70 focus:ring-rose-500' : 'border-slate-700/60 focus:ring-primary-500'
                        } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                      />
                      {errors.email && (
                        <p className="text-rose-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Field 3: Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Subject <span className="text-primary-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        placeholder="e.g. Business Transformation, Technology, AI..."
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-900/70 border ${
                          errors.subject ? 'border-rose-500/70 focus:ring-rose-500' : 'border-slate-700/60 focus:ring-primary-500'
                        } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                      />
                      {errors.subject && (
                        <p className="text-rose-400 text-xs mt-1">{errors.subject}</p>
                      )}
                    </div>

                    {/* Field 4: Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Message <span className="text-primary-400">*</span>
                      </label>
                      <textarea
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        placeholder="Tell us about your business, the challenge you are facing or the opportunity you want to pursue..."
                        className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-900/70 border ${
                          errors.message ? 'border-rose-500/70 focus:ring-rose-500' : 'border-slate-700/60 focus:ring-primary-500'
                        } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none disabled:opacity-50`}
                      />
                      {errors.message && (
                        <p className="text-rose-400 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 hover:brightness-110 shadow-lg shadow-primary-500/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
