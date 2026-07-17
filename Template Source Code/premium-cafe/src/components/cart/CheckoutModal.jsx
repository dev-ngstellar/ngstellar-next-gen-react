import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, CheckCircle, Loader2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, clearCart, cartTotal } = useCart();
  const [mobileNumber, setMobileNumber] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length < 10) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      clearCart();
    }, 2000);
  };

  const closeModal = () => {
    setIsCheckoutOpen(false);
    setTimeout(() => {
      setStatus('idle');
      setMobileNumber('');
    }, 300); // Reset after animation
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={status !== 'loading' ? closeModal : undefined}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-card w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-border"
          >
            {/* Close Button */}
            {status !== 'loading' && status !== 'success' && (
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-accent/50 hover:bg-accent rounded-full transition-colors text-text-muted"
              >
                <X size={20} />
              </button>
            )}

            <div className="p-8">
              {status === 'idle' && (
                <>
                  <div className="text-center mb-8">
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Dine-In Order</span>
                    <h3 className="text-3xl font-serif font-bold text-primary mb-2">Checkout</h3>
                    <p className="text-text-muted text-sm">Please enter your mobile number to confirm your order. We'll notify you when it's ready.</p>
                  </div>

                  <form onSubmit={handleOrderSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Mobile Number *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Smartphone size={18} className="text-text-muted" />
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 555-0123-456"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border flex justify-between items-center mb-6">
                       <span className="text-text-muted font-medium">Total Amount</span>
                       <span className="text-2xl font-bold text-primary">${cartTotal.toFixed(2)}</span>
                    </div>

                    <button
                      type="submit"
                      disabled={mobileNumber.length < 10}
                      className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Confirm Order
                    </button>
                  </form>
                </>
              )}

              {status === 'loading' && (
                <div className="py-12 flex flex-col items-center justify-center">
                  <Loader2 size={48} className="text-secondary animate-spin mb-4" />
                  <h3 className="text-xl font-serif font-bold text-primary">Processing Order...</h3>
                  <p className="text-text-muted text-sm mt-2">Please wait while we confirm your items.</p>
                </div>
              )}

              {status === 'success' && (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={40} className="text-green-600" />
                  </motion.div>
                  <h3 className="text-3xl font-serif font-bold text-primary mb-2">Order Confirmed!</h3>
                  <p className="text-text-muted mb-8">
                    We've received your order and sent a confirmation SMS to <span className="font-bold text-primary">{mobileNumber}</span>. Your items will be brought to your table shortly.
                  </p>
                  <button
                    onClick={closeModal}
                    className="bg-secondary text-primary font-bold px-8 py-3 rounded-lg hover:bg-white border border-transparent hover:border-border transition-all"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
