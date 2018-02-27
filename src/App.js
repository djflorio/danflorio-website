import React, { Component } from 'react';

import Hero from './parts/hero/Hero';
import About from './parts/about/About';
import Portfolio from './parts/portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
