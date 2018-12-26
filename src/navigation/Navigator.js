import { createStackNavigator } from 'react-navigation';
import Login from '../screens/login/login';
import Signup from '../screens/signup/signup';
import Privacy from  '../screens/Privacy/Privacy'
import DriverDetails from  '../screens/DriverDetails/DriverDetails'
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
  DriverDetailsScreen: {
    screen: DriverDetails,
  }
},
{
  initialRouteName: 'DriverDetailsScreen',
  headerMode: 'none',
  transitionConfig: TransitionConfig,
});
