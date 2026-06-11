import React from 'react';
import { motion } from 'framer-motion';

const TemplateHero = ({ template, onDemoClick, onCustomizeClick }) => {
  const { title, description, coverImage, tags } = template;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] -z-10 animate-blob" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-[120px] -z-10 animate-blob [animation-delay:2s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed">
              {description}
            </p>

            {/* Quick stats / Features */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/5">
              <div>
                <span className="block text-2xl font-bold text-primary-400">100%</span>
                <span className="text-xs text-slate-400">Customizable</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-secondary-400">SEO</span>
                <span className="text-xs text-slate-400">Optimized</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-accent-400">60fps</span>
                <span className="text-xs text-slate-400">Smooth Animations</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              {/* <button
                onClick={onDemoClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-700 to-primary-500 hover:from-primary-600 hover:to-primary-400 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-700/20 hover:shadow-primary-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Live Demo</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button> */}

              <button
                onClick={onCustomizeClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 text-base font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Request Customization
              </button>
            </div>
          </motion.div>

          {/* Right Column - Image Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 -z-10" />
              <img
                src={coverImage}
                alt={`${title} Preview`}
                fetchPriority="high"
                className="w-full rounded-lg object-cover aspect-[4/3] object-top"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TemplateHero;
