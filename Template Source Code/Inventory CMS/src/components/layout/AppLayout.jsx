import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import Breadcrumb from './Breadcrumb';
import ProductDrawer from './ProductDrawer';
import CommandPalette from './CommandPalette';
import ToastContainer from './ToastContainer';
import FloatingActionButton from './FloatingActionButton';
import SupportWidget from './SupportWidget';
import OnboardingTour from './OnboardingTour';
import { useInventory } from '../../context/InventoryContext';

export default function AppLayout() {
  const { isSidebarCollapsed } = useInventory();

  return (
    <div className="min-h-screen bg-bg-main text-txt-main flex flex-col font-sans antialiased selection:bg-accent-primary selection:text-white">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Top Navbar */}
      <TopNavbar />

      {/* Main Workspace */}
      <main
        className={`flex-1 transition-all duration-300 p-4 md:p-6 lg:p-8 ${
          isSidebarCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumb />
          <Outlet />
        </div>
      </main>

      {/* Global Drawers & Modals */}
      <ProductDrawer />
      <CommandPalette />
      <ToastContainer />
      <FloatingActionButton />
      <SupportWidget />
      <OnboardingTour />
    </div>
  );
}
