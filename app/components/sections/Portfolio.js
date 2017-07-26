'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import getRandomElementsFromArray from '../../utils/getRandomElementsFromArray';

import Section from '../common/Section';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';

require('bootstrap/dist/css/bootstrap.css');

class Portfolio extends React.Component {
  render() {
    const {portfolio} = this.props.texts;

    return (
      <Section id='portfolio'>
        <Grid>
          <Row>
            <Col lg={12}>
              <h2>{portfolio.heading}</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <p>{portfolio.text}</p>
            </Col>
          </Row>
          <Row>
            {
              getRandomElementsFromArray(3, portfolio.selection).map((example, iterator) => {
                return (
                  <Col lg={4} md={6} sm={12} key={iterator}>
                    <a href={example.link} target='_blank'>
                      <Image src={'public/' + require('../../images/' + example.thumbnail)} thumbnail
                             responsive/>
                    </a>
                  </Col>
                );
              })
            }
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