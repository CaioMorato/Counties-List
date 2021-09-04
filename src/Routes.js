// vitals
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Homepage from './pages/Homepage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  );
}

export default Routes;
