import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stellarImages = [
  { name: "Home", file: "Home.webp", desc: "Main landing page with premium hero section" },
  { name: "Capabilities", file: "Services.webp", desc: "Detailed overview of services and capabilities" },
  { name: "Industries", file: "Industries.webp", desc: "Showcase of industry-specific solutions" },
  { name: "Blog", file: "Blog.webp", desc: "Insights and articles from the team" },
  { name: "About", file: "About.webp", desc: "Company mission, vision, and team" },
  { name: "Contact", file: "Contact.webp", desc: "Get in touch with NG Stellar" }
];

const FeaturedLiveWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stellarImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const openModal = (index) => {
    setModalImage(index);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const nextModalImage = (e) => {
    e.stopPropagation();
    setModalImage((prev) => (prev + 1) % stellarImages.length);
  };

  const prevModalImage = (e) => {
    e.stopPropagation();
    setModalImage((prev) => (prev - 1 + stellarImages.length) % stellarImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalImage === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') setModalImage((prev) => (prev + 1) % stellarImages.length);
      if (e.key === 'ArrowLeft') setModalImage((prev) => (prev - 1 + stellarImages.length) % stellarImages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImage]);

  const scrollToTemplates = () => {
    const templatesSection = document.getElementById('templates-collection');
    if (templatesSection) {
      templatesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-24 overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-900/10 rounded-full blur-[100px] mix-blend-screen opacity-40" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-4 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            LIVE PRODUCTION WEBSITE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-300 bg-clip-text text-transparent">Live Website</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-400">
            Explore a real production website designed and developed by NG Stellar. Experience our design quality, performance, responsiveness, and premium UI before choosing a template.
          </p>
        </motion.div>

        {/* Main Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          
          {/* Left: Browser Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[60%] relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <div className="relative rounded-2xl bg-slate-900 border border-slate-700/50 shadow-2xl overflow-hidden flex flex-col h-full">
              {/* Browser Toolbar */}
              <div className="flex items-center px-4 py-3 bg-slate-800/80 backdrop-blur border-b border-slate-700/50">
                <div className="flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-6 py-1 rounded-md bg-slate-900/60 text-slate-400 text-xs flex items-center gap-2 border border-slate-700/50">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                    stellarsolutions.org
                  </div>
                </div>
              </div>
              {/* Slideshow Content */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={currentSlide}
                    src={`/Templates Images/Stellar/${stellarImages[currentSlide].file}`}
                    alt={`Stellar Solutions - ${stellarImages[currentSlide].name}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {stellarImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[40%] flex flex-col gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-3">
                ★★★★★ Featured Project
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">NG Stellar Solutions</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                A premium business website designed and developed using React.js with modern UI, responsive layouts, smooth animations, SEO optimization, and scalable architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {['React.js', 'Responsive', 'Modern UI', 'SEO Ready', 'Fast Performance', 'Premium Animations', 'Reusable Components', 'Production Website'].map((badge, i) => (
                <span key={i} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-slate-300 text-xs font-medium">
                  {badge}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Sections', value: '20+' },
                { label: 'Performance', value: '100' },
                { label: 'Mobile First', value: 'Yes' },
                { label: 'Status', value: 'Production Ready' }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-900/50 border border-white/5 rounded-xl p-3 backdrop-blur-sm">
                  <div className="text-primary-400 font-bold text-xl mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a 
                href="https://stellarsolutions.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all hover:-translate-y-0.5"
              >
                View Live Website
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <button 
                onClick={scrollToTemplates}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold hover:bg-slate-700 transition-all"
              >
                Use as Template
              </button>
            </div>
          </motion.div>
        </div>

        {/* Website Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-slate-800/60 pt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Website Journey</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Take a quick visual tour through the complete NG Stellar experience.
            </p>
          </div>

          {/* Horizontal scroll container */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x hide-scrollbar px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>
            
            {stellarImages.map((page, idx) => (
              <div key={idx} className="flex items-center shrink-0 snap-center group">
                {/* Card */}
                <div 
                  onClick={() => openModal(idx)}
                  className="w-[280px] md:w-[320px] bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/10 p-3 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/20 hover:border-primary-500/50"
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                    <img 
                      src={`/Templates Images/Stellar/${page.file}`} 
                      alt={page.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1 px-1">{page.name}</h4>
                  <p className="text-slate-400 text-sm px-1 line-clamp-2">{page.desc}</p>
                </div>

                {/* Arrow connecting cards */}
                {idx < stellarImages.length - 1 && (
                  <div className="w-8 md:w-12 flex justify-center shrink-0 text-slate-700">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {modalImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-xl"
            onClick={closeModal}
          >
            <div className="relative w-full max-w-6xl max-h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
              <motion.img
                key={modalImage}
                src={`/Templates Images/Stellar/${stellarImages[modalImage].file}`}
                alt={stellarImages[modalImage].name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 md:-right-12 md:top-0 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black rounded-full backdrop-blur transition-all"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              
              {/* Navigation */}
              <button 
                onClick={prevModalImage}
                className="absolute left-2 md:-left-16 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black rounded-full backdrop-blur transition-all"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={nextModalImage}
                className="absolute right-2 md:-right-16 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black rounded-full backdrop-blur transition-all"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              
              {/* Caption */}
              <div className="absolute -bottom-12 left-0 right-0 text-center text-white font-medium">
                {stellarImages[modalImage].name} - {modalImage + 1} / {stellarImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedLiveWebsite;
