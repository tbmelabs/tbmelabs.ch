'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import ScrollableAnchor, {goToAnchor} from 'react-scrollable-anchor';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Button from 'react-bootstrap/lib/Button';

require('bootstrap/dist/css/bootstrap.css');
require('../styles/header.css');

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
      <ScrollableAnchor id='page-top'>
        <header>
          <div id='header-content'>
            <PageHeader>TBME Labs</PageHeader>
            <p>
              {header.slogan}
            </p>
            <Button onClick={this.onClick}>{header.getInTouch}</Button>
          </div>
        </header>
      </ScrollableAnchor>
    );
  }
}

Header.propTypes = {
  texts: PropTypes.object.isRequired,
}

export default Header;