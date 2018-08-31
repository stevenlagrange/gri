
/**
 *
 * PrivateRoute
 * Higher Order Component that blocks navigation when the user is not logged in
 * and redirect the user to login page
 *
 * Wrap your protected routes to secure your container
 */

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { browserStorage } from '../../_utilities/browserStorage';
import Splash from '../../containers/Splash'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render= { (props) => (
    browserStorage.getToken() !== null
        ? <Component {...props} />
        : <Splash/>
  )}/>
);

export default PrivateRoute;
