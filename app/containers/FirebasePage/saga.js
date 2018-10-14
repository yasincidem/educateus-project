import fire from 'fire';
import { fork, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { LOAD_DATA_FROM_FIREBASE } from './constants';
import { firebaseDataLoaded, firebaseDataPending } from './actions';

function createEventChannel() {
  const listener = eventChannel(
    (emit) => {
      fire.database().ref('Data')
        .on(
          'value',
          (data) => {
            emit(data.val());
            console.log(data.val());
          });
      return () => fire.database().ref('Data').off(listener);
    }
  );
  return listener;
}

function* updatedItemSaga() {
  yield put(firebaseDataPending());
  const updateChannel = createEventChannel();
  while (true) {
    const item = yield take(updateChannel);
    yield put(firebaseDataLoaded(item));
  }
}

function* createItemSaga() {
  yield take(LOAD_DATA_FROM_FIREBASE);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* youtubeData() {
  yield fork(createItemSaga);
  yield fork(updatedItemSaga);
}

