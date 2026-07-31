import React from 'react';
import { useStore } from '../../context/StoreContext';
import { MOCK_CATEGORIES } from '../../data/mockData';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Categories() {
  const { setActiveCustomerTab } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-extrabold text-xs">
          Explore Grocery Departments
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
          Curated Department Store Landing
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Discover certified fresh farm produce, organic bio items, grass-fed dairy, and gourmet cuts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CATEGORIES.map(category => (
          <div 
            key={category.id}
            onClick={() => setActiveCustomerTab('shop')}
            className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm hover:shadow-soft-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={category.banner} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500 text-white font-extrabold text-xs">
                  {category.itemCount}+ Fresh Items
                </span>
              </div>
            </div>

            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Daily cold-chain restocked</p>
              </div>

              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
