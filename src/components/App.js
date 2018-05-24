import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import LoadingBar from 'react-redux-loading-bar';
import '../../node_modules/reset-css/reset.css';

import Home from './Home/Home';

export const history = createHistory();

const App = () => (
  <div>
    <LoadingBar updateTime={100} style={{ background: '#000' }} />
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  </div>
);

export default App;
