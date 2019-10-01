import React from 'react';
import './App.css';
import Center from './Center';
import Navbar from './Navbar';
import ExternalLinks from './ExternalLinks';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Center></Center>
      <ExternalLinks></ExternalLinks>
    </div>
  );
}

export default App;
