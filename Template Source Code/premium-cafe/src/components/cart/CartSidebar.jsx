import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal, setIsCheckoutOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 flex flex-col border-l border-border"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex justify-between items-center bg-card">
              <h2 className="text-2xl font-serif font-bold text-primary flex items-center gap-2">
                <ShoppingBag size={24} /> Your Order
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-accent rounded-full transition-colors text-text-muted hover:text-primary"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-text-muted space-y-4">
                  <ShoppingBag size={64} className="opacity-20" />
                  <p className="text-lg font-serif">Your cart is empty.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center bg-card p-4 rounded-xl border border-border shadow-sm">
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-primary text-sm mb-1">{item.name}</h4>
                      <p className="text-secondary font-bold text-sm mb-3">{item.price}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-background border border-border rounded-full px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="text-text-muted hover:text-primary">
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="text-text-muted hover:text-primary">
                            <Plus size={14} />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:underline">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-card border-t border-border shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium text-text-muted">Total</span>
                  <span className="text-2xl font-serif font-bold text-primary">${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full bg-secondary text-primary font-bold text-lg py-4 rounded-lg hover:bg-primary hover:text-white transition-colors shadow-lg"
                >
                  Proceed to Order
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
