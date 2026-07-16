import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, FileText, CalendarCheck, Award, User, ArrowLeft, GraduationCap } from 'lucide-react';

const StudentSidebar = () => {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/student/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'My Programs', path: '/student/my-courses', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Activity Logs', path: '/student/assignments', icon: <FileText className="w-4 h-4" /> },
    { name: 'Presence Logs', path: '/student/attendance', icon: <CalendarCheck className="w-4 h-4" /> },
    { name: 'Certificates', path: '/student/certificates', icon: <Award className="w-4 h-4" /> },
    { name: 'Profile Details', path: '/student/profile', icon: <User className="w-4 h-4" /> }
  ];

  return (
    <div className="w-64 bg-slate-900 text-slate-300 min-h-screen flex flex-col justify-between p-6 shrink-0 border-r border-slate-800">
      
      <div className="flex flex-col gap-8">
        
        {/* Portal Branding */}
        <Link to="/" className="flex items-center gap-2 group w-fit">
          <div className="w-8 h-8 rounded bg-violet-600 flex items-center justify-center text-white">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-sm font-bold text-white leading-tight">ParentPortal</span>
            <span className="text-[9px] text-slate-500 uppercase tracking-widest">Smart Kids</span>
          </div>
        </Link>

        {/* Sidebar Nav Links */}
        <div className="flex flex-col gap-2">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 py-2.5 px-3 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors ${
                  isActive 
                    ? 'bg-violet-600 text-white' 
                    : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </div>

      </div>

      {/* Return to website link */}
      <Link
        to="/"
        className="flex items-center gap-2 py-2.5 px-3 text-xs text-slate-400 hover:text-white border-t border-slate-800 pt-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Website
      </Link>

    </div>
  );
};

export default StudentSidebar;
