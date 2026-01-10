const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("¡Mensaje enviado con éxito!")
  }

  return (
    <section id="contacto" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center fw-bold mb-4">Contactanos</h2>
            <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-black">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contacto