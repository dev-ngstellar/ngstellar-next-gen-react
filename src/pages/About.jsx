import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Compass,
  Target,
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Users,
  Building,
  Award,
  Milestone,
  Lightbulb,
  Workflow,
  Cpu,
  Layers
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import OutcomeCards from '../components/ui/OutcomeCards';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { ABOUT_HUB } from '../data/siteContent';

function About() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/about';
  const subSlug = currentPath.split('/')[2]; // 'who-we-are', 'purpose', 'principles', 'leadership', 'journey'

  const data = ABOUT_HUB;

  let pageTitle = data.h1;
  let pageDescription = data.metaDescription;

  if (subSlug === 'who-we-are') {
    pageTitle = 'Who We Are';
    pageDescription = 'NG Stellar is an integrated Transformation & Sustainability Advisory firm bridging business strategy with custom software and continuous governance.';
  } else if (subSlug === 'purpose') {
    pageTitle = 'Our Purpose';
    pageDescription = 'Our Purpose: Transform the Business. Sustain the Impact. Helping organizations build resilient foundations that thrive across market cycles.';
  } else if (subSlug === 'principles') {
    pageTitle = 'Our Principles';
    pageDescription = 'Our Principles: Business-first thinking, evidence-based decisions, sustainable value creation, and practical transformation.';
  } else if (subSlug === 'leadership') {
    pageTitle = 'Leadership & Governance';
    pageDescription = 'NG Stellar Leadership: Experienced corporate advisors, technology architects, and process engineers guided by integrity.';
  } else if (subSlug === 'journey') {
    pageTitle = 'Our Journey & Evolution';
    pageDescription = 'Our Journey: From engineering high-performance software to delivering integrated enterprise transformation advisory.';
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ];

  if (subSlug) {
    breadcrumbs.push({ name: pageTitle, url: currentPath });
  }

  // Related content
  const relatedLinks = [
    { title: 'Our 6-Stage Approach', category: 'Methodology', desc: 'From initial discovery to continuous governance.', href: '/approach' },
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Benchmark organizational maturity across 5 dimensions.', href: '/transformation-health-check' },
    { title: 'Capabilities Overview', category: 'Execution', desc: 'Explore our integrated strategy, experience & tech capabilities.', href: '/capabilities' },
    { title: 'Transformation Stories', category: 'Case Studies', desc: 'Real-world illustrative transformation scenarios.', href: '/transformation-stories' },
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
        eyebrow="Transformation & Sustainability Advisory"
        title={pageTitle}
        tagline={data.tagline}
        description={data.heroDescription}
        breadcrumbs={breadcrumbs}
        primaryCta={{
          label: 'Start a Transformation Conversation',
          href: '/contact'
        }}
        secondaryCta={{
          label: 'Explore Our Approach',
          href: '/approach'
        }}
      />

      {/* Navigation Tabs Bar */}
      <section className="py-4 bg-slate-900/60 border-y border-white/10 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: 'Overview', href: '/about', id: undefined },
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
                    isActive ? 'bg-primary-600 text-white shadow-lg' : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL NARRATIVE SECTIONS */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* WHO WE ARE */}
        {(!subSlug || subSlug === 'who-we-are') && (
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-10">
            <div>
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2 block">
                Positioning & Operating Model
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                {data.whoWeAre.heading}
              </h2>
              <p className="text-lg text-primary-300 font-semibold mb-6">
                {data.whoWeAre.subheading}
              </p>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
                {data.whoWeAre.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* 4-part Narrative Framework: What We Believe, What We Do, How We Work, Why It Matters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <span className="text-xs font-bold text-secondary-400 uppercase font-mono">01 What We Believe</span>
                <h3 className="text-base font-bold text-white">Strategy Without Execution Fails</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Lasting transformation requires equal rigor in business model clarity, frontline workflow redesign, and custom software delivery.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <span className="text-xs font-bold text-primary-400 uppercase font-mono">02 What We Do</span>
                <h3 className="text-base font-bold text-white">Integrated Advisory & Execution</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  We diagnose organizational friction, architect target operating models, engineer custom platforms, and embed governance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <span className="text-xs font-bold text-teal-400 uppercase font-mono">03 How We Work</span>
                <h3 className="text-base font-bold text-white">Collaborative Sprint Cadences</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  We embed alongside leadership teams as a unified coalition, ensuring continuous knowledge transfer and team empowerment.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase font-mono">04 Why It Matters</span>
                <h3 className="text-base font-bold text-white">Compounding Enterprise Resilience</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Organizations built with sustainable unit economics, automated operations, and clear governance thrive across market cycles.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* OUR PURPOSE */}
        {(!subSlug || subSlug === 'purpose') && (
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-primary-950/80 via-slate-900 to-secondary-950/70 border border-primary-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest block">
              Why We Exist
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {data.purpose.heading}
            </h2>
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight py-4">
              <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-emerald-300 bg-clip-text text-transparent">
                {data.purpose.coreMessage}
              </span>
            </div>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              {data.purpose.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        )}

        {/* OUR PRINCIPLES */}
        {(!subSlug || subSlug === 'principles') && (
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-8">
            <div>
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Core Engagement Values
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {data.principles.heading}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                {data.principles.subheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.principles.list.map((pr, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {pr.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                    {pr.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEADERSHIP */}
        {(!subSlug || subSlug === 'leadership') && (
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-6">
            <span className="text-xs font-bold text-primary-400 uppercase tracking-widest block">
              Advisory Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {data.leadership.heading}
            </h2>
            <p className="text-primary-300 text-base font-semibold">
              {data.leadership.subheading}
            </p>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
              {data.leadership.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center space-y-2">
                <Compass className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                <h3 className="text-base font-bold text-white">Strategic Advisory Practice</h3>
                <p className="text-xs text-slate-400">Business modeling, diagnostic roadmaps & target operating models.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center space-y-2">
                <Cpu className="w-8 h-8 text-secondary-400 mx-auto mb-2" />
                <h3 className="text-base font-bold text-white">Technology & Engineering Practice</h3>
                <p className="text-xs text-slate-400">Custom software, digital platforms, AI automations & cloud architecture.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center space-y-2">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h3 className="text-base font-bold text-white">Sustainability & Resilience Practice</h3>
                <p className="text-xs text-slate-400">Governance frameworks, resource efficiency & operational continuity.</p>
              </div>
            </div>
          </div>
        )}

        {/* OUR JOURNEY */}
        {(!subSlug || subSlug === 'journey') && (
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl space-y-8">
            <div>
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Evolution & Strategic Direction
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {data.journey.heading}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                {data.journey.subheading}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.journey.milestones.map((m, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs font-mono font-bold text-primary-400 mb-2">
                      Phase 0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{m.stage}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 4. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Transformation Partnership"
        heading="Partner With NG Stellar"
        description="Transform your business operations and sustain your market impact with our integrated advisory and technology capabilities."
        primaryCta={{ label: 'Start a Transformation Conversation', href: '/contact' }}
        secondaryCta={{ label: 'Request a Health Check', href: '/transformation-health-check' }}
      />
    </div>
  );
}

export default memo(About);
