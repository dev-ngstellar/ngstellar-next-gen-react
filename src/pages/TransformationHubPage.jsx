import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Compass,
  Layers,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  Users,
  Workflow,
  Cpu,
  CheckCircle2,
  Activity
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import OutcomeCards from '../components/ui/OutcomeCards';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { TRANSFORMATION_HUB } from '../data/siteContent';

const areaIcons = {
  business: Briefcase,
  'people-organization': Users,
  'process-operations': Workflow,
  technology: Cpu,
};

function TransformationHubPage() {
  const data = TRANSFORMATION_HUB;
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Transformation', url: '/transformation' },
  ];

  const relatedLinks = [
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Benchmark organizational maturity across 5 dimensions.', href: '/transformation-health-check' },
    { title: 'Our 6-Stage Approach', category: 'Methodology', desc: 'From initial discovery to continuous governance.', href: '/approach' },
    { title: 'Sustainability Advisory', category: 'Resilience', desc: 'Institutionalize economic, governance & social durability.', href: '/sustainability' },
    { title: 'Transformation Stories', category: 'Case Studies', desc: 'Explore illustrative advisory scenarios across industries.', href: '/transformation-stories' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-12">
      <SEO
        title="Business Transformation for Sustainable Growth"
        description={data.metaDescription}
        canonicalUrl="/transformation"
        breadcrumbs={breadcrumbs}
      />

      {/* 1. HERO */}
      <PremiumPageHero
        eyebrow="Master Advisory Framework"
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
      />

      {/* 2. 4 CORE TRANSFORMATION PRACTICES */}
      <section className="py-16 bg-slate-900/50 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
              Core Practice Areas
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Integrated Transformation Practices
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our four specialized transformation advisory practices designed to address your exact organizational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.areas.map((area) => {
              const IconComponent = areaIcons[area.id] || Briefcase;
              return (
                <div
                  key={area.id}
                  className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-slate-300">
                        {area.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {area.desc}
                    </p>
                  </div>

                  <Link
                    to={area.route}
                    className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-white/[0.04] hover:bg-primary-500/20 border border-white/8 hover:border-primary-500/30 text-xs font-bold text-primary-300 transition-all"
                  >
                    <span>Explore {area.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 7 DIMENSIONS OF HOLISTIC ALIGNMENT */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">
              Holistic Synchronization
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Seven Dimensions of Enterprise Transformation
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Sustainable business transformation requires synchronizing every facet of the operating model.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.dimensions.map((dim, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-primary-500/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 text-primary-300 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white">{dim.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{dim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUTCOMES */}
      <OutcomeCards
        title="Predictable Transformation Realization"
        subtitle="How our holistic synchronization de-risks multi-year change initiatives."
      />

      {/* 5. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 6. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Transformation Advisory"
        heading="Ready to Accelerate Your Enterprise Transformation?"
        description="Connect with our senior advisory team for an executive conversation on realigning your operating model for sustainable growth."
        primaryCta={{ label: 'Start a Transformation Conversation', href: '/contact' }}
        secondaryCta={{ label: 'Take Health Check', href: '/transformation-health-check' }}
      />
    </div>
  );
}

export default memo(TransformationHubPage);
