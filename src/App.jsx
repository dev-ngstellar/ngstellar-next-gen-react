import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
const FaqChatbot = lazy(() => import('./components/FaqChatbot.jsx'));
import { Helmet } from "react-helmet-async";

// Eagerly loaded (home is the first page seen)
import Home from './pages/Home.jsx';

// Lazy-loaded pages — only fetched when navigated to
const Capability = lazy(() => import('./pages/Capability.jsx'));
const Industry = lazy(() => import('./pages/Industry.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Careers = lazy(() => import('./pages/Careers.jsx'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const BrandingService = lazy(() => import('./pages/BrandingService.jsx'));
const Consulting = lazy(() => import('./pages/Consulting.jsx'));
const Tech = lazy(() => import('./pages/Tech.jsx'));
const Templates = lazy(() => import('./pages/Templates/Templates.jsx'));
const TemplateDetails = lazy(() => import('./pages/Templates/TemplateDetails.jsx'));
const AdvisoryPage = lazy(() => import('./pages/AdvisoryPage.jsx'));


// Simple page-transition fallback
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        {/* Basic SEO */}
        <title>NG Stellar — Transformation & Sustainability Advisory</title>
        <meta
          name="description"
          content="NG Stellar is a premier transformation and sustainability advisory firm. Transform the business. Sustain the impact."
        />

        {/* Open Graph */}
        <meta property="og:title" content="NG Stellar — Transformation & Sustainability Advisory" />
        <meta
          property="og:description"
          content="NG Stellar is a premier transformation and sustainability advisory firm. Transform the business. Sustain the impact."
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
        <main className="w-full flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/capability" element={<Capability />} />
              <Route path="/industry" element={<Industry />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/templates/:slug" element={<TemplateDetails />} />

              <Route path="/about" element={<About />} />
              <Route path="/about/*" element={<AdvisoryPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/*" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/termsandconditions" element={<TermsAndConditions />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />

              {/* Service Sub-pages */}
              <Route path="/services/branding" element={<BrandingService />} />
              <Route path="/services/consulting" element={<Consulting />} />
              <Route path="/services/tech" element={<Tech />} />

              {/* New Transformation & Sustainability Advisory Routes */}
              <Route path="/transformation" element={<AdvisoryPage />} />
              <Route path="/transformation/*" element={<AdvisoryPage />} />
              <Route path="/sustainability" element={<AdvisoryPage />} />
              <Route path="/sustainability/*" element={<AdvisoryPage />} />
              <Route path="/transformation-health-check" element={<AdvisoryPage />} />
              <Route path="/transformation-health-check/*" element={<AdvisoryPage />} />
              <Route path="/capabilities" element={<AdvisoryPage />} />
              <Route path="/capabilities/*" element={<AdvisoryPage />} />
              <Route path="/approach" element={<AdvisoryPage />} />
              <Route path="/approach/*" element={<AdvisoryPage />} />
              <Route path="/ecosystem" element={<AdvisoryPage />} />
              <Route path="/ecosystem/*" element={<AdvisoryPage />} />
              <Route path="/transformation-stories" element={<AdvisoryPage />} />
              <Route path="/transformation-stories/*" element={<AdvisoryPage />} />
              <Route path="/insights" element={<AdvisoryPage />} />
              <Route path="/insights/*" element={<AdvisoryPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      <Suspense fallback={null}>
        <FaqChatbot />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;


