/**
 *
 * PrivateRoute
 * Higher Order Component that blocks navigation when the user is not logged in
 * and redirect the user to login page
 *
 * Wrap your protected routes to secure your container
 */

import React from 'react';
import { Route } from 'react-router-dom';
import browserStorage from '../../_utilities/browserStorage';
import Login from '../Login';
import ErrorBoundary from '../../components/ErrorBoundary';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      browserStorage.getToken() !== null
        ? <ErrorBoundary><Component {...props} /></ErrorBoundary>
        : <Login />
    )}
  />
);

export default PrivateRoute;
