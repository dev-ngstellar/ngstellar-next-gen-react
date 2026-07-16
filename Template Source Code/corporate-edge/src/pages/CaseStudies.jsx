import React, { useState, useEffect } from 'react';
import { caseStudiesData } from '../data/mockData';
import { ArrowRight, Star, X, CheckCircle, BarChart3, HelpCircle } from 'lucide-react';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeStudy, setActiveStudy] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories = ['All', 'Healthcare Systems', 'Supply Chain & Delivery', 'Fintech & Banking', 'E-Commerce', 'Energy & Utilities', 'Manufacturing Solutions'];

  const filteredStudies = selectedCategory === 'All'
    ? caseStudiesData
    : caseStudiesData.filter((item) => item.industry === selectedCategory);

  const handleOpenStudy = (study) => {
    setActiveStudy(study);
  };

  const handleCloseStudy = () => {
    setActiveStudy(null);
  };

  // Prevent background scrolling when study modal is active
  useEffect(() => {
    if (activeStudy !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeStudy]);

  return (
    <div className="animate-page-enter">
      {/* Header Banner */}
      <div className="relative pt-36 pb-20 bg-slate-950 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-xs tracking-[0.25em] uppercase text-blue-400 font-semibold mb-2 block">Case Studies</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Real-World Software Engineering Deployments
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mt-4 max-w-xl mx-auto">
            Review how we resolve complex scalability challenges, lower operational overheads, and build premium responsive client web applications.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="bg-slate-50 border-b border-slate-100 py-6 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 overflow-x-auto scrollbar-none flex gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2 text-xs font-semibold tracking-wider uppercase rounded transition-all whitespace-nowrap focus:outline-none ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {cat.split(' & ')[0]}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((project) => (
            <div 
              key={project.id}
              onClick={() => handleOpenStudy(project)}
              className="bg-white border border-slate-100 rounded-xl overflow-hidden saas-card-shadow hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.client} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-slate-900/90 text-white text-[9px] tracking-wider uppercase font-semibold">
                    {project.industry}
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">Client: {project.client}</span>
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-3">
                    {project.challenge}
                  </p>
                </div>
              </div>

              <div className="px-6 md:px-8 py-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 uppercase">Primary Metric</span>
                  <span className="text-xs font-bold text-blue-600">{project.results.metrics[0]}</span>
                </div>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-600 hover:text-blue-600 flex items-center gap-0.5">
                  Read Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Details Modal Overlay */}
      {activeStudy && (
        <div 
          onClick={handleCloseStudy}
          className="fixed inset-0 z-[9999] bg-slate-950/80 flex items-center justify-center p-6 backdrop-blur-sm animate-[fade-in_0.3s_ease-out_forwards]"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-slate-200 max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 relative shadow-2xl rounded-2xl animate-[scale-up_0.4s_ease-out_forwards]"
          >
            {/* Close Button */}
            <button 
              onClick={handleCloseStudy}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="border-b border-slate-100 pb-6 mb-6">
              <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] tracking-wider uppercase font-semibold rounded mb-3">
                {activeStudy.industry}
              </span>
              <h3 className="font-heading text-2xl font-extrabold text-slate-900 leading-tight">
                {activeStudy.title}
              </h3>
              <span className="text-slate-400 text-xs mt-1 block">Client Partner: <span className="font-semibold text-slate-700">{activeStudy.client}</span></span>
            </div>

            {/* Content blocks */}
            <div className="flex flex-col gap-6 text-xs font-light text-slate-600 leading-relaxed">
              
              <div>
                <h4 className="font-heading text-xs font-bold text-slate-950 uppercase tracking-widest mb-2">The Challenge</h4>
                <p className="p-4 bg-red-50/20 border-l-2 border-red-500 rounded text-slate-600">
                  {activeStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className="font-heading text-xs font-bold text-slate-950 uppercase tracking-widest mb-2">The Solution</h4>
                <p className="p-4 bg-green-50/20 border-l-2 border-green-500 rounded text-slate-600">
                  {activeStudy.solution}
                </p>
              </div>

              <div>
                <h4 className="font-heading text-xs font-bold text-slate-950 uppercase tracking-widest mb-2">The Results</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  {activeStudy.results.metrics.map((metric, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-lg text-center flex flex-col gap-1 shadow-sm">
                      <BarChart3 className="w-4 h-4 text-blue-600 mx-auto" />
                      <span className="font-heading text-sm font-bold text-slate-950">{metric.split(' ')[0] || metric}</span>
                      <span className="text-[10px] text-slate-500 leading-tight">{metric.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>
                <p className="font-medium text-slate-700 mt-2">
                  {activeStudy.results.details}
                </p>
              </div>

            </div>

            <button
              onClick={handleCloseStudy}
              className="w-full bg-slate-900 hover:bg-blue-600 text-white py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 mt-8 rounded-lg"
            >
              Close Study
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default CaseStudies;
