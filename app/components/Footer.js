'use strict';

import React from 'react';

require('bootstrap/dist/css/bootstrap.css');
require('../styles/footer.css');

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <span id='footer-content'>
            Copyright &copy; TBME Labs 2018
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;