// react library
import React from 'react';

// third party library
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';

import LoginContainer from '../login/LoginContainer';
import LandingPage from '../reusables/LandingPage';
import NotFound from '../reusables/NotFound';
import LogOut from '../reusables/LogOut';
import SignUpContainer from '../signUp/SignUpContainer';
const history = browserHistory;

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/logout" component={LogOut} />
      <Route exact path="/signup" component={SignUpContainer} />
      <Route  component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
