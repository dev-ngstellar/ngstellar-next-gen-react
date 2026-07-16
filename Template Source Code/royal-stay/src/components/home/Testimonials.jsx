import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../../data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#1a1a1a] text-white py-24 border-y border-[#c5a880]/15 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c5a880]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        {/* Quote Icon */}
        <Quote className="w-12 h-12 text-[#c5a880]/30 stroke-[1] mb-6" />

        <span className="text-xs tracking-[0.25em] uppercase text-[#c5a880] font-semibold mb-2">Guest Diaries</span>
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-12">
          Testimonials
        </h2>

        {/* Carousel Content */}
        <div className="min-h-[260px] md:min-h-[220px] flex items-center justify-center">
          {testimonialsData.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 flex flex-col items-center gap-6 ${
                idx === activeIndex 
                  ? 'opacity-100 scale-100 pointer-events-auto block' 
                  : 'opacity-0 scale-95 pointer-events-none absolute'
              }`}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c5a880] text-[#c5a880]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-lg md:text-xl lg:text-2xl font-light italic text-white/95 leading-relaxed max-w-3xl">
                "{testimonial.text}"
              </p>

              {/* Guest Profile */}
              <div className="flex items-center gap-3.5 mt-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#c5a880]/30"
                />
                <div className="text-left">
                  <h4 className="text-sm font-semibold tracking-wider text-white">{testimonial.name}</h4>
                  <span className="text-xs text-white/50 font-light">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-2 border border-white/10 hover:border-[#c5a880] text-white/50 hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'w-6 bg-[#c5a880]' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 border border-white/10 hover:border-[#c5a880] text-white/50 hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
