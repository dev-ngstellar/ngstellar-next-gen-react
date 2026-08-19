import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  Globe,
  Layout,
  Smartphone,
  Search,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Building2,
  FileCode,
  Layers
} from 'lucide-react';
import SEO from '../../components/SEO';
import PremiumPageHero from '../../components/ui/PremiumPageHero';
import RelatedContent from '../../components/ui/RelatedContent';
import ContextualCTA from '../../components/ui/ContextualCTA';
import { templates } from '../../data/templatesData.js';
import TemplateCard from '../../components/templates/TemplateCard.jsx';

const planCategories = [
  { id: 'all', label: 'All Website Solutions' },
  { id: 'starter', label: 'Starter (₹2.5k)' },
  { id: 'standard', label: 'Standard (₹7.5k)' },
  { id: 'growth', label: 'Growth (₹15k)' },
  { id: 'professional', label: 'Professional (₹20k)' },
  { id: 'custom', label: 'Custom Build' }
];

const categoryInfo = {
  starter: {
    title: 'STARTER WEBSITE SOLUTIONS',
    price: '₹2,500',
    badge: 'Up to 3 Pages',
    desc: 'Clean, conversion-ready business websites for organizations establishing their digital presence.',
    features: ['Responsive Layout', 'Contact Inquiries', 'Basic SEO Architecture']
  },
  standard: {
    title: 'STANDARD CORPORATE WEBSITES',
    price: '₹7,500',
    badge: 'Up to 5 Pages + Gallery',
    desc: 'Feature-rich corporate websites with multimedia galleries and enhanced service sections.'
  },
  growth: {
    title: 'GROWTH & DYNAMIC WEBSITES',
    price: '₹15,000',
    badge: 'Blog + Admin Portal',
    desc: 'Dynamic web platforms with content publishing workflows and administrative controls for scaling brands.'
  },
  professional: {
    title: 'PROFESSIONAL ENTERPRISE PORTALS',
    price: '₹20,000',
    badge: 'Unlimited Pages + CMS',
    desc: 'Advanced web architectures designed for multi-tier user roles, deep navigation, and complex integrations.'
  },
  custom: {
    title: 'CUSTOM & ENTERPRISE WEB APPLICATIONS',
    price: '₹30,000+',
    badge: 'Engineered to Specification',
    desc: 'Have bespoke workflows or unique operational requirements? We design and engineer tailored web solutions from scratch.'
  }
};

const capabilitiesList = [
  { icon: Building2, title: 'Corporate & Business Websites', desc: 'Authoritative online presence reflecting your market positioning and enterprise capabilities.' },
  { icon: Layout, title: 'Conversion Landing Pages', desc: 'High-intent single-purpose pages structured for maximum lead generation and campaign ROI.' },
  { icon: ShoppingBag, title: 'E-commerce Storefronts', desc: 'Fast, secure online stores with seamless checkout, catalog search, and payment integrations.' },
  { icon: Globe, title: 'Industry-Specific Solutions', desc: 'Tailored architectures for healthcare, manufacturing, fintech, education, and legal sectors.' },
  { icon: Smartphone, title: 'Responsive Multi-Device Design', desc: 'Pixel-perfect typography and layouts optimized across mobile, tablet, laptop, and 4K displays.' },
  { icon: Search, title: 'SEO-Ready Semantic Architecture', desc: 'Clean HTML5 hierarchy, structured JSON-LD data, fast Core Web Vitals, and meta optimization.' },
];

const Templates = () => {
  const location = useLocation();
  const initialCategory = location.state?.category || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredTemplates = activeCategory === 'all'
    ? templates
    : templates.filter(t => t.category === activeCategory);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Capabilities', url: '/capabilities' },
    { name: 'Website Design Solutions', url: '/templates' }
  ];

  const relatedLinks = [
    { title: 'Custom Software Development', category: 'Engineering', desc: 'Bespoke web applications, CRM, ERP, and API platforms.', href: '/capabilities/technology-transformation/software-development' },
    { title: 'UI/UX & Experience Design', category: 'Design', desc: 'Intuitive interface design, customer journeys, and wireframes.', href: '/capabilities/brand-experience/ui-ux' },
    { title: 'Search Engine Optimization', category: 'Growth', desc: 'Technical SEO and organic search visibility architectures.', href: '/capabilities/digital-growth/seo' },
    { title: 'Transformation Health Check', category: 'Diagnostic', desc: 'Benchmark your digital readiness across all dimensions.', href: '/transformation-health-check' },
  ];

  return (
    <>
      <SEO
        title="Website Design Solutions for Modern Businesses"
        description="High-performance website design solutions by NG Stellar: corporate websites, business landing pages, e-commerce, and responsive website templates."
        canonicalUrl="/templates"
        breadcrumbs={breadcrumbs}
      />

      <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans pb-12">
        {/* 1. HERO */}
        <PremiumPageHero
          eyebrow="Digital Platform Capabilities"
          title="Website Design Solutions for"
          titleHighlight="Modern Businesses"
          tagline="High Performance. Responsive Layouts. Conversion-Focused Architecture."
          description="We design and build fast, responsive, conversion-focused websites engineered to showcase your enterprise capabilities, engage decision-makers, and establish digital authority. Explore our ready-to-deploy template architectures or request a bespoke build."
          breadcrumbs={breadcrumbs}
          primaryCta={{
            label: 'Explore Website Templates',
            href: '#templates-collection'
          }}
          secondaryCta={{
            label: 'Discuss Custom Build',
            href: '/contact'
          }}
        />

        {/* 2. WEBSITE DESIGN CAPABILITIES GRID */}
        <section className="py-16 bg-slate-900/50 border-y border-white/10 mb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest mb-2 block">
                Engineering & Design Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                What Powers Our Website Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilitiesList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-primary-500/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary-500/15 text-primary-300 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. TEMPLATES SHOWCASE HEADER & FILTERS */}
        <div id="templates-collection" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <span className="text-xs font-bold text-primary-400 uppercase tracking-widest block mb-2">
            Ready-to-Deploy Architectures
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
            Explore Pre-Engineered Website Templates
          </h2>

          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-md mx-auto">
            {planCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'text-white shadow-lg bg-gradient-to-r from-primary-600 to-secondary-600'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Information Strip */}
        <AnimatePresence mode="wait">
          {activeCategory !== 'all' && categoryInfo[activeCategory] && (
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
                <p className="text-slate-300 text-sm">
                  {categoryInfo[activeCategory].desc}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4. TEMPLATE CARDS GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-16">
          <AnimatePresence mode="wait">
            {filteredTemplates.length > 0 ? (
              <motion.div
                key="template-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredTemplates.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold text-white mb-2">No templates found</h3>
                <p className="text-slate-400">There are currently no templates matching this filter.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* 5. CUSTOM WEB SOLUTION BANNER */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-3xl border border-primary-500/30 bg-slate-900/90 backdrop-blur-xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Need a Completely Custom Web Application?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              From bespoke SaaS platforms and corporate client portals to custom booking engines and e-commerce architectures—we engineer digital solutions tailored to your exact operational requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 mb-8">
              {['Custom UI/UX', 'Admin Portals', 'SaaS Backends', 'API Integrations', 'Booking Workflows', 'Business Automation', 'ERP Integration', 'Mobile-Responsive'].map((chip, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
                  {chip}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Discuss Your Custom Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* 6. RELATED CONTENT */}
        <RelatedContent links={relatedLinks} />

        {/* 7. CONTEXTUAL CTA */}
        <ContextualCTA
          eyebrow="Website Engineering"
          heading="Build Your Digital Presence with NG Stellar"
          description="Schedule a strategy session to select the ideal website architecture for your commercial and technical requirements."
          primaryCta={{ label: 'Discuss Your Website Project', href: '/contact' }}
          secondaryCta={{ label: 'Explore All Capabilities', href: '/capabilities' }}
        />
      </div>
    </>
  );
};

export default Templates;
