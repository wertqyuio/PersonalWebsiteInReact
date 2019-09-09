import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './Page.css'


class Page extends Component {
  render() {
    return (
      <Card className="page-cards">
        <Card.Title>{this.props.title}</Card.Title>
      </Card>
    )
  }
}

export default Page;
