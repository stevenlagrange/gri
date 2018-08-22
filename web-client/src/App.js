
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
import Splash from './containers/Splash';
import Home from './containers/Home';
import Search from './containers/Search';
import Profile from './containers/Profile';
import Events from './containers/Events';
import Calendar from './components/Calendar'
import Settings from './containers/Settings';
import PageNotFound from './containers/PageNotFound';
import logo from './images/logo.png';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar brand='GRI' right>
          <li><NavLink to="/search"><Icon>search</Icon></NavLink></li>
          <li><NavLink to="/profile"><Icon>account_circle</Icon></NavLink></li>
          <li><NavLink to="/calendar"><Icon>event</Icon></NavLink></li>
          <li><NavLink to="/settings"><Icon>settings</Icon></NavLink></li>
        </Navbar>

        <div className="main">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={Search} />
            <Route path='/profile' component={Profile} />
            <Route path='/calendar' component={Calendar} />
            <Route path='/settings' component={Settings} />
            <Route exact path='/splash' component={Splash} />
            <Route component={PageNotFound}/>
          </Switch>
       </div>
      </div>
    );
  }
}


export default App;
