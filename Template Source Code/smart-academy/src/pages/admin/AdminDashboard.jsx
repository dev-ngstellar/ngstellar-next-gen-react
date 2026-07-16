import React, { useEffect } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { adminDashboardStats } from '../../data/mockData';
import { Users, BookOpen, BarChart3, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { overview, admissionsRequests, academicReport } = adminDashboardStats;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="flex bg-slate-50 min-h-screen">
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Panel Content */}
      <div className="flex-grow p-8 md:p-10 lg:p-12 overflow-x-hidden pt-24 md:pt-12">
        
        {/* Header Title */}
        <div className="border-b border-slate-200/80 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-violet-600 font-bold">Admin Console</span>
            <h1 className="font-heading text-2xl font-extrabold text-slate-900 mt-1">
              Platform Registry Overview
            </h1>
          </div>
          
          <div className="text-[11px] text-slate-400 font-light flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 block animate-pulse" />
            System Live: Database Connected
          </div>
        </div>

        {/* System Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {overview.map((stat, idx) => (
            <div key={idx} className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm flex flex-col gap-1.5">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">{stat.label}</span>
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-2xl font-extrabold text-slate-950 font-heading">{stat.value}</span>
                <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  {stat.change.split(' ')[0]}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-light">{stat.change}</span>
            </div>
          ))}
        </div>

        {/* Influx Admissions Queue & Academic Reports grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Admissions Queue (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="font-heading text-base font-bold text-slate-950 uppercase tracking-widest pl-1 border-l-2 border-violet-600">
                Pending Admission Requests
              </h3>
              <Link 
                to="/admin/admissions"
                className="text-[10px] font-bold text-violet-600 hover:text-amber-500 uppercase tracking-wider transition-colors"
              >
                Manage Admissions
              </Link>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px] tracking-wider">
                      <th className="py-3 px-4">Applicant</th>
                      <th className="py-3 px-4">Program Focus</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-550 font-light">
                    {admissionsRequests.slice(0, 3).map((r) => (
                      <tr key={r.id}>
                        <td className="py-3 px-4">
                          <span className="font-medium text-slate-800 block">{r.studentName}</span>
                          <span className="text-[10px] text-slate-400 block">{r.email}</span>
                        </td>
                        <td className="py-3 px-4">{r.selectedCourse}</td>
                        <td className="py-3 px-4 font-semibold text-amber-600">{r.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Academic passing rate reports (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="font-heading text-base font-bold text-slate-955 uppercase tracking-widest pl-1 border-l-2 border-violet-600">
              Program passing Metrics
            </h3>

            <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm flex flex-col gap-4.5">
              {academicReport.slice(0, 3).map((rep, idx) => (
                <div key={idx} className="flex flex-col gap-1 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{rep.courseTitle}</h4>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mt-1">
                    <span>Avg Grade Score: <span className="font-bold text-slate-700">{rep.avgGrade}</span></span>
                    <span className="font-semibold text-emerald-600">Passing Rate: {rep.passingRate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
