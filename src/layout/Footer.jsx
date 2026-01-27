import { Home, MousePointer2, BookOpen, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer 
      className="footer-gaming py-5 position-relative"
      style={{
        background: 'linear-gradient(180deg, rgba(5, 7, 10, 0.95) 0%, rgba(13, 17, 23, 1) 100%)',
        borderTop: '1px solid rgba(0, 242, 255, 0.1)',
        boxShadow: '0 -5px 30px rgba(0, 242, 255, 0.05)'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--accent-color), transparent)',
          boxShadow: '0 0 20px rgba(0, 242, 255, 0.6)'
        }}
      ></div>
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-2" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.9rem' }}>
              © 2026 <span style={{ color: 'var(--accent-color)' }}>FocusGaming</span>. All rights reserved.
            </p>
            <small 
              className="amazon-disclaimer d-block"
              style={{ fontSize: '0.7rem', opacity: '0.6', lineHeight: '1.4' }}
            >
              As an Amazon Associate, FocusGaming earns from qualifying purchases. 
              This support allows us to provide honest, independent reviews.
            </small>
          </div>
          
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-4 mb-3">
              <a 
                href="#home" 
                className="text-decoration-none d-flex align-items-center"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-color)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px var(--accent-color))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.filter = 'none';
                }}
              >
                <Home size={20} />
              </a>
              
              <a 
                href="#top-picks" 
                className="text-decoration-none d-flex align-items-center"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-color)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px var(--accent-color))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.filter = 'none';
                }}
              >
                <MousePointer2 size={20} />
              </a>
              
              <a 
                href="#guides" 
                className="text-decoration-none d-flex align-items-center"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-color)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px var(--accent-color))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.filter = 'none';
                }}
              >
                <BookOpen size={20} />
              </a>
              
              <a 
                href="#contact" 
                className="text-decoration-none d-flex align-items-center"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-color)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px var(--accent-color))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.filter = 'none';
                }}
              >
                <Mail size={20} />
              </a>
            </div>
            
            <small style={{ 
              fontSize: '0.7rem', 
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.5px',
              display: 'block'
            }}>
              Crafted by{' '}
              <a 
                href="https://www.linkedin.com/in/anahi-perez-621018397/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{ 
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'rgba(0, 242, 255, 0.9)'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                Anahi Perez
              </a>
              {' • '}
              <span style={{ fontSize: '0.65rem', opacity: '0.6' }}>Full Stack Developer</span>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;