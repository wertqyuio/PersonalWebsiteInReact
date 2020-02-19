import React, { Component } from 'react';
import Center from './Center';
import ExternalLinks from './ExternalLinks';
import "./ReadingPage.css"

export default class ReadingPage extends Component {
  render() {
    return (
      <span>
        <div className="Reading-Image">
          <ul>
            <p className="Titleist">Last Five Books that I've Read</p>
            <li>The Wheel of Time: Lord of Chaos (11/15)</li>
            <li>No Happy Endings: A Memoir (12/12)</li>
            <li>The Wheel of Time: A Crown of Swords (1/6)</li>
            <li>The Years (2/1)</li>
            <li>The Rodwell Files (2/14)</li>
          </ul>
        </div>
      </span>
    )
  }
}