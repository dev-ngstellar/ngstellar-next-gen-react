import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, ChefHat, Flame, Truck, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const OrderTracking = () => {
  const { orders, activeTrackingOrderId, updateOrderStatus } = useApp();

  const activeOrder = orders.find(o => o.id === activeTrackingOrderId) || orders[0];

  const steps = [
    { label: 'Order Confirmed', icon: CheckCircle2, statusName: 'Accepted' },
    { label: 'Kitchen Preparing', icon: Clock, statusName: 'Preparing' },
    { label: 'Chef Cooking', icon: ChefHat, statusName: 'Cooking' },
    { label: 'Quality Checked & Ready', icon: Flame, statusName: 'Ready' },
    { label: 'Out for Delivery', icon: Truck, statusName: 'Out for Delivery' },
    { label: 'Delivered', icon: CheckCircle2, statusName: 'Delivered' }
  ];

  const currentStepIndex = steps.findIndex(s => s.statusName === activeOrder.status);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Real-Time Operations Sync</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100">
          Live Order Tracker
        </h1>
        <p className="text-xs text-stone-500 font-mono">Order Reference #{activeOrder.id}</p>
      </div>

      {/* Progress Card */}
      <div className="p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-xl space-y-8">
        
        {/* Estimated Time Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Estimated Arrival</span>
            <h3 className="font-serif text-3xl font-bold text-amber-500">18-22 Minutes</h3>
            <p className="text-xs text-stone-500">Recipient: {activeOrder.customerName}</p>
          </div>

          {/* Simulation Toggle Buttons for Demo Purpose */}
          <div className="flex flex-wrap gap-1 bg-stone-100 dark:bg-stone-800 p-1.5 rounded-2xl">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => updateOrderStatus(activeOrder.id, s.statusName)}
                className={`px-3 py-1.5 text-[10px] font-bold rounded-xl transition-all ${
                  activeOrder.status === s.statusName
                    ? 'bg-amber-500 text-stone-950 shadow'
                    : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
                }`}
              >
                {s.statusName}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Progress Timeline Bar */}
        <div className="relative py-4">
          <div className="hidden md:flex justify-between items-center relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isCompleted = idx <= currentStepIndex;
              const isCurrent = idx === currentStepIndex;

              return (
                <div key={idx} className="flex flex-col items-center space-y-2 text-center w-24">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isCurrent
                      ? 'bg-amber-500 text-stone-950 ring-4 ring-amber-500/20 scale-110'
                      : isCompleted
                      ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                      : 'bg-stone-100 text-stone-400 dark:bg-stone-800'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold ${isCompleted ? 'text-stone-900 dark:text-stone-100' : 'text-stone-400'}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Progress Bar Line */}
          <div className="hidden md:block absolute top-[28px] left-12 right-12 h-1 bg-stone-200 dark:bg-stone-800 -z-0 rounded-full">
            <motion.div
              className="h-full bg-amber-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Driver Card & Map Simulation */}
        {activeOrder.driver && (
          <div className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/50 dark:border-stone-800 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold font-serif text-lg">
                MS
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-500 uppercase">Assigned Courier</span>
                <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">{activeOrder.driver.name}</h4>
                <p className="text-xs text-stone-500">{activeOrder.driver.vehicle}</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <a
                href={`tel:${activeOrder.driver.phone}`}
                className="px-4 py-2.5 rounded-xl bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 text-xs font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Phone className="w-3.5 h-3.5" /> Call Courier
              </a>
            </div>
          </div>
        )}

        {/* Itemized Summary */}
        <div className="space-y-3 pt-4 border-t border-stone-200 dark:border-stone-800">
          <h4 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100">Order Contents</h4>
          <div className="space-y-2">
            {activeOrder.items.map((item, idx) => (
              <div key={idx} className="flex justify-between text-xs text-stone-600 dark:text-stone-400">
                <span>{item.qty}x {item.name}</span>
                <span className="font-semibold text-stone-900 dark:text-white">${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex justify-between text-sm font-bold text-stone-900 dark:text-white">
            <span>Total Paid</span>
            <span className="text-amber-500 font-serif">${activeOrder.total.toFixed(2)}</span>
          </div>
        </div>

      </div>

    </div>
  );
};
