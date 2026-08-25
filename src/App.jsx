import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import FloatingContactButton from './components/FloatingContactButton.jsx';
import { Helmet } from 'react-helmet-async';

const FaqChatbot = lazy(() => import('./components/FaqChatbot.jsx'));

// Eagerly loaded
import Home from './pages/Home.jsx';

// Lazy-loaded pages
const TransformationHubPage = lazy(() => import('./pages/TransformationHubPage.jsx'));
const SustainabilityHubPage = lazy(() => import('./pages/SustainabilityHubPage.jsx'));
const HealthCheckHubPage = lazy(() => import('./pages/HealthCheckHubPage.jsx'));
const CapabilitiesHubPage = lazy(() => import('./pages/CapabilitiesHubPage.jsx'));
const ApproachHubPage = lazy(() => import('./pages/ApproachHubPage.jsx'));
const EcosystemHubPage = lazy(() => import('./pages/EcosystemHubPage.jsx'));
const StoriesHubPage = lazy(() => import('./pages/StoriesHubPage.jsx'));
const InsightsHubPage = lazy(() => import('./pages/InsightsHubPage.jsx'));
const ServiceAdvisoryPage = lazy(() => import('./pages/ServiceAdvisoryPage.jsx'));

const Templates = lazy(() => import('./pages/Templates/Templates.jsx'));
const TemplateDetails = lazy(() => import('./pages/Templates/TemplateDetails.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Careers = lazy(() => import('./pages/Careers.jsx'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));

// Legacy / Support pages
const Capability = lazy(() => import('./pages/Capability.jsx'));
const Industry = lazy(() => import('./pages/Industry.jsx'));
const BrandingService = lazy(() => import('./pages/BrandingService.jsx'));
const Consulting = lazy(() => import('./pages/Consulting.jsx'));
const Tech = lazy(() => import('./pages/Tech.jsx'));

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
        <title>NG Stellar — Transformation & Sustainability Advisory</title>
        <meta
          name="description"
          content="NG Stellar is a premier transformation and sustainability advisory firm. Transform the business. Sustain the impact."
        />
        <meta property="og:title" content="NG Stellar — Transformation & Sustainability Advisory" />
        <meta
          property="og:description"
          content="NG Stellar is a premier transformation and sustainability advisory firm. Transform the business. Sustain the impact."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ngstellar.com/" />
        <meta property="og:image" content="https://ngstellar.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <ScrollToTop />
      <div className="page-shell flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="w-full flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Transformation Routes */}
              <Route path="/transformation" element={<TransformationHubPage />} />
              <Route path="/transformation/business" element={<ServiceAdvisoryPage />} />
              <Route path="/transformation/people-organization" element={<ServiceAdvisoryPage />} />
              <Route path="/transformation/process-operations" element={<ServiceAdvisoryPage />} />
              <Route path="/transformation/technology" element={<ServiceAdvisoryPage />} />
              <Route path="/transformation/*" element={<TransformationHubPage />} />

              {/* Sustainability Routes */}
              <Route path="/sustainability" element={<SustainabilityHubPage />} />
              <Route path="/sustainability/economic" element={<ServiceAdvisoryPage />} />
              <Route path="/sustainability/people-social" element={<ServiceAdvisoryPage />} />
              <Route path="/sustainability/governance" element={<ServiceAdvisoryPage />} />
              <Route path="/sustainability/environmental" element={<ServiceAdvisoryPage />} />
              <Route path="/sustainability/business-resilience" element={<ServiceAdvisoryPage />} />
              <Route path="/sustainability/*" element={<SustainabilityHubPage />} />

              {/* Transformation Health Check */}
              <Route path="/transformation-health-check" element={<HealthCheckHubPage />} />
              <Route path="/transformation-health-check/*" element={<HealthCheckHubPage />} />

              {/* Capabilities Routes */}
              <Route path="/capabilities" element={<CapabilitiesHubPage />} />
              <Route path="/capabilities/*" element={<CapabilitiesHubPage />} />

              {/* Website Design Solutions & Templates */}
              <Route path="/templates" element={<Templates />} />
              <Route path="/templates/:slug" element={<TemplateDetails />} />
              <Route path="/capabilities/technology-transformation/website-design" element={<Templates />} />

              {/* Our Approach */}
              <Route path="/approach" element={<ApproachHubPage />} />
              <Route path="/approach/*" element={<ApproachHubPage />} />

              {/* Transformation Ecosystem */}
              <Route path="/ecosystem" element={<EcosystemHubPage />} />
              <Route path="/ecosystem/*" element={<EcosystemHubPage />} />

              {/* Transformation Stories */}
              <Route path="/transformation-stories" element={<StoriesHubPage />} />
              <Route path="/transformation-stories/*" element={<StoriesHubPage />} />

              {/* Insights */}
              <Route path="/insights" element={<InsightsHubPage />} />
              <Route path="/insights/*" element={<InsightsHubPage />} />

              {/* About NG Stellar */}
              <Route path="/about" element={<About />} />
              <Route path="/about/*" element={<About />} />

              {/* Contact & General Inquiries */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/*" element={<Contact />} />

              {/* Careers, Terms, Privacy */}
              <Route path="/careers" element={<Careers />} />
              <Route path="/termsandconditions" element={<TermsAndConditions />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />

              {/* Legacy / Additional Service Routes */}
              <Route path="/capability" element={<Capability />} />
              <Route path="/industry" element={<Industry />} />
              <Route path="/services/branding" element={<BrandingService />} />
              <Route path="/services/consulting" element={<Consulting />} />
              <Route path="/services/tech" element={<Tech />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      <FloatingContactButton />
      <Suspense fallback={null}>
        <FaqChatbot />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
