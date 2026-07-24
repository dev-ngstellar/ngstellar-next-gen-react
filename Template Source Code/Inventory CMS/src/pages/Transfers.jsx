import React from 'react';
import { ArrowLeftRight, CheckCircle, Clock } from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function Transfers() {
  const { stockMovements } = useInventory();
  const transfers = stockMovements.filter((m) => m.type === 'Transfer');

  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-extrabold text-txt-heading">Inter-Warehouse Transfers</h1>
        <p className="text-xs text-txt-muted">Log of all goods moved between distribution centers.</p>
      </div>

      <div className="p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border-main text-txt-muted font-bold uppercase text-[10px]">
                <th className="py-3 px-3">Transfer ID</th>
                <th className="py-3 px-3">Product</th>
                <th className="py-3 px-3">Quantity</th>
                <th className="py-3 px-3">Origin -&gt; Destination</th>
                <th className="py-3 px-3">Timestamp</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {transfers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-txt-muted">
                    No active stock transfers.
                  </td>
                </tr>
              ) : (
                transfers.map((t) => (
                  <tr key={t.id} className="hover:bg-bg-hover/60">
                    <td className="py-3 px-3 font-mono font-bold text-accent-primary">{t.id}</td>
                    <td className="py-3 px-3 font-bold text-txt-heading">{t.productName}</td>
                    <td className="py-3 px-3 font-extrabold text-accent-primary">{t.qty} units</td>
                    <td className="py-3 px-3 text-txt-muted">{t.source} -&gt; {t.destination}</td>
                    <td className="py-3 px-3 font-mono text-[11px] text-txt-muted">{t.timestamp}</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-accent-success/20 text-accent-success rounded-full flex items-center w-fit">
                        <CheckCircle className="w-3 h-3 mr-1" /> Completed
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
