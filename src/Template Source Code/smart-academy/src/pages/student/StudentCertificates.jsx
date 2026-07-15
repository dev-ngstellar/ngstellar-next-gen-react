import React, { useState, useEffect } from 'react';
import StudentSidebar from '../../components/portal/StudentSidebar';
import { studentDashboardData } from '../../data/mockData';
import { Award, Download, ShieldCheck, X, CheckCircle2 } from 'lucide-react';

const StudentCertificates = () => {
  const { certificates } = studentDashboardData;
  const [activeDownload, setActiveDownload] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleTriggerDownload = (cert) => {
    setActiveDownload(cert);
    setDownloadProgress(0);
    
    // Simulate generation progress bar
    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      setDownloadProgress(current);
      if (current >= 100) {
        clearInterval(interval);
      }
    }, 200);
  };

  const handleCloseDownload = () => {
    setActiveDownload(null);
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
            My Earned Badges & Certificates
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white border border-slate-100 p-6 rounded-xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Award className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">ID: {cert.id}</span>
                </div>

                <h3 className="font-heading text-base font-bold text-slate-900 mb-1">
                  {cert.courseName}
                </h3>
                
                <div className="flex flex-col gap-1.5 text-xs text-slate-500 font-light mt-4 mb-6">
                  <div>Issued Date: <span className="font-semibold text-slate-700">{cert.issueDate}</span></div>
                  <div>Lead Teacher: <span className="font-semibold text-slate-700">{cert.instructor}</span></div>
                  <div>Graduation Grade: <span className="font-bold text-emerald-600">{cert.grade}</span></div>
                </div>
              </div>

              <button
                onClick={() => handleTriggerDownload(cert)}
                className="w-full bg-violet-600 hover:bg-violet-750 text-white py-2.5 rounded text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow shadow-violet-600/10 focus:outline-none"
              >
                <Download className="w-4 h-4" />
                Download PDF Badge
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Download Simulator Overlay */}
      {activeDownload && (
        <div 
          onClick={handleCloseDownload}
          className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-6 backdrop-blur-sm animate-[fade-in_0.3s_ease-out_forwards]"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-slate-200 text-slate-800 max-w-md w-full p-8 text-center relative shadow-2xl rounded-2xl animate-[scale-up_0.4s_ease-out_forwards]"
          >
            <button 
              onClick={handleCloseDownload}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-650 flex items-center justify-center transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {downloadProgress < 100 ? (
              <div className="py-6 flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center animate-spin">
                  <Download className="w-6 h-6" />
                </div>
                <h4 className="font-heading text-sm font-bold text-slate-900">Generating Secure PDF Stamp...</h4>
                
                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
                  <div 
                    className="h-full bg-violet-600 rounded-full transition-all duration-350"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="py-6 flex flex-col items-center gap-4 animate-[scale-up_0.3s_ease-out_forwards]">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="font-heading text-lg font-bold text-slate-900">Download Ready</h4>
                
                <div className="bg-slate-50 p-4 border border-slate-150 rounded text-left text-xs font-light flex flex-col gap-2.5 w-full">
                  <div className="flex justify-between border-b border-slate-200 pb-1.5 mb-1.5 font-bold text-[9px] uppercase tracking-wider text-slate-400">
                    <span>Credential Registry</span>
                    <span className="text-violet-600 font-extrabold">{activeDownload.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Recipient:</span>
                    <span className="font-semibold text-slate-800">Franklin Pierce</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Program Focus:</span>
                    <span className="font-semibold text-slate-800">{activeDownload.courseName}</span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 font-light leading-relaxed max-w-xs">
                  Your certificate stamp is cryptographically logged and valid for LinkedIn certification integration.
                </p>

                <button
                  onClick={handleCloseDownload}
                  className="w-full bg-slate-900 hover:bg-violet-600 text-white py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-colors rounded-lg mt-2"
                >
                  Close Window
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default StudentCertificates;
