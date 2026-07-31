import React from 'react';
import { UserCheck, Shield, Clock } from 'lucide-react';

export default function AdminStaff() {
  const staffMembers = [
    { name: 'Marcus Vance', role: 'General Store Manager', dept: 'Operations', shift: 'Morning (06:00 - 14:00)', access: 'Full Admin' },
    { name: 'Elena Rostova', role: 'Head of Produce Quality', dept: 'Quality Control', shift: 'Morning (07:00 - 15:00)', access: 'Inventory Manager' },
    { name: 'Sarah Chen', role: 'Fulfillment Lead', dept: 'Logistics', shift: 'Evening (14:00 - 22:00)', access: 'Dispatch Lead' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">Staff Management & Role Access</h1>
        <p className="text-xs text-slate-500">Employee shift scheduling, departmental roles, and permission matrix.</p>
      </div>

      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-sm overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 dark:bg-slate-800/60 border-b text-slate-400 font-bold uppercase tracking-wider">
            <tr>
              <th className="p-4">Employee Name</th>
              <th className="p-4">Role / Department</th>
              <th className="p-4">Shift Schedule</th>
              <th className="p-4">Role Access</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium text-slate-800 dark:text-slate-200">
            {staffMembers.map((s, idx) => (
              <tr key={idx}>
                <td className="p-4 font-bold text-slate-900 dark:text-slate-100">{s.name}</td>
                <td className="p-4">{s.role} • <span className="text-slate-400">{s.dept}</span></td>
                <td className="p-4 font-mono text-[11px]">{s.shift}</td>
                <td className="p-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-bold text-[10px]">
                    {s.access}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
