import React from 'react';

import Hero from './containers/Hero';
import Fellows from './containers/Fellows';
import Projects from './containers/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Hero />
      <Fellows />
      <Projects />
    </>
  );
};

export default App;
