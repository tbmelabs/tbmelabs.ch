'use strict';

import React from 'react';
import PropTypes from 'prop-types';

require('bootstrap/dist/css/bootstrap.css');
require('../../styles/aside.css');

class Aside extends React.Component {
  render() {
    const {assideClass} = this.props;

    return (
      <aside className={assideClass}>
        {this.props.children}
      </aside>
    )
  }
}

Aside.propTypes = {
  assideClass: PropTypes.string,
  children: PropTypes.object.isRequired
}

export default Aside;