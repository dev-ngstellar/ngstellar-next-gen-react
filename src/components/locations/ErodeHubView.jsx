import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Building2,
  CheckCircle2,
  FileText,
  FileCheck,
  ShieldCheck,
  Search,
  UserCheck,
  TrendingUp,
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';
import SEO from '../SEO';

export default function ErodeHubView({ data }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations/erode' },
    { name: 'Erode Hub', url: '/locations/erode' }
  ];

  // Core service icons mapping
  const serviceIcons = [
    Building2,
    FileCheck,
    ShieldCheck,
    Search,
    UserCheck,
    TrendingUp
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-emerald-500/30 pb-16 overflow-x-hidden">
      {/* 1. SEO & Structured Data */}
      <SEO
        title="Business Registration & Compliance Services in Erode"
        description="Business registration, documentation, compliance, audit, due diligence, verification and advisory support for businesses in Erode."
        canonicalUrl="/locations/erode"
        breadcrumbs={breadcrumbs}
        localBusinessData={{
          city: 'Erode',
          state: 'Tamil Nadu',
          streetAddress: data.nap.address,
          phone: data.nap.phone,
          email: data.nap.email,
          postalCode: '638002'
        }}
        faqs={data.faqs}
      />

      {/* 2. HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-teal-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-15 pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center sm:justify-start gap-2 text-xs font-medium text-slate-400 mb-6 flex-wrap">
            {breadcrumbs.map((b, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-600" />}
                {b.url && idx < breadcrumbs.length - 1 ? (
                  <Link to={b.url} className="hover:text-emerald-300 transition-colors">
                    {b.name}
                  </Link>
                ) : (
                  <span className="text-emerald-300 font-semibold">{b.name}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-5"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{data.badge}</span>
          </motion.div>

          {/* H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 max-w-4xl"
          >
            {data.h1}
          </motion.h1>

          {/* Short Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8"
          >
            {data.heroDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-4"
          >
            <Link
              to={data.heroCtas.primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:brightness-110 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{data.heroCtas.primary}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={data.heroCtas.secondaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-white/5 hover:bg-white/10 px-7 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{data.heroCtas.secondary}</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. BUSINESS SUPPORT JOURNEY (Main Visual Process) */}
      <section className="py-14 sm:py-18 bg-slate-900/50 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
              Structured Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Our Business Support Journey
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              A structured, step-by-step path from initial requirement to long-term operational support.
            </p>
          </div>

          {/* Desktop Connected 3x3 Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-5">
            {data.supportJourney.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-emerald-500/40 shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    {idx < data.supportJourney.length - 1 && (
                      <span className="text-[11px] text-slate-500 group-hover:text-emerald-400 transition-colors flex items-center gap-0.5 font-medium">
                        Next <ChevronRight className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="md:hidden space-y-3.5 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500/60 before:to-emerald-500/10">
            {data.supportJourney.map((item, idx) => (
              <div key={idx} className="relative pl-9">
                <div className="absolute left-2 top-4 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950" />
                <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 shadow-md">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[11px] font-bold text-emerald-400">Step {item.step}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES (6 Compact Cards) */}
      <section className="py-14 sm:py-18 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Core Business & Compliance Services
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Comprehensive support designed to address key operational, statutory, and advisory needs in Erode.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.coreServices.map((svc, idx) => {
              const Icon = serviceIcons[idx] || CheckCircle2;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-200 shadow-md group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ONGOING SUPPORT */}
      <section className="py-12 bg-slate-900/40 border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
            Long-Term Partnership
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            {data.ongoingSupport.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {data.ongoingSupport.content}
          </p>
        </div>
      </section>

      {/* 6. WHO WE SUPPORT (3 Compact Cards) */}
      <section className="py-14 sm:py-18 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
              Client Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Who We Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.whoWeSupport.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 transition-all shadow-md text-left"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3.5">
                  <Building2 className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY ERODE HUB */}
      <section className="py-12 bg-slate-900/40 border-y border-white/5 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
            Local Value
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            {data.whyErodeHub.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {data.whyErodeHub.content}
          </p>
        </div>
      </section>

      {/* 8. FAQ (4 Short FAQs) */}
      <section className="py-14 sm:py-18 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
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
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-emerald-300 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
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
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
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

      {/* 9. FINAL CTA */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-slate-900/70 to-slate-950 border-t border-white/5 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            {data.cta.headline}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-7">
            {data.cta.subtext}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to={data.cta.primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:brightness-110 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{data.cta.primary}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CROSS-LOCATION LINK */}
      <section className="py-8 text-center text-xs text-slate-400 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center items-center gap-6">
          <span>Explore regional hubs:</span>
          <Link to="/locations/coimbatore" className="text-primary-400 font-semibold hover:underline flex items-center gap-1">
            <span>Coimbatore Technology & Software Hub</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <Link to="/contact" className="text-emerald-400 font-semibold hover:underline flex items-center gap-1">
            <span>Contact Erode Office</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>
    </div>
  );
}
