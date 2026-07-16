import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, Lock, Mail, ArrowLeft } from 'lucide-react';

const StudentLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('parent@smartacademy.com');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (email === 'parent@smartacademy.com' && password === 'password') {
        setLoading(false);
        // Save simulated login status
        localStorage.setItem('student_logged_in', 'true');
        navigate('/student/dashboard');
      } else {
        setLoading(false);
        setError('Invalid parent email or passcode credential.');
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      
      {/* Return to website absolute top-left */}
      <Link 
        to="/"
        className="absolute top-6 left-6 inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-violet-600 uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Home
      </Link>

      <div className="bg-white border border-slate-100 max-w-md w-full p-8 rounded-2xl shadow-md">
        
        {/* Brand */}
        <div className="flex flex-col items-center gap-2 mb-8 text-center">
          <div className="w-10 h-10 rounded-lg bg-violet-655 flex items-center justify-center text-white shadow shadow-violet-500/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="font-heading text-lg font-bold text-slate-900 mt-2">Parent Portal</h2>
          <p className="text-slate-400 text-xs font-light">Access your child's classroom syllabus, activity logs, and grades.</p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-150 rounded text-red-650 text-xs font-light mb-5">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-violet-500" />
              Parent Registered Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="parent@smartacademy.com"
              className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-violet-500" />
              Portal Passcode
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
            />
          </div>

          <div className="flex justify-between items-center text-[11px] text-slate-400 mt-1">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" defaultChecked className="text-violet-655 focus:ring-violet-500" />
              Remember credentials
            </label>
            <a href="#" className="hover:text-violet-655 transition-colors">Forgot passcode?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-violet-500/50 text-white py-3.5 rounded-xl text-xs font-semibold tracking-[0.25em] uppercase transition-colors flex items-center justify-center gap-1.5 mt-2"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>

          {/* Test credentials helper */}
          <div className="p-3 bg-slate-50 border border-slate-200/60 rounded text-[10px] text-slate-400 text-center font-light leading-relaxed mt-2">
            <span className="font-semibold text-slate-600 block mb-0.5">Demo Account Credentials:</span>
            Email: <span className="font-mono text-slate-500">parent@smartacademy.com</span> &nbsp;|&nbsp; Passcode: <span className="font-mono text-slate-500">password</span>
          </div>

        </form>

      </div>

    </div>
  );
};

export default StudentLogin;
