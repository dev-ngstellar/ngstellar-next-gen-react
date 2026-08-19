import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Building,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { SUSTAINABILITY_HUB } from '../data/siteContent';

const dimensionIcons = {
  economic: TrendingUp,
  'people-social': Users,
  governance: Building,
  environmental: Leaf,
  'business-resilience': ShieldCheck,
};

function SustainabilityHubPage() {
  const data = SUSTAINABILITY_HUB;
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Sustainability', url: '/sustainability' },
  ];

  const relatedLinks = [
    { title: 'Business Transformation', category: 'Transformation', desc: 'Strengthen strategy, operating models and growth.', href: '/transformation/business' },
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Assess your business across all 5 dimensions.', href: '/transformation-health-check' },
    { title: 'Sustainability Assessment', category: 'Diagnostic', desc: 'Evaluate viability, governance, people & resilience.', href: '/transformation-health-check/sustainability' },
    { title: 'Our Transformation Capabilities', category: 'Capabilities', desc: 'Combine business thinking, technology & execution.', href: '/capabilities' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      <SEO
        title={data.seoTitle}
        description={data.metaDescription}
        canonicalUrl="/sustainability"
        breadcrumbs={breadcrumbs}
      />

      {/* 1. HERO */}
      <PremiumPageHero
        eyebrow="Sustainability Advisory"
        title={data.h1}
        description={data.heroDescription}
        breadcrumbs={breadcrumbs}
        primaryCta={data.ctaPrimary}
        secondaryCta={data.ctaSecondary}
        accentColor="emerald"
      />

      {/* 2. FIVE-DIMENSION VISUAL WITH CENTER: LONG-TERM BUSINESS VALUE */}
      <section className="py-10 sm:py-14 bg-slate-900/60 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block">
              Core Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              Five Dimensions of Sustainable Transformation
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Sustainability is not an add-on. It is an integral foundation for long-term business value.
            </p>
          </div>

          {/* Central Anchor Visualization */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-emerald-500/30 shadow-2xl relative mb-10">
            {/* Center Core Badge */}
            <div className="text-center max-w-md mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-900/80 to-emerald-950 border border-emerald-400/40 shadow-xl">
              <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest block mb-0.5">
                Core Anchor
              </span>
              <div className="text-base sm:text-lg font-extrabold text-white">
                {data.centerConcept}
              </div>
            </div>

            {/* Five Surrounding Dimension Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {data.dimensions.map((dim, idx) => {
                const Icon = dimensionIcons[dim.id] || Leaf;
                return (
                  <div
                    key={dim.id}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-emerald-500/20 hover:border-emerald-400/50 transition-all text-center flex flex-col items-center justify-between group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold block mb-1">
                        Pillar 0{idx + 1}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                        {dim.displayTitle}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Dimension Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.dimensions.map((dim, idx) => {
              const Icon = dimensionIcons[dim.id] || Leaf;
              const isFull = idx === 4;
              return (
                <div
                  key={dim.id}
                  className={`p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                    isFull ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {dim.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {dim.desc}
                    </p>

                    {/* Focus Areas */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                      <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2">
                        {dim.focusAreasTitle}
                      </div>
                      {dim.focus.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={dim.route}
                    className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/[0.04] hover:bg-emerald-500/20 border border-white/8 hover:border-emerald-500/30 text-xs font-bold text-emerald-300 transition-all"
                  >
                    <span>Explore {dim.displayTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Final Statement Card */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 text-center max-w-2xl mx-auto">
            <p className="text-base sm:text-lg font-bold text-white">
              "{data.finalMessage}"
            </p>
          </div>
        </div>
      </section>

      {/* 3. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 4. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Sustainability Advisory"
        heading="Ready to Build Sustainable Long-Term Value?"
        description="Let's understand where you are today, identify what needs to change and build a practical path toward sustainable impact."
        primaryCta={{ label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
        secondaryCta={{ label: 'Explore Health Check', href: '/transformation-health-check' }}
        accent="emerald"
      />
    </div>
  );
}

export default memo(SustainabilityHubPage);
