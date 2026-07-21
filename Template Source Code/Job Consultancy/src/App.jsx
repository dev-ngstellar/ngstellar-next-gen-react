import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import FrontendLayout from './components/layout/FrontendLayout';

import Home from './pages/Home';
import Employers from './pages/Employers';
import Jobs from './pages/Jobs';
import Candidates from './pages/Candidates';
import Pricing from './pages/Pricing';

const About = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl font-bold">About Us</h1></div>;
const JobDetails = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl font-bold">Job Details</h1></div>;
const Services = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl font-bold">Our Services</h1></div>;
const SuccessStories = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl font-bold">Success Stories</h1></div>;
const Blog = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl font-bold">Blog</h1></div>;
const BlogDetails = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl font-bold">Blog Details</h1></div>;
const FAQ = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl font-bold">FAQ</h1></div>;
const Contact = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl font-bold">Contact</h1></div>;
const Login = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl font-bold">Login</h1></div>;
const Register = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl font-bold">Register</h1></div>;

import AdminLayout from './components/layout/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Frontend Routes */}
        <Route element={<FrontendLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/services" element={<Services />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Portal Nested Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/jobs" element={<AdminDashboard />} />
          <Route path="/admin/candidates" element={<AdminDashboard />} />
          <Route path="/admin/employers" element={<AdminDashboard />} />
          <Route path="/admin/applications" element={<AdminDashboard />} />
          <Route path="/admin/analytics" element={<AdminDashboard />} />
          <Route path="/admin/settings" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
