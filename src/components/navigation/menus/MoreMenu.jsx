import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Compass,
  Network,
  Trophy,
  BookOpen,
  Building2,
  PhoneCall,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { getMoreNavItems } from '../navData';

export default function MoreMenu({ onItemClick, currentPath, isDesktopWide = true }) {
  const moreList = getMoreNavItems(isDesktopWide);
  const [activeTab, setActiveTab] = useState(moreList[0]?.id || 'ecosystem');

  // If the active tab is not in the list (e.g. on resize from tablet to desktop), default to first item
  useEffect(() => {
    if (!moreList.some((item) => item.id === activeTab)) {
      setActiveTab(moreList[0]?.id || 'ecosystem');
    }
  }, [isDesktopWide, moreList, activeTab]);

  const getSectionIcon = (id) => {
    switch (id) {
      case 'approach':
        return Compass;
      case 'ecosystem':
        return Network;
      case 'stories':
        return Trophy;
      case 'insights':
        return BookOpen;
      case 'about':
        return Building2;
      case 'contact':
        return PhoneCall;
      default:
        return Building2;
    }
  };

  const selectedItem = moreList.find((item) => item.id === activeTab) || moreList[0];

  return (
    <div
      className="w-full max-w-[800px] rounded-2xl bg-slate-950/98 backdrop-blur-2xl border border-white/12 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] overflow-hidden text-slate-200"
    >
      <div className="grid grid-cols-12 min-h-[360px]">
        {/* Left Column: Category Tabs */}
        <div className="col-span-5 bg-white/[0.02] border-r border-white/10 p-3 sm:p-4 space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2.5 px-3">
            More Sections
          </div>
          {moreList.map((item) => {
            const Icon = getSectionIcon(item.id);
            const isTabSelected = activeTab === item.id;
            const isPathActive = currentPath === item.href || currentPath.startsWith(item.href + '/');

            return (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => setActiveTab(item.id)}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all duration-150 ${
                  isTabSelected
                    ? 'bg-primary-500/20 text-white font-semibold shadow-sm'
                    : isPathActive
                    ? 'text-primary-300 bg-white/[0.04]'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isTabSelected
                        ? 'bg-primary-500/30 text-primary-300'
                        : 'bg-white/[0.05] text-slate-400'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold">{item.label}</span>
                </div>
                <ChevronRight
                  className={`w-3.5 h-3.5 transition-transform ${
                    isTabSelected ? 'text-primary-300 translate-x-0.5' : 'text-slate-500'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Column: Selected Section Sub-items */}
        <div className="col-span-7 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {selectedItem.dropdownTitle || selectedItem.label}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                  {selectedItem.tagline}
                </p>
              </div>
            </div>

            {/* Approach 6-Stage Journey Timeline */}
            {selectedItem.id === 'approach' && selectedItem.stages && (
              <div className="grid grid-cols-2 gap-2 max-h-[230px] overflow-y-auto pr-1">
                {selectedItem.stages.map((stage) => {
                  const isActive = currentPath === stage.href;
                  return (
                    <Link
                      key={stage.step}
                      to={stage.href}
                      onClick={onItemClick}
                      className={`group flex items-start gap-2.5 p-2 rounded-lg transition-all duration-150 ${
                        isActive
                          ? 'bg-primary-500/20 text-primary-200 border-l-2 border-primary-400'
                          : 'hover:bg-white/[0.06] text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-300 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                        {stage.step}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold leading-tight group-hover:text-primary-300 transition-colors">
                          {stage.title}
                        </div>
                        <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                          {stage.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Standard Sub-items for Ecosystem, Stories, Insights, About, Contact */}
            {selectedItem.items && (
              <div className="grid grid-cols-1 gap-1.5 max-h-[230px] overflow-y-auto pr-1">
                {selectedItem.items.map((subItem) => {
                  const isActive = currentPath === subItem.href;

                  return (
                    <Link
                      key={subItem.title}
                      to={subItem.href}
                      onClick={onItemClick}
                      className={`group flex items-start justify-between p-2 rounded-lg transition-all duration-150 ${
                        isActive
                          ? 'bg-primary-500/15 text-primary-200 border-l-2 border-primary-400'
                          : 'hover:bg-white/[0.06] text-slate-300 hover:text-white'
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <div className="text-xs font-semibold group-hover:text-primary-300 transition-colors">
                          {subItem.title}
                        </div>
                        {subItem.description && (
                          <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {subItem.description}
                          </div>
                        )}
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-primary-400 transition-opacity flex-shrink-0 mt-1" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Bottom Action */}
          <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between">
            <Link
              to={selectedItem.href}
              onClick={onItemClick}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400 hover:text-primary-300 transition-colors group ml-auto"
            >
              <span>Explore All {selectedItem.label}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
