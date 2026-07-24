import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { FloatingSupportWidget } from './components/FloatingSupportWidget';

import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { EventDetail } from './pages/EventDetail';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { AdminPage } from './pages/AdminPage';

// Wrapper component to conditionally render Public Header & Footer
const MainContent = () => {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--bg-primary)] text-[var(--text-body)]">
      <CommandPalette isOpen={isCommandOpen} onClose={setIsCommandOpen} />
      
      {!isAdmin && <Header onOpenCommand={setIsCommandOpen} />}

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </div>

      {!isAdmin && <Footer />}
      {!isAdmin && <FloatingSupportWidget />}
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
