import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Clients from './components/Clients';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <div className="bg-cinema-black text-white selection:bg-electric-amber selection:text-black min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Showreel />
        <Portfolio />
        <Services />
        <Clients />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
