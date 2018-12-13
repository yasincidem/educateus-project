import React from 'react'
import fire from '../config/fire'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Popover from '@material-ui/core/Popover'
import '../styles/AddSnackbar.css'
import {Link} from 'react-router-dom'

class AddVideoSnackbar extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
          open: false,
          message: '',
          anchorEl: null
        }
    }
    
    handleClickAnchor = event => {
      this.setState({
        anchorEl: event.currentTarget,
      })
    }
  
    handleCloseAnchor = () => {
      this.setState({
        anchorEl: null,
      })
    }
  
    handleClick = () => {
      this.setState({ open: true })
      
    }
  
    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      this.setState({ open: false })
    }
  
  
  
    addLikedVideos(videoid, uid){
      key = fire.database().ref().child(`users/favourites/${uid}`).push().key
          console.log(favkey)
          const updates = {}
          updates[`users/favourites/${uid}/` + favkey] = videoid
          fire.database().ref().update(updates).then(() => {
              this.setState({open: true, message: 'Video is added to the video list'})
          })
    }
  
    render() {
      const { classes } = this.props
      const { anchorEl } = this.state
      return (
        <React.Fragment>
          {this.props.uid === null ? (
            <React.Fragment>
            <IconButton onClick={this.handleClickAnchor}
              color="primary" 
              component="span" 
              style={{ float: 'right'}}
          >    
              <AddCircleIcon/>
          </IconButton>
          <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={this.handleCloseAnchor}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          >
        <Button disabled={true} style={{display: 'inline'}} className={classes.typography}>You have to </Button>
        <Button className={classes.typography} style={{ textDecoration: 'none', color: this.props.color}} component={Link} to={{pathname: '/login', state: {from: window.location.pathname}}} >
        Log in
        </Button>
          </Popover>
        </React.Fragment>
          ) : (
            <IconButton onClick={() => {
              this.addLikedVideos(this.props.videoid, this.props.uid)
          }}
              color="primary" 
              component="span" 
              style={{ float: 'right'}}
          >    
              <AddCircleIcon/>
          </IconButton>
          )}
          
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
            message={<span id="message-id">{this.state.message}</span>}
          />
          </React.Fragment>
      );
    }
  }
  
  export default withStyles(styles)(AddVideoSnackbar);