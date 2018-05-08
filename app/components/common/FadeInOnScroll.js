'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import VisibilitySensor from 'react-visibility-sensor';

import Fade from 'react-bootstrap/lib/Fade';

require('bootstrap/dist/css/bootstrap.css');

class FadeInOnScroll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    if (!this.state.isVisible) {
      this.setState({isVisible: isVisible});
    }
  }

  render() {
    const {isVisible} = this.state;

    // Default is as stated in react-bootstrap documentation
    var duration = 300;
    if (this.props.duration) {
      duration = this.props.duration;
    }

    return (
      <VisibilitySensor onChange={this.onChange}>
        <Fade in={isVisible} timeout={duration}>
          {this.props.children}
        </Fade>
      </VisibilitySensor>
    );
  }
}

FadeInOnScroll.propTypes = {
  children: PropTypes.object.isRequired,
  duration: PropTypes.number
}

export default FadeInOnScroll;