import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ArrowUpDown, X, Star, Heart, Eye } from 'lucide-react';
import { mockProducts } from '../data/products';
import { useShop } from '../hooks/useShop';
import ProductCard from '../components/products/ProductCard';

const Products = () => {
  const { toggleWishlist, isInWishlist, setQuickViewProduct, addToCart } = useShop();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColor, setSelectedColor] = useState('All');
  const [maxPrice, setMaxPrice] = useState(500);
  const [searchFilter, setSearchFilter] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Sync state with URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('All');
    }

    if (searchParam) {
      setSearchFilter(searchParam);
    } else {
      setSearchFilter('');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.search, searchParams]);

  // Extract all unique sizes & colors for filtering
  const allSizes = useMemo(() => {
    const sizes = new Set();
    mockProducts.forEach(p => p.sizes.forEach(s => sizes.add(s)));
    return Array.from(sizes);
  }, []);

  const allColors = useMemo(() => {
    const colors = new Map();
    mockProducts.forEach(p => p.colors.forEach(c => colors.set(c.name, c.hex)));
    return Array.from(colors.entries()).map(([name, hex]) => ({ name, hex }));
  }, []);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...mockProducts];

    // Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Search Filter
    if (searchFilter) {
      const query = searchFilter.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    // Size Filter
    if (selectedSizes.length > 0) {
      result = result.filter(p => 
        p.sizes.some(s => selectedSizes.includes(s))
      );
    }

    // Color Filter
    if (selectedColor !== 'All') {
      result = result.filter(p => 
        p.colors.some(c => c.name === selectedColor)
      );
    }

    // Price Filter
    result = result.filter(p => p.price <= maxPrice);

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchFilter, selectedSizes, selectedColor, maxPrice, sortBy]);

  const handleSizeToggle = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedSizes([]);
    setSelectedColor('All');
    setMaxPrice(500);
    setSearchFilter('');
    setSearchParams({});
  };

  // Smart Add To Cart
  const handleSmartAddToCart = (product) => {
    // If it's One Size and has only 1 color, add instantly. Otherwise, trigger Quick View modal.
    if (product.sizes.length === 1 && product.colors.length === 1) {
      addToCart(product, product.sizes[0], product.colors[0], 1);
      alert(`Added ${product.name} to bag.`);
    } else {
      setQuickViewProduct(product);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-page-enter">
      
      {/* Page Header */}
      <div className="border-b border-gray-100 pb-8 mb-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal tracking-wide">
            {selectedCategory === 'All' ? 'Shop All Collections' : `${selectedCategory} Collection`}
          </h1>
          <p className="text-xs text-gray-400 font-light mt-1.5 uppercase tracking-widest">
            Showing {filteredProducts.length} of {mockProducts.length} premium designs
          </p>
        </div>

        {/* Search Input Filter */}
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="FILTER BY KEYWORD..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full bg-transparent border border-gray-200 text-xs py-3 px-4 uppercase tracking-widest font-light focus:outline-none focus:border-black transition-colors"
          />
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between py-4 border-b border-gray-100 mb-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="lg:hidden flex items-center space-x-2 text-xs tracking-widest uppercase font-light text-black hover:opacity-60 transition-opacity"
        >
          <SlidersHorizontal className="w-4 h-4 stroke-[1.25]" />
          <span>Filters</span>
        </button>

        {/* Desktop Filter Count Info (placeholder spacing) */}
        <div className="hidden lg:flex items-center space-x-2 text-xs tracking-widest text-gray-400 font-light uppercase">
          <SlidersHorizontal className="w-3.5 h-3.5 stroke-[1.25]" />
          <span>Refined Search Parameters</span>
        </div>

        {/* Sort Select */}
        <div className="flex items-center space-x-3">
          <ArrowUpDown className="w-3.5 h-3.5 stroke-[1.25] text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-none text-[10px] tracking-widest font-light uppercase focus:outline-none text-black cursor-pointer pr-8"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="flex gap-10">
        
        {/* --- DESKTOP SIDEBAR FILTERS --- */}
        <aside className="hidden lg:block w-64 flex-shrink-0 space-y-8">
          
          {/* Categories Filter */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase">Categories</h3>
            <ul className="space-y-2.5 text-xs font-light text-gray-500 uppercase tracking-widest">
              {['All', 'Women', 'Men', 'Shoes', 'Accessories'].map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSearchParams(cat === 'All' ? {} : { category: cat });
                    }}
                    className={`text-left hover:text-black transition-colors ${
                      selectedCategory === cat ? 'text-black font-normal underline underline-offset-4' : ''
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-[1px] bg-gray-100"></div>

          {/* Sizes Filter */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase">Sizes</h3>
            <div className="flex flex-wrap gap-2">
              {allSizes.map(size => (
                <button
                  key={size}
                  onClick={() => handleSizeToggle(size)}
                  className={`border text-[10px] tracking-wider py-1.5 px-3 min-w-[38px] transition-colors duration-200 ${
                    selectedSizes.includes(size)
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 text-gray-500 hover:border-black hover:text-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-gray-100"></div>

          {/* Colors Filter */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase">Colors</h3>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setSelectedColor('All')}
                className={`w-6 h-6 rounded-full border border-gray-200 text-[9px] flex items-center justify-center font-light uppercase tracking-widest ${
                  selectedColor === 'All' ? 'border-black bg-black text-white font-normal' : 'hover:border-black'
                }`}
                title="All Colors"
              >
                All
              </button>
              {allColors.map(color => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-6 h-6 rounded-full border flex items-center justify-center transition-transform hover:scale-105 ${
                    selectedColor === color.name ? 'border-black scale-110 shadow-xs' : 'border-gray-200'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {selectedColor === color.name && (
                    <span className={`w-1.5 h-1.5 rounded-full ${color.hex === '#FFFFFF' ? 'bg-black' : 'bg-white'}`}></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-gray-100"></div>

          {/* Price Range Filter */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xs font-semibold tracking-widest uppercase">Max Price</h3>
              <span className="text-xs font-serif font-light text-black">${maxPrice}</span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-black cursor-pointer bg-gray-200 h-[2px]"
            />
            <div className="flex justify-between text-[9px] tracking-widest text-gray-400 font-light">
              <span>$50</span>
              <span>$500</span>
            </div>
          </div>

          {/* Reset Filters */}
          <button
            onClick={handleClearFilters}
            className="w-full text-center text-xs tracking-widest uppercase py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 font-light"
          >
            Clear Filters
          </button>
        </aside>

        {/* --- PRODUCTS GRID (Right Side) --- */}
        <main className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center space-y-4">
              <span className="text-gray-300 font-serif text-4xl">∅</span>
              <h3 className="font-serif text-lg tracking-wider">No matching styles found</h3>
              <p className="text-xs text-gray-400 font-light max-w-xs mx-auto leading-relaxed">
                Adjust your filters, search keywords, or reset to explore our full luxury catalogue.
              </p>
              <button
                onClick={handleClearFilters}
                className="mt-4 border border-black text-xs tracking-widest uppercase py-3 px-8 font-light hover:bg-black hover:text-white transition-colors duration-300"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map(product => (
                <div key={product.id} className="flex flex-col">
                  {/* Reuse the custom card */}
                  <ProductCard product={product} />
                  
                  {/* Inline Add to Cart Button underneath (Zara/H&M style overlay style addition) */}
                  <button
                    onClick={() => handleSmartAddToCart(product)}
                    className="w-full mt-3 bg-black text-white text-[10px] tracking-widest font-light uppercase py-3 hover:bg-neutral-850 transition-colors"
                  >
                    Add To Bag
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* --- MOBILE FILTERS DRAWER PANEL --- */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/45 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsMobileFiltersOpen(false)}
          ></div>
          
          {/* Panel */}
          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-50 p-6 overflow-y-auto animate-[slide-in-left_0.4s_cubic-bezier(0.16,1,0.3,1)]">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
              <h2 className="font-serif text-lg tracking-wider">Filter Styles</h2>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="p-1 hover:opacity-50 text-black">
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            <div className="space-y-8">
              {/* Category */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold tracking-widest uppercase">Categories</h3>
                <div className="flex flex-col space-y-2 text-xs font-light text-gray-500 uppercase tracking-widest">
                  {['All', 'Women', 'Men', 'Shoes', 'Accessories'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSearchParams(cat === 'All' ? {} : { category: cat });
                      }}
                      className={`text-left hover:text-black py-1 ${
                        selectedCategory === cat ? 'text-black font-normal underline underline-offset-4' : ''
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-gray-100"></div>

              {/* Sizes */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold tracking-widest uppercase">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {allSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => handleSizeToggle(size)}
                      className={`border text-[10px] tracking-wider py-1.5 px-3 min-w-[38px] transition-colors duration-200 ${
                        selectedSizes.includes(size)
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 text-gray-500 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-gray-100"></div>

              {/* Colors */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold tracking-widest uppercase">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedColor('All')}
                    className={`w-6 h-6 rounded-full border border-gray-200 text-[9px] flex items-center justify-center font-light uppercase tracking-widest ${
                      selectedColor === 'All' ? 'border-black bg-black text-white font-normal' : ''
                    }`}
                  >
                    All
                  </button>
                  {allColors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                        selectedColor === color.name ? 'border-black scale-110 shadow-xs' : 'border-gray-200'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor === color.name && (
                        <span className={`w-1.5 h-1.5 rounded-full ${color.hex === '#FFFFFF' ? 'bg-black' : 'bg-white'}`}></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-[1px] bg-gray-100"></div>

              {/* Price */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-semibold tracking-widest uppercase">Max Price</h3>
                  <span className="text-xs font-serif font-light text-black">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-black bg-gray-200 h-[2px]"
                />
              </div>

              {/* Reset */}
              <button
                onClick={() => {
                  handleClearFilters();
                  setIsMobileFiltersOpen(false);
                }}
                className="w-full text-center text-xs tracking-widest uppercase py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 font-light"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Products;
