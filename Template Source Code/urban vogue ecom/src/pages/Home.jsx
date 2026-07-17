import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import FeaturedBanner from '../components/home/FeaturedBanner';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import ProductCard from '../components/products/ProductCard';
import { mockProducts } from '../data/products';

const Home = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Slice mock products for Home Page grids
  const newArrivals = mockProducts.slice(0, 8);
  const trendingProducts = mockProducts.slice(8, 16);

  return (
    <div className="animate-page-enter">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Categories Section */}
      <Categories />

      {/* 3. New Arrivals */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="global-container">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-light block mb-3">
              Fresh Releases
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-wide text-black">
              New Arrivals
            </h2>
            <div className="w-12 h-[1px] bg-black/20 mx-auto mt-4"></div>
          </div>

          {/* 8 Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Featured Collection Banner */}
      <FeaturedBanner />

      {/* 5. Trending Products */}
      <section className="py-24 bg-white">
        <div className="global-container">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-light block mb-3">
              Most Coveted
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-wide text-black">
              Trending Products
            </h2>
            <div className="w-12 h-[1px] bg-black/20 mx-auto mt-4"></div>
          </div>

          {/* 8 Products Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* 6. Brand Story Section */}
      <BrandStory />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
