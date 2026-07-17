import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import GalleryPage from './pages/GalleryPage';
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/cart/CartSidebar';
import CheckoutModal from './components/cart/CheckoutModal';

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <CartSidebar />
      <CheckoutModal />
    </div>
    </CartProvider>
  );
}

export default App;
