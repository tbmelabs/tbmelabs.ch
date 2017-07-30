'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Aside from '../common/Aside';

import Button from 'react-bootstrap/lib/Button';

require('bootstrap/dist/css/bootstrap.css');

class OpenSourceProjects extends React.Component {
  render() {
    const {openSourceProjects} = this.props.texts;

    return (
      <Aside assideClass='aside-light'>
        <div className='container'>
          <h2>{openSourceProjects.heading}</h2>
          <a href='https://github.com/tbmelabs'><Button>{openSourceProjects.linkText}</Button></a>
        </div>
      </Aside>
    );
  }
}

OpenSourceProjects.propTypes = {
  texts: PropTypes.object.isRequired
}

export default OpenSourceProjects;