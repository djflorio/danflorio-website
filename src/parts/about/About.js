import React from 'react';
import './About.css';

const About = ({gearShift}) => {
  return (
    <section className="about App__section" style={{ backgroundPosition: `50px ${gearShift}px` }}>
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

export default About;