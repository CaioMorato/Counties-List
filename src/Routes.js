// vitals
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CountryInfo from './pages/CountryInfo';
// components
import Homepage from './pages/Homepage';

function Routes() {
  return (
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
      <Route
        path={process.env.PUBLIC_URL + '/country/:code/'}
        render={(props) => <CountryInfo {...props} />}
      />
    </Switch>
  );
}

export default Routes;
