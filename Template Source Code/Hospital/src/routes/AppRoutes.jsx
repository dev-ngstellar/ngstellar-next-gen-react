import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Departments from '../pages/Departments';
import Doctors from '../pages/Doctors';
import Treatments from '../pages/Treatments';
import Facilities from '../pages/Facilities';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="departments" element={<Departments />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="treatments" element={<Treatments />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        {/* Fallback redirect */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
