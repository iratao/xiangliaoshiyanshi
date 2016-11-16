import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../containers/app';
import rootReducers from '../reducers/index';

let store = createStore(rootReducers);

class Root extends Component {
	render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
