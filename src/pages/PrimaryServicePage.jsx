import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  Cpu,
  Workflow as WorkflowIcon,
  ShieldCheck,
  Zap,
  TrendingUp,
  Globe,
  Compass,
  FileCheck,
  Check
} from 'lucide-react';
import SEO from '../components/SEO';
import { PRIMARY_SERVICES } from '../data/servicePagesContent';

export default function PrimaryServicePage({ serviceKey }) {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/';
  
  // Resolve service data from prop or path
  const slug = serviceKey || currentPath.replace('/', '');
  const data = PRIMARY_SERVICES[slug] || PRIMARY_SERVICES['digital-transformation'];

  // State for active FAQ accordion
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Capabilities', url: '/capabilities' },
    { name: data.badge, url: data.route }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-primary-500/30 pb-20">
      {/* Comprehensive SEO & Schemas */}
      <SEO
        title={data.metaTitle.replace(' | NG Stellar', '')}
        description={data.metaDescription}
        canonicalUrl={data.route}
        breadcrumbs={breadcrumbs}
        schemaType="Service"
        serviceData={{
          name: data.h1,
          serviceType: data.badge
        }}
        faqs={data.faqs}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 md:pb-20 overflow-hidden">
        {/* Glowing Background Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-secondary-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-15 pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6 flex-wrap">
            {breadcrumbs.map((b, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-600" />}
                {b.url && idx < breadcrumbs.length - 1 ? (
                  <Link to={b.url} className="hover:text-primary-300 transition-colors">
                    {b.name}
                  </Link>
                ) : (
                  <span className="text-primary-300 font-semibold">{b.name}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-xs font-bold uppercase tracking-widest mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
            <span>{data.badge}</span>
          </motion.div>

          {/* H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] mb-5 max-w-4xl"
          >
            {data.h1}
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-xl font-bold bg-gradient-to-r from-primary-300 via-secondary-300 to-emerald-300 bg-clip-text text-transparent mb-6 max-w-3xl"
          >
            {data.tagline}
          </motion.div>

          {/* Buyer-focused intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8"
          >
            {data.buyerIntro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to={data.cta.primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-600/30 transition-all hover:brightness-110 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{data.cta.primary}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={data.cta.secondaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-7 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{data.cta.secondary}</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. BUSINESS PROBLEMS WE SOLVE */}
      <section className="py-16 md:py-20 bg-slate-900/40 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Friction Points
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {data.problemsHeading}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Real business obstacles that reduce productivity, stall growth, and drain operational profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.problems.map((prob, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg hover:border-rose-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-200 transition-colors">
                      {prob.title}
                    </h3>
                    <p className="text-sm text-slate-300/90 leading-relaxed">
                      {prob.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHO THIS IS FOR & WHEN TO ENGAGE */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Who It Is For */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Who This Service Is For</h3>
              </div>
              <ul className="space-y-4">
                {data.targetAudience.who.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When It Is Appropriate */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center text-secondary-400">
                  <WorkflowIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">When to Engage NG Stellar</h3>
              </div>
              <ul className="space-y-4">
                {data.targetAudience.when.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY (Discover -> Diagnose -> Design -> Connect -> Transform -> Sustain) */}
      <section className="py-16 md:py-24 bg-slate-900/50 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Delivery Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {data.methodologyHeading}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              {data.methodologyIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.methodology.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-lg bg-primary-500/20 text-primary-300 font-mono">
                      STAGE {m.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-primary-400 group-hover:scale-150 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICE SCOPE & DELIVERABLES */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Scope of Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              {data.scopeHeading}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Comprehensive capabilities executed with enterprise engineering standards and business precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.scope.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center text-secondary-400 mb-4">
                  <Check className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY & PLATFORM CAPABILITIES */}
      {data.techCapabilities && data.techCapabilities.length > 0 && (
        <section className="py-12 bg-slate-900/30 border-y border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-md">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-400 mb-1 block">
                  Tech Stack & Engineering
                </span>
                <h3 className="text-xl font-bold text-white">Modern, Scalable Architectures</h3>
              </div>
              <div className="flex flex-wrap gap-2.5 max-w-2xl">
                {data.techCapabilities.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. GROUNDED TRANSFORMATION CASE STUDY / PROOF */}
      {data.proofCaseStudy && (
        <section className="py-16 md:py-24 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900/90 to-primary-950/40 border border-primary-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-wider mb-4">
                Transformation Proof & Narrative
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
                {data.proofCaseStudy.headline}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5">
                    <span className="text-xs font-bold text-primary-400 uppercase tracking-wider block mb-1">
                      Business Context
                    </span>
                    <p className="text-slate-300 leading-relaxed">{data.proofCaseStudy.context}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5">
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">
                      Operational Challenge
                    </span>
                    <p className="text-slate-300 leading-relaxed">{data.proofCaseStudy.challenge}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5">
                    <span className="text-xs font-bold text-secondary-400 uppercase tracking-wider block mb-1">
                      NG Stellar Solution
                    </span>
                    <p className="text-slate-300 leading-relaxed">{data.proofCaseStudy.solution}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                      Business Impact Delivered
                    </span>
                    <p className="text-emerald-200/90 leading-relaxed">{data.proofCaseStudy.impact}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 flex-wrap gap-4">
                <p className="text-xs text-slate-400">
                  Real operational transformation engineered for lasting business value.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary-300 hover:text-white transition-colors"
                >
                  <span>Discuss a Similar Transformation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. FREQUENTLY ASKED QUESTIONS (Interactive Accordion) */}
      <section className="py-16 md:py-20 bg-slate-900/40 border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-primary-300 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. RELATED SERVICES & CROSS-LINKING */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Connected Capabilities
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Related Transformation Services</h3>
            </div>
            <Link
              to="/capabilities"
              className="text-xs font-semibold text-primary-300 hover:text-white flex items-center gap-1.5"
            >
              <span>View All Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.relatedServices.map((rel, i) => (
              <Link
                key={i}
                to={rel.href}
                className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-primary-500/40 hover:bg-slate-900 transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="text-sm font-bold text-white group-hover:text-primary-300 transition-colors mb-2">
                  {rel.title}
                </div>
                <div className="text-xs font-medium text-slate-400 group-hover:text-white flex items-center gap-1">
                  <span>Explore Capability</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-primary-950/80 via-slate-900 to-secondary-950/80 border border-primary-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-600/10 blur-[130px] pointer-events-none" />
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 relative z-10">
            Ready to Evaluate, Digitize, and Scale?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed relative z-10">
            Partner with NG Stellar to modernize your workflows, implement robust business systems, and sustain long-term competitive advantage.
          </p>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-primary-600/30 hover:brightness-110 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Start a Transformation Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/transformation-health-check"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Request a Health Check</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
