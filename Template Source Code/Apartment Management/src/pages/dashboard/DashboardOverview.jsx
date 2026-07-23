import React from 'react';
import { 
  Building, Users, CreditCard, ShieldCheck, AlertTriangle, Calendar, 
  TrendingUp, Sparkles, Plus, ArrowUpRight, DollarSign, PackageCheck
} from 'lucide-react';
import { StatsCard } from '../../components/ui/StatsCard';
import { useAuthRole } from '../../context/AuthRoleContext';
import { 
  APARTMENT_UNITS, RESIDENTS_DATA, VISITORS_LOG, MAINTENANCE_BILLING, 
  COMPLAINTS_DATA, REVENUE_MONTHLY_CHART 
} from '../../data/mockData';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

export const DashboardOverview = () => {
  const { currentRole } = useAuthRole();

  return (
    <div className="space-y-8">
      
      {/* Dashboard Top Hero Welcome */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 relative overflow-hidden aurora-bg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold theme-accent-light-bg theme-accent-text mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {currentRole.name} Mode Active
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              SkyNest Central Operations
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Live automated telemetry across 15 Towers and 1,200 residential units.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2.5 rounded-2xl theme-accent-bg text-white font-bold text-xs shadow-lg hover:opacity-95 transition flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Quick Action
            </button>
          </div>
        </div>
      </div>

      {/* Floating Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Occupied Units"
          value="1,176 / 1200"
          change="+2.4%"
          isPositive={true}
          icon={Building}
          description="98% Occupancy Rate"
          badgeText="Tower A-F"
        />
        <StatsCard
          title="Today's Visitors"
          value="48 Entries"
          change="+12"
          isPositive={true}
          icon={ShieldCheck}
          description="QR Gate Passes Issued"
          badgeText="Live Security"
        />
        <StatsCard
          title="Maintenance Dues"
          value="$51,000"
          change="92% Settled"
          isPositive={true}
          icon={CreditCard}
          description="July 2026 Collection"
          badgeText="Monthly Billing"
        />
        <StatsCard
          title="Pending Tickets"
          value="3 Complaints"
          change="-4"
          isPositive={true}
          icon={AlertTriangle}
          description="Avg Resolution < 4 hrs"
          badgeText="Helpdesk"
        />
      </div>

      {/* Analytics & Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Revenue Area Chart */}
        <div className="lg:col-span-2 glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Maintenance Collection Trend</h3>
              <p className="text-xs text-slate-500">Monthly revenue collection (Jan - Jul 2026)</p>
            </div>
            <span className="text-xs font-bold theme-accent-text bg-teal-500/10 px-3 py-1 rounded-full">
              +14.2% YoY
            </span>
          </div>

          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_MONTHLY_CHART}>
                <defs>
                  <linearGradient id="colorMaint" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary-color)" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="var(--primary-color)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
                <Area type="monotone" dataKey="maintenance" stroke="var(--primary-color)" strokeWidth={3} fillOpacity={1} fill="url(#colorMaint)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Live Gate Entry Activity Feed */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Real-Time Visitor Log</h3>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>

          <div className="space-y-3">
            {VISITORS_LOG.map((v) => (
              <div key={v.id} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs flex items-center justify-between">
                <div>
                  <strong className="block text-slate-900 dark:text-white">{v.visitorName}</strong>
                  <span className="text-slate-500">Host: {v.hostApartment} ({v.purpose})</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  v.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                }`}>
                  {v.checkIn}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
