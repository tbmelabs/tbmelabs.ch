'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Section from '../common/Section';

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
      <Section id='contact'>
        <Grid>
          <Row>
            <Col lg={8} lgOffset={2}>
              <h2>{contact.heading}</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={8} lgOffset={2}>
              <p>{contact.text}</p>
            </Col>
          </Row>
          <Row>
            <a class="text-faded" href="https://github.com/tbmelabs">
              <Col lg={3} md={6}>
                <FontAwesome name='github' className='fa-5x'/>
                <p>GitHub</p>
              </Col>
            </a>
            <a class="text-faded" href="https://twitter.com/tbmelabs">
              <Col lg={3} md={6}>
                <FontAwesome name='twitter' className='fa-5x'/>
                <p>Twitter</p>
              </Col>
            </a>
            <a class="text-faded" href="https://instagram.com/tbmelabs">
              <Col lg={3} md={6}>
                <FontAwesome name='instagram' className='fa-5x'/>
                <p>Instagram</p>
              </Col>
            </a>
            <a class="text-faded" href="mailto:info@tbmelabs.ch">
              <Col lg={3} md={6}>
                <FontAwesome name='envelope' className='fa-5x'/>
                <p>info@tbmelabs.ch</p>
              </Col>
            </a> </Row>
        </Grid>
      </Section>
    );
  }
}

Contact.propTypes = {
  texts: PropTypes.object.isRequired
}

export default Contact;