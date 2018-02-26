import React from 'react';
import './About.css';

import { real, fake } from '../portfolio/PortfolioItems';
import Portfolio from '../portfolio/Portfolio';

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      verb: "create things with React"
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      verb: e.target.value
    });
  }

  render() {
    return (
      <section className="about">
        <h1 className="about__header">I like to {this.state.verb}.</h1>
        <h3 className="about__subheader">But I can</h3>
        <input className="about__input" type="text" onChange={this.onChange} placeholder="do whatever you need me to do" />
        <h3 className="about__subheader">.</h3>
      </section>
    );
  }
}

export default About;