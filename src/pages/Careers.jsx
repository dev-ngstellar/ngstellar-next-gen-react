import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Code,
  Palette,
  TrendingUp,
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  X,
  Send,
  Loader2,
} from 'lucide-react';
import { FaCheckCircle, FaUsers, FaLightbulb, FaRocket, FaHandshake, FaDraftingCompass } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import StarBorder from '../components/StarBorder';
import Typewriter from '../components/Typewriter';
import Marquee from '../components/Marquee';

// Open Positions Data
const POSITIONS = [
  {
    id: 'developer',
    title: 'Developer',
    subtitle: 'Full Stack / Frontend / Backend Engineer',
    type: 'Full-time / Remote / Hybrid',
    location: 'Erode, Tamil Nadu / Hybrid',
    icon: Code,
    gradient: 'from-blue-500/20 via-primary-500/20 to-cyan-500/20',
    borderGradient: 'border-blue-500/30',
    accentColor: 'text-blue-400',
    description:
      'Architect, develop, and deploy scalable enterprise platforms, intuitive interactive web applications, and robust API architectures powering high-impact digital transformations.',
    skills: ['React / Vite', 'Node.js / Express', 'TypeScript / Modern JS', 'TailwindCSS', 'REST & GraphQL APIs', 'Performance Optimization'],
    responsibilities: [
      'Build responsive, high-performance web applications using modern React ecosystems.',
      'Collaborate with designers to implement pixel-perfect, accessible UI components.',
      'Integrate secure backend APIs, microservices, and database systems.',
      'Write clean, modular, and thoroughly tested code adhering to modern standards.',
    ],
  },
  {
    id: 'designer',
    title: 'Designer',
    subtitle: 'UI/UX & Brand Identity Designer',
    type: 'Full-time / Hybrid',
    location: 'Erode, Tamil Nadu / Hybrid',
    icon: Palette,
    gradient: 'from-purple-500/20 via-fuchsia-500/20 to-pink-500/20',
    borderGradient: 'border-purple-500/30',
    accentColor: 'text-purple-400',
    description:
      'Create visually stunning digital experiences, human-centered UX design systems, prototypes, and brand identities that articulate the future of advisory and enterprise technology.',
    skills: ['Figma / FigJam', 'UI/UX Systems', 'Wireframing & Prototyping', 'Visual Branding', 'Design Thinking', 'Micro-interactions'],
    responsibilities: [
      'Design comprehensive UI/UX blueprints, wireframes, and production-ready mockups.',
      'Develop and maintain scalable enterprise design systems and component libraries.',
      'Conduct user research, usability testing, and interactive prototyping.',
      'Work closely with developers to ensure seamless, faithful design implementation.',
    ],
  },
  {
    id: 'marketing-sales',
    title: 'Digital Marketing & Sales',
    subtitle: 'Growth Strategist & Client Solutions Lead',
    type: 'Full-time / On-site / Hybrid',
    location: 'Erode, Tamil Nadu / Hybrid',
    icon: TrendingUp,
    gradient: 'from-emerald-500/20 via-teal-500/20 to-green-500/20',
    borderGradient: 'border-emerald-500/30',
    accentColor: 'text-emerald-400',
    description:
      'Drive customer acquisition, brand amplification, performance marketing campaigns, strategic sales pipelines, and executive client relationships across target industries.',
    skills: ['Performance Marketing', 'SEO & SEM', 'B2B Sales Pipeline', 'Content Strategy', 'HubSpot / CRM', 'Analytics & ROI Tracking'],
    responsibilities: [
      'Formulate and execute comprehensive multi-channel digital marketing campaigns.',
      'Generate high-quality enterprise leads and nurture B2B client relationships.',
      'Optimize SEO rankings, paid advertising campaigns, and content conversion funnels.',
      'Analyze performance analytics, CAC, and ROI metrics to scale growth strategies.',
    ],
  },
];

export default function Careers() {
  const formRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Developer',
    experience: '',
    location: '',
    linkedin: '',
    portfolio: '',
    availability: '',
    expectedSalary: '',
    coverLetter: '',
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // '' | 'sending' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // Handle position select & smooth scroll to form
  const handleSelectPosition = (posTitle) => {
    setFormData((prev) => ({ ...prev, position: posTitle }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Input change handler with real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Inline field validation
    let error = '';
    if (name === 'fullName') {
      if (value.trim() && value.trim().length < 2) error = 'Full Name must be at least 2 characters';
      else if (/\d/.test(value)) error = 'Name should not contain numbers';
    }
    if (name === 'email') {
      if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email address';
    }
    if (name === 'phone') {
      if (value.trim() && value.trim().length < 7) error = 'Please enter a valid contact number';
    }
    if (name === 'coverLetter') {
      if (value.trim() && value.trim().length < 10) error = 'Cover letter / message must be at least 10 characters';
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Resume File Handler (Validation for PDF/DOC/DOCX and <= 5MB)
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedExtensions = ['pdf', 'doc', 'docx'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const maxSizeBytes = 5 * 1024 * 1024; // 5 MB

    if (!allowedExtensions.includes(fileExtension)) {
      setErrors((prev) => ({
        ...prev,
        resume: 'Invalid file format. Please upload a PDF, DOC, or DOCX document.',
      }));
      setResumeFile(null);
      return;
    }

    if (file.size > maxSizeBytes) {
      setErrors((prev) => ({
        ...prev,
        resume: `File exceeds maximum limit of 5 MB (${(file.size / (1024 * 1024)).toFixed(2)} MB uploaded).`,
      }));
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
    setErrors((prev) => ({ ...prev, resume: '' }));
  };

  const removeResume = () => {
    setResumeFile(null);
    setErrors((prev) => ({ ...prev, resume: 'Resume is required' }));
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    else if (formData.fullName.trim().length < 2) newErrors.fullName = 'Full Name must be at least 2 characters';
    else if (/\d/.test(formData.fullName)) newErrors.fullName = 'Name should not contain numbers';

    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email address is required';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (formData.phone.trim().length < 7) newErrors.phone = 'Please enter a valid phone number';

    if (!formData.position) newErrors.position = 'Please select a position';

    if (!resumeFile) {
      newErrors.resume = 'Resume document (*.pdf, *.doc, *.docx) is required';
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Cover letter or message is required';
    } else if (formData.coverLetter.trim().length < 10) {
      newErrors.coverLetter = 'Cover letter must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');
    setStatusMessage('');

    // Environment Variables (Client Keys only, NO private credentials in frontend)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_rxycj4g';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_yvu62eo';
    const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID || 'template_1jbggx8';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'hW784qW3T9gdNIid6';

    const submissionTimestamp = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const resumeReference = resumeFile
      ? `${resumeFile.name} (${(resumeFile.size / (1024 * 1024)).toFixed(2)} MB, ${resumeFile.type || 'Document'})`
      : 'No file provided';

    // EmailJS Template Parameters matching the exact specifications
    const templateParams = {
      applicant_name: formData.fullName.trim(),
      applicant_email: formData.email.trim(),
      applicant_phone: formData.phone.trim(),
      position: formData.position,
      experience: formData.experience.trim() || 'Not specified',
      location: formData.location.trim() || 'Not specified',
      linkedin: formData.linkedin.trim() || 'Not provided',
      portfolio: formData.portfolio.trim() || 'Not provided',
      availability: formData.availability.trim() || 'Immediate / Flexible',
      expected_salary: formData.expectedSalary.trim() || 'Not specified',
      cover_letter: formData.coverLetter.trim(),
      resume: resumeReference,
      submitted_at: submissionTimestamp,
    };

    try {
      if (publicKey && publicKey !== 'YOUR_PUBLIC_KEY') {
        // Send Admin Notification to hr@ngstellar.com via EmailJS
        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        // Optionally send Applicant Auto-Reply confirmation if template configured
        if (autoReplyTemplateId && autoReplyTemplateId !== 'YOUR_AUTO_REPLY_TEMPLATE_ID') {
          try {
            await emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey);
          } catch (autoErr) {
            console.warn('Applicant auto-reply notification skipped or pending template config:', autoErr);
          }
        }
      } else {
        // Mock success fallback for preview when public key is waiting configuration
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setSubmittedData({
        name: formData.fullName.trim(),
        position: formData.position,
        email: formData.email.trim(),
        resumeName: resumeFile?.name,
      });

      setStatus('success');
      setStatusMessage('Your application has been received successfully! Our HR team will review your profile.');

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: 'Developer',
        experience: '',
        location: '',
        linkedin: '',
        portfolio: '',
        availability: '',
        expectedSalary: '',
        coverLetter: '',
      });
      setResumeFile(null);
      setErrors({});
    } catch (err) {
      console.error('EmailJS submission error:', err);
      setStatus('error');
      const errDetail = err?.text || err?.message || 'Failed to submit application. Please try again or email hr@ngstellar.com.';
      setStatusMessage(errDetail);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>Careers at NG Stellar — Join Our Team</title>
        <meta
          name="description"
          content="Join NG Stellar. Explore career opportunities for Developers, Designers, and Digital Marketing & Sales professionals."
        />
        <meta
          name="keywords"
          content="NG Stellar Careers, Developer Jobs, UI UX Designer, Digital Marketing, Tech Jobs, Advisory Careers"
        />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20">
        {/* Background Glowing Ambient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-600 rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-pulse"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary-600 rounded-full mix-blend-screen filter blur-[120px] opacity-70"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 text-primary-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-secondary-400 animate-pulse" />
            We Are Hiring
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            <span>Build What Matters with</span>
            <span className="block mt-2">
              <Typewriter
                words={['Passionate', 'Curious', 'Visionary', 'Impact-Driven']}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400"
                wait={2200}
              />
            </span>
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl text-slate-300 font-medium">
              Teams Transforming Global Enterprises.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            At NG Stellar, we solve high-stakes challenges at the intersection of business strategy, technology, and sustainability. Explore our open roles and accelerate your career.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#open-roles"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition-all hover:brightness-110 hover:scale-105 active:scale-95"
            >
              <span>View Open Roles</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#apply-form"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              Direct Application
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. OPEN ROLES SECTION */}
      <section id="open-roles" className="py-16 md:py-24 bg-slate-900/40 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Join Our Multidisciplinary Advisory Team
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Select a position below to apply directly. We offer collaborative environments, challenging projects, and continuous growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {POSITIONS.map((pos) => {
              const Icon = pos.icon;
              return (
                <motion.div
                  key={pos.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${pos.gradient} backdrop-blur-xl border ${pos.borderGradient} shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all hover:translate-y-[-4px] hover:shadow-primary-500/10 group`}
                >
                  <div>
                    {/* Role Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                        <Icon className={`w-6 h-6 ${pos.accentColor}`} />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-slate-300 border border-white/10">
                        {pos.type}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {pos.title}
                    </h3>
                    <p className={`text-xs font-semibold ${pos.accentColor} mb-4`}>
                      {pos.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-5">
                      {pos.description}
                    </p>

                    {/* Key Skills */}
                    <div className="mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Core Competencies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {pos.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900/60 border border-white/10 text-slate-300 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6 space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Key Impact Areas
                      </div>
                      {pos.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${pos.accentColor} flex-shrink-0 mt-0.5`} />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Apply Action Button */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => handleSelectPosition(pos.title)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-slate-900/80 hover:bg-white hover:text-slate-950 border border-white/20 hover:border-white transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-md`}
                    >
                      <span>Apply for {pos.title}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CULTURE & EXPECTATIONS */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              What You Can Expect at NG Stellar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Meaningful Projects', desc: 'Work on strategic transformations that solve genuine enterprise and sustainability challenges.', icon: <FaRocket /> },
              { title: 'Collaborative Culture', desc: 'A transparent, respectful ecosystem where multidisciplinary ideas flourish together.', icon: <FaUsers /> },
              { title: 'Continuous Growth', desc: 'Dedicated mentorship, hands-on enterprise exposure, and technical upskilling opportunities.', icon: <FaLightbulb /> },
              { title: 'Clear Communication', desc: 'Direct, honest feedback loops, well-defined milestones, and respect for delivery commitments.', icon: <FaHandshake /> },
              { title: 'Quality Over Shortcuts', desc: 'We take pride in engineering scalable, robust solutions designed for long-term endurance.', icon: <FaCheckCircle /> },
              { title: 'Empowered Ownership', desc: 'Take autonomous ownership of outcomes and guide strategic decisions from inception to deployment.', icon: <FaDraftingCompass /> },
            ].map((card, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm hover:border-primary-500/40 transition-all hover:-translate-y-1"
              >
                <div className="text-primary-400 text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MARQUEE WHO FITS IN */}
      <section className="py-16 overflow-hidden bg-slate-900/30 border-y border-white/5">
        <div className="text-center mb-10 px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Who Thrives at NG Stellar?</h3>
        </div>
        <div className="space-y-6">
          <Marquee speed={0.25} direction="left" className="flex overflow-hidden relative w-full">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-4 pr-4">
                {['Developers', 'Designers', 'Growth Strategists', 'Product Thinkers', 'Problem Solvers', 'Tech Enthusiasts', 'Collaborators'].map((role, idx) => (
                  <div key={idx} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-slate-300 whitespace-nowrap">
                    {role}
                  </div>
                ))}
              </div>
            ))}
          </Marquee>
          <Marquee speed={0.25} direction="right" className="flex overflow-hidden relative w-full">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-4 pr-4">
                {['Outcome Focused', 'Design Obsessed', 'Clean Architecture', 'Continuous Learners', 'Accountable', 'Ethical Advisors'].map((val, idx) => (
                  <div key={idx} className="px-5 py-2.5 rounded-full border border-primary-500/20 bg-primary-500/5 text-sm font-medium text-primary-300 whitespace-nowrap">
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* 5. STATEMENT */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <StarBorder as="div" className="w-full text-center p-8 sm:p-14 bg-slate-900/50 backdrop-blur-md rounded-3xl" color="#335fa8" speed="4s">
            <blockquote className="text-xl sm:text-3xl font-serif italic text-slate-200 leading-snug mb-6">
              &quot;Transform the Business. Sustain the Impact. We look for people who are willing to learn, take responsibility, and grow with the team.&quot;
            </blockquote>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-400">
              — NG Stellar Leadership
            </p>
          </StarBorder>
        </motion.div>
      </section>

      {/* 6. APPLICATION FORM SECTION */}
      <section id="apply-form" ref={formRef} className="py-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-wider mb-3">
              Application Portal
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Apply to Join NG Stellar
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              Fill out the application below. Your information will be directly reviewed by our leadership and HR team (<span className="text-primary-300">hr@ngstellar.com</span>).
            </p>
          </div>

          <div
            className="rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.7)] backdrop-blur-2xl border border-white/12 bg-slate-950/90"
          >
            {/* Success Feedback Alert */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-8 p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 flex items-start gap-4"
                >
                  <CheckCircle2 className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-emerald-300 mb-1">
                      Application Submitted Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed mb-3">
                      {statusMessage}
                    </p>
                    {submittedData && (
                      <div className="text-xs space-y-1 text-emerald-300/80 bg-black/20 p-3 rounded-lg border border-emerald-500/20">
                        <div><strong>Applicant:</strong> {submittedData.name} ({submittedData.email})</div>
                        <div><strong>Position:</strong> {submittedData.position}</div>
                        {submittedData.resumeName && <div><strong>Resume:</strong> {submittedData.resumeName}</div>}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Feedback Alert */}
            <AnimatePresence>
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-8 p-5 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-200 flex items-start gap-3.5"
                >
                  <AlertCircle className="w-6 h-6 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-rose-300 mb-1">
                      Submission Notice
                    </h4>
                    <p className="text-xs text-rose-200/90 leading-relaxed">
                      {statusMessage || 'Unable to submit application at this time. Please retry or contact hr@ngstellar.com directly.'}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name <span className="text-primary-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border ${
                      errors.fullName ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/10 focus:ring-primary-500'
                    } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                  />
                  {errors.fullName && (
                    <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address <span className="text-primary-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border ${
                      errors.email ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/10 focus:ring-primary-500'
                    } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone Number & Target Position */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-primary-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border ${
                      errors.phone ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/10 focus:ring-primary-500'
                    } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                  />
                  {errors.phone && (
                    <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Position Applied For <span className="text-primary-400">*</span>
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-900/90 border ${
                      errors.position ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/10 focus:ring-primary-500'
                    } text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                  >
                    <option value="Developer" className="bg-slate-900 text-white">Developer</option>
                    <option value="Designer" className="bg-slate-900 text-white">Designer</option>
                    <option value="Digital Marketing & Sales" className="bg-slate-900 text-white">Digital Marketing & Sales</option>
                  </select>
                  {errors.position && (
                    <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.position}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Experience & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="e.g. 2+ Years / Fresher"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Current Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="e.g. Erode / Coimbatore / Remote"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Row 4: LinkedIn & Portfolio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Portfolio / GitHub / Website
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="https://yourportfolio.com or github.com/..."
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Row 5: Availability & Expected Salary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Availability / Notice Period
                  </label>
                  <input
                    type="text"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="e.g. Immediate / 15 Days / 1 Month"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Expected Salary / Compensation
                  </label>
                  <input
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    placeholder="e.g. Expected CTC (INR / Per Annum)"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Resume File Upload Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Resume / CV Document <span className="text-primary-400">* (PDF, DOC, DOCX — Max 5MB)</span>
                </label>
                <div
                  className={`relative rounded-2xl border-2 border-dashed ${
                    errors.resume
                      ? 'border-rose-500/70 bg-rose-950/10'
                      : resumeFile
                      ? 'border-primary-500/60 bg-primary-950/20'
                      : 'border-white/15 bg-slate-900/50 hover:border-primary-400/50 hover:bg-slate-900/80'
                  } p-5 transition-all text-center`}
                >
                  {resumeFile ? (
                    <div className="flex items-center justify-between gap-3 p-2 bg-slate-900/90 rounded-xl border border-white/10">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-primary-500/20 text-primary-300 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="text-left min-w-0">
                          <p className="text-xs sm:text-sm font-semibold text-white truncate">
                            {resumeFile.name}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeResume}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="file"
                        id="resume-upload"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        disabled={status === 'sending'}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="cursor-pointer flex flex-col items-center justify-center gap-2 py-4"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/20 text-primary-400 flex items-center justify-center">
                          <UploadCloud className="w-6 h-6" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          Click to upload your resume
                        </span>
                        <span className="text-[11px] text-slate-400">
                          Supported formats: PDF, DOC, DOCX up to 5 MB
                        </span>
                      </label>
                    </div>
                  )}
                </div>
                {errors.resume && (
                  <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.resume}
                  </p>
                )}
              </div>

              {/* Cover Letter / Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Cover Letter / Introduction <span className="text-primary-400">*</span>
                </label>
                <textarea
                  rows={4}
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  placeholder="Tell us about yourself, your experience, and why you are excited to join NG Stellar..."
                  className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border ${
                    errors.coverLetter ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/10 focus:ring-primary-500'
                  } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none disabled:opacity-50`}
                />
                {errors.coverLetter && (
                  <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.coverLetter}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 hover:brightness-110 shadow-lg shadow-primary-500/25 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Career Application</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-3">
                  Applications are routed directly to NG Stellar Talent Acquisition (<span className="text-slate-400">hr@ngstellar.com</span>).
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
