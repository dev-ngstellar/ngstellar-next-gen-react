import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuickTrackModal from './components/QuickTrackModal';
import QuoteModal from './components/QuoteModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tracking from './pages/Tracking';
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
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-surface-bg text-slate-100 flex flex-col justify-between selection:bg-brand-500 selection:text-white">
          <Navbar
            onOpenTrackModal={() => setIsTrackModalOpen(true)}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />

          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    onOpenTrackModal={() => setIsTrackModalOpen(true)}
                    onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                  />
                }
              />
              <Route
                path="/about"
                element={<About onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />}
              />
              <Route
                path="/services"
                element={<Services onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />}
              />
              <Route path="/tracking" element={<Tracking />} />
              <Route
                path="/contact"
                element={<Contact />}
              />
            </Routes>
          </main>

          <Footer />

          {/* Global Modals */}
          <QuickTrackModal
            isOpen={isTrackModalOpen}
            onClose={() => setIsTrackModalOpen(false)}
          />

          <QuoteModal
            isOpen={isQuoteModalOpen}
            onClose={() => setIsQuoteModalOpen(false)}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}
