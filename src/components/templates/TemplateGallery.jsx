import React from 'react';
import TemplatePreviewCard from './TemplatePreviewCard.jsx';

const TemplateGallery = ({ pages, onOpenLightbox }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-white">
            Page Previews
          </h2>
          <p className="mt-2 text-slate-400">
            Explore the pages included in this template. Click on any preview to view full resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page, index) => (
            <TemplatePreviewCard
              key={page.title}
              page={page}
              index={index}
              onOpenLightbox={onOpenLightbox}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery;
