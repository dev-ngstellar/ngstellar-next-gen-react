import React, { useEffect } from 'react';
import StudentSidebar from '../../components/portal/StudentSidebar';
import { studentDashboardData } from '../../data/mockData';
import { CalendarCheck, ShieldCheck, HelpCircle } from 'lucide-react';

const StudentAttendance = () => {
  const { attendance } = studentDashboardData;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="flex bg-slate-50 min-h-screen">
      {/* Sidebar Navigation */}
      <StudentSidebar />

      {/* Main Panel Content */}
      <div className="flex-grow p-8 md:p-10 lg:p-12 overflow-x-hidden pt-24 md:pt-12">
        
        <div className="border-b border-slate-200/80 pb-6 mb-8">
          <span className="text-[10px] tracking-[0.2em] uppercase text-violet-600 font-bold">Portal Board</span>
          <h1 className="font-heading text-2xl font-extrabold text-slate-900 mt-1">
            My Presence Logs
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Attendance logs list (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h3 className="font-heading text-base font-bold text-slate-955 uppercase tracking-widest pl-1 border-l-2 border-violet-600">
              Monthly Playgroup Presence
            </h3>

            <div className="bg-white border border-slate-100 rounded-xl p-6 flex flex-col gap-5 shadow-sm">
              {attendance.map((att, idx) => {
                const percentageNum = parseInt(att.percent);
                return (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-light text-slate-500">
                      <span className="font-semibold text-slate-800">{att.month} Playgroup</span>
                      <span className="font-bold text-violet-600">{att.percent} Present</span>
                    </div>

                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-violet-600 rounded-full" 
                        style={{ width: `${percentageNum}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick info notes (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            <div className="p-6 bg-slate-900 text-white rounded-xl shadow flex flex-col gap-4">
              <h4 className="font-heading text-sm font-bold pl-2 border-l-2 border-amber-500 flex items-center gap-1.5">
                <CalendarCheck className="w-4 h-4 text-amber-500" />
                Attendance Criteria
              </h4>
              <p className="text-slate-450 text-xs font-light leading-relaxed">
                Kids are required to maintain a minimum threshold of <span className="font-bold text-white">85% attendance</span> across all active playgroups to qualify for graduation badges.
              </p>
            </div>

            <div className="p-5 border border-slate-100 bg-white rounded-xl shadow-sm flex gap-3.5 items-start">
              <HelpCircle className="w-6 h-6 text-slate-400 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">Sick Leave / Absence</h4>
                <p className="text-slate-400 text-[10px] font-light leading-relaxed">
                  To notify us regarding sick leave or school bus delays, contact the Parent Support Desk.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentAttendance;
