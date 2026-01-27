import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero-section" 
      style={{ 
        backgroundImage: `url(/setup-hero.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-overlay"></div>
       
      <div className="container hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="display-3 text-center mb-4 fw-bold"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          THE ENDGAME <span className="text-gradient">CURATED FOR YOU</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lead text-center text-white-50 mx-auto mb-5"
          style={{ maxWidth: '750px', fontWeight: '300', letterSpacing: '0.5px' }}
        >
          Ditch the endless research. We’ve field-tested the latest 2026 tech to bring you 
          <strong> the gold standard of gaming.</strong> High performance, zero compromise.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-buttons d-flex justify-content-center gap-3"
        >
          <a href="#top-picks" className="btn-amazon px-4">SHOP THE ELITE LIST</a>
          <a href="#guides" className="btn-outline px-4">EXPLORE GUIDES</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;