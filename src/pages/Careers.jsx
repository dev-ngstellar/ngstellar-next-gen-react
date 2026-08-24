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
import { isValidEmail, isValidIndianMobile, normalizePhone, isValidUrl } from '../utils/validation';

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
  const fullNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const positionInputRef = useRef(null);
  const linkedinInputRef = useRef(null);
  const portfolioInputRef = useRef(null);
  const resumeInputRef = useRef(null);
  const coverLetterInputRef = useRef(null);

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

  const validateField = (name, value) => {
    const val = (value || '').trim();
    switch (name) {
      case 'fullName':
        if (!val) return 'Please enter your full name.';
        return '';
      case 'email':
        if (!val || !isValidEmail(val)) return 'Please enter a valid email address.';
        return '';
      case 'phone':
        if (!val) return 'Phone number is required.';
        if (!/^[6-9]\d{9}$/.test(val)) return 'Please enter a valid 10-digit mobile number.';
        return '';
      case 'position':
        if (!val) return 'Please select a position.';
        return '';
      case 'linkedin':
        if (val && !isValidUrl(val)) return 'Please enter a valid URL.';
        return '';
      case 'portfolio':
        if (val && !isValidUrl(val)) return 'Please enter a valid URL.';
        return '';
      case 'coverLetter':
        if (!val) return 'Please enter your cover letter or introduction.';
        return '';
      default:
        return '';
    }
  };

  // Blur handler for fields
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Dedicated phone input handler: strictly extracts only digits (0-9) and limits to 10 characters
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));

    // Clear error immediately if it becomes valid or revalidate if previously in error
    if (errors.phone) {
      const error = validateField('phone', value);
      setErrors((prev) => ({ ...prev, phone: error }));
    }
  };

  // Input change handler with real-time error removal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // When the user enters a valid value after an error, immediately remove the error
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
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
    setErrors((prev) => ({ ...prev, resume: 'Resume document (*.pdf, *.doc, *.docx) is required' }));
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};

    const nameErr = validateField('fullName', formData.fullName);
    if (nameErr) newErrors.fullName = nameErr;

    const emailErr = validateField('email', formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validateField('phone', formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const posErr = validateField('position', formData.position);
    if (posErr) newErrors.position = posErr;

    const linkedinErr = validateField('linkedin', formData.linkedin);
    if (linkedinErr) newErrors.linkedin = linkedinErr;

    const portfolioErr = validateField('portfolio', formData.portfolio);
    if (portfolioErr) newErrors.portfolio = portfolioErr;

    if (!resumeFile) {
      newErrors.resume = 'Resume document (*.pdf, *.doc, *.docx) is required';
    }

    const coverErr = validateField('coverLetter', formData.coverLetter);
    if (coverErr) newErrors.coverLetter = coverErr;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Focus first invalid field
      if (newErrors.fullName && fullNameInputRef.current) {
        fullNameInputRef.current.focus();
      } else if (newErrors.email && emailInputRef.current) {
        emailInputRef.current.focus();
      } else if (newErrors.phone && phoneInputRef.current) {
        phoneInputRef.current.focus();
      } else if (newErrors.position && positionInputRef.current) {
        positionInputRef.current.focus();
      } else if (newErrors.linkedin && linkedinInputRef.current) {
        linkedinInputRef.current.focus();
      } else if (newErrors.portfolio && portfolioInputRef.current) {
        portfolioInputRef.current.focus();
      } else if (newErrors.resume && resumeInputRef.current) {
        resumeInputRef.current.focus();
        resumeInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (newErrors.coverLetter && coverLetterInputRef.current) {
        coverLetterInputRef.current.focus();
      }
      return false;
    }
    return true;
  };

  // Submit Handler with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
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

    const normalizedPhone = normalizePhone(formData.phone) || formData.phone.trim();

    // EmailJS Template Parameters matching the exact specifications
    const templateParams = {
      applicant_name: formData.fullName.trim(),
      applicant_email: formData.email.trim(),
      applicant_phone: normalizedPhone,
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
      <section className="relative overflow-hidden flex items-center justify-center pt-[32px] sm:pt-[40px] lg:pt-[48px] pb-12 md:pb-16">
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 text-primary-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-secondary-400 animate-pulse" />
            We Are Hiring
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-5 leading-tight tracking-tight">
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

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name <span className="text-primary-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    ref={fullNameInputRef}
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'sending'}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border ${
                      errors.fullName ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/10 focus:ring-primary-500'
                    } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" role="alert" className="text-rose-400 text-xs mt-1.5 flex items-center gap-1.5 font-medium leading-tight">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address <span className="text-primary-400">*</span>
                  </label>
                  <input
                    id="email"
                    ref={emailInputRef}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'sending'}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border ${
                      errors.email ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/10 focus:ring-primary-500'
                    } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-rose-400 text-xs mt-1.5 flex items-center gap-1.5 font-medium leading-tight">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone Number & Target Position */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-primary-400">*</span>
                  </label>
                  <input
                    id="phone"
                    ref={phoneInputRef}
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    pattern="[0-9]*"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={handleBlur}
                    disabled={status === 'sending'}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border ${
                      errors.phone ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/10 focus:ring-primary-500'
                    } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                  />
                  {errors.phone && (
                    <p id="phone-error" role="alert" className="text-rose-400 text-xs mt-1.5 flex items-center gap-1.5 font-medium leading-tight">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="position" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Position Applied For <span className="text-primary-400">*</span>
                  </label>
                  <select
                    id="position"
                    ref={positionInputRef}
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'sending'}
                    aria-invalid={Boolean(errors.position)}
                    aria-describedby={errors.position ? 'position-error' : undefined}
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-900/90 border ${
                      errors.position ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/10 focus:ring-primary-500'
                    } text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                  >
                    <option value="Developer" className="bg-slate-900 text-white">Developer</option>
                    <option value="Designer" className="bg-slate-900 text-white">Designer</option>
                    <option value="Digital Marketing & Sales" className="bg-slate-900 text-white">Digital Marketing & Sales</option>
                  </select>
                  {errors.position && (
                    <p id="position-error" role="alert" className="text-rose-400 text-xs mt-1.5 flex items-center gap-1.5 font-medium leading-tight">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.position}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Experience & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
                <div>
                  <label htmlFor="experience" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Years of Experience
                  </label>
                  <input
                    id="experience"
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'sending'}
                    placeholder="e.g. 2+ Years / Fresher"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Current Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'sending'}
                    placeholder="e.g. Erode / Coimbatore / Remote"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Row 4: LinkedIn & Portfolio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
                <div>
                  <label htmlFor="linkedin" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    id="linkedin"
                    ref={linkedinInputRef}
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'sending'}
                    aria-invalid={Boolean(errors.linkedin)}
                    aria-describedby={errors.linkedin ? 'linkedin-error' : undefined}
                    placeholder="https://linkedin.com/in/username"
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border ${
                      errors.linkedin ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/10 focus:ring-primary-500'
                    } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                  />
                  {errors.linkedin && (
                    <p id="linkedin-error" role="alert" className="text-rose-400 text-xs mt-1.5 flex items-center gap-1.5 font-medium leading-tight">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.linkedin}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Portfolio / GitHub / Website
                  </label>
                  <input
                    id="portfolio"
                    ref={portfolioInputRef}
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'sending'}
                    aria-invalid={Boolean(errors.portfolio)}
                    aria-describedby={errors.portfolio ? 'portfolio-error' : undefined}
                    placeholder="https://yourportfolio.com or github.com/..."
                    className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border ${
                      errors.portfolio ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/10 focus:ring-primary-500'
                    } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all disabled:opacity-50`}
                  />
                  {errors.portfolio && (
                    <p id="portfolio-error" role="alert" className="text-rose-400 text-xs mt-1.5 flex items-center gap-1.5 font-medium leading-tight">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.portfolio}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 5: Availability & Expected Salary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
                <div>
                  <label htmlFor="availability" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Availability / Notice Period
                  </label>
                  <input
                    id="availability"
                    type="text"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status === 'sending'}
                    placeholder="e.g. Immediate / 15 Days / 1 Month"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="expectedSalary" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Expected Salary / Compensation
                  </label>
                  <input
                    id="expectedSalary"
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                  tabIndex={0}
                  ref={resumeInputRef}
                  aria-invalid={Boolean(errors.resume)}
                  aria-describedby={errors.resume ? 'resume-error' : undefined}
                  className={`relative rounded-2xl border-2 border-dashed ${
                    errors.resume
                      ? 'border-rose-500/70 bg-rose-950/10'
                      : resumeFile
                      ? 'border-primary-500/60 bg-primary-950/20'
                      : 'border-white/15 bg-slate-900/50 hover:border-primary-400/50 hover:bg-slate-900/80'
                  } p-5 transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary-500`}
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
                  <p id="resume-error" role="alert" className="text-rose-400 text-xs mt-1.5 flex items-center gap-1.5 font-medium leading-tight">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.resume}</span>
                  </p>
                )}
              </div>

              {/* Cover Letter / Message */}
              <div>
                <label htmlFor="coverLetter" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Cover Letter / Introduction <span className="text-primary-400">*</span>
                </label>
                <textarea
                  id="coverLetter"
                  ref={coverLetterInputRef}
                  rows={4}
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={status === 'sending'}
                  aria-invalid={Boolean(errors.coverLetter)}
                  aria-describedby={errors.coverLetter ? 'coverLetter-error' : undefined}
                  placeholder="Tell us about yourself, your experience, and why you are excited to join NG Stellar..."
                  className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-900/70 border ${
                    errors.coverLetter ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/10 focus:ring-primary-500'
                  } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none disabled:opacity-50`}
                />
                {errors.coverLetter && (
                  <p id="coverLetter-error" role="alert" className="text-rose-400 text-xs mt-1.5 flex items-center gap-1.5 font-medium leading-tight">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errors.coverLetter}</span>
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
                      <span>Submitting...</span>
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
