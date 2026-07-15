import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './hooks/useShop';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import QuickViewModal from './components/products/QuickViewModal';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white text-black font-sans antialiased select-none">
          {/* 1. Global Announcement Bar */}
          <AnnouncementBar />

          {/* 2. Global Sticky Header */}
          <Header />

          {/* 3. Main Route Shell */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              {/* Fallback path redirects to shop */}
              <Route path="*" element={<Products />} />
            </Routes>
          </main>

          {/* 4. Global Premium Footer */}
          <Footer />

          {/* 5. Global Quick View Modal Overlay */}
          <QuickViewModal />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
