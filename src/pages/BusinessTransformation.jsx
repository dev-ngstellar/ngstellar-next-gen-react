import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Zap,
  Cpu,
  RefreshCw,
  ShieldCheck,
  Award,
  Target,
  BarChart3,
  Users,
  Database,
  TrendingUp,
  Shield,
  Layers,
  Compass,
  CheckCircle2
} from 'lucide-react';

const drivers = [
  {
    title: 'Improve Agility',
    description: 'Rapidly pivot strategy and execution to seize emerging market opportunities.',
    icon: Zap,
  },
  {
    title: 'Optimize Operations',
    description: 'Eliminate friction, automate repetitive workflows, and streamline core processes.',
    icon: Cpu,
  },
  {
    title: 'Adapt to Changing Market Conditions',
    description: 'Stay ahead of shifting consumer behaviors, regulatory shifts, and digital trends.',
    icon: RefreshCw,
  },
  {
    title: 'Build Long-Term Resilience',
    description: 'Institutionalize operating models and safeguards designed to endure economic cycles.',
    icon: ShieldCheck,
  },
  {
    title: 'Create Sustainable Competitive Advantage',
    description: 'Differentiate your brand through differentiated capabilities and scalable value creation.',
    icon: Award,
  },
];

const pillars = [
  {
    title: 'Strategic Thinking',
    description: 'Clarifying business models, defining market positioning, and crafting actionable strategic roadmaps.',
    icon: Compass,
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
    iconColor: 'text-cyan-400',
  },
  {
    title: 'Operational Excellence',
    description: 'Re-engineering end-to-end workflows, optimizing resource allocation, and driving continuous improvement.',
    icon: Layers,
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
  {
    title: 'Technology Enablement',
    description: 'Harnessing modern cloud platforms, AI automation, and robust enterprise digital architectures.',
    icon: Cpu,
    color: 'from-primary-500/20 to-secondary-500/20',
    border: 'border-primary-500/30',
    iconColor: 'text-primary-300',
  },
  {
    title: 'Change Management',
    description: 'Aligning leadership, fostering organizational agility, and embedding lasting cultural transformation.',
    icon: Users,
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-300',
  },
];

const outcomes = [
  {
    title: 'Strategic Business Alignment',
    description: 'Harmonize vision, organizational structure, and operational execution across all business units.',
    icon: Target,
    badge: 'Strategy',
    gradient: 'from-blue-500/10 to-indigo-500/10',
    borderHover: 'hover:border-blue-500/40',
    iconBg: 'bg-blue-500/20 text-blue-300',
  },
  {
    title: 'Improved Operational Efficiency',
    description: 'Remove friction, eliminate systemic waste, and maximize throughput with lean operational rigor.',
    icon: Zap,
    badge: 'Operations',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    borderHover: 'hover:border-emerald-500/40',
    iconBg: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    title: 'Better Customer Experience',
    description: 'Deliver seamless, responsive interactions across touchpoints to build loyalty and lifetime value.',
    icon: Users,
    badge: 'Experience',
    gradient: 'from-cyan-500/10 to-blue-500/10',
    borderHover: 'hover:border-cyan-500/40',
    iconBg: 'bg-cyan-500/20 text-cyan-300',
  },
  {
    title: 'Data-Driven Decision Making',
    description: 'Equip leadership with real-time operational intelligence, predictive insights, and key performance metrics.',
    icon: Database,
    badge: 'Intelligence',
    gradient: 'from-purple-500/10 to-pink-500/10',
    borderHover: 'hover:border-purple-500/40',
    iconBg: 'bg-purple-500/20 text-purple-300',
  },
  {
    title: 'Scalable Business Growth',
    description: 'Construct sustainable frameworks that enable repeatable expansion into new markets and revenue streams.',
    icon: TrendingUp,
    badge: 'Growth',
    gradient: 'from-primary-500/10 to-secondary-500/10',
    borderHover: 'hover:border-primary-500/40',
    iconBg: 'bg-primary-500/20 text-primary-300',
  },
  {
    title: 'Long-Term Business Resilience',
    description: 'Build adaptive operating models and risk mitigation protocols engineered to withstand market volatility.',
    icon: Shield,
    badge: 'Resilience',
    gradient: 'from-teal-500/10 to-emerald-500/10',
    borderHover: 'hover:border-teal-500/40',
    iconBg: 'bg-teal-500/20 text-teal-300',
  },
];

function BusinessTransformation() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-primary-500/30">
      <Helmet>
        <title>Business Transformation Services | NG Stellar Advisory</title>
        <meta
          name="description"
          content="Transform your business for sustainable growth. NG Stellar helps organizations align strategy, operations, people, and technology to improve performance, adapt to market changes, and unlock growth."
        />
        <meta
          name="keywords"
          content="Business Transformation, Strategic Advisory, Operational Efficiency, Technology Enablement, Change Management, NG Stellar"
        />
      </Helmet>

      {/* 1. HERO / PAGE INTRODUCTION */}
      <section className="relative pt-[32px] sm:pt-[40px] lg:pt-[48px] pb-12 md:pb-16 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary-600/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-secondary-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-15 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-5">
            <Link to="/" className="hover:text-primary-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/transformation" className="hover:text-primary-300 transition-colors">Transformation</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-primary-300 font-semibold">Business Transformation</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-5 max-w-4xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/25 text-xs font-bold text-primary-300 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
              <span>NG Stellar Strategic Advisory</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Transform Your Business for{' '}
              <span
                className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent font-black"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: 'linear-gradient(90deg, #38bdf8 0%, #4ade80 50%, #a3e635 100%)',
                }}
              >
                Sustainable Growth
              </span>
            </h1>

            {/* Supporting Content Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
              <p>
                Business transformation is about reimagining how your organization creates value. It involves aligning strategy, operations, people, and technology to improve performance, adapt to market changes, and achieve sustainable growth.
              </p>
              <p className="text-slate-400 text-base sm:text-lg">
                At NG Stellar, we help businesses navigate transformation with practical strategies that enhance efficiency, strengthen competitiveness, and prepare organizations for future opportunities.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-primary-600/25 transition-all hover:brightness-110 hover:shadow-primary-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Talk to Our Transformation Experts</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
              <Link
                to="/transformation-health-check"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/12 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Take Business Health Check</span>
                <ShieldCheck className="w-4 h-4 text-primary-400" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY BUSINESS TRANSFORMATION MATTERS */}
      <section className="py-20 bg-slate-900/50 border-y border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
              Market Realities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why Business Transformation Matters
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Today's businesses must respond quickly to changing customer expectations, technological advancements, and evolving market conditions.
            </p>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              A structured transformation approach helps organizations:
            </p>
          </div>

          {/* Structured Drivers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {drivers.map((driver, index) => {
              const Icon = driver.icon;
              return (
                <motion.div
                  key={driver.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-primary-500/40 hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span>{driver.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {driver.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. HOW NG STELLAR HELPS */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-secondary-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">
              Our Advisory Approach
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              How NG Stellar Helps
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We work closely with leadership teams to assess current business performance, identify improvement opportunities, and design transformation initiatives tailored to organizational goals.
            </p>
          </div>

          {/* 4 Connected Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl bg-gradient-to-b ${pillar.color} border ${pillar.border} backdrop-blur-md flex flex-col justify-between hover:scale-[1.02] transition-transform`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-950/60 border border-white/10 flex items-center justify-center mb-5">
                      <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                    </div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Pillar 0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Combining Statement Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Our Integrated Formula
            </p>
            <div className="text-base sm:text-lg md:text-xl font-bold text-white flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <span className="text-primary-300">Strategic Thinking</span>
              <span className="text-secondary-400">|</span>
              <span className="text-emerald-300">Operational Excellence</span>
              <span className="text-secondary-400">|</span>
              <span className="text-cyan-300">Technology Enablement</span>
              <span className="text-secondary-400">|</span>
              <span className="text-purple-300">Change Management</span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 font-medium mt-3">
              to deliver measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* 4. KEY OUTCOMES */}
      <section className="py-20 bg-slate-900/60 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
              Tangible Value
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Key Outcomes
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every transformation initiative is engineered to deliver concrete, sustainable value across critical business dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <motion.div
                  key={outcome.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`p-7 rounded-2xl bg-gradient-to-br ${outcome.gradient} bg-slate-950/80 border border-white/10 ${outcome.borderHover} transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/30`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl ${outcome.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-semibold text-slate-300">
                        {outcome.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                      {outcome.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Measurable business impact</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. START YOUR TRANSFORMATION JOURNEY (FINAL CTA) */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-primary-600/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-primary-950/80 border border-primary-500/30 shadow-2xl text-center relative overflow-hidden backdrop-blur-xl">
            {/* Glossy top border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-400/50 to-transparent" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-xs font-bold text-primary-300 uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
              <span>Next Steps</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-2xl mx-auto">
              Start Your Transformation Journey
            </h2>

            <div className="space-y-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              <p>
                Every successful transformation begins with understanding where you are today and defining where you want to be tomorrow.
              </p>
              <p className="font-semibold text-white">
                Let's build a roadmap that turns your vision into measurable results.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-8 sm:px-10 py-4 text-base font-bold text-white shadow-xl shadow-primary-600/30 transition-all hover:brightness-110 hover:shadow-primary-500/50 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                <span>Talk to Our Transformation Experts</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default memo(BusinessTransformation);
