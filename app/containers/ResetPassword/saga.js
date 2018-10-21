import fire from 'fire';
import { put, select, takeLatest, call } from 'redux-saga/effects';
import ReduxSagaFirebase from 'redux-saga-firebase';
import { SEND_PASSWORD_RESET_EMAIL } from './constants';
import { emailErrror } from './actions';
import { makeSelectEmail } from './selectors';

const rsf = new ReduxSagaFirebase(fire);

function* sendPasswordResetEmailSaga() {
  try {
    const email = yield select(makeSelectEmail());
    yield call(rsf.auth.sendPasswordResetEmail, email);
    console.log(email);
  } catch (error) {
    console.log(error);
    yield put(emailErrror(error));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* ResetPasswordWatcherSaga() {
  yield takeLatest(SEND_PASSWORD_RESET_EMAIL, sendPasswordResetEmailSaga);
}
