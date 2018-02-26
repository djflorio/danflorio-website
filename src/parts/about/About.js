import React from 'react';
import './About.css';

import { real, fake } from '../portfolio/PortfolioItems';
import Portfolio from '../portfolio/Portfolio';

const About = () => {

  return (
    <section className="about">
      <Portfolio items={real} />
      <Portfolio items={fake} />
    </section>
  );
}

export default About;