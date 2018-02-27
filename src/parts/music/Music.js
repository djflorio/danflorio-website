import React from 'react';
import './Music.css';

import links from './links';

const Music = ({noteShift}) => {
  return (
    <section className="music App__section" style={{ backgroundPosition: `50px ${noteShift}px` }}>
      <span className="music__header-container">
        <h1 className="music__header">I also like to create music...</h1>
      </span>
      <span className="music__links-container">
        <h1 className="music__header">...which can be found on...</h1>
        <ul className="music__links">
        {
          links.map(link => {
            const img = require('./img/' + link.img);
            return (
              <li className="music__link">
                <a href={link.link} target="_blank">
                  <img className={"music__link-img " + link.class} src={img} />
                </a>
              </li>
            )
          })
        }
        </ul>
      </span>
    </section>
  );
}

export default Music;