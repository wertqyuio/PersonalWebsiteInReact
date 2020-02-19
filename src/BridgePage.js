import React, { Component } from 'react';
import Center from './Center';
import ExternalLinks from './ExternalLinks';
import "./ReadingPage.css"

export default class BridgePage extends Component {
  render() {
    return (
      <span>
        <div className="Reading-Image">
            <p className="Titleist">Personal Bridge Links</p>
            <span><a href="www.google.com">
              My Bridge Power Rating</a></span>
        </div>
      </span>
    )
  }
}