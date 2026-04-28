import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Formation from './components/Formation';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

const App: React.FC = () => {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Formation />
      <Interests />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
