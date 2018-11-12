import { fromJS } from 'immutable';
import {
  OPEN_LEFT_DRAWER,
  CLOSE_LEFT_DRAWER,
  CHANGE_ONHOVER_CATEGORY
} from './constants';


// The initial state of the App
const initialState = fromJS({
  leftDrawer: false,
  rightDrawer: false,
  onHoverCategory: null
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_LEFT_DRAWER:
      return state.set('leftDrawer', true);
    case CLOSE_LEFT_DRAWER:
      return state.set('leftDrawer', false);
    case CHANGE_ONHOVER_CATEGORY:
      return state.set('onHoverCategory', action.category);
    default:
      return state;
  }
}

export default appReducer;
