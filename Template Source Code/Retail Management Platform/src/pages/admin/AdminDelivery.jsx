import React from 'react';
import { MOCK_DRIVERS } from '../../data/mockData';
import { Truck, MapPin, Navigation, CheckCircle2 } from 'lucide-react';

export default function AdminDelivery() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Delivery Drivers & Route Planner</h1>
        <p className="text-xs text-slate-500">Track real-time EV cargo van routes, active order assignments, and courier metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_DRIVERS.map(driver => (
          <div key={driver.id} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 font-bold">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{driver.name}</h3>
                  <p className="text-xs text-slate-400">{driver.vehicle}</p>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold text-[10px]">
                {driver.status}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 grid grid-cols-2 gap-4 text-xs font-bold">
              <div>
                <p className="text-slate-400 uppercase text-[10px]">Active Orders</p>
                <p className="text-sm text-slate-900 dark:text-slate-100">{driver.activeDeliveries} Orders</p>
              </div>
              <div>
                <p className="text-slate-400 uppercase text-[10px]">Completed Today</p>
                <p className="text-sm text-emerald-600">{driver.completedToday} Deliveries</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
