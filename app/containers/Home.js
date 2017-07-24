'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import OpenSourceProjects from '../components/asides/OpenSourceProjects';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';

class Home extends React.Component {
  render() {
    const {texts} = this.props;

    return (
      <app>
        <Navigation texts={texts}/>
        <Header texts={texts}/>

        <About texts={texts}/>
        <Services texts={texts}/>
        <Portfolio texts={texts}/>
        <OpenSourceProjects texts={texts}/>
        <Team texts={texts}/>
        <Contact texts={texts}/>

        <Footer/>
      </app>
    );
  }
}

Home.propTypes = {
  texts: PropTypes.object.isRequired,
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    texts: state.language.texts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      // Map redux-actions here
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);