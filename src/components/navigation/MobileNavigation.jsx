import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { getPrimaryNavItems, getMoreNavItems } from './navData';

export default function MobileNavigation({ isOpen, onClose }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedSubCategory, setExpandedSubCategory] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const primaryItems = getPrimaryNavItems(true);
  const moreSubmenuItems = getMoreNavItems(true);

  // Filter out 'home' to render primary service items in order: Transformation, Sustainability, Health Check, Capabilities, Approach
  const serviceItems = primaryItems.filter((item) => item.id !== 'home');

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
    setExpandedSubCategory(null);
  };

  const toggleSubCategory = (catName) => {
    setExpandedSubCategory(expandedSubCategory === catName ? null : catName);
  };

  const isAboutActive =
    currentPath === '/about' ||
    currentPath.startsWith('/about/') ||
    moreSubmenuItems.some((item) => currentPath.startsWith(item.href));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -8, height: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="md:hidden bg-slate-950/98 backdrop-blur-2xl border-t border-white/10 overflow-y-auto max-h-[82vh] shadow-2xl rounded-b-2xl"
        >
          <div className="px-4 py-5 space-y-1.5">
            {/* Health Check Quick Mobile Highlight Banner */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-primary-950/80 via-primary-900/60 to-secondary-950/80 border border-primary-500/30 flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 text-primary-300 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-secondary-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Diagnostic Health Check</div>
                  <div className="text-[11px] text-slate-300">Evaluate transformation readiness</div>
                </div>
              </div>
              <Link
                to="/transformation-health-check"
                onClick={handleLinkClick}
                className="px-3 py-1.5 rounded-lg bg-primary-600 text-white text-xs font-semibold hover:bg-primary-500 transition-colors"
              >
                Assess
              </Link>
            </div>

            {/* 1. HOME */}
            <Link
              to="/"
              onClick={handleLinkClick}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                currentPath === '/'
                  ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white font-bold border-l-4 border-primary-400'
                  : 'text-slate-200 hover:bg-white/[0.05]'
              }`}
            >
              HOME
            </Link>

            {/* 2. ABOUT (Renamed More menu opening the existing More submenu) */}
            <div className="border-b border-white/[0.06] pb-1">
              <div
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors ${
                  isAboutActive
                    ? 'bg-primary-500/10 text-white font-bold'
                    : 'text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="flex-1 text-sm font-semibold flex items-center gap-2"
                >
                  <span>ABOUT</span>
                </Link>
                <button
                  type="button"
                  onClick={() => toggleSection('about')}
                  aria-expanded={expandedSection === 'about'}
                  aria-label="Toggle About submenu"
                  className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/10 text-slate-300 transition-colors"
                >
                  {expandedSection === 'about' ? (
                    <Minus className="w-4 h-4 text-primary-400" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* About Submenu Content (Same existing More submenu items) */}
              <AnimatePresence>
                {expandedSection === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.18 }}
                    className="overflow-hidden pl-3 pr-1 pt-1 pb-2 space-y-1"
                  >
                    {moreSubmenuItems.map((subSec) => {
                      const isCatExpanded = expandedSubCategory === subSec.id;
                      const hasChildItems = subSec.items && subSec.items.length > 0;

                      if (!hasChildItems) {
                        return (
                          <Link
                            key={subSec.id}
                            to={subSec.href}
                            onClick={handleLinkClick}
                            className={`block px-3 py-2 text-xs rounded-lg transition-colors ${
                              currentPath === subSec.href
                                ? 'bg-primary-500/20 text-primary-200 font-semibold'
                                : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                            }`}
                          >
                            <div className="font-semibold">{subSec.label}</div>
                            {subSec.tagline && (
                              <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                                {subSec.tagline}
                              </div>
                            )}
                          </Link>
                        );
                      }

                      return (
                        <div key={subSec.id} className="mb-2 bg-white/[0.02] rounded-xl p-2">
                          <button
                            type="button"
                            onClick={() => toggleSubCategory(subSec.id)}
                            className="w-full flex items-center justify-between text-left py-1.5 px-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white"
                          >
                            <span>{subSec.dropdownTitle || subSec.label}</span>
                            <ChevronRight
                              className={`w-3.5 h-3.5 transition-transform ${
                                isCatExpanded ? 'rotate-90 text-primary-400' : 'text-slate-500'
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isCatExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.15 }}
                                className="pl-3 py-1 space-y-1"
                              >
                                {subSec.items.map((child) => (
                                  <Link
                                    key={child.title}
                                    to={child.href}
                                    onClick={handleLinkClick}
                                    className={`block px-3 py-1.5 text-xs rounded-lg transition-colors ${
                                      currentPath === child.href
                                        ? 'bg-primary-500/20 text-primary-200 font-semibold'
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                                    }`}
                                  >
                                    <div className="font-medium">{child.title}</div>
                                    {child.description && (
                                      <div className="text-[10px] text-slate-500 line-clamp-1">
                                        {child.description}
                                      </div>
                                    )}
                                  </Link>
                                ))}
                                <div className="pt-1.5">
                                  <Link
                                    to={subSec.href}
                                    onClick={handleLinkClick}
                                    className="inline-flex items-center gap-1 text-[11px] font-bold text-primary-400 hover:text-primary-300"
                                  >
                                    <span>Explore {subSec.label}</span>
                                    <ArrowRight className="w-3 h-3" />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Primary Items: TRANSFORMATION, SUSTAINABILITY, HEALTH CHECK, CAPABILITIES, APPROACH */}
            {serviceItems.map((item) => {
              const isExpanded = expandedSection === item.id;
              const isActive =
                item.href === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.href);

              if (item.type === 'link') {
                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    onClick={handleLinkClick}
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white font-bold border-l-4 border-primary-400'
                        : 'text-slate-200 hover:bg-white/[0.05]'
                    }`}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                );
              }

              return (
                <div key={item.id} className="border-b border-white/[0.06] last:border-0 pb-1">
                  <div
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-primary-500/10 text-white font-bold'
                        : 'text-slate-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    <Link
                      to={item.href}
                      onClick={handleLinkClick}
                      className="flex-1 text-sm font-semibold flex items-center gap-2"
                    >
                      <span>{item.dropdownTitle ? item.dropdownTitle.toUpperCase() : item.label.toUpperCase()}</span>
                      {item.isPrimaryService && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary-500/20 text-secondary-300 px-1.5 py-0.5 rounded">
                          Priority
                        </span>
                      )}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleSection(item.id)}
                      aria-expanded={isExpanded}
                      aria-label={`Toggle ${item.label} submenu`}
                      className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/10 text-slate-300 transition-colors"
                    >
                      {isExpanded ? (
                        <Minus className="w-4 h-4 text-primary-400" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Accordion Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden pl-3 pr-1 pt-1 pb-2 space-y-1"
                      >
                        {/* Capabilities Categories */}
                        {item.categories &&
                          item.categories.map((cat) => {
                            const isCatExpanded = expandedSubCategory === cat.category;
                            return (
                              <div key={cat.category} className="mb-2 bg-white/[0.02] rounded-xl p-2">
                                <button
                                  type="button"
                                  onClick={() => toggleSubCategory(cat.category)}
                                  className="w-full flex items-center justify-between text-left py-1.5 px-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white"
                                >
                                  <span>{cat.category}</span>
                                  <ChevronRight
                                    className={`w-3.5 h-3.5 transition-transform ${
                                      isCatExpanded ? 'rotate-90 text-primary-400' : 'text-slate-500'
                                    }`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {isCatExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.15 }}
                                      className="pl-3 py-1 space-y-1"
                                    >
                                      {cat.links.map((link) => (
                                        <Link
                                          key={link.title}
                                          to={link.href}
                                          onClick={handleLinkClick}
                                          className={`block px-3 py-1.5 text-xs rounded-lg transition-colors ${
                                            currentPath === link.href
                                              ? 'bg-primary-500/20 text-primary-200 font-semibold'
                                              : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                                          }`}
                                        >
                                          {link.title}
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}

                        {/* Approach Stages */}
                        {item.stages &&
                          item.stages.map((stage) => (
                            <Link
                              key={stage.step}
                              to={stage.href}
                              onClick={handleLinkClick}
                              className={`flex items-center gap-3 px-3 py-2 text-xs rounded-lg transition-colors ${
                                currentPath === stage.href
                                  ? 'bg-primary-500/20 text-primary-200 font-semibold'
                                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                              }`}
                            >
                              <span className="w-5 h-5 rounded-full bg-primary-500/20 text-primary-300 flex items-center justify-center font-bold text-[10px]">
                                {stage.step}
                              </span>
                              <span>{stage.title}</span>
                            </Link>
                          ))}

                        {/* Standard Items */}
                        {item.items &&
                          item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.href}
                              onClick={handleLinkClick}
                              className={`block px-3 py-2 text-xs rounded-lg transition-colors ${
                                currentPath === subItem.href
                                  ? 'bg-primary-500/20 text-primary-200 font-semibold'
                                  : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                              }`}
                            >
                              <div className="font-medium">{subItem.title}</div>
                              {subItem.description && (
                                <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                                  {subItem.description}
                                </div>
                              )}
                            </Link>
                          ))}

                        {/* Submenu Explore CTA */}
                        {item.cta && (
                          <div className="pt-2 pl-2">
                            <Link
                              to={item.cta.href}
                              onClick={handleLinkClick}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-400 hover:text-primary-300"
                            >
                              <span>{item.cta.label}</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* 4. CAREERS */}
            <Link
              to="/careers"
              onClick={handleLinkClick}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                currentPath === '/careers' || currentPath.startsWith('/careers/')
                  ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-white font-bold border-l-4 border-primary-400'
                  : 'text-slate-200 hover:bg-white/[0.05]'
              }`}
            >
              CAREERS
            </Link>

            {/* Mobile Careers CTA Button */}
            <div className="pt-3 mt-3 border-t border-white/10">
              <Link
                to="/careers"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-primary-600/30 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span>Careers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
