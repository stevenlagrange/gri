import './App.scss';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import PrivateRoute from './containers/PrivateRoute';
import Main from './containers/Main';
import Login from './containers/Login';
import Register from './containers/Register';
import Splash from './containers/Splash';
import PageNotFound from './containers/PageNotFound';


function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/" component={Main} />
        <Route exact path="/" component={Splash} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
