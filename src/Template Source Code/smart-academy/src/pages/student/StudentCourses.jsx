import React, { useState, useEffect } from 'react';
import StudentSidebar from '../../components/portal/StudentSidebar';
import { studentDashboardData } from '../../data/mockData';
import { BookOpen, Calendar, Clock, MonitorPlay, X, Check } from 'lucide-react';

const StudentCourses = () => {
  const { enrolledCourses } = studentDashboardData;
  const [activePlay, setActivePlay] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleLaunchConsole = (course) => {
    setActivePlay(course);
  };

  const handleClosePlay = () => {
    setActivePlay(null);
  };

  return (
    <div className="flex bg-slate-50 min-h-screen">
      {/* Sidebar Navigation */}
      <StudentSidebar />

      {/* Main Panel Content */}
      <div className="flex-grow p-8 md:p-10 lg:p-12 overflow-x-hidden pt-24 md:pt-12">
        
        <div className="border-b border-slate-200/80 pb-6 mb-8">
          <span className="text-[10px] tracking-[0.2em] uppercase text-violet-600 font-bold">Portal Board</span>
          <h1 className="font-heading text-2xl font-extrabold text-slate-900 mt-1">
            My Enrolled Programs
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enrolledCourses.map((c) => (
            <div 
              key={c.id}
              className="bg-white border border-slate-100 p-6 rounded-xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-400">ID: {c.id.toUpperCase()}</span>
                </div>

                <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
                  {c.title}
                </h3>
                <span className="text-xs text-slate-400 block mb-6">Schedule: {c.nextClass}</span>

                {/* Progress bar */}
                <div className="flex items-center gap-3 mt-4 mb-4">
                  <div className="flex-grow h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-violet-600 rounded-full" 
                      style={{ width: `${c.progress}%` }} 
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-700 shrink-0">{c.progress}%</span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 flex gap-4 items-center justify-between mt-4">
                <span className="text-xs font-bold text-slate-500">Current Progress: <span className="text-emerald-600">{c.grade}</span></span>
                <button
                  onClick={() => handleLaunchConsole(c)}
                  className="px-4 py-2 bg-violet-600 hover:bg-violet-750 text-white rounded text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-1 shadow shadow-violet-600/10 focus:outline-none"
                >
                  <MonitorPlay className="w-4 h-4" />
                  Launch Activity Room
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Course Play Simulator Overlay */}
      {activePlay && (
        <div 
          onClick={handleClosePlay}
          className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-6 backdrop-blur-sm animate-[fade-in_0.3s_ease-out_forwards]"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-slate-800 text-white max-w-xl w-full p-8 text-center relative shadow-2xl rounded-2xl animate-[scale-up_0.4s_ease-out_forwards]"
          >
            <button 
              onClick={handleClosePlay}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 flex items-center justify-center transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-violet-500/10 text-violet-400 flex items-center justify-center mx-auto mb-6 border border-violet-500/30">
              <MonitorPlay className="w-8 h-8 stroke-[1.5]" />
            </div>

            <span className="text-[10px] tracking-[0.25em] uppercase text-violet-400 font-bold mb-2 block">Parent portal console</span>
            
            <h3 className="font-heading text-lg font-bold text-white mb-2 leading-tight">
              {activePlay.title}
            </h3>
            <p className="text-slate-400 text-xs font-light max-w-sm mx-auto mb-6 leading-relaxed">
              Playroom sandbox environment and syllabus roadmap loaded. Syncing child parameters ({activePlay.progress}%) with records.
            </p>

            <div className="bg-slate-950 p-4 border border-slate-850 rounded-lg text-left text-xs font-mono text-slate-400 flex flex-col gap-2 mb-6">
              <div className="flex justify-between border-b border-slate-900 pb-1.5 mb-1.5 font-bold text-[9px] text-slate-500 uppercase tracking-widest">
                <span>Console Log</span>
                <span className="text-emerald-400">Online</span>
              </div>
              <div>$ ssh parent_portal_console@{activePlay.id}.edu</div>
              <div className="text-slate-500">Connecting to playgroup virtual room sandbox...</div>
              <div className="text-emerald-500">✓ Connection Established. Launching child playgroup activities...</div>
            </div>

            <button
              onClick={handleClosePlay}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-colors rounded-lg"
            >
              Close Playroom Console
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default StudentCourses;
