import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './style.scss';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    flex: 1
  }
};


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <p>Yasin</p>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
