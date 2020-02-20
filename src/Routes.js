import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ReadingPage from './ReadingPage';
import BridgePage from './BridgePage';
import AboutPage from './AboutPage';
import PortfolioPage from './PortfolioPage';

class Routes extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/home' render={()=> <HomePage/>}/>
        <Route exact path='/portfolio' render={()=> <PortfolioPage/>}/>
        <Route exact path='/about' render={()=> <AboutPage/>}/>
        <Route exact path='/bridge' render={()=> <BridgePage/>}/>
        <Route exact path='/reading' render={()=> <ReadingPage/>}/>
        <Redirect to='/home'/>
      </Switch>
    )
  }
}

export default Routes;