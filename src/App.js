import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar';
import ExternalLinks from './ExternalLinks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.location
    }
  }

  componentDidMount() {
    this.setState({ current: "home" })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes/>
          <ExternalLinks/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;