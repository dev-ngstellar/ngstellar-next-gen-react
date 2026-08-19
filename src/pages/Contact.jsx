import { useState, memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Send,
  CheckCircle2,
  Briefcase,
  Activity,
  Handshake,
  MessageSquare,
  Building,
  Users,
  Workflow,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_4dgpcwr';
const TEMPLATE_ID = 'template_y1dqzf2';
const PUBLIC_KEY = 'oJ0NUxKWWEBrNzzUs';

const contactModes = {
  'transformation-conversation': {
    id: 'transformation-conversation',
    h1: 'Start a Transformation Conversation',
    tagline: 'Your transformation journey can start with a conversation.',
    intro: [
      'Tell us about your business, the challenge you are facing or the opportunity you want to pursue.',
      "You don't need to have all the answers. We can start by understanding the problem."
    ],
    scopeTitle: "Let's Discuss:",
    scopeItems: [
      'Business transformation',
      'Growth challenges',
      'Process improvement',
      'Technology transformation',
      'Digital growth',
      'AI adoption',
      'Sustainability',
      'Organizational transformation',
      'Strategic partnerships'
    ],
    ctaLabel: 'Start a Transformation Conversation'
  },
  'health-check': {
    id: 'health-check',
    h1: 'Request a Health Check',
    tagline: 'Not sure what is holding your business back?',
    intro: [
      'Our Business Health Check helps you look at your organization from multiple perspectives.'
    ],
    scopeTitle: 'We Can Assess:',
    assessments: [
      { name: 'Business', desc: 'Strategy, positioning, business model and growth.' },
      { name: 'People', desc: 'Leadership, organization and capabilities.' },
      { name: 'Process', desc: 'Operations, efficiency and scalability.' },
      { name: 'Technology', desc: 'Systems, digital capabilities, automation and AI.' },
      { name: 'Sustainability', desc: 'Economic resilience, people, governance and long-term value.' }
    ],
    outcome: 'Where you are → What is holding you back → What needs attention → What you should do next',
    ctaLabel: 'Request a Health Check'
  },
  partner: {
    id: 'partner',
    h1: 'Partner With NG Stellar',
    tagline: 'Transformation works better together.',
    intro: [
      'NG Stellar is building an ecosystem of experts, businesses, technology companies, startups, professional firms and implementation partners.',
      'If you have capabilities that can help businesses transform, we would like to hear from you.'
    ],
    scopeTitle: 'We Are Looking For:',
    scopeItems: [
      'Industry experts',
      'Consultants',
      'Technology companies',
      'AI companies',
      'Software companies',
      'Startups',
      'Professional service firms',
      'Implementation partners',
      'Incubators',
      'Accelerators',
      'Strategic partners'
    ],
    opportunitiesTitle: 'Partnership Opportunities:',
    opportunities: [
      { type: 'Expert Partner', desc: 'Bring specialized knowledge and expertise.' },
      { type: 'Technology Partner', desc: 'Bring platforms and technology capabilities.' },
      { type: 'Implementation Partner', desc: 'Help organizations execute transformation initiatives.' },
      { type: 'Strategic Partner', desc: 'Collaborate on larger transformation opportunities.' },
      { type: 'Innovation Partner', desc: 'Bring new ideas, startups and emerging technologies.' }
    ],
    ctaLabel: 'Partner With NG Stellar'
  }
};

function Contact() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/contact';
  const pathSegment = currentPath.split('/')[2]; // 'transformation-conversation', 'health-check', 'partner'

  const activeModeKey =
    pathSegment && contactModes[pathSegment] ? pathSegment : 'transformation-conversation';
  const activeMode = contactModes[activeModeKey];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    subject: activeMode.h1,
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // "", "sending", "success", "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrors({ fullName: 'Name is required' });
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrors({ email: 'Valid email is required' });
      return;
    }

    setStatus('sending');
    const templateParams = {
      to_name: 'NG Stellar Advisory Team',
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      organization: formData.organization || 'Not provided',
      subject: `[${activeMode.h1}] ${formData.fullName}`,
      message: formData.message || 'Transformation inquiry submitted.'
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ fullName: '', email: '', phone: '', organization: '', subject: activeMode.h1, message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
    { name: activeMode.h1, url: currentPath }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16 pt-24 sm:pt-28">
      <SEO
        title={`${activeMode.h1} | NG Stellar`}
        description="Engage with NG Stellar transformation advisors. Start a conversation, request a health check, or explore ecosystem partnership."
        canonicalUrl={currentPath}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-white/10 mb-8 sm:mb-10">
          {[
            { key: 'transformation-conversation', label: 'Start Conversation', href: '/contact/transformation-conversation' },
            { key: 'health-check', label: 'Request Health Check', href: '/contact/health-check' },
            { key: 'partner', label: 'Partner With Us', href: '/contact/partner' }
          ].map((tab) => {
            const isActive = activeModeKey === tab.key;
            return (
              <Link
                key={tab.key}
                to={tab.href}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-lg shadow-primary-500/20'
                    : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: APPROVED CONTENT DETAILS */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/25 text-xs font-bold text-primary-300 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
                <span>Advisory Engagement</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {activeMode.h1}
              </h1>

              <p className="text-lg sm:text-xl font-bold text-secondary-300">
                {activeMode.tagline}
              </p>

              <div className="space-y-3 text-slate-300 text-base leading-relaxed">
                {activeMode.intro.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Scope Items List if present */}
            {activeMode.scopeItems && (
              <div className="p-7 rounded-3xl bg-slate-900/80 border border-white/10 space-y-4 shadow-xl">
                <span className="text-xs font-bold text-primary-400 uppercase tracking-wider block">
                  {activeMode.scopeTitle}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeMode.scopeItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Health Check Assessments List if in health check mode */}
            {activeMode.assessments && (
              <div className="p-7 rounded-3xl bg-slate-900/80 border border-white/10 space-y-4 shadow-xl">
                <span className="text-xs font-bold text-secondary-400 uppercase tracking-wider block">
                  {activeMode.scopeTitle}
                </span>
                <div className="space-y-3">
                  {activeMode.assessments.map((a, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="text-xs font-mono text-primary-400">0{idx + 1}</span>
                        {a.name}
                      </div>
                      <p className="text-xs text-slate-300">{a.desc}</p>
                    </div>
                  ))}
                </div>

                {activeMode.outcome && (
                  <div className="p-4 rounded-xl bg-primary-950/60 border border-primary-500/30 text-xs font-bold text-primary-200">
                    <span className="text-secondary-400 block mb-1 uppercase tracking-wider">The Outcome:</span>
                    {activeMode.outcome}
                  </div>
                )}
              </div>
            )}

            {/* Partner Opportunities if in partner mode */}
            {activeMode.opportunities && (
              <div className="p-7 rounded-3xl bg-slate-900/80 border border-white/10 space-y-4 shadow-xl">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  {activeMode.opportunitiesTitle}
                </span>
                <div className="space-y-3">
                  {activeMode.opportunities.map((opp, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                      <div className="text-sm font-bold text-white">{opp.type}</div>
                      <p className="text-xs text-slate-300">{opp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: INTERACTIVE FORM */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Direct Advisory Channel</h3>
                <p className="text-xs text-slate-400">
                  Fill in your details and an executive advisor will connect within 24 hours.
                </p>
              </div>

              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="text-base font-bold text-white">Inquiry Received</div>
                  <p className="text-xs text-slate-300">
                    Thank you. A senior transformation advisor from NG Stellar will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. David Miller"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:border-primary-400 focus:outline-none"
                    />
                    {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. david@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:border-primary-400 focus:outline-none"
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:border-primary-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">Organization</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:border-primary-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Challenge or Opportunity</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the situation or goals you'd like to explore..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:border-primary-400 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-500 hover:to-secondary-400 text-white font-bold text-sm shadow-xl shadow-primary-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{status === 'sending' ? 'Sending Inquiry...' : activeMode.ctaLabel}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  {status === 'error' && (
                    <p className="text-xs text-red-400 text-center">
                      There was an error sending your message. Please try again or reach out directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Contact);
