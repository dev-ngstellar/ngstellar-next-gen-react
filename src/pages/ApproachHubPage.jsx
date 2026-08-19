import { memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Search,
  Activity,
  Layers,
  Network,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  TrendingUp,
  Workflow,
  HelpCircle,
  Users,
  Building2,
  RefreshCw,
  Target
} from 'lucide-react';
import SEO from '../components/SEO';
import PremiumPageHero from '../components/ui/PremiumPageHero';
import TransformationStepper from '../components/ui/TransformationStepper';
import OutcomeCards from '../components/ui/OutcomeCards';
import RelatedContent from '../components/ui/RelatedContent';
import ContextualCTA from '../components/ui/ContextualCTA';
import { APPROACH_HUB } from '../data/siteContent';

const stageIcons = {
  discover: Search,
  diagnose: Activity,
  design: Layers,
  connect: Network,
  transform: Cpu,
  sustain: ShieldCheck,
};

function ApproachHubPage() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, '') || '/approach';
  const stageSlug = currentPath.split('/')[2]; // 'discover', 'diagnose', 'design', 'connect', 'transform', 'sustain'

  const data = APPROACH_HUB;
  const currentStage = stageSlug ? data.stages.find((s) => s.id === stageSlug) : null;

  let pageTitle = currentStage ? currentStage.h1 : data.h1;
  let pageDescription = currentStage ? currentStage.desc : data.metaDescription;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Our Approach', url: '/approach' },
  ];

  if (currentStage) {
    breadcrumbs.push({ name: `Stage ${currentStage.step}: ${currentStage.title}`, url: currentStage.href });
  }

  // Related Content
  const relatedLinks = [
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Benchmark organizational maturity across 5 dimensions.', href: '/transformation-health-check' },
    { title: 'Transformation Stories', category: 'Case Studies', desc: 'Explore illustrative advisory scenarios across industries.', href: '/transformation-stories' },
    { title: 'Transformation Ecosystem', category: 'Collaboration', desc: 'Mobilizing domain specialists and technology alliances.', href: '/ecosystem' },
    { title: 'Custom Software Development', category: 'Engineering', desc: 'Agile engineering sprints delivering scalable platforms.', href: '/capabilities/technology-transformation/software-development' },
  ];

  // Stage-specific visual side element
  const stageHeroVisual = currentStage ? (
    <div className="p-6 rounded-3xl bg-slate-900/90 border border-primary-500/30 shadow-2xl backdrop-blur-xl max-w-sm text-center">
      <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-primary-600 to-secondary-500 text-white flex items-center justify-center font-mono font-bold text-lg mb-3 shadow-lg shadow-primary-500/25">
        {currentStage.step}
      </div>
      <div className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-1">Active Lifecycle Stage</div>
      <div className="text-xl font-bold text-white mb-2">{currentStage.title}</div>
      <p className="text-xs text-slate-300 leading-relaxed mb-4">{currentStage.tagline}</p>
      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/8 text-[11px] text-slate-300 text-left space-y-1">
        <span className="font-bold text-primary-300 block mb-1">Key Deliverables:</span>
        {currentStage.deliverables.map((del, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>{del}</span>
          </div>
        ))}
      </div>
    </div>
  ) : null;

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
        eyebrow={currentStage ? `Transformation Stage ${currentStage.step} of 06` : 'The 6-Stage Transformation Framework'}
        title={currentStage ? currentStage.h1 : 'Our Approach to Transformation'}
        tagline={currentStage ? currentStage.tagline : 'Engineered for Predictable, Sustainable Impact.'}
        description={pageDescription}
        breadcrumbs={breadcrumbs}
        primaryCta={{
          label: currentStage ? currentStage.cta : 'Start a Transformation Conversation',
          href: currentStage ? currentStage.ctaHref : '/contact/transformation-conversation'
        }}
        secondaryCta={{
          label: 'Explore Health Check',
          href: '/transformation-health-check'
        }}
        visualElement={stageHeroVisual}
      />

      {/* 2. PERSISTENT 6-STAGE STEPPER (If on a stage page or hub) */}
      <TransformationStepper activeStepId={stageSlug || null} />

      {/* 3. STAGE DEEP-DIVE CONTENT */}
      {currentStage ? (
        <div className="space-y-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stage Visual Framework */}
          {stageSlug === 'discover' && (
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-primary-500/25 shadow-2xl space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest block mb-1">
                  Discovery Inputs → Transformation Context
                </span>
                <h2 className="text-2xl font-bold text-white">Listen • Understand • Explore</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {['Business Strategy', 'People & Culture', 'Customer Friction', 'Market Dynamics', 'Tech Constraints', 'Sustainability'].map((feed, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/8 text-center space-y-1">
                    <span className="text-[10px] font-mono text-primary-400 uppercase">Input 0{i + 1}</span>
                    <div className="text-xs font-bold text-white">{feed}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {stageSlug === 'diagnose' && (
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-amber-500/25 shadow-2xl space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  Root Cause Analysis
                </span>
                <h2 className="text-2xl font-bold text-white">From Surface Symptoms to Root Bottlenecks</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20 space-y-2">
                  <span className="text-xs font-bold text-red-400 uppercase">Observed Symptom</span>
                  <div className="text-sm font-bold text-white">Operational Delays & Margin Leak</div>
                  <p className="text-xs text-slate-400">Teams spend 40% of time on manual data entry and spreadsheet consolidation.</p>
                </div>
                <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                  <span className="text-xs font-bold text-amber-400 uppercase">Root Cause</span>
                  <div className="text-sm font-bold text-white">Fragmented Legacy Silos</div>
                  <p className="text-xs text-slate-400">Lack of unified API integration between core ERP and customer ordering portals.</p>
                </div>
                <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase">Transformation Fix</span>
                  <div className="text-sm font-bold text-white">Automated Target Workflows</div>
                  <p className="text-xs text-slate-400">Re-engineer end-to-end data pipeline and deploy automated validation workflows.</p>
                </div>
              </div>
            </div>
          )}

          {stageSlug === 'design' && (
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/25 shadow-2xl space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  Architectural Synthesis
                </span>
                <h2 className="text-2xl font-bold text-white">Vision → Strategy → Transformation Blueprint</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Target Operating Model', desc: 'Redesigned cross-functional workflows and decision-making authority.' },
                  { title: 'Technology Architecture', desc: 'Scalable cloud infrastructure, modular APIs, and custom software specs.' },
                  { title: 'People & Change Enablement', desc: 'RACI governance, training modules, and capability upskilling tracks.' },
                  { title: 'Phased Implementation', desc: 'Sequenced 90-day execution sprints with dependency and risk mitigation.' },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-1">
                    <div className="text-xs font-mono font-bold text-cyan-400">Pillar 0{i + 1}</div>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {stageSlug === 'transform' && (
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-teal-500/25 shadow-2xl space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-1">
                  Agile Sprint Cadence
                </span>
                <h2 className="text-2xl font-bold text-white">Prioritize • Execute • Measure • Learn • Improve</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {['01 Prioritize Backlog', '02 Sprint Delivery', '03 Measure Value', '04 Frontline Learnings', '05 Iterative Scaling'].map((step, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/8 text-center">
                    <span className="text-xs font-bold text-teal-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {stageSlug === 'sustain' && (
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                  Continuous Improvement Loop ↺
                </span>
                <h2 className="text-2xl font-bold text-white">Governance & Compounding Enterprise Value</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">Executive Governance</h3>
                  <p className="text-xs text-slate-400">Quarterly board review cadences, SLA tracking & risk oversight auditing.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                  <TrendingUp className="w-6 h-6 text-teal-400" />
                  <h3 className="text-base font-bold text-white">KPI Performance Rhythms</h3>
                  <p className="text-xs text-slate-400">Automated real-time dashboards monitoring throughput, margin stability & error rates.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-2">
                  <RefreshCw className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Continuous Optimization</h3>
                  <p className="text-xs text-slate-400">Ongoing capability building, software patch cycles & resilience enhancements.</p>
                </div>
              </div>
            </div>
          )}

          {/* Activities & Deliverables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Core Activities */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Core Activities in Stage {currentStage.step} ({currentStage.title})
              </h2>
              <div className="space-y-3">
                {currentStage.activities.map((act, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-950/50 to-slate-900/80 border border-primary-500/20 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Stage Deliverables
              </h2>
              <div className="space-y-4">
                {currentStage.deliverables.map((del, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/[0.04] border border-white/8 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-primary-400">Deliverable 0{i + 1}</span>
                      <div className="text-sm font-bold text-white">{del}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outcome Deliverables */}
          <OutcomeCards
            title={`Stage ${currentStage.step} Value Realization`}
            subtitle="How this stage de-risks execution and ensures measurable progress."
            outcomes={[
              { title: 'Clarity', desc: 'Clear visibility into project dependencies, operational constraints, and target outcomes.' },
              { title: 'Governance', desc: 'Structured milestones with executive checkpoints before advancing to subsequent stages.' },
              { title: 'Execution Velocity', desc: 'Eliminated rework through rigorous upfront planning and modular sprint architecture.' },
              { title: 'Sustainable Value', desc: 'Long-term capability building that leaves your team empowered and self-sufficient.' }
            ]}
          />
        </div>
      ) : (
        /* Full Hub 6-Stage Timeline Overview */
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Structured Execution
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                The Six Stages of Transformation
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                From initial discovery through continuous governance, each stage is engineered to de-risk investment and guarantee compounding impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.stages.map((stage) => {
                const IconComponent = stageIcons[stage.id] || Search;
                return (
                  <div
                    key={stage.id}
                    className="p-7 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-black text-primary-400 font-mono">
                          {stage.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-primary-500/15 border border-primary-500/30 text-primary-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-semibold text-secondary-400 mb-3">
                        {stage.tagline}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed mb-6">
                        {stage.desc}
                      </p>
                    </div>

                    <Link
                      to={stage.href}
                      className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/[0.03] hover:bg-primary-500/20 border border-white/5 hover:border-primary-500/30 text-xs font-bold text-primary-300 transition-all"
                    >
                      <span>Explore Stage {stage.step}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. RELATED CONTENT */}
      <RelatedContent links={relatedLinks} />

      {/* 5. CONTEXTUAL CTA */}
      <ContextualCTA
        eyebrow="Methodology in Action"
        heading="Apply Our Transformation Framework to Your Organization"
        description="Schedule a strategy session to explore how our 6-stage framework can be tailored to solve your specific operational challenges."
        primaryCta={{ label: currentStage ? currentStage.cta : 'Start a Transformation Conversation', href: '/contact/transformation-conversation' }}
        secondaryCta={{ label: 'Take Health Check', href: '/transformation-health-check' }}
      />
    </div>
  );
}

export default memo(ApproachHubPage);
