import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCircle, AlertTriangle, Info, Trash2, Check } from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function Notifications() {
  const { notifications, markNotificationRead, clearNotifications, addToast } = useInventory();
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? notifications
    : activeTab === 'Unread'
    ? notifications.filter((n) => !n.read)
    : notifications.filter((n) => n.category === activeTab);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-txt-heading">Notification Center</h1>
          <p className="text-xs text-txt-muted">
            Manage system alerts, stock threshold notifications, and purchase order updates.
          </p>
        </div>

        {notifications.length > 0 && (
          <button
            onClick={clearNotifications}
            className="px-3.5 py-2 rounded-xl bg-bg-card border border-border-main text-accent-danger text-xs font-bold hover:bg-accent-danger/10 transition-colors flex items-center space-x-1.5"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center space-x-2 p-1.5 bg-bg-card border border-border-main rounded-2xl overflow-x-auto glass-card">
        {['All', 'Unread', 'Inventory', 'Purchase', 'Sales'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === tab
                ? 'bg-accent-primary text-white shadow-glow-sm'
                : 'text-txt-muted hover:text-txt-heading hover:bg-bg-hover'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notification List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-xs text-txt-muted bg-bg-card rounded-2xl border border-border-main glass-card">
            No notifications matching current filter.
          </div>
        ) : (
          filtered.map((n) => (
            <motion.div
              key={n.id}
              onClick={() => markNotificationRead(n.id)}
              className={`p-4 rounded-2xl border shadow-card-glow cursor-pointer transition-all flex items-start justify-between gap-4 ${
                n.read
                  ? 'bg-bg-card/50 border-border-subtle opacity-70'
                  : 'bg-bg-card border-border-main hover:border-accent-primary/40 font-medium'
              }`}
            >
              <div className="flex items-start space-x-3.5">
                <div className="mt-1">
                  {n.type === 'danger' && <AlertTriangle className="w-5 h-5 text-accent-danger" />}
                  {n.type === 'warning' && <AlertTriangle className="w-5 h-5 text-accent-warning" />}
                  {n.type === 'success' && <CheckCircle className="w-5 h-5 text-accent-success" />}
                  {n.type === 'info' && <Info className="w-5 h-5 text-accent-primary" />}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xs font-extrabold text-txt-heading">{n.title}</h3>
                    <span className="px-2 py-0.5 text-[9px] font-bold bg-bg-surface text-txt-muted rounded-full">
                      {n.category}
                    </span>
                  </div>
                  <p className="text-xs text-txt-muted mt-1 leading-relaxed">{n.message}</p>
                </div>
              </div>

              <span className="text-[10px] text-txt-muted shrink-0 font-mono">{n.time}</span>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
