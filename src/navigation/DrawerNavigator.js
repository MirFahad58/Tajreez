import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Home from '../screens/Home/Home';
import AboutUs from '../screens/AboutUs/AboutUs';
import Payments from '../screens/Payments/Payments';
import Privacy from '../screens/Privacy/Privacy';
import DrawerConfig from './DrawerConfig';
import TransitionConfig from './TransitionConfig';


const DrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: createStackNavigator({
      HomeScreen: {
        screen: Payments,
        navigationOptions: {
          header: null,
        },
      },
      AboutUsScreen: {
        screen: AboutUs,
        navigationOptions: {
          header: null,
        },
      },
      PaymentScreen: {
        screen: Payments,
        navigationOptions: {
          header: null,
        },
      },
      PrivacyScreen: {
        screen: Privacy,
        navigationOptions: {
          header: null,
        },
      },
    },
    {
      transitionConfig: TransitionConfig,
    }),
  },
}, DrawerConfig);

export default DrawerNavigator;
