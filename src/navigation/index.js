import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';
import Navigator from './Navigator';
import { BackHandler } from 'react-native'
import { NavigationActions } from 'react-navigation'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
      "root",
      state => state.nav,
    );
    
const addListener = createReduxBoundAddListener("root");
class RootNavigator extends Component {

constructor (props) {
    super(props)
    // this.showExitAlert = this.showExitAlert.bind(this)
  }

  // componentDidMount () {
  //   BackHandler.addEventListener('hardwareBackPress', this.showExitAlert)
  // }

  // componentWillUnmount () {
  //   BackHandler.removeEventListener('hardwareBackPress', this.showExitAlert)
  // }


  // showExitAlert = () => {
  //   const { dispatch, nav } = this.props
  //   console.log('in else')
  //   dispatch(NavigationActions.back())
  //   return nav !== this.props.nav
    
  // }


  render() {
    const { dispatch, nav } = this.props;
    console.log("from main index" , this.props)
    return (
    
    //if user is loggedIn
    <Navigator
          navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
          })}
          /> 
    );
  }
}

RootNavigator.propTypes = {
  nav: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  nav : state.nav
});

export default connect(mapStateToProps)(RootNavigator);