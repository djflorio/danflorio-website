import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.css';

import { items } from './PortfolioItems';

const pixel = require('./img/pixel.png');

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="portfolio">
          {
            items.map(item => {
              const img = require('./img/' + item.img);
              return (
                <table
                  key={item.id}
                  className="portfolio__item"
                >
                <tbody>
                  <tr>
                  <td className="portfolio__left">
                    <img className="portfolio__img" src={img} />
                  </td>
                  <td className="portfolio__info">
                    <h4 className="portfolio__name">{item.name} | </h4>
                    <a className="portfolio__link" target="_blank" href={item.link}>View Online</a>
                    { item.code && 
                      <span><h4 className="portfolio__name"> | </h4>
                      <a className="portfolio__link" target="_blank" href={item.code}>View Code</a>
                      </span>
                    }
                    <ul className="portfolio__tech-list">
                      {
                        item.tech.map((tech, id) => {
                          return (
                            <li key={id}className="portfolio__tech">{tech}</li>
                          );
                        })
                      }
                    </ul>
                    <p className="portfolio__description">
                      {item.description}
                    </p>
                  </td>
                  </tr>
                  </tbody>
                </table>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Portfolio;