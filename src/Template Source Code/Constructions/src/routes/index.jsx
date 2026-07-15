import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index.jsx';
import About from '../pages/About/index.jsx';
import Services from '../pages/Services/index.jsx';
import Projects from '../pages/Projects/index.jsx';
import ProjectDetails from '../pages/ProjectDetails/index.jsx';
import Team from '../pages/Team/index.jsx';
import Careers from '../pages/Careers/index.jsx';
import Contact from '../pages/Contact/index.jsx';
import NotFound from '../pages/NotFound/index.jsx';

const AppRoutes = ({ onOpenQuote }) => {
  return (
    <Routes>
      <Route path="/" element={<Home onOpenQuote={onOpenQuote} />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/team" element={<Team />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
