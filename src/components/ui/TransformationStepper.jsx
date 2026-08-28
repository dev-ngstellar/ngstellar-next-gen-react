import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const STAGES = [
  { step: '01', id: 'discover', title: 'Discover', href: '/approach/discover', tagline: 'Understand Context & Challenges' },
  { step: '02', id: 'diagnose', title: 'Diagnose', href: '/approach/diagnose', tagline: 'Assess Gaps & Root Causes' },
  { step: '03', id: 'design', title: 'Design', href: '/approach/design', tagline: 'Target Operating Blueprint' },
  { step: '04', id: 'connect', title: 'Connect', href: '/approach/connect', tagline: 'Ecosystem & Team Alignment' },
  { step: '05', id: 'transform', title: 'Transform', href: '/approach/transform', tagline: 'Agile Sprint Execution' },
  { step: '06', id: 'sustain', title: 'Sustain', href: '/approach/sustain', tagline: 'Continuous Governance' },
];

function TransformationStepper({ activeStepId, showOverviewLink }) {
  const location = useLocation();
  const isOverviewPage = location.pathname.replace(/\/+$/, '') === '/approach';
  const shouldShowOverviewLink = showOverviewLink !== undefined ? showOverviewLink : !isOverviewPage;

  const currentIndex = STAGES.findIndex((s) => s.id === activeStepId);
  const prevStage = currentIndex > 0 ? STAGES[currentIndex - 1] : null;
  const nextStage = currentIndex < STAGES.length - 1 ? STAGES[currentIndex + 1] : null;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 6-Stage Persistent Journey Stepper */}
      <div className="p-4 sm:p-6 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-xl mb-8">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            The 6-Stage Transformation Lifecycle
          </span>
          {shouldShowOverviewLink && (
            <Link
              to="/approach"
              className="text-xs font-bold text-primary-400 hover:text-primary-300 transition-colors"
            >
              View Framework Overview →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {STAGES.map((stg, idx) => {
            const isActive = stg.id === activeStepId;
            const isCompleted = currentIndex !== -1 && idx < currentIndex;

            return (
              <Link
                key={stg.id}
                to={stg.href}
                className={`p-3 rounded-2xl transition-all duration-200 flex flex-col justify-between border ${
                  isActive
                    ? 'bg-primary-600/20 border-primary-500 shadow-lg shadow-primary-500/10'
                    : isCompleted
                    ? 'bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40 text-slate-300'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/15 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                      isActive
                        ? 'bg-primary-500 text-white'
                        : isCompleted
                        ? 'bg-emerald-500/30 text-emerald-300'
                        : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {stg.step}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-primary-400 animate-ping" />
                  )}
                </div>
                <div>
                  <div className={`text-xs font-bold ${isActive ? 'text-primary-200' : 'text-white'}`}>
                    {stg.title}
                  </div>
                  <div className="text-[10px] text-slate-400 leading-snug line-clamp-1 mt-0.5">
                    {stg.tagline}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Prev / Next Stage Quick-Navigation Bar */}
      <div className="flex items-center justify-between gap-4 py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/8">
        {prevStage ? (
          <Link
            to={prevStage.href}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-primary-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Previous: Stage {prevStage.step} ({prevStage.title})</span>
          </Link>
        ) : (
          <div className="text-xs text-slate-600">First Stage of Lifecycle</div>
        )}

        {nextStage ? (
          <Link
            to={nextStage.href}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors group ml-auto"
          >
            <span>Next: Stage {nextStage.step} ({nextStage.title})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors ml-auto"
          >
            <span>Complete Lifecycle — Start Transformation →</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default memo(TransformationStepper);
