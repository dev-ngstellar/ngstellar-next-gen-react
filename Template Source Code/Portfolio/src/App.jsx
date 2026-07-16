import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioProvider } from './context/PortfolioContext';
import { router } from './routes';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <PortfolioProvider>
          <RouterProvider router={router} />
        </PortfolioProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
