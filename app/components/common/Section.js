'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class Section extends React.Component {
  render() {
    const {id, sectionClass} = this.props;

    return (
      <section id={id} className={sectionClass}>
        <div className='container'>
          {this.props.children}
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  sectionClass: PropTypes.string,
  children: PropTypes.object.isRequired
}

export default Section;