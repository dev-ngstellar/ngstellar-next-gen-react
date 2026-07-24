import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Boxes,
  Package,
  ShoppingCart,
  CheckCircle,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  Warehouse,
  Plus,
  RefreshCw,
  Clock,
  Sparkles,
  Zap,
  ChevronRight,
  Eye,
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { useInventory } from '../context/InventoryContext';
import { useNavigate } from 'react-router-dom';

const salesChartData = [
  { month: 'Jan', sales: 42000, purchases: 28000 },
  { month: 'Feb', sales: 58000, purchases: 34000 },
  { month: 'Mar', sales: 65000, purchases: 41000 },
  { month: 'Apr', sales: 78000, purchases: 45000 },
  { month: 'May', sales: 92000, purchases: 52000 },
  { month: 'Jun', sales: 110000, purchases: 61000 },
  { month: 'Jul', sales: 134500, purchases: 72000 },
];

const categoryDistribution = [
  { name: 'Hardware', value: 42, color: '#6366f1' },
  { name: 'Peripherals', value: 28, color: '#10b981' },
  { name: 'Monitors', value: 18, color: '#06b6d4' },
  { name: 'Storage', value: 12, color: '#f59e0b' },
];

export default function Dashboard() {
  const {
    products,
    purchaseOrders,
    salesOrders,
    warehouses,
    stockMovements,
    setSelectedProductDetail,
    addToast,
  } = useInventory();

  const navigate = useNavigate();

  const totalInventoryVal = products.reduce((acc, p) => acc + p.quantity * p.purchasePrice, 0);
  const totalStockQty = products.reduce((acc, p) => acc + p.quantity, 0);
  const lowStockItems = products.filter((p) => p.status === 'Low Stock' || p.status === 'Out of Stock');
  const pendingOrdersCount = salesOrders.filter((s) => s.status === 'Pending' || s.status === 'Confirmed').length;

  return (
    <div className="space-y-6 pb-12">
      {/* Hero Welcome Banner */}
      <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-r from-accent-primary/20 via-accent-glow/10 to-transparent border border-accent-primary/20 shadow-float glass-panel overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold bg-accent-primary text-white rounded-full uppercase tracking-wider">
                Live Overview
              </span>
              <span className="text-xs text-txt-muted flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Updated Real-Time</span>
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-txt-heading">
              Enterprise Logistics Dashboard
            </h1>
            <p className="text-xs md:text-sm text-txt-muted max-w-xl">
              Track multi-warehouse inventory value, automated stock movements, purchase order pipelines, and sales metrics seamlessly.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={() => navigate('/products/add')}
              className="px-4 py-2.5 rounded-xl bg-accent-primary text-white text-xs font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-2 glow-button"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Product</span>
            </button>
            <button
              onClick={() => addToast('Sync Complete', 'Inventory database synced with remote hubs.', 'success')}
              className="p-2.5 rounded-xl bg-bg-card border border-border-main text-txt-heading hover:bg-bg-hover transition-colors"
              title="Sync Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Animated Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Today's Revenue",
            value: '$134,500.00',
            change: '+18.4%',
            isPositive: true,
            icon: DollarSign,
            color: 'text-accent-primary bg-accent-primary/10',
            subtitle: 'vs. $113,600 yesterday',
          },
          {
            title: 'Total Stock Valuation',
            value: `$${totalInventoryVal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
            change: '+8.2%',
            isPositive: true,
            icon: Boxes,
            color: 'text-accent-success bg-accent-success/10',
            subtitle: `${totalStockQty.toLocaleString()} units on hand`,
          },
          {
            title: 'Low Stock Alerts',
            value: lowStockItems.length.toString(),
            change: lowStockItems.length > 0 ? 'Requires Action' : 'All Goods OK',
            isPositive: lowStockItems.length === 0,
            icon: AlertTriangle,
            color: 'text-accent-danger bg-accent-danger/10',
            subtitle: `${lowStockItems.filter(p => p.status === 'Out of Stock').length} items out of stock`,
          },
          {
            title: 'Pending Sales Orders',
            value: pendingOrdersCount.toString(),
            change: '+4 Today',
            isPositive: true,
            icon: ShoppingCart,
            color: 'text-accent-warning bg-accent-warning/10',
            subtitle: '$44,697 ready to pack',
          },
        ].map((card, idx) => {
          const CardIcon = card.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-txt-muted uppercase tracking-wider">{card.title}</span>
                <div className={`p-2 rounded-xl ${card.color}`}>
                  <CardIcon className="w-5 h-5" />
                </div>
              </div>

              <div>
                <div className="text-2xl font-extrabold text-txt-heading tracking-tight">{card.value}</div>
                <div className="flex items-center justify-between mt-1 text-xs">
                  <span className="text-txt-muted text-[11px]">{card.subtitle}</span>
                  <span
                    className={`flex items-center font-bold text-[11px] ${
                      card.isPositive ? 'text-accent-success' : 'text-accent-danger'
                    }`}
                  >
                    {card.isPositive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                    {card.change}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Charts & Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales & Purchase Trends Chart */}
        <div className="lg:col-span-2 p-5 md:p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-txt-heading">Sales & Purchase Financials</h3>
              <p className="text-xs text-txt-muted">Monthly comparison of revenue vs procurement cost</p>
            </div>
            <div className="flex items-center space-x-4 text-xs font-bold">
              <span className="flex items-center space-x-1.5 text-accent-primary">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-primary" />
                <span>Sales Revenue</span>
              </span>
              <span className="flex items-center space-x-1.5 text-accent-warning">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-warning" />
                <span>Procurement</span>
              </span>
            </div>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="purchGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-warning)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-warning)" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="var(--color-muted)" fontSize={11} tickLine={false} />
                <YAxis stroke="var(--color-muted)" fontSize={11} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    borderColor: 'var(--color-border)',
                    borderRadius: '12px',
                    color: 'var(--color-text)',
                    fontSize: '12px',
                  }}
                  formatter={(val) => [`$${val.toLocaleString()}`, '']}
                />
                <Area type="monotone" dataKey="sales" stroke="var(--color-primary)" strokeWidth={3} fillOpacity={1} fill="url(#salesGrad)" />
                <Area type="monotone" dataKey="purchases" stroke="var(--color-warning)" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#purchGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Stock Distribution (Donut Chart) */}
        <div className="p-5 md:p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-base font-extrabold text-txt-heading">Inventory Distribution</h3>
            <p className="text-xs text-txt-muted">Stock valuation share by category</p>
          </div>

          <div className="h-56 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    borderColor: 'var(--color-border)',
                    borderRadius: '12px',
                    fontSize: '12px',
                  }}
                  formatter={(v) => [`${v}%`, 'Share']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-extrabold text-txt-heading">100%</span>
              <span className="text-[10px] text-txt-muted uppercase font-bold">Categorized</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border-subtle text-xs">
            {categoryDistribution.map((cat, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                <span className="text-txt-muted truncate">{cat.name} ({cat.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tables Row: Low Stock Alerts & Top Selling Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Low Stock Urgent Alerts Table */}
        <div className="p-5 md:p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-accent-danger animate-ping" />
              <h3 className="text-base font-extrabold text-txt-heading">Urgent Low Stock Items</h3>
            </div>
            <button
              onClick={() => navigate('/inventory')}
              className="text-xs font-bold text-accent-primary hover:underline flex items-center space-x-1"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-border-subtle text-txt-muted font-bold uppercase text-[10px]">
                  <th className="py-2.5 px-3">Product</th>
                  <th className="py-2.5 px-3">SKU</th>
                  <th className="py-2.5 px-3">Stock</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {lowStockItems.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-6 text-center text-txt-muted">
                      All inventory stock levels are healthy!
                    </td>
                  </tr>
                ) : (
                  lowStockItems.map((p) => (
                    <tr key={p.id} className="hover:bg-bg-hover/50 transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center space-x-2.5">
                          <img src={p.image} alt="" className="w-8 h-8 rounded-lg object-cover" />
                          <span className="font-bold text-txt-heading truncate max-w-[160px]">{p.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px] text-txt-muted">{p.sku}</td>
                      <td className="py-3 px-3 font-bold text-accent-danger">{p.quantity}</td>
                      <td className="py-3 px-3">
                        <span
                          className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                            p.status === 'Out of Stock'
                              ? 'bg-accent-danger/20 text-accent-danger'
                              : 'bg-accent-warning/20 text-accent-warning'
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => setSelectedProductDetail(p)}
                          className="px-2.5 py-1 rounded-lg bg-accent-primary/10 text-accent-primary text-[11px] font-bold hover:bg-accent-primary/20 transition-colors"
                        >
                          Reorder
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Warehouse Status & Storage Capacity */}
        <div className="p-5 md:p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-txt-heading">Warehouse Capacity & Hubs</h3>
            <button
              onClick={() => navigate('/warehouse')}
              className="text-xs font-bold text-accent-primary hover:underline flex items-center space-x-1"
            >
              <span>Manage Hubs</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {warehouses.map((wh) => (
              <div key={wh.id} className="p-3 rounded-xl bg-bg-surface border border-border-subtle space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <Warehouse className="w-4 h-4 text-accent-primary" />
                    <span className="font-bold text-txt-heading">{wh.name}</span>
                  </div>
                  <span className="font-mono text-txt-muted text-[11px]">{wh.capacity}% Occupied</span>
                </div>
                <div className="w-full h-2 rounded-full bg-bg-card border border-border-subtle overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      wh.capacity > 85 ? 'bg-accent-danger' : wh.capacity > 70 ? 'bg-accent-warning' : 'bg-accent-success'
                    }`}
                    style={{ width: `${wh.capacity}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-txt-muted">
                  <span>{wh.location}</span>
                  <span>{wh.movementsToday} movements today</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
