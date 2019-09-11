import React from 'react';
import './App.css';
import Page from './Page';

function App() {
  return (
    <div className="App">
      <div className="Background-Image">
        <header className="homepage">Chris Chen's Homepage</header>
          <Page title="About Me"></Page>
          <Page title="Contact"></Page>
          <Page title="Projects"></Page>
      </div>
    </div>
  );
}

export default App;
