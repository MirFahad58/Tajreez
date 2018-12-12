import { createStackNavigator } from 'react-navigation';
import Login from '../screens/login/login';
import Signup from '../screens/signup/signup'
import ForgetPassword from '../screens/ForgetPassword/Forgetpassword'
import DrawerNavigator from './DrawerNavigator';




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
  },
  ForgetPasswordScreen: {
    screen: ForgetPassword,
    navigationOptions : {
      header : null
    }
  },
  HomeScreen : {
    screen : DrawerNavigator,
    navigationOptions : {
      header : null
    }
  }
},
{
  initialRouteName : 'ForgetPasswordScreen'
}
);
