import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Opening from './components/Opening';
import About from './components/About';
import Highlights from './components/Highlights';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      <Navbar />
      <Hero />
      <Opening />
      <About />
      <Highlights />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}


export default App;
