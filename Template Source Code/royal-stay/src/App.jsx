import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BookingProvider } from './hooks/useBooking';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-sans antialiased">
          {/* 1. Global Announcement Bar */}
          {/* <AnnouncementBar /> */}

          {/* 2. Global Sticky Header */}
          <Header />

          {/* 3. Main Route Shell */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/room/:id" element={<RoomDetails />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback path redirects to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* 4. Global Premium Footer */}
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
