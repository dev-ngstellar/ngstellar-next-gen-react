import React from 'react';
import { Tags, Plus } from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function Categories() {
  const { categories, addToast } = useInventory();

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-txt-heading">Product Categories</h1>
          <p className="text-xs text-txt-muted">Organize items into structured catalog categories.</p>
        </div>
        <button
          onClick={() => addToast('Add Category', 'Opened category creator.', 'info')}
          className="px-4 py-2 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-1.5 glow-button"
        >
          <Plus className="w-4 h-4" />
          <span>New Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((c) => (
          <div key={c.id} className="p-5 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card flex items-center justify-between">
            <div>
              <h3 className="text-sm font-extrabold text-txt-heading">{c.name}</h3>
              <p className="text-xs text-txt-muted mt-0.5">{c.count} items registered</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-accent-primary/10 text-accent-primary flex items-center justify-center">
              <Tags className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
