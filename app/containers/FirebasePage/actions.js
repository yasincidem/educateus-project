import {
  LOAD_DATA_FROM_FIREBASE,
  LOAD_FIREBASE_DATA_SUCCESS,
  LOAD_FIREBASE_DATA_PENDING,
  LOAD_FIREBASE_DATA_ERROR
} from './constants';

export function loadFirebaseData() {
  return {
    type: LOAD_DATA_FROM_FIREBASE,
  };
}

export function firebaseDataLoaded(data) {
  return {
    type: LOAD_FIREBASE_DATA_SUCCESS,
    data
  };
}

export function firebaseDataPending() {
  return {
    type: LOAD_FIREBASE_DATA_PENDING
  };
}

export function firebaseDataError(err) {
  return {
    type: LOAD_FIREBASE_DATA_ERROR,
    err
  };
}
