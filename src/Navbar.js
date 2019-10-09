import React, { Component } from 'react';
import InternalLink from './InternalLink';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  static defaultProps = {
    current: "home",
    locations: ["home", "portfolio", "about", "bridge", "reading"]
  };

  constructor(props) {
    super(props);
    this.state = {
      current:
        this.props.locations.filter(location => location === window.location.href.replace("http://localhost:3000/", "")).length === 1 ?
          this.props.locations.filter(location => location === window.location.href.replace("http://localhost:3000/", "")) : "home"
      , locations: this.props.locations.filter(location => location !== window.location.href.replace("http://localhost:3000/", ""))
    };
  }

  render() {
    alert(this.state.locations)
    return (
      <nav>
        <InternalLink futurestyle="current-page" whereabouts={this.state.current}></InternalLink>
        <InternalLink futurestyle="internal-links" whereabouts={this.state.locations[0]}></InternalLink>
        <InternalLink futurestyle="internal-links-2" whereabouts={this.state.locations[1]}></InternalLink>
        <InternalLink futurestyle="internal-links-3" whereabouts={this.state.locations[2]}></InternalLink>
        <InternalLink futurestyle="internal-links-4" whereabouts={this.state.locations[3]}></InternalLink>
      </nav>
    )
  }
}

export default Navbar;

{/* <InternalLink futurestyle={"current-page"} whereabouts={this.state.current.toUpperCase()}></InternalLink>
        <span className="internal-links"><InternalLink whereabouts={this.state.locations[0]}></InternalLink>
        </span>
        <span className="internal-links-2"><InternalLink whereabouts={this.state.locations[1]}></InternalLink>
        </span>
        <span className="internal-links-3"><InternalLink whereabouts={this.state.locations[2]}></InternalLink>
        </span>
        <span className="internal-links-4"><InternalLink whereabouts={this.state.locations[3]}></InternalLink>
        </span> */}