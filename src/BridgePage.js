import React, { Component } from 'react';
import Center from './Center';
import ExternalLinks from './ExternalLinks';
import "./BridgePage.css"

export default class BridgePage extends Component {
  render() {
    return (
      <span>
        <div className="Bridge-Image">
          <ul>
            <p className="Titleist">Bridge Links</p>
            <li><a href="http://youth.worldbridge.org/las-vegas-nabc-2019-gnt-flight-c-winners/">
              National Championship Win!</a></li>
            <li><a href="https://bridgewinners.com/profile/chris-chen/">
              Bridge Winners Link</a></li>
            <li><a href="https://www.bridgepowerratings.com/WEBPAGES/U506WEB/S3973182.htm">
              Bridge Power Rating</a></li>
            <li><a href="https://live.acbl.org/player-results/3973182">
              Tournament Results</a></li>
            <li><a href="https://my.acbl.org/club-results/my-results/3973182">
              Club Results</a></li>
          </ul>
        </div>
      </span>
    )
  }
}