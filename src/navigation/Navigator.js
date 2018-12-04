import { createStackNavigator } from 'react-navigation';
import Splash from '../screens/splash/splash';





export default AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: Splash,
    navigationOptions : {
      header : null
    }
  },
});


