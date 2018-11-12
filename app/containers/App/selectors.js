/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectApp = (state) => state.get('app');

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLeftDrawer = () => createSelector(
  selectApp,
  (state) => state.get('leftDrawer')
);

const makeSelectOnhoverCategory = () => createSelector(
  selectApp,
  (state) => state.get('onHoverCategory')
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectLocation,
  makeSelectLeftDrawer,
  makeSelectOnhoverCategory
};
