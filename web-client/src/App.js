import './App.scss';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  browserHistory,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import { Navbar, NavItem, Icon, Footer, Input } from 'react-materialize';
import { Authorization } from './_services/authorization';

import PrivateRoute from './containers/PrivateRoute';
import Main from './containers/Main';
import Login from './containers/Login';
import Register from './containers/Register';
import Splash from './containers/Splash';
import PageNotFound from './containers/PageNotFound';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <PrivateRoute path="/" component={Main}/>
          <Route exact path="/" component={Splash}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}



export default App;
