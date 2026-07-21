import React from 'react';
import { Users, FileText, Clock, Eye, TrendingUp, MoreVertical, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const data = [
  { name: 'Mon', traffic: 4000, newUsers: 2400 },
  { name: 'Tue', traffic: 3000, newUsers: 1398 },
  { name: 'Wed', traffic: 2000, newUsers: 9800 },
  { name: 'Thu', traffic: 2780, newUsers: 3908 },
  { name: 'Fri', traffic: 1890, newUsers: 4800 },
  { name: 'Sat', traffic: 2390, newUsers: 3800 },
  { name: 'Sun', traffic: 3490, newUsers: 4300 },
];

const Dashboard = () => {
  const statCards = [
    { title: "Today's Visitors", value: "24,592", icon: Users, trend: "+12.5%", positive: true },
    { title: "Published Articles", value: "1,432", icon: FileText, trend: "+3.2%", positive: true },
    { title: "Pending Reviews", value: "18", icon: Clock, trend: "-5.1%", positive: false },
    { title: "Avg. Read Time", value: "4m 12s", icon: Eye, trend: "+0.8%", positive: true }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">Dashboard Overview</h1>
          <p className="text-[var(--color-text-muted)] text-sm">Welcome back. Here is what's happening with NovaPress today.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg px-4 py-2 text-sm text-[var(--color-text)] outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
          <Button variant="primary" icon={TrendingUp}>Generate Report</Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, idx) => (
          <div key={idx} className="admin-card p-6 flex flex-col relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-bg-secondary)] flex items-center justify-center group-hover:bg-[var(--color-primary-100)] dark:group-hover:bg-[var(--color-primary-900)] transition-colors">
                <stat.icon className="w-5 h-5 text-[var(--color-primary-600)] dark:text-[var(--color-primary-400)]" />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.positive ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'}`}>
                {stat.trend}
              </span>
            </div>
            <div className="text-[var(--color-text-muted)] text-sm font-medium mb-1">{stat.title}</div>
            <div className="text-2xl font-black text-[var(--color-text)]">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Traffic Chart */}
        <div className="lg:col-span-2 admin-card p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-[var(--color-text)]">Audience Overview</h3>
            <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"><MoreVertical className="w-5 h-5" /></button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary-500)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-primary-500)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" stroke="var(--color-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-border)', borderRadius: '0.5rem', color: 'var(--color-text)' }}
                  itemStyle={{ color: 'var(--color-primary-600)', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="traffic" stroke="var(--color-primary-600)" strokeWidth={3} fillOpacity={1} fill="url(#colorTraffic)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Articles List */}
        <div className="lg:col-span-1 admin-card p-0 flex flex-col">
          <div className="p-6 border-b border-[var(--color-border)] flex items-center justify-between">
            <h3 className="font-bold text-[var(--color-text)]">Top Articles</h3>
            <button className="text-xs font-bold text-[var(--color-primary-600)] hover:underline">View All</button>
          </div>
          <div className="flex-1 overflow-y-auto max-h-[300px] p-2">
            {[
              { title: 'The AI Revolution in Healthcare', views: '45.2k', trend: 'up' },
              { title: 'Global Market Report Q4', views: '32.1k', trend: 'up' },
              { title: 'New Electric Vehicle Policies', views: '28.9k', trend: 'down' },
              { title: 'Space Tourism: Next Steps', views: '21.5k', trend: 'up' }
            ].map((article, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 hover:bg-[var(--color-bg-secondary)] rounded-xl transition-colors cursor-pointer group">
                <div className="flex flex-col gap-1 pr-4">
                  <div className="text-sm font-semibold text-[var(--color-text)] line-clamp-1 group-hover:text-[var(--color-primary-600)] transition-colors">{article.title}</div>
                  <div className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {article.views} views
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                  <ArrowUpRight className={`w-4 h-4 ${article.trend === 'up' ? 'text-emerald-500' : 'text-rose-500 rotate-90'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
