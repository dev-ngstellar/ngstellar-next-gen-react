import React from 'react';
import { agents } from '../../data/agents';
import { AgentCard } from '../../components/cards/AgentCard';
import { motion } from 'framer-motion';

export const Agents = () => {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase font-bold tracking-widest text-theme-primary px-3 py-1.5 bg-theme-primary/10 rounded-full"
        >
          Consulting Team
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight"
        >
          Meet Our Certified Advisors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-xs sm:text-sm leading-relaxed"
        >
          Consult with our specialized experts across residential sales, commercial portfolios, and farmland plots.
        </motion.p>
      </div>

      {/* Grid of Agents */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default Agents;
