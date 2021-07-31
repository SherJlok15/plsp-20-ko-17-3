import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter  as Router } from 'react-router-dom';
import store from './store';

import './style/app.scss';

import {AppShell} from './modules';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppShell />
    </Router>
  </Provider>,
  document.getElementById('root')
);
