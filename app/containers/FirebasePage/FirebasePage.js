import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LoadingIndicator from 'components/LoadingIndicator';


class FirebasePage extends Component {
  componentDidMount() {
    this.props.getData();
  }

  static getDerivedStateFromProps() {
    return null;
  }

  componentDidUpdate() {
    this.props.getData();
  }

  render() {
    const tags = this.props.data ? this.props.data.map((item, idx) => (
      <ListItem button key={`quote${idx}`}>
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
  getData: PropTypes.func,
  data: PropTypes.any,
  loading: PropTypes.bool
};

export default FirebasePage;
