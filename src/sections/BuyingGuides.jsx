import { motion } from 'framer-motion';

const guides = [
  {
    title: "Best Competitive Mouse 2026",
    excerpt: "Everything you need to know about polling rates, optical switches, and weight for pro play.",
    tag: "GEAR GUIDE",
    link: "https://prosettings.net/gear/lists/mice/",
    image: "/mouseArt.webp"
  },
  {
    title: "Mechanical vs Optical Switches",
    excerpt: "The ultimate guide to switch technology for the fastest reaction times.",
    tag: "TECH EXPLAINED",
    link: "https://www.rtings.com/keyboard/reviews/steelseries/apex-pro-gen-3",
    image: "/tecladoArt.webp"
  },
  {
    title: "Studio Audio: XLR vs USB",
    excerpt: "Stop sounding like a rookie. The ultimate guide to achieving broadcast-quality voice for your stream.",
    tag: "AUDIO MASTERY", 
    link: "https://www.electronicshub.org/xlr-vs-usb/",
    image: "/microfonoArt.webp"
  }
];

const BuyingGuides = () => {
  // Definimos las alturas: Grande -> Mediano -> Chico
  const cardHeights = ['400px', '340px', '280px'];

  return (
    <section id="guides" className="py-5">
      <div className="container">
        
        {/* --- SECCIÓN 1: ARTÍCULOS (Escalerita Descendente: Grande -> Chico) --- */}
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <h6 className="text-uppercase" style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}>Knowledge Base</h6>
            <h2 className="text-white mb-0" style={{ fontFamily: 'Orbitron, sans-serif' }}>BUYING GUIDES</h2>
          </div>
          <a href="#" className="text-decoration-none" style={{ color: 'var(--accent-color)' }}>View All Articles →</a>
        </div>

        {/* align-items-start hace que las tarjetas "cuelguen desde arriba" */}
        <div className="row g-4 mb-5 align-items-start">
          {guides.map((guide, index) => (
            <div key={index} className="col-md-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="guide-card p-0 overflow-hidden"
                style={{ 
                  // AQUÍ ESTÁ LA MAGIA: Altura dinámica según el índice
                  height: cardHeights[index], 
                  background: 'var(--glass-bg)', 
                  borderRadius: '12px', 
                  border: '1px solid var(--accent-color)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Imagen (Altura variable para que se ajuste a la tarjeta) */}
                <div style={{ 
                    height: index === 2 ? '100px' : '160px', // La imagen se achica en la tarjeta más pequeña
                    backgroundImage: `url(${guide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    flexShrink: 0 
                }}></div> 
                
                <div className="p-4 d-flex flex-column h-100">
                  <span className="text-muted small text-uppercase fw-bold" style={{ color: 'var(--accent-color)' }}>{guide.tag}</span>
                  
                  {/* Ajustamos tamaño de letra para la tarjeta pequeña */}
                  <h4 className={`text-white mt-2 mb-2 ${index === 2 ? 'h6' : 'h5'}`}>
                    {guide.title}
                  </h4>
                  
                  {/* Ocultamos el extracto en la tarjeta más pequeña si es necesario, o lo dejamos */}
                  <p className="text-secondary small mb-auto" style={{ 
                      fontSize: index === 2 ? '0.8rem' : '0.9rem',
                      display: '-webkit-box',
                      WebkitLineClamp: index === 2 ? 2 : 3, // Corta el texto si es muy largo
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                  }}>
                    {guide.excerpt}
                  </p>

                  <a 
                    href={guide.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-link p-0 text-decoration-none mt-2 text-start" 
                    style={{ color: 'var(--purple-glow)', fontWeight: 'bold' }}
                  >
                    READ MORE
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* --- SEPARADOR VISUAL --- */}
        <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* --- SECCIÓN 2: UNBOXING LAB (Escalerita Ascendente: Chico -> Grande) --- */}
        <div className="text-center mb-5">
           <h3 className="text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>LIVE UNBOXING <span className="text-gradient">LAB</span></h3>
           <p className="text-white-50">Don't just read about it. Watch the raw performance.</p>
        </div>

        <div className="row g-4 align-items-end justify-content-center">
            
            {/* VIDEO 1 (Pequeño - Mouse) */}
            <div className="col-lg-4 col-md-6">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="video-card position-relative"
                    style={{ height: '220px', borderRadius: '15px', overflow: 'hidden', border: '1px solid var(--purple-glow)', boxShadow: '0 0 20px rgba(112, 0, 255, 0.2)' }}
                >
                    <iframe 
                        width="100%" height="100%" 
                        src="https://www.youtube.com/embed/3F7XSzu6Xlo?controls=0&mute=1&rel=0" 
                        title="Mouse Unboxing" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                    <div className="position-absolute bottom-0 start-0 p-3 w-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)' }}>
                        <span className="badge bg-secondary mb-1">SHORT LOOK</span>
                        <h6 className="text-white m-0">Superlight 2 In-Hand</h6>
                    </div>
                </motion.div>
            </div>

            {/* VIDEO 2 (Mediano - Teclado) */}
            <div className="col-lg-4 col-md-6">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="video-card position-relative"
                    style={{ height: '280px', borderRadius: '15px', overflow: 'hidden', border: '1px solid var(--purple-glow)', boxShadow: '0 0 20px rgba(112, 0, 255, 0.2)' }}
                >
                     <iframe 
                        width="100%" height="100%" 
                        src="https://www.youtube.com/embed/xyQ_IyfHtUo?controls=0&mute=1&rel=0" 
                        title="Keyboard Sound Test" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                    <div className="position-absolute bottom-0 start-0 p-3 w-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)' }}>
                        <span className="badge bg-warning text-dark mb-1">ASMR SOUND TEST</span>
                        <h5 className="text-white m-0">Apex Pro Typing Sound</h5>
                    </div>
                </motion.div>
            </div>

            {/* VIDEO 3 (Grande - Micrófono) */}
            <div className="col-lg-4 col-md-6">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="video-card position-relative"
                    style={{ height: '340px', borderRadius: '15px', overflow: 'hidden', border: '1px solid var(--purple-glow)', boxShadow: '0 0 20px rgba(112, 0, 255, 0.2)' }}
                >
                     <iframe 
                        width="100%" height="100%" 
                        src="https://www.youtube.com/embed/7Pq-S557XQU?controls=0&mute=1&rel=0" 
                        title="Mic Setup" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                    <div className="position-absolute bottom-0 start-0 p-3 w-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)' }}>
                        <span className="badge bg-success mb-1">FULL REVIEW</span>
                        <h4 className="text-white m-0">Shure MV7+ Studio Test</h4>
                    </div>
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default BuyingGuides;