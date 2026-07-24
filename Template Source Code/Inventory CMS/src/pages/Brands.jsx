import React from 'react';
import { Award, Plus } from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function Brands() {
  const { brands, addToast } = useInventory();

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-txt-heading">Brands & Manufacturers</h1>
          <p className="text-xs text-txt-muted">Manage global vendor brands and manufacturer relationships.</p>
        </div>
        <button
          onClick={() => addToast('Add Brand', 'Opened brand creator.', 'info')}
          className="px-4 py-2 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-1.5 glow-button"
        >
          <Plus className="w-4 h-4" />
          <span>New Brand</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {brands.map((b) => (
          <div key={b.id} className="p-5 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card flex items-center justify-between">
            <div>
              <h3 className="text-sm font-extrabold text-txt-heading">{b.name}</h3>
              <p className="text-xs text-txt-muted mt-0.5">{b.count} catalog items</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-accent-warning/10 text-accent-warning flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
