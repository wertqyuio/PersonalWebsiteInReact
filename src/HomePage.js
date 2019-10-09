import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import ExternalLinks from './ExternalLinks';
import './HomePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <span>
        <div className="Background-Image">
          <Card className="center-cards">
            <h1 className="titular-name">Chris Chen</h1>
          </Card>
        </div>
        <ExternalLinks></ExternalLinks>
      </span>
    )
  }
}