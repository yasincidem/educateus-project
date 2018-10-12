import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class YoutubePage extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const tags = this.props.data ? this.props.data.map((item) => (
      <ListItem key={item.id} button>
        <ListItemText primary={item.name} />
      </ListItem>
    )) : (
      <ListItem key="errorItem" button>
        <ListItemText primary={'An error occured'} />
      </ListItem>
    );

    return (
      <div>
        <p>YoutubePage</p>
        <Button variant="outlined" color="primary" onClick={this.props.getDataButtonClick}>
          Get Data
        </Button>
        <List component="nav">
          {tags}
        </List>
      </div>
    );
  }
}

YoutubePage.propTypes = {
  getDataButtonClick: PropTypes.func,
  data: PropTypes.any
};

export default YoutubePage;
