import React from 'react';
import TemplateCard from './TemplateCard.jsx';
import { templates } from '../../data/templatesData.js';

const RelatedTemplates = ({ currentSlug }) => {
  // Exclude current template
  const relatedList = templates.filter((t) => t.slug !== currentSlug).slice(0, 3);

  return (
    <section className="py-16 border-t border-white/5 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-white">
            You May Also Like
          </h2>
          <p className="mt-2 text-slate-400">
            Explore other industry-specific premium website templates designed for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedList.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedTemplates;
