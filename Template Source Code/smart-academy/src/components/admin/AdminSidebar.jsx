import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, UserCheck, Inbox, Calendar, BarChart3, ArrowLeft, GraduationCap } from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'Students Log', path: '/admin/students', icon: <Users className="w-4 h-4" /> },
    { name: 'Programs Config', path: '/admin/courses', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Teachers Registry', path: '/admin/faculty', icon: <UserCheck className="w-4 h-4" /> },
    { name: 'Admissions Influx', path: '/admin/admissions', icon: <Inbox className="w-4 h-4" /> },
    { name: 'Events Planner', path: '/admin/events', icon: <Calendar className="w-4 h-4" /> },
    { name: 'System Reports', path: '/admin/reports', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  return (
    <div className="w-64 bg-slate-950 text-slate-300 min-h-screen flex flex-col justify-between p-6 shrink-0 border-r border-slate-900">
      
      <div className="flex flex-col gap-8">
        
        {/* Admin Branding */}
        <Link to="/" className="flex items-center gap-2 group w-fit">
          <div className="w-8 h-8 rounded bg-violet-600 flex items-center justify-center text-white shadow shadow-violet-500/10">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-sm font-bold text-white leading-tight">AdminPanel</span>
            <span className="text-[9px] text-violet-400 uppercase tracking-widest">Smart Kids</span>
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
                    ? 'bg-violet-600 text-white shadow shadow-violet-600/10' 
                    : 'hover:bg-slate-900 hover:text-white'
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
        className="flex items-center gap-2 py-2.5 px-3 text-xs text-slate-500 hover:text-white border-t border-slate-900 pt-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Website
      </Link>

    </div>
  );
};

export default AdminSidebar;
