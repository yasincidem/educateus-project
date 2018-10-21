import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const ResetPassword = (props) => (
  <div>
    <TextField
      id="standard-name"
      label="Name"
      value={props.email}
      onChange={props.onChangeEmail}
      margin="normal"
    />
    <Button variant="outlined" onClick={(e) => props.sendEmail(e)}>
      Send Email
    </Button>
  </div>
);

ResetPassword.propTypes = {
  sendEmail: PropTypes.func,
  onChangeEmail: PropTypes.func,
  email: PropTypes.any
};

export default ResetPassword;
