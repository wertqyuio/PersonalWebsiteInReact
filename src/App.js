import React from 'react';
import './App.css';
import Center from './Center';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faAngellist, faCentercode } from '@fortawesome/free-brands-svg-icons';
import InternalLink from './InternalLink';

function App() {
  return (
    <div className="App">
      <span className="internal-links"><InternalLink whereabouts="portfolio"></InternalLink>
      </span>
      <span className="internal-links-2"><InternalLink whereabouts="contact"></InternalLink>
      </span>
      <span className="internal-links-3"><InternalLink whereabouts="bridge"></InternalLink>
      </span>
      <span className="internal-links-4"><InternalLink whereabouts="reading"></InternalLink>
      </span>
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
      <Center></Center>
    </div>
  );
}

export default App;
