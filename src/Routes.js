import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ReadingPage from './ReadingPage';

class Routes extends Component {
  render(){
    return(
      <Switch>
        <Route exact path='/home' render={()=> <HomePage/>}/>
        <Route exact path='/reading' render={()=> <ReadingPage current="reading"/>}/>
        <Redirect to='/home'/>
      </Switch>
    )
  }
}

export default Routes;