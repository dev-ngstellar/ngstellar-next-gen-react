import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Sparkles, Cpu, TrendingUp, Layers, ArrowUpRight } from 'lucide-react';

export default function StoriesMenu({ item, onItemClick, currentPath }) {
  const getIcon = (title) => {
    if (title.includes('Business')) return Layers;
    if (title.includes('Process')) return Sparkles;
    if (title.includes('Technology')) return Cpu;
    return TrendingUp;
  };

  return (
    <div className="w-full max-w-[660px] rounded-2xl bg-slate-950/98 backdrop-blur-2xl border border-white/12 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] overflow-hidden p-5 sm:p-6 text-slate-200">
      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1">
            Proven Outcomes
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
            Client Transformation Stories
          </h3>
        </div>

        <Link
          to={item.cta.href}
          onClick={onItemClick}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
        >
          <span>{item.cta.label}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {item.items.map((subItem) => {
          const Icon = getIcon(subItem.title);
          const isActive = currentPath === subItem.href;

          return (
            <Link
              key={subItem.title}
              to={subItem.href}
              onClick={onItemClick}
              className={`group flex items-start gap-2.5 p-2.5 rounded-xl transition-all duration-150 ${
                isActive
                  ? 'bg-amber-500/15 border border-amber-500/30 text-white'
                  : 'bg-white/[0.02] hover:bg-white/[0.06] border border-white/8 hover:border-white/15'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  isActive
                    ? 'bg-amber-500/25 text-amber-300'
                    : 'bg-white/[0.05] text-slate-400 group-hover:bg-amber-500/15 group-hover:text-amber-400'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4
                    className={`text-xs font-bold transition-colors ${
                      isActive
                        ? 'text-amber-300'
                        : 'text-white group-hover:text-amber-300'
                    }`}
                  >
                    {subItem.title}
                  </h4>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-400 group-hover:text-amber-400" />
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-relaxed">
                  {subItem.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
