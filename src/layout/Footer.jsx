import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 mt-5" style={{ background: 'linear-gradient(to top, #05070a, #0a0e14)', borderTop: '1px solid rgba(112, 0, 255, 0.3)' }}>
      <div className="container">
        <div className="row gy-4 align-items-center text-center text-md-start">
          
          <div className="col-md-4">
            <img src="/logo-agencia.png" alt="Logo" width="120" className="mb-3" />
            <p className="text-secondary small">
              Liderando la vanguardia del desarrollo digital con interfaces de próxima generación.
            </p>
          </div>

          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center gap-4">
              <a href="#" className="footer-link"><i className="bi bi-discord fs-3"></i></a>
              <a href="#" className="footer-link"><i className="bi bi-github fs-3"></i></a>
              <a href="#" className="footer-link"><i className="bi bi-linkedin fs-3"></i></a>
            </div>
          </div>

          <div className="col-md-4 text-md-end">
            <p className="text-uppercase small fw-bold mb-1" style={{ color: '#00f2ff' }}>Sistemas Activos</p>
            <p className="text-secondary x-small">Status: 100% Operativo</p>
          </div>

        </div>

        <div className="mt-5 pt-4 border-top border-dark text-center">
          <p className="text-muted" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>
            © {new Date().getFullYear()} AGENCIA FOCUS // DESARROLLADO POR [TU NOMBRE]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;