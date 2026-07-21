import React from 'react';
import { 
  Users, 
  Briefcase, 
  Building2, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  XCircle,
  MoreVertical,
  Plus,
  ArrowUpRight,
  Filter,
  Download
} from 'lucide-react';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Placements', value: '1,420', change: '+14.2%', icon: CheckCircle2, color: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/20' },
    { title: 'Active Requisitions', value: '84', change: '+8.1%', icon: Briefcase, color: 'from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/20' },
    { title: 'Candidate Pipeline', value: '5,890', change: '+22.5%', icon: Users, color: 'from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/20' },
    { title: 'Partner Employers', value: '312', change: '+5.4%', icon: Building2, color: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/20' },
  ];

  const recentApplications = [
    { id: 'APP-9081', candidate: 'Sarah Jenkins', role: 'Staff Frontend Engineer', company: 'Stripe', date: '10 mins ago', status: 'Interview Scheduled', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { id: 'APP-9080', candidate: 'Marcus Vance', role: 'Head of Product Design', company: 'Linear', date: '45 mins ago', status: 'Under Review', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { id: 'APP-9079', candidate: 'Elena Rostova', role: 'Lead DevOps Architect', company: 'Vercel', date: '2 hours ago', status: 'Offer Extended', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' },
    { id: 'APP-9078', candidate: 'David Chen', role: 'Senior Backend Developer', company: 'Supabase', date: '4 hours ago', status: 'Shortlisted', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
    { id: 'APP-9077', candidate: 'Amara Okafor', role: 'VP of Engineering', company: 'Remote.com', date: '1 day ago', status: 'Rejected', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150' },
  ];

  const activeJobs = [
    { title: 'Principal Infrastructure Architect', company: 'AWS Partner Network', applicants: 42, location: 'Remote (US)', type: 'Executive' },
    { title: 'Director of Talent Acquisition', company: 'FinTech Global', applicants: 19, location: 'New York, NY', type: 'Full-Time' },
    { title: 'Senior AI Research Engineer', company: 'Core AI Labs', applicants: 65, location: 'San Francisco, CA', type: 'Hybrid' },
    { title: 'Lead Product Manager', company: 'Design Systems Inc.', applicants: 28, location: 'Remote (EU)', type: 'Contract' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Offer Extended':
        return <Badge variant="glow" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30">Offer Extended</Badge>;
      case 'Interview Scheduled':
        return <Badge variant="primary" className="bg-blue-500/10 text-blue-400 border-blue-500/30">Interview</Badge>;
      case 'Shortlisted':
        return <Badge variant="secondary" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30">Shortlisted</Badge>;
      case 'Under Review':
        return <Badge variant="secondary" className="bg-amber-500/10 text-amber-400 border-amber-500/30">Review</Badge>;
      case 'Rejected':
        return <Badge variant="secondary" className="bg-rose-500/10 text-rose-400 border-rose-500/30">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner / Welcome */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-white tracking-tight">Recruitment Dashboard</h1>
          <p className="text-slate-400 text-sm mt-1">Overview of active hiring campaigns, candidate pipelines, and placement metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium hover:bg-slate-800 transition-colors">
            <Download className="w-4 h-4" /> Export Report
          </button>
          <Button variant="primary" icon={Plus}>Create Requisition</Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-b ${stat.color} border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1`}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950/50 flex items-center justify-center border border-white/10">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-white tracking-tight">{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium mt-1">{stat.title}</div>
            </div>
          );
        })}
      </div>

      {/* Grid Content: Candidates Table + Active Jobs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applications Table */}
        <div className="lg:col-span-2 rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white">Recent Candidate Submissions</h2>
              <p className="text-xs text-slate-400 mt-0.5">Real-time candidate activity across all active clients.</p>
            </div>
            <button className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800">
              <Filter className="w-3.5 h-3.5" /> Filter
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Candidate</th>
                  <th className="py-3 px-4">Target Role</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Submitted</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {recentApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-800/40 transition-colors group">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img src={app.avatar} alt={app.candidate} className="w-9 h-9 rounded-full object-cover border border-slate-700" />
                        <div>
                          <div className="font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">{app.candidate}</div>
                          <div className="text-xs text-slate-500">{app.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-slate-300">{app.role}</div>
                      <div className="text-xs text-slate-500">{app.company}</div>
                    </td>
                    <td className="py-4 px-4">
                      {getStatusBadge(app.status)}
                    </td>
                    <td className="py-4 px-4 text-xs text-slate-400">
                      {app.date}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="text-slate-500 hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-800 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* High-Priority Requisitions Widget */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Priority Jobs</h2>
              <a href="#" className="text-xs text-blue-400 hover:underline flex items-center gap-1">
                View All <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-4">
              {activeJobs.map((job, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-sm text-slate-200 hover:text-blue-400 transition-colors line-clamp-1">{job.title}</h3>
                    <Badge variant="secondary" className="shrink-0 text-[10px] bg-slate-800 text-slate-300">{job.type}</Badge>
                  </div>
                  <div className="text-xs text-slate-400 mb-3">{job.company} • {job.location}</div>
                  <div className="flex items-center justify-between text-xs border-t border-slate-800/60 pt-3">
                    <span className="text-slate-400 font-medium">{job.applicants} Applicants</span>
                    <span className="text-blue-400 hover:underline cursor-pointer font-semibold">Review Candidates →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800 text-center">
            <Button variant="outline" className="w-full text-xs border-slate-800 hover:bg-slate-800 text-slate-300">
              Manage All 84 Active Requisitions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
