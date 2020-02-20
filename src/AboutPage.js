import React, { Component } from 'react';
import Center from './Center';
import ExternalLinks from './ExternalLinks';
import "./AboutPage.css"

export default class AboutPage extends Component {
  render() {
    return (
      <span>
        <div className="Reading-Image">
          <span>My name is Chris Chen and I'm currently a contract software</span>
          <span>engineer for a charity, Center for Bridge Education. I enjoy</span>
          <span>solving problems, reading, and playing bridge. I'm fairly serious</span>
          <span>about 2 of the 3 above. On the top left, you can find more about</span>
          <span>my bridge, and on the bottom right, you can find more about my</span>
          <span>professional background.</span>
        </div>
      </span>
    )
  }
}