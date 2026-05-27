import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// Pages
import Home from './pages/Home.jsx';
import Capability from './pages/Capability.jsx';
import Industry from './pages/Industry.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Careers from './pages/Careers.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

// Service Sub-pages
import BrandingService from './pages/BrandingService.jsx';
import Consulting from './pages/Consulting.jsx';
import Tech from './pages/Tech.jsx';
import FaqChatbot from './components/FaqChatbot.jsx';
import { Helmet } from "react-helmet-async";

function App() {
  return (  
    <BrowserRouter>
    <Helmet>
        {/* Basic SEO */}
        <title>NG Stellar - Software Solutions Company</title>
        <meta
          name="description"
          content="NG Stellar provides modern web and software development services."
        />

        {/* Open Graph */}
        <meta property="og:title" content="NG Stellar - Software Solutions Company" />
        <meta
          property="og:description"
          content="NG Stellar provides modern web and software development services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ngstellar.com/" />
        <meta
          property="og:image"
          content="https://ngstellar.com/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <ScrollToTop />
      <div className="page-shell flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="w-full md:pt-20 lg:pt-24 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/capability" element={<Capability />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />

            {/* Service Sub-pages */}
            <Route path="/services/branding" element={<BrandingService />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/tech" element={<Tech />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <FaqChatbot/>
    </BrowserRouter>
  );
}

export default App;

