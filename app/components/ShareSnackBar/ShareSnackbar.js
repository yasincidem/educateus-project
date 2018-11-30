import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share'
import * as $ from 'jquery'

class ShareSnackbar extends React.Component {
    state = {
      open: false,
    };
  
    handleClick = () => {
      this.setState({ open: true })
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val(window.location.href).select();
      document.execCommand("copy");
      $temp.remove();
    }
  
    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

    this.setState({ open: false })
    }
    render() {
      return (
          <React.Fragment>
          <IconButton color="primary" component="span" onClick={this.handleClick} style={{ float: 'right'}}>
              <ShareIcon/>
          </IconButton>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.open}
            autoHideDuration={1500}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Link of the video is copied for sharing. </span>}
            
          />
          </React.Fragment>
      );
    }
  }
  
  export default (ShareSnackbar);