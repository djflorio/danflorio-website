import React, { Component } from 'react';

import Hero from './parts/hero/Hero';
import About from './parts/about/About';
import Portfolio from './parts/portfolio/Portfolio';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gearShift: 50,
      bracketShift: -850
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let scrollTop = e.target.scrollingElement.scrollTop;
    let gearTranslate = 300 - (400 * scrollTop) / 600;
    let bracketTranslate = -850 + (200 * scrollTop) / 200;

    this.setState({
      gearShift: gearTranslate,
      bracketShift: bracketTranslate
    });
  }

  render() {
    return (
      <div className="App">
        <Hero />
        <About gearShift={this.state.gearShift}/>
        <Portfolio bracketShift={this.state.bracketShift}/>
      </div>
    );
  }
}

export default App;
