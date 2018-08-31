import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Router } from 'react-router-dom';
import history from './history.js'
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <ParallaxProvider>
    <Router history={ history }>
      <App />
    </Router>
  </ParallaxProvider>,
  document.getElementById('root')
);

module.hot.accept();
