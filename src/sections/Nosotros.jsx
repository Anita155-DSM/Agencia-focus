const Nosotros = () => {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Columna de Imagen */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="position-relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Equipo de trabajo" 
                className="img-fluid rounded-3 shadow-lg"
              />
              {/* Un pequeño decorador de experiencia */}
              <div className="position-absolute bottom-0 start-0 bg-primary text-white p-3 rounded-end shadow">
                <p className="h2 fw-bold mb-0">5+</p>
                <p className="small mb-0">Años de Experiencia</p>
              </div>
            </div>
          </div>

          {/* Columna de Texto */}
          <div className="col-lg-6 ps-lg-5">
            <h6 className="text-primary fw-bold text-uppercase">Sobre Nosotros</h6>
            <h2 className="display-5 fw-bold mb-4">Transformamos ideas en experiencias digitales</h2>
            <p className="text-white mb-4">
              En <strong>Agencia Focus</strong>, no solo escribimos código; creamos soluciones estratégicas. Somos un equipo apasionado por el diseño funcional y el desarrollo robusto, enfocados en ayudar a las empresas a navegar la era digital.
            </p>
            
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i> 
                Enfoque centrado en el usuario (UX).
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i> 
                Desarrollo ágil y escalable.
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i> 
                Resultados medibles y optimizados.
              </li>
            </ul>

            {/* <button className="btn btn-outline-primary">Leer más de nuestra historia</button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros