import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { templates } from '../../data/templatesData.js';
import TemplateHero from '../../components/templates/TemplateHero.jsx';
import TemplateGallery from '../../components/templates/TemplateGallery.jsx';
import RelatedTemplates from '../../components/templates/RelatedTemplates.jsx';
import TemplateLightbox from '../../components/templates/TemplateLightbox.jsx';

const TemplateDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the current template
  const template = templates.find((t) => t.slug === slug);

  // States
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [demoActivePage, setDemoActivePage] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Reset scroll hint when demo opens or tab changes
  useEffect(() => {
    if (isDemoMode) {
      setShowScrollHint(true);
    }
  }, [isDemoMode, demoActivePage]);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirements: '',
    timeline: '1-2 weeks',
    budget: '₹2,500 - ₹15,000'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setFormSubmitted(false);
    setIsCustomizing(false);
    setIsDemoMode(false);
    setDemoActivePage(0);
  }, [slug]);

  // Preload all template preview and page images in the background for instant transitions
  useEffect(() => {
    if (template) {
      // Preload current template page images
      if (template.pages) {
        template.pages.forEach((page) => {
          if (page.image) {
            const img = new Image();
            img.src = page.image;
          }
        });
      }

      // Preload related templates' cover images
      const related = templates.filter((t) => t.slug !== template.slug).slice(0, 3);
      related.forEach((t) => {
        if (t.coverImage) {
          const img = new Image();
          img.src = t.coverImage;
        }
      });
    }
  }, [template]);

  if (!template) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-extrabold text-white mb-4">Template Not Found</h2>
        <p className="text-slate-400 mb-8 max-w-md">The template you are looking for does not exist or has been moved.</p>
        <Link
          to="/templates"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-700 to-primary-500 hover:from-primary-600 hover:to-primary-400 px-6 py-3 text-sm font-semibold text-white transition-all"
        >
          Back to Templates
        </Link>
      </div>
    );
  }

  // Lightbox handlers
  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev === 0 ? template.pages.length - 1 : prev - 1));
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev === template.pages.length - 1 ? 0 : prev + 1));
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxIndex(null);
  };

  // Form handlers
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        requirements: '',
        timeline: '1-2 weeks',
        budget: '$1,000 - $3,000'
      });
    }, 800);
  };

  return (
    <>
      <Helmet>
        <title>{`${template.title} | NG Stellar`}</title>
        <meta
          name="description"
          content={`Explore the premium ${template.title} by NG Stellar. Inspect layout designs, page structures, and request customization.`}
        />
      </Helmet>

      <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[32px] sm:pt-[40px] lg:pt-[48px] pb-2">
          <Link
            to="/templates"
            state={{ category: template.category }}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>

            Back to Collection
          </Link>
        </div>

        {/* Hero Section */}
        <TemplateHero
          template={template}
          onDemoClick={() => setIsDemoMode(true)}
          onCustomizeClick={() => setIsCustomizing(true)}
        />

        {/* Gallery Previews Section */}
        <TemplateGallery
          pages={template.pages}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Related Templates Component */}
        <RelatedTemplates currentSlug={template.slug} />

        {/* Lightbox Overlay */}
        <TemplateLightbox
          isOpen={isLightboxOpen}
          currentIndex={lightboxIndex}
          pages={template.pages}
          onClose={handleCloseLightbox}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />

        {/* Customization Modal */}
        <AnimatePresence>
          {isCustomizing && (
            <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCustomizing(false)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              {/* Form Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl z-10"
              >
                <button
                  onClick={() => setIsCustomizing(false)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {!formSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-2">Request Customization</h3>
                    <p className="text-slate-400 text-sm mb-6">
                      Customize <span className="text-primary-400 font-semibold">{template.title}</span> to align perfectly with your brand identity and features.
                    </p>

                    <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleFormChange}
                          className="w-full rounded-xl border border-white/10 bg-slate-950/50 p-3 text-sm text-white placeholder-slate-600 outline-none focus:border-primary-500 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Your Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          className="w-full rounded-xl border border-white/10 bg-slate-950/50 p-3 text-sm text-white placeholder-slate-600 outline-none focus:border-primary-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Timeline</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleFormChange}
                            className="w-full rounded-xl border border-white/10 bg-slate-950/50 p-3 text-sm text-white outline-none focus:border-primary-500 transition-colors"
                          >
                            <option value="1-2 weeks">1-2 Weeks</option>
                            <option value="2-4 weeks">2-4 Weeks</option>
                            <option value="1 month+">1 Month+</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Target Budget</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleFormChange}
                            className="w-full rounded-xl border border-white/10 bg-slate-950/50 p-3 text-sm text-white outline-none focus:border-primary-500 transition-colors"
                          >
                            <option value="₹2,500 - ₹15,000">₹2,500 - ₹15,000</option>
                            <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                            <option value="₹30,000+">₹30,000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Custom Requirements</label>
                        <textarea
                          name="requirements"
                          rows={3}
                          value={formData.requirements}
                          onChange={handleFormChange}
                          className="w-full rounded-xl border border-white/10 bg-slate-950/50 p-3 text-sm text-white placeholder-slate-600 outline-none focus:border-primary-500 transition-colors resize-none"
                          placeholder="List custom pages, features, or integrations required..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-xl bg-gradient-to-r from-primary-700 to-primary-500 hover:from-primary-600 hover:to-primary-400 py-3.5 text-sm font-semibold text-white transition-all shadow-lg shadow-primary-700/20"
                      >
                        Submit Request
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Request Sent!</h3>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto">
                      Thank you! Our design team will review your customization details and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsCustomizing(false)}
                      className="mt-6 inline-flex rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition-all"
                    >
                      Close Window
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Live Demo Browser Simulation Modal */}
        <AnimatePresence>
          {isDemoMode && (
            <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDemoMode(false)}
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              />

              {/* simulated browser frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                className="relative w-full max-w-6xl h-[85vh] rounded-3xl border border-white/15 bg-slate-900 overflow-hidden shadow-2xl flex flex-col z-10"
              >
                {/* Browser Top Header Controls */}
                <div className="flex items-center justify-between bg-slate-950 px-6 py-3.5 border-b border-white/10 flex-shrink-0">
                  {/* window controls */}
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 cursor-pointer block hover:brightness-110" onClick={() => setIsDemoMode(false)} />
                    <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 block" />
                  </div>

                  {/* Address bar simulator */}
                  <div className="flex-1 max-w-lg mx-auto bg-slate-900 border border-white/5 rounded-lg py-1 px-4 text-xs text-slate-400 select-none flex items-center justify-between">
                    <div className="flex items-center gap-1.5 truncate">
                      <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-slate-300">demo.ngstellar.com</span>
                      <span className="text-slate-500">/templates/{template.slug}/{template.pages[demoActivePage].title.toLowerCase().replace(' ', '-')}</span>
                    </div>
                    <svg className="w-3.5 h-3.5 text-slate-500 hover:text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89" />
                    </svg>
                  </div>

                  {/* Actions / Close */}
                  <button
                    onClick={() => setIsDemoMode(false)}
                    className="text-slate-400 hover:text-white transition-colors p-1.5"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Subbar with page links */}
                <div className="bg-slate-950/60 border-b border-white/5 px-6 py-2 overflow-x-auto flex items-center gap-2 flex-shrink-0 scrollbar-none">
                  {template.pages.map((page, index) => (
                    <button
                      key={page.title}
                      onClick={() => setDemoActivePage(index)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${demoActivePage === index
                        ? 'bg-white/10 text-white border border-white/15'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                    >
                      {page.title}
                    </button>
                  ))}
                </div>

                {/* Scroll Down Tip Banner */}
                <div className="bg-slate-950/80 border-b border-white/5 px-6 py-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2 flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                  <span>Interactive Preview Mode: You can <b>scroll down</b> to view the full page layout of this site.</span>
                </div>

                {/* Simulated viewport (scrollable screenshot) */}
                <div
                  onScroll={(e) => {
                    if (e.target.scrollTop > 30) {
                      setShowScrollHint(false);
                    }
                  }}
                  className="flex-1 overflow-y-auto bg-slate-950 p-6 flex justify-center items-start relative"
                >
                  <div className="max-w-4xl w-full rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-slate-900/50">
                    <img
                      src={template.pages[demoActivePage].image}
                      alt={template.pages[demoActivePage].title}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Scroll Down Hint — floats inside the viewport, fades out on scroll */}
                  <AnimatePresence>
                    {showScrollHint && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4 }}
                        className="sticky bottom-6 left-0 right-0 flex justify-center pointer-events-none z-10"
                      >
                        <div className="flex items-center gap-2.5 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 shadow-2xl">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse flex-shrink-0" />
                          <span className="text-[11px] font-semibold text-slate-300 whitespace-nowrap">
                            Scroll down to explore the full page
                          </span>
                          <motion.svg
                            animate={{ y: [0, 3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                            className="w-3.5 h-3.5 text-primary-400 flex-shrink-0"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Simulated browser footer info */}
                <div className="bg-slate-950/80 border-t border-white/5 py-2 px-6 text-center text-[10px] text-slate-500 flex-shrink-0 flex items-center justify-between">
                  <span>Interactive Mockup Simulator</span>
                  <button
                    onClick={() => {
                      setIsDemoMode(false);
                      setIsCustomizing(true);
                    }}
                    className="text-primary-400 hover:underline hover:text-primary-300 font-semibold"
                  >
                    Hire Us to Build This site
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default TemplateDetails;
