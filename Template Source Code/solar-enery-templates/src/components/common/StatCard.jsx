import React from 'react';

export const StatCard = ({ value, label, description, icon: Icon, dark = false }) => {
  return (
    <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 card-hover ${
      dark
        ? 'bg-slate-900/90 border-slate-800 text-white'
        : 'bg-white border-slate-100 shadow-md text-slate-900'
    }`}>
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-[#f0771a] flex items-center justify-center mb-4">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f0771a] tracking-tight mb-2">
        {value}
      </div>
      <div className={`text-base font-bold mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>
        {label}
      </div>
      {description && (
        <p className={`text-xs sm:text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
