import React from 'react';
import './Music.css';

import links from './links';

const Music = ({noteShift}) => {
  return (
    <section className="music App__section" style={{ backgroundPosition: `50px ${noteShift}px` }}>
      <span className="music__header-container">
        <h1 className="music__header">I also like to create music...</h1>
      </span>
      <div className="music__site-link-container">
        <a className="music__site-link" href="http://www.danfloriomusic.com" target="_blank">
          www.danfloriomusic.com
        </a>
      </div>
      <span className="music__links-container">
        <h1 className="music__header">...which can be found on...</h1>
        <ul className="music__links">
        {
          links.map(link => {
            const img = require('./img/' + link.img);
            return (
              <li key={link.id} className="music__link">
                <a href={link.link} target="_blank">
                  <img className={"music__link-img " + link.class} src={img} alt={link.link} />
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