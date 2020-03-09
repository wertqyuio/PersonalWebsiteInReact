import React, { Component, useState } from 'react';
import Example from './Examples';
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
            <Example title="Jobly" id="jobly"
              description={`Full stack application for job posting.
              Front end created in React with a frontend API for get
              requests for job requests and job requests by companies.
              Back end created with Node to connect with frontend API.`}>
            </Example>
            <Example title="Warbler" id="warbler"
              description={`Twitter-like clone with back-end done in Flask
            and Python. Includes user log-in features.`}></Example>
            <Example title="Adoption Agency" id="adoptionagency"
              description={`Application created with Python and Flask.
            Designed to make pet adoption as simple and easy.`}></Example>
            <Example title="Connect 4" id="connect4"
              description={`Application built in classic HTML, CSS, JS
            to play Connect 4`}></Example>
            <Example title="Yahtzee" id="yahtzee"
              description={`Play the game Yahtzee built with React.`}></Example>
            <Example title="Center for Bridge Education" id="cbe"
              description={`Website for Center for Bridge Education.
            Designed for easier content upload with third-party platform.
            Webpages include educational bridge resources, calendar,
            donations portal, and merchandising page.`}></Example>
          </ul>
        </div>
      </span >
    )
  }
}