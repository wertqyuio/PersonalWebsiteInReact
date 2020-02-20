import React, { Component } from 'react';
import Center from './Center';
import ExternalLinks from './ExternalLinks';
import "./PortfolioPage.css"

export default class PortfolioPage extends Component {
  render() {
    return (
      <span>
        <div className="Portfolio-Image">
          <ul>
            <p className="Titleist">Selection of Projects</p>
            <li>Jobly</li>
            <li>Center for Bridge Education</li>
            <li>Warbler</li>
            <li>Adoption Agency</li>
            <li>Connect 4</li>
            <li>Yahtzee</li>
          </ul>
        </div>
      </span>
    )
  }
}