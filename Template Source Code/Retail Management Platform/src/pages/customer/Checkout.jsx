import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { CheckCircle2, ShieldCheck, CreditCard, Wallet, Truck, ArrowRight } from 'lucide-react';

export default function Checkout() {
  const { cartTotal, cart, deliverySlot, setActiveCustomerTab, addToast, walletBalance } = useStore();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('wallet'); // 'wallet' | 'card' | 'cod'

  const handleCompleteOrder = () => {
    addToast('success', 'Order Confirmed!', 'Order #ORD-9824 successfully placed.');
    setActiveCustomerTab('tracking');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Stepper Header */}
      <div className="flex items-center justify-between border-b pb-6">
        {['1. Delivery Address', '2. Fulfillment Slot', '3. Payment & Confirm'].map((label, idx) => (
          <div key={idx} className={`flex items-center gap-2 text-xs font-bold ${step === idx + 1 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${step === idx + 1 ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}>
              {idx + 1}
            </span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-md space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Select Delivery Address</h2>
            <div className="p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 flex items-start justify-between">
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Primary Residence (Saved)</p>
                <p className="text-xs text-slate-500 mt-1">742 Evergreen Terrace, Suite 4B, New York, NY 10001</p>
                <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-2">Delivery Zone A (Fulfillment Hub NYC-01)</p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <button onClick={() => setStep(2)} className="w-full py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-xs">
              Continue to Delivery Slot →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Fulfillment Slot Confirmation</h2>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Selected Slot: {deliverySlot}</p>
              <p className="text-xs text-slate-500 mt-1">Cold-chain temperature monitored transit.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setStep(1)} className="py-3.5 px-6 rounded-xl border font-bold text-xs">Back</button>
              <button onClick={() => setStep(3)} className="flex-1 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-xs">
                Continue to Payment →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Payment & Order Authorization</h2>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => setPaymentMethod('wallet')}
                className={`p-4 rounded-2xl border text-left transition-all ${paymentMethod === 'wallet' ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 font-bold' : 'border-slate-200 dark:border-slate-800'}`}
              >
                <Wallet className="w-5 h-5 text-emerald-600 mb-2" />
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Stellar Wallet</p>
                <p className="text-[10px] text-slate-400">Balance: ${walletBalance.toFixed(2)}</p>
              </button>

              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-2xl border text-left transition-all ${paymentMethod === 'card' ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 font-bold' : 'border-slate-200 dark:border-slate-800'}`}
              >
                <CreditCard className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Credit / Debit Card</p>
                <p className="text-[10px] text-slate-400">Visa / Mastercard</p>
              </button>

              <button
                onClick={() => setPaymentMethod('cod')}
                className={`p-4 rounded-2xl border text-left transition-all ${paymentMethod === 'cod' ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 font-bold' : 'border-slate-200 dark:border-slate-800'}`}
              >
                <Truck className="w-5 h-5 text-amber-600 mb-2" />
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Pay on Delivery</p>
                <p className="text-[10px] text-slate-400">Cash / UPI</p>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 flex justify-between items-center text-sm font-bold">
              <span>Total Payable</span>
              <span className="text-2xl text-emerald-600">${cartTotal.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCompleteOrder}
              className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-xl flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" /> Authorize & Place Order (${cartTotal.toFixed(2)})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
