'use strict';

import {DISABLE_COOKIE_WARNING} from '../actions/types';

const initialState = {
  show: true
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case DISABLE_COOKIE_WARNING:
      return {
        show: action.show,
      }
    default:
      return state;
  }
}