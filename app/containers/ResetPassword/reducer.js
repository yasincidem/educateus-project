import { fromJS } from 'immutable';
import {
  EMAIL_ERROR,
  SEND_PASSWORD_RESET_EMAIL,
  CHANGE_EMAIL
} from './constants';

const initialState = fromJS({
  error: false,
  email: ''
});

function resetPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_PASSWORD_RESET_EMAIL:
      return state;
    case EMAIL_ERROR:
      return state
        .set('error', true);
    case CHANGE_EMAIL:
      return state
        .set('email', action.email);
    default:
      return state;
  }
}

export default resetPasswordReducer;
