'use strict';

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <h1>Basic React rendering</h1>
    );
  }
}

render(<App/>, document.getElementById('app'));