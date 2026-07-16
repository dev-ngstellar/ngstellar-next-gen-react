import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SpecialtySwitcher from '../components/layout/SpecialtySwitcher';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-light">
      {/* Sticky transparent custom header navigation */}
      <Navbar />

      {/* Main page content insertion area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Rich footer layout */}
      <Footer />

      {/* Demo Customizer / Specialty switcher panel control */}
      <SpecialtySwitcher />
    </div>
  );
};

export default MainLayout;
