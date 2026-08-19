import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Leaf,
  TrendingUp,
  Cpu,
  Users,
  Clock
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { INSIGHTS_HUB } from '../data/siteContent';

const icons = [BookOpen, Leaf, TrendingUp, Cpu, Users];

function InsightsHubPage() {
  const data = INSIGHTS_HUB;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Insights', url: '/insights' },
  ];

  const relatedLinks = [
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Assess your business across 5 critical dimensions.', href: '/transformation-health-check' },
    { title: 'Our Approach', category: 'Methodology', desc: 'Discover → Diagnose → Design → Connect → Transform → Sustain.', href: '/approach' },
    { title: 'Sustainability Advisory', category: 'Advisory', desc: 'Economic, people, governance, and environmental resilience.', href: '/sustainability' },
    { title: 'Transformation Ecosystem', category: 'Ecosystem', desc: 'Connect with specialists, partners and startups.', href: '/ecosystem' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      <SEO
        title={data.seoTitle}
        description={data.metaDescription}
        canonicalUrl="/insights"
        breadcrumbs={breadcrumbs}
      />

      {/* 1. HERO */}
      <PremiumPageHero
        eyebrow="Advisory Insights"
        title={data.h1}
        tagline="Strategic Frameworks, Industry Briefings, and Advisory Perspectives."
        description="Executive insights on business transformation, enterprise sustainability, technology modernizations, and SME leadership."
        breadcrumbs={breadcrumbs}
        primaryCta={{
          label: 'Start a Transformation Conversation',
          href: '/contact/transformation-conversation'
        }}
        secondaryCta={{
          label: 'Explore Our Approach',
          href: '/approach'
        }}
      />

      {/* 2. PRACTICE AREAS & EDITORIAL IN PROGRESS */}
      <section className="py-8 sm:py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-primary-500/20 text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-secondary-400 uppercase tracking-widest">
            <Clock className="w-4 h-4" />
            <span>Dedicated Editorial Briefings in Preparation</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            {data.statusNotice}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.categories.map((cat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={cat.id}
                className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Executive articles, strategic frameworks, and research on modernizing enterprise operations and building sustainable value.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link
                    to="/contact/transformation-conversation"
                    className="text-xs font-bold text-primary-400 hover:text-primary-300 flex items-center gap-1.5"
                  >
                    <span>Request specific advisory briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 4. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Executive Advisory"
        heading="Transform the Business. Sustain the Impact."
        description="NG Stellar helps businesses understand what needs to change, connect the right capabilities and create transformation that delivers sustainable long-term value."
        primaryCta={{ label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
        secondaryCta={{ label: 'Request a Health Check', href: '/contact/health-check' }}
      />
    </div>
  );
}

export default memo(InsightsHubPage);
