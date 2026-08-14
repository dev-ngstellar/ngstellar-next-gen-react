import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  Users,
  Workflow,
  Cpu,
  ShieldCheck,
  Milestone,
  Sparkles,
  ArrowUpRight,
  Gauge,
} from 'lucide-react';

export default function HealthCheckMenu({ item, onItemClick, currentPath }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'briefcase':
        return Briefcase;
      case 'users':
        return Users;
      case 'workflow':
        return Workflow;
      case 'cpu':
        return Cpu;
      case 'shield':
        return ShieldCheck;
      case 'milestone':
        return Milestone;
      default:
        return Gauge;
    }
  };

  return (
    <div className="w-full max-w-[860px] rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 backdrop-blur-2xl border-2 border-primary-500/30 shadow-[0_25px_70px_-15px_rgba(51,95,168,0.35)] overflow-hidden p-5 sm:p-6 text-slate-200">
      {/* Top Banner / Spotlight Bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-secondary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
            <Gauge className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary-400 bg-primary-500/10 border border-primary-500/20 px-2 py-0.5 rounded-md">
                Executive Diagnostic
              </span>
              <span className="text-xs text-secondary-400 font-medium hidden sm:flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> High-Impact Strategic Audit
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
              Transformation Health Check
            </h3>
          </div>
        </div>

        <Link
          to={item.cta.href}
          onClick={onItemClick}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary-600/30 hover:brightness-110 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
        >
          <span>{item.cta.label}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <p className="text-xs text-slate-300/90 mb-4 leading-relaxed max-w-3xl">
        {item.tagline}
      </p>

      {/* Grid of Assessments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
        {item.items.map((subItem) => {
          const Icon = getIcon(subItem.icon);
          const isActive = currentPath === subItem.href;
          const isRoadmap = subItem.highlight;

          return (
            <Link
              key={subItem.title}
              to={subItem.href}
              onClick={onItemClick}
              className={`group flex flex-col justify-between p-3 rounded-xl transition-all duration-150 relative overflow-hidden ${
                isRoadmap
                  ? 'bg-gradient-to-br from-primary-950/80 to-secondary-950/60 border border-primary-400/40 hover:border-primary-400/70 shadow-md'
                  : isActive
                  ? 'bg-white/10 border border-primary-500/40'
                  : 'bg-white/[0.03] hover:bg-white/[0.07] border border-white/8 hover:border-white/15'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isRoadmap
                        ? 'bg-primary-500/30 text-primary-300'
                        : isActive
                        ? 'bg-primary-500/25 text-primary-300'
                        : 'bg-white/[0.05] text-slate-400 group-hover:bg-primary-500/15 group-hover:text-primary-300'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-400 group-hover:text-primary-400" />
                </div>
                <h4
                  className={`text-xs font-bold leading-snug transition-colors mb-1 ${
                    isRoadmap
                      ? 'text-primary-300 font-semibold'
                      : isActive
                      ? 'text-primary-300'
                      : 'text-white group-hover:text-primary-300'
                  }`}
                >
                  {subItem.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                  {subItem.description}
                </p>
              </div>

              {isRoadmap && (
                <div className="mt-2 text-[10px] font-semibold text-secondary-400 flex items-center gap-1 uppercase tracking-wider">
                  <span>Actionable Deliverable</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
