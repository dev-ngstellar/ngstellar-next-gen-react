import React from 'react';
import { useStore } from '../../context/StoreContext';
import { MOCK_ANALYTICS_DATA, MOCK_ORDERS } from '../../data/mockData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, ShoppingBag, Users, Building, TrendingUp, AlertTriangle, ArrowUpRight } from 'lucide-react';

export default function AdminDashboard() {
  const { selectedBranch, products, setActiveAdminTab, addToast } = useStore();

  const lowStockCount = products.filter(p => p.stock <= p.lowStockThreshold).length;

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-extrabold text-xs">
            Enterprise Command Center
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
            {selectedBranch.name} Dashboard
          </h1>
          <p className="text-xs text-slate-500">Real-time performance metrics and multi-channel fulfillment stats.</p>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveAdminTab('products')}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-colors"
          >
            + Add New SKU Product
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Gross Revenue</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600"><DollarSign className="w-5 h-5" /></div>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">$312,480.00</h3>
          <p className="text-xs font-bold text-emerald-600 flex items-center gap-1 mt-2">
            <TrendingUp className="w-3.5 h-3.5" /> +14.2% from last month
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Monthly Orders</span>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600"><ShoppingBag className="w-5 h-5" /></div>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">6,940 Orders</h3>
          <p className="text-xs font-bold text-blue-600 flex items-center gap-1 mt-2">
            <ArrowUpRight className="w-3.5 h-3.5" /> 99.4% Fulfillment Rate
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Customers</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600"><Users className="w-5 h-5" /></div>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">18,240</h3>
          <p className="text-xs font-bold text-purple-600 flex items-center gap-1 mt-2">
            +850 new registrations
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Inventory Alerts</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600"><AlertTriangle className="w-5 h-5" /></div>
          </div>
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">{lowStockCount} Items Low</h3>
          <button 
            onClick={() => setActiveAdminTab('inventory')}
            className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline mt-2 inline-block"
          >
            Review Stock Heatmap →
          </button>
        </div>
      </div>

      {/* Revenue & Sales Chart */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-md space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Revenue & Profit Growth Trend</h3>
            <p className="text-xs text-slate-400">Monthly aggregate gross sales and net margins</p>
          </div>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_ANALYTICS_DATA.monthlyRevenue}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#16a34a" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }} />
              <Area type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" name="Gross Revenue ($)" />
              <Area type="monotone" dataKey="profit" stroke="#16a34a" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" name="Net Profit ($)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Orders & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Recent Customer Orders</h3>
          <div className="space-y-3">
            {MOCK_ORDERS.map(order => (
              <div key={order.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <p className="font-mono font-bold text-slate-900 dark:text-slate-100">{order.id} • {order.customerName}</p>
                  <p className="text-[10px] text-slate-400">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-slate-900 dark:text-slate-100">${order.totalAmount.toFixed(2)}</p>
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold text-[10px]">{order.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Live Inventory Threshold Alerts</h3>
          <div className="space-y-3">
            {products.filter(p => p.stock <= p.lowStockThreshold).map(p => (
              <div key={p.id} className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">{p.name}</p>
                  <p className="text-[10px] text-slate-500">Batch: {p.batchNumber} • Expiry: {p.expiryDate}</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 rounded-lg bg-amber-500 text-white font-extrabold text-[10px]">
                    {p.stock} Units Left
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
