import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ cartCount, onCartClick, onUserClick, isDark, toggleTheme, currentUser }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'New', path: '/new' },
    { name: 'Women', path: '/women' },
    { name: 'Men', path: '/men' },
    { name: 'Kids', path: '/kids' },
    { name: 'About', path: '/about' },
    { name: 'Sale', path: '/sale' },
  ];

  const footerLinks = [
    { name: 'Gift Cards', path: '/gift-cards' },
    { name: 'Support', path: '/support' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Shipping Info', path: '/shipping' },
    { name: 'Returns', path: '/returns' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Accessibility', path: '/accessibility' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-mamz-white dark:bg-mamz-black shadow-lg sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-2xl font-bold text-mamz-red">MAMZ</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-mamz-black dark:text-mamz-white hover:text-mamz-red transition-colors ${
                  location.pathname === item.path ? 'text-mamz-red font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field"
            />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? '☀️' : '🌙'}
            </motion.button>

            {/* User Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onUserClick}
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {currentUser ? (
                <img
                  src={currentUser.picture || '👤'}
                  alt="Profile"
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                '👤'
              )}
            </motion.button>

            {/* Cart Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCartClick}
              className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-mamz-red text-mamz-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              ☰
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-mamz-white dark:bg-mamz-black border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-3 py-2 text-mamz-black dark:text-mamz-white hover:text-mamz-red transition-colors ${
                      location.pathname === item.path ? 'text-mamz-red font-semibold' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
                  {footerLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-mamz-red transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
