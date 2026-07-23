import React, { useState } from 'react';
import { Settings, Palette, Shield, Bell, Check, Save, Lock } from 'lucide-react';
import { useTheme, COLOR_PRESETS } from '../../context/ThemeContext';
import { SOCIETY_INFO } from '../../data/mockData';

export const SettingsModule = () => {
  const { activePreset, selectColorPreset, isDark, toggleTheme, customPrimary, setCustomColor } = useTheme();
  const [saved, setSaved] = useState(false);

  const permissionsMatrix = [
    { module: 'Apartment Management', superAdmin: true, manager: true, resident: false, security: false },
    { module: 'Resident KYC Directory', superAdmin: true, manager: true, resident: false, security: false },
    { module: 'Visitor Gate Approvals', superAdmin: true, manager: true, resident: true, security: true },
    { module: 'Maintenance Billing', superAdmin: true, manager: true, resident: true, security: false },
    { module: 'Complaints Portal', superAdmin: true, manager: true, resident: true, security: false },
    { module: 'Amenity Booking', superAdmin: true, manager: true, resident: true, security: false },
    { module: 'Gate Guard Console', superAdmin: true, manager: true, resident: false, security: true },
    { module: 'System Settings & Roles', superAdmin: true, manager: false, resident: false, security: false },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Society Platform Settings & Permissions</h1>
        <p className="text-xs text-slate-500">Configure society branding, global theme variables, notification gateways, and RBAC matrix.</p>
      </div>

      {/* Branding & Society Info */}
      <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Settings className="w-4 h-4 theme-accent-text" />
          Society Identity & Branding
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">Society Name</label>
            <input defaultValue={SOCIETY_INFO.name} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 font-bold" />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">Concierge Email</label>
            <input defaultValue={SOCIETY_INFO.email} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900" />
          </div>
        </div>
      </div>

      {/* Global Theme & Color Customizer */}
      <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Palette className="w-4 h-4 theme-accent-text" />
          Live Theme System & CSS Variables Engine
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {COLOR_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => selectColorPreset(preset.id)}
              className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-2 transition ${
                activePreset === preset.id ? 'border-teal-500 bg-teal-500/10 font-bold' : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="w-6 h-6 rounded-full" style={{ backgroundColor: preset.primary }} />
              <span className="text-[11px] text-slate-900 dark:text-white">{preset.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Roles & Permissions Matrix */}
      <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Shield className="w-4 h-4 theme-accent-text" />
          Role-Based Access Control (RBAC) Matrix
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-100 dark:bg-slate-900 text-slate-500 uppercase font-bold">
              <tr>
                <th className="py-3 px-4">Module</th>
                <th className="py-3 px-4 text-center">Super Admin</th>
                <th className="py-3 px-4 text-center">Property Manager</th>
                <th className="py-3 px-4 text-center">Resident</th>
                <th className="py-3 px-4 text-center">Gate Guard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              {permissionsMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">{row.module}</td>
                  <td className="py-3 px-4 text-center">{row.superAdmin ? <Check className="w-4 h-4 text-emerald-500 mx-auto stroke-[3]" /> : <Lock className="w-3.5 h-3.5 text-slate-400 mx-auto" />}</td>
                  <td className="py-3 px-4 text-center">{row.manager ? <Check className="w-4 h-4 text-emerald-500 mx-auto stroke-[3]" /> : <Lock className="w-3.5 h-3.5 text-slate-400 mx-auto" />}</td>
                  <td className="py-3 px-4 text-center">{row.resident ? <Check className="w-4 h-4 text-emerald-500 mx-auto stroke-[3]" /> : <Lock className="w-3.5 h-3.5 text-slate-400 mx-auto" />}</td>
                  <td className="py-3 px-4 text-center">{row.security ? <Check className="w-4 h-4 text-emerald-500 mx-auto stroke-[3]" /> : <Lock className="w-3.5 h-3.5 text-slate-400 mx-auto" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl theme-accent-bg text-white font-bold text-xs shadow-xl"
        >
          <Save className="w-4 h-4" />
          {saved ? "Settings Saved!" : "Save System Configurations"}
        </button>
      </div>

    </div>
  );
};
