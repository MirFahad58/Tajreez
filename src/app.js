import React from 'react';
import { StyleSheet, Text, View , I18nManager} from 'react-native';
import { StackNavigator , addNavigationHelpers } from 'react-navigation';
// import i18n from './src/i18n/i18n'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { createStore , applyMiddleware} from 'redux'
import reducer from './reducers'
import RootNavigator from './navigation'


import SplashScreen from 'react-native-splash-screen'

export  class App extends React.Component {

  constructor(){
    super()
  }
  componentDidMount() {
        SplashScreen.hide();
    }
  render() {
    const store = createStore(reducer , {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={styles.container}>
            <RootNavigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius:4,
    borderStyle :'solid',
  }
});



export default App;

// export {MainScreenNavigator}