import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, PackagePlus, ShoppingCart, ArrowLeftRight, Boxes, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useInventory } from '../../context/InventoryContext';

export default function FloatingActionButton() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { addToast } = useInventory();

  const actions = [
    {
      label: 'Add Product',
      icon: PackagePlus,
      color: 'bg-accent-primary text-white',
      onClick: () => {
        setOpen(false);
        navigate('/products/add');
      },
    },
    {
      label: 'New Purchase Order',
      icon: ShoppingCart,
      color: 'bg-accent-success text-white',
      onClick: () => {
        setOpen(false);
        navigate('/purchase-orders');
      },
    },
    {
      label: 'Stock Transfer',
      icon: ArrowLeftRight,
      color: 'bg-accent-warning text-white',
      onClick: () => {
        setOpen(false);
        navigate('/transfers');
      },
    },
    {
      label: 'Inventory Audit',
      icon: Boxes,
      color: 'bg-indigo-600 text-white',
      onClick: () => {
        setOpen(false);
        navigate('/inventory');
        addToast('Audit Initiated', 'Navigated to inventory audit controls.', 'info');
      },
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <div className="mb-3 space-y-2.5 flex flex-col items-end">
            {actions.map((act, idx) => {
              const Icon = act.icon;
              return (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: 15, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={act.onClick}
                  className="flex items-center space-x-2.5 px-3.5 py-2 rounded-2xl bg-bg-card border border-border-main shadow-float text-xs font-bold text-txt-heading hover:border-accent-primary/40 glass-panel group transition-all"
                >
                  <span className="group-hover:text-accent-primary transition-colors">{act.label}</span>
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center shadow-sm ${act.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-2xl bg-gradient-to-tr from-accent-primary to-accent-glow text-white flex items-center justify-center shadow-float hover:scale-105 active:scale-95 transition-all duration-300 glow-button ${
          open ? 'rotate-45 bg-accent-danger' : ''
        }`}
        title="Quick Actions FAB"
      >
        <Plus className="w-7 h-7" />
      </button>
    </div>
  );
}
