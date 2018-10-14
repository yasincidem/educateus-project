import { fromJS } from 'immutable';
import {
  LOAD_DATA_FROM_FIREBASE,
  LOAD_FIREBASE_DATA_PENDING,
  LOAD_FIREBASE_DATA_SUCCESS,
  LOAD_FIREBASE_DATA_ERROR
} from './constants';

const initialState = fromJS({
  data: false,
  error: false,
  loading: false
});

function fireaseReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_FROM_FIREBASE:
      return state;
    case LOAD_FIREBASE_DATA_PENDING:
      return state
        .set('loading', true);
    case LOAD_FIREBASE_DATA_SUCCESS:
      return state
        .set('data', action.data)
        .set('loading', false)
        .set('error', false);
    case LOAD_FIREBASE_DATA_ERROR:
      return state
        .set('data', false)
        .set('loading', false)
        .set('error', true);
    default:
      return state;
  }
}

export default fireaseReducer;
