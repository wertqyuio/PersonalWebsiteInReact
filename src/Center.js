import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './Center.css'


class Center extends Component {

  render() {
    return (
      <div className="Background-Image">
        <Card className="center-cards">
          <h1 className="titular-name">Chris Chen</h1>
        </Card>
      </div>
    )
  }
}

export default Center;
