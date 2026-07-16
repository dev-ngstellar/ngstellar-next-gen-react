import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/index.jsx';
import QuoteForm from './components/forms/QuoteForm';
import ScrollToTop from './components/common/ScrollToTop.jsx';

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen text-slate-600 bg-background transition-colors duration-300">
          {/* Header layout */}
          <Header onOpenQuote={() => setIsQuoteOpen(true)} />

          {/* Main page content area */}
          <main className="flex-grow">
            <AppRoutes onOpenQuote={() => setIsQuoteOpen(true)} />
          </main>

          {/* Footer layout */}
          <Footer />

          {/* Consultation Request Form Modal */}
          <QuoteForm isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
