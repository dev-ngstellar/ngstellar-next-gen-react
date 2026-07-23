import React from 'react';
import { BarChart3, Download, TrendingUp, PieChart, DollarSign, Users, Building, ShieldCheck } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { REVENUE_MONTHLY_CHART } from '../../data/mockData';

export const ReportsAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Society Financial & Operational Analytics</h1>
          <p className="text-xs text-slate-500">Comprehensive reports for board meetings, auditor reviews, and occupancy trends.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => alert("Financial Excel report exported successfully.")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-xs font-bold"
          >
            <Download className="w-4 h-4" />
            Export Excel
          </button>
          <button
            onClick={() => alert("Executive PDF report generated.")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl theme-accent-bg text-white text-xs font-bold shadow-md"
          >
            <Download className="w-4 h-4" />
            Export PDF Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Revenue Breakdown Chart */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Revenue Sources Breakdown ($)</h3>
          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REVENUE_MONTHLY_CHART}>
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
                <Legend />
                <Bar dataKey="maintenance" name="Maintenance Dues" fill="var(--primary-color)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="amenities" name="Amenity Bookings" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                <Bar dataKey="parking" name="Visitor Parking" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Executive Summary Metrics */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Operational KPI Highlights</h3>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Total Maintenance Collected (YTD)</span>
                <strong className="text-xl font-bold font-mono text-slate-900 dark:text-white">$335,700.00</strong>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600">+8.4%</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Average Ticket Resolution SLA</span>
                <strong className="text-xl font-bold text-slate-900 dark:text-white">3.8 Hours</strong>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600">Top 1%</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Society Occupancy Rate</span>
                <strong className="text-xl font-bold text-slate-900 dark:text-white">98.0% (1,176 / 1200)</strong>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold theme-accent-light-bg theme-accent-text">Full</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
