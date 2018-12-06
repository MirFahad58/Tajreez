import { createStackNavigator } from 'react-navigation';
import Login from '../screens/login/login';
import Signup from '../screens/signup/signup'




export default AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions : {
      header : null
    }
  },
  SignupScreen: {
    screen: Signup,
    navigationOptions : {
      header : null
    }
  }
});
