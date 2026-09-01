import { useState } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Building2,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  ShieldCheck,
  Cpu,
  Layers,
  Globe
} from 'lucide-react';
import SEO from '../components/SEO';
import { LOCATIONS_DATA } from '../data/locationsContent';
import ErodeHubView from '../components/locations/ErodeHubView';

export default function LocationPage({ cityKey }) {
  const location = useLocation();
  const params = useParams();
  
  // Resolve city data
  const slug = cityKey || params.city || location.pathname.split('/').pop() || 'erode';
  const data = LOCATIONS_DATA[slug] || LOCATIONS_DATA['erode'];

  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  // If viewing Erode Hub, render specialized Business, Compliance & Advisory Hub view
  if (slug === 'erode' || data.slug === 'erode') {
    return <ErodeHubView data={data} />;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations/erode' },
    { name: data.city, url: data.route }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-primary-500/30 pb-20">
      {/* Local SEO & Structured Data */}
      <SEO
        title={data.metaTitle.replace(' | NG Stellar', '')}
        description={data.metaDescription}
        canonicalUrl={data.route}
        breadcrumbs={breadcrumbs}
        localBusinessData={{
          city: data.city,
          state: data.state,
          streetAddress: data.nap.address,
          phone: data.nap.phone,
          email: data.nap.email,
          postalCode: data.slug === 'erode' ? '638002' : '641001'
        }}
        faqs={data.faqs}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
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

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-xl font-bold bg-gradient-to-r from-primary-300 via-secondary-300 to-emerald-300 bg-clip-text text-transparent mb-6 max-w-3xl"
          >
            {data.tagline}
          </motion.div>

          {/* Local Context Intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8"
          >
            {data.localContext}
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-600/30 transition-all hover:brightness-110 hover:scale-105 active:scale-95 cursor-pointer"
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

      {/* 2. REGIONAL INDUSTRIES WE EMPOWER */}
      <section className="py-16 md:py-20 bg-slate-900/40 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Regional Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Industries We Power in {data.city}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Deep operational understanding of {data.city}’s primary commercial sectors and supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.coreIndustries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-white/10 shadow-lg hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-200 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-slate-300/90 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TAILORED SERVICES FOR THE REGION */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Local Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Technology & Transformation Services in {data.city}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Customized digital solutions designed to modernize local operations and accelerate commercial reach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.localServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.href}
                className="p-7 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-primary-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-primary-400 group-hover:text-white flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMON LOCAL CHALLENGES WE ELIMINATE */}
      <section className="py-16 md:py-20 bg-slate-900/40 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Operational Realities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Operational Challenges Facing Growing {data.city} Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.commonChallenges.map((ch, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-rose-500/30 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                  <AlertCircle className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{ch.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VERIFIED NAP & CONTACT DETAILS */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-wider mb-4">
                  Local Presence & Contact
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Partner with NG Stellar in {data.city}
                </h2>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  We are available for in-person strategic consultations, on-site operational health checks, and technology implementation planning across {data.city} and surrounding industrial clusters.
                </p>

                <div className="space-y-3.5 text-sm">
                  <div className="flex items-start gap-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Address:</strong> {data.nap.address}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <div>
                      <strong>Phone:</strong> {data.nap.phone}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <div>
                      <strong>Email:</strong> {data.nap.email}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <div>
                      <strong>Hours:</strong> {data.nap.hours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Box */}
              <div className="p-7 rounded-2xl bg-slate-950/70 border border-primary-500/30 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Schedule an On-Ground Discovery Meeting
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6">
                    Let’s evaluate your current operating model and build an actionable digital transformation roadmap for your {data.city} business.
                  </p>
                </div>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-primary-600 via-primary-500 to-emerald-600 hover:brightness-110 flex items-center justify-center gap-2 shadow-lg shadow-primary-600/30 transition-all cursor-pointer"
                  >
                    <span>Start a Transformation Conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/transformation-health-check"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-300 hover:text-white bg-slate-900 border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Request an Executive Health Check</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOCAL FAQS */}
      <section className="py-16 md:py-20 bg-slate-900/40 border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
              {data.city} FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Frequently Asked Questions in {data.city}
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

      {/* 7. CROSS-LOCATION NAVIGATION */}
      <section className="py-12 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center items-center gap-4">
          <span>Explore NG Stellar in other regions:</span>
          {data.slug === 'erode' ? (
            <Link to="/locations/coimbatore" className="text-primary-400 font-semibold hover:underline">
              Technology & Software Partner in Coimbatore →
            </Link>
          ) : (
            <Link to="/locations/erode" className="text-primary-400 font-semibold hover:underline">
              Digital Transformation & Automation in Erode →
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
