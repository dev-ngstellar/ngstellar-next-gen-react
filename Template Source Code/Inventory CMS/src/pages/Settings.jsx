import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Settings as SettingsIcon,
  Building2,
  Users,
  Shield,
  CreditCard,
  Bell,
  Globe,
  Palette,
  Check,
  Save,
  Zap,
} from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

export default function Settings() {
  const { theme, setTheme, accentColor, setAccentColor, addToast } = useInventory();
  const [activeTab, setActiveTab] = useState('company');

  // Form states
  const [companyName, setCompanyName] = useState('Acme Global Logistics');
  const [taxRate, setTaxRate] = useState(8.5);
  const [currency, setCurrency] = useState('USD ($)');

  const handleSave = (e) => {
    e.preventDefault();
    addToast('Settings Saved', 'Global preferences updated successfully.', 'success');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-txt-heading">System & Theme Settings</h1>
        <p className="text-xs text-txt-muted">
          Configure workspace profile, access permissions, taxation rates, and global design accents.
        </p>
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex items-center space-x-2 p-1.5 bg-bg-card border border-border-main rounded-2xl overflow-x-auto glass-card">
        {[
          { id: 'company', label: 'Company Profile', icon: Building2 },
          { id: 'roles', label: 'Users & Permissions', icon: Shield },
          { id: 'taxes', label: 'Taxes & Currency', icon: CreditCard },
          { id: 'integrations', label: 'API Integrations', icon: Zap },
          { id: 'theme', label: 'Appearance & Theme', icon: Palette },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === tab.id
                  ? 'bg-accent-primary text-white shadow-glow-sm'
                  : 'text-txt-muted hover:text-txt-heading hover:bg-bg-hover'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Settings Tab Content */}
      <div className="p-6 rounded-2xl bg-bg-card border border-border-main shadow-card-glow glass-card space-y-6">
        {activeTab === 'company' && (
          <form onSubmit={handleSave} className="space-y-4 text-xs">
            <h2 className="text-base font-extrabold text-txt-heading">Enterprise Profile</h2>

            <div className="space-y-1">
              <label className="font-bold text-txt-heading">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full p-3 rounded-xl bg-bg-surface border border-border-main font-medium focus:outline-none focus:border-accent-primary"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-txt-heading">Support Email</label>
                <input
                  type="email"
                  defaultValue="support@acme-logistics.com"
                  className="w-full p-3 rounded-xl bg-bg-surface border border-border-main font-medium focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="font-bold text-txt-heading">HQ Phone Number</label>
                <input
                  type="text"
                  defaultValue="+1 (800) 555-0199"
                  className="w-full p-3 rounded-xl bg-bg-surface border border-border-main font-medium focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-accent-primary text-white font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-1.5 glow-button"
            >
              <Save className="w-4 h-4" />
              <span>Save Profile Changes</span>
            </button>
          </form>
        )}

        {activeTab === 'roles' && (
          <div className="space-y-4 text-xs">
            <h2 className="text-base font-extrabold text-txt-heading">Role Permissions Matrix</h2>
            <div className="space-y-2">
              {[
                { role: 'Super Admin', users: 3, access: 'Full Root Access & Financial Reports' },
                { role: 'Warehouse Manager', users: 12, access: 'Stock Adjustment & PO Approval' },
                { role: 'Inventory Specialist', users: 24, access: 'Catalog Editing & Transfers' },
                { role: 'ReadOnly Auditor', users: 5, access: 'View Only Reports & Export' },
              ].map((r, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-bg-surface border border-border-subtle flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-txt-heading">{r.role}</h3>
                    <p className="text-[11px] text-txt-muted">{r.access}</p>
                  </div>
                  <span className="font-bold text-accent-primary">{r.users} Users Assigned</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'taxes' && (
          <form onSubmit={handleSave} className="space-y-4 text-xs">
            <h2 className="text-base font-extrabold text-txt-heading">Taxes & Multi-Currency Settings</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-txt-heading">Default Sales Tax Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={taxRate}
                  onChange={(e) => setTaxRate(Number(e.target.value))}
                  className="w-full p-3 rounded-xl bg-bg-surface border border-border-main font-bold focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-txt-heading">Base Operating Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full p-3 rounded-xl bg-bg-surface border border-border-main font-medium focus:outline-none"
                >
                  <option value="USD ($)">USD ($) - US Dollar</option>
                  <option value="EUR (€)">EUR (€) - Euro</option>
                  <option value="GBP (£)">GBP (£) - British Pound</option>
                  <option value="JPY (¥)">JPY (¥) - Japanese Yen</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-accent-primary text-white font-bold shadow-glow-sm hover:bg-accent-primaryHover transition-all flex items-center space-x-1.5 glow-button"
            >
              <Save className="w-4 h-4" />
              <span>Save Financial Preferences</span>
            </button>
          </form>
        )}

        {activeTab === 'integrations' && (
          <div className="space-y-4 text-xs">
            <h2 className="text-base font-extrabold text-txt-heading">Third-Party SaaS Integrations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Shopify Storefront', desc: 'Sync online orders & stock levels automatically.', status: 'Connected' },
                { name: 'QuickBooks Online', desc: 'Auto-export invoices and purchase order ledgers.', status: 'Connected' },
                { name: 'WooCommerce', desc: 'Multi-store e-commerce sync.', status: 'Disconnected' },
                { name: 'Stripe Payments', desc: 'Process customer invoices via card.', status: 'Connected' },
              ].map((integ, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-bg-surface border border-border-subtle space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-txt-heading">{integ.name}</span>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                        integ.status === 'Connected'
                          ? 'bg-accent-success/20 text-accent-success'
                          : 'bg-bg-card text-txt-muted'
                      }`}
                    >
                      {integ.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-txt-muted">{integ.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'theme' && (
          <div className="space-y-6 text-xs">
            <h2 className="text-base font-extrabold text-txt-heading">Design System & Theme Customization</h2>

            {/* Dark / Light Toggle */}
            <div className="p-4 rounded-xl bg-bg-surface border border-border-subtle flex items-center justify-between">
              <div>
                <h3 className="font-bold text-txt-heading">Interface Mode</h3>
                <p className="text-[11px] text-txt-muted">Toggle between dark obsidian mode and light mode.</p>
              </div>
              <div className="flex items-center p-1 bg-bg-card border border-border-main rounded-xl">
                <button
                  onClick={() => setTheme('light')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    theme === 'light' ? 'bg-accent-primary text-white' : 'text-txt-muted'
                  }`}
                >
                  Light Mode
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    theme === 'dark' ? 'bg-accent-primary text-white' : 'text-txt-muted'
                  }`}
                >
                  Dark Mode
                </button>
              </div>
            </div>

            {/* Accent Color Palette Selector */}
            <div className="p-4 rounded-xl bg-bg-surface border border-border-subtle space-y-3">
              <div>
                <h3 className="font-bold text-txt-heading">Global Accent Color</h3>
                <p className="text-[11px] text-txt-muted">Select primary brand color for highlights and glows.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {[
                  { name: 'indigo', label: 'Indigo Core', hex: '#6366f1' },
                  { name: 'emerald', label: 'Emerald Mint', hex: '#10b981' },
                  { name: 'violet', label: 'Cyber Violet', hex: '#8b5cf6' },
                  { name: 'cyan', label: 'Electric Cyan', hex: '#06b6d4' },
                  { name: 'rose', label: 'Rose Pink', hex: '#f43f5e' },
                  { name: 'amber', label: 'Solar Amber', hex: '#f59e0b' },
                ].map((acc) => (
                  <button
                    key={acc.name}
                    onClick={() => {
                      setAccentColor(acc.name);
                      addToast('Accent Updated', `Theme set to ${acc.label}`, 'info');
                    }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                      accentColor === acc.name
                        ? 'border-accent-primary bg-accent-primary/10 text-accent-primary'
                        : 'border-border-main bg-bg-card text-txt-heading hover:border-accent-primary/40'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: acc.hex }} />
                    <span>{acc.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
