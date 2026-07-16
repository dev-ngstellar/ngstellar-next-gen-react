import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Landmark, Percent, Compass } from 'lucide-react';

const projectsList = [
  {
    id: 1,
    name: 'Aurelia Spire',
    location: 'Downtown Dubai',
    completion: 87,
    value: '$1.2B',
    type: 'Luxury Skyscraper',
    img: '/dubai_skyscraper_hero.png'
  },
  {
    id: 2,
    name: 'NEOM Future Hub',
    location: 'Tabuk Province, KSA',
    completion: 35,
    value: '$5.6B',
    type: 'Smart Tech District',
    img: '/engineers_construction_site.png'
  },
  {
    id: 3,
    name: 'Creek Tower Waterfront',
    location: 'Dubai Creek Harbour',
    completion: 62,
    value: '$2.4B',
    type: 'Mixed-Use Mega Project',
    img: '/creek_tower_construction.png'
  },
  {
    id: 4,
    name: 'Oceanic Port Terminal',
    location: 'Singapore',
    completion: 90,
    value: '$950M',
    type: 'Advanced Infrastructure',
    img: '/dubai_skyscraper_hero.png'
  }
];

export default function MegaProjects() {
  return (
    <section id="projects" className="py-24 bg-white border-t border-[#F1F5F9]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px]">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-[0.25em] block mb-3 font-sans">
            Global Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-syne mb-6">
            Iconic Mega Projects
          </h2>
          <p className="text-[#64748B] font-light">
            Architectural marvels and smart cities built with precision, futuristic engineering, and sustainable practices.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsList.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-[0_30px_60px_rgba(15,23,42,0.08)] transition-all duration-500 group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              {/* Image Container */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[8s] ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3.5 py-1 rounded-full text-xs font-bold text-[#0F172A] border border-white/20">
                  {project.type}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block mb-1">
                        {project.location}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0F172A] font-syne group-hover:text-[#F59E0B] transition-colors duration-300">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Telemetry metrics bar */}
                  <div className="mb-6 pt-4 border-t border-[#F1F5F9]">
                    <div className="flex justify-between text-xs text-[#64748B] font-semibold mb-2">
                      <span>Project Progress</span>
                      <span>{project.completion}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#F59E0B]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.completion}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Investment telemetry indicators */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F1F5F9] bg-slate-50/50 rounded-xl p-4">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-[#64748B] tracking-wider block">
                      Valuation
                    </span>
                    <span className="text-lg font-extrabold text-[#0F172A] font-syne">
                      {project.value}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] uppercase font-bold text-[#64748B] tracking-wider block">
                      Investment Share
                    </span>
                    <span className="text-sm font-semibold text-emerald-600 font-sans mt-0.5">
                      Fully Funded
                    </span>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
