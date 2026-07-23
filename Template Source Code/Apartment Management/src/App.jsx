import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthRoleProvider } from './context/AuthRoleContext';

// Layouts
import { Navbar } from './components/ui/Navbar';
import { Sidebar } from './components/ui/Sidebar';
import { Header } from './components/ui/Header';

// Public Pages
import { Home } from './pages/public/Home';
import { About } from './pages/public/About';
import { Amenities } from './pages/public/Amenities';
import { Gallery } from './pages/public/Gallery';
import { Contact } from './pages/public/Contact';

// Dashboard CMS Modules
import { DashboardOverview } from './pages/dashboard/DashboardOverview';
import { ApartmentManagement } from './pages/dashboard/ApartmentManagement';
import { ResidentManagement } from './pages/dashboard/ResidentManagement';
import { StaffManagement } from './pages/dashboard/StaffManagement';
import { VisitorManagement } from './pages/dashboard/VisitorManagement';
import { MaintenanceBilling } from './pages/dashboard/MaintenanceBilling';
import { ComplaintManagement } from './pages/dashboard/ComplaintManagement';
import { AmenityBookingModule } from './pages/dashboard/AmenityBookingModule';
import { ParkingManagement } from './pages/dashboard/ParkingManagement';
import { ParcelManagement } from './pages/dashboard/ParcelManagement';
import { SecurityGateConsole } from './pages/dashboard/SecurityGateConsole';
import { NoticeBoardModule } from './pages/dashboard/NoticeBoardModule';
import { EventManagement } from './pages/dashboard/EventManagement';
import { DocumentManagement } from './pages/dashboard/DocumentManagement';
import { ReportsAnalytics } from './pages/dashboard/ReportsAnalytics';
import { SettingsModule } from './pages/dashboard/SettingsModule';

// Public Site Layout Wrapper
const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="glass-card border-t border-slate-200 dark:border-slate-800 py-10 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-extrabold text-slate-900 dark:text-white">SkyNest Luxury Residences</span> © 2026. All Rights Reserved.
          </div>
          <div>
            Powered by <strong className="theme-accent-text">NG Stellar Growth CMS Platform</strong>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Dashboard CMS Portal Layout Wrapper
const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <AuthRoleProvider>
        <Router>
          <Routes>
            
            {/* Public Website Routes */}
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="amenities" element={<Amenities />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
            </Route>

            {/* CMS Portal SaaS Routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardOverview />} />
              <Route path="apartments" element={<ApartmentManagement />} />
              <Route path="residents" element={<ResidentManagement />} />
              <Route path="staff" element={<StaffManagement />} />
              <Route path="visitors" element={<VisitorManagement />} />
              <Route path="billing" element={<MaintenanceBilling />} />
              <Route path="complaints" element={<ComplaintManagement />} />
              <Route path="amenities" element={<AmenityBookingModule />} />
              <Route path="parking" element={<ParkingManagement />} />
              <Route path="parcels" element={<ParcelManagement />} />
              <Route path="security-gate" element={<SecurityGateConsole />} />
              <Route path="notices" element={<NoticeBoardModule />} />
              <Route path="events" element={<EventManagement />} />
              <Route path="documents" element={<DocumentManagement />} />
              <Route path="reports" element={<ReportsAnalytics />} />
              <Route path="settings" element={<SettingsModule />} />
            </Route>

          </Routes>
        </Router>
      </AuthRoleProvider>
    </ThemeProvider>
  );
}

export default App;
