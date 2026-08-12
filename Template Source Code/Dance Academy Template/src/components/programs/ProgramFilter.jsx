import React from 'react';

export default function ProgramFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              isActive
                ? 'bg-[#C99683] text-[#101214] font-bold shadow-lg shadow-[#C99683]/20 scale-105'
                : 'bg-[#151719] text-[#A39E98] border border-[#282523] hover:text-[#F7F4F0] hover:border-[#C99683]/50'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
