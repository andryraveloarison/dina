import React from 'react';
import Navbar from './components/organisms/Navbar/Navbar';
import Hero from './components/organisms/Hero/Hero';
import About from './components/organisms/About/About';
import Experience from './components/organisms/Experience/Experience';
import Skills from './components/organisms/Skills/Skills';
import Formation from './components/organisms/Formation/Formation';
import OtherFormations from './components/organisms/OtherFormations/OtherFormations';
import Contact from './components/organisms/Contact/Contact';
import Footer from './components/organisms/Footer/Footer';
import CustomCursor from './components/atoms/CustomCursor/CustomCursor';
import CustomScrollbar from './components/atoms/CustomScrollbar/CustomScrollbar';
import { useReveal } from './hooks/useReveal';
import { useTitleReveal } from './hooks/useTitleReveal';
import ImageZoom from './components/molecules/ImageZoom/ImageZoom';
import { useState } from 'react';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  useReveal();
  useTitleReveal();

  return (
    <>
      <CustomCursor />
      <CustomScrollbar isLoading={isLoading} />
      <Navbar />
      <Hero onLoadingComplete={() => setIsLoading(false)} />
      <About />
      <Experience />
      <ImageZoom />
      <Skills />
      <Formation />
      <OtherFormations />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
