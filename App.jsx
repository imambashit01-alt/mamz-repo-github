import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import CartModal from './components/CartModal';

// Pages
import Home from './pages/Home';
import New from './pages/New';
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';
import Sale from './pages/Sale';
import About from './pages/About';
import Contact from './pages/Contact';
import GiftCards from './pages/GiftCards';
import Support from './pages/Support';
import SizeGuide from './pages/SizeGuide';
import ShippingInfo from './pages/ShippingInfo';
import Returns from './pages/Returns';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Accessibility from './pages/Accessibility';

function AppContent() {
  const { user } = useAuth();
  const [isDark, setIsDark] = useState(false);
  const [cart, setCart] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  // Load theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('mamz-theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('mamz-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('mamz-theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    let newCart;

    if (existingItem) {
      newCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(newCart);
    localStorage.setItem('mamz-cart', JSON.stringify(newCart));
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
    localStorage.setItem('mamz-cart', JSON.stringify(newCart));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const newCart = cart.map(item =>
      item.id === productId
        ? { ...item, quantity }
        : item
    );
    setCart(newCart);
    localStorage.setItem('mamz-cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('mamz-cart');
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
        <Navbar
          cartCount={cartCount}
          onCartClick={() => setIsCartModalOpen(true)}
          onUserClick={() => setIsLoginModalOpen(true)}
          isDark={isDark}
          toggleTheme={toggleTheme}
          currentUser={user}
        />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New onAddToCart={addToCart} />} />
            <Route path="/women" element={<Women onAddToCart={addToCart} />} />
            <Route path="/men" element={<Men onAddToCart={addToCart} />} />
            <Route path="/kids" element={<Kids onAddToCart={addToCart} />} />
            <Route path="/sale" element={<Sale onAddToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/support" element={<Support />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/shipping" element={<ShippingInfo />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </AnimatePresence>

        <Footer />

        {/* Modals */}
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />

        <CartModal
          isOpen={isCartModalOpen}
          onClose={() => setIsCartModalOpen(false)}
          cart={cart}
          onRemoveFromCart={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onClearCart={clearCart}
        />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
