import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import store from './store/index';
import AppWithNavigationState from './navigation/index';


export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppWithNavigationState />
        </SafeAreaView>
      </Provider>
    );
  }
}
