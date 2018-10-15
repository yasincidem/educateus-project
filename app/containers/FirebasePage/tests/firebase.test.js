import expect from 'expect';

import reducers from '../reducer';

test('reducers', () => {
  const state = reducers({ route: { location: { pathname: '/firebase', search: '', hash: '' } }, global: {}, firebase: { data: false, error: false, loading: true } }, { type: 'educateus/FirebasePage/LOAD_DATA_FROM_FIREBASE' });
  expect(state).toEqual({ route: { location: { pathname: '/firebase', search: '', hash: '' } }, global: {}, firebase: { data: false, error: false, loading: true } });
});
