import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, ArrowUpRight, Sparkles } from 'lucide-react';

export default function InsightsMenu({ item, onItemClick, currentPath }) {
  return (
    <div className="w-full max-w-[780px] rounded-2xl bg-slate-950/98 backdrop-blur-2xl border border-white/12 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] overflow-hidden p-5 sm:p-6 text-slate-200">
      <div className="grid grid-cols-12 gap-5 sm:gap-6">
        {/* Left Column: Topics */}
        <div className="col-span-6 border-r border-white/10 pr-5 space-y-1">
          <div className="flex items-center justify-between mb-2.5 px-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Insight Themes
            </span>
            <Link
              to={item.cta.href}
              onClick={onItemClick}
              className="text-xs font-semibold text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center gap-1 group"
            >
              <span>All Articles</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {item.items.map((subItem) => {
            const isActive = currentPath === subItem.href;

            return (
              <Link
                key={subItem.title}
                to={subItem.href}
                onClick={onItemClick}
                className={`group flex items-start gap-2.5 p-2 rounded-xl transition-all duration-150 ${
                  isActive
                    ? 'bg-primary-500/15 border border-primary-500/30 text-white'
                    : 'hover:bg-white/[0.06] border border-transparent text-slate-200'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                    isActive
                      ? 'bg-primary-500/25 text-primary-300'
                      : 'bg-white/[0.05] text-slate-400 group-hover:bg-primary-500/15 group-hover:text-primary-400'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4
                      className={`text-xs font-bold transition-colors ${
                        isActive
                          ? 'text-primary-300'
                          : 'text-white group-hover:text-primary-300'
                      }`}
                    >
                      {subItem.title}
                    </h4>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-400 group-hover:text-primary-400" />
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {subItem.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Right Column: Featured Insight Card */}
        <div className="col-span-6 flex flex-col justify-between">
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2.5 px-1">
            Featured Briefing
          </div>

          {item.featuredInsight && (
            <Link
              to={item.featuredInsight.href}
              onClick={onItemClick}
              className="group flex flex-col justify-between flex-1 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-primary-950/40 via-slate-900/80 to-slate-950/90 border border-primary-500/20 hover:border-primary-400/40 transition-all duration-200 hover:shadow-xl hover:shadow-primary-500/10"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary-500/15 border border-primary-500/30 text-[10px] font-semibold text-primary-300 uppercase tracking-wider">
                    <Sparkles className="w-2.5 h-2.5" />
                    {item.featuredInsight.tag}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.featuredInsight.readTime}
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-primary-300 transition-colors leading-snug mb-2">
                  {item.featuredInsight.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  How high-performing leaders are embedding environmental and social resilience directly into their core business architectures.
                </p>
              </div>

              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-primary-400 group-hover:text-primary-300">
                <span>Read Full Briefing</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
