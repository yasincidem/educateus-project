import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA_FROM_YOUTUBE } from './constants';
import {
  youtubeDataLoaded,
  youtubeDataError
} from './actions';

export function* getYoutubeData() {
  const requestURL = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = yield call(request, requestURL);
    yield put(youtubeDataLoaded(response));
    console.log(response);
  } catch (err) {
    yield put(youtubeDataError(err));
  }
}


/**
 * Root saga manages watcher lifecycle
 */
export default function* youtubeData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_DATA_FROM_YOUTUBE, getYoutubeData);
}

