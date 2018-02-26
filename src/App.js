import React, { Component } from 'react';

import Hero from './parts/hero/Hero';
import About from './parts/about/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <About />
      </div>
    );
  }
}

export default App;
