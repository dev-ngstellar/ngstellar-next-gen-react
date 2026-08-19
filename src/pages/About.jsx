import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Briefcase,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Users,
  Building,
  Scale,
  Cpu,
  Target,
  Layers,
  Milestone
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { ABOUT_HUB } from '../data/siteContent';

const leaderIcons = [Briefcase, Compass, Scale, Cpu];

function About() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/about';
  const subSlug = currentPath.split('/')[2]; // 'who-we-are', 'purpose', 'principles', 'leadership', 'journey'

  const data = ABOUT_HUB;

  let pageTitle = data.h1;
  let pageDescription = data.metaDescription;

  if (subSlug === 'who-we-are') {
    pageTitle = `${data.whoWeAre.h1} | NG Stellar`;
    pageDescription = data.whoWeAre.text;
  } else if (subSlug === 'purpose') {
    pageTitle = `${data.purpose.h1} | NG Stellar`;
    pageDescription = data.purpose.text;
  } else if (subSlug === 'principles') {
    pageTitle = `${data.principles.h1} | NG Stellar`;
    pageDescription = 'Our Principles: Business First, Practical Transformation, Ecosystem Thinking, Long-Term Value, Responsible Innovation, Measurable Impact.';
  } else if (subSlug === 'leadership') {
    pageTitle = `${data.leadership.h1} | NG Stellar`;
    pageDescription = 'Leadership at NG Stellar: Bharathi, Gokul Rengarajan, CS Rajmohan Nithya, Selvi Rajendran.';
  } else if (subSlug === 'journey') {
    pageTitle = `${data.journey.h1} | NG Stellar`;
    pageDescription = 'From technology execution to transformation thinking. The journey of NG Stellar.';
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ];

  if (subSlug) {
    breadcrumbs.push({ name: pageTitle.replace(' | NG Stellar', ''), url: currentPath });
  }

  const relatedLinks = [
    { title: 'Our Approach', category: 'Methodology', desc: 'Discover → Diagnose → Design → Connect → Transform → Sustain.', href: '/approach' },
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Assess your business across 5 critical dimensions.', href: '/transformation-health-check' },
    { title: 'Our Capabilities', category: 'Execution', desc: 'Explore strategy, research, tech and digital growth.', href: '/capabilities' },
    { title: 'Transformation Ecosystem', category: 'Ecosystem', desc: 'Connect with specialists, partners and startups.', href: '/ecosystem' },
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
        eyebrow="Transformation & Sustainability Advisory"
        title={data.h1}
        tagline="Transform the Business. Sustain the Impact."
        description="NG Stellar is a Transformation & Sustainability Advisory firm helping businesses navigate growth, technology, organizational change and sustainability."
        breadcrumbs={breadcrumbs}
        primaryCta={data.ctaPrimary}
        secondaryCta={data.ctaSecondary}
      />

      {/* Navigation Submenu Tabs */}
      <section className="py-4 bg-slate-900/60 border-y border-white/10 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: 'All About', href: '/about', id: undefined },
              { label: 'Who We Are', href: '/about/who-we-are', id: 'who-we-are' },
              { label: 'Our Purpose', href: '/about/purpose', id: 'purpose' },
              { label: 'Our Principles', href: '/about/principles', id: 'principles' },
              { label: 'Leadership', href: '/about/leadership', id: 'leadership' },
              { label: 'Our Journey', href: '/about/journey', id: 'journey' },
            ].map((tab) => {
              const isActive = subSlug === tab.id;
              return (
                <Link
                  key={tab.label}
                  to={tab.href}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. MAIN EDITORIAL SECTIONS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-10 sm:space-y-12">
        {/* 10.1 WHO WE ARE */}
        {(!subSlug || subSlug === 'who-we-are') && (
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl space-y-6">
            <span className="text-xs font-bold text-primary-400 uppercase tracking-widest block">
              Section 10.1
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {data.whoWeAre.h1}
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed max-w-4xl">
              {data.whoWeAre.text}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-1">
                <span className="text-xs font-bold text-secondary-400 uppercase tracking-wider">Positioning</span>
                <div className="text-base font-bold text-white">{data.whoWeAre.positioning}</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Brand Promise</span>
                <div className="text-base font-bold text-white">{data.whoWeAre.brandPromise}</div>
              </div>
            </div>
          </div>
        )}

        {/* 10.2 OUR PURPOSE */}
        {(!subSlug || subSlug === 'purpose') && (
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary-950/70 via-slate-900 to-slate-950 border border-primary-500/30 shadow-2xl space-y-6">
            <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest block">
              Section 10.2
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {data.purpose.h1}
            </h2>
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-teal-300 to-emerald-400">
              {data.purpose.coreMessage}
            </div>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
              {data.purpose.text}
            </p>
          </div>
        )}

        {/* 10.3 OUR PRINCIPLES */}
        {(!subSlug || subSlug === 'principles') && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">
                Section 10.3
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                {data.principles.h1}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.principles.items.map((principle, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-primary-400 mb-3 block">
                      Principle 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 10.4 LEADERSHIP */}
        {(!subSlug || subSlug === 'leadership') && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Section 10.4
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                {data.leadership.h1}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.leadership.members.map((leader, idx) => {
                const Icon = leaderIcons[idx % leaderIcons.length];
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 transition-all flex flex-col justify-between group shadow-xl"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-slate-300">
                          {leader.role}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-extrabold text-white">
                          {leader.name}
                        </h3>
                        <p className="text-xs text-primary-400 font-semibold mb-4">
                          {leader.role}
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {leader.bio}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Focus:</span>
                      <p className="text-xs font-semibold text-slate-200">
                        {leader.focus}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 10.5 OUR JOURNEY */}
        {(!subSlug || subSlug === 'journey') && (
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl space-y-6">
            <span className="text-xs font-bold text-primary-400 uppercase tracking-widest block">
              Section 10.5
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {data.journey.h1}
            </h2>
            <div className="text-xl sm:text-2xl font-bold text-secondary-300">
              {data.journey.tagline}
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl pt-2">
              {data.journey.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 1 ? 'font-bold text-white text-base sm:text-lg border-l-2 border-primary-500 pl-4 py-1' : ''}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 4. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Start the Conversation"
        heading="Transform the Business. Sustain the Impact."
        description="NG Stellar helps businesses understand what needs to change, connect the right capabilities and create transformation that delivers sustainable long-term value."
        primaryCta={{ label: 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
        secondaryCta={{ label: 'Explore Our Approach', href: '/approach' }}
      />
    </div>
  );
}

export default memo(About);
