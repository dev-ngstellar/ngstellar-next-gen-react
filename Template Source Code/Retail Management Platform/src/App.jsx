import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import NotificationCenter from './components/NotificationCenter';
import QuickViewModal from './components/QuickViewModal';
import BarcodeModal from './components/BarcodeModal';

// Customer Pages
import Home from './pages/customer/Home';
import Shop from './pages/customer/Shop';
import ProductDetails from './pages/customer/ProductDetails';
import Categories from './pages/customer/Categories';
import Offers from './pages/customer/Offers';
import Recipes from './pages/customer/Recipes';
import About from './pages/customer/About';
import Contact from './pages/customer/Contact';
import Cart from './pages/customer/Cart';
import Checkout from './pages/customer/Checkout';
import OrderTracking from './pages/customer/OrderTracking';

// Customer Dashboard
import CustomerDashboard from './pages/customer-dashboard/CustomerDashboard';

// Enterprise Admin Portal
import AdminPortal from './pages/admin/AdminPortal';

function MainContent() {
  const { activeMode, activeCustomerTab } = useStore();

  if (activeMode === 'admin') {
    return <AdminPortal />;
  }

  if (activeMode === 'customer-dashboard') {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <Header />
          <CustomerDashboard />
        </div>
        <Footer />
      </div>
    );
  }

  // Customer Storefront Mode
  const renderCustomerPage = () => {
    switch (activeCustomerTab) {
      case 'home': return <Home />;
      case 'shop': return <Shop />;
      case 'product-details': return <ProductDetails />;
      case 'categories': return <Categories />;
      case 'offers': return <Offers />;
      case 'recipes': return <Recipes />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'cart': return <Cart />;
      case 'checkout': return <Checkout />;
      case 'tracking': return <OrderTracking />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950 transition-colors">
      <div>
        <Header />
        <main>{renderCustomerPage()}</main>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <MainContent />
      <CommandPalette />
      <NotificationCenter />
      <QuickViewModal />
      <BarcodeModal />
    </StoreProvider>
  );
}
