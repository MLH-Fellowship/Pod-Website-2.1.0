import React from 'react';

import Hero from './containers/Hero';
import Fellows from './containers/Fellows';
import Footer from './containers/Footer';
import Projects from './containers/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Hero />
      <Fellows />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
