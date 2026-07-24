import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertTriangle, Info, XCircle, X } from 'lucide-react';
import { useInventory } from '../../context/InventoryContext';

export default function ToastContainer() {
  const { toasts, removeToast } = useInventory();

  return (
    <div className="fixed top-20 right-6 z-50 flex flex-col space-y-2.5 max-w-sm pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="pointer-events-auto flex items-start p-3.5 rounded-2xl bg-bg-card border border-border-main shadow-float glass-panel space-x-3 overflow-hidden"
          >
            <div className="shrink-0 mt-0.5">
              {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-accent-success" />}
              {toast.type === 'warning' && <AlertTriangle className="w-5 h-5 text-accent-warning" />}
              {toast.type === 'danger' && <XCircle className="w-5 h-5 text-accent-danger" />}
              {toast.type === 'info' && <Info className="w-5 h-5 text-accent-primary" />}
            </div>

            <div className="flex-1 overflow-hidden text-xs">
              <p className="font-bold text-txt-heading truncate">{toast.title}</p>
              <p className="text-txt-muted mt-0.5 leading-snug">{toast.message}</p>
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-txt-muted hover:text-txt-heading transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
