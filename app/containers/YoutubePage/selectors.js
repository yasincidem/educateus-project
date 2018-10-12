import { createSelector } from 'reselect';

const selectYoutube = (state) => state.get('youtube');

const makeSelectYoutubeData = () => createSelector(
  selectYoutube,
  (youtubeState) => youtubeState.get('data')
);
const makeSelectYoutubeDataError = () => createSelector(
  selectYoutube,
  (youtubeState) => youtubeState.get('error')
);

export {
  selectYoutube,
  makeSelectYoutubeData,
  makeSelectYoutubeDataError
};
