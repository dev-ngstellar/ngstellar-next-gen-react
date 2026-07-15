import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      name: 'Women',
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&auto=format&fit=crop&q=80',
      path: '/products?category=Women',
      colSpan: 'md:col-span-2'
    },
    {
      name: 'Men',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=700&auto=format&fit=crop&q=80',
      path: '/products?category=Men',
      colSpan: 'md:col-span-1'
    },
    {
      name: 'Shoes',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&auto=format&fit=crop&q=80',
      path: '/products?category=Shoes',
      colSpan: 'md:col-span-1'
    },
    {
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&auto=format&fit=crop&q=80',
      path: '/products?category=Accessories',
      colSpan: 'md:col-span-2'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-light block mb-3">
            Shop By Style
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-wide">
            Curated Categories
          </h2>
          <div className="w-12 h-[1px] bg-black/20 mx-auto mt-4"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <Link
              key={cat.name}
              to={cat.path}
              className={`group relative overflow-hidden aspect-[4/5] md:aspect-auto md:h-[480px] bg-gray-50 flex flex-col justify-end p-8 ${cat.colSpan}`}
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={`${cat.name} Category`}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1200ms] cubic-bezier(0.16,1,0.3,1) group-hover:scale-105"
              />
              
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-75"></div>

              {/* Title & Shop Now */}
              <div className="relative z-10 text-white space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-2xl tracking-wide">{cat.name}</h3>
                <span className="text-[10px] tracking-[0.2em] font-light uppercase border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
