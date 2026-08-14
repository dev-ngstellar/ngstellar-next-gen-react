import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ApproachMenu({ item, onItemClick, currentPath }) {
  return (
    <div className="w-full max-w-[940px] rounded-2xl bg-slate-950/98 backdrop-blur-2xl border border-white/12 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] overflow-hidden p-5 sm:p-6 text-slate-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-400 bg-primary-500/10 border border-primary-500/20 px-2 py-0.5 rounded-md">
              Methodology
            </span>
            <span className="text-xs text-slate-400">
              The 6-Stage Transformation Framework
            </span>
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mt-1">
            Engineered for Predictable, Sustainable Impact
          </h3>
        </div>

        <Link
          to={item.cta.href}
          onClick={onItemClick}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400 hover:text-primary-300 transition-colors group"
        >
          <span>{item.cta.label}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* 6-Stage Journey Timeline */}
      <div className="relative">
        {/* Subtle Horizontal Connecting Line */}
        <div className="hidden lg:block absolute top-[26px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-primary-500/20 via-primary-400/40 to-secondary-500/30 z-0" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 relative z-10">
          {item.stages.map((stage) => {
            const isActive = currentPath === stage.href;

            return (
              <Link
                key={stage.step}
                to={stage.href}
                onClick={onItemClick}
                className={`group flex flex-col p-2.5 sm:p-3 rounded-xl transition-all duration-150 ${
                  isActive
                    ? 'bg-primary-500/15 border border-primary-500/40 shadow-lg shadow-primary-500/10'
                    : 'bg-white/[0.02] hover:bg-white/[0.06] border border-white/8 hover:border-white/20'
                }`}
              >
                {/* Step badge bubble */}
                <div className="flex items-center justify-center mb-2.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-150 ${
                      isActive
                        ? 'bg-primary-500 text-white ring-4 ring-primary-500/20 shadow-md shadow-primary-500/30 scale-105'
                        : 'bg-slate-900 border border-white/20 text-slate-300 group-hover:border-primary-400 group-hover:text-primary-300 group-hover:scale-105'
                    }`}
                  >
                    {stage.step}
                  </div>
                </div>

                <div className="text-center">
                  <h4
                    className={`text-xs font-bold transition-colors mb-1 ${
                      isActive
                        ? 'text-primary-300'
                        : 'text-white group-hover:text-primary-300'
                    }`}
                  >
                    {stage.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed line-clamp-3">
                    {stage.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
