import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const StatsCard = ({ title, value, change, isPositive, icon: Icon, description, badgeText }) => {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 relative overflow-hidden group shadow-md"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {title}
        </span>
        {Icon && (
          <div className="p-2.5 rounded-2xl theme-accent-light-bg theme-accent-text group-hover:scale-110 transition">
            <Icon className="w-5 h-5 stroke-[2]" />
          </div>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          {value}
        </h3>
        {change && (
          <div className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${
            isPositive ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
          }`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {change}
          </div>
        )}
      </div>

      {(description || badgeText) && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">{description}</span>
          {badgeText && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md theme-accent-light-bg theme-accent-text">
              {badgeText}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};
