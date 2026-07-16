import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Lazy-loaded pages
const HomePage = lazy(() => import('../pages/Home/index.jsx'));
const PortfolioCategoriesPage = lazy(() => import('../pages/PortfolioCategories/index.jsx'));
const PortfolioPreviewPage = lazy(() => import('../pages/PortfolioPreview/index.jsx'));
const ThemePreviewPage = lazy(() => import('../pages/ThemePreview/index.jsx'));
const ContactPage = lazy(() => import('../pages/Contact/index.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFound/index.jsx'));

// Loading fallback
const PageLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)' }}>
    <div className="spinner" />
  </div>
);

const wrap = (Component) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: wrap(HomePage) },
      { path: 'portfolio', element: wrap(PortfolioCategoriesPage) },
      { path: 'portfolio/:industry', element: wrap(PortfolioPreviewPage) },
      { path: 'themes', element: wrap(ThemePreviewPage) },
      { path: 'contact', element: wrap(ContactPage) },
      { path: '*', element: wrap(NotFoundPage) },
    ],
  },
]);
