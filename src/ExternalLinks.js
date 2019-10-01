import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons';

class ExternalLinks extends Component {
  render() {
    return (
      <span>
        <span className="wertqyuio-li">
          <a href="https://www.linkedin.com/in/cirsh-cenh/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/wertqyuio/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
        <span className="wertqyuio-li-2">
          <a href="https://angel.co/chris-chen-46?public_profile=1">
            <FontAwesomeIcon icon={faAngellist} />
          </a>
        </span>
      </span>
    )
  }
}

export default ExternalLinks;