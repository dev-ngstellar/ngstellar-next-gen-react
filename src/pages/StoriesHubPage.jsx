import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Briefcase,
  Workflow,
  Cpu,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { STORIES_HUB } from '../data/siteContent';

const icons = [Briefcase, Workflow, Cpu, TrendingUp];

function StoriesHubPage() {
  const data = STORIES_HUB;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Transformation Stories', url: '/transformation-stories' },
  ];

  const relatedLinks = [
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Assess your business across 5 critical dimensions.', href: '/transformation-health-check' },
    { title: 'Our Approach', category: 'Methodology', desc: 'Discover → Diagnose → Design → Connect → Transform → Sustain.', href: '/approach' },
    { title: 'Business Transformation', category: 'Advisory', desc: 'Reinvent business models, positioning, and operations.', href: '/transformation/business' },
    { title: 'Transformation Ecosystem', category: 'Ecosystem', desc: 'Connect with specialists, partners and startups.', href: '/ecosystem' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      <SEO
        title={data.seoTitle}
        description={data.metaDescription}
        canonicalUrl="/transformation-stories"
        breadcrumbs={breadcrumbs}
      />

      {/* 1. HERO */}
      <PremiumPageHero
        eyebrow="Transformation Stories"
        title={data.h1}
        tagline="Real-world transformation journeys and outcomes."
        description="Explore how NG Stellar helps organizations navigate change, solve complex challenges, unlock opportunities and build sustainable long-term value."
        breadcrumbs={breadcrumbs}
        primaryCta={data.ctaPrimary}
        secondaryCta={{
          label: 'Explore Our Approach',
          href: '/approach'
        }}
      />

      {/* 2. STATUS & PRACTICE AREAS */}
      <section className="py-8 sm:py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-primary-500/20 text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-secondary-400 uppercase tracking-widest">
            <Clock className="w-4 h-4" />
            <span>Dedicated Case Studies in Progress</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            {data.statusNotice}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    Case studies across strategic redesign, process optimization, scalable technology, and digital acceleration.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link
                    to="/contact/transformation-conversation"
                    className="text-xs font-bold text-primary-400 hover:text-primary-300 flex items-center gap-1.5"
                  >
                    <span>Discuss your situation</span>
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
        eyebrow="Start Your Journey"
        heading="Every business reaches a point where something needs to change."
        description="Tell us about your business, the challenge you are facing or the opportunity you want to pursue."
        primaryCta={{ label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
        secondaryCta={{ label: 'Request a Health Check', href: '/contact/health-check' }}
      />
    </div>
  );
}

export default memo(StoriesHubPage);
