import {
  LOAD_DATA_FROM_YOUTUBE,
  LOAD_YOUTUBE_DATA_SUCCESS,
  LOAD_YOUTUBE_DATA_ERROR
} from './constants';

export function loadYoutubeData() {
  return {
    type: LOAD_DATA_FROM_YOUTUBE,
  };
}

export function youtubeDataLoaded(data) {
  return {
    type: LOAD_YOUTUBE_DATA_SUCCESS,
    data
  };
}

export function youtubeDataError(err) {
  return {
    type: LOAD_YOUTUBE_DATA_ERROR,
    err
  };
}
