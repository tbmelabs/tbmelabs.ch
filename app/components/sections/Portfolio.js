'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Section from '../common/Section';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

require('bootstrap/dist/css/bootstrap.css');

class Portfolio extends React.Component {
  render() {
    const {portfolio} =this.props.texts;

    return (
      <Section id='portfolio'>
        <Grid className='text-center'>
          <Row>
            <Col lg={12}>
              <h2>{portfolio.heading}</h2>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col lg={12}>
              <p>{portfolio.text}</p>
            </Col>
          </Row>
          <Row>

          </Row>
        </Grid>
      </Section>
    );
  }
}

Portfolio.propTypes = {
  texts: PropTypes.object.isRequired
}

export default Portfolio;