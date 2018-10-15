import { createSelector } from 'reselect';

const selectFirebase = (state) => state.get('firebase');

const makeSelectFirebaseData = () => createSelector(
  selectFirebase,
  (youtubeState) => youtubeState.get('data')
);
const makeSelectFirebaseDataError = () => createSelector(
  selectFirebase,
  (youtubeState) => youtubeState.get('error')
);
const makeSelectFirebaseDataLoading = () => createSelector(
  selectFirebase,
  (youtubeState) => youtubeState.get('loading')
);

export {
  selectFirebase,
  makeSelectFirebaseData,
  makeSelectFirebaseDataError,
  makeSelectFirebaseDataLoading
};
