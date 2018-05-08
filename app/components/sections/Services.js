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

class Services extends React.Component {
  render() {
    const {services} = this.props.texts;

    return (
      <Section id='services' sectionClass='section-light'>
        <Grid>
          <Row>
            <Col lg={12}>
              <h2 className='section-title'>{services.heading}</h2>
            </Col>
          </Row>
          <hr/>
          <Row>
            {services.offers.map((offer, iterator) => {
              return (
                <Col lg={3} md={6} key={offer.heading}>
                  <FadeInOnScroll duration={(iterator + 1) * 2000}>
                    <div>
                      <FontAwesome name={offer.icon} className='fa-4x'/>
                      <h3>{offer.heading}</h3>
                      <p>{offer.text}</p>
                    </div>
                  </FadeInOnScroll>
                </Col>
              );
            })}
          </Row>
        </Grid>
      </Section>
    );
  }
}

Services.propTypes = {
  texts: PropTypes.object.isRequired
}

export default Services;