'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

class Home extends React.Component {
  render() {
    const {texts} = this.props;

    return (
      <app>
        <Navigation texts={texts}/>
        <Header texts={texts}/>
      </app>
    );
  }
}

Home.propTypes = {
  texts: PropTypes.object.isRequired,
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    texts: state.language.texts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      // Map redux-actions here
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);