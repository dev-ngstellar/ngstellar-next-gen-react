import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Public Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Faculty from './pages/Faculty';
import Admissions from './pages/Admissions';
import Events from './pages/Events';
import Contact from './pages/Contact';

// Student Portal Pages
import StudentLogin from './pages/student/StudentLogin';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentCourses from './pages/student/StudentCourses';
import StudentAssignments from './pages/student/StudentAssignments';
import StudentAttendance from './pages/student/StudentAttendance';
import StudentCertificates from './pages/student/StudentCertificates';
import StudentProfile from './pages/student/StudentProfile';

// Admin Panel Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminStudents from './pages/admin/AdminStudents';
import AdminCourses from './pages/admin/AdminCourses';
import AdminFaculty from './pages/admin/AdminFaculty';
import AdminAdmissions from './pages/admin/AdminAdmissions';
import AdminEvents from './pages/admin/AdminEvents';
import AdminReports from './pages/admin/AdminReports';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
        
        {/* Public Nav bar, automatically hidden on Portal/Admin dashboard routes */}
        <Navbar />

        {/* Core Main Viewport */}
        <main className="flex-grow">
          <Routes>
            {/* Public Routing */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />

            {/* Student Portal Routing */}
            <Route path="/student/login" element={<StudentLogin />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/my-courses" element={<StudentCourses />} />
            <Route path="/student/assignments" element={<StudentAssignments />} />
            <Route path="/student/attendance" element={<StudentAttendance />} />
            <Route path="/student/certificates" element={<StudentCertificates />} />
            <Route path="/student/profile" element={<StudentProfile />} />

            {/* Admin Backoffice Routing */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/students" element={<AdminStudents />} />
            <Route path="/admin/courses" element={<AdminCourses />} />
            <Route path="/admin/faculty" element={<AdminFaculty />} />
            <Route path="/admin/admissions" element={<AdminAdmissions />} />
            <Route path="/admin/events" element={<AdminEvents />} />
            <Route path="/admin/reports" element={<AdminReports />} />
          </Routes>
        </main>

        {/* Public Footer, automatically hidden on Portal/Admin dashboard routes */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
