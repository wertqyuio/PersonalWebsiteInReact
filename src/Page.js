import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './Page.css'


class Page extends Component {

  render() {
    return (
      <div className="Background-Image">
        <Card className="page-cards">
          <Card.Title>Welcome!</Card.Title>
        </Card>
      </div>
    )
  }
}

export default Page;
