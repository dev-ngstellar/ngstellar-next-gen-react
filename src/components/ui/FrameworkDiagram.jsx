import { memo } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Users,
  Workflow,
  Cpu,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Building2,
  Leaf,
  Layers,
  Scale,
  Rocket,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// 1. Five-Dimensional Health Check Assessment Radial
export const HealthCheckRadialDiagram = memo(function HealthCheckRadialDiagram({ activeId = null }) {
  const dimensions = [
    { id: 'business', label: 'Business Model & Strategy', icon: Briefcase, href: '/transformation-health-check/business', color: 'from-blue-500 to-indigo-600' },
    { id: 'people', label: 'People & Organization', icon: Users, href: '/transformation-health-check/people', color: 'from-indigo-500 to-violet-600' },
    { id: 'process', label: 'Process & Operations', icon: Workflow, href: '/transformation-health-check/process', color: 'from-teal-500 to-emerald-600' },
    { id: 'technology', label: 'Technology & AI', icon: Cpu, href: '/transformation-health-check/technology', color: 'from-cyan-500 to-blue-600' },
    { id: 'sustainability', label: '5D Sustainability', icon: ShieldCheck, href: '/transformation-health-check/sustainability', color: 'from-emerald-500 to-teal-600' },
  ];

  return (
    <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-primary-500/25 shadow-2xl backdrop-blur-xl w-full max-w-lg">
      <div className="text-center mb-6">
        <span className="text-[10px] font-bold text-secondary-400 uppercase tracking-widest block mb-1">
          Holistic Diagnostic Framework
        </span>
        <div className="text-sm font-bold text-white">Five Connected Diagnostic Dimensions</div>
      </div>

      <div className="space-y-2.5">
        {dimensions.map((dim) => {
          const Icon = dim.icon;
          const isActive = dim.id === activeId;
          return (
            <Link
              key={dim.id}
              to={dim.href}
              className={`group flex items-center justify-between p-3 rounded-xl transition-all duration-200 border ${
                isActive
                  ? 'bg-primary-600/20 border-primary-400 text-white shadow-md'
                  : 'bg-white/[0.03] border-white/8 hover:bg-white/[0.08] hover:border-primary-500/30 text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${dim.color} flex items-center justify-center text-white shadow-sm`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold group-hover:text-primary-300 transition-colors">
                  {dim.label}
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-primary-400 transition-opacity" />
            </Link>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 text-center">
        <Link
          to="/transformation-health-check/roadmap"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-400 hover:text-primary-300"
        >
          <span>→ Culminates in Transformation Roadmap</span>
        </Link>
      </div>
    </div>
  );
});

// 2. Business Assessment Maturity Pipeline
export const BusinessMaturityPipeline = memo(function BusinessMaturityPipeline() {
  const steps = [
    { title: 'Business Model', desc: 'Unit economics, pricing structure & margin viability' },
    { title: 'Market & Category', desc: 'Competitive positioning & addressable market whitespace' },
    { title: 'Customer Value', desc: 'Retention drivers, churn risks & customer journey friction' },
    { title: 'Revenue Engine', desc: 'Pipeline velocity, recurring layers & channel diversification' },
    { title: 'Operating Model', desc: 'Resource allocation, governance & decision-making rhythms' },
    { title: 'Sustained Growth', desc: 'Defensible competitive moats & compounding valuation' },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-xl">
      <div className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-4">
        Business Maturity Framework
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {steps.map((st, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1 relative">
            <div className="text-xs font-mono font-bold text-secondary-400">Step 0{idx + 1}</div>
            <div className="text-sm font-bold text-white">{st.title}</div>
            <div className="text-xs text-slate-400">{st.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

// 3. Process Flow Diagnostic Pipeline
export const ProcessFlowDiagram = memo(function ProcessFlowDiagram() {
  const stages = [
    { label: 'Current State', sub: 'Baseline discovery', icon: Layers },
    { label: 'Map Workflows', sub: 'Trace handoffs & SLAs', icon: Workflow },
    { label: 'Identify Friction', sub: 'Bottlenecks & waste', icon: AlertTriangle, alert: true },
    { label: 'Redesign', sub: 'Lean target SOPs', icon: CheckCircle2 },
    { label: 'Automate', sub: 'Digital & AI tools', icon: Zap },
    { label: 'Measure', sub: 'Real-time throughput', icon: TrendingUp },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl">
      <div className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-4">
        Operational Re-Engineering Lifecycle
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {stages.map((st, i) => {
          const Icon = st.icon;
          return (
            <div
              key={i}
              className={`p-3.5 rounded-xl border text-center flex flex-col justify-between ${
                st.alert
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                  : 'bg-white/[0.03] border-white/5 text-slate-200'
              }`}
            >
              <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-white/5 flex items-center justify-center">
                <Icon className={`w-4 h-4 ${st.alert ? 'text-amber-400' : 'text-primary-400'}`} />
              </div>
              <div className="text-xs font-bold">{st.label}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{st.sub}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

// 4. Technology Stack Assessment Visualizer
export const TechnologyStackVisualizer = memo(function TechnologyStackVisualizer() {
  const layers = [
    { name: 'Business Strategy & Objectives', focus: 'Value realization, KPIs & executive alignment', badge: 'Business Layer' },
    { name: 'Application Ecosystem', focus: 'ERP, CRM, custom platforms & SaaS solutions', badge: 'Software' },
    { name: 'Data Architecture & Pipelines', focus: 'Data integrity, governance & analytics models', badge: 'Data' },
    { name: 'API & Integration Layer', focus: 'REST/GraphQL, webhooks & microservices connectivity', badge: 'Connectivity' },
    { name: 'Cloud Infrastructure & Security', focus: 'AWS, GCP, Azure, cyber resilience & SOC2', badge: 'Infrastructure' },
    { name: 'AI & Automation Workflows', focus: 'Applied LLMs, RPA & automated intelligence', badge: 'Automation' },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-primary-500/25 shadow-2xl space-y-3">
      <div className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-3">
        Technology Stack Assessment Hierarchy
      </div>
      {layers.map((lay, idx) => (
        <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-white block">{lay.name}</span>
            <span className="text-[11px] text-slate-400">{lay.focus}</span>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-primary-500/15 border border-primary-500/25 text-[10px] font-bold text-primary-300 uppercase whitespace-nowrap">
            {lay.badge}
          </span>
        </div>
      ))}
    </div>
  );
});

// 5. Five Pillars of Sustainability Radial
export const SustainabilityPillarsRadial = memo(function SustainabilityPillarsRadial() {
  const pillars = [
    { title: 'Economic Sustainability', desc: 'Sustainable margins & revenue durability' },
    { title: 'People & Social', desc: 'Workplace well-being & talent retention' },
    { title: 'Governance', desc: 'Ethical compliance & risk oversight' },
    { title: 'Environmental', desc: 'Resource efficiency & waste reduction' },
    { title: 'Business Resilience', desc: 'Continuity planning & market adaptability' },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl">
      <div className="text-center mb-6">
        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
          The 5 Sustainability Pillars
        </span>
        <div className="text-base font-extrabold text-white">Anchored Around Long-Term Business Value</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {pillars.map((pil, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-emerald-500/15 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white">{pil.title}</div>
              <div className="text-[11px] text-slate-400 leading-snug">{pil.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

// 6. Ecosystem Network Diagram
export const EcosystemNetworkDiagram = memo(function EcosystemNetworkDiagram() {
  const nodes = [
    { name: 'Expert Network', icon: Users, color: 'text-blue-400' },
    { name: 'Industry Partners', icon: Building2, color: 'text-indigo-400' },
    { name: 'Technology Providers', icon: Cpu, color: 'text-cyan-400' },
    { name: 'Professional Services', icon: Scale, color: 'text-teal-400' },
    { name: 'Startups & Ventures', icon: Rocket, color: 'text-emerald-400' },
    { name: 'Incubators & Accelerators', icon: Lightbulb, color: 'text-amber-400' },
    { name: 'Implementation Partners', icon: Layers, color: 'text-violet-400' },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-primary-500/25 shadow-2xl relative overflow-hidden text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-xs font-bold text-primary-300 uppercase tracking-widest mb-6">
        <Sparkles className="w-3.5 h-3.5 text-secondary-400" />
        <span>Unified Advisory Coalition</span>
      </div>

      <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-extrabold text-sm max-w-xs mx-auto mb-6 shadow-xl">
        NG Stellar Hub
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/8 text-center flex flex-col items-center">
              <Icon className={`w-5 h-5 ${node.color} mb-1.5`} />
              <span className="text-xs font-semibold text-slate-200">{node.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
});
