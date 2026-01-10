import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import Nosotros from './sections/Nosotros'
import Servicios from './sections/Servicios'
import Contacto from './sections/Contacto'
import Footer from './layout/Footer'
import ParticlesBg from './components/ParticlesBg'

function App() {
  return (
    <>
      <ParticlesBg />
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <Contacto />
      <Footer />
    </>
  )
}

export default App