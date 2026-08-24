import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
  CheckCircle2,
  Leaf,
  HeartHandshake,
  LineChart,
  Lightbulb,
  FileText,
  Activity,
  Briefcase
} from 'lucide-react';
import { ADVISORY_PAGES } from '../data/advisoryContent';

// Icon resolver helper for diverse cards
const getSectionIcon = (title, index) => {
  const t = (title || '').toLowerCase();
  if (t.includes('strategic') || t.includes('vision') || t.includes('model') || t.includes('strategy')) return Compass;
  if (t.includes('leader') || t.includes('culture') || t.includes('talent') || t.includes('workforce') || t.includes('people')) return Users;
  if (t.includes('tech') || t.includes('software') || t.includes('digital') || t.includes('cloud') || t.includes('ai') || t.includes('system')) return Cpu;
  if (t.includes('operat') || t.includes('process') || t.includes('workflow') || t.includes('standard')) return Layers;
  if (t.includes('govern') || t.includes('compliance') || t.includes('ethic') || t.includes('policy')) return Shield;
  if (t.includes('resilience') || t.includes('risk') || t.includes('continuity') || t.includes('crisis')) return ShieldCheck;
  if (t.includes('environ') || t.includes('green') || t.includes('waste') || t.includes('resource') || t.includes('esg')) return Leaf;
  if (t.includes('economic') || t.includes('financial') || t.includes('cost') || t.includes('value')) return LineChart;
  if (t.includes('customer') || t.includes('experience') || t.includes('community')) return HeartHandshake;
  if (t.includes('data') || t.includes('analytics') || t.includes('intelligence')) return Database;
  if (t.includes('growth') || t.includes('agility') || t.includes('scale')) return TrendingUp;
  if (t.includes('quality') || t.includes('continuous') || t.includes('audit')) return Target;

  const defaults = [Zap, Award, Lightbulb, Activity, Briefcase, FileText];
  return defaults[index % defaults.length];
};

function ServiceAdvisoryPage() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/';

  // Match the page data from ADVISORY_PAGES by route or alternateRoutes
  let page = Object.values(ADVISORY_PAGES).find(
    (p) => p.route === currentPath || (p.alternateRoutes && p.alternateRoutes.includes(currentPath))
  );

  // Fallback match by partial slug if needed
  if (!page) {
    const slug = currentPath.split('/').pop();
    page = ADVISORY_PAGES[slug] || ADVISORY_PAGES['business-transformation'];
  }

  const isSustainability = page.category === 'Sustainability';
  const categoryRoute = isSustainability ? '/sustainability' : '/transformation';

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-primary-500/30 pb-16">
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta name="keywords" content={`${page.title}, ${page.category}, Strategic Advisory, NG Stellar, Sustainable Growth`} />
      </Helmet>

      {/* 1. HERO / PAGE INTRODUCTION */}
      <section className="relative pt-[32px] sm:pt-[40px] lg:pt-[48px] pb-12 md:pb-16 overflow-hidden">
        {/* Ambient Glows */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[140px] rounded-full pointer-events-none ${isSustainability ? 'bg-emerald-600/15' : 'bg-primary-600/15'
            }`}
        />
        <div
          className={`absolute top-1/3 right-10 w-[450px] h-[350px] blur-[120px] rounded-full pointer-events-none ${isSustainability ? 'bg-teal-500/10' : 'bg-secondary-500/10'
            }`}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-15 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-5">
            <Link to="/" className="hover:text-primary-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to={categoryRoute} className="hover:text-primary-300 transition-colors">{page.category}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-primary-300 font-semibold">{page.title}</span>
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
              <span>{page.categoryBadge}</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              {page.title}
            </h1>

            {/* Supporting Headline if present */}
            {page.supportingHeadline && (
              <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-300 via-secondary-300 to-emerald-300 bg-clip-text text-transparent">
                {page.supportingHeadline}
              </div>
            )}

            {/* Intro Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
              {page.intro.map((p, idx) => (
                <p key={idx} className={idx === 1 ? 'text-slate-400 text-base sm:text-lg' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to={page.cta.link}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-primary-600/25 transition-all hover:brightness-110 hover:shadow-primary-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{page.cta.text}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
              <Link
                to="/transformation-health-check"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/12 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Health Check</span>
                <ShieldCheck className="w-4 h-4 text-primary-400" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY IT MATTERS (OR CREATING VALUE BEYOND PROFIT) */}
      {page.whyItMatters && (
        <section className="py-20 bg-slate-900/50 border-y border-white/10 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Strategic Imperative
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                {page.whyItMatters.heading}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {page.whyItMatters.intro}
              </p>
              {page.whyItMatters.leadIn && (
                <p className="text-slate-400 text-sm sm:text-base mt-2 font-medium">
                  {page.whyItMatters.leadIn}
                </p>
              )}
            </div>

            {/* Structured Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.whyItMatters.points.map((pt, index) => {
                const Icon = getSectionIcon(pt.title, index);
                return (
                  <motion.div
                    key={pt.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-primary-500/40 hover:bg-white/[0.05] transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {pt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pt.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. HOW NG STELLAR HELPS / HOW WE SUPPORT YOUR BUSINESS */}
      {page.howWeHelp && (
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-secondary-600/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">
                Our Advisory Approach
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                {page.howWeHelp.heading}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {page.howWeHelp.intro}
              </p>
            </div>

            {/* 4 Connected Framework Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.howWeHelp.formulaItems.map((pillar, idx) => {
                const Icon = getSectionIcon(pillar.title, idx);
                const colors = [
                  'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-cyan-400',
                  'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
                  'from-primary-500/20 to-secondary-500/20 border-primary-500/30 text-primary-300',
                  'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300',
                ];
                const activeColor = colors[idx % colors.length];

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`p-6 rounded-2xl bg-gradient-to-b ${activeColor.split(' ')[0]} ${activeColor.split(' ')[1]} border ${activeColor.split(' ')[2]} backdrop-blur-md flex flex-col justify-between hover:scale-[1.02] transition-transform`}
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-slate-950/60 border border-white/10 flex items-center justify-center mb-5">
                        <Icon className={`w-6 h-6 ${activeColor.split(' ')[3]}`} />
                      </div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Pillar 0{idx + 1}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Formula Ribbon */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-sm">
              <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                {page.howWeHelp.formulaLeadIn}
              </p>
              <div className="text-base sm:text-lg md:text-xl font-bold text-white flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
                {page.howWeHelp.formulaItems.map((item, idx, arr) => (
                  <span key={item.title} className="flex items-center gap-3">
                    <span className="text-primary-300 hover:text-white transition-colors">{item.title}</span>
                    {idx < arr.length - 1 && (
                      <span className="text-secondary-400 font-bold select-none">|</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="text-sm sm:text-base text-slate-300 font-medium mt-3">
                {page.howWeHelp.formulaOutro}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 4. KEY FOCUS AREAS */}
      {page.focusAreas && (
        <section className="py-20 bg-slate-900/40 border-t border-white/10 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Comprehensive Scope
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                {page.focusAreasHeading || 'Key Focus Areas'}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Tailored consulting capabilities structured to address your specific operational, technological, and strategic challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {page.focusAreas.map((area, idx) => {
                const Icon = getSectionIcon(area.title, idx);
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-primary-500/30 hover:bg-white/[0.04] transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-300 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5. OUTCOMES YOU CAN EXPECT / THE VALUE YOU GAIN / KEY OUTCOMES */}
      {page.outcomes && (
        <section className="py-20 bg-slate-900/70 border-t border-white/10 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Measurable Impact
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                {page.outcomesHeading || 'Key Outcomes'}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {page.outcomesIntro || 'Every initiative is engineered to deliver concrete, sustainable value across critical dimensions.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.outcomes.map((outcome, idx) => {
                const Icon = getSectionIcon(outcome.title, idx);
                const gradients = [
                  'from-blue-500/10 to-indigo-500/10 hover:border-blue-500/40 bg-blue-500/20 text-blue-300',
                  'from-emerald-500/10 to-teal-500/10 hover:border-emerald-500/40 bg-emerald-500/20 text-emerald-300',
                  'from-cyan-500/10 to-blue-500/10 hover:border-cyan-500/40 bg-cyan-500/20 text-cyan-300',
                  'from-purple-500/10 to-pink-500/10 hover:border-purple-500/40 bg-purple-500/20 text-purple-300',
                  'from-primary-500/10 to-secondary-500/10 hover:border-primary-500/40 bg-primary-500/20 text-primary-300',
                  'from-teal-500/10 to-emerald-500/10 hover:border-teal-500/40 bg-teal-500/20 text-teal-300',
                ];
                const activeGrad = gradients[idx % gradients.length].split(' ');

                return (
                  <motion.div
                    key={outcome.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`p-7 rounded-2xl bg-gradient-to-br ${activeGrad[0]} ${activeGrad[1]} bg-slate-950/80 border border-white/10 ${activeGrad[2]} transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/30`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-12 h-12 rounded-xl ${activeGrad[3]} ${activeGrad[4]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        {outcome.badge && (
                          <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-semibold text-slate-300">
                            {outcome.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                        {outcome.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {outcome.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-semibold text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Measurable enterprise value</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. CLOSING STRATEGIC STATEMENT & CTA */}
      {page.closing && (
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-primary-600/20 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-primary-950/80 border border-primary-500/30 shadow-2xl text-center relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-400/50 to-transparent" />

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-xs font-bold text-primary-300 uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
                <span>Next Steps</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-2xl mx-auto">
                {page.closing.heading}
              </h2>

              <div className="space-y-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
                {page.closing.paragraphs.map((para, idx) => (
                  <p key={idx} className={idx === 1 ? 'font-semibold text-white' : ''}>
                    {para}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <Link
                  to={page.cta.link}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-8 sm:px-10 py-4 text-base font-bold text-white shadow-xl shadow-primary-600/30 transition-all hover:brightness-110 hover:shadow-primary-500/50 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-400"
                >
                  <span>{page.cta.text}</span>
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default memo(ServiceAdvisoryPage);
