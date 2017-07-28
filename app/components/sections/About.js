'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Section from '../common/Section';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

require('bootstrap/dist/css/bootstrap.css');

class About extends React.Component {
  render() {
    const {about} = this.props.texts;

    return (
      <Section id='about'>
        <Grid>
          <Row>
            <Col lg={8} lgOffset={2}>
              <h2>{about.heading}</h2>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col lg={8} lgOffset={2}>
              <p>{about.text}</p>
            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}

About.propTypes = {
  texts: PropTypes.object.isRequired
}

export default About;