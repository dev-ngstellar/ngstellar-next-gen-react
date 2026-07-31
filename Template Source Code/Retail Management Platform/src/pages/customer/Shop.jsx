import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { Search, Filter, LayoutGrid, List, Star, Plus, Eye, QrCode, Heart, X, Check } from 'lucide-react';

export default function Shop() {
  const {
    products,
    addToCart,
    wishlist,
    toggleWishlist,
    setQuickViewProduct,
    setBarcodeProduct,
    setSelectedProduct,
    setActiveCustomerTab
  } = useStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [organicOnly, setOrganicOnly] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [sortBy, setSortBy] = useState('popular'); // 'popular' | 'price-low' | 'price-high' | 'rating'

  const categories = ['All', 'Vegetables', 'Fruits', 'Dairy & Eggs', 'Bakery', 'Seafood', 'Beverages', 'Meat & Poultry'];

  let filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesOrganic = !organicOnly || p.isOrganic;
    return matchesSearch && matchesCategory && matchesOrganic;
  });

  if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  const handleOpenDetails = (product) => {
    setSelectedProduct(product);
    setActiveCustomerTab('product-details');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-white/20 font-bold text-xs">Full Grocery Catalog</span>
          <h1 className="text-3xl font-extrabold">Shop Premium Produce & Essentials</h1>
          <p className="text-xs text-emerald-100 max-w-lg">Filter through over 5,000+ certified organic and fresh items sourced directly from verified growers.</p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-80 relative">
          <Search className="w-5 h-5 absolute left-3.5 top-3 text-slate-400" />
          <input 
            type="text"
            placeholder="Search items by name, category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white text-slate-900 text-sm outline-none shadow-md placeholder:text-slate-400"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-3 top-3 text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter & View Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Organic Toggle & Sort & Grid Mode */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <label className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
            <input 
              type="checkbox" 
              checked={organicOnly}
              onChange={(e) => setOrganicOnly(e.target.checked)}
              className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
            />
            100% Organic Only
          </label>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 outline-none"
          >
            <option value="popular">Sort by Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>

          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-xs ${viewMode === 'grid' ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-xs' : 'text-slate-400'}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg text-xs ${viewMode === 'list' ? 'bg-white dark:bg-slate-900 text-emerald-600 shadow-xs' : 'text-slate-400'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
          <p className="text-lg font-bold text-slate-700 dark:text-slate-300">No products matched your search or filters.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setOrganicOnly(false); }}
            className="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(product => (
            <div 
              key={product.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between group relative"
            >
              <div>
                <div className="relative mb-4 overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-950">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => handleOpenDetails(product)}
                  />
                  {product.isOrganic && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                      Organic
                    </span>
                  )}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>

                  <div className="absolute inset-x-0 bottom-3 px-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-md text-xs font-bold flex items-center gap-1 hover:bg-emerald-50"
                    >
                      <Eye className="w-4 h-4" /> Quick View
                    </button>
                    <button
                      onClick={() => setBarcodeProduct(product)}
                      className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-md text-xs font-bold flex items-center gap-1 hover:bg-emerald-50"
                    >
                      <QrCode className="w-4 h-4" /> Barcode
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{product.category}</span>
                  <span className="text-[10px] text-slate-400 font-semibold">{product.brand}</span>
                </div>

                <h3 
                  onClick={() => handleOpenDetails(product)}
                  className="text-base font-bold text-slate-900 dark:text-slate-100 cursor-pointer hover:text-emerald-600 transition-colors"
                >
                  {product.name}
                </h3>

                <div className="flex items-center gap-1 my-2 text-amber-500 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400 font-normal text-[11px]">({product.reviewsCount})</span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xl font-extrabold text-slate-900 dark:text-slate-100">${product.price.toFixed(2)}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                  )}
                  <span className="text-xs text-slate-500">/ {product.unit}</span>
                </div>
              </div>

              <button
                onClick={() => addToCart(product, 1)}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <Plus className="w-4 h-4" /> Add To Basket
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(product => (
            <div 
              key={product.id}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 shadow-soft-sm transition-all flex items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <img src={product.image} alt={product.name} className="w-20 h-20 rounded-xl object-cover" />
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">{product.category}</span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{product.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{product.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <span className="text-lg font-extrabold text-slate-900 dark:text-slate-100">${product.price.toFixed(2)}</span>
                  <p className="text-[10px] text-slate-400">{product.unit}</p>
                </div>

                <button
                  onClick={() => addToCart(product, 1)}
                  className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Add
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
