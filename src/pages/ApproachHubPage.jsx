import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Search,
  Activity,
  Layers,
  Network,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import TransformationStepper from '../components/ui/TransformationStepper';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { APPROACH_HUB } from '../data/siteContent';

const stageIcons = {
  discover: Search,
  diagnose: Activity,
  design: Layers,
  connect: Network,
  transform: Cpu,
  sustain: ShieldCheck,
};

function ApproachHubPage() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/approach';
  const stageSlug = currentPath.split('/')[2]; // 'discover', 'diagnose', 'design', 'connect', 'transform', 'sustain'

  const data = APPROACH_HUB;
  const currentStage = stageSlug ? data.stages.find((s) => s.id === stageSlug) : null;

  const pageTitle = currentStage ? `${currentStage.title} | Our Approach | NG Stellar` : data.seoTitle;
  const pageDescription = currentStage ? currentStage.desc : data.metaDescription;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Our Approach', url: '/approach' },
  ];

  if (currentStage) {
    breadcrumbs.push({ name: `Stage ${currentStage.step}: ${currentStage.title}`, url: currentStage.href });
  }

  const relatedLinks = [
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Assess your business across 5 critical dimensions.', href: '/transformation-health-check' },
    { title: 'Transformation Ecosystem', category: 'Ecosystem', desc: 'Access specialists, technology partners, and implementation alliances.', href: '/ecosystem' },
    { title: 'Business Transformation', category: 'Advisory', desc: 'Strengthen strategy, operating models and growth.', href: '/transformation/business' },
    { title: 'Our Capabilities', category: 'Capabilities', desc: 'Explore strategy, research, tech and digital growth.', href: '/capabilities' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={currentPath}
        breadcrumbs={breadcrumbs}
      />

      {/* 1. HERO */}
      <PremiumPageHero
        eyebrow={currentStage ? `Stage ${currentStage.step} of 06` : 'Our Methodology'}
        title={currentStage ? currentStage.h1 : data.h1}
        tagline={currentStage ? currentStage.tagline : data.heroTagline}
        description={currentStage ? currentStage.desc : data.heroDescription}
        breadcrumbs={breadcrumbs}
        primaryCta={{
          label: currentStage ? currentStage.cta : 'Start a Transformation Conversation',
          href: currentStage ? currentStage.ctaHref : '/contact/transformation-conversation'
        }}
        secondaryCta={{
          label: 'Explore Health Check',
          href: '/transformation-health-check'
        }}
      />

      {/* 2. PERSISTENT TRANSFORMATION STEPPER */}
      <TransformationStepper activeStepId={stageSlug || null} />

      {/* 3. MAIN CONTENT: STAGE DEEP DIVE OR COMPLETE 6-STAGE TIMELINE JOURNEY */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {currentStage ? (
          /* SINGLE STAGE VIEW */
          <div className="space-y-8 sm:space-y-10">
            {/* List / Focus Area Box */}
            {(currentStage.exploreItems ||
              currentStage.designItems ||
              currentStage.ecosystemItems ||
              currentStage.transformItems ||
              currentStage.sustainItems) && (
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {currentStage.weExploreTitle ||
                      currentStage.weHelpDesignTitle ||
                      currentStage.ecosystemIncludesTitle ||
                      currentStage.engagementIncludesTitle ||
                      currentStage.weFocusOnTitle ||
                      'Scope & Capabilities'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                  {(
                    currentStage.exploreItems ||
                    currentStage.designItems ||
                    currentStage.ecosystemItems ||
                    currentStage.transformItems ||
                    currentStage.sustainItems ||
                    []
                  ).map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcome Card */}
            {currentStage.outcome && (
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/30 text-center space-y-2.5">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">
                  Outcome
                </span>
                <p className="text-lg sm:text-xl font-extrabold text-white">
                  "{currentStage.outcome}"
                </p>
              </div>
            )}
          </div>
        ) : (
          /* COMPLETE 6-STAGE CONNECTED METHODOLOGY JOURNEY */
          <div className="space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">
                End-to-End Delivery
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                The Six Connected Stages
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Discover → Diagnose → Design → Connect → Transform → Sustain
              </p>
            </div>

            {/* DESKTOP VIEW: HORIZONTAL CONNECTED JOURNEY */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-6 gap-3">
                {data.stages.map((st, idx) => (
                  <Link
                    key={st.id}
                    to={st.href}
                    className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-primary-400/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-xl bg-primary-500/20 border border-primary-500/40 text-primary-300 font-mono font-bold text-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                          {st.step}
                        </span>
                        {idx < data.stages.length - 1 && (
                          <span className="text-xs text-slate-500 font-bold">→</span>
                        )}
                      </div>

                      <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wide group-hover:text-primary-300 transition-colors">
                        {st.title}
                      </h3>

                      <p className="text-[11px] font-semibold text-slate-300 mb-2">
                        {st.tagline}
                      </p>

                      <p className="text-[11px] text-slate-400 leading-snug line-clamp-3">
                        {st.desc.split('\n\n')[0]}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1 text-[11px] font-bold text-primary-400 group-hover:text-primary-300">
                      <span>Explore stage</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* TABLET / MOBILE VIEW: VERTICAL TIMELINE */}
            <div className="lg:hidden relative">
              <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-primary-500 via-teal-500 to-secondary-500 z-0" />

              <div className="space-y-6 relative z-10">
                {data.stages.map((st, idx) => (
                  <div key={st.id} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 border-2 border-primary-500 text-primary-300 font-mono font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20">
                      {st.step}
                    </div>

                    <Link
                      to={st.href}
                      className="flex-1 p-6 rounded-2xl bg-slate-900/90 border border-white/10 shadow-lg space-y-3 group"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-white uppercase tracking-wide group-hover:text-primary-300 transition-colors">
                          {st.title}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-xs font-semibold text-primary-300">
                        {st.tagline}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {st.desc.split('\n\n')[0]}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* DETAILED STAGES BREAKDOWN CARDS */}
            <div className="space-y-8 pt-8">
              {data.stages.map((st) => (
                <div
                  key={st.id}
                  className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 shadow-xl space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-primary-500/20 text-primary-300 border border-primary-500/30">
                        Stage {st.step}
                      </span>
                      <h3 className="text-2xl font-extrabold text-white">{st.title}</h3>
                    </div>
                    <div className="text-xs font-bold text-secondary-400 uppercase tracking-widest">
                      {st.tagline}
                    </div>
                  </div>

                  <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
                    {st.desc}
                  </div>

                  {/* Specific items */}
                  {(st.exploreItems || st.designItems || st.ecosystemItems || st.transformItems || st.sustainItems) && (
                    <div className="pt-2">
                      <div className="text-xs font-bold text-primary-400 uppercase tracking-wider mb-3">
                        {st.weExploreTitle ||
                          st.weHelpDesignTitle ||
                          st.ecosystemIncludesTitle ||
                          st.engagementIncludesTitle ||
                          st.weFocusOnTitle ||
                          'Details:'}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {(st.exploreItems || st.designItems || st.ecosystemItems || st.transformItems || st.sustainItems || []).map(
                          (item, i) => (
                            <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2 text-xs text-slate-200">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Outcome */}
                  {st.outcome && (
                    <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs sm:text-sm font-semibold text-emerald-300">
                      <span className="font-bold uppercase tracking-wider text-emerald-400 mr-2">Outcome:</span>
                      {st.outcome}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 4. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 5. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Transformation Approach"
        heading="Transformation is not a project. It is a journey."
        description="Our approach begins by understanding the business before recommending solutions. Let's start with where you are today."
        primaryCta={{ label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
        secondaryCta={{ label: 'Request a Health Check', href: '/contact/health-check' }}
      />
    </div>
  );
}

export default memo(ApproachHubPage);
