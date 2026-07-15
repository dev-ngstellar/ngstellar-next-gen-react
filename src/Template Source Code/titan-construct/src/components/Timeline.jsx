import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, Building, Compass, Sparkles } from 'lucide-react';

const timelineEvents = [
  {
    year: '2010',
    title: 'Regional Beginnings',
    subtitle: 'Foundation of Titan Construct',
    icon: Calendar,
    description: 'Began operations in Dubai, executing mid-rise luxury residential projects and establishing high-quality engineering benchmarks.',
    metric: '12 Completed Projects'
  },
  {
    year: '2015',
    title: 'Infrastructure Scale',
    subtitle: 'Heavy civil & structural expansion',
    icon: Building,
    description: 'Expanded into massive infrastructure, securing landmark contracts for airports, highway nodes, and coastal waterfront structures.',
    metric: '$850M Contract Volume'
  },
  {
    year: '2020',
    title: 'AI Smart Skylines',
    subtitle: 'Pioneering intelligent towers',
    icon: Award,
    description: 'Pioneered AI-driven architectural parameters and structural design testing, reducing material wastage by 20% across supertall towers.',
    metric: 'Top Infrastructure Award'
  },
  {
    year: '2025',
    title: 'Digital Twin Integration',
    subtitle: 'Real-time structural monitoring',
    icon: Compass,
    description: 'Deployed digital twins for all mega projects, synchronizing real-time CCTV feeds and IoT load-bearing telemetry directly to investors.',
    metric: '100% Digital Asset Sync'
  },
  {
    year: '2030 Vision',
    title: 'Carbon-Neutral Cities',
    subtitle: 'Building Neom future nodes',
    icon: Sparkles,
    description: 'Deploying modular construction systems and zero-waste hydrogen energy frameworks for clean futuristic cities globally.',
    metric: 'Zero-Carbon Operations'
  }
];

export default function Timeline() {
  const [selectedIdx, setSelectedIdx] = useState(4);

  return (
    <section id="timeline" className="py-24 bg-slate-50 border-t border-[#F1F5F9] relative overflow-hidden">
      {/* Soft gradient accents */}
      <div className="absolute top-0 left-0 w-[30%] h-[50%] bg-gradient-to-br from-[#F59E0B]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-[0.25em] block mb-3 font-sans">
            Company Evolution
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-syne mb-6">
            Construction Timeline
          </h2>
          <p className="text-[#64748B] font-light">
            Our historical milestones, engineering breakthroughs, and our roadmap leading up to the 2030 smart cities vision.
          </p>
        </div>

        {/* Timeline Slider Buttons */}
        <div className="flex justify-between items-center max-w-4xl mx-auto relative mb-12 py-4 border-b border-gray-200">
          {timelineEvents.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={item.year}
                onClick={() => setSelectedIdx(idx)}
                className={`relative flex flex-col items-center gap-2 cursor-pointer focus:outline-none z-10 group`}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-[#F59E0B] border-[#F59E0B] text-[#0F172A] scale-110 shadow-lg' 
                      : 'bg-white border-[#E2E8F0] text-[#64748B] hover:border-[#F59E0B] hover:text-[#F59E0B]'
                  }`}
                >
                  <Icon size={20} />
                </div>
                <span className={`text-sm font-extrabold font-syne transition-colors duration-300 ${
                  isSelected ? 'text-[#F59E0B]' : 'text-[#64748B] group-hover:text-[#F59E0B]'
                }`}>
                  {item.year}
                </span>
                {isSelected && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -bottom-[21px] w-20 h-1 bg-[#F59E0B]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Event Showcase Card */}
        <div className="max-w-4xl mx-auto min-h-[250px] bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex-1"
            >
              <span className="text-sm font-bold uppercase tracking-widest text-[#F59E0B] block mb-2 font-sans">
                {timelineEvents[selectedIdx].subtitle}
              </span>
              <h3 className="text-3xl font-extrabold text-[#0F172A] tracking-tight font-syne mb-4">
                {timelineEvents[selectedIdx].title}
              </h3>
              <p className="text-[#64748B] font-light leading-relaxed mb-6">
                {timelineEvents[selectedIdx].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`metric-${selectedIdx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-50 border border-[#E2E8F0] rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center w-full md:w-[240px] shrink-0"
            >
              <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block mb-1">
                Milestone Data
              </span>
              <span className="text-lg font-extrabold text-[#0F172A] font-syne">
                {timelineEvents[selectedIdx].metric}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
