import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4" style={{ 
      background: 'rgba(5, 7, 10, 0.8)', 
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(0, 242, 255, 0.1)' 
    }}>
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          
          {/* Lado Izquierdo: Logo y Copyright */}
          <div className="d-flex align-items-center">
            <img 
              src="/logo-agencia.webp" 
              alt="Logo" 
              width="50" 
              className="me-3 opacity-75" 
              style={{ filter: 'grayscale(100%) brightness(1.5)' }} 
            />
            <span className="text-secondary font-monospace" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
              © {new Date().getFullYear()} FOCUS_SYSTEMS // DESARROLLADO POR: PÉREZ ANAHI
            </span>
          </div>

          {/* Lado Derecho: Redes con efecto Glow */}
          <div className="d-flex gap-4">
            <a href="https://github.com/Anita155-DSM" className="nav-link p-0 text-secondary fs-5 social-icon"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/anahi-perez-621018397/" className="nav-link p-0 text-secondary fs-5 social-icon"><i className="bi bi-linkedin"></i></a>
            <a href="https://x.com/yvng_ann" className="nav-link p-0 text-secondary fs-5 social-icon"><i className="bi bi-twitter-x"></i></a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;