import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Opening from './components/Opening';
import About from './components/About';
import Highlights from './components/Highlights';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import FullMenu from './components/FullMenu';

import { Toaster } from 'react-hot-toast';

function App() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      <Toaster position="top-right" />
      <Cart />
      <FullMenu isOpen={isFullMenuOpen} onClose={() => setIsFullMenuOpen(false)} />
      <Navbar />
      <Hero />
      <Opening />
      <About />
      <Highlights />
      <Menu onOpenFullMenu={() => setIsFullMenuOpen(true)} />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}


export default App;
