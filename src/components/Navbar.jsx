import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-dark-bg/90 backdrop-blur-xl border-b border-dark-border shadow-lg shadow-black/20'
            : 'bg-light-bg/90 backdrop-blur-xl border-b border-light-border shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-dark-accent/10 group-hover:bg-dark-accent/20' : 'bg-light-accent/10 group-hover:bg-light-accent/20'}`}>
              <Code2 size={22} className={isDark ? 'text-dark-accent' : 'text-light-accent'} />
            </div>
            <span className={`font-poppins font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Dinesh<span className={isDark ? 'text-dark-accent' : 'text-light-accent'}>.dev</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? isDark
                        ? 'text-dark-accent'
                        : 'text-light-accent'
                      : isDark
                        ? 'text-dark-text-muted hover:text-white'
                        : 'text-light-text-muted hover:text-gray-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${isDark ? 'bg-dark-accent' : 'bg-light-accent'}`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9, rotate: 180 }}
              transition={{ duration: 0.3 }}
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
                isDark
                  ? 'bg-dark-surface hover:bg-dark-surface-2 text-yellow-400'
                  : 'bg-light-surface-2 hover:bg-gray-200 text-indigo-600'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-colors cursor-pointer ${
                isDark
                  ? 'bg-dark-surface hover:bg-dark-surface-2 text-dark-text'
                  : 'bg-light-surface-2 hover:bg-gray-200 text-light-text'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden overflow-hidden border-t ${
              isDark
                ? 'bg-dark-bg/95 backdrop-blur-xl border-dark-border'
                : 'bg-light-bg/95 backdrop-blur-xl border-light-border'
            }`}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? isDark
                            ? 'bg-dark-accent/10 text-dark-accent'
                            : 'bg-light-accent/10 text-light-accent'
                          : isDark
                            ? 'text-dark-text-muted hover:text-white hover:bg-dark-surface'
                            : 'text-light-text-muted hover:text-gray-900 hover:bg-light-surface-2'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
