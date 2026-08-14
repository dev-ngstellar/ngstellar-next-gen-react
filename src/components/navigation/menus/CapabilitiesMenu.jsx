import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Compass, Palette, Cpu, TrendingUp } from 'lucide-react';

export default function CapabilitiesMenu({ item, onItemClick, currentPath }) {
  const getCategoryIcon = (category) => {
    if (category.includes('STRATEGY')) return Compass;
    if (category.includes('BRAND')) return Palette;
    if (category.includes('TECHNOLOGY')) return Cpu;
    return TrendingUp;
  };

  return (
    <div className="w-full max-w-[1080px] rounded-2xl bg-slate-950/98 backdrop-blur-2xl border border-white/12 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] overflow-hidden p-5 sm:p-6 text-slate-200">
      {/* 4-column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        {item.categories.map((cat, idx) => {
          const CategoryIcon = getCategoryIcon(cat.category);
          const isCatActive = currentPath === cat.href || currentPath.startsWith(cat.href + '/');

          return (
            <div key={cat.category} className={`${idx > 0 ? 'lg:pl-5 pt-4 lg:pt-0' : ''} flex flex-col justify-between`}>
              <div>
                <Link
                  to={cat.href}
                  onClick={onItemClick}
                  className="group/cat flex items-center gap-2 mb-3"
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isCatActive
                        ? 'bg-primary-500/25 text-primary-300'
                        : 'bg-white/[0.05] text-slate-400 group-hover/cat:bg-primary-500/15 group-hover/cat:text-primary-300'
                    }`}
                  >
                    <CategoryIcon className="w-3.5 h-3.5" />
                  </div>
                  <h4
                    className={`text-[11px] font-bold tracking-wider uppercase transition-colors ${
                      isCatActive
                        ? 'text-primary-300'
                        : 'text-slate-300 group-hover/cat:text-white'
                    }`}
                  >
                    {cat.category}
                  </h4>
                </Link>

                <ul className="space-y-1">
                  {cat.links.map((link) => {
                    const isLinkActive = currentPath === link.href;

                    return (
                      <li key={link.title}>
                        <Link
                          to={link.href}
                          onClick={onItemClick}
                          className={`group flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all duration-150 ${
                            isLinkActive
                              ? 'bg-primary-500/20 text-primary-200 font-semibold border-l-2 border-primary-400'
                              : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                          }`}
                        >
                          <span className="truncate">{link.title}</span>
                          <ChevronRight
                            className={`w-3 h-3 transition-transform duration-150 flex-shrink-0 ${
                              isLinkActive
                                ? 'text-primary-300 translate-x-0.5'
                                : 'opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-slate-400 group-hover:text-primary-400'
                            }`}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Action Strip */}
      <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs">
        <p className="text-slate-400 max-w-xl text-[11px] hidden sm:block">
          {item.tagline}
        </p>
        <Link
          to={item.cta.href}
          onClick={onItemClick}
          className="inline-flex items-center gap-1.5 font-semibold text-primary-400 hover:text-primary-300 transition-colors group ml-auto"
        >
          <span>{item.cta.label}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
