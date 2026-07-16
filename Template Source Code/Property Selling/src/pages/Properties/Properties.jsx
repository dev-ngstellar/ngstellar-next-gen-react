import React, { useState, useMemo } from 'react';
import { properties } from '../../data/properties';
import { siteConfig } from '../../data/siteConfig';
import { PropertyCard } from '../../components/cards/PropertyCard';
import { FiGrid, FiList, FiSliders, FiX, FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export const Properties = () => {
  const [viewMode, setViewMode] = useState('grid'); // grid | list
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterBeds, setFilterBeds] = useState('');
  const [filterBudget, setFilterBudget] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // price-asc | price-desc | newest | popular
  const [visibleCount, setVisibleCount] = useState(6);

  // Derive locations dynamically from data to prevent duplicates
  const locations = useMemo(() => {
    const allLocs = properties.map(p => p.location.split(',')[1]?.trim() || p.location);
    return [...new Set(allLocs)].filter(Boolean);
  }, []);

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (searchTerm) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterLocation) {
      result = result.filter(p => p.location.toLowerCase().includes(filterLocation.toLowerCase()));
    }

    if (filterType) {
      result = result.filter(p => p.category === filterType);
    }

    if (filterStatus) {
      result = result.filter(p => p.status === filterStatus);
    }

    if (filterBeds) {
      result = result.filter(p => p.bedrooms >= parseInt(filterBeds));
    }

    if (filterBudget) {
      const maxBudget = parseInt(filterBudget);
      result = result.filter(p => p.price <= maxBudget);
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    } else {
      // Default to newest (based on order or simulated date)
      result.reverse();
    }

    return result;
  }, [searchTerm, filterLocation, filterType, filterStatus, filterBeds, filterBudget, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setFilterLocation('');
    setFilterType('');
    setFilterStatus('');
    setFilterBeds('');
    setFilterBudget('');
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Page Title */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">Explore Properties</h1>
        <p className="text-slate-500 text-sm sm:text-base">Find luxury estates, commercial hubs, and agricultural land listings.</p>
      </div>

      {/* Advanced Filters Panel */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-2 text-slate-800 font-bold">
            <FiSliders className="text-lg text-theme-primary" />
            <span>Search & Filter Parameters</span>
          </div>
          {(searchTerm || filterLocation || filterType || filterStatus || filterBeds || filterBudget) && (
            <button
              onClick={clearFilters}
              className="flex items-center space-x-1 text-xs text-rose-500 font-bold hover:underline cursor-pointer"
            >
              <FiX />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {/* Keyword Search */}
          <div className="space-y-1.5 col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-2">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Search Keyword</label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. Villa, Ocean View"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary"
              />
              <FiSearch className="absolute right-3.5 top-3.5 text-slate-400" />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Location</label>
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary cursor-pointer"
            >
              <option value="">All Locations</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Property Type */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Property Type</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary cursor-pointer"
            >
              <option value="">All Types</option>
              {siteConfig.categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary cursor-pointer"
            >
              <option value="">All Status</option>
              <option value="For Sale">For Sale</option>
              <option value="For Lease">For Lease</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Beds Min</label>
            <select
              value={filterBeds}
              onChange={(e) => setFilterBeds(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary cursor-pointer"
            >
              <option value="">Any</option>
              <option value="1">1+ Beds</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
              <option value="5">5+ Beds</option>
            </select>
          </div>

          {/* Budget Max */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Budget Max</label>
            <select
              value={filterBudget}
              onChange={(e) => setFilterBudget(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-theme-primary cursor-pointer"
            >
              <option value="">Any Budget</option>
              <option value="500000">$500,000</option>
              <option value="1000000">$1,000,000</option>
              <option value="2000000">$2,000,000</option>
              <option value="3500000">$3,500,000</option>
              <option value="5000000">$5,000,000</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Settings & Sort controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
        <div className="text-sm text-slate-400">
          Showing <span className="font-semibold text-slate-800">{Math.min(filteredProperties.length, visibleCount)}</span> of{' '}
          <span className="font-semibold text-slate-800">{filteredProperties.length}</span> properties
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          {/* Sorting */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="popular">Popular</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </div>

          {/* View toggle */}
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-white text-theme-primary shadow-xs' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <FiGrid />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
                viewMode === 'list' ? 'bg-white text-theme-primary shadow-xs' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <FiList />
            </button>
          </div>
        </div>
      </div>

      {/* Properties Display */}
      {filteredProperties.length > 0 ? (
        <div className="space-y-8">
          <motion.div 
            layout 
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'flex flex-col gap-6'
            }
          >
            {filteredProperties.slice(0, visibleCount).map((prop) => (
              <div 
                key={prop.id}
                className={viewMode === 'list' ? 'w-full lg:flex lg:flex-row max-h-[400px] border border-slate-100 bg-white rounded-3xl overflow-hidden shadow-sm' : ''}
              >
                {/* For List View mode layout */}
                {viewMode === 'list' ? (
                  <>
                    <div className="lg:w-1/3 aspect-video lg:aspect-auto overflow-hidden">
                      <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400">{prop.type}</span>
                        <h3 className="text-xl font-bold text-slate-800 mt-1 mb-2">{prop.title}</h3>
                        <p className="text-xs text-slate-500 line-clamp-3 mb-4">{prop.description}</p>
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                        <span className="text-xl font-extrabold text-theme-primary">
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(prop.price)}
                        </span>
                        <button
                          onClick={() => window.location.href = `/property/${prop.id}`}
                          className="px-5 py-2.5 bg-slate-100 hover:bg-theme-primary hover:text-white transition-colors rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <PropertyCard property={prop} />
                )}
              </div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {visibleCount < filteredProperties.length && (
            <div className="text-center pt-8">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-white border border-slate-200 text-slate-700 hover:border-theme-primary hover:text-theme-primary transition-all font-bold text-sm rounded-full cursor-pointer"
              >
                Load More Listings
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <p className="text-slate-400">No properties matched your specific search criteria.</p>
          <button
            onClick={clearFilters}
            className="px-6 py-2 bg-theme-primary text-white font-bold text-xs rounded-full cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Properties;
