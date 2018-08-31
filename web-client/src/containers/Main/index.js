import './main.scss';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  browserHistory,
  Route,
  Switch,
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navigation from '../../components/Navigation';
import Splash from '../../containers/Splash';
import Home from '../../containers/Home';
import Search from '../../containers/Search';
import Profile from '../../containers/Profile';
import Events from '../../containers/Events';
import Forums from '../../containers/Forums';
import PrivateRoute from '../../containers/PrivateRoute';
import Calendar from '../../components/Calendar'
import Settings from '../../containers/Settings';
import PageNotFound from '../../containers/PageNotFound';
import logo from '../../images/logo.png';


class Main extends Component {
  render() {
    return (
      <div className="main">
        <Navigation />

        <Container>
          <div className="display">
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <PrivateRoute path='/search' component={Search} />
              <PrivateRoute path='/profile' component={Profile} />
              <PrivateRoute path='/calendar' component={Calendar} />
              <PrivateRoute path='/events' component={Events} />
              <PrivateRoute path='/forums' component={Forums} />
              <PrivateRoute path='/settings' component={Settings} />
              <PrivateRoute component={PageNotFound}/>
            </Switch>
          </div>
        </Container>

      </div>
    );
  }
}


export default Main;
