import React from 'react';
import { useStore } from '../../context/StoreContext';
import { 
  User, 
  ShoppingBag, 
  Wallet, 
  Award, 
  Calendar, 
  Heart, 
  MapPin, 
  CreditCard, 
  Bell, 
  ArrowRight, 
  RotateCcw,
  Download,
  Plus
} from 'lucide-react';
import { MOCK_ORDERS } from '../../data/mockData';

export default function CustomerDashboard() {
  const {
    activeAccountTab,
    setActiveAccountTab,
    walletBalance,
    rewardPoints,
    wishlist,
    products,
    addToCart,
    setActiveCustomerTab,
    setActiveMode,
    addToast
  } = useStore();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'orders', label: 'Orders History', icon: ShoppingBag },
    { id: 'subscriptions', label: 'Recurring Plans', icon: Calendar },
    { id: 'wallet', label: 'Wallet & Rewards', icon: Wallet },
    { id: 'wishlist', label: 'Saved Wishlist', icon: Heart },
    { id: 'addresses', label: 'Saved Addresses', icon: MapPin }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Account Profile Header */}
      <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white text-2xl font-extrabold shadow-lg">
            EV
          </div>
          <div>
            <span className="px-3 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-extrabold text-xs">
              VIP Platinum Member
            </span>
            <h1 className="text-2xl font-extrabold mt-1">Eleanor Vance</h1>
            <p className="text-xs text-slate-400">eleanor@vance-design.com • Member since Jan 2024</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="px-5 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-center">
            <p className="text-[10px] uppercase font-bold text-slate-400">Wallet Balance</p>
            <p className="text-xl font-extrabold text-emerald-400">${walletBalance.toFixed(2)}</p>
          </div>
          <div className="px-5 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-center">
            <p className="text-[10px] uppercase font-bold text-slate-400">Loyalty Points</p>
            <p className="text-xl font-extrabold text-purple-400">{rewardPoints} PTS</p>
          </div>
        </div>
      </div>

      {/* Main Grid Navigation & Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Nav */}
        <div className="lg:col-span-3 space-y-2">
          {tabs.map(t => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActiveAccountTab(t.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                  activeAccountTab === t.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div className="lg:col-span-9 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-md space-y-6">
          {activeAccountTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Account Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 space-y-1">
                  <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">Active Subscriptions</p>
                  <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">1 Plan Active</p>
                  <p className="text-[10px] text-slate-500">Weekly Organic Essentials</p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/40 space-y-1">
                  <p className="text-xs font-bold text-purple-800 dark:text-purple-300">Cashback Earned</p>
                  <p className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">$34.50</p>
                  <p className="text-[10px] text-slate-500">Credited to wallet</p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 space-y-1">
                  <p className="text-xs font-bold text-blue-800 dark:text-blue-300">Total Orders Placed</p>
                  <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">14 Orders</p>
                  <p className="text-[10px] text-slate-500">100% On-time delivery</p>
                </div>
              </div>
            </div>
          )}

          {activeAccountTab === 'orders' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Order History</h2>
              <div className="space-y-3">
                {MOCK_ORDERS.map(order => (
                  <div key={order.id} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-extrabold text-sm text-slate-900 dark:text-slate-100">{order.id}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">
                          {order.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{order.date} • {order.branch}</p>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Total Amount: ${order.totalAmount.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => {
                          addToast('success', '1-Click Reorder', `Items from ${order.id} added to cart.`);
                          setActiveMode('customer');
                          setActiveCustomerTab('cart');
                        }}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5"
                      >
                        <RotateCcw className="w-3.5 h-3.5" /> Reorder 1-Click
                      </button>

                      <button 
                        onClick={() => addToast('info', 'Invoice Downloaded', `PDF invoice for ${order.id} saved.`)}
                        className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeAccountTab === 'subscriptions' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Recurring Grocery Plans</h2>
              <div className="p-5 rounded-2xl border border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20 flex justify-between items-center">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">Active Weekly</span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-1">Weekly Organic Produce Bundle</h3>
                  <p className="text-xs text-slate-500">Delivered every Monday at 8:00 AM • $24.99 / week</p>
                </div>
                <button className="px-4 py-2 rounded-xl border border-red-200 text-red-500 font-bold text-xs">Pause Plan</button>
              </div>
            </div>
          )}

          {activeAccountTab === 'wishlist' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Saved Wishlist Items</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.filter(p => wishlist.includes(p.id)).map(p => (
                  <div key={p.id} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt={p.name} className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">{p.name}</h4>
                        <p className="text-[11px] font-bold text-emerald-600">${p.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => addToCart(p, 1)} 
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                    >
                      + Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeAccountTab === 'wallet' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wallet & Rewards</h2>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold uppercase text-purple-200">Current Balance</p>
                  <p className="text-3xl font-extrabold mt-1">${walletBalance.toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => addToast('success', 'Funds Added', '$50 loaded into your Stellar Wallet.')}
                  className="px-4 py-2 rounded-xl bg-white text-purple-900 font-extrabold text-xs"
                >
                  + Add $50 Funds
                </button>
              </div>
            </div>
          )}

          {activeAccountTab === 'addresses' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Saved Addresses</h2>
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Primary Residence</p>
                  <p className="text-xs text-slate-500">742 Evergreen Terrace, Suite 4B, New York, NY 10001</p>
                </div>
                <span className="text-xs font-bold text-emerald-600">Default</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
