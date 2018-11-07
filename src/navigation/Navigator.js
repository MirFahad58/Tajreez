import { createStackNavigator } from 'react-navigation';
import Splash from '../../src/components/splash/splash'




export default AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: Splash,
    navigationOptions : {
      header : null
    }
  },
});


