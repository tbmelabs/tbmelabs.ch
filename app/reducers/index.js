'use strict';

import {combineReducers} from 'redux';

import cookie from './cookie';
import language from './language';

export default combineReducers({
  cookie, language
});