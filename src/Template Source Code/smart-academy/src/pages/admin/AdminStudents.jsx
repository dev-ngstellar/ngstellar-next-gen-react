import React, { useState, useEffect } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { studentDashboardData } from '../../data/mockData';
import { Search, UserPlus, Trash2, X, Check } from 'lucide-react';

const AdminStudents = () => {
  const [studentsList, setStudentsList] = useState([]);
  const [search, setSearch] = useState('');
  
  // Modal states
  const [openAdd, setOpenAdd] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newMajor, setNewMajor] = useState('');
  const [newGpa, setNewGpa] = useState('3.80');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Seed database list
    setStudentsList([
      { id: "SA-2026-9831", name: studentDashboardData.profile.name, email: studentDashboardData.profile.email, major: studentDashboardData.profile.major, cgpa: studentDashboardData.profile.cgpa },
      { id: "SA-2026-4432", name: "Arthur Pendelton", email: "arthur.p@stripe.com", major: "Cloud Infrastructure", cgpa: "3.75" },
      { id: "SA-2026-1051", name: "Sarah Jenkins", email: "sarah.j@plaid.com", major: "Software Engineering", cgpa: "3.95" },
      { id: "SA-2026-8092", name: "Jonathan Vance", email: "jonathan@novartis.com", major: "Data Science", cgpa: "3.88" }
    ]);
  }, []);

  const handleDelete = (id) => {
    setStudentsList(studentsList.filter(s => s.id !== id));
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
    setNewName('');
    setNewEmail('');
    setNewMajor('');
    setNewGpa('3.80');
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleSaveStudent = (e) => {
    e.preventDefault();
    setLoading(true);

    const newStudentId = `SA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRecord = {
      id: newStudentId,
      name: newName,
      email: newEmail,
      major: newMajor || "General Studies",
      cgpa: newGpa
    };

    setTimeout(() => {
      setStudentsList([...studentsList, newRecord]);
      setLoading(false);
      setOpenAdd(false);
    }, 1000);
  };

  const filteredStudents = studentsList.filter((s) => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.major.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-slate-50 min-h-screen">
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Panel Content */}
      <div className="flex-grow p-8 md:p-10 lg:p-12 overflow-x-hidden pt-24 md:pt-12">
        
        {/* Header Title & Actions */}
        <div className="border-b border-slate-200/80 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-violet-600 font-bold">Admin Console</span>
            <h1 className="font-heading text-2xl font-extrabold text-slate-900 mt-1">
              Student Registry Logs
            </h1>
          </div>
          
          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-violet-600 hover:bg-violet-750 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow shadow-violet-600/10 focus:outline-none"
          >
            <UserPlus className="w-4 h-4" />
            Add Child Record
          </button>
        </div>

        {/* Search controls */}
        <div className="mb-6 max-w-sm relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search student by name or playgroup..."
            className="w-full border border-slate-200 focus:border-violet-500 bg-white py-2.5 pl-10 pr-4 focus:outline-none text-xs font-light rounded transition-colors"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Student Table */}
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px] tracking-wider">
                  <th className="py-3 px-4">Child ID</th>
                  <th className="py-3 px-4">Child Info</th>
                  <th className="py-3 px-4">Playgroup focus</th>
                  <th className="py-3 px-4">Grade Scale</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-550 font-light">
                {filteredStudents.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 font-mono font-medium text-slate-900">{s.id}</td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-slate-800 block">{s.name}</span>
                      <span className="text-[10px] text-slate-400 block">{s.email}</span>
                    </td>
                    <td className="py-4 px-4">{s.major}</td>
                    <td className="py-4 px-4 font-bold text-slate-900">{s.cgpa}</td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => handleDelete(s.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded transition-colors"
                        title="Delete Student"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Add Student modal */}
      {openAdd && (
        <div 
          onClick={handleCloseAdd}
          className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-6 backdrop-blur-sm animate-[fade-in_0.3s_ease-out_forwards]"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-slate-200 text-slate-800 max-w-md w-full p-8 relative shadow-2xl rounded-2xl animate-[scale-up_0.4s_ease-out_forwards]"
          >
            <button 
              onClick={handleCloseAdd}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-655 flex items-center justify-center transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <form onSubmit={handleSaveStudent} className="flex flex-col gap-5">
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900 leading-tight">
                  Add Student Record
                </h3>
                <p className="text-slate-400 text-xs font-light">Input enrollment metrics to record a student profile.</p>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Student Full Name</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Eleanor Vance"
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Email Address</label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="eleanor@company.com"
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Select Program Focus</label>
                <select
                  required
                  value={newMajor}
                  onChange={(e) => setNewMajor(e.target.value)}
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                >
                  <option value="">-- Choose Program --</option>
                  <option value="Preschool Playgroup">Preschool Playgroup</option>
                  <option value="Kindergarten Adventure">Kindergarten Adventure</option>
                  <option value="STEM & Nature Discovery">STEM & Nature Discovery</option>
                  <option value="Creative Arts & Music">Creative Arts & Music</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Initial Grade Scale (e.g. A, B, C)</label>
                <input
                  type="text"
                  required
                  value={newGpa}
                  onChange={(e) => setNewGpa(e.target.value)}
                  placeholder="A"
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-violet-600 hover:bg-violet-750 disabled:bg-violet-550/50 text-white py-3.5 rounded text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1 mt-2"
              >
                {loading ? 'Logging Student...' : 'Register Student'}
              </button>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminStudents;
