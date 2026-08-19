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
  let subpageSlug = pathSegments[2];

  // Handle aliases like e-commerce -> ecommerce
  if (subpageSlug === 'e-commerce') subpageSlug = 'ecommerce';
  if (categorySlug === 'branding' || categorySlug === 'ui-ux') {
    subpageSlug = categorySlug;
  }

  const data = CAPABILITIES_MASTER;

  // Resolve matching category or subpage
  const currentCategory = categorySlug ? data.categories.find((c) => c.id === categorySlug) : null;
  const currentSubpage = subpageSlug ? data.subpages[subpageSlug] : null;

  let pageTitle = data.seoTitle;
  let pageDescription = data.metaDescription;
  let pageH1 = data.h1;
  let pageBadge = 'Transformation Capabilities';

  if (currentSubpage) {
    pageTitle = currentSubpage.seoTitle || `${currentSubpage.title} | NG Stellar`;
    pageDescription = currentSubpage.metaDescription;
    pageH1 = currentSubpage.h1;
    pageBadge = currentSubpage.category;
  } else if (currentCategory) {
    pageTitle = currentCategory.seoTitle || `${currentCategory.title} | NG Stellar`;
    pageDescription = currentCategory.metaDescription;
    pageH1 = currentCategory.h1;
    pageBadge = currentCategory.badge || currentCategory.title;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Capabilities', url: '/capabilities' },
  ];

  if (currentCategory && !currentSubpage) {
    breadcrumbs.push({ name: currentCategory.title, url: currentCategory.href });
  } else if (currentSubpage) {
    if (currentCategory) {
      breadcrumbs.push({ name: currentCategory.title, url: currentCategory.href });
    }
    breadcrumbs.push({ name: currentSubpage.title, url: currentPath });
  }

  const relatedLinks = [
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Assess your capability maturity baseline.', href: '/transformation-health-check' },
    { title: 'Business Transformation', category: 'Advisory', desc: 'Strengthen business models, strategy and operations.', href: '/transformation/business' },
    { title: 'Sustainability Advisory', category: 'Sustainability', desc: 'Institutionalize economic durability and governance.', href: '/sustainability' },
    { title: 'Our Approach', category: 'Methodology', desc: 'Discover → Diagnose → Design → Connect → Transform → Sustain.', href: '/approach' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={currentPath}
        breadcrumbs={breadcrumbs}
      />

      {/* 1. HERO */}
      <PremiumPageHero
        eyebrow={pageBadge}
        title={pageH1}
        description={
          currentSubpage
            ? currentSubpage.heroText
            : currentCategory
            ? currentCategory.heroText
            : data.intro
        }
        breadcrumbs={breadcrumbs}
        primaryCta={{
          label: currentSubpage ? currentSubpage.cta : currentCategory ? currentCategory.cta : 'Start a Transformation Conversation',
          href: currentSubpage ? currentSubpage.ctaHref : currentCategory ? currentCategory.ctaHref : '/contact/transformation-conversation'
        }}
        secondaryCta={{
          label: 'Explore Our Approach',
          href: '/approach'
        }}
      />

      {/* 2. MAIN CONTENT BODY */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* SUBPAGE VIEW (e.g. Branding, UI/UX, Software Dev, Mobile Apps, E-commerce, AI & Automation, Digital Platforms, SEO, Content Marketing, Performance Marketing) */}
        {currentSubpage ? (
          <div className="space-y-8 sm:space-y-10">
            {/* Capabilities / Deliverables Grid */}
            {currentSubpage.capabilities && (
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {currentSubpage.capabilitiesTitle || 'Capabilities'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                  {currentSubpage.capabilities.map((cap, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Approach Steps if present (e.g. AI: Identify → Evaluate → Pilot → Implement → Measure) */}
            {currentSubpage.approachSteps && (
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-primary-500/20 space-y-6">
                <div className="text-xs font-bold text-secondary-400 uppercase tracking-wider">
                  {currentSubpage.approachTitle || 'Our Approach'}
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  {currentSubpage.approachSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-4">
                      <div className="px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-bold text-white">
                        {step}
                      </div>
                      {idx < currentSubpage.approachSteps.length - 1 && (
                        <span className="text-primary-400 font-bold text-sm">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Focus List or Text */}
            {currentSubpage.focusList && (
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 space-y-4">
                <div className="text-xs font-bold text-primary-400 uppercase tracking-wider">
                  {currentSubpage.focusTitle || 'Our Focus'}
                </div>
                <div className="flex flex-wrap gap-3">
                  {currentSubpage.focusList.map((f, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-primary-500/15 border border-primary-500/30 text-xs font-bold text-primary-200">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {currentSubpage.focusText && (
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
                <span className="text-xs font-bold text-primary-400 uppercase tracking-wider block mb-1">Focus</span>
                <p className="text-sm font-semibold text-white">{currentSubpage.focusText}</p>
              </div>
            )}

            {/* Goal Text if present (e.g. SEO) */}
            {currentSubpage.goalText && (
              <div className="p-6 rounded-2xl bg-primary-950/40 border border-primary-500/30 text-center">
                <span className="text-xs font-bold text-secondary-400 uppercase tracking-wider block mb-1">
                  {currentSubpage.goalTitle || 'Goal'}
                </span>
                <p className="text-base font-bold text-white">"{currentSubpage.goalText}"</p>
              </div>
            )}

            {/* Philosophy Text if present (e.g. Performance Marketing) */}
            {currentSubpage.philosophyText && (
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 text-center">
                <span className="text-xs font-bold text-primary-400 uppercase tracking-wider block mb-1">
                  {currentSubpage.philosophyTitle || 'Our Philosophy'}
                </span>
                <p className="text-base font-bold text-white">"{currentSubpage.philosophyText}"</p>
              </div>
            )}

            {/* Outcomes */}
            {(currentSubpage.outcomeText || currentSubpage.outcomesList) && (
              <div className="p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/25 space-y-4">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {currentSubpage.outcomeTitle || 'Outcome'}
                </div>
                {currentSubpage.outcomeText && (
                  <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                    {currentSubpage.outcomeText}
                  </p>
                )}
                {currentSubpage.outcomesList && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {currentSubpage.outcomesList.map((oc, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-sm font-bold text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{oc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : currentCategory ? (
          /* CATEGORY VIEW (e.g. Strategy & Research, Brand & Experience, Technology Transformation, Digital Growth) */
          <div className="space-y-8 sm:space-y-10">
            {/* Category Capabilities List */}
            {currentCategory.capabilities && (
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {currentCategory.capabilitiesTitle || 'Capabilities'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                  {currentCategory.capabilities.map((cap, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Approach Steps if present (e.g. Technology: Assess → Architect → Build → Integrate → Optimize) */}
            {currentCategory.approachSteps && (
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-primary-500/20 space-y-6">
                <div className="text-xs font-bold text-secondary-400 uppercase tracking-wider">
                  {currentCategory.approachTitle || 'Our Approach'}
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  {currentCategory.approachSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-4">
                      <div className="px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-bold text-white">
                        {step}
                      </div>
                      {idx < currentCategory.approachSteps.length - 1 && (
                        <span className="text-primary-400 font-bold text-sm">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Child Links if category has sub-disciplines */}
            {currentCategory.childLinks && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">
                  {currentCategory.childLinksTitle || 'Specialized Capabilities'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentCategory.childLinks.map((cl, i) => (
                    <Link
                      key={i}
                      to={cl.href}
                      className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 transition-all flex flex-col justify-between group shadow-lg"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors mb-2">
                          {cl.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                          {cl.desc}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-primary-400 group-hover:text-primary-300">
                        <span>Explore Capability</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Category Outcomes */}
            {(currentCategory.outcomeText || currentCategory.outcomesList) && (
              <div className="p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/25 space-y-4">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {currentCategory.outcomeTitle || 'Outcome'}
                </div>
                {currentCategory.outcomeText && (
                  <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                    {currentCategory.outcomeText}
                  </p>
                )}
                {currentCategory.outcomesList && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {currentCategory.outcomesList.map((oc, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-sm font-bold text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{oc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* FULL CAPABILITIES HUB VIEW (4 MAJOR AREAS) */
          <div className="space-y-8 sm:space-y-10">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">
                Integrated Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                Four Major Capability Areas
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We combine strategic business thinking, creativity, engineering excellence, and digital growth to deliver end-to-end transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.categories.map((cat, idx) => {
                const IconComponent = catIcons[cat.id] || Compass;
                return (
                  <div
                    key={cat.id}
                    className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                        {cat.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {cat.heroText.split('\n\n')[0]}
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
        )}
      </div>

      {/* 3. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 4. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Transformation Capabilities"
        heading="Ready to execute your transformation?"
        description="Let's understand where you are today, identify what needs to change and build a practical path toward sustainable impact."
        primaryCta={{ label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
        secondaryCta={{ label: 'Explore Health Check', href: '/transformation-health-check' }}
      />
    </div>
  );
}

export default memo(CapabilitiesHubPage);
