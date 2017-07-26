'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Section from '../common/Section';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';

import FontAwesome from 'react-fontawesome';

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');

class Team extends React.Component {
  render() {
    const {team} = this.props.texts;

    return (
      <Section id='team'>
        <Grid>
          <Row>
            <Col lg={12}>
              <h2>{team.heading}</h2>
            </Col>
          </Row>
          {
            team.members.map(member => {
              return (
                <Col lg={6}>
                  <Image src={'public/' + require('../../images/' + member.thumbnail)} circle/>
                  <h4>{member.name}</h4>
                  <p>{member.title}</p>
                  <ul className='list-inline'>
                    <li><a href={member.githubLink}><FontAwesome name='github' className='fa-2x'/></a></li>
                  </ul>
                </Col>
              );
            })
          }
          <Row>
          </Row>
        </Grid>
      </Section>
    );
  }
}

Team.propTypes = {
  texts: PropTypes.object.isRequired
}

export default Team;