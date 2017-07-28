'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import ScrollableAnchor from 'react-scrollable-anchor'

require('bootstrap/dist/css/bootstrap.css');
require('../../styles/section.css');

class Section extends React.Component {
  render() {
    const {id, sectionClass} = this.props;

    return (
      <ScrollableAnchor id={id} className={sectionClass}>
        <section>
          {this.props.children}
        </section>
      </ScrollableAnchor>
    );
  }
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  sectionClass: PropTypes.string,
  children: PropTypes.object.isRequired
}

export default Section;