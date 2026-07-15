import React, { useState, useEffect } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { facultyData } from '../../data/mockData';
import { Search, UserPlus, Trash2, X } from 'lucide-react';

const AdminFaculty = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [search, setSearch] = useState('');
  
  // Modal states
  const [openAdd, setOpenAdd] = useState(false);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newCourse, setNewCourse] = useState('');
  const [newBio, setNewBio] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setFacultyList(facultyData);
  }, []);

  const handleDelete = (id) => {
    setFacultyList(facultyList.filter(f => f.id !== id));
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
    setNewName('');
    setNewRole('');
    setNewCourse('');
    setNewBio('');
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleSaveFaculty = (e) => {
    e.preventDefault();
    setLoading(true);

    const newId = facultyList.length + 1;
    const newRecord = {
      id: newId,
      name: newName,
      role: newRole,
      coursesTaught: newCourse,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&h=350&q=80",
      bio: newBio
    };

    setTimeout(() => {
      setFacultyList([...facultyList, newRecord]);
      setLoading(false);
      setOpenAdd(false);
    }, 1000);
  };

  const filteredFaculty = facultyList.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase()) ||
    f.role.toLowerCase().includes(search.toLowerCase())
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
              Teachers & Staff Directory
            </h1>
          </div>
          
          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-violet-600 hover:bg-violet-750 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow shadow-violet-600/10 focus:outline-none"
          >
            <UserPlus className="w-4 h-4" />
            Add Teacher Member
          </button>
        </div>

        {/* Search controls */}
        <div className="mb-6 max-w-sm relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search teachers registry..."
            className="w-full border border-slate-200 focus:border-violet-500 bg-white py-2.5 pl-10 pr-4 focus:outline-none text-xs font-light rounded transition-colors"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Faculty Table */}
        <div className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 font-bold uppercase text-[9px] tracking-wider">
                  <th className="py-3 px-4">Teacher Member</th>
                  <th className="py-3 px-4">Program Role</th>
                  <th className="py-3 px-4">Active Playgroup</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-550 font-light">
                {filteredFaculty.map((f) => (
                  <tr key={f.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-slate-800">{f.name}</td>
                    <td className="py-4 px-4 text-violet-600 font-medium">{f.role}</td>
                    <td className="py-4 px-4">{f.coursesTaught}</td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => handleDelete(f.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded transition-colors"
                        title="Delete Teacher Record"
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

      {/* Add Faculty modal */}
      {openAdd && (
        <div 
          onClick={handleCloseAdd}
          className="fixed inset-0 z-50 bg-slate-950/80 flex items-center justify-center p-6 backdrop-blur-sm animate-[fade-in_0.3s_ease-out_forwards]"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-slate-200 text-slate-855 max-w-md w-full p-8 relative shadow-2xl rounded-2xl animate-[scale-up_0.4s_ease-out_forwards]"
          >
            <button 
              onClick={handleCloseAdd}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-650 flex items-center justify-center transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <form onSubmit={handleSaveFaculty} className="flex flex-col gap-5">
              <div>
                <h3 className="font-heading text-lg font-bold text-slate-900 leading-tight">
                  Add Teacher Staff Record
                </h3>
                <p className="text-slate-400 text-xs font-light">Input staff qualifications to create a teacher registry profile.</p>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Staff Full Name</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Miss Sarah Jenkins"
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Program Role</label>
                <input
                  type="text"
                  required
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  placeholder="Kindergarten Teacher"
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Active Playgroup</label>
                <input
                  type="text"
                  required
                  value={newCourse}
                  onChange={(e) => setNewCourse(e.target.value)}
                  placeholder="STEM & Nature Discovery"
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-wider text-slate-400 uppercase font-bold">Brief Professional Biography</label>
                <textarea
                  rows={3}
                  required
                  value={newBio}
                  onChange={(e) => setNewBio(e.target.value)}
                  placeholder="Summarize child education background or playgroup activities experience..."
                  className="w-full border border-slate-200 focus:border-violet-500 bg-slate-50/50 py-3 px-4 focus:outline-none text-xs font-light rounded transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-violet-600 hover:bg-violet-750 disabled:bg-violet-550/50 text-white py-3.5 rounded text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1 mt-2"
              >
                {loading ? 'Logging Record...' : 'Record Teacher'}
              </button>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminFaculty;
