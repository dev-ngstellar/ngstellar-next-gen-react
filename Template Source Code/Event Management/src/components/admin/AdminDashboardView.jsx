import React, { useState } from 'react';
import { 
  DollarSign, Users, Calendar, Ticket, TrendingUp, AlertTriangle, 
  ArrowUpRight, ArrowDownRight, CheckCircle2, Download, Search, Plus, QrCode 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ADMIN_METRICS, REVENUE_CHART_DATA, RECENT_BOOKINGS, REGISTRATION_FUNNEL } from '../../data/adminData';

export const AdminDashboardView = ({ onNavigate }) => {
  const [timeRange, setTimeRange] = useState('6M');

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Top Header & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--text-heading)]">Executive Dashboard</h1>
          <p className="text-xs text-[var(--text-muted)]">Real-time revenue stream, ticket registrations, and funnel operations.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onNavigate('events')}
            className="px-4 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold flex items-center space-x-2 shadow-md hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Event</span>
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Platform Revenue', val: `$${ADMIN_METRICS.totalRevenue.toLocaleString()}`, change: '+18.4%', isPositive: true, icon: DollarSign },
          { label: "Today's Registrations", val: ADMIN_METRICS.todayRegistrations, change: '+12 today', isPositive: true, icon: Users },
          { label: 'Active Flagship Summits', val: ADMIN_METRICS.activeEventsCount, change: '8 Live Now', isPositive: true, icon: Calendar },
          { label: 'Pending Ticket Payments', val: ADMIN_METRICS.pendingBookings, change: 'Requires Action', isPositive: false, icon: AlertTriangle }
        ].map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="glass-card p-6 rounded-3xl space-y-3 border border-[var(--border-color)]">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">{card.label}</span>
                <div className="p-2 rounded-xl bg-[var(--bg-primary)] text-[var(--color-primary)]">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-extrabold text-[var(--text-heading)] font-mono">{card.val}</span>
                <span className={`text-xs font-bold flex items-center ${card.isPositive ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {card.isPositive ? <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> : <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />}
                  {card.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Revenue Charts & Registration Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Revenue Recharts Graph */}
        <div className="lg:col-span-2 glass-card p-6 rounded-3xl space-y-4 border border-[var(--border-color)]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[var(--text-heading)]">Gross Revenue Trend</h3>
              <p className="text-xs text-[var(--text-muted)]">Monthly breakdown of ticket sales and VIP access passes.</p>
            </div>
            <div className="flex space-x-1 bg-[var(--bg-primary)] p-1 rounded-xl border border-[var(--border-color)] text-xs">
              {['1M', '6M', '1Y'].map(range => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 rounded-lg font-mono ${timeRange === range ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--text-muted)]'}`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="h-64 pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_CHART_DATA}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderRadius: '12px', border: 'none', color: '#fff' }} />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Funnel Bar Chart */}
        <div className="glass-card p-6 rounded-3xl space-y-4 border border-[var(--border-color)] flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-[var(--text-heading)]">Registration Funnel</h3>
            <p className="text-xs text-[var(--text-muted)]">Conversion rate across visitor dropoff stages.</p>
          </div>

          <div className="space-y-3">
            {REGISTRATION_FUNNEL.map((fn, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs text-[var(--text-heading)]">
                  <span>{fn.stage}</span>
                  <span className="font-mono font-bold">{fn.count.toLocaleString()}</span>
                </div>
                <div className="w-full bg-[var(--bg-primary)] h-2 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(fn.count / 48500) * 100}%`, backgroundColor: fn.fill }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)] flex justify-between">
            <span>Overall Conversion Rate:</span>
            <strong className="text-emerald-400 font-mono">7.05%</strong>
          </div>
        </div>

      </div>

      {/* Recent Bookings & Ticket Pass Management */}
      <div className="glass-card p-6 rounded-3xl space-y-4 border border-[var(--border-color)]">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[var(--text-heading)]">Recent Ticket Transactions</h3>
          <button
            onClick={() => onNavigate('bookings')}
            className="text-xs text-[var(--color-primary)] font-semibold hover:underline"
          >
            View All Transactions
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[var(--text-body)]">
            <thead className="bg-[var(--bg-primary)] text-[var(--text-heading)] font-mono uppercase tracking-wider">
              <tr>
                <th className="p-3">Booking ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Event Name</th>
                <th className="p-3">Ticket Pass</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {RECENT_BOOKINGS.map((bkg) => (
                <tr key={bkg.id} className="hover:bg-[var(--bg-surface)]">
                  <td className="p-3 font-mono font-bold text-[var(--color-primary)]">{bkg.id}</td>
                  <td className="p-3 font-semibold text-[var(--text-heading)]">{bkg.customer}</td>
                  <td className="p-3">{bkg.event}</td>
                  <td className="p-3 font-mono text-[var(--text-muted)]">{bkg.ticketType}</td>
                  <td className="p-3 font-bold text-[var(--text-heading)] font-mono">{bkg.amount}</td>
                  <td className="p-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      bkg.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-400' :
                      bkg.status === 'Pending' ? 'bg-amber-500/20 text-amber-400' : 'bg-rose-500/20 text-rose-400'
                    }`}>
                      {bkg.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
