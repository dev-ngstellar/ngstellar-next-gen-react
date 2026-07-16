import React, { useState, useEffect } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { adminDashboardStats } from '../../data/mockData';
import { FileSpreadsheet, Download, CheckCircle, BarChart3 } from 'lucide-react';

const AdminReports = () => {
  const { academicReport } = adminDashboardStats;
  const [downloading, setDownloading] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleDownloadReport = () => {
    setDownloading(true);
    setComplete(false);

    setTimeout(() => {
      setDownloading(false);
      setComplete(true);
      setTimeout(() => setComplete(false), 3000);
    }, 1500);
  };

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
              System & Program Reports
            </h1>
          </div>

          <button
            onClick={handleDownloadReport}
            disabled={downloading}
            className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-violet-600 hover:bg-violet-750 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow shadow-violet-600/10 focus:outline-none"
          >
            <Download className="w-4 h-4" />
            {downloading ? 'Downloading...' : 'Download audit CSV'}
          </button>
        </div>

        {complete && (
          <div className="p-3 bg-emerald-50 border border-emerald-150 rounded text-emerald-600 text-xs font-light mb-6 flex items-center gap-1.5 animate-[scale-up_0.3s_ease-out_forwards]">
            <CheckCircle className="w-4 h-4" />
            Spreadsheet report download complete.
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Reports metrics (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h3 className="font-heading text-base font-bold text-slate-950 uppercase tracking-widest pl-1 border-l-2 border-violet-600">
              Playgroup Passing Averages by Program
            </h3>

            <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px] tracking-wider">
                      <th className="py-3 px-4">Program Focus Title</th>
                      <th className="py-3 px-4">Cumulative Passing Rate</th>
                      <th className="py-3 px-4">Average GPA Score</th>
                      <th className="py-3 px-4">Complaints logged</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-550 font-light">
                    {academicReport.map((rep, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-4 font-semibold text-slate-800">{rep.courseTitle}</td>
                        <td className="py-4 px-4 font-bold text-emerald-600">{rep.passingRate} Pass</td>
                        <td className="py-4 px-4 text-violet-600 font-bold">{rep.avgGrade}</td>
                        <td className="py-4 px-4">{rep.complaints} Cases</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar Audit details (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 bg-slate-900 text-white rounded-xl shadow flex gap-4 items-start">
              <BarChart3 className="w-8 h-8 text-amber-500 shrink-0" />
              <div>
                <h4 className="font-heading text-xs font-bold text-white mb-1">Audit Compliance</h4>
                <p className="text-slate-400 text-[10px] font-light leading-relaxed">
                  Program statistics are gathered from end-of-playgroup evaluations and activities feedback. Passing thresholds must remain above 85% to clear institutional regulatory parameters.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminReports;
