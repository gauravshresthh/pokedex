import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Router as BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
