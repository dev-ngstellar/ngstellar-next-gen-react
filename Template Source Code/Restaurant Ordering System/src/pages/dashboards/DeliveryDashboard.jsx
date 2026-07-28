import React from 'react';
import { Truck, MapPin, Phone, CheckCircle2, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DeliveryDashboard = () => {
  const { orders, updateOrderStatus } = useApp();

  const deliveryOrders = orders.filter(o => o.type === 'Delivery' && o.status !== 'Delivered');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800">
        <div>
          <div className="flex items-center gap-2">
            <Truck className="w-6 h-6 text-amber-500" />
            <h1 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">Gourmetium Courier App</h1>
          </div>
          <p className="text-xs text-stone-500">Live Driver Route & Order Dispatch Portal</p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-500/20">
          Driver Status: Online & Accepting Deliveries
        </div>
      </div>

      {/* Active Orders List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {deliveryOrders.map((ord) => (
          <div key={ord.id} className="p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-xl space-y-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-lg font-bold text-amber-500">{ord.id}</span>
                  <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">{ord.customerName}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
                  {ord.status}
                </span>
              </div>

              {/* Delivery Address Box */}
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/50 dark:border-stone-800 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-stone-900 dark:text-stone-100">Destination Address</span>
                  <p className="text-stone-500 mt-0.5">{ord.address}</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-1 text-xs">
                {ord.items.map((it, idx) => (
                  <div key={idx} className="flex justify-between text-stone-600 dark:text-stone-400">
                    <span>{it.qty}x {it.name}</span>
                    <span className="font-mono font-bold text-stone-900 dark:text-stone-100">${(it.price * it.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-stone-200 dark:border-stone-800">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${ord.customerPhone}`}
                  className="py-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call Customer
                </a>

                <button
                  onClick={() => alert(`Navigating to ${ord.address}...`)}
                  className="py-3 rounded-xl bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Navigation className="w-4 h-4 text-amber-400 dark:text-amber-600" /> Start GPS Route
                </button>
              </div>

              <button
                onClick={() => updateOrderStatus(ord.id, 'Delivered')}
                className="w-full py-3.5 rounded-2xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> Complete & Mark Delivered
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
