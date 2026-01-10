const Hero = () => {
  return (
    <section id="inicio" className="vh-100 d-flex align-items-center position-relative">
      <div className="bg-glow"></div> {/* Elemento decorativo de fondo */}
      <div className="container text-center">
        {/* <span className="badge rounded-pill border border-info text-info mb-3 px-3 py-2">
          AGENCIA DIGITAL 4.0
        </span> */}
        <h1 className="display-1 fw-bold mb-4">
          DISEÑAMOS EL <br />
          <span className="text-gradient">FUTURO DIGITAL</span>
        </h1>
        <p className="lead mb-5 text-secondary mx-auto" style={{ maxWidth: '600px' }}>
          Más que código, creamos interfaces inteligentes y experiencias inmersivas que rompen los límites de lo convencional.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#contacto" className="btn btn-primary btn-lg px-4 shadow-lg">Iniciar Proyecto</a>
          <a href="#servicios" className="btn btn-outline-light btn-lg px-4">Ver Tecnología</a>
        </div>
      </div>
    </section>
  )
}

export default Hero