import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Overview from './pages/Overview';
import MasterPlan from './pages/MasterPlan';
import FloorPlans from './pages/FloorPlans';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#020617] text-[#F8FAFC] font-sans antialiased overflow-x-hidden">
        {/* Sticky Luxury Header */}
        <Header />

        {/* Main Content Areas */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/master-plan" element={<MasterPlan />} />
            <Route path="/floor-plans" element={<FloorPlans />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Premium Dark Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
