import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }
  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
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

export default Header;
