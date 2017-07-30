'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Section from '../common/Section';
import FadeInOnScroll from '../common/FadeInOnScroll';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import FontAwesome from 'react-fontawesome';

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');

class Contact extends React.Component {
  render() {
    const {contact} = this.props.texts;

    return (
      <Section id='contact' sectionClass='section-light'>
        <Grid>
          <Row>
            <Col lg={8} lgOffset={2}>
              <h2>{contact.heading}</h2>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col lg={8} lgOffset={2}>
              <p>{contact.text}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6}>
              <FadeInOnScroll duration={2000}>
                <a href="https://github.com/tbmelabs">
                  <FontAwesome name='github' className='fa-5x'/>
                  <p>GitHub</p>
                </a>
              </FadeInOnScroll>
            </Col>
            <Col lg={3} md={6}>
              <FadeInOnScroll duration={4000}>
                <a href="https://twitter.com/tbmelabs">
                  <FontAwesome name='twitter' className='fa-5x'/>
                  <p>Twitter</p>
                </a>
              </FadeInOnScroll>
            </Col>
            <Col lg={3} md={6}>
              <FadeInOnScroll duration={6000}>
                <a href="https://instagram.com/tbmelabs">
                  <FontAwesome name='instagram' className='fa-5x'/>
                  <p>Instagram</p>
                </a>
              </FadeInOnScroll>
            </Col>
            <Col lg={3} md={6}>
              <FadeInOnScroll duration={8000}>
                <a href="mailto:info@tbmelabs.ch">
                  <FontAwesome name='envelope' className='fa-5x'/>
                  <p>info@tbmelabs.ch</p>
                </a>
              </FadeInOnScroll>
            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}

Contact.propTypes = {
  texts: PropTypes.object.isRequired
}

export default Contact;