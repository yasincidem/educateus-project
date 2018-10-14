import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LoadingIndicator from 'components/LoadingIndicator';


class FirebasePage extends Component {
  componentDidMount() {
    this.props.getDataButtonClick();
  }
  render() {
    const tags = this.props.data ? this.props.data.map((item) => (
      <ListItem button>
        <ListItemText primary={item.quote} secondary={item.person} />
      </ListItem>
    )) : (
      <ListItem key="errorItem" button disabled>
        <ListItemText primary={'An error occured'} />
      </ListItem>
    );

    return (
      <div>
        <List component="nav">
          {this.props.loading ? <LoadingIndicator /> : (tags)}
        </List>
      </div>
    );
  }
}

FirebasePage.propTypes = {
  getDataButtonClick: PropTypes.func,
  data: PropTypes.any,
  loading: PropTypes.bool
};

export default FirebasePage;
