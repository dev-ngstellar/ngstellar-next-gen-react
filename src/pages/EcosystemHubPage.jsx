import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
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
  ShieldCheck,
  Target
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import OutcomeCards from '../components/ui/OutcomeCards';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { EcosystemNetworkDiagram } from '../components/ui/FrameworkDiagram';
import { ECOSYSTEM_HUB } from '../data/siteContent';

const trackIcons = {
  'expert-network': Users,
  'industry-partners': Building2,
  'technology-partners': Cpu,
  'professional-partners': Scale,
  startups: Rocket,
  'incubators-accelerators': Lightbulb,
  'strategic-implementation-partners': Layers,
};

function EcosystemHubPage() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/ecosystem';
  const trackSlug = currentPath.split('/')[2]; // e.g. 'expert-network', 'startups', etc.

  const data = ECOSYSTEM_HUB;
  const currentTrack = trackSlug ? data.partnerships.find((p) => p.id === trackSlug) : null;

  let pageTitle = currentTrack ? `${currentTrack.title} | NG Stellar Transformation Ecosystem` : data.h1;
  let pageDescription = currentTrack ? currentTrack.desc : data.metaDescription;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Ecosystem', url: '/ecosystem' },
  ];

  if (currentTrack) {
    breadcrumbs.push({ name: currentTrack.title, url: currentTrack.href });
  }

  // Related content
  const relatedLinks = [
    { title: 'Our Approach to Transformation', category: 'Methodology', desc: 'How we mobilize ecosystem partners during the Connect stage.', href: '/approach/connect' },
    { title: 'Transformation Stories', category: 'Case Studies', desc: 'Real-world collaboration scenarios across industries.', href: '/transformation-stories' },
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Identify partnership and capability gaps.', href: '/transformation-health-check' },
    { title: 'Insights & Thought Leadership', category: 'Executive Briefings', desc: 'Articles and frameworks on collaborative business models.', href: '/insights' },
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
        eyebrow="Collaborative Alliances"
        title={currentTrack ? currentTrack.title : data.h1}
        tagline={currentTrack ? currentTrack.desc : data.tagline}
        description={data.heroDescription}
        breadcrumbs={breadcrumbs}
        primaryCta={{
          label: 'Partner With NG Stellar',
          href: '/contact/partner'
        }}
        secondaryCta={{
          label: 'Explore Our Approach',
          href: '/approach'
        }}
        visualElement={<EcosystemNetworkDiagram />}
      />

      {/* 2. TRACK DEEP DIVE OR FULL HUB OVERVIEW */}
      {currentTrack ? (
        <div className="space-y-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  Collaboration Scope in {currentTrack.title}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {currentTrack.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {currentTrack.focus.map((f, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-950/50 to-slate-900/80 border border-primary-500/20 space-y-4">
                <h2 className="text-xl font-bold text-white">
                  Our Partnership Engagement Principles
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We establish transparent engagement frameworks with shared governance, clear service level expectations, and mutual capability expansion. Our focus is on delivering genuine, non-duplicative value to client organizations through synergistic partnerships.
                </p>
              </div>
            </div>

            {/* Sidebar: All Tracks */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                All Ecosystem Tracks
              </h3>
              <div className="space-y-1.5">
                {data.partnerships.map((p) => {
                  const IconComponent = trackIcons[p.id] || Handshake;
                  const isActive = p.id === trackSlug;
                  return (
                    <Link
                      key={p.id}
                      to={p.href}
                      className={`flex items-center gap-3 p-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                          : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.08] hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{p.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <OutcomeCards
            title="Partnership Outcomes"
            subtitle="How collaborative alliances benefit client transformations."
            outcomes={[
              { title: 'Domain Depth', desc: 'Instant access to specialized industry perspectives and regulatory nuances.' },
              { title: 'Best-in-Class Tech', desc: 'Seamless integration with leading cloud, SaaS, and automation platforms.' },
              { title: 'Execution Scale', desc: 'Coordinated cross-border delivery teams capable of handling complex implementations.' },
              { title: 'Continuous Innovation', desc: 'Direct pipeline to high-potential startups and practical AI pilots.' }
            ]}
          />
        </div>
      ) : (
        /* Full Hub 7 Categories Grid */
        <section className="py-20 bg-slate-900/50 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Collaboration Network
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                Seven Pillars of Our Transformation Ecosystem
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We partner with specialized entities across the commercial, academic, technological, and venture landscapes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.partnerships.map((partner) => {
                const IconComponent = trackIcons[partner.id] || Handshake;
                return (
                  <div
                    key={partner.id}
                    className="p-7 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-semibold text-slate-300">
                          {partner.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                        {partner.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mb-6">
                        {partner.desc}
                      </p>
                    </div>

                    <Link
                      to={partner.href}
                      className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/[0.03] hover:bg-primary-500/20 border border-white/5 hover:border-primary-500/30 text-xs font-bold text-primary-300 transition-all"
                    >
                      <span>Explore {partner.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 4. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Ecosystem Alliance"
        heading="Partner With NG Stellar"
        description="We welcome collaboration with industry experts, technology providers, professional advisors, and innovative startups."
        primaryCta={{ label: 'Explore Partnership Opportunities', href: '/contact/partner' }}
        secondaryCta={{ label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
      />
    </div>
  );
}

export default memo(EcosystemHubPage);
