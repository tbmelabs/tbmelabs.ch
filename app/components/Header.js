'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {goToAnchor} from 'react-scrollable-anchor'

import Section from './common/Section';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Button from 'react-bootstrap/lib/Button';

require('bootstrap/dist/css/bootstrap.css');

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();

    goToAnchor('contact');
  }

  render() {
    const {header} = this.props.texts;

    return (
      <header className='text-center'>
        <Section id='page-top'>
          <PageHeader>TBME Labs</PageHeader>
          <p>
            {header.slogan}
          </p>
          <Button onClick={this.onClick}>{header.getInTouch}</Button>
        </Section>
      </header>
    );
  }
}

Header.propTypes = {
  texts: PropTypes.object.isRequired,
}

export default Header;