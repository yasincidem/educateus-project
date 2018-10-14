import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import FirebasePage from 'containers/FirebasePage/Loadable';
import Header from 'components/Header';

const App = () => (
  <div className="app-wrapper">
    <Helmet defaultTitle="EducateUS">
    </Helmet>
    <Header />
    <div style={{ marginTop: 68 }}>
      <Switch>
        <Route exact path="/" render={() => <p>Home</p>} />
        <Route path="/firebase" component={FirebasePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  </div>
);

export default App;
