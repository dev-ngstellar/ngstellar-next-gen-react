import React from 'react';
import type { GalleryCategory } from '../../data/gallery';
import { galleryCategories } from '../../data/gallery';

interface GalleryFilterProps {
  activeCategory: GalleryCategory;
  onSelectCategory: (cat: GalleryCategory) => void;
}

export const GalleryFilter: React.FC<GalleryFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
      {galleryCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer ${
              isActive
                ? 'bg-primary text-surface font-semibold shadow-md'
                : 'bg-surface text-text hover:bg-secondary/80 border border-secondary'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
