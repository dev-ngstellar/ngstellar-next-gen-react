import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Gauge,
  Briefcase,
  Users,
  Workflow,
  Cpu,
  ShieldCheck,
  Milestone,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  AlertTriangle,
  FileText,
  Layers,
  Zap,
  Target
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import OutcomeCards from '../components/ui/OutcomeCards';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import {
  HealthCheckRadialDiagram,
  BusinessMaturityPipeline,
  ProcessFlowDiagram,
  TechnologyStackVisualizer,
  SustainabilityPillarsRadial
} from '../components/ui/FrameworkDiagram';
import { HEALTH_CHECK_HUB } from '../data/siteContent';

const iconsMap = {
  business: Briefcase,
  people: Users,
  process: Workflow,
  technology: Cpu,
  sustainability: ShieldCheck,
  roadmap: Milestone,
};

function HealthCheckHubPage() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/transformation-health-check';
  const subSlug = currentPath.split('/')[2]; // 'business', 'people', 'process', 'technology', 'sustainability', 'roadmap'

  const data = HEALTH_CHECK_HUB;
  const currentSubpage = subSlug ? data.assessmentSubpages.find((s) => s.id === subSlug) : null;

  const pageTitle = currentSubpage ? currentSubpage.h1 : data.h1;
  const pageDescription = currentSubpage ? currentSubpage.desc : data.metaDescription;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Transformation Health Check', url: '/transformation-health-check' },
  ];

  if (currentSubpage) {
    breadcrumbs.push({ name: currentSubpage.title, url: currentSubpage.href });
  }

  // Related content links
  const relatedLinks = [
    { title: 'Business Transformation', category: 'Transformation', desc: 'Realign strategy, pricing & business models for enduring value.', href: '/transformation/business' },
    { title: 'Transformation Roadmap', category: 'Diagnostic', desc: 'Synthesize health check findings into phased execution sprints.', href: '/transformation-health-check/roadmap' },
    { title: 'Technology Transformation', category: 'Engineering', desc: 'Modernize application architecture & eliminate tech debt.', href: '/transformation/technology' },
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

      {/* 1. PREMIUM HERO WITH DIAGNOSTIC VISUALIZATION */}
      <PremiumPageHero
        eyebrow="Executive Diagnostic Suite"
        title={currentSubpage ? currentSubpage.h1 : 'Transformation Health Check'}
        tagline={currentSubpage ? currentSubpage.title : 'Know Where You Stand. Know What to Change.'}
        description={pageDescription}
        breadcrumbs={breadcrumbs}
        primaryCta={{
          label: currentSubpage ? currentSubpage.cta : 'Request a Health Check',
          href: currentSubpage ? currentSubpage.ctaHref : '/contact'
        }}
        secondaryCta={{
          label: 'Explore Our Approach',
          href: '/approach'
        }}
        visualElement={<HealthCheckRadialDiagram activeId={subSlug} />}
      />

      {/* 2. SUBPAGE DEEP-DIVE OR FULL HUB OVERVIEW */}
      {currentSubpage ? (
        <div className="space-y-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* A. Dedicated Subject Framework Diagram */}
          {subSlug === 'business' && <BusinessMaturityPipeline />}
          {subSlug === 'process' && <ProcessFlowDiagram />}
          {subSlug === 'technology' && <TechnologyStackVisualizer />}
          {subSlug === 'sustainability' && <SustainabilityPillarsRadial />}

          {/* B. Specific People Assessment Model */}
          {subSlug === 'people' && (
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">
                Organizational Capability Hierarchy
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {['Leadership Alignment', 'Org Structure (RACI)', 'Talent & Skills Matrix', 'Workplace Culture', 'Cross-Team Agility', 'Change Readiness'].map((step, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center space-y-1">
                    <span className="text-xs font-mono font-bold text-indigo-300">Level 0{idx + 1}</span>
                    <div className="text-xs font-bold text-white">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* C. Roadmap Phase Timeline */}
          {subSlug === 'roadmap' && (
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-950/60 via-slate-900 to-secondary-950/40 border border-primary-500/30 shadow-2xl space-y-8">
              <div>
                <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest block mb-1">
                  End-to-End Delivery Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  From Diagnostic Finding to Compounding Value
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/8 space-y-2">
                  <span className="text-xs font-bold text-primary-400 font-mono">Phase 01</span>
                  <h3 className="text-base font-bold text-white">Diagnostic Discovery</h3>
                  <p className="text-xs text-slate-400">Baseline gap analysis across the 5 dimensions, risk audit & executive alignment.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/8 space-y-2">
                  <span className="text-xs font-bold text-cyan-400 font-mono">Phase 02</span>
                  <h3 className="text-base font-bold text-white">Target Operating Model</h3>
                  <p className="text-xs text-slate-400">Designing future-state workflows, technology stack blueprints & RACI governance.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/8 space-y-2">
                  <span className="text-xs font-bold text-teal-400 font-mono">Phase 03</span>
                  <h3 className="text-base font-bold text-white">Sprint Execution</h3>
                  <p className="text-xs text-slate-400">Agile software development, automated workflow cutover & frontline enablement.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/8 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 font-mono">Phase 04</span>
                  <h3 className="text-base font-bold text-white">Sustained Governance</h3>
                  <p className="text-xs text-slate-400">Executive KPI tracking, continuous improvement loops & resilience auditing.</p>
                </div>
              </div>
            </div>
          )}

          {/* D. What We Assess / We Look At */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-primary-400 uppercase tracking-wider block">Scope of Investigation</span>
                <h2 className="text-2xl font-bold text-white">What We Assess</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {currentSubpage.whatWeAssess.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* E. Strategic Questions We Explore */}
          {currentSubpage.keyQuestions && (
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary-950/40 to-slate-900/80 border border-primary-500/20 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-500/20 text-secondary-300 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-secondary-400 uppercase tracking-wider block">Strategic Inquiry</span>
                  <h2 className="text-2xl font-bold text-white">Questions We Explore</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentSubpage.keyQuestions.map((q, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/[0.04] border border-white/5 text-sm text-slate-200 font-medium leading-relaxed">
                    "{q}"
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* F. Outcome Deliverables */}
          <OutcomeCards
            title="Assessment Outcomes"
            subtitle="Concrete, actionable deliverables provided to your executive leadership team."
            outcomes={[
              { title: 'Clarity', desc: 'Unvarnished baseline metrics identifying hidden operational friction, margin leaks, and risk exposures.' },
              { title: 'Priorities', desc: 'Ranked transformation initiatives mapped by strategic business impact, implementation cost, and ROI.' },
              { title: 'Direction', desc: 'A phased, 90-day milestone transformation roadmap ready for board review and team alignment.' },
              { title: 'Sustained Value', desc: 'Governance safeguards and tracking KPIs designed to ensure improvements compound across quarters.' }
            ]}
          />
        </div>
      ) : (
        /* Full Hub Overview Grid */
        <section className="py-20 bg-slate-900/50 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Six Strategic Diagnostic Modules
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                See the Business From Every Angle
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Choose a specific diagnostic area to understand your maturity baseline, or request the full transformation health check for comprehensive executive clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.assessmentSubpages.map((subpage) => {
                const IconComponent = iconsMap[subpage.id] || Gauge;
                const isRoadmap = subpage.id === 'roadmap';

                return (
                  <div
                    key={subpage.id}
                    className={`p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                      isRoadmap
                        ? 'bg-gradient-to-br from-primary-950/80 via-slate-900 to-secondary-950/70 border-2 border-primary-400/40 hover:border-primary-400/80'
                        : 'bg-slate-900/80 border border-white/10 hover:border-primary-500/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        {isRoadmap && (
                          <span className="px-3 py-1 rounded-full bg-secondary-500/20 border border-secondary-500/40 text-[11px] font-bold text-secondary-300 uppercase tracking-wider">
                            Actionable Plan
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                        {subpage.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                        {subpage.desc}
                      </p>
                    </div>

                    <Link
                      to={subpage.href}
                      className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/[0.04] hover:bg-primary-500/20 border border-white/8 hover:border-primary-500/30 text-xs font-bold text-primary-300 transition-all"
                    >
                      <span>Explore {subpage.shortTitle}</span>
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

      {/* 4. CONTEXTUAL CALL TO ACTION */}
      <ContextualCTA
        eyebrow="Diagnostic Engagement"
        heading="Know Where Your Business Needs to Transform."
        description="Schedule a confidential Transformation Health Check with our senior advisory team to benchmark your operations against industry best practices."
        primaryCta={{ label: currentSubpage ? currentSubpage.cta : 'Request a Health Check', href: '/contact' }}
        secondaryCta={{ label: 'Start a Transformation Conversation', href: '/contact' }}
      />
    </div>
  );
}

export default memo(HealthCheckHubPage);
