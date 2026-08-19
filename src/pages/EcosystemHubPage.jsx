import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Cpu,
  Scale,
  Rocket,
  Lightbulb,
  Layers,
  CheckCircle2,
  Handshake,
  ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { EcosystemNetworkDiagram } from '../components/ui/FrameworkDiagram';
import { ECOSYSTEM_HUB } from '../data/siteContent';

const iconsList = [Users, Building2, Cpu, Scale, Rocket, Lightbulb, Layers, Handshake];

function EcosystemHubPage() {
  const data = ECOSYSTEM_HUB;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Ecosystem', url: '/ecosystem' },
  ];

  const relatedLinks = [
    { title: 'Our Approach to Transformation', category: 'Methodology', desc: 'How we mobilize ecosystem capabilities during the Connect stage.', href: '/approach/connect' },
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Assess your business across 5 critical dimensions.', href: '/transformation-health-check' },
    { title: 'Our Capabilities', category: 'Execution', desc: 'Explore strategy, research, engineering & digital growth.', href: '/capabilities' },
    { title: 'Business Transformation', category: 'Advisory', desc: 'Strengthen strategy, operating models and growth.', href: '/transformation/business' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      <SEO
        title={data.seoTitle}
        description={data.metaDescription}
        canonicalUrl="/ecosystem"
        breadcrumbs={breadcrumbs}
      />

      {/* 1. HERO */}
      <PremiumPageHero
        eyebrow="Collaborative Alliances"
        title={data.h1}
        tagline={data.heroTagline}
        description={data.heroDescription}
        breadcrumbs={breadcrumbs}
        primaryCta={data.ctaPrimary}
        secondaryCta={data.ctaSecondary}
        visualElement={<EcosystemNetworkDiagram />}
      />

      {/* 2. ECOSYSTEM INCLUDES */}
      <section className="py-10 sm:py-14 bg-slate-900/50 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
              Ecosystem Scope
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              Ecosystem Includes
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              NG Stellar brings together an ecosystem of specialists and organizations to help businesses access the right capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {data.ecosystemIncludes.map((item, idx) => {
              const IconComponent = iconsList[idx % iconsList.length];
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TRANSFORMATION MODEL */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-primary-500/30 shadow-2xl text-center space-y-6 max-w-4xl mx-auto">
            <div>
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest block mb-1.5">
                Operational Delivery
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {data.transformationModelTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.transformationModelSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 text-center flex flex-col items-center justify-center space-y-2 hover:border-primary-400/50 transition-all"
                >
                  <span className="text-xs font-mono font-bold text-primary-400">Step 0{idx + 1}</span>
                  <div className="text-sm font-bold text-white leading-snug">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 4. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Ecosystem Collaboration"
        heading="Transformation works better together."
        description="NG Stellar brings together an ecosystem of specialists and organizations to help businesses access the right capabilities."
        primaryCta={{ label: 'Partner With NG Stellar', href: '/contact/partner' }}
        secondaryCta={{ label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
      />
    </div>
  );
}

export default memo(EcosystemHubPage);
