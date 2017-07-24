'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Button from 'react-bootstrap/lib/Button';

require('bootstrap/dist/css/bootstrap.css');

class Header extends React.Component {
  render() {
    const {header} = this.props.texts;

    return (
      <header className='text-center'>
        <PageHeader>TBME Labs</PageHeader>
        <p>
          {header.slogan}
        </p>
        <Button><Link className='page-scroll' to='#contact'>{header.getInTouch}</Link></Button>
      </header>
    );
  }
}

Header.propTypes = {
  texts: PropTypes.object.isRequired,
}

export default Header;