import React from 'react';
import './Hero.css';

const Hero = () => {

  const video = require('./forest.mp4');

  return (
    <div className="hero">
      <div className="hero__video-container">
        <video className="hero__video" src={video} autoPlay loop></video>
      </div>
      <div className="hero__info">
        <div className="hero__info-container">
          <h1 className="hero__title">Dan Florio</h1>
          <h2 className="hero__subtitle">Developer / Music Maker</h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;