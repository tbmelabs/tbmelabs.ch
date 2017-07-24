'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

require('bootstrap/dist/css/bootstrap.css');

class Navigation extends React.Component {
  render() {
    const {navigation} = this.props.texts;

    return (
      <navigation>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link className='page-scroll' to="#page-top">TBME Labs</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer className='page-scroll' to='#page-top'>
                <NavItem>{navigation.toTop}</NavItem>
              </LinkContainer>
              <LinkContainer className='page-scroll' to='#about'>
                <NavItem>{navigation.about}</NavItem>
              </LinkContainer>
              <LinkContainer className='page-scroll' to='#services'>
                <NavItem>{navigation.services}</NavItem>
              </LinkContainer>
              <LinkContainer className='page-scroll' to='#portfolio'>
                <NavItem>{navigation.portfolio}</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </navigation>
    );
  }
}

Navigation.propTypes = {
  texts: PropTypes.object.isRequired,
}

export default Navigation;