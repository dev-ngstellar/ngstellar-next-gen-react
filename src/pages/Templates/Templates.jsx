import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { templates } from '../../data/templatesData.js';
import TemplateCard from '../../components/templates/TemplateCard.jsx';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', label: 'All Templates' },
  { id: 'starter', label: 'Starter' },
  { id: 'standard', label: 'Standard' },
  { id: 'growth', label: 'Growth' },
  { id: 'professional', label: 'Professional' },
  { id: 'custom', label: 'Custom' }
];

const categoryInfo = {
  starter: {
    title: "STARTER",
    price: "₹2,500",
    badge: "Up to 3 Pages",
    desc: "Simple, professional websites for businesses getting started online.",
    features: ["Responsive Design", "Contact Form", "Basic SEO"]
  },
  standard: {
    title: "STANDARD",
    price: "₹7,500",
    badge: "Up to 5 Pages + Image Gallery",
    desc: "Feature-rich business websites with galleries and enhanced content sections."
  },
  growth: {
    title: "GROWTH",
    price: "₹15,000",
    badge: "Blog + Admin Portal",
    desc: "Dynamic websites with content management capabilities for growing businesses."
  },
  professional: {
    title: "PROFESSIONAL",
    price: "₹20,000",
    badge: "Unlimited Pages + Advanced CMS",
    desc: "Advanced websites designed for businesses with multi-user admins and complex roles."
  },
  custom: {
    title: "CUSTOM / ENTERPRISE",
    price: "₹30,000+",
    badge: "Built Around Your Requirements",
    desc: "Have a unique idea or business workflow? We can design and develop a completely custom solution."
  }
};

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTemplates = activeCategory === 'all'
    ? templates
    : templates.filter(t => t.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Website Template Collection | NG Stellar</title>
        <meta
          name="description"
          content="Explore professionally designed website templates built for various industries. High quality, premium React and responsive landing pages by NG Stellar."
        />
      </Helmet>

      <div className="relative min-h-screen bg-slate-950 pt-32 pb-24 overflow-hidden">
        {/* Decorative background mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
          <div className="absolute top-12 left-10 w-[400px] h-[400px] rounded-full bg-primary-900/10 blur-[120px] animate-blob" />
          <div className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full bg-secondary-900/10 blur-[130px] animate-blob [animation-delay:3s]" />
          <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] rounded-full bg-accent-950/15 blur-[120px] animate-blob [animation-delay:6s]" />
        </div>

        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-300 text-xs font-semibold mb-6 uppercase tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            Premium Marketplace
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6"
          >
            Template <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-300 bg-clip-text text-transparent pr-2">Collection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-10"
          >
            Explore professionally designed website templates built for various industries. Ready-to-go, fully customizable solutions.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md mx-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ease-out ${activeCategory === cat.id
                  ? 'text-white shadow-lg'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Category Information Strip */}
        <AnimatePresence mode="wait">
          {activeCategory !== 'all' && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
            >
              <div className="rounded-2xl border border-primary-500/20 bg-primary-950/20 backdrop-blur-sm p-6 text-center">
                <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white tracking-wide">{categoryInfo[activeCategory].title}</h3>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-sm font-bold border border-emerald-500/20 shadow-inner">
                    {categoryInfo[activeCategory].price}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-primary-500/20 text-primary-300 text-xs font-semibold border border-primary-500/30">
                    {categoryInfo[activeCategory].badge}
                  </span>
                </div>
                <p className="text-slate-300">
                  {categoryInfo[activeCategory].desc}
                </p>
                {categoryInfo[activeCategory].features && (
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {categoryInfo[activeCategory].features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-sm text-slate-400">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatePresence mode="wait">
            {activeCategory === 'custom' ? (
              <motion.div
                key="customized-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/20 pointer-events-none" />

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
                    CUSTOMIZED SOLUTIONS
                  </h2>
                  <p className="text-xl text-primary-400 mb-6 font-medium relative z-10">
                    Have something unique in mind?
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto relative z-10">
                    From SaaS platforms and admin dashboards to booking systems, marketplaces and custom business portals — we design solutions around your exact requirements.
                  </p>

                  <div className="flex flex-wrap justify-center gap-3 mb-10 relative z-10">
                    {['Custom UI/UX', 'Admin Portals', 'SaaS Platforms', 'API Integrations', 'Booking Systems', 'Business Automation', 'Custom Enterprise Solution', 'AI SaaS Platform', 'CRM + ERP', 'Marketplace', 'Mobile App + Website', 'Any Custom Requirement'].map((chip, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium">
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Discuss Your Project
                      <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ) : filteredTemplates.length > 0 ? (
              <motion.div
                key="template-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence>
                  {filteredTemplates.map((template) => (
                    <TemplateCard key={template.id} template={template} />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">No templates found</h3>
                <p className="text-slate-400">There are currently no templates in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Templates;
