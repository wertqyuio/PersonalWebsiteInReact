import React, { Component } from 'react';
import Center from './Center';
import ExternalLinks from './ExternalLinks';
import "./AboutPage.css"

export default class AboutPage extends Component {
  render() {
    return (
      <span>
        <div className="About-Image">
          <p>My name is Chris Chen and I'm currently a contract
             software engineer for a 501(c)(3) charity, 
            Center for Bridge Education. I work on bridge related 
            educational projects. In my spare time, I enjoy playing bridge, 
            and reading.</p>
        </div>
      </span>
    )
  }
}