import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Network, Building2, Terminal, Scale, Rocket, Layers, ArrowUpRight } from 'lucide-react';

export default function EcosystemMenu({ item, onItemClick, currentPath }) {
  const getIcon = (title) => {
    if (title.includes('Expert')) return Network;
    if (title.includes('Industry')) return Building2;
    if (title.includes('Technology')) return Terminal;
    if (title.includes('Professional')) return Scale;
    if (title.includes('Startup')) return Rocket;
    if (title.includes('Incubator')) return Layers;
    return Handshake;
  };

  return (
    <div className="w-full max-w-[720px] rounded-2xl bg-slate-950/98 backdrop-blur-2xl border border-white/12 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] overflow-hidden p-5 sm:p-6 text-slate-200">
      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-1">
            Collaborative Alliances
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
            The NG Stellar Ecosystem
          </h3>
        </div>

        <Link
          to={item.cta.href}
          onClick={onItemClick}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          <span>{item.cta.label}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                  ? 'bg-cyan-500/15 border border-cyan-500/30 text-white'
                  : 'bg-white/[0.02] hover:bg-white/[0.06] border border-white/8 hover:border-white/15'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  isActive
                    ? 'bg-cyan-500/25 text-cyan-300'
                    : 'bg-white/[0.05] text-slate-400 group-hover:bg-cyan-500/15 group-hover:text-cyan-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4
                    className={`text-xs font-bold transition-colors ${
                      isActive
                        ? 'text-cyan-300'
                        : 'text-white group-hover:text-cyan-300'
                    }`}
                  >
                    {subItem.title}
                  </h4>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-slate-400 group-hover:text-cyan-400" />
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
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
