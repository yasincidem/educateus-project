import { createSelector } from 'reselect';

const selectResetPassword = (state) => state.get('resetpassword');

const makeSelectResetPasswordError = () => createSelector(
  selectResetPassword,
  (ResetPasswordState) => ResetPasswordState.get('error')
);

const makeSelectEmail = () => createSelector(
  selectResetPassword,
  (ResetPasswordState) => ResetPasswordState.get('email')
);

export {
  selectResetPassword,
  makeSelectResetPasswordError,
  makeSelectEmail
};
