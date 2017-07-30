'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {goToAnchor} from 'react-scrollable-anchor'

import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

require('bootstrap/dist/css/bootstrap.css');
require('../styles/navigation.css');

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();

    goToAnchor(event.target.href.split('#')[1]);
  }

  render() {
    const {navigation} = this.props.texts;

    return (
      <navigation>
        {/*<Navbar collapseOnSelect fixedTop className={this.state.isScrolling ? 'navbar-scrolled' : null}>*/}
        <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link onClick={this.onClick} to="#page-top">TBME Labs</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer onClick={this.onClick} to='#page-top'>
                <NavItem>{navigation.toTop}</NavItem>
              </LinkContainer>
              <LinkContainer onClick={this.onClick} to='#about'>
                <NavItem>{navigation.about}</NavItem>
              </LinkContainer>
              <LinkContainer onClick={this.onClick} to='#services'>
                <NavItem>{navigation.services}</NavItem>
              </LinkContainer>
              <LinkContainer onClick={this.onClick} to='#portfolio'>
                <NavItem>{navigation.portfolio}</NavItem>
              </LinkContainer>
              <LinkContainer onClick={this.onClick} to='#team'>
                <NavItem>{navigation.team}</NavItem>
              </LinkContainer>
              <LinkContainer onClick={this.onClick} to='#contact'>
                <NavItem>{navigation.contact}</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </navigation >
    );
  }
}

Navigation.propTypes = {
  texts: PropTypes.object.isRequired,
}

export default Navigation;