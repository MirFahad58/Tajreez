import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import AppNavigator from './navigation/Navigator';
import store from './store/index'



const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);


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
