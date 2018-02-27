import React from 'react';
import './Footer.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';

const Footer = () => {
  return (
    <section className="footer">
      <a href="https://www.github.com/djflorio" target="_blank">
        <FontAwesomeIcon className="footer__link" icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/danflorio" target="_blank">
        <FontAwesomeIcon className="footer__link" icon={faLinkedin} />
      </a>
      <a href="https://www.facebook.com/dan.florio" target="_blank">
        <FontAwesomeIcon className="footer__link" icon={faFacebook} />
      </a>
      <p className="footer__text">
        Website by Dan Florio (duh)
      </p>
    </section>
  );
}

export default Footer;