/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" >
          Photos
        </Typography>
        <Button variant="outlined" component={Link} to="/hello1" color="secondary">
          Login Button
        </Button>
        <Button variant="outlined" component={Link} to="/hello2" color="secondary">
          Login Button
        </Button>
        <Button variant="outlined" component={Link} to="/hello3" color="secondary">
          Login Button
        </Button>
      </Toolbar>
    </AppBar>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="/hello1" render={() => <p className="display-3">Hello1</p>} />
      <Route path="/hello2" render={() => <p className="display-3">Hello2</p>} />
      <Route path="/hello3" render={() => <p className="display-3">Hello3</p>} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
