import React from 'react';
import Navbar from './components/organisms/Navbar/Navbar';
import Hero from './components/organisms/Hero/Hero';
import About from './components/organisms/About/About';
import Experience from './components/organisms/Experience/Experience';
import Skills from './components/organisms/Skills/Skills';
import Formation from './components/organisms/Formation/Formation';
import Interests from './components/organisms/Interests/Interests';
import Contact from './components/organisms/Contact/Contact';
import Footer from './components/organisms/Footer/Footer';
import CustomCursor from './components/atoms/CustomCursor/CustomCursor';
import { useReveal } from './hooks/useReveal';
import { useTitleReveal } from './hooks/useTitleReveal';
import ImageZoom from './components/molecules/ImageZoom/ImageZoom';

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
