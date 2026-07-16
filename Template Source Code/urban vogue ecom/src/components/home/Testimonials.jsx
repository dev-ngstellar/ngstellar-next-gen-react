import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The Double-Breasted Wool Trench Coat is an architectural masterpiece. The drape is heavy yet fluid, and it commands attention in the most understated way possible.",
      author: "Vittoria de Rossi",
      role: "Art Director",
      location: "Milan, Italy"
    },
    {
      quote: "Urban Vogue has redefined my wardrobe essentials. The cashmere knit is unbelievably soft and has maintained its shape through multiple wearings. Absolutely flawless.",
      author: "Julian Thorne",
      role: "Creative Consultant",
      location: "London, UK"
    },
    {
      quote: "Receiving my parcel felt like opening a bespoke gift. The linen trousers are incredibly light and perfectly tailored for the summer weather. Customer care is peerless.",
      author: "Alexandra Vance",
      role: "Architect",
      location: "New York, USA"
    }
  ];

  return (
    <section className="py-24 bg-neutral-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-light block mb-3">
            Voices of Vogue
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-wide">
            Client Testimonials
          </h2>
          <div className="w-12 h-[1px] bg-black/20 mx-auto mt-4"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 border border-gray-150 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
                  ))}
                </div>
                {/* Quote */}
                <p className="font-serif text-sm text-black/80 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <span className="text-xs font-medium tracking-wider text-black uppercase block">
                  {t.author}
                </span>
                <span className="text-[10px] text-gray-400 font-light uppercase tracking-widest block mt-0.5">
                  {t.role} — {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
