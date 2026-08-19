import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { ADVISORY_PAGES } from '../data/advisoryContent';

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

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: page.category, url: categoryRoute },
    { name: page.title, url: page.route },
  ];

  const relatedLinks = isSustainability
    ? [
        { title: 'Business Transformation', category: 'Transformation', desc: 'Strengthen strategy, operating models and growth.', href: '/transformation/business' },
        { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Assess your business across all 5 dimensions.', href: '/transformation-health-check' },
        { title: 'Sustainability Advisory', category: 'Resilience', desc: 'Economic, social, governance and environmental resilience.', href: '/sustainability' },
        { title: 'Our Approach', category: 'Methodology', desc: 'Discover → Diagnose → Design → Connect → Transform → Sustain.', href: '/approach' },
      ]
    : [
        { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Assess your business across 5 critical dimensions.', href: '/transformation-health-check' },
        { title: 'Sustainability Advisory', category: 'Sustainability', desc: 'Integrate economic viability, governance and resilience.', href: '/sustainability' },
        { title: 'Our Transformation Capabilities', category: 'Capabilities', desc: 'Combine business thinking, technology & execution.', href: '/capabilities' },
        { title: 'Our Approach', category: 'Methodology', desc: 'Discover → Diagnose → Design → Connect → Transform → Sustain.', href: '/approach' },
      ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-primary-500/30 pb-16">
      <SEO
        title={page.metaTitle}
        description={page.metaDescription}
        canonicalUrl={page.route}
        breadcrumbs={breadcrumbs}
      />

      {/* 1. HERO / PAGE INTRODUCTION */}
      <PremiumPageHero
        eyebrow={page.categoryBadge || page.category}
        title={page.h1 || page.title}
        description={
          page.heroText ||
          (page.intro && page.intro.length > 0 ? page.intro.join('\n\n') : null)
        }
        breadcrumbs={breadcrumbs}
        primaryCta={{
          label: page.cta.text,
          href: page.cta.link
        }}
        secondaryCta={{
          label: 'Explore Health Check',
          href: '/transformation-health-check'
        }}
        accentColor={isSustainability ? 'emerald' : 'primary'}
      />

      {/* 2. SPECIFIC SECTION 1: WE HELP WITH / FOCUS AREAS (Business Transformation) */}
      {page.weHelpWith && (
        <section className="py-10 sm:py-12 bg-slate-900/60 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Advisory Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {page.focusAreasTitle || page.weHelpWithTitle || 'Focus Areas'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {page.weHelpWith.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-primary-500/40 transition-all flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. SPECIFIC SECTION 2: WE ASSESS / ASSESSMENT AREAS (People, Process, Technology, Resilience) */}
      {page.weAssess && (
        <section className="py-10 sm:py-12 bg-slate-900/60 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">
                Assessment Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {page.assessmentAreasTitle || page.weAssessTitle || 'Assessment Areas'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {page.weAssess.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-primary-500/40 transition-all flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. SPECIFIC SECTION 3: FOCUS AREAS (Sustainability Subpages) */}
      {page.focusAreas && (
        <section className="py-10 sm:py-12 bg-slate-900/60 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block">
                Focus Areas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {page.focusAreasTitle || 'Focus areas:'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {page.focusAreas.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. SPECIFIC SECTION 4: APPROACH / FLOWS */}
      {/* A. Business Approach: Understand → Analyse → Strategize → Implement → Measure */}
      {page.approachSteps && (
        <section className="py-10 sm:py-12 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div>
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest block mb-2">
                Structured Method
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {page.ourApproachTitle || 'Approach'}
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {page.approachSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-4">
                  <div className="px-5 py-3 rounded-2xl bg-slate-900 border border-white/10 text-sm font-bold text-white shadow-lg">
                    {step}
                  </div>
                  {idx < page.approachSteps.length - 1 && (
                    <span className="text-primary-400 font-bold text-base hidden sm:inline">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* B. People Flow / Path: Design better roles → Build capabilities → Improve accountability → Enable transformation */}
      {page.helpFlow && (
        <section className="py-10 sm:py-12 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div>
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest block mb-2">
                Enablement Flow
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {page.pathTitle || page.weHelpTitle || 'Path'}
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {page.helpFlow.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-4">
                  <div className="px-5 py-3 rounded-2xl bg-slate-900 border border-primary-500/30 text-sm font-bold text-white shadow-lg">
                    {step}
                  </div>
                  {idx < page.helpFlow.length - 1 && (
                    <span className="text-primary-400 font-bold text-base hidden sm:inline">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* C. Process: Execution / We Help Businesses list */}
      {page.weHelp && (
        <section className="py-10 sm:py-12 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Operational Realization
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {page.executionTitle || page.weHelpTitle || 'Execution'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {page.weHelp.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* D. Technology: Capabilities list */}
      {page.capabilities && (
        <section className="py-10 sm:py-12 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">
                Digital & Tech Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {page.capabilitiesTitle || 'Capabilities'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {page.capabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 transition-all flex items-start gap-3"
                >
                  <Cpu className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. OUTCOME SECTION */}
      {(page.outcomeText || page.outcomesList) && (
        <section className="py-10 sm:py-12 bg-slate-900/40 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
              {page.outcomeTitle || 'Outcome'}
            </span>

            {page.outcomeText && (
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-relaxed">
                "{page.outcomeText}"
              </h3>
            )}

            {page.outcomesList && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                {page.outcomesList.map((oc, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/8 text-sm sm:text-base font-bold text-white flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{oc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 7. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 8. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow={page.category}
        heading={page.cta.text}
        description="Let's understand where you are today, identify what needs to change and build a practical path toward sustainable impact."
        primaryCta={{ label: page.cta.text, href: page.cta.link }}
        secondaryCta={{ label: 'Explore Health Check', href: '/transformation-health-check' }}
        accent={isSustainability ? 'emerald' : 'primary'}
      />
    </div>
  );
}

export default memo(ServiceAdvisoryPage);
