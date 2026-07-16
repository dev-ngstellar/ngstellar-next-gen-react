import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { coursesData } from '../data/mockData';
import { Check, ShieldCheck } from 'lucide-react';

const Admissions = () => {
  const location = useLocation();

  // Inputs
  const [childName, setChildName] = useState('');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [grade, setGrade] = useState('Preschool');
  const [message, setMessage] = useState('');

  // Status
  const [loading, setLoading] = useState(false);
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (location.state && location.state.courseName) {
      setSelectedCourse(location.state.courseName);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const applicationId = `ADM-${Math.floor(10000 + Math.random() * 90000)}`;
    const newRequest = {
      id: applicationId,
      studentName: childName,
      parentName: parentName,
      email,
      phone,
      selectedCourse,
      grade,
      notes: message,
      date: new Date().toISOString().split('T')[0],
      status: "Pending Evaluation"
    };

    setTimeout(() => {
      // Append to localStorage queue to enable real-time admin sync!
      const currentQueue = JSON.parse(localStorage.getItem('smart_admissions_queue')) || [];
      localStorage.setItem('smart_admissions_queue', JSON.stringify([...currentQueue, newRequest]));

      setLoading(false);
      setReceipt(newRequest);

      // Clear
      setChildName('');
      setParentName('');
      setEmail('');
      setPhone('');
      setSelectedCourse('');
      setGrade('Preschool');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="animate-page-enter pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Form (8 Columns) */}
        <div className="lg:col-span-8 bg-white border border-slate-100 p-6 md:p-8 rounded-2xl shadow-sm">
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">
            Join Smart Academy
          </h2>
          <p className="text-slate-500 text-xs font-light mb-8">
            Complete your enrollment request. Our admissions counselors will audit your background data and contact you regarding placement and billing setup.
          </p>

          {receipt ? (
            <div className="p-8 text-center flex flex-col items-center gap-4 animate-[scale-up_0.4s_ease-out_forwards]">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="font-heading text-lg font-bold text-slate-900">Application Submitted</h4>
              <p className="text-slate-500 text-xs font-light max-w-sm leading-relaxed">
                Thank you. Your admission request is logged under verification ID <span className="font-bold text-violet-650">{receipt.id}</span>. You can inspect this application on the **Admin Panel &gt; Admissions** tab!
              </p>
              
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setReceipt(null)}
                  className="px-6 py-2.5 bg-slate-950 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors"
                >
                  Send Another Application
                </button>
                <Link
                  to="/admin/admissions"
                  className="px-6 py-2.5 bg-violet-600 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors"
                >
                  Check Admin Board
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Child Name</label>
                  <input
                    type="text"
                    required
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="Toby Jenkins"
                    className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Parent Name</label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Sarah Jenkins"
                    className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah.j@company.com"
                    className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Select Grade</label>
                  <select
                    required
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3.5 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                  >
                    <option value="Playgroup">Playgroup</option>
                    <option value="Preschool">Preschool</option>
                    <option value="Kindergarten">Kindergarten</option>
                    <option value="Primary School">Primary School</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Program Focus</label>
                  <select
                    required
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3.5 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                  >
                    <option value="">-- Select Play Program --</option>
                    {coursesData.map((c) => (
                      <option key={c.id} value={c.title}>{c.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Inquiry Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline details regarding child goals, prior playgroup cohorts, or sibling discounts..."
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-violet-600 hover:bg-violet-750 disabled:bg-violet-500/50 text-white py-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all shadow-lg shadow-violet-500/10 flex items-center justify-center gap-1.5"
              >
                {loading ? 'Transmitting Request...' : 'Apply For Admission'}
              </button>

            </form>
          )}
        </div>

        {/* Right Instructions (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col gap-4 shadow">
            <h3 className="font-heading text-sm font-bold uppercase pl-2 border-l-2 border-amber-500">
              Admissions Workflow
            </h3>
            <div className="flex flex-col gap-3 text-xs font-light text-slate-400 leading-relaxed">
              <div className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                <span>Submit child credentials, prior levels, and parent contacts.</span>
              </div>
              <div className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                <span>We evaluate classroom space capacities and age groups.</span>
              </div>
              <div className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                <span>Expect scheduling details and tuition bills in 12 hours.</span>
              </div>
            </div>
          </div>

          <div className="p-6 border border-slate-100 rounded-2xl shadow-sm bg-violet-50/10 flex gap-4 items-start">
            <ShieldCheck className="w-8 h-8 text-violet-600 shrink-0" />
            <div>
              <h4 className="font-heading text-xs font-bold text-slate-900 mb-1">Student Data Privacy</h4>
              <p className="text-slate-500 text-[11px] font-light leading-relaxed">
                Your academic evaluations and personal contacts are held under secure guidelines.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Admissions;
