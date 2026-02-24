import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Home, MousePointer2, BookOpen, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'HOME', href: '#home', icon: <Home size={18} /> },
  { name: 'TOP PICKS', href: '#top-picks', icon: <MousePointer2 size={18} /> },
  { name: 'GUIDES', href: '#guides', icon: <BookOpen size={18} /> },
  { name: 'CONTACT', href: '#contact', icon: <Mail size={18} /> },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para disparar el rayo
  const handleElectricClick = (name) => {
    setClickedLink(name);
    setIsMobileMenuOpen(false); // Cierra el menú móvil al hacer click
    setTimeout(() => setClickedLink(null), 400);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'nav-shrunk' : ''}`}>
      <div className="container">
        <motion.a 
          className="navbar-brand d-flex align-items-center" 
          href="#home"
          whileTap={{ scale: 0.95 }}
        >
          <Zap className="me-2 text-cyan" fill="currentColor" size={24} />
          <span className="text-gradient">FOCUSGAMING</span>
        </motion.a>

        {/* Botón Hamburguesa para Móviles */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? (
            <X size={28} className="text-cyan" />
          ) : (
            <Menu size={28} className="text-cyan" />
          )}
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto position-relative">
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                className="nav-item position-relative"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => handleElectricClick(link.name)}
              >
                <a className="nav-link d-flex align-items-center" href={link.href}>
                  <span className="nav-icon me-1">{link.icon}</span>
                  {link.name}
                </a>

                {/* EFECTO 1: Glow suave de seguimiento (Hover) */}
                <AnimatePresence>
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="nav-electric-glow"
                      className="nav-hover-bg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>

                {/* EFECTO 2: El Rayo Electrizante (Click) */}
                <AnimatePresence>
                  {clickedLink === link.name && (
                    <motion.div
                      className="electric-bolt-container"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Dibujamos un rayo en zigzag con SVG */}
                      <svg width="100%" height="100%" viewBox="0 0 40 100" preserveAspectRatio="none">
                        <motion.path
                          d="M20 0 L35 30 L10 50 L30 70 L5 100" // Forma de zigzag
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          initial={{ pathLength: 0, filter: "blur(0px)" }}
                          animate={{ 
                            pathLength: 1, 
                            filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
                            x: [0, -2, 2, -1, 0] // Vibración del rayo
                          }}
                          transition={{ duration: 0.2, ease: "easeIn" }}
                        />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;