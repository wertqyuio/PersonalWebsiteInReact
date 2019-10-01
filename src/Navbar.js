import React, { Component } from 'react';
import InternalLink from './InternalLink';

class Navbar extends Component {
  static defaultProps = {
    current: "home",
    locations: ["home","portfolio","contact","bridge","reading"]
  };

  constructor(props) {
    super(props);
    this.state = { current: this.props.current, locations: this.props.locations.filter(location => location !== this.props.current) };
  }

  render() {
    return (
      <span>
        <span className="current-page"><InternalLink whereabouts={this.state.current.toUpperCase()}></InternalLink>
        </span>
        <span className="internal-links"><InternalLink whereabouts={this.state.locations[0]}></InternalLink>
        </span>
        <span className="internal-links-2"><InternalLink whereabouts={this.state.locations[1]}></InternalLink>
        </span>
        <span className="internal-links-3"><InternalLink whereabouts={this.state.locations[2]}></InternalLink>
        </span>
        <span className="internal-links-4"><InternalLink whereabouts={this.state.locations[3]}></InternalLink>
        </span>
      </span>
    )
  }
}

export default Navbar;