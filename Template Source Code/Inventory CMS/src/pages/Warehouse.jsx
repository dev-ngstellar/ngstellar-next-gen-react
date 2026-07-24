import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Warehouse as WarehouseIcon,
  Users,
  MapPin,
  Boxes,
  ArrowLeftRight,
  CheckCircle,
  AlertCircle,
  Layers,
  Plus,
  X,
  Building2,
  HardDrive,
} from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function Warehouse() {
  const { warehouses, products, addToast } = useInventory();
  const [selectedWarehouse, setSelectedWarehouse] = useState(warehouses[0]);
  const [transferModalOpen, setTransferModalOpen] = useState(false);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-txt-heading">Warehouses & Storage Facilities</h1>
          <p className="text-xs text-txt-muted">
            Manage multi-location distribution hubs, storage utilization, floor zones, and inter-hub transfers.
          </p>
        </div>

        <button
          onClick={() => setTransferModalOpen(true)}
          className="px-4 py-2 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-1.5 glow-button"
        >
          <ArrowLeftRight className="w-4 h-4" />
          <span>New Stock Transfer</span>
        </button>
      </div>

      {/* Warehouse Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {warehouses.map((wh) => {
          const isSelected = selectedWarehouse.id === wh.id;
          return (
            <motion.div
              key={wh.id}
              onClick={() => setSelectedWarehouse(wh)}
              whileHover={{ y: -4 }}
              className={`p-5 rounded-2xl border shadow-card-glow cursor-pointer transition-all ${
                isSelected
                  ? 'bg-accent-primary/10 border-accent-primary shadow-glow-sm'
                  : 'bg-bg-card border-border-main hover:border-accent-primary/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-accent-primary/15 text-accent-primary">
                  <WarehouseIcon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-bg-surface text-txt-muted">
                  {wh.code}
                </span>
              </div>

              <div className="mt-3">
                <h3 className="text-sm font-extrabold text-txt-heading truncate">{wh.name}</h3>
                <p className="text-[11px] text-txt-muted flex items-center mt-0.5">
                  <MapPin className="w-3 h-3 mr-1 text-accent-primary" /> {wh.location}
                </p>
              </div>

              {/* Storage Capacity Bar */}
              <div className="space-y-1.5 mt-4 pt-3 border-t border-border-subtle text-xs">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-txt-muted">Capacity Occupied</span>
                  <span className="font-bold text-txt-heading">{wh.capacity}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-bg-surface overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      wh.capacity > 85 ? 'bg-accent-danger' : wh.capacity > 70 ? 'bg-accent-warning' : 'bg-accent-success'
                    }`}
                    style={{ width: `${wh.capacity}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 text-[10px] text-txt-muted">
                <span>{wh.currentItems.toLocaleString()} items</span>
                <span>{wh.employees} staff</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Warehouse Details & Interactive Zone Layout */}
      <div className="p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-subtle pb-4 gap-2">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-accent-primary">
              Facility Floor Plan & Zones
            </span>
            <h2 className="text-xl font-extrabold text-txt-heading">{selectedWarehouse.name}</h2>
            <p className="text-xs text-txt-muted">Manager: {selectedWarehouse.manager} • Code: {selectedWarehouse.code}</p>
          </div>
          <span className="px-3 py-1 text-xs font-bold bg-accent-success/20 text-accent-success rounded-full self-start">
            Status: {selectedWarehouse.status}
          </span>
        </div>

        {/* Zones Grid Layout Visualizer */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-txt-heading uppercase tracking-wider">
            Interactive Zone Allocations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedWarehouse.zones.map((zone, idx) => {
              const utilPercent = Math.round((zone.items / zone.capacity) * 100);
              return (
                <div key={idx} className="p-4 rounded-xl bg-bg-surface border border-border-subtle space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-txt-heading">{zone.name}</span>
                    <HardDrive className="w-4 h-4 text-accent-primary" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between text-[11px] text-txt-muted">
                      <span>Occupancy</span>
                      <span className="font-bold text-txt-heading">{utilPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-bg-card overflow-hidden">
                      <div className="h-full bg-accent-primary rounded-full" style={{ width: `${utilPercent}%` }} />
                    </div>
                  </div>
                  <div className="text-[10px] text-txt-muted flex justify-between">
                    <span>{zone.items} stored</span>
                    <span>Max {zone.capacity}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Shelf & Bin Management Table */}
        <div className="space-y-3 pt-4 border-t border-border-subtle">
          <h3 className="text-xs font-bold text-txt-heading uppercase tracking-wider">
            Bin Shelf Locations in {selectedWarehouse.name}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-border-main text-txt-muted font-bold uppercase text-[10px]">
                  <th className="py-2.5 px-3">Bin Code</th>
                  <th className="py-2.5 px-3">Product Stored</th>
                  <th className="py-2.5 px-3">SKU</th>
                  <th className="py-2.5 px-3">Quantity</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-bg-hover/50">
                    <td className="py-2.5 px-3 font-mono font-bold text-accent-primary">{p.binLocation || 'A-01-01'}</td>
                    <td className="py-2.5 px-3 font-bold text-txt-heading">{p.name}</td>
                    <td className="py-2.5 px-3 font-mono text-txt-muted">{p.sku}</td>
                    <td className="py-2.5 px-3 font-bold">{p.quantity}</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-accent-success/20 text-accent-success rounded-full">
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Stock Transfer Modal */}
      <AnimatePresence>
        {transferModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-bg-card border border-border-main rounded-2xl p-6 shadow-float glass-panel space-y-4"
            >
              <div className="flex items-center justify-between border-b border-border-main pb-3">
                <h3 className="text-base font-extrabold text-txt-heading">Inter-Warehouse Stock Transfer</h3>
                <button onClick={() => setTransferModalOpen(false)} className="p-1 text-txt-muted hover:text-txt-heading">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addToast('Transfer Order Created', 'Stock transfer initiated between hubs.', 'success');
                  setTransferModalOpen(false);
                }}
                className="space-y-4 text-xs"
              >
                <div className="space-y-1">
                  <label className="font-bold text-txt-heading">Select Item</label>
                  <select className="w-full p-3 rounded-xl bg-bg-surface border border-border-main font-medium focus:outline-none">
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.quantity} available)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-txt-heading">Origin Hub</label>
                    <select className="w-full p-2.5 rounded-xl bg-bg-surface border border-border-main font-medium">
                      {warehouses.map((w) => (
                        <option key={w.id} value={w.id}>
                          {w.code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-txt-heading">Destination Hub</label>
                    <select className="w-full p-2.5 rounded-xl bg-bg-surface border border-border-main font-medium">
                      {warehouses.map((w) => (
                        <option key={w.id} value={w.id}>
                          {w.code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-txt-heading">Transfer Units</label>
                  <input
                    type="number"
                    defaultValue={25}
                    className="w-full p-3 rounded-xl bg-bg-surface border border-border-main font-bold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-accent-primary text-white font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all glow-button"
                >
                  Initiate Transfer Order
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
