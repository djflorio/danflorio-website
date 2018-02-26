import React from 'react';
import './About.css';

import { real, fake } from '../portfolio/PortfolioItems';
import Portfolio from '../portfolio/Portfolio';

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gearY: 50
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
    let scrollTop = e.srcElement.body.scrollTop;
    let itemTranslate = Math.min(0, scrollTop/3 - 60);

    this.setState({
      gearyY: 50-itemTranslate
    });
    console.log(scrollTop);
  }

  render() {
    return (
      <section className="about" style={{ backgroundPosition: '50px 50px' }}>
        <div className="about__section-1">
          <h1 className="about__header">I like to create things with...</h1>
          <h2 className="about__subheader">
            Javascript, PHP, Python, and Java
          </h2>
        </div>
        <div className="about__section-2">
          <h1 className="about__header">...using tools like...</h1>
          <h2 className="about__subheader">
            React, Redux, JQuery, Angular, Wordpress, Django, LibGDX
          </h2>
        </div>
      </section>
    );
  }
}

export default About;