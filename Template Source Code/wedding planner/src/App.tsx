import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { injectThemeVariables } from './config/siteConfig';

export const App: React.FC = () => {
  useEffect(() => {
    // Inject dynamic theme variables into DOM root
    injectThemeVariables();
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
