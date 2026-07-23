import React from 'react';
import { STAFF_MEMBERS } from '../../data/mockData';
import { UserCheck, Star, Phone, Clock, DollarSign, ShieldCheck } from 'lucide-react';

export const StaffManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Society Staff Roster & Shift Matrix</h1>
          <p className="text-xs text-slate-500">Security personnel, electricians, plumbers, housekeeping leads, and property managers.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STAFF_MEMBERS.map((staff) => (
          <div
            key={staff.id}
            className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4"
          >
            <div className="flex items-center gap-4">
              <img src={staff.avatar} alt={staff.name} className="w-14 h-14 rounded-2xl object-cover ring-2 ring-teal-500/20" />
              <div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{staff.name}</h3>
                <span className="text-xs theme-accent-text font-bold block">{staff.role}</span>
                <span className="text-[10px] text-slate-400 font-mono">{staff.id}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Shift Timing</span>
                <strong className="text-slate-900 dark:text-white">{staff.shift}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Duty Status</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600">
                  {staff.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Monthly Compensation</span>
                <strong className="font-mono text-slate-900 dark:text-white">{staff.salary}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Resident Rating</span>
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  {staff.rating} / 5.0
                </div>
              </div>
            </div>

            <button
              onClick={() => alert(`Dialing ${staff.name} at ${staff.phone}`)}
              className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              Contact Staff Member
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
