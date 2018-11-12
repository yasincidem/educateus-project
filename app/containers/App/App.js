import React from 'react';
import { Helmet } from 'react-helmet';

import { Switch, Route } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import LeftDrawer from 'components/LeftDrawer';
import RightDrawer from 'components/RightDrawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';

import { Scrollbars } from 'react-custom-scrollbars';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import FirebasePage from 'containers/FirebasePage/Loadable';

import { isMobile } from 'react-device-detect';

import Header from 'components/Header';

import PropTypes from 'prop-types';

class App extends React.Component {
  componentDidMount() {

  }
  render() {
    const { classes, leftDrawer, onhoverCategory } = this.props;
    return (
      <div
        style={{
          zIndex: 1,
          overflow: 'hidden',
          position: 'relative',
          width: '100%'
        }}
      >
        <Drawer
          variant="persistent"
          anchor="left"
          open={leftDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton component="span" onClick={this.props.closeLeftDrawer} className={classes.icon}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Scrollbars style={{ width: 240, height: 'calc(100% - 48px)' }}>
            <LeftDrawer changeOnhoverCategory={this.props.changeOnhoverCategory} closeLeftDrawer={this.props.closeLeftDrawer} />
          </Scrollbars>
        </Drawer>

        {!isMobile && (
          <Drawer
            variant="persistent"
            anchor="right"
            open={leftDrawer}
            classes={{
              paper: classes.drawerPaperRight,
            }}
          >
            <Scrollbars className="container-fluid" >
              <RightDrawer category={onhoverCategory} closeLeftDrawer={this.props.closeLeftDrawer} />
            </Scrollbars>
          </Drawer>
        )}
        <Helmet defaultTitle="EducateUS">
        </Helmet>

        <Header openLeftDrawer={this.props.openLeftDrawer} />
        <div style={{ marginTop: 72 }}>
          <Switch>
            <Route exact path="/" render={() => <p>Home</p>} />
            <Route path="/firebase" component={FirebasePage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object,
  leftDrawer: PropTypes.bool,
  openLeftDrawer: PropTypes.func,
  onhoverCategory: PropTypes.object,
  changeOnhoverCategory: PropTypes.func,
  closeLeftDrawer: PropTypes.func
};

export default App;
