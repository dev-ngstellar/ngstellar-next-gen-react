import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Briefcase,
  Users,
  Workflow,
  Cpu,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
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
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Assess your business across 5 critical dimensions.', href: '/transformation-health-check' },
    { title: 'Sustainability Advisory', category: 'Sustainability', desc: 'Integrate economic viability, governance and resilience.', href: '/sustainability' },
    { title: 'Our Transformation Capabilities', category: 'Capabilities', desc: 'Explore strategy, tech, platforms, AI and digital growth.', href: '/capabilities' },
    { title: 'Our Approach', category: 'Methodology', desc: 'Discover → Diagnose → Design → Connect → Transform → Sustain.', href: '/approach' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      <SEO
        title={data.seoTitle}
        description={data.metaDescription}
        canonicalUrl="/transformation"
        breadcrumbs={breadcrumbs}
      />

      {/* 1. HERO */}
      <PremiumPageHero
        eyebrow="Transformation Advisory"
        title={data.h1}
        description={data.heroDescription}
        breadcrumbs={breadcrumbs}
        primaryCta={data.ctaPrimary}
        secondaryCta={data.ctaSecondary}
      />

      {/* 2. OUR TRANSFORMATION FRAMEWORK: HORIZONTAL (DESKTOP) / VERTICAL (TABLET/MOBILE) JOURNEY */}
      <section className="py-10 sm:py-14 bg-slate-900/60 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              {data.frameworkTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              A structured transformation journey engineered to move organizations from diagnostic insight to sustainable results.
            </p>
          </div>

          {/* DESKTOP VIEW: HORIZONTAL TRANSFORMATION JOURNEY */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Horizontal Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/40 via-teal-500/40 to-secondary-500/40 -translate-y-12 z-0" />

              <div className="grid grid-cols-6 gap-3 relative z-10">
                {data.frameworkStages.map((stage, idx) => (
                  <div
                    key={stage.id}
                    className="p-5 rounded-2xl bg-slate-950/90 border border-white/10 hover:border-primary-400/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
                  >
                    <div>
                      {/* Step Indicator */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-xl bg-primary-500/20 border border-primary-500/40 text-primary-300 font-mono font-bold text-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                          {stage.step}
                        </span>
                        {idx < data.frameworkStages.length - 1 && (
                          <span className="text-xs text-slate-500 font-bold">→</span>
                        )}
                      </div>

                      <h3 className="text-sm font-bold text-white mb-2 tracking-wide uppercase group-hover:text-primary-300 transition-colors">
                        {stage.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TABLET / MOBILE VIEW: VERTICAL TRANSFORMATION JOURNEY */}
          <div className="lg:hidden relative">
            {/* Connecting Vertical Line */}
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-primary-500 via-teal-500 to-secondary-500 z-0" />

            <div className="space-y-4 relative z-10">
              {data.frameworkStages.map((stage, idx) => (
                <div key={stage.id} className="flex items-start gap-4">
                  {/* Step Node */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border-2 border-primary-500 text-primary-300 font-mono font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20">
                    {stage.step}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 p-5 rounded-2xl bg-slate-900/90 border border-white/10 shadow-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white uppercase tracking-wide">
                        {stage.title}
                      </h3>
                      {idx < data.frameworkStages.length - 1 && (
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE TRANSFORMATION PRACTICES */}
      <section className="py-12 sm:py-16 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">
              Core Practice Areas
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
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

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
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

      {/* 4. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 5. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Transformation Advisory"
        heading="Ready to transform your business?"
        description="Let's understand where you are today, identify what needs to change and build a practical path toward sustainable impact."
        primaryCta={{ label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
        secondaryCta={{ label: 'Take Health Check', href: '/transformation-health-check' }}
      />
    </div>
  );
}

export default memo(TransformationHubPage);
