import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../containers/app';
import rootReducers from '../reducers/index';

import RouteKeys from '../constants/routeKeys';

let store = createStore(rootReducers, {
  posts: [],
  selectedItem: 0,
  routes: {
    home: {
      key: '0',
      title: RouteKeys.HOME,
    },
    spiceDetail: {
      key: RouteKeys.SPICE_DETAIL,
      title: 'spice detail',
    },
    lab: {
      key: RouteKeys.LAB,
      titile: 'lab',
    },
    labResult: {
      key: RouteKeys.LAB_RESULT,
      titile: 'lab result',
    },
  },
  navigationState: {
    index: 0,
    routes: [{
      key: RouteKeys.HOME,
      title: 'home',
    }],
  },
});

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
