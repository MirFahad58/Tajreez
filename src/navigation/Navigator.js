import { createStackNavigator } from 'react-navigation';
import Login from '../screens/login/login';
import Signup from '../screens/signup/signup';
import ForgetPassword from '../screens/ForgetPassword/Forgetpassword';
import DrawerNavigator from './DrawerNavigator';


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
},
{
  initialRouteName: 'LoginScreen',
  headerMode: 'none',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 500,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;
      const width = layout.initWidth;

      const opacity = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [0, 1],
      });

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      });
      return {
        opacity,
        transform: [{ translateX }],
      };
    },
  }),
});
