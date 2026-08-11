import React from 'react';

export const ProjectFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none ${
              isActive
                ? 'bg-[#f0771a] text-white shadow-md shadow-orange-500/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
