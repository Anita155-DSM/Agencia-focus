import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "Logitech G Pro X Superlight 2",
    tag: "The #1 Esports Mouse", // Tag de autoridad
    desc: "The mouse that ended the cable era. 60g of pure precision with the HERO 2 sensor. Stop fighting your gear and start hitting those flick shots. The industry standard for a reason.",
    link: "https://amzn.to/4aAkDNV",
    image: "/mouse2.webp",
    featured: true 
  },
  {
    id: 2,
    name: "SteelSeries Apex Pro TKL",
    tag: "World's Fastest", // Tag de velocidad
    desc: "Cheating? No. Just faster. OmniPoint 2.0 switches give you 11x quicker response times. Adjust actuation distance to eliminate misclicks forever.",
    link: "https://amzn.to/4r1907z",
    image: "/teclado.webp",
    featured: false
  },
  {
    id: 3,
    name: "SteelSeries Arctis Nova Pro",
    tag: "Infinite Power", // Tag de beneficio único
    desc: "Hear them before they see you. Features Active Noise Cancellation and a hot-swap battery system so you never have to pause to charge.",
    link: "https://amzn.to/4u9pBJg",
    image: "/auricular.webp",
    featured: false
  },
  {
    id: 4,
    name: "Govee Glide Hexa Panels",
    tag: "Streamer Essential", // Tag de identidad
    desc: "Level up your background instantly. Smart RGBIC panels that sync with your game audio. The easiest way to make your setup look expensive.",
    link: "https://amzn.to/4aQEFm7",
    image: "/luces.webp",
    featured: false
  },
  {
    id: 5,
    name: "Shure MV7+ Podcast Mic",
    tag: "Broadcast Clarity", // Tag de calidad
    desc: "Stop sounding like you're in a tin can. Studio-grade voice isolation with USB simplicity. Your teammates (and chat) will thank you.",
    link: "https://amzn.to/3ZRO08j",
    image: "/microfono.webp",
    featured: false
  }
];

const TopPicks = () => {
  return (
    <section id="top-picks" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-cyan mb-2" style={{ letterSpacing: '3px' }}>EQUIPMENT LIST</h6>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white display-5 fw-bold"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            CORE GEAR <span className="text-gradient">2026</span>
          </motion.h2>
        </div>
        
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className={product.featured ? "col-12" : "col-12 col-sm-6 col-lg-6 col-xl-3"}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="product-card h-100 d-flex flex-column justify-content-between p-4"
                style={{
                  // AQUI AGREGUÉ EL DEGRADADO PARA QUE SE LEA EL TEXTO
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url(${product.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '15px',
                  minHeight: product.featured ? '400px' : '350px', // Altura mínima para mantener proporción
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}
              >
                <div>
                  <span className="badge p-2 px-3 mb-3" style={{ background: 'rgba(0, 242, 255, 0.1)', border: '1px solid var(--accent-color)', color: '#fff', backdropFilter: 'blur(4px)' }}>
                    {product.tag}
                  </span>
                  <h3 className={`text-white mb-3 ${product.featured ? 'display-6 fw-bold' : 'h5'}`} style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                    {product.name}
                  </h3>
                  <p className="text-light mb-4" style={{ fontSize: '0.95rem', fontWeight: '400', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                    {product.desc}
                  </p>
                </div>
                
                <motion.a 
                  whileTap={{ scale: 0.95 }}
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-amazon mt-auto w-100 text-center"
                >
                  CHECK PRICE ON AMAZON
                </motion.a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;