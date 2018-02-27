import React, { Component } from 'react';
import './App.css';

import Hero from './parts/hero/Hero';
import About from './parts/about/About';
import Portfolio from './parts/portfolio/Portfolio';
import Music from './parts/music/Music';
import Contact from './parts/contact/Contact';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gearShift: 500,
      bracketShift: -850,
      noteShift: -600
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
    let noteTranslate = -600 + (200 * scrollTop) / 600;

    this.setState({
      gearShift: gearTranslate,
      bracketShift: bracketTranslate,
      noteShift: noteTranslate
    });
  }

  render() {
    return (
      <div className="App">
        <Hero />
        <About gearShift={this.state.gearShift}/>
        <Portfolio bracketShift={this.state.bracketShift}/>
        <Music noteShift={this.state.noteShift}/>
        <Contact />
      </div>
    );
  }
}

export default App;
