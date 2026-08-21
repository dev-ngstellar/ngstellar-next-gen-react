import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Leaf,
  Users,
  Building,
  TrendingUp,
  Activity,
  CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import OutcomeCards from '../components/ui/OutcomeCards';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { SustainabilityPillarsRadial } from '../components/ui/FrameworkDiagram';
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
    { title: 'Business Transformation', category: 'Strategy', desc: 'Realign business models, pricing & operational models.', href: '/transformation/business' },
    { title: 'Sustainability Assessment', category: 'Diagnostic', desc: 'Benchmark ESG, compliance & resilience readiness.', href: '/transformation-health-check/sustainability' },
    { title: 'Transformation Health Check', category: 'Health Check', desc: 'Comprehensive 5-dimensional maturity evaluation.', href: '/transformation-health-check' },
    { title: 'Transformation Ecosystem', category: 'Collaboration', desc: 'Collaborating with industry specialists and governance partners.', href: '/ecosystem' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-12">
      <SEO
        title="Sustainability for Long-Term Business Value"
        description={data.metaDescription}
        canonicalUrl="/sustainability"
        breadcrumbs={breadcrumbs}
      />

      {/* 1. HERO */}
      <PremiumPageHero
        eyebrow="5-Dimensional Advisory Framework"
        title={data.h1}
        tagline={data.tagline}
        description={data.heroDescription}
        breadcrumbs={breadcrumbs}
        primaryCta={data.ctaPrimary}
        secondaryCta={{
          label: data.ctaSecondary.label,
          href: data.ctaSecondary.href,
          icon: Activity
        }}
        accentColor="emerald"
        visualElement={<SustainabilityPillarsRadial />}
      />

      {/* 2. 5 DIMENSIONS OF SUSTAINABILITY GRID */}
      <section className="py-16 bg-slate-900/50 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 block">
              Enduring Enterprise Value
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              The Five Dimensions of Sustainability
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore how our integrated advisory practices help organizations institutionalize resilience, ethical oversight, and long-term commercial durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.dimensions.map((dim) => {
              const IconComponent = dimensionIcons[dim.id] || Leaf;
              return (
                <div
                  key={dim.id}
                  className="p-7 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {dim.title}
                    </h3>
                    <p className="text-xs font-semibold text-teal-400 mb-3">
                      {dim.tagline}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {dim.desc}
                    </p>

                    <div className="space-y-1.5 mb-6 pt-4 border-t border-white/5">
                      {dim.focus.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
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
                    <span>Explore {dim.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OUTCOME SUMMARY */}
      <OutcomeCards
        title="Compounding Sustainability Outcomes"
        subtitle="How embedding sustainability into your commercial model creates defensible enterprise value."
        outcomes={[
          { title: 'Margin Resilience', desc: 'Diversified revenue channels, optimized capital allocation, and reduced operational overhead.' },
          { title: 'Governance Trust', desc: 'Clear executive accountability, ethical controls, and streamlined regulatory audit compliance.' },
          { title: 'Talent Retention', desc: 'Safe, equitable workplaces with continuous capability building and high employee loyalty.' },
          { title: 'Continuity Readiness', desc: 'Robust crisis buffers and supply chain redundancies that withstand market volatility.' }
        ]}
      />

      {/* 4. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 5. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Resilience & Governance"
        heading="Integrate Sustainability into Your Operating Model"
        description="Transform compliance obligations into long-term commercial advantages. Discuss your sustainability priorities with our advisory team."
        primaryCta={{ label: 'Discuss Your Sustainability Priorities', href: '/contact' }}
        secondaryCta={{ label: 'Take Health Check', href: '/transformation-health-check' }}
        accent="emerald"
      />
    </div>
  );
}

export default memo(SustainabilityHubPage);
