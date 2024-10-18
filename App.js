/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import Router from './app/routers';
import store from './app/store/configureStore';

const App = () => {
  return (
    <Provider store={store()}>
      <Router />
    </Provider>
  );
}

export default App;
