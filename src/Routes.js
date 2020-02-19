import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ReadingPage from './ReadingPage';
import BridgePage from './BridgePage';

class Routes extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/home' render={()=> <HomePage/>}/>
        <Route exact path='/reading' render={()=> <ReadingPage current="reading"/>}/>
        <Route exact path='/bridge' render={()=> <BridgePage current="reading"/>}/>
        <Redirect to='/home'/>
      </Switch>
    )
  }
}

export default Routes;