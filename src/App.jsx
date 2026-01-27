import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import TopPicks from './sections/TopPicks'; // Antes era 'Servicios'
import BuyingGuides from './sections/BuyingGuides'; // Antes era 'Nosotros'
import Contact from './sections/Contact';
import ParticlesBg from './components/ParticlesBg';

function App() {
  return (
    <div className="app-container">
      <ParticlesBg />
      <Navbar />
      <Hero />
      <TopPicks />
      <BuyingGuides />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;