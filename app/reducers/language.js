'use strict';

import {SET_CURRENT_LANGUAGE} from '../actions/types';

const de = require('../languages/de.json');

const initialState = {
  name: de.name,
  texts: de,
  id: 'de'
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_LANGUAGE:
      const language = require('../languages/' + action.language + '.json');

      return {
        name: language.name,
        texts: language,
        id: action.language
      }
    default:
      return state;
  }
}