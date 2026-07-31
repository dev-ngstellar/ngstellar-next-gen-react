import React from 'react';
import { useStore } from '../../context/StoreContext';
import { MOCK_RECIPES } from '../../data/mockData';
import { ChefHat, ShoppingBag, Clock, Flame, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Recipes() {
  const { addAllRecipeIngredientsToCart } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-extrabold text-xs">
          Interactive Meal Kit Hub
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
          Chef-Curated Recipes & 1-Click Ingredients
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Select recipes created by executive retail chefs and order exact pre-portioned ingredients straight to your kitchen.
        </p>
      </div>

      <div className="space-y-12">
        {MOCK_RECIPES.map((recipe) => (
          <div 
            key={recipe.id}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-lg">
              <img src={recipe.image} alt={recipe.title} className="w-full h-72 object-cover" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-xs text-white text-xs font-bold">
                Created by {recipe.author}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <div className="flex items-center gap-4 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {recipe.time}</span>
                  <span className="flex items-center gap-1"><Flame className="w-4 h-4" /> {recipe.calories}</span>
                  <span>Difficulty: {recipe.difficulty}</span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">{recipe.title}</h2>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{recipe.description}</p>
              </div>

              {/* Recipe Steps */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Preparation Steps</h4>
                <div className="space-y-1.5">
                  {recipe.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-center text-[10px] shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => addAllRecipeIngredientsToCart(recipe)}
                className="py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/20 flex items-center gap-2 transition-all"
              >
                <ShoppingBag className="w-4 h-4" /> Add All Recipe Ingredients To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
