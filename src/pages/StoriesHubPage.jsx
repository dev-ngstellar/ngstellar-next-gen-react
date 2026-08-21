import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Briefcase,
  Workflow,
  Cpu,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  FileCheck,
  Target,
  Layers,
  ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import OutcomeCards from '../components/ui/OutcomeCards';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { STORIES_HUB } from '../data/siteContent';

const catIcons = {
  business: Briefcase,
  process: Workflow,
  technology: Cpu,
  'digital-growth': TrendingUp,
};

function StoriesHubPage() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/transformation-stories';
  const catSlug = currentPath.split('/')[2]; // 'business', 'process', 'technology', 'digital-growth'

  const data = STORIES_HUB;
  const currentCat = catSlug ? data.categories.find((c) => c.id === catSlug) : null;

  let pageTitle = currentCat ? `${currentCat.title} Stories | NG Stellar Scenarios` : data.h1;
  let pageDescription = currentCat
    ? `Illustrative transformation scenarios for ${currentCat.title}: business challenges, advisory approaches, and sustained outcomes.`
    : data.metaDescription;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Transformation Stories', url: '/transformation-stories' },
  ];

  if (currentCat) {
    breadcrumbs.push({ name: currentCat.title, url: currentCat.href });
  }

  const displayedCategories = currentCat ? [currentCat] : data.categories;

  // Related content
  const relatedLinks = [
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Identify your organization’s high-impact transformation priorities.', href: '/transformation-health-check' },
    { title: 'Business Transformation', category: 'Strategy', desc: 'Realign business models and revenue strategies.', href: '/transformation/business' },
    { title: 'Our 6-Stage Approach', category: 'Methodology', desc: 'From initial discovery to continuous governance.', href: '/approach' },
    { title: 'Executive Insights', category: 'Thought Leadership', desc: 'Strategic briefings and frameworks for business leaders.', href: '/insights' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-12">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={currentPath}
        breadcrumbs={breadcrumbs}
      />

      {/* 1. HERO */}
      <PremiumPageHero
        eyebrow="Advisory Case Studies"
        title={currentCat ? `${currentCat.title} Stories` : data.h1}
        tagline={data.tagline}
        description={data.heroDescription}
        breadcrumbs={breadcrumbs}
        primaryCta={{
          label: 'Discuss Your Specific Challenge',
          href: '/contact'
        }}
        secondaryCta={{
          label: 'Take Health Check',
          href: '/transformation-health-check'
        }}
      />

      {/* Transparency Note */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <p className="text-xs text-amber-200 leading-relaxed">
            <strong>Advisory Context:</strong> The following case studies are representative transformation models illustrating our diagnostic methodology, operating blueprints, and problem-solving framework. We never publish confidential client identifiers.
          </p>
        </div>
      </div>

      {/* Category Tabs Bar */}
      <section className="py-4 bg-slate-900/60 border-y border-white/10 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/transformation-stories"
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                !catSlug ? 'bg-primary-600 text-white shadow-lg' : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              All Categories
            </Link>
            {data.categories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.href}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  catSlug === cat.id ? 'bg-primary-600 text-white shadow-lg' : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. STORY SCENARIOS LIST WITH 4-PART BREAKDOWN */}
      <section className="py-16 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-bold text-primary-300 uppercase tracking-wider">
                  {cat.badge}
                </span>
                <h2 className="text-2xl font-bold text-white">
                  {cat.title} Scenarios
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {cat.scenarios.map((sc, idx) => (
                  <div
                    key={idx}
                    className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                      <div>
                        <span className="text-[11px] font-bold text-secondary-400 uppercase tracking-widest block mb-1">
                          Illustrative Transformation Scenario
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                          {sc.title}
                        </h3>
                      </div>
                      <span className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300">
                        Vertical: <strong>{sc.industry}</strong>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Challenge */}
                      <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/15 space-y-2 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1 font-mono">
                            01 The Challenge
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {sc.challenge}
                          </p>
                        </div>
                      </div>

                      {/* Approach */}
                      <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/15 space-y-2 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 font-mono">
                            02 Advisory Approach
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {sc.approach}
                          </p>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="p-5 rounded-2xl bg-teal-500/5 border border-teal-500/15 space-y-2 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1 font-mono">
                            03 Implemented Fix
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {sc.solution}
                          </p>
                        </div>
                      </div>

                      {/* Outcome */}
                      <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 space-y-2 flex flex-col justify-between">
                        <div>
                          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 font-mono">
                            04 Sustained Outcome
                          </div>
                          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                            {sc.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUTCOME SUMMARY */}
      <OutcomeCards
        title="Predictable Transformation Outcomes"
        subtitle="How our structured methodology de-risks execution across all verticals."
      />

      {/* 4. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 5. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Have a Similar Challenge?"
        heading="Discuss Your Organization's Transformation Objectives"
        description="Every business has unique operational nuances. Connect with our advisory team to evaluate your current operating model and design a customized roadmap."
        primaryCta={{ label: 'Start a Transformation Conversation', href: '/contact' }}
        secondaryCta={{ label: 'Request a Health Check', href: '/transformation-health-check' }}
      />
    </div>
  );
}

export default memo(StoriesHubPage);
