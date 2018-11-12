import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }
  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          color="default"
        >
          <Toolbar>
            <IconButton
              component="span"
              color="default"
              aria-label="open drawer"
              onClick={this.props.openLeftDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" type="title" color="inherit">
              EducateUS
            </Typography>
            <div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  openLeftDrawer: PropTypes.func,
};

export default Header;
