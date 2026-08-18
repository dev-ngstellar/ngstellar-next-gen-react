import React from 'react';

export const SectionBreak: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-4 md:py-6 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-3xl overflow-hidden shadow-soft border border-[#C9A35D]/20">
          <img
            src="/assets/section-break.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
