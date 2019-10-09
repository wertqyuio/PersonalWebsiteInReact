import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class InternalLink extends Component {

  render() {
    return (
      <span className={this.props.futurestyle}>
      <NavLink exact to={'/'+this.props.whereabouts}>{this.props.whereabouts}</NavLink>
      </span>
    )
  }
}

export default InternalLink;