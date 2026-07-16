import React, { useState, useEffect } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { adminDashboardStats } from '../../data/mockData';
import { Check, X, ShieldAlert, Inbox } from 'lucide-react';

const AdminAdmissions = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Core seed admissions list
    const defaultQueue = adminDashboardStats.admissionsRequests;
    
    // Fetch live submissions from public Admissions form
    const localQueue = JSON.parse(localStorage.getItem('smart_admissions_queue')) || [];
    
    // Combine and set state
    setRequests([...localQueue, ...defaultQueue]);
  }, []);

  const handleApprove = (id) => {
    // Update local state status
    const updated = requests.map((req) => {
      if (req.id === id) {
        return { ...req, status: "Reviewed & Approved" };
      }
      return req;
    });
    setRequests(updated);

    // Sync with localStorage
    const localQueue = JSON.parse(localStorage.getItem('smart_admissions_queue')) || [];
    const updatedLocal = localQueue.map((req) => {
      if (req.id === id) {
        return { ...req, status: "Reviewed & Approved" };
      }
      return req;
    });
    localStorage.setItem('smart_admissions_queue', JSON.stringify(updatedLocal));
  };

  const handleDecline = (id) => {
    // Update state to remove or mark Declined
    const updated = requests.map((req) => {
      if (req.id === id) {
        return { ...req, status: "Declined / Capacity Full" };
      }
      return req;
    });
    setRequests(updated);

    // Sync with localStorage
    const localQueue = JSON.parse(localStorage.getItem('smart_admissions_queue')) || [];
    const updatedLocal = localQueue.map((req) => {
      if (req.id === id) {
        return { ...req, status: "Declined / Capacity Full" };
      }
      return req;
    });
    localStorage.setItem('smart_admissions_queue', JSON.stringify(updatedLocal));
  };

  return (
    <div className="flex bg-slate-50 min-h-screen">
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Panel Content */}
      <div className="flex-grow p-8 md:p-10 lg:p-12 overflow-x-hidden pt-24 md:pt-12">
        
        {/* Header Title */}
        <div className="border-b border-slate-200/80 pb-6 mb-8 flex justify-between items-center">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-violet-600 font-bold">Admin Console</span>
            <h1 className="font-heading text-2xl font-extrabold text-slate-900 mt-1">
              Admissions Influx Board
            </h1>
          </div>
        </div>

        {/* Admissions Requests Table */}
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px] tracking-wider">
                  <th className="py-3 px-4">Applicant details</th>
                  <th className="py-3 px-4">Target Program Focus</th>
                  <th className="py-3 px-4">Submission Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Approval Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-550 font-light">
                {requests.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <span className="font-semibold text-slate-800 block">{r.studentName}</span>
                      <span className="text-[10px] text-slate-400 block">{r.email} &middot; {r.phone}</span>
                    </td>
                    <td className="py-4 px-4 font-medium text-slate-700">{r.selectedCourse}</td>
                    <td className="py-4 px-4 font-mono">{r.date}</td>
                    <td className="py-4 px-4">
                      <span className={`font-bold text-[10px] uppercase tracking-wider ${
                        r.status === 'Pending Evaluation' ? 'text-amber-600' :
                        r.status === 'Reviewed & Approved' ? 'text-emerald-600' : 'text-slate-400'
                      }`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      {r.status === 'Pending Evaluation' && (
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => handleApprove(r.id)}
                            className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded transition-colors"
                            title="Approve Applicant"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDecline(r.id)}
                            className="p-1.5 bg-red-50 text-red-650 hover:bg-red-100 rounded transition-colors"
                            title="Decline Applicant"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminAdmissions;
