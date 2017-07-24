'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

class Home extends React.Component {
  render() {
    const {home} = this.props.texts;

    return (
      <h1>{home.heading}</h1>
    );
  }
}

Home.propTypes = {
  texts: PropTypes.object.isRequired
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    texts: state.language.texts
  }
}

export default connect(mapStateToProps, null)(Home);