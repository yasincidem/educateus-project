import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectResetPasswordError,
  makeSelectEmail
} from './selectors';
import {
  sendPasswordResetEmail,
  changeEmail
} from './actions';
import reducer from './reducer';
import saga from './saga';
import ResetPassword from './ResetPassword';

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (evt) => {
    evt.preventDefault();
    dispatch(sendPasswordResetEmail('yasincidem@gmail.com'));
  },
  onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
});

const mapStateToProps = createStructuredSelector({
  error: makeSelectResetPasswordError(),
  email: makeSelectEmail()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'resetpassword', reducer });
const withSaga = injectSaga({ key: 'resetpassword', saga });

export default compose(withReducer, withSaga, withConnect)(ResetPassword);
export { mapDispatchToProps };
