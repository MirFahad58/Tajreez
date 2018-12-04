import { createStackNavigator } from 'react-navigation';
import Login from '../screens/login/login';





export default AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: Login,
    navigationOptions : {
      header : null
    }
  },
});


