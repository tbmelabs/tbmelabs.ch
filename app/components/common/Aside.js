'use strict';

import React from 'react';
import PropTypes from 'prop-types';

require('bootstrap/dist/css/bootstrap.css');

class Aside extends React.Component {
  render() {
    const {assideClass} = this.props;

    return (
      <aside className={assideClass}>
        <div className='container text-center'>
          {this.props.children}
        </div>
      </aside>
    )
  }
}

Aside.propTypes = {
  assideClass: PropTypes.string,
  children: PropTypes.object.isRequired
}

export default Aside;