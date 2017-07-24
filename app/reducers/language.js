'use strict';

import {SET_CURRENT_LANGUAGE} from '../actions/types';

const en = require('../languages/en.json');

const initialState = {
  texts: en
}

export default (state = initialState, action = {})=> {
  switch (action.type) {
    case SET_CURRENT_LANGUAGE:
      return {
        texts: require('../languages/' + action.language + '.json'
        )
      }
    default:
      return state;
  }
}