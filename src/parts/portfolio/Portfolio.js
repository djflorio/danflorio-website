import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.css';

import { items } from './PortfolioItems';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null
    }

    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(item) {
    this.setState({
      selectedItem: item
    });
  }

  render() {
    return (
      <div className="portfolio">
        <h1 className="portfolio__header">
          Some of those things include...
        </h1>
        <div className="portfolio__list">
        {
          items.map(item => {
            const img = require('./img/' + item.img);
            return (
              <div key={item.id} className="portfolio__item">
                <img className="portfolio__img" src={img} onClick={() => {this.selectItem(item)}}/>
              </div>
            )
          })
        }
        </div>
        { this.state.selectedItem && 
        <div className="portfolio__selected">
          <h2 className="portfolio__selected-name">{this.state.selectedItem.name}</h2>
          <p className="portfolio__selected-description">
            {this.state.selectedItem.description}
          </p>
          <p className="portfolio__selected-tech">
            <strong>Made with:</strong> {this.state.selectedItem.tech}
          </p>
          <a className="portfolio__selected-link" href={this.state.selectedItem.link}
            target="_blank">
            VIEW PROJECT
          </a>
          {this.state.selectedItem.code &&
            <a className="portfolio__selected-link" href={this.state.selectedItem.code}
            target="_blank">
              VIEW CODE
            </a>
          }
        </div>
        }
      </div>
    );
  }
}

export default Portfolio;