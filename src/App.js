import React, { useState, useEffect } from 'react';

import Hero from './containers/Hero';
import Fellows from './containers/Fellows';
import Footer from './containers/Footer';
import Projects from './containers/Projects';
// Navbar
import Nav from './components/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    return function cleanup() {
      window.removeEventListener('resize');
    };
  }, []);

  return (
    <>
      <Nav windowWidth={windowWidth} />
      <Hero />
      <Fellows />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
