import React from 'react';
import { motion } from 'framer-motion';

const serviciosData = [
  { id: 1, icon: 'bi-cpu', title: 'Sistemas IA', desc: 'Implementación de modelos inteligentes para optimizar procesos.' },
  { id: 2, icon: 'bi-layers', title: 'Full Stack Dev', desc: 'Arquitecturas robustas y escalables con tecnologías modernas.' },
  { id: 3, icon: 'bi-shield-lock', title: 'Ciberseguridad', desc: 'Protección de datos y auditorías de sistemas críticos.' }
];

const Servicios = () => {
  return (
    <section id="servicios" className="py-5 position-relative" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-gradient">SERVICIOS%TECNOLÓGICOS</h2>
          <p className="text-secondary">Soluciones de próxima generación para desafíos actuales.</p>
        </div>

        <div className="row g-4">
          {serviciosData.map((s) => (
            <div className="col-md-4" key={s.id}>
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5 }} // Efecto 3D al pasar el mouse
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card h-100 p-4 text-center border-start-0 border-end-0 border-top-0 border-bottom border-info border-3"
                style={{ cursor: 'pointer' }}
              >
                <div className="icon-container mb-4 d-inline-block p-3 rounded-circle" style={{ background: 'rgba(0, 242, 255, 0.1)' }}>
                  <i className={`${s.icon} fs-1 text-gradient`}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{ letterSpacing: '1px' }}>{s.title}</h4>
                <p className="text-secondary small">{s.desc}</p>
                
                {/* Un detalle "tech" extra: una línea que se ilumina */}
                <div className="mt-4 pt-2 border-top border-secondary opacity-25">
                  <span className="x-small font-monospace">STATUS: ACTIVE</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;