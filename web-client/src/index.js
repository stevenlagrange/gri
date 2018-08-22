import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {
  BrowserRouter as Router,
  browserHistory
} from 'react-router-dom';

ReactDOM.render(
  <Router history={ browserHistory }>
    <App />
  </Router>,
  document.getElementById('app')
);

module.hot.accept();
