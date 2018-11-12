import {
  OPEN_LEFT_DRAWER,
  CLOSE_LEFT_DRAWER,
  CHANGE_ONHOVER_CATEGORY
} from './constants';

export function openLeftDrawer() {
  return {
    type: OPEN_LEFT_DRAWER
  };
}

export function closeLeftDrawer() {
  return {
    type: CLOSE_LEFT_DRAWER,
  };
}

export function changeOnhoverCategory(category) {
  return {
    type: CHANGE_ONHOVER_CATEGORY,
    category
  };
}
