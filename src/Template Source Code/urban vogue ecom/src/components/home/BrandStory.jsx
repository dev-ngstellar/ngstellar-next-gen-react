import React from 'react';

const BrandStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image */}
          <div className="lg:col-span-6 aspect-[4/5] bg-gray-50 overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80"
              alt="Urban Vogue Tailoring Atelier"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[1200ms] ease-out"
            />
            <div className="absolute inset-0 bg-black/5"></div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-6 space-y-8 lg:pl-6">
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-light block">
              The Atelier Philosophy
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-wide text-black">
              Crafted To Live, <br />
              Tailored To Outlast.
            </h2>
            
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed tracking-wide">
              Established with a singular commitment to refined modernism, Urban Vogue stands at the intersection of architectural structure and natural softness. We reject the rapid cycle of fleeting trends, choosing instead to focus on slow fashion.
            </p>
            
            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed tracking-wide">
              Every garment in our collection is the result of collaborative craftsmanship with family-owned mills across Northern Italy and Portugal. By selecting traceably sourced Mongolian cashmere, organic Belgian linen, and certified biodegradable silk, we ensure that every thread respect both the skin and the planet.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100">
              <div>
                <span className="font-serif text-xl sm:text-2xl font-light text-black">100%</span>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 font-light mt-1">Traceable Fibers</p>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-light text-black">Italy</span>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 font-light mt-1">Atelier Crafted</p>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-light text-black">2026</span>
                <p className="text-[9px] uppercase tracking-widest text-gray-400 font-light mt-1">Summer Release</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;
