import { fromJS } from 'immutable';
import {
  LOAD_DATA_FROM_YOUTUBE,
  LOAD_YOUTUBE_DATA_SUCCESS,
  LOAD_YOUTUBE_DATA_ERROR
} from './constants';

const initialState = fromJS({
  data: false,
  error: false
});

function youtubeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA_FROM_YOUTUBE:
      return state
        .set('data', false)
        .set('error', false);
    case LOAD_YOUTUBE_DATA_SUCCESS:
      return state
        .set('data', action.data)
        .set('error', false);
    case LOAD_YOUTUBE_DATA_ERROR:
      return state
        .set('data', false)
        .set('error', true);
    default:
      return state;
  }
}

export default youtubeReducer;
