import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { templates } from '../../data/templatesData.js';
import TemplateCard from '../../components/templates/TemplateCard.jsx';

const Templates = () => {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
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
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            Explore professionally designed website templates built for various industries. Ready-to-go, fully customizable solutions.
          </motion.p>
        </div>

        {/* Templates Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
