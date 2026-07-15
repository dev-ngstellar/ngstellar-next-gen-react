import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, ShieldCheck, Leaf } from 'lucide-react';

const technologies = [
  {
    id: 1,
    title: 'AI Construction Planning',
    description: 'Using generative design algorithms and machine learning to optimize blueprints, material logistics, structural integrity, and scheduling variables.',
    icon: Cpu
  },
  {
    id: 2,
    title: 'Smart Building Systems',
    description: 'Integrating advanced IoT networks, automated building ventilation controls, light adjustments, and structural load monitors on all builds.',
    icon: Server
  },
  {
    id: 3,
    title: 'Digital Twin Technology',
    description: 'Developing complete virtual models of our assets, allowing engineers to simulate weather loads and model maintenance strategies in real-time.',
    icon: ShieldCheck
  },
  {
    id: 4,
    title: 'Sustainable Infrastructure',
    description: 'Integrating solar facades, hydrogen power cells, eco-concrete composites, and graywater recycling structures into the core foundations.',
    icon: Leaf
  }
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-slate-50 border-t border-[#F1F5F9] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[35%] h-[50%] bg-gradient-to-t from-[#F59E0B]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#F59E0B] font-bold text-xs uppercase tracking-[0.25em] block mb-3 font-sans">
            Future Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-syne mb-6">
            Next-Gen Infrastructure Technology
          </h2>
          <p className="text-[#64748B] font-light">
            We operate at the convergence of heavy engineering and high technology to build smarter, faster, and carbon-neutral cities.
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.id}
                className="bg-white rounded-3xl p-8 md:p-10 border border-[#E2E8F0] shadow-sm hover:shadow-[0_25px_50px_rgba(15,23,42,0.06)] hover:border-[#F59E0B] transition-all duration-300 group flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] mb-6 group-hover:bg-[#F59E0B] group-hover:text-[#0F172A] transition-all duration-300">
                  <Icon size={24} />
                </div>

                <h3 className="text-2xl font-bold text-[#0F172A] font-syne mb-4">
                  {tech.title}
                </h3>
                <p className="text-[#64748B] font-light leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
