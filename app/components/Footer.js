'use strict';

import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

require('bootstrap/dist/css/bootstrap.css');

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <Grid>
            <Row>
              <Col lg={12} className='text-center'>
                Copyright &copy; TBME Labs 2017
              </Col>
            </Row>
          </Grid>
        </div>
      </footer>
    );
  }
}

export default Footer;