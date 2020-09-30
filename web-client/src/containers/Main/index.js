import './main.scss';
import React from 'react';
import { Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navigation from '../../components/Menus/Navigation';
import Home from '../Home';
import Search from '../Search';
import Profile from '../Profile';
import Events from '../Events';
import EventDetail from '../../components/EventDetail';
import PostDetail from '../../components/PostDetail';
import Forums from '../Forums';
import PrivateRoute from '../PrivateRoute';
import Calendar from '../../components/Calendar';
import Settings from '../Settings';
import PageNotFound from '../PageNotFound';

function Main() {
  return (
    <div className="main">
      <Navigation />

      <div className="display">
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/search" component={Search} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/calendar" component={Calendar} />
          <PrivateRoute exact path="/events" component={Events} />
          <PrivateRoute path="/events/:id" component={EventDetail} />
          <PrivateRoute exact path="/posts" component={Home} />
          <PrivateRoute path="/posts/:id" component={PostDetail} />
          <PrivateRoute exact path="/forums" component={Forums} />
          <PrivateRoute exact path="/settings" component={Settings} />
          <PrivateRoute component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}


export default Main;
