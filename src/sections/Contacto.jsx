import React, { useState } from 'react';

const Contacto = () => {
  // Estados para manejar el envío y la respuesta
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvzzpwkn", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset(); // Limpia el formulario
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="glass-card p-4 shadow-lg">
              <h2 className="text-center fw-bold text-gradient mb-4">INICIAR_CONEXIÓN</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-info small font-monospace">USUARIO_NOMBRE</label>
                  <input type="text" name="name" className="form-control bg-transparent text-white border-secondary" required />
                </div>
                <div className="mb-3">
                  <label className="form-label text-info small font-monospace">EMAIL_CONTACTO</label>
                  <input type="email" name="email" className="form-control bg-transparent text-white border-secondary" required />
                </div>
                <div className="mb-3">
                  <label className="form-label text-info small font-monospace">MENSAJE_CIFRADO</label>
                  <textarea name="message" className="form-control bg-transparent text-white border-secondary" rows="4" required></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn btn-outline-info w-100 fw-bold"
                >
                  {loading ? "TRANSMITIENDO..." : "ENVIAR TRANSMISIÓN"}
                </button>

                {/* Mensajes de feedback dinámicos */}
                {status === "SUCCESS" && (
                  <div className="alert alert-success mt-3 bg-transparent text-info border-info small animate__animated animate__fadeIn">
                    ✓ Transmisión recibida. Nos pondremos en contacto pronto.
                  </div>
                )}
                {status === "ERROR" && (
                  <div className="alert alert-danger mt-3 bg-transparent text-danger border-danger small">
                    ✗ Error en la conexión. Reintente la transmisión.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;