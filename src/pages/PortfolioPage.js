import React from 'react';
import './PortfolioPage.css';

import { real, fake } from '../parts/portfolio/PortfolioItems';

import Portfolio from '../parts/portfolio/Portfolio';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <h2 className="portfolio-page__header">Real World:</h2>
      <p className="portfolio-page__description">Work done for real companies.</p>
      <hr className="portfolio-page__divider" />
      <Portfolio items={real} />
      <h2 className="portfolio-page__header">Concepts:</h2>
      <p className="portfolio-page__description">Work done for fun.</p>
      <hr className="portfolio-page__divider" />
      <Portfolio items={fake} />
    </div>
  );
}

export default PortfolioPage;