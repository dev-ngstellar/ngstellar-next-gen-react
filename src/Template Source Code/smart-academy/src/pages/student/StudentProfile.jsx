import React, { useState, useEffect } from 'react';
import StudentSidebar from '../../components/portal/StudentSidebar';
import { studentDashboardData } from '../../data/mockData';
import { User, Mail, Shield, Save, Check } from 'lucide-react';

const StudentProfile = () => {
  const { profile } = studentDashboardData;

  const [phone, setPhone] = useState('+1 (555) 012-9844');
  const [address, setAddress] = useState('124 University Way, Apt 3B, San Francisco, CA');
  const [marketingCheck, setMarketingCheck] = useState(true);
  
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setLoading(true);
    setSaved(false);

    setTimeout(() => {
      setLoading(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1200);
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
            My Parent Profile
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form settings details (8 Columns) */}
          <div className="lg:col-span-8 bg-white border border-slate-100 p-6 md:p-8 rounded-xl shadow-sm">
            <h3 className="font-heading text-base font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">
              Personal Information Settings
            </h3>

            {saved && (
              <div className="p-3 bg-emerald-50 border border-emerald-150 rounded text-emerald-600 text-xs font-light mb-6 flex items-center gap-1.5 animate-[scale-up_0.3s_ease-out_forwards]">
                <Check className="w-4 h-4" />
                Profile credentials updated successfully.
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5 opacity-60">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Parent Name (Read-Only)</label>
                  <input
                    type="text"
                    disabled
                    value={profile.name}
                    className="w-full border border-slate-200 bg-slate-100 py-3 px-4 focus:outline-none text-xs font-light rounded cursor-not-allowed text-slate-500"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5 opacity-60">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Email Address (Read-Only)</label>
                  <input
                    type="email"
                    disabled
                    value={profile.email}
                    className="w-full border border-slate-200 bg-slate-100 py-3 px-4 focus:outline-none text-xs font-light rounded cursor-not-allowed text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5 opacity-60">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Child ID (Read-Only)</label>
                  <input
                    type="text"
                    disabled
                    value={profile.studentId}
                    className="w-full border border-slate-200 bg-slate-100 py-3 px-4 focus:outline-none text-xs font-light rounded cursor-not-allowed text-slate-500"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5 opacity-60">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Active Program (Read-Only)</label>
                  <input
                    type="text"
                    disabled
                    value={profile.major}
                    className="w-full border border-slate-200 bg-slate-100 py-3 px-4 focus:outline-none text-xs font-light rounded cursor-not-allowed text-slate-500"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Home Physical Address</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Notification Toggles</label>
                <label className="flex items-center gap-2 text-xs font-light text-slate-650 mt-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketingCheck}
                    onChange={(e) => setMarketingCheck(e.target.checked)}
                    className="text-violet-600 focus:ring-violet-500 rounded"
                  />
                  Receive automated play activity reports and syllabus update alerts via registered parent email.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-violet-600 hover:bg-violet-750 disabled:bg-violet-555/50 text-white py-3.5 rounded text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
              >
                <Save className="w-4 h-4" />
                {loading ? 'Saving Changes...' : 'Save Profile Settings'}
              </button>

            </form>
          </div>

          {/* Quick instructions / info panels (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="p-6 bg-slate-900 text-white rounded-xl shadow flex gap-4 items-start">
              <Shield className="w-8 h-8 text-violet-500 shrink-0" />
              <div>
                <h4 className="font-heading text-xs font-bold text-white mb-1">Institutional Records</h4>
                <p className="text-slate-400 text-[10px] font-light leading-relaxed">
                  Name, Email, Child ID, and Program details are managed by the admissions desk and are read-only to protect student academic identities.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentProfile;
