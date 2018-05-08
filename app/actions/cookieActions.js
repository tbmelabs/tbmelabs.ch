'use strict';

import {DISABLE_COOKIE_WARNING} from './types';

export function disableCookieWarning() {
  return {
    type: DISABLE_COOKIE_WARNING,
    show: false
  }
}