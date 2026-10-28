import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/main.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we are on the home page for anchor links
  const isHome = location.pathname === '/';

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setIsOpen(false); // Close mobile menu if open
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', to: '/', type: 'route' },
    { name: 'Products', to: '/products', type: 'route' },
    { name: 'About', to: '/about', type: 'route' },
    { name: 'Contact', to: '/contact', type: 'route' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
        background: scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-heading)', letterSpacing: '1px', flex: 1 }}>
          DELUXE<span className="text-gold">.</span>
        </Link>


        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex" style={{ flex: 2, justifyContent: 'center', gap: '3rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              style={{
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                opacity: 0.8,
                transition: 'opacity 0.3s',
                color: location.pathname === link.to ? 'var(--color-gold)' : 'inherit',
                position: 'relative'
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 1)}
              onMouseLeave={(e) => (e.target.style.opacity = location.pathname === link.to ? 1 : 0.8)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Search Bar - Right */}
        <div className="hidden md:flex" style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <motion.input
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: isSearchOpen ? '200px' : '0px', opacity: isSearchOpen ? 1 : 0 }}
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid var(--color-white)',
                color: 'white',
                outline: 'none',
                padding: '5px',
                marginRight: '10px'
              }}
            />
            <button type="button" onClick={() => {
              if (isSearchOpen && searchQuery) {
                handleSearchSubmit({ preventDefault: () => { } });
              } else {
                setIsSearchOpen(!isSearchOpen);
              }
            }} style={{ background: 'transparent', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaSearch style={{ fontSize: '1.4rem', color: isSearchOpen ? 'var(--color-gold)' : 'white', transition: 'color 0.3s' }} />
            </button>
          </form>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: 'white', fontSize: '1.5rem', background: 'none' }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: 'rgba(10, 10, 10, 0.95)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} style={{ width: '100%', marginBottom: '1rem', position: 'relative' }}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  borderRadius: '30px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  outline: 'none',
                  fontSize: '1rem'
                }}
              />
              <button
                type="submit"
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  color: 'var(--color-gold)'
                }}
              >
                <FaSearch />
              </button>
            </form>
            {navLinks.map((link) => (
              link.type === 'route' ? (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.to}
                  onClick={() => setIsOpen(false)}
                  style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}
                >
                  {link.name}
                </a>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
