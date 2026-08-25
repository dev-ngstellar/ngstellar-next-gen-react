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

  // Distribute items across two submenu columns when item count > 3
  const items = selectedItem?.items || [];
  const hasMultipleColumns = items.length > 3;
  const splitIndex = hasMultipleColumns ? Math.ceil(items.length / 2) : items.length;
  const col1Items = items.slice(0, splitIndex);
  const col2Items = items.slice(splitIndex);

  // Approach stages distribution (for tablet view)
  const stages = selectedItem?.stages || [];
  const stageSplitIndex = Math.ceil(stages.length / 2);
  const col1Stages = stages.slice(0, stageSplitIndex);
  const col2Stages = stages.slice(stageSplitIndex);

  const renderSubItem = (subItem) => {
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
  };

  const renderStage = (stage) => {
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
  };

  return (
    <div
      className="w-full max-w-[880px] rounded-2xl bg-slate-950/98 backdrop-blur-2xl border border-white/12 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] overflow-hidden text-slate-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px] h-auto">
        {/* Column 1: About Sections Category Tabs */}
        <div className="md:col-span-4 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/10 p-3 sm:p-4 space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2.5 px-3">
            About Sections
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

        {/* Columns 2 & 3: Selected Section Sub-items (Automatic Multi-Column Distribution) */}
        <div className="md:col-span-8 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {selectedItem.dropdownTitle || selectedItem.label}
                </h4>
                {selectedItem.tagline && (
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                    {selectedItem.tagline}
                  </p>
                )}
              </div>
            </div>

            {/* Approach 6-Stage Journey Timeline (Tablet) */}
            {selectedItem.id === 'approach' && stages.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                <div className="space-y-1.5">
                  {col1Stages.map((stage) => renderStage(stage))}
                </div>
                <div className="space-y-1.5">
                  {col2Stages.map((stage) => renderStage(stage))}
                </div>
              </div>
            )}

            {/* Sub-items for Ecosystem, Stories, Insights, About */}
            {items.length > 0 ? (
              hasMultipleColumns ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                  {/* Column 2: First Batch of Items */}
                  <div className="space-y-1.5">
                    {col1Items.map((subItem) => renderSubItem(subItem))}
                  </div>
                  {/* Column 3: Remaining Items */}
                  <div className="space-y-1.5">
                    {col2Items.map((subItem) => renderSubItem(subItem))}
                  </div>
                </div>
              ) : (
                /* Single column when 3 or fewer items */
                <div className="space-y-1.5 max-w-sm">
                  {col1Items.map((subItem) => renderSubItem(subItem))}
                </div>
              )
            ) : selectedItem.id !== 'approach' ? (
              <div className="py-6 px-4 rounded-xl bg-white/[0.02] border border-white/8 text-center my-auto">
                <p className="text-xs text-slate-300 mb-4 max-w-sm mx-auto">
                  {selectedItem.tagline || 'Connect directly with our senior advisory team.'}
                </p>
                <Link
                  to={selectedItem.href}
                  onClick={onItemClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-500 text-white text-xs font-bold shadow-md hover:brightness-110 transition-all"
                >
                  <span>Go to {selectedItem.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : null}
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
