import React, { Component } from 'react';
import { connect,Provider } from 'react-redux';
import PropTypes from 'prop-types';
import {
  createStackNavigator,
} from 'react-navigation';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import Splash from './components/splash/splash';

// import navReducer from './reducer'


const AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: Splash,
    navigationOptions : {
      header : null
    }
  }
});

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer
});

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
        <AppWithNavigationState />
      </Provider>
    );
  }
}
