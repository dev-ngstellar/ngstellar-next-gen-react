import React, { useState, useEffect } from 'react';
import { ChefHat, Clock, Flame, CheckCircle2, AlertCircle, Maximize, Minimize } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const KitchenDashboard = () => {
  const { orders, updateOrderStatus } = useApp();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [timers, setTimers] = useState({ 'ORD-8821': 14, 'ORD-8822': 8, 'ORD-8823': 22 });

  // Simulate kitchen tick timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prev => {
        const next = { ...prev };
        Object.keys(next).forEach(k => { next[k] += 1; });
        return next;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const kitchenOrders = orders.filter(o => o.status !== 'Delivered');

  return (
    <div className={`min-h-screen bg-stone-950 text-white p-6 space-y-6 ${isFullscreen ? 'fixed inset-0 z-50 overflow-y-auto' : ''}`}>
      
      {/* Fullscreen Header */}
      <div className="flex items-center justify-between pb-6 border-b border-stone-800">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500 text-stone-950 font-bold">
            <ChefHat className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-extrabold tracking-tight">Gourmetium KDS — Kitchen Display System</h1>
            <p className="text-xs text-stone-400 font-mono">Live High-Contrast Chef Screen • {kitchenOrders.length} Active Tickets</p>
          </div>
        </div>

        <button
          onClick={() => setIsFullscreen(prev => !prev)}
          className="p-3 rounded-xl bg-stone-900 border border-stone-800 hover:bg-stone-800 text-amber-400 font-bold text-xs flex items-center gap-2"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen KDS Mode'}</span>
        </button>
      </div>

      {/* Large High-Contrast Kitchen Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kitchenOrders.map((ord) => {
          const minutesElapsed = timers[ord.id] || 10;
          const isUrgent = minutesElapsed > 15;

          return (
            <div
              key={ord.id}
              className={`p-6 rounded-3xl bg-stone-900 border-2 transition-all flex flex-col justify-between space-y-6 ${
                isUrgent ? 'border-red-500/80 shadow-2xl shadow-red-500/20' : 'border-stone-800'
              }`}
            >
              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                  <div>
                    <span className="font-mono text-xl font-extrabold text-amber-400">{ord.id}</span>
                    <span className="block text-xs text-stone-400 font-bold mt-0.5">{ord.type} {ord.tableNo ? `• ${ord.tableNo}` : ''}</span>
                  </div>

                  <div className={`px-3 py-1.5 rounded-xl text-xs font-mono font-extrabold flex items-center gap-1.5 ${
                    isUrgent ? 'bg-red-500 text-white animate-pulse' : 'bg-stone-800 text-amber-400'
                  }`}>
                    <Clock className="w-4 h-4" />
                    <span>{minutesElapsed}m</span>
                  </div>
                </div>

                {/* Items List */}
                <div className="py-4 space-y-3">
                  {ord.items.map((item, idx) => (
                    <div key={idx} className="flex items-start justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 font-mono font-bold text-xs flex items-center justify-center">
                          {item.qty}
                        </span>
                        <span className="font-bold text-stone-100">{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-stone-800">
                {ord.status !== 'Ready' ? (
                  <button
                    onClick={() => updateOrderStatus(ord.id, 'Ready')}
                    className="w-full py-3.5 rounded-2xl bg-amber-500 text-stone-950 font-extrabold text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                  >
                    Mark Ticket Ready ✓
                  </button>
                ) : (
                  <button
                    onClick={() => updateOrderStatus(ord.id, 'Delivered')}
                    className="w-full py-3.5 rounded-2xl bg-emerald-600 text-white font-extrabold text-sm hover:bg-emerald-500 transition-colors"
                  >
                    Ticket Completed & Dispatched ✓
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
