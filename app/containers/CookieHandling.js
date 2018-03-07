'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators}from 'redux';
import {connect} from 'react-redux';

import {withCookies, Cookies} from 'react-cookie';

import {disableCookieWarning} from '../actions/cookieActions';
import {setCurrentLanguage} from '../actions/languageActions';

import CookieWarning from '../components/overlays/CookieWarning';

class CookieHandling extends React.Component {
  componentWillUpdate(nextProps) {
    const {language, cookies} = nextProps;

    cookies.set('language', language);
  }

  render() {
    const {texts, language, showCookieWarning, cookies} = this.props;
    const {setCurrentLanguage, disableCookieWarning} = this.props.actions;

    var cookieLanguage;
    if ((cookieLanguage = cookies.get('language'))) {
      setCurrentLanguage(cookieLanguage);

      return null;
    } else {
      cookies.set('language', language);

      return (
        <CookieWarning texts={texts} show={showCookieWarning} disableCookieWarning={disableCookieWarning}/>
      );
    }
  }
}

CookieHandling.propTypes = {
  texts: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  showCookieWarning: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  cookies: PropTypes.instanceOf(Cookies).isRequired
}

function mapStateToProps(state) {
  return {
    texts: state.language.texts,
    language: state.language.id,
    showCookieWarning: state.cookie.show
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setCurrentLanguage: bindActionCreators(setCurrentLanguage, dispatch),
      disableCookieWarning: bindActionCreators(disableCookieWarning, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(CookieHandling));