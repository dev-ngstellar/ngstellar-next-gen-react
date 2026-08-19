import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Compass,
  Palette,
  Cpu,
  TrendingUp,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Zap,
  Globe,
  Smartphone,
  ShoppingBag,
  Bot,
  Search,
  FileText,
  BarChart3,
  HelpCircle,
  Target,
  Workflow
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import OutcomeCards from '../components/ui/OutcomeCards';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { CAPABILITIES_MASTER } from '../data/capabilitiesContent';

const catIcons = {
  'strategy-research': Compass,
  'brand-experience': Palette,
  'technology-transformation': Cpu,
  'digital-growth': TrendingUp,
};

function CapabilitiesHubPage() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/capabilities';
  const pathSegments = currentPath.split('/').filter(Boolean); // ['capabilities', 'cat', 'sub']

  const isHub = pathSegments.length === 1;
  const isCategory = pathSegments.length === 2;
  const isSubpage = pathSegments.length >= 3;

  const categorySlug = pathSegments[1];
  const subpageSlug = pathSegments[2];

  const data = CAPABILITIES_MASTER;

  // Resolve matching category or subpage
  const currentCategory = categorySlug ? data.categories.find((c) => c.id === categorySlug) : null;
  const currentSubpage = subpageSlug ? data.subpages[subpageSlug] : null;

  let pageTitle = data.h1;
  let pageDescription = data.metaDescription;
  let pageBadge = 'Full-Spectrum Capabilities';

  if (isSubpage && currentSubpage) {
    pageTitle = currentSubpage.h1;
    pageDescription = currentSubpage.metaDescription;
    pageBadge = currentSubpage.category;
  } else if (isCategory && currentCategory) {
    pageTitle = currentCategory.h1;
    pageDescription = currentCategory.metaDescription;
    pageBadge = currentCategory.title;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Capabilities', url: '/capabilities' },
  ];

  if (currentCategory) {
    breadcrumbs.push({ name: currentCategory.title, url: currentCategory.href });
  }
  if (currentSubpage) {
    breadcrumbs.push({ name: currentSubpage.title, url: currentPath });
  }

  // Related content
  const relatedLinks = [
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Assess your capability maturity baseline.', href: '/transformation-health-check' },
    { title: 'Technology Transformation', category: 'Engineering', desc: 'Scalable cloud software, platforms & automated workflows.', href: '/capabilities/technology-transformation' },
    { title: 'Strategy & Research', category: 'Advisory', desc: 'Business model research and competitive market positioning.', href: '/capabilities/strategy-research' },
    { title: 'Digital Growth Strategy', category: 'Growth', desc: 'High-intent search authority and sustainable customer acquisition.', href: '/capabilities/digital-growth' },
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
        eyebrow={pageBadge}
        title={pageTitle}
        tagline={currentSubpage?.tagline || currentCategory?.tagline || data.tagline}
        description={currentSubpage?.desc || currentCategory?.desc || data.heroDescription}
        breadcrumbs={breadcrumbs}
        primaryCta={{
          label: currentSubpage?.cta || currentCategory?.cta || 'Start a Transformation Conversation',
          href: currentSubpage?.ctaHref || currentCategory?.ctaHref || '/contact/transformation-conversation'
        }}
        secondaryCta={{
          label: 'Take Health Check',
          href: '/transformation-health-check'
        }}
      />

      {/* 2. SUBPAGE DEEP-DIVE CONTENT */}
      {isSubpage && currentSubpage && (
        <div className="space-y-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* A. Business Problem → Capability → Solution → Outcome Flow */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-primary-500/25 shadow-2xl space-y-6">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest block mb-1">
                Value Realization Model
              </span>
              <h2 className="text-2xl font-bold text-white">How This Capability Drives Enterprise Value</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                <span className="text-xs font-bold text-red-400 uppercase font-mono">01 The Challenge</span>
                <h3 className="text-sm font-bold text-white">Operational Constraint</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Inefficient workflows, legacy debt, or lack of digital reach hindering growth.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                <span className="text-xs font-bold text-blue-400 uppercase font-mono">02 Our Capability</span>
                <h3 className="text-sm font-bold text-white">{currentSubpage.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Bespoke strategy, rigorous engineering, and tailored architecture.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                <span className="text-xs font-bold text-teal-400 uppercase font-mono">03 What We Enable</span>
                <h3 className="text-sm font-bold text-white">Turnkey Solution</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Scalable software, optimized funnels, or intelligent automation pipelines.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase font-mono">04 Business Outcome</span>
                <h3 className="text-sm font-bold text-white">Measurable Impact</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{currentSubpage.outcomes}</p>
              </div>
            </div>
          </div>

          {/* B. Specific Lifecycle for Software Development */}
          {subpageSlug === 'software-development' && (
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-6">
              <div className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2">
                From Idea to Scalable Platform
              </div>
              <h2 className="text-2xl font-bold text-white">The Software Engineering Lifecycle</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-2">
                {['01 Discover', '02 Define', '03 Design', '04 Build', '05 Integrate', '06 Launch', '07 Improve'].map((phase, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/8 text-center">
                    <span className="text-xs font-bold text-primary-300">{phase}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* C. Specific Sections for AI & Automation */}
          {subpageSlug === 'ai-automation' && (
            <div className="space-y-8">
              {/* Where AI Can Create Value */}
              <div className="p-8 rounded-3xl bg-slate-900/90 border border-primary-500/25 shadow-2xl space-y-6">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  High-Impact Applications
                </div>
                <h2 className="text-2xl font-bold text-white">Where AI Creates Measurable Commercial Value</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: 'Customer Operations', desc: '24/7 self-service knowledge assistants and intelligent ticket triage.' },
                    { title: 'Marketing Automation', desc: 'Hyper-personalized messaging, automated copy generation, and dynamic segmentation.' },
                    { title: 'Sales Enablement', desc: 'Predictive lead scoring, meeting transcription summarization, and CRM auto-updates.' },
                    { title: 'Knowledge Management', desc: 'Internal semantic search across company docs, SOPs, and compliance records.' },
                    { title: 'Internal Operations', desc: 'Automated invoice extraction, contract review, and reconciliation workflows.' },
                    { title: 'Decision Support', desc: 'Data-driven forecasting, anomaly detection, and margin leak identification.' },
                  ].map((val, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/8 space-y-1">
                      <div className="text-sm font-bold text-white">{val.title}</div>
                      <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsible AI Framework */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-950/50 via-slate-900 to-secondary-950/40 border border-primary-500/30 shadow-2xl space-y-6">
                <div className="text-xs font-bold text-secondary-400 uppercase tracking-widest">
                  Enterprise Governance
                </div>
                <h2 className="text-2xl font-bold text-white">Responsible AI & Governance Standards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: 'Human-in-the-Loop', desc: 'Critical operational and financial decisions retain verified human oversight.' },
                    { title: 'Data Privacy & Isolation', desc: 'Zero proprietary data training on public models; SOC2 compliant isolation.' },
                    { title: 'Security & Token Controls', desc: 'Strict API key management, rate limits, and audit logs for every automated query.' },
                    { title: 'Reliability & Hallucination Defense', desc: 'Grounding via Retrieval-Augmented Generation (RAG) against verified facts.' },
                    { title: 'Business Relevance', desc: 'Zero vanity AI; solutions are prioritized strictly by measurable ROI and time saved.' },
                    { title: 'Regulatory Compliance', desc: 'Adherence to evolving AI transparency mandates and ethical guidelines.' },
                  ].map((gov, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/8 space-y-1">
                      <div className="text-xs font-bold text-emerald-400">{gov.title}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{gov.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* D. Deliverables & Capabilities */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 space-y-6">
            <h2 className="text-2xl font-bold text-white">
              What We Deliver in {currentSubpage.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentSubpage.capabilities.map((cap, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* E. Delivery Methodology */}
          {currentSubpage.methodology && (
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary-950/40 to-slate-900/80 border border-primary-500/20 space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Our Engineering & Advisory Methodology
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {currentSubpage.methodology.map((m, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                    <h3 className="text-base font-bold text-white">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* F. Outcome Deliverables */}
          <OutcomeCards
            title="Expected Business Outcomes"
            subtitle="How this capability translates into tangible commercial advantage."
            outcomes={[
              { title: 'Operational Speed', desc: 'Eliminated manual handoffs and automated workflows that shorten cycle times.' },
              { title: 'Scalable Architecture', desc: 'Modern software and platform foundations built to support multi-fold growth.' },
              { title: 'Market Authority', desc: 'Elevated brand perception, authoritative search presence, and higher conversion rates.' },
              { title: 'Measurable ROI', desc: 'Transparent reporting, lower customer acquisition costs, and compounding value.' }
            ]}
          />
        </div>
      )}

      {/* 3. CATEGORY HUB VIEW */}
      {isCategory && currentCategory && (
        <div className="space-y-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Core Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCategory.deliverables.map((del, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">{del}</span>
                </div>
              ))}
            </div>
          </div>

          {currentCategory.methodology && (
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary-950/40 to-slate-900/80 border border-primary-500/20 space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Our Approach to {currentCategory.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {currentCategory.methodology.map((m, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                    <h3 className="text-base font-bold text-white">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. MAIN HUB: 4 PILLARS OVERVIEW */}
      {isHub && (
        <section className="py-20 bg-slate-900/50 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Integrated Practice Areas
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                Four Pillars of Capability
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                From initial market research and brand architecture to custom software engineering and digital marketing campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.categories.map((cat) => {
                const IconComponent = catIcons[cat.id] || Compass;
                return (
                  <div
                    key={cat.id}
                    className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-slate-300">
                          {cat.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs font-semibold text-secondary-400 mb-4">
                        {cat.tagline}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        {cat.desc}
                      </p>
                    </div>

                    <Link
                      to={cat.href}
                      className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-white/[0.04] hover:bg-primary-500/20 border border-white/8 hover:border-primary-500/30 text-xs font-bold text-primary-300 transition-all"
                    >
                      <span>Explore {cat.title}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 6. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Capability Enablement"
        heading="Bring Specialized Capabilities to Your Initiative"
        description="Whether you need strategic advisory, bespoke software development, or conversion-focused digital growth, our multidisciplinary team is ready."
        primaryCta={{ label: currentSubpage?.cta || 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
        secondaryCta={{ label: 'Explore All Capabilities', href: '/capabilities' }}
      />
    </div>
  );
}

export default memo(CapabilitiesHubPage);
