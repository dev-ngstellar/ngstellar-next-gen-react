import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/public/Header';
import { Footer } from './components/public/Footer';
import { CartDrawer } from './components/public/CartDrawer';
import { CommandPalette } from './components/public/CommandPalette';
import { QRMenuGenerator } from './components/public/QRMenuGenerator';

// Public Pages
import { Home } from './pages/public/Home';
import { Menu } from './pages/public/Menu';
import { FoodDetails } from './pages/public/FoodDetails';
import { About } from './pages/public/About';
import { Contact } from './pages/public/Contact';
import { Offers } from './pages/public/Offers';
import { OrderTracking } from './pages/public/OrderTracking';

// Dashboards
import { CustomerDashboard } from './pages/dashboards/CustomerDashboard';
import { AdminDashboard } from './pages/dashboards/AdminDashboard';
import { KitchenDashboard } from './pages/dashboards/KitchenDashboard';
import { DeliveryDashboard } from './pages/dashboards/DeliveryDashboard';

const MainContent = () => {
  const { currentView } = useApp();

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'menu':
        return <Menu />;
      case 'food-detail':
        return <FoodDetails />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'offers':
        return <Offers />;
      case 'order-tracking':
        return <OrderTracking />;
      case 'customer-dashboard':
        return <CustomerDashboard />;
      case 'admin-dashboard':
        return <AdminDashboard />;
      case 'kitchen-dashboard':
        return <KitchenDashboard />;
      case 'delivery-dashboard':
        return <DeliveryDashboard />;
      case 'qr-menu':
        return <QRMenuGenerator />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-amber-500 selection:text-stone-950">
      <div>
        <Header />
        <main>{renderView()}</main>
      </div>
      <Footer />
      <CartDrawer />
      <CommandPalette />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
