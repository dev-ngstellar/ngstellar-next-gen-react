import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Briefcase,
  Users,
  Workflow as WorkflowIcon,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Building,
  Leaf,
  Compass,
  Palette,
  Bot,
  Globe,
  Code,
  Sparkles,
  Gauge
} from 'lucide-react';
import Hero from '../components/Hero.jsx';

// Data for "What We Transform"
const transformAreas = [
  {
    title: 'Business Transformation',
    desc: 'We help businesses strengthen strategy, business models, growth opportunities, market positioning and organizational direction.',
    icon: Briefcase,
    route: '/transformation/business',
    badge: 'Strategy & Direction'
  },
  {
    title: 'People & Organization Transformation',
    desc: 'We help businesses improve organizational structures, role clarity, capabilities, productivity and leadership readiness.',
    icon: Users,
    route: '/transformation/people-organization',
    badge: 'People & Leadership'
  },
  {
    title: 'Process & Operational Transformation',
    desc: 'We identify process gaps, reduce inefficiencies, improve workflows and build practical operating systems.',
    icon: WorkflowIcon,
    route: '/transformation/process-operations',
    badge: 'Workflows & Operations'
  },
  {
    title: 'Technology Transformation',
    desc: 'We assess technology maturity and enable businesses through digital platforms, automation, AI, software, data and integrated systems.',
    icon: Cpu,
    route: '/transformation/technology',
    badge: 'Digital & AI'
  },
  {
    title: 'Sustainability Transformation',
    desc: 'We help organizations build economically viable, people-focused, responsible and resilient businesses.',
    icon: ShieldCheck,
    route: '/sustainability',
    badge: 'Long-Term Resilience'
  }
];

// Data for "Our Approach" Process in Section 1
const approachStages = [
  { step: '01', name: 'Discover', href: '/approach/discover' },
  { step: '02', name: 'Diagnose', href: '/approach/diagnose' },
  { step: '03', name: 'Design', href: '/approach/design' },
  { step: '04', name: 'Connect', href: '/approach/connect' },
  { step: '05', name: 'Transform', href: '/approach/transform' },
  { step: '06', name: 'Sustain', href: '/approach/sustain' }
];

// Data for "Why NG Stellar?" Process in Section 4
const whyStellarProcess = [
  'Understand',
  'Advise',
  'Connect',
  'Transform',
  'Measure',
  'Sustain'
];

// Data for "Our Capabilities" in Section 5
const capabilitiesList = [
  { title: 'Strategy & Research', icon: Compass, href: '/capabilities/strategy-research' },
  { title: 'Brand & Experience', icon: Palette, href: '/capabilities/brand-experience' },
  { title: 'Technology Transformation', icon: Cpu, href: '/capabilities/technology-transformation' },
  { title: 'AI & Automation', icon: Bot, href: '/capabilities/technology-transformation/ai-automation' },
  { title: 'Digital Platforms', icon: Cpu, href: '/capabilities/technology-transformation/digital-platforms' },
  { title: 'Digital Growth', icon: TrendingUp, href: '/capabilities/digital-growth' },
  { title: 'Website & Software Development', icon: Code, href: '/capabilities/technology-transformation/software-development' },
  { title: 'Digital Marketing', icon: Globe, href: '/capabilities/digital-growth/digital-marketing' }
];

// Data for "Sustainability" Pillars in Section 6
const sustainabilityPillars = [
  {
    title: 'Economic sustainability',
    desc: 'Building durable revenue models, financial viability, and long-term capital resilience.',
    icon: TrendingUp
  },
  {
    title: 'People & social sustainability',
    desc: 'Fostering workplace well-being, talent capability, and equitable organizational culture.',
    icon: Users
  },
  {
    title: 'Governance',
    desc: 'Establishing ethical oversight, risk management, and transparent operating policies.',
    icon: Building
  },
  {
    title: 'Environmental responsibility',
    desc: 'Operational resource efficiency, waste reduction, and responsible environmental stewardship.',
    icon: Leaf
  },
  {
    title: 'Business resilience',
    desc: 'Strengthening adaptive capacity to withstand market shifts, disruptions, and industry volatility.',
    icon: ShieldCheck
  }
];

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* 2. HOME SEO */}
      <Helmet>
        <title>NG Stellar | Transformation & Sustainability Advisory</title>
        <meta
          name="description"
          content="NG Stellar helps businesses transform through business, people, process and technology advisory, with sustainability, innovation and long-term growth at the core."
        />
        <meta property="og:title" content="NG Stellar | Transformation & Sustainability Advisory" />
        <meta
          property="og:description"
          content="NG Stellar helps businesses transform through business, people, process and technology advisory, with sustainability, innovation and long-term growth at the core."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ngstellar.com/" />
        <link rel="canonical" href="https://ngstellar.com/" />
      </Helmet>

      {/* 1. PRESERVED EXISTING HERO + ORIGINAL 3D ANIMATION */}
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32 py-12 sm:py-16">
        
        {/* ==================================================
            4. SECTION — FROM PROBLEM OR IDEA TO SUSTAINABLE IMPACT
            ================================================== */}
        <section className="relative rounded-[32px] p-[1.5px] overflow-hidden shadow-[0_40px_120px_rgba(10,16,40,0.9)] z-0">
          <div className="relative h-full w-full rounded-[30px] bg-gradient-to-b from-[#0b1024] via-[#050819] to-[#050716] p-8 sm:p-12 md:p-16 border border-slate-700/50">
            {/* Ambient Background Glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[30px] opacity-30"
              style={{
                background: 'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.25), transparent 70%)'
              }}
            />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 text-primary-200 text-xs font-medium uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                Our Advisory Foundation
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                From Problem or Idea to Sustainable Impact
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center pt-2">
                <p className="font-semibold text-slate-100">
                  Every business reaches a point where something needs to change.
                </p>
                <p className="text-slate-300">
                  It could be a growth challenge, inefficient process, people dependency, outdated technology, a new business idea, market opportunity or the need to build a more resilient and sustainable organization.
                </p>
                <p className="text-slate-300">
                  NG Stellar brings together business thinking, people, processes, technology and the right ecosystem to help businesses move from problem or idea to sustainable impact.
                </p>
              </div>

              {/* Subheading & Process Steps */}
              <div className="pt-8 border-t border-white/10 space-y-6">
                <h3 className="text-xs sm:text-sm font-bold text-secondary-400 uppercase tracking-widest">
                  Our approach
                </h3>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  {approachStages.map((stage, idx) => (
                    <div key={stage.name} className="flex items-center">
                      <Link
                        to={stage.href}
                        className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-primary-500/20 border border-white/10 hover:border-primary-500/40 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-all shadow-md group cursor-pointer"
                      >
                        <span className="text-[10px] font-mono font-bold text-primary-400 group-hover:text-primary-300">
                          {stage.step}
                        </span>
                        <span>{stage.name}</span>
                      </Link>
                      {idx < approachStages.length - 1 && (
                        <span className="text-slate-600 font-bold px-1.5 sm:px-2 select-none">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            5. SECTION — WHAT WE TRANSFORM
            ================================================== */}
        <section id="what-we-transform" className="space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 text-primary-200 text-xs font-medium uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
              Practice Areas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              What We Transform
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Integrated transformation advisory designed to strengthen core enterprise capabilities and build long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative rounded-3xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/8 text-[11px] font-semibold text-slate-300">
                        {area.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors leading-snug">
                      {area.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {area.desc}
                    </p>
                  </div>

                  <Link
                    to={area.route}
                    className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/[0.04] hover:bg-primary-500/20 border border-white/8 hover:border-primary-500/30 text-xs font-bold text-primary-300 transition-all group-hover:border-primary-500/40"
                  >
                    <span>Explore Advisory</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ==================================================
            6. SECTION — OUR TRANSFORMATION HEALTH CHECK
            ================================================== */}
        <section id="health-check" className="relative rounded-3xl overflow-hidden border border-primary-500/30 bg-gradient-to-br from-primary-950/80 via-slate-900 to-secondary-950/70 p-8 sm:p-12 md:p-16 shadow-[0_40px_120px_rgba(10,16,40,0.9)]">
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-500/20 border border-secondary-400/30 text-secondary-200 text-xs font-bold uppercase tracking-wider">
                <Gauge className="w-3.5 h-3.5" />
                Diagnostic Suite
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Our Transformation Health Check
              </h2>
              <p className="text-base sm:text-lg text-secondary-300 font-medium max-w-2xl mx-auto">
                Before recommending a solution, we understand the business.
              </p>
            </div>

            {/* Scope of Assessment */}
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md space-y-4">
              <p className="text-sm sm:text-base text-slate-200 font-medium">
                The NG Stellar Transformation Health Check™ assesses your business across:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-white">
                <span className="px-3.5 py-1.5 rounded-lg bg-primary-500/20 border border-primary-500/30">Business</span>
                <span className="text-slate-500">|</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-primary-500/20 border border-primary-500/30">People</span>
                <span className="text-slate-500">|</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-primary-500/20 border border-primary-500/30">Process</span>
                <span className="text-slate-500">|</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-primary-500/20 border border-primary-500/30">Technology</span>
                <span className="text-slate-500">|</span>
                <span className="px-3.5 py-1.5 rounded-lg bg-secondary-500/20 border border-secondary-500/30 text-secondary-200">Sustainability</span>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest text-center">
                You receive:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Current-state assessment',
                  'Gap analysis',
                  'Opportunity identification',
                  'Transformation priorities',
                  'Recommended actions',
                  'Transformation roadmap'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/transformation-health-check"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-primary-600/30 transition-all hover:brightness-110 hover:scale-105 active:scale-95"
              >
                <span>Assess Your Business</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================
            7. SECTION — WHY NG STELLAR?
            ================================================== */}
        <section id="why-ng-stellar" className="space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 text-primary-200 text-xs font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              The Advisory Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Why NG Stellar?
            </h2>
            <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">
              We don't just advise. We help transform.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl max-w-4xl mx-auto space-y-8">
            {/* Comparative Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <span className="text-xs font-mono font-bold text-slate-400 block">Consultants</span>
                <p className="text-sm font-semibold text-slate-200">Traditional consultants may diagnose.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <span className="text-xs font-mono font-bold text-slate-400 block">Tech Companies</span>
                <p className="text-sm font-semibold text-slate-200">Technology companies may build.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <span className="text-xs font-mono font-bold text-slate-400 block">Marketing Agencies</span>
                <p className="text-sm font-semibold text-slate-200">Marketing agencies may promote.</p>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-to-b from-primary-600/30 to-secondary-600/30 border border-primary-500/40 space-y-2">
                <span className="text-xs font-mono font-bold text-secondary-300 block">NG Stellar</span>
                <p className="text-sm font-bold text-white">NG Stellar brings these capabilities together.</p>
              </div>
            </div>

            {/* Process Flow */}
            <div className="pt-6 border-t border-white/10 space-y-4 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                Integrated Delivery Journey
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {whyStellarProcess.map((step, idx) => (
                  <div key={step} className="flex items-center">
                    <span className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-semibold text-slate-200">
                      {step}
                    </span>
                    {idx < whyStellarProcess.length - 1 && (
                      <span className="text-secondary-400 font-bold px-1.5 sm:px-2 select-none">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            8. SECTION — OUR CAPABILITIES
            ================================================== */}
      

        {/* ==================================================
            9. SECTION — SUSTAINABILITY
            ================================================== */}


        {/* ==================================================
            10. FINAL CTA — READY TO TRANSFORM YOUR BUSINESS?
            ================================================== */}
        <section className="relative rounded-3xl overflow-hidden border border-primary-500/30 bg-gradient-to-b from-primary-950/90 via-slate-900/95 to-slate-950/95 p-8 sm:p-12 md:p-16 text-center shadow-2xl backdrop-blur-xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest block">
              Take the Next Step
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to transform your business?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Let's understand where you are today, identify what needs to change and build a practical path toward sustainable impact.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-8 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-primary-600/30 transition-all hover:brightness-110 hover:scale-105 active:scale-95"
              >
                <span>Start a Transformation Conversation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default memo(Home);
