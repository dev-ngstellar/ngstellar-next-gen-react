import React from 'react';
import { MOCK_WAREHOUSE_ZONES } from '../../data/mockData';
import { Warehouse, Snowflake, ShieldCheck, Thermometer } from 'lucide-react';

export default function AdminWarehouse() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Fulfillment Hub & Warehouse Visualizer</h1>
        <p className="text-xs text-slate-500">Monitor cold-chain temperatures, shelf capacity, and automated aisle picker routes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_WAREHOUSE_ZONES.map(zone => (
          <div key={zone.id} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">
                  <Warehouse className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{zone.name}</h3>
                  <p className="text-xs text-slate-400">{zone.totalShelves} Rack Aisles Installed</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold text-xs">
                {zone.status}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between text-xs font-bold">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Thermometer className="w-4 h-4 text-blue-500" /> Temp Control: {zone.temperature}
              </span>
              <span className="text-slate-900 dark:text-slate-100">Occupancy: {zone.occupied}</span>
            </div>

            <div className="space-y-1">
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: zone.occupied }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
