import React, { Component } from 'react';
import Center from './Center';
import ExternalLinks from './ExternalLinks';
import "./PortfolioPage.css"

export default class PortfolioPage extends Component {
  render() {
    return (
      <span>
        <div>
          <span>Jobly</span>
          <span>Center for Bridge Website</span>
          <span>Yahtzee</span>
          <span>Hangman</span>
          <span>Connect 4</span>
        </div>
      </span>
    )
  }
}