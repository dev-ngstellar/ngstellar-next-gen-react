import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SpecialtyProvider } from './context/SpecialtyContext';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/common/ScrollToTop';
import './index.css';

function App() {
  return (
    <SpecialtyProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </SpecialtyProvider>
  );
}


export default App;
