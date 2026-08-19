import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Compass,
  Leaf,
  TrendingUp,
  Cpu,
  Users,
  BookOpen,
  Clock,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { INSIGHTS_HUB } from '../data/siteContent';

const topicIcons = {
  transformation: Compass,
  sustainability: Leaf,
  'business-growth': TrendingUp,
  'technology-ai': Cpu,
  'sme-leadership': Users,
};

function InsightsHubPage() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/insights';
  const topicSlug = currentPath.split('/')[2]; // 'transformation', 'sustainability', etc.

  const data = INSIGHTS_HUB;
  const currentTopic = topicSlug ? data.categories.find((c) => c.id === topicSlug) : null;

  let pageTitle = currentTopic ? `${currentTopic.title} Insights | NG Stellar Executive Briefings` : data.h1;
  let pageDescription = currentTopic
    ? `Thought leadership, strategic frameworks, and practical guidance on ${currentTopic.title} by NG Stellar.`
    : data.metaDescription;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Insights', url: '/insights' },
  ];

  if (currentTopic) {
    breadcrumbs.push({ name: currentTopic.title, url: currentTopic.href });
  }

  const displayedCategories = currentTopic ? [currentTopic] : data.categories;

  // Related content
  const relatedLinks = [
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Identify your organization’s high-impact transformation priorities.', href: '/transformation-health-check' },
    { title: 'Transformation Stories', category: 'Case Studies', desc: 'Real-world transformation scenarios across industries.', href: '/transformation-stories' },
    { title: 'Our 6-Stage Approach', category: 'Methodology', desc: 'From initial discovery to continuous governance.', href: '/approach' },
    { title: '5D Sustainability Advisory', category: 'Sustainability', desc: 'Institutionalize economic durability, governance & resilience.', href: '/sustainability' },
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
        eyebrow="Executive Thought Leadership"
        title={currentTopic ? `${currentTopic.title} Insights` : data.h1}
        tagline={currentTopic ? currentTopic.desc : data.tagline}
        description={data.heroDescription}
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

      {/* 2. FEATURED EXECUTIVE BRIEFING (On main hub view) */}
      {!topicSlug && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary-950/80 via-slate-900 to-slate-950 border border-primary-500/30 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
              <span className="px-3 py-1 rounded-full bg-secondary-500/20 border border-secondary-500/40 text-secondary-300 font-bold uppercase tracking-wider text-[10px]">
                Featured Executive Briefing
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                6 min read
              </span>
              <span>•</span>
              <span className="text-slate-400">Quarterly Strategic Review</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight max-w-3xl leading-tight">
              Why Most Digital Transformations Stall — And How to Build One That Endures
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
              Why technology-first initiatives often fail without synchronized alignment across business strategy, process re-engineering, and organizational change enablement. Learn the 4 pillars of durable transformation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/insights/transformation"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-primary-600/25 hover:scale-105 transition-all"
              >
                <span>Read Full Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/transformation-health-check"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-semibold text-slate-200"
              >
                <span>Benchmark Readiness</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Category Filter Tabs Bar */}
      <section className="py-4 bg-slate-900/60 border-y border-white/10 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/insights"
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                !topicSlug ? 'bg-primary-600 text-white shadow-lg' : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              All Topics
            </Link>
            {data.categories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.href}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  topicSlug === cat.id ? 'bg-primary-600 text-white shadow-lg' : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ARTICLES LIST */}
      <section className="py-16 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {displayedCategories.map((cat) => {
            const IconComponent = topicIcons[cat.id] || Compass;
            return (
              <div key={cat.id} className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 text-primary-300 flex items-center justify-center">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {cat.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {cat.articles.map((art, idx) => (
                    <article
                      key={idx}
                      className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl group"
                    >
                      <div>
                        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                          <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-primary-300 font-semibold">
                            {art.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-500" />
                            {art.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors leading-snug">
                          {art.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                          {art.summary}
                        </p>

                        <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                            Key Themes Explored:
                          </span>
                          {art.h2s.map((h, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary-400 flex-shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-primary-400 group-hover:text-primary-300">
                        <span>Read Executive Briefing</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 5. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Advisory Perspectives"
        heading="Explore Tailored Advisory for Your Enterprise"
        description="Have specific strategic, technological, or sustainability priorities? Connect with our senior advisory team for an executive perspective."
        primaryCta={{ label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
        secondaryCta={{ label: 'Take Health Check', href: '/transformation-health-check' }}
      />
    </div>
  );
}

export default memo(InsightsHubPage);
