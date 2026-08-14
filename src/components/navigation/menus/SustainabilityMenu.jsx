import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, LineChart, HeartHandshake, RefreshCw, ArrowUpRight } from 'lucide-react';

export default function SustainabilityMenu({ item, onItemClick, currentPath }) {
  const getIcon = (title) => {
    if (title.includes('Economic')) return LineChart;
    if (title.includes('Social') || title.includes('People')) return HeartHandshake;
    if (title.includes('Governance')) return Shield;
    if (title.includes('Environmental')) return Leaf;
    return RefreshCw;
  };

  return (
    <div className="w-full max-w-[780px] rounded-2xl bg-slate-950/98 backdrop-blur-2xl border border-white/12 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] overflow-hidden p-5 sm:p-6 text-slate-200">
      <div className="grid grid-cols-12 gap-5 sm:gap-6">
        {/* Left Overview Column */}
        <div className="col-span-5 flex flex-col justify-between border-r border-white/10 pr-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-2.5">
              ESG & Value Creation
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-2.5">
              SUSTAINABILITY
            </h3>
            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
              {item.tagline}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10">
            <Link
              to={item.cta.href}
              onClick={onItemClick}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
            >
              <span>{item.cta.label}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right Items Column */}
        <div className="col-span-7 space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-2">
            Sustainability Dimensions
          </div>
          {item.items.map((subItem) => {
            const Icon = getIcon(subItem.title);
            const isActive = currentPath === subItem.href;

            return (
              <Link
                key={subItem.title}
                to={subItem.href}
                onClick={onItemClick}
                className={`group flex items-start gap-2.5 p-2 rounded-xl transition-all duration-150 ${
                  isActive
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-white'
                    : 'hover:bg-white/[0.06] border border-transparent text-slate-200'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    isActive
                      ? 'bg-emerald-500/25 text-emerald-300'
                      : 'bg-white/[0.05] text-slate-400 group-hover:bg-emerald-500/15 group-hover:text-emerald-400'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4
                      className={`text-xs sm:text-sm font-semibold transition-colors ${
                        isActive
                          ? 'text-emerald-300'
                          : 'text-white group-hover:text-emerald-300'
                      }`}
                    >
                      {subItem.title}
                    </h4>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-400 group-hover:text-emerald-400" />
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 leading-relaxed">
                    {subItem.description}
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
