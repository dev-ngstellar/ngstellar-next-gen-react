import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Package,
  QrCode,
  Barcode,
  Layers,
  TrendingUp,
  History,
  Building2,
  Truck,
  Plus,
  Minus,
  Edit,
  ExternalLink,
  ShieldCheck,
  Tag,
  Boxes,
  Activity,
  CheckCircle,
  Copy,
} from 'lucide-react';
import { useInventory } from '../../context/InventoryContext';

export default function ProductDrawer() {
  const { selectedProductDetail, setSelectedProductDetail, updateProductStock, addToast } = useInventory();
  const [activeTab, setActiveTab] = useState('overview'); // overview, movement, barcode, variants, activity
  const [adjustQty, setAdjustQty] = useState(10);
  const [adjustReason, setAdjustReason] = useState('Restock Shipment');

  if (!selectedProductDetail) return null;

  const product = selectedProductDetail;
  const marginPercent = Math.round(
    ((product.sellingPrice - product.purchasePrice) / product.sellingPrice) * 100
  );

  const handleCopySKU = () => {
    navigator.clipboard.writeText(product.sku);
    addToast('SKU Copied', `Copied ${product.sku} to clipboard.`, 'info');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
        {/* Backdrop click to close */}
        <div
          className="absolute inset-0"
          onClick={() => setSelectedProductDetail(null)}
        />

        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-xl bg-bg-card border-l border-border-main shadow-float h-full flex flex-col z-10 glass-panel overflow-hidden"
        >
          {/* Drawer Header */}
          <div className="p-4 sm:p-6 border-b border-border-main flex items-center justify-between bg-bg-surface/50">
            <div className="flex items-center space-x-3 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-accent-primary/20 shrink-0"
              />
              <div className="flex flex-col truncate">
                <span className="text-xs font-bold text-accent-primary flex items-center space-x-1">
                  <span>{product.category}</span>
                  <span>•</span>
                  <span>{product.brand}</span>
                </span>
                <h2 className="text-base font-extrabold text-txt-heading truncate">{product.name}</h2>
                <div className="flex items-center space-x-2 text-[11px] font-mono text-txt-muted mt-0.5">
                  <span>SKU: {product.sku}</span>
                  <button onClick={handleCopySKU} className="hover:text-accent-primary transition-colors">
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedProductDetail(null)}
              className="p-2 rounded-xl bg-bg-surface hover:bg-bg-hover text-txt-muted hover:text-txt-heading transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Tabs */}
          <div className="flex items-center space-x-1 px-4 sm:px-6 pt-3 border-b border-border-subtle bg-bg-surface/30 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: Package },
              { id: 'movement', label: 'Stock Movement', icon: Activity },
              { id: 'barcode', label: 'Barcode & QR', icon: QrCode },
              { id: 'variants', label: 'Variants', icon: Layers },
              { id: 'activity', label: 'Logs', icon: History },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold border-b-2 transition-all shrink-0 ${
                    activeTab === tab.id
                      ? 'border-accent-primary text-accent-primary'
                      : 'border-transparent text-txt-muted hover:text-txt-heading'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stock Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-bg-surface border border-border-subtle flex flex-col">
                    <span className="text-[11px] text-txt-muted font-medium">On Hand</span>
                    <span className="text-lg font-extrabold text-txt-heading mt-0.5">{product.quantity}</span>
                    <span className="text-[10px] text-txt-muted mt-1">Total physical count</span>
                  </div>
                  <div className="p-3 rounded-xl bg-bg-surface border border-border-subtle flex flex-col">
                    <span className="text-[11px] text-txt-muted font-medium">Available</span>
                    <span className="text-lg font-extrabold text-accent-success mt-0.5">{product.available}</span>
                    <span className="text-[10px] text-txt-muted mt-1">Ready for dispatch</span>
                  </div>
                  <div className="p-3 rounded-xl bg-bg-surface border border-border-subtle flex flex-col">
                    <span className="text-[11px] text-txt-muted font-medium">Reserved</span>
                    <span className="text-lg font-extrabold text-accent-warning mt-0.5">{product.reserved}</span>
                    <span className="text-[10px] text-txt-muted mt-1">Allocated to SO</span>
                  </div>
                </div>

                {/* Quick Stock Adjustment Bar */}
                <div className="p-4 rounded-xl bg-accent-primary/10 border border-accent-primary/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-txt-heading flex items-center space-x-1.5">
                      <Boxes className="w-4 h-4 text-accent-primary" />
                      <span>Quick Stock Adjustment</span>
                    </span>
                    <span className="text-[11px] font-semibold text-accent-primary">Live Update</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      value={adjustQty}
                      onChange={(e) => setAdjustQty(Number(e.target.value))}
                      className="w-24 px-3 py-1.5 rounded-lg bg-bg-card border border-border-main text-xs font-bold text-txt-heading focus:outline-none focus:border-accent-primary"
                    />
                    <select
                      value={adjustReason}
                      onChange={(e) => setAdjustReason(e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-lg bg-bg-card border border-border-main text-xs font-medium text-txt-heading focus:outline-none focus:border-accent-primary"
                    >
                      <option value="Restock Shipment">Restock Shipment</option>
                      <option value="Customer Return">Customer Return</option>
                      <option value="Inventory Audit Correction">Audit Correction</option>
                      <option value="Damaged Stock Removal">Damaged Removal</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2 pt-1">
                    <button
                      onClick={() => updateProductStock(product.id, adjustQty, adjustReason)}
                      className="flex-1 py-1.5 rounded-lg bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center justify-center space-x-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Stock (+{adjustQty})</span>
                    </button>
                    <button
                      onClick={() => updateProductStock(product.id, -adjustQty, adjustReason)}
                      className="flex-1 py-1.5 rounded-lg bg-accent-danger text-white text-xs font-bold hover:bg-accent-danger/90 transition-all flex items-center justify-center space-x-1"
                    >
                      <Minus className="w-3.5 h-3.5" />
                      <span>Deduct Stock (-{adjustQty})</span>
                    </button>
                  </div>
                </div>

                {/* Financial Overview */}
                <div className="p-4 rounded-xl bg-bg-surface border border-border-main space-y-3">
                  <h3 className="text-xs font-bold text-txt-heading uppercase tracking-wider">
                    Financial & Margin Breakdown
                  </h3>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-txt-muted block">Purchase Cost</span>
                      <span className="font-bold text-txt-heading">${product.purchasePrice.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-txt-muted block">Selling Price</span>
                      <span className="font-bold text-accent-primary">${product.sellingPrice.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-txt-muted block">Gross Margin</span>
                      <span className="font-bold text-accent-success">{marginPercent}%</span>
                    </div>
                  </div>
                </div>

                {/* Supplier & Warehouse Details */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-txt-heading uppercase tracking-wider">
                    Location & Sourcing
                  </h3>
                  <div className="p-3 rounded-xl bg-bg-surface border border-border-subtle space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-txt-muted flex items-center space-x-1.5">
                        <Building2 className="w-3.5 h-3.5 text-accent-primary" />
                        <span>Primary Warehouse</span>
                      </span>
                      <span className="font-semibold text-txt-heading">{product.warehouse}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-txt-muted flex items-center space-x-1.5">
                        <Tag className="w-3.5 h-3.5 text-accent-warning" />
                        <span>Storage Bin Location</span>
                      </span>
                      <span className="font-mono font-bold text-accent-warning">{product.binLocation || 'A-01-01'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-txt-muted flex items-center space-x-1.5">
                        <Truck className="w-3.5 h-3.5 text-accent-success" />
                        <span>Vendor / Supplier</span>
                      </span>
                      <span className="font-semibold text-txt-heading">{product.supplier}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-txt-heading uppercase tracking-wider">
                    Description
                  </h3>
                  <p className="text-xs text-txt-muted leading-relaxed p-3 rounded-xl bg-bg-surface border border-border-subtle">
                    {product.description}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'movement' && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-txt-heading uppercase tracking-wider">
                  Recent Movement History
                </h3>
                <div className="space-y-2">
                  {[
                    { type: 'Incoming', qty: '+50', source: 'PO-2026-0941', date: 'Today, 10:30 AM', user: 'Sarah C.' },
                    { type: 'Outgoing', qty: '-12', source: 'SO-88102', date: 'Yesterday, 04:15 PM', user: 'Alex M.' },
                    { type: 'Transfer', qty: '25', source: 'Austin -> Silicon Valley', date: '2 days ago', user: 'David V.' },
                  ].map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-bg-surface border border-border-subtle flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center space-x-2.5">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                            m.type === 'Incoming'
                              ? 'bg-accent-success/20 text-accent-success'
                              : m.type === 'Outgoing'
                              ? 'bg-accent-danger/20 text-accent-danger'
                              : 'bg-accent-primary/20 text-accent-primary'
                          }`}
                        >
                          {m.qty}
                        </div>
                        <div>
                          <p className="font-bold text-txt-heading">{m.type} Movement</p>
                          <p className="text-[10px] text-txt-muted">{m.source}</p>
                        </div>
                      </div>
                      <div className="text-right text-[10px] text-txt-muted">
                        <p>{m.date}</p>
                        <p>By {m.user}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'barcode' && (
              <div className="space-y-6 text-center">
                <div className="p-6 rounded-2xl bg-white border border-slate-300 text-slate-900 shadow-sm space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Product Barcode (UPC-A)
                  </span>

                  {/* Render simulated Barcode SVG */}
                  <div className="flex items-center justify-center space-x-1 py-4">
                    {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2].map((w, i) => (
                      <div
                        key={i}
                        className="bg-slate-950 h-16 rounded-xs"
                        style={{ width: `${w * 3}px` }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-sm font-bold tracking-widest text-slate-800 block">
                    {product.barcode || '097855171832'}
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-300 text-slate-900 shadow-sm space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    QR Code Identifier
                  </span>

                  {/* Render simulated QR Code Grid */}
                  <div className="w-36 h-36 mx-auto bg-slate-900 rounded-xl p-2 grid grid-cols-6 gap-1 shadow-md">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-xs ${
                          i % 2 === 0 || i % 7 === 0 || i < 6 || i % 6 === 0 ? 'bg-white' : 'bg-slate-900'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-slate-600 block truncate">
                    https://stellarcms.io/p/{product.sku}
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'variants' && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-txt-heading uppercase tracking-wider">
                  Product Variants & SKUs
                </h3>
                {product.variants && product.variants.length > 0 ? (
                  product.variants.map((v) => (
                    <div
                      key={v.id}
                      className="p-3 rounded-xl bg-bg-surface border border-border-subtle flex items-center justify-between text-xs"
                    >
                      <div>
                        <p className="font-bold text-txt-heading">{v.name}</p>
                        <p className="text-[10px] font-mono text-txt-muted">SKU: {v.sku}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-accent-primary">${v.price.toFixed(2)}</p>
                        <p className="text-[10px] text-txt-muted">Stock: {v.stock}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-txt-muted py-4 text-center">No variant combinations configured.</p>
                )}
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-txt-heading uppercase tracking-wider">
                  System Audit Logs
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-bg-surface border border-border-subtle">
                    <p className="font-semibold text-txt-heading">Product Details Updated</p>
                    <p className="text-[10px] text-txt-muted">2026-07-20 by Akshaya Dev</p>
                  </div>
                  <div className="p-3 rounded-xl bg-bg-surface border border-border-subtle">
                    <p className="font-semibold text-txt-heading">Initial Stock Catalogued</p>
                    <p className="text-[10px] text-txt-muted">{product.createdDate} by System Import</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-4 border-t border-border-main bg-bg-surface/50 flex items-center justify-between space-x-2">
            <button
              onClick={() => {
                setSelectedProductDetail(null);
                addToast('Product Edited', 'Opened product editor mode.', 'info');
              }}
              className="flex-1 py-2 rounded-xl bg-bg-card border border-border-main text-txt-heading hover:bg-bg-hover text-xs font-bold transition-all flex items-center justify-center space-x-1"
            >
              <Edit className="w-3.5 h-3.5" />
              <span>Edit Details</span>
            </button>
            <button
              onClick={() => setSelectedProductDetail(null)}
              className="py-2 px-4 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
