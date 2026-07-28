import React, { useState } from 'react';
import { Package, Heart, MapPin, CreditCard, Award, Tag, Star, User, Bell, Settings, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FOOD_ITEMS } from '../../data/mockData';

export const CustomerDashboard = () => {
  const { orders, wishlist, setCurrentView, setSelectedDishId } = useApp();
  const [activeTab, setActiveTab] = useState('orders'); // 'orders', 'wishlist', 'loyalty', 'addresses', 'settings'

  const wishlistDishes = FOOD_ITEMS.filter(item => wishlist.includes(item.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Customer Profile Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-stone-800">
        <div className="flex items-center gap-5">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
            alt="Customer Avatar"
            className="w-20 h-20 rounded-2xl object-cover ring-4 ring-amber-500/30"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-2xl font-bold">Eleanor Vance</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 text-[10px] font-extrabold">
                VIP Black Member
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-1">eleanor.vance@example.com • Member since 2024</p>
          </div>
        </div>

        {/* Loyalty Quick Stats */}
        <div className="flex items-center gap-6 bg-stone-800/60 p-4 rounded-2xl border border-stone-700/50">
          <div>
            <span className="text-[10px] text-stone-400 uppercase font-bold">Reward Points</span>
            <h4 className="font-serif text-2xl font-bold text-amber-400">1,450 pts</h4>
          </div>
          <button className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-400 transition-colors">
            Redeem Perks
          </button>
        </div>
      </div>

      {/* Main Tabbed Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2 p-3 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-sm">
          {[
            { id: 'orders', label: 'Order History', icon: Package, count: orders.length },
            { id: 'wishlist', label: 'Saved Favorites', icon: Heart, count: wishlistDishes.length },
            { id: 'loyalty', label: 'Loyalty Rewards', icon: Award, count: '1.4k pts' },
            { id: 'addresses', label: 'Saved Addresses', icon: MapPin, count: 2 },
            { id: 'settings', label: 'Account Settings', icon: Settings }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between p-3 rounded-2xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </div>
                {tab.count !== undefined && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-stone-950 text-amber-400' : 'bg-stone-200 dark:bg-stone-800 text-stone-500'}`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="lg:col-span-9 p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800 shadow-sm">
          
          {/* 1. ORDERS TAB */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Past & Active Orders</h3>
              <div className="space-y-4">
                {orders.map((ord) => (
                  <div key={ord.id} className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/50 dark:border-stone-800 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="font-mono font-bold text-amber-500">{ord.id}</span>
                        <span className="text-stone-400 ml-2">• {ord.placedAt}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold text-[10px]">
                        {ord.status}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs">
                      {ord.items.map((it, idx) => (
                        <div key={idx} className="flex justify-between text-stone-700 dark:text-stone-300">
                          <span>{it.qty}x {it.name}</span>
                          <span className="font-mono">${(it.price * it.qty).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-stone-200 dark:border-stone-700 flex items-center justify-between">
                      <span className="font-serif text-sm font-bold text-stone-900 dark:text-white">Total: ${ord.total.toFixed(2)}</span>
                      <button
                        onClick={() => setCurrentView('order-tracking')}
                        className="text-xs font-bold text-amber-500 hover:underline flex items-center gap-1"
                      >
                        <span>Live Track</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. WISHLIST TAB */}
          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Saved Culinary Dishes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {wishlistDishes.map((dish) => (
                  <div
                    key={dish.id}
                    onClick={() => { setSelectedDishId(dish.id); setCurrentView('food-detail'); }}
                    className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/50 dark:border-stone-800 flex items-center gap-4 cursor-pointer hover:border-amber-500/40 transition-colors"
                  >
                    <img src={dish.image} alt={dish.name} className="w-16 h-16 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100">{dish.name}</h4>
                      <span className="text-xs font-bold text-amber-500">${dish.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. LOYALTY TAB */}
          {activeTab === 'loyalty' && (
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">VIP Rewards Program</h3>
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-2">
                <h4 className="font-bold text-amber-600 dark:text-amber-400 text-sm">Next Tier: Chef’s Circle (2,000 pts)</h4>
                <p className="text-stone-600 dark:text-stone-400">Earn 10 points for every $1 spent. Unlock complimentary champagne & priority table reservations.</p>
              </div>
            </div>
          )}

          {/* 4. ADDRESSES & SETTINGS FALLBACK */}
          {(activeTab === 'addresses' || activeTab === 'settings') && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">Manage {activeTab}</h3>
              <p className="text-xs text-stone-500">Update primary delivery address and security credentials.</p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
