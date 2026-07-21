import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const FrontendLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden aurora-bg">
      {/* Mesh Gradient Overlays for luxury feel */}
      <div className="fixed inset-0 pointer-events-none mix-blend-soft-light opacity-50 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-primary-500)] via-transparent to-transparent"></div>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default FrontendLayout;
