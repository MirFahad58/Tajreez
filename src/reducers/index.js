import { combineReducers } from 'redux'
import AppNavigator from '../navigation/Navigator'
import {
    createNavigationReducer,
  } from 'react-navigation-redux-helpers';


const navReducer = createNavigationReducer(AppNavigator);
export default combineReducers({
  nav: navReducer
});