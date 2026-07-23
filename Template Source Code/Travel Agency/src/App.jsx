import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BookingModal from './components/common/BookingModal';
import LightboxModal from './components/common/LightboxModal';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import TourPackages from './pages/TourPackages';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingPackage, setSelectedBookingPackage] = useState(null);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedLightboxItem, setSelectedLightboxItem] = useState(null);

  const handleOpenBooking = (pkg = null) => {
    setSelectedBookingPackage(pkg);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedBookingPackage(null);
  };

  const handleOpenLightbox = (item) => {
    setSelectedLightboxItem(item);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    setSelectedLightboxItem(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background text-text-main font-body selection:bg-primary/30 selection:text-primary transition-colors duration-300">
        
        {/* Navbar */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenBooking={handleOpenBooking}
                  onOpenLightbox={handleOpenLightbox}
                />
              }
            />
            <Route path="/destinations" element={<Destinations />} />
            <Route
              path="/packages"
              element={<TourPackages onOpenBooking={handleOpenBooking} />}
            />
            <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<Contact onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Dialog Modals */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={handleCloseBooking}
          selectedPackage={selectedBookingPackage}
        />

        <LightboxModal
          isOpen={lightboxOpen}
          onClose={handleCloseLightbox}
          item={selectedLightboxItem}
        />

      </div>
    </BrowserRouter>
  );
}
