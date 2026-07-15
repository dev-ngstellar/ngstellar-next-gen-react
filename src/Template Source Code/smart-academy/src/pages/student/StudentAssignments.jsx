import React, { useState, useEffect } from 'react';
import StudentSidebar from '../../components/portal/StudentSidebar';
import { studentDashboardData } from '../../data/mockData';
import { FileText, Calendar, ShieldCheck, X, Check, ArrowRight } from 'lucide-react';

const StudentAssignments = () => {
  const [tasks, setTasks] = useState([]);
  const [activeSubmit, setActiveSubmit] = useState(null);
  
  // Submit modal inputs
  const [submissionUrl, setSubmissionUrl] = useState('');
  const [comments, setComments] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTasks(studentDashboardData.assignments);
  }, []);

  const handleOpenSubmit = (task) => {
    setActiveSubmit(task);
    setSubmissionUrl('');
    setComments('');
    setSubmitSuccess(false);
  };

  const handleCloseSubmit = () => {
    setActiveSubmit(null);
  };

  const handleExecuteSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // Update local state in real-time
      const updatedTasks = tasks.map((t) => {
        if (t.id === activeSubmit.id) {
          return { ...t, status: "Submitted & Pending Review", grade: "Pending Evaluation" };
        }
        return t;
      });
      setTasks(updatedTasks);

      setLoading(false);
      setSubmitSuccess(true);
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
            My Program Activity Logs
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          {tasks.map((task) => (
            <div 
              key={task.id}
              className="bg-white border border-slate-100 p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-center"
            >
              <div className="flex gap-4 items-start flex-grow">
                <div className="w-10 h-10 rounded bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-5 h-5" />
                </div>
                
                <div>
                  <span className="text-[9px] text-violet-600 font-bold uppercase tracking-wider block mb-1">
                    {task.courseName}
                  </span>
                  
                  <h3 className="font-heading text-sm font-bold text-slate-900 mb-2">
                    {task.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400 font-light">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Due Date: {task.dueDate}
                    </span>
                    <span>Max Points: {task.maxGrade}</span>
                  </div>
                </div>
              </div>

              {/* Status & Action Block */}
              <div className="flex items-center gap-6 shrink-0 w-full md:w-auto justify-between border-t border-slate-50 pt-4 md:border-0 md:pt-0">
                <div className="flex flex-col text-right items-start md:items-end">
                  <span className="text-[9px] text-slate-400 uppercase font-semibold">Evaluation Status</span>
                  <span className={`text-xs font-bold ${
                    task.status === 'Pending' ? 'text-amber-600' : 'text-emerald-600'
                  }`}>
                    {task.status}
                  </span>
                  {task.grade && (
                    <span className="text-[10px] text-slate-400 mt-0.5">Evaluation: {task.grade}</span>
                  )}
                </div>

                {task.status === 'Pending' && (
                  <button
                    onClick={() => handleOpenSubmit(task)}
                    className="px-5 py-2.5 bg-violet-600 hover:bg-violet-750 text-white rounded text-xs font-semibold tracking-wider uppercase transition-colors shadow shadow-violet-600/10 focus:outline-none"
                  >
                    Submit Activity Log
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Submit Task Dialog Overlay */}
      {activeSubmit && (
        <div 
          onClick={handleCloseSubmit}
          className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-6 backdrop-blur-sm animate-[fade-in_0.3s_ease-out_forwards]"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-slate-200 text-slate-800 max-w-lg w-full p-8 relative shadow-2xl rounded-2xl animate-[scale-up_0.4s_ease-out_forwards]"
          >
            <button 
              onClick={handleCloseSubmit}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {submitSuccess ? (
              <div className="text-center py-6 flex flex-col items-center gap-4 animate-[scale-up_0.3s_ease-out_forwards]">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="font-heading text-lg font-bold text-slate-900">Activity Log Uploaded</h4>
                <p className="text-slate-550 text-xs font-light max-w-xs leading-relaxed">
                  Your submission has been logged. The program lead teacher will review this activity log details during evaluation week.
                </p>
                <button
                  onClick={handleCloseSubmit}
                  className="mt-4 w-full bg-slate-900 hover:bg-violet-600 text-white py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-colors rounded-lg"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleExecuteSubmit} className="flex flex-col gap-6">
                <div>
                  <span className="text-[9px] text-violet-600 font-bold uppercase tracking-wider block mb-1">
                    {activeSubmit.courseName}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-slate-900 leading-tight">
                    Submit: {activeSubmit.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Activity Photos / Cloud Document Link</label>
                  <input
                    type="url"
                    required
                    value={submissionUrl}
                    onChange={(e) => setSubmissionUrl(e.target.value)}
                    placeholder="https://drive.google.com/your-kids-activity-share-url"
                    className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Submission Comments</label>
                  <textarea
                    rows={4}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Provide details regarding child activity results, notes or implementation feedback..."
                    className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-violet-600 hover:bg-violet-750 disabled:bg-violet-500/50 text-white py-3.5 rounded text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1"
                >
                  {loading ? 'Transmitting Data...' : 'Submit Log'}
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default StudentAssignments;
