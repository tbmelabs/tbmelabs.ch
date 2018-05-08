'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {goToAnchor} from 'react-scrollable-anchor'

import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

require('bootstrap/dist/css/bootstrap.css');
require('../styles/navigation.css');

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const isTop = window.scrollY < 100;
    if (isTop !== this.state.isTop) {
      this.setState({isTop});
    }
  }

  onClick(event) {
    event.preventDefault();

    goToAnchor(event.target.href.split('#')[1]);
  }

  onSelect(eventKey) {
    this.props.switchLanguage(eventKey);
  }

  render() {
    const {isTop} = this.state;
    const {name, navigation} = this.props.texts;

    return (
      <navigation>
        <Navbar collapseOnSelect fixedTop className={!isTop ? 'navbar-scrolled' : null}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link onClick={this.onClick} to="#page-top">TBME Labs</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
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
            <Nav pullRight onSelect={this.onSelect}>
              <NavDropdown id='select-language-dropdown' title={name}>
                {
                  name === 'English' ? null :
                    <MenuItem eventKey='en'>English</MenuItem>
                }
                {
                  name === 'Deutsch' ? null :
                    <MenuItem eventKey='de'>Deutsch</MenuItem>
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <
        /navigation>
        );
        }
        }

        Navigation.propTypes = {
        texts: PropTypes.object.isRequired,
        switchLanguage: PropTypes.func.isRequired
      }

        export default Navigation;