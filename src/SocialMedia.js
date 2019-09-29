import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export class SocialMedia extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.location = this.state.route.loc;
  }
  render(){
    return (<section>SocialMediaing...</section>);
  }
}

export default SocialMedia;