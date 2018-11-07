import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import AppNavigator from './navigation/Navigator';
import appReducer from './reducers/index'


const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);


export default class Root extends Component {
  render() {
    const store = createStore(
      appReducer,
      applyMiddleware(middleware),
    );
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppWithNavigationState />
        </SafeAreaView>
      </Provider>
    );
  }
}
