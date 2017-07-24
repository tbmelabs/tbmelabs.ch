'use strict';

import React from 'react';
import {render} from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

import Home from './containers/Home';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('app'));