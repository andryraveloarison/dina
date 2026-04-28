import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ImageZoom from './components/ImageZoom';
import Skills from './components/Skills';
import Formation from './components/Formation';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useReveal } from './hooks/useReveal';
import { useTitleReveal } from './hooks/useTitleReveal';

const App: React.FC = () => {
  useReveal();
  useTitleReveal();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ImageZoom />
      <Skills />
      <Formation />
      <Interests />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
