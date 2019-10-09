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
            <li>Tiger Woods (9/28/19) </li>
            <li>Delayed Rays of a Star (9/20)</li>
            <li>The Goldfinch (9/12) </li>
            <li>The Hell of Good Intentions (9/5)</li>
            <li>The Laughing Monsters (8/17)</li>
          </ul>
        </div>
      </span>
    )
  }
}