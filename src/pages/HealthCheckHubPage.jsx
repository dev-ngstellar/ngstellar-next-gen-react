import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Users,
  Workflow,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Milestone,
  FileText,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { HEALTH_CHECK_HUB } from '../data/siteContent';

const iconsMap = {
  business: Briefcase,
  people: Users,
  process: Workflow,
  technology: Cpu,
  sustainability: ShieldCheck,
  roadmap: Milestone,
};

function HealthCheckHubPage() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/transformation-health-check';
  const subSlug = currentPath.split('/')[2]; // 'business', 'people', 'process', 'technology', 'sustainability', 'roadmap'

  const data = HEALTH_CHECK_HUB;
  const currentSubpage = subSlug ? data.assessmentSubpages.find((s) => s.id === subSlug) : null;

  const pageTitle = currentSubpage ? `${currentSubpage.title} | NG Stellar` : data.seoTitle;
  const pageDescription = currentSubpage ? currentSubpage.desc : data.metaDescription;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Transformation Health Check', url: '/transformation-health-check' },
  ];

  if (currentSubpage) {
    breadcrumbs.push({ name: currentSubpage.title, url: currentSubpage.href });
  }

  const relatedLinks = [
    { title: 'Business Transformation', category: 'Transformation', desc: 'Strengthen strategy, operating models and growth.', href: '/transformation/business' },
    { title: 'Sustainability Advisory', category: 'Sustainability', desc: 'Integrate economic viability, governance and resilience.', href: '/sustainability' },
    { title: 'Our Transformation Capabilities', category: 'Capabilities', desc: 'Explore strategy, research, engineering & digital growth.', href: '/capabilities' },
    { title: 'Our Approach', category: 'Methodology', desc: 'Discover → Diagnose → Design → Connect → Transform → Sustain.', href: '/approach' },
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
        eyebrow="Diagnostic Suite"
        title={currentSubpage ? currentSubpage.h1 : data.h1}
        tagline={currentSubpage ? currentSubpage.desc : data.heroTagline}
        description={currentSubpage ? null : data.heroDescription}
        breadcrumbs={breadcrumbs}
        primaryCta={{
          label: currentSubpage ? currentSubpage.cta : 'Start Your Health Check',
          href: currentSubpage ? currentSubpage.ctaHref : '/contact/health-check'
        }}
        secondaryCta={{
          label: 'Explore Our Approach',
          href: '/approach'
        }}
      />

      {/* 2. SUBPAGE DEEP-DIVE OR FULL HUB OVERVIEW */}
      {currentSubpage ? (
        <div className="space-y-8 sm:space-y-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Subpage Evaluation Breakdown */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-primary-400 uppercase tracking-wider block">Assessment Focus</span>
                <h2 className="text-2xl font-bold text-white">{currentSubpage.evaluatesTitle}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              {currentSubpage.whatWeAssess.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                  <span className="text-xs font-mono font-bold text-primary-400 mt-0.5">0{idx + 1}</span>
                  <span className="text-sm font-semibold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connects to Transformation Priorities */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-primary-950/60 to-slate-900 border border-primary-500/30 flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-wider block">Synthesis</span>
              <div className="text-base font-bold text-white">Connects to Transformation Priorities & Roadmap</div>
            </div>
            <Link
              to="/contact/health-check"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs shadow-lg transition-all"
            >
              <span>{currentSubpage.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        /* Full Hub Overview */
        <div className="space-y-10 sm:space-y-12 py-8 sm:py-10">
          {/* 5-DIMENSION ASSESSMENT VISUAL CONNECTING TO TRANSFORMATION PRIORITIES */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl">
              <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
                <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest block mb-1">
                  Assessment Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Five Connected Diagnostic Dimensions
                </h2>
              </div>

              {/* 5 Dimensions Flow to Transformation Priorities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6">
                {data.fiveDimensions.map((dim, idx) => (
                  <div
                    key={dim}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/8 text-center flex flex-col items-center justify-center space-y-1.5 hover:border-primary-400/50 transition-all"
                  >
                    <span className="text-[11px] font-mono font-bold text-primary-400">Dimension 0{idx + 1}</span>
                    <div className="text-xs sm:text-sm font-bold text-white">{dim}</div>
                  </div>
                ))}
              </div>

              {/* Connecting Banner */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-primary-950 via-slate-900 to-secondary-950/60 border border-primary-400/30 text-center">
                <span className="text-xs font-bold text-primary-300 uppercase tracking-widest">
                  ↓ Connected to → Transformation Priorities & Strategic Roadmap
                </span>
              </div>
            </div>
          </section>

          {/* 5 INDIVIDUAL ASSESSMENT DIMENSIONS GRID */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">
                Diagnostic Scope
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                What We Evaluate
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.assessmentSubpages.map((subpage, idx) => {
                const IconComponent = iconsMap[subpage.id] || Briefcase;
                const isRoadmap = subpage.id === 'roadmap';

                return (
                  <div
                    key={subpage.id}
                    className={`p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                      isRoadmap
                        ? 'bg-gradient-to-br from-primary-950/80 via-slate-900 to-secondary-950/70 border border-primary-400/40'
                        : 'bg-slate-900/80 border border-white/10 hover:border-primary-500/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-slate-400">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                        {subpage.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {subpage.desc}
                      </p>

                      <div className="space-y-1.5 mb-6 pt-3 border-t border-white/5">
                        <div className="text-[10px] font-bold text-primary-400 uppercase tracking-wider mb-1">
                          {subpage.evaluatesTitle}
                        </div>
                        {subpage.whatWeAssess.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={subpage.href}
                      className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/[0.04] hover:bg-primary-500/20 border border-white/8 hover:border-primary-500/30 text-xs font-bold text-primary-300 transition-all"
                    >
                      <span>Explore {subpage.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>

          {/* YOUR TRANSFORMATION REPORT SECTION */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-white/10 shadow-2xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                  Deliverables
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {data.reportSection.title}
                </h2>
                <p className="text-slate-300 text-sm">
                  {data.reportSection.intro}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                {data.reportSection.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <Link
                  to={data.ctaPrimary.href}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-500 hover:to-secondary-400 text-white font-bold text-sm shadow-xl shadow-primary-500/20 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>{data.ctaPrimary.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* 3. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 4. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Transformation Health Check"
        heading="Understand Where Your Business Stands."
        description="Every business has strengths, gaps and opportunities. Our Transformation Health Check provides a structured assessment across five critical dimensions."
        primaryCta={{ label: 'Start Your Health Check', href: '/contact/health-check' }}
        secondaryCta={{ label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
      />
    </div>
  );
}

export default memo(HealthCheckHubPage);
