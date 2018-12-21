import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Home from '../screens/Home/Home';
import AboutUs from '../screens/AboutUs/AboutUs';
import Payments from '../screens/Payments/Payments';
import Privacy from '../screens/Privacy/Privacy';
import DrawerConfig from './DrawerConfig';
import TransitionConfig from './TransitionConfig';
import CarListing from '../screens/CarListing/CarListing';
import CarDetailNavigator from './CarDetailNavigator';
import Loading from '../screens/Loading/Loading';

const DrawerNavigator = createStackNavigator({
  HomeScreen : {
    screen : createDrawerNavigator({
      HomeScreen: {
        screen: createStackNavigator({
          HomeScreen: {
            screen: Home,
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
          AboutUsScreen: {
            screen: AboutUs,
            navigationOptions: {
              header: null,
            },
          },
          CarListingScreen: {
            screen: CarListing,
            navigationOptions: {
              header: null,
            },
          },
          LoadingScreen: {
            screen: Loading,
            navigationOptions: {
              header: null,
            },
          },
          CarDetail: {
            screen: CarDetailNavigator
          },
        },
          {
            transitionConfig: TransitionConfig,
            initialRouteName: 'HomeScreen',
          }),
      },
    }, DrawerConfig),
    navigationOptions : {
      header : null
    }
  },
  
})

export default DrawerNavigator;
