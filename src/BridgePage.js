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
              National Championship Win</a></span>
            <span><a href="www.google.com">
              Bridge Winners Link</a></span>
            <span><a href="www.google.com">
              Bridge Power Rating</a></span>
            <span><a href="www.google.com">
              Tournament Results</a></span>
            <span><a href="www.google.com">
              Club Results</a></span>
        </div>
      </span>
    )
  }
}