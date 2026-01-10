import React from 'react';

const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark fixed-top py-3" 
      style={{ 
        background: 'rgba(5, 7, 10, 0.7)', 
        backdropFilter: 'blur(15px)',
        borderBottom: '1px solid rgba(0, 242, 255, 0.2)', // Borde cyan sutil
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#inicio">
          <img 
            src="/logo-agencia.png" 
            alt="Logo" 
            width="100" 
            className="me-2"
            style={{ filter: 'drop-shadow(0 0 5px rgba(0, 242, 255, 0.5))' }} // Brillo al logo
          />
          {/* <span className="fw-bold fs-4" style={{ letterSpacing: '3px', color: '#00f2ff' }}>;P</span> */}
        </a>
        
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['Inicio', 'Nosotros', 'Servicios', 'Contacto'].map((item) => (
              <li className="nav-item" key={item}>
                <a 
                  className="nav-link px-3 text-uppercase fw-light" 
                  href={`#${item.toLowerCase()}`}
                  style={{ fontSize: '0.85rem', letterSpacing: '1px' }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;