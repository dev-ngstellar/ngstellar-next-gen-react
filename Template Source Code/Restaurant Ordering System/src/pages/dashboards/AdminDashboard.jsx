import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { DollarSign, ShoppingBag, Users, Calendar, TrendingUp, AlertTriangle, ArrowUpRight, Plus, Settings, Filter, Download } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FOOD_ITEMS, MOCK_INVENTORY, MOCK_RESERVATIONS } from '../../data/mockData';

export const AdminDashboard = () => {
  const { orders, updateOrderStatus, setCurrentView } = useApp();
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'kanban', 'menu', 'inventory', 'reservations', 'analytics'

  const salesData = [
    { time: '12 PM', revenue: 1420 },
    { time: '2 PM', revenue: 2180 },
    { time: '4 PM', revenue: 1950 },
    { time: '6 PM', revenue: 3840 },
    { time: '8 PM', revenue: 5200 },
    { time: '10 PM', revenue: 4100 },
  ];

  const popularDishesData = [
    { name: 'Truffle Pizza', sales: 142 },
    { name: 'Wagyu Burger', sales: 198 },
    { name: 'Lobster Fettuccine', sales: 95 },
    { name: 'Sea Bass', sales: 84 },
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h1 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">Gourmetium Operations HQ</h1>
          </div>
          <p className="text-xs text-stone-500">Real-time Stripe & Toast POS Inspired Restaurant SaaS Command Center</p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1.5 rounded-2xl border border-stone-200 dark:border-stone-700">
          {[
            { id: 'overview', label: 'Executive Metrics' },
            { id: 'kanban', label: 'Order Kanban' },
            { id: 'menu', label: 'Menu Catalog' },
            { id: 'inventory', label: 'Stock & Waste' },
            { id: 'reservations', label: 'Table Bookings' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-stone-950 shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. EXECUTIVE METRICS TAB */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          
          {/* KPI Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Today's Revenue</span>
                <DollarSign className="w-4 h-4 text-emerald-500" />
              </div>
              <h3 className="font-serif text-3xl font-extrabold text-stone-900 dark:text-stone-100">$18,690.00</h3>
              <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5">
                <ArrowUpRight className="w-3 h-3" /> +14.2% vs yesterday
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Total Orders</span>
                <ShoppingBag className="w-4 h-4 text-amber-500" />
              </div>
              <h3 className="font-serif text-3xl font-extrabold text-stone-900 dark:text-stone-100">184</h3>
              <p className="text-[10px] text-amber-500 font-bold">Avg Order Value: $101.50</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Active Table Bookings</span>
                <Calendar className="w-4 h-4 text-blue-500" />
              </div>
              <h3 className="font-serif text-3xl font-extrabold text-stone-900 dark:text-stone-100">28</h3>
              <p className="text-[10px] text-stone-400 font-medium">12 VIP Guests</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span>Stock Alerts</span>
                <AlertTriangle className="w-4 h-4 text-red-500" />
              </div>
              <h3 className="font-serif text-3xl font-extrabold text-red-500">2 Items</h3>
              <p className="text-[10px] text-red-400 font-bold">Wagyu Beef & Valrhona Chocolate</p>
            </div>
          </div>

          {/* Revenue Chart Section */}
          <div className="p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Hourly Revenue Stream</h3>
                <p className="text-xs text-stone-500">Peak dining hours performance breakdown</p>
              </div>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#78716C" fontSize={11} />
                  <YAxis stroke="#78716C" fontSize={11} />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#F59E0B" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      )}

      {/* 2. KANBAN ORDER MANAGEMENT TAB */}
      {activeTab === 'kanban' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Live Order Workflow (Kanban)</h3>
            <span className="text-xs text-stone-400">Click arrow to move tickets across kitchen pipeline</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Accepted', 'Preparing', 'Ready', 'Delivered'].map((colStatus) => {
              const colOrders = orders.filter(o => o.status === colStatus || (colStatus === 'Preparing' && o.status === 'Cooking'));
              return (
                <div key={colStatus} className="p-4 rounded-3xl bg-stone-100 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-800 space-y-4">
                  <div className="flex items-center justify-between px-2">
                    <h4 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100">{colStatus}</h4>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-white dark:bg-stone-800 text-amber-500">
                      {colOrders.length}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {colOrders.map(ord => (
                      <div key={ord.id} className="p-4 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200/60 dark:border-stone-700 shadow-sm space-y-3">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-mono font-bold text-amber-500">{ord.id}</span>
                          <span className="text-[10px] text-stone-400">{ord.placedAt}</span>
                        </div>
                        <h5 className="font-bold text-xs text-stone-900 dark:text-stone-100">{ord.customerName}</h5>
                        <div className="text-[11px] text-stone-500 space-y-0.5">
                          {ord.items.map((it, i) => (
                            <div key={i}>{it.qty}x {it.name}</div>
                          ))}
                        </div>

                        {/* Status Move Buttons */}
                        <div className="pt-2 border-t border-stone-100 dark:border-stone-700 flex justify-between gap-2">
                          {colStatus === 'Accepted' && (
                            <button
                              onClick={() => updateOrderStatus(ord.id, 'Preparing')}
                              className="w-full py-1.5 text-[10px] font-bold bg-amber-500 text-stone-950 rounded-lg hover:bg-amber-400"
                            >
                              Move to Prep →
                            </button>
                          )}
                          {colStatus === 'Preparing' && (
                            <button
                              onClick={() => updateOrderStatus(ord.id, 'Ready')}
                              className="w-full py-1.5 text-[10px] font-bold bg-emerald-500 text-white rounded-lg hover:bg-emerald-400"
                            >
                              Mark Ready →
                            </button>
                          )}
                          {colStatus === 'Ready' && (
                            <button
                              onClick={() => updateOrderStatus(ord.id, 'Delivered')}
                              className="w-full py-1.5 text-[10px] font-bold bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 rounded-lg"
                            >
                              Complete →
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. MENU MANAGEMENT TAB */}
      {activeTab === 'menu' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Dishes & Pricing Catalog</h3>
            <button className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs flex items-center gap-1.5">
              <Plus className="w-4 h-4" /> Add New Dish
            </button>
          </div>

          <div className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-50 dark:bg-stone-800/50 text-[10px] font-bold uppercase text-stone-400 border-b border-stone-200 dark:border-stone-800">
                  <th className="p-4">Dish</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Rating</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/50 dark:divide-stone-800 text-xs">
                {FOOD_ITEMS.map((dish) => (
                  <tr key={dish.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                    <td className="p-4 flex items-center gap-3 font-bold text-stone-900 dark:text-stone-100">
                      <img src={dish.image} alt={dish.name} className="w-10 h-10 rounded-xl object-cover" />
                      {dish.name}
                    </td>
                    <td className="p-4 uppercase text-[10px] font-bold text-amber-500">{dish.category}</td>
                    <td className="p-4 font-mono font-bold">${dish.price.toFixed(2)}</td>
                    <td className="p-4">★ {dish.rating}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold">
                        Available
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. INVENTORY TAB */}
      {activeTab === 'inventory' && (
        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Artisanal Ingredient Stock Tracker</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MOCK_INVENTORY.map((inv) => (
              <div key={inv.id} className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">{inv.name}</h4>
                  <p className="text-xs text-stone-400">Supplier: {inv.supplier}</p>
                </div>
                <div className="text-right">
                  <span className="font-serif text-xl font-bold text-amber-500">{inv.stock}</span>
                  <span className={`block text-[10px] font-bold ${inv.status === 'Critical' ? 'text-red-500' : 'text-emerald-500'}`}>{inv.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. RESERVATIONS TAB */}
      {activeTab === 'reservations' && (
        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Table Bookings & Floor Plan</h3>
          <div className="space-y-3">
            {MOCK_RESERVATIONS.map((res) => (
              <div key={res.id} className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">{res.name} ({res.partySize} Guests)</h4>
                  <p className="text-stone-400">{res.table} • {res.time}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">{res.status}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
