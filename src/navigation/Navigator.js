import { createStackNavigator } from 'react-navigation';
import Login from '../screens/login/login';
import Signup from '../screens/signup/signup';
import Home2 from '../screens/Home2/Home2';
import ForgetPassword from '../screens/ForgetPassword/Forgetpassword';
import DrawerNavigator from './DrawerNavigator';
import TransitionConfig from './TransitionConfig';


export default AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: Login,
  },
  SignupScreen: {
    screen: Signup,
  },
  ForgetPasswordScreen: {
    screen: ForgetPassword,
  },
  HomeScreen: {
    screen: DrawerNavigator,
  },
  Home2Screen: {
    screen: Home2,
  }
},
{
  initialRouteName: 'Home2Screen',
  headerMode: 'none',
  transitionConfig: TransitionConfig,
});
