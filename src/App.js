import React from 'react';
import './App.css';
import Page from './Page';

function App() {
  return (
    <div className="App">
      <header>Chris Chen's Homepage</header>
      <Page title="About me"></Page>
      <Page title="Contact"></Page>
      <Page title="Projects"></Page>
    </div>
  );
}

export default App;
