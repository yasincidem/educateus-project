import {
  SEND_PASSWORD_RESET_EMAIL,
  EMAIL_ERROR,
  CHANGE_EMAIL
} from './constants';


export function sendPasswordResetEmail(email) {
  return {
    type: SEND_PASSWORD_RESET_EMAIL,
    email
  };
}

export function emailErrror() {
  return {
    type: EMAIL_ERROR
  };
}

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email
  };
}

