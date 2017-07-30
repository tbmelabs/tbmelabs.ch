'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

require('bootstrap/dist/css/bootstrap.css');
require('../../styles/cookiewarning.css');

class CookieWarning extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.props.disableCookieWarning();
  }

  render() {
    // If cookie warning already dispatched
    if (!this.props.show) {
      return null;
    }

    const {cookieWarning} = this.props.texts;

    return (
      <cookiewarning>
        <div className='container'>
          <Grid>
            <Row>
              <Col lg={12}>
                {cookieWarning.text} <Button onClick={this.onClick}>{cookieWarning.accept}</Button>
              </Col>
            </Row>
          </Grid>
        </div>
      </cookiewarning>
    );
  }
}

CookieWarning.propTypes = {
  texts: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  disableCookieWarning: PropTypes.func.isRequired
}

export default CookieWarning;