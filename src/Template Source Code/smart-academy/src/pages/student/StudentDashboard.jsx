import React, { useEffect } from 'react';
import StudentSidebar from '../../components/portal/StudentSidebar';
import { studentDashboardData } from '../../data/mockData';
import { BookOpen, FileText, CalendarCheck, Award, GraduationCap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const { profile, enrolledCourses, assignments, certificates } = studentDashboardData;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const totalEnrolled = enrolledCourses.length;
  const pendingAssignmentsCount = assignments.filter(a => a.status === 'Pending').length;
  const completedCertsCount = certificates.length;

  return (
    <div className="flex bg-slate-50 min-h-screen">
      {/* Sidebar Navigation */}
      <StudentSidebar />

      {/* Main Panel Content */}
      <div className="flex-grow p-8 md:p-10 lg:p-12 overflow-x-hidden pt-24 md:pt-12">
        
        {/* Header greeting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200/80 pb-6 mb-8">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-violet-600 font-bold">Portal Board</span>
            <h1 className="font-heading text-2xl font-extrabold text-slate-900 mt-1">
              Welcome Back, {profile.name}
            </h1>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-3 border border-slate-100 rounded-lg shadow-sm">
            <img 
              src={profile.avatar} 
              alt={profile.name} 
              className="w-10 h-10 rounded-full object-cover border border-slate-100"
            />
            <div>
              <span className="text-xs font-bold text-slate-900 block">{profile.major}</span>
              <span className="text-[10px] text-slate-400 font-mono">ID: {profile.studentId}</span>
            </div>
          </div>
        </div>

        {/* Dashboard Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">My Programs</span>
              <span className="text-xl font-bold text-slate-900">{totalEnrolled} Active</span>
            </div>
          </div>

          <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
              <FileText className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Pending Tasks</span>
              <span className="text-xl font-bold text-slate-900">{pendingAssignmentsCount} Tasks</span>
            </div>
          </div>

          <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
              <CalendarCheck className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Performance Scale</span>
              <span className="text-xl font-bold text-slate-900">Grade {profile.cgpa}</span>
            </div>
          </div>

          <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
              <Award className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Certificates</span>
              <span className="text-xl font-bold text-slate-900">{completedCertsCount} Earned</span>
            </div>
          </div>

        </div>

        {/* Dynamic Sections (Active Courses & Quick Actions) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Active Courses progress (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h3 className="font-heading text-base font-bold text-slate-955 uppercase tracking-widest pl-1 border-l-2 border-violet-600">
              Enrolled Program Progress
            </h3>

            <div className="flex flex-col gap-4">
              {enrolledCourses.map((c) => (
                <div 
                  key={c.id}
                  className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm flex flex-col gap-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-heading text-sm font-bold text-slate-900">{c.title}</h4>
                      <span className="text-[10px] text-slate-400 font-light mt-0.5 block">Next Class: {c.nextClass}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-500">Grade: {c.grade}</span>
                  </div>

                  {/* Progress bar */}
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex-grow h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-violet-600 rounded-full transition-all duration-500" 
                        style={{ width: `${c.progress}%` }} 
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-700 shrink-0">{c.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick tasks / Sidebar Actions (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="font-heading text-base font-bold text-slate-950 uppercase tracking-widest pl-1 border-l-2 border-violet-600">
              Immediate Tasks
            </h3>

            <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm flex flex-col gap-4">
              {assignments.slice(0, 2).map((a) => (
                <div key={a.id} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0 flex flex-col gap-1">
                  <span className="text-[9px] text-slate-400 font-bold uppercase">{a.courseName.split(' ')[0]}</span>
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{a.title}</h4>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mt-1">
                    <span>Due: {a.dueDate}</span>
                    <span className={`font-semibold ${
                      a.status === 'Pending' ? 'text-amber-600' : 'text-emerald-600'
                    }`}>{a.status}</span>
                  </div>
                </div>
              ))}
              <Link 
                to="/student/assignments"
                className="w-full text-center py-2 bg-slate-550 hover:bg-slate-100 border border-slate-150 text-slate-700 rounded text-xs font-bold uppercase tracking-wider transition-colors mt-2"
              >
                View All Tasks
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;
