// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedPage from './components/ProtectedPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/protected" component={ProtectedPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
