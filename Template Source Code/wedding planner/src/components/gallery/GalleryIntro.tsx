import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const GalleryIntro: React.FC = () => {
  const highlights = [
    {
      step: '01',
      title: 'Thoughtful Details',
      description: 'Personal touches and carefully selected elements that make every celebration feel unique.',
    },
    {
      step: '02',
      title: 'Beautiful Settings',
      description: 'Elegant décor, floral styling, lighting, and venues brought together to create a memorable atmosphere.',
    },
    {
      step: '03',
      title: 'Seamless Moments',
      description: 'Careful coordination behind the scenes so you can stay present and enjoy every moment of your celebration.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#C9A35D]/20 relative overflow-hidden">
      
      {/* Background Image with Gradient Fade Mask from Left to Right (Visible/Darker to Transparent) */}
      <div className="absolute top-0 bottom-0 left-0 w-full md:w-1/2 pointer-events-none opacity-40 md:opacity-50 z-0">
        <img
          src="/assets/luxury_wedding_decor_fade.jpg"
          alt="Luxury wedding celebration"
          className="w-full h-full object-cover"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 95%)',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 95%)',
          }}
        />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <SectionHeading
              eyebrow="Unique Stories"
              title="Celebrations With Character"
              alignment="center"
              className="mb-2"
            />
            <p className="text-sm sm:text-base font-light text-[#756D67] leading-relaxed">
              We believe the most memorable weddings are the ones that feel personal. From the first floral detail to the final dance, we bring together beautiful design, thoughtful planning, and seamless coordination to create celebrations that reflect each couple's story.
            </p>

            <div className="pt-2 flex items-center justify-center gap-3">
              <span className="h-[1px] w-12 bg-[#C9A35D]/60" />
              <span className="text-[#C9A35D] text-base font-serif">♡</span>
              <span className="h-[1px] w-12 bg-[#C9A35D]/60" />
            </div>
          </div>

          {/* 3 Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-2">
            {highlights.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-3xl bg-surface/90 backdrop-blur-md border border-[#C9A35D]/30 shadow-soft hover:shadow-xl hover:border-[#C9A35D] transition-all duration-300 space-y-2 h-full flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-serif text-sm font-bold text-[#C9A35D] block">
                    {item.step}
                  </span>
                  <h4 className="font-bold text-base text-[#2D2927] font-serif">
                    {item.title}
                  </h4>
                  <div className="w-8 h-[1px] bg-[#C9A35D]/30" />
                  <p className="text-xs font-light text-[#756D67] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
