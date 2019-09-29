import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './Page.css'


class Page extends Component {

  render() {
    return (
      <div className="Background-Image">
        <Card className="page-cards">
          <h1 className="titular-name">Chris Chen</h1>
        </Card>
      </div>
    )
  }
}

export default Page;
