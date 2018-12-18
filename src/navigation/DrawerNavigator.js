import { createDrawerNavigator, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Home from '../screens/Home/Home';
import AboutUs from '../screens/AboutUs/AboutUs';
import Payments from '../screens/Payments/Payments';
import Privacy from '../screens/Privacy/Privacy';
import DrawerConfig from './DrawerConfig';
import TransitionConfig from './TransitionConfig';
import CarListing from '../screens/CarListing/CarListing';
import AboutCar from '../screens/CarDetail/AboutCar/AboutCar';
import AboutCompany from '../screens/CarDetail/AboutCompany/AboutCompany';
import AboutInfo from '../screens/CarDetail/AboutInfo/AboutInfo';
import CarDetailNavigator from './CarDetailNavigator';


const DrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: createStackNavigator({
      HomeScreen: {
        screen: CarDetailNavigator,
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
      CarDetail: {
        screen: CarDetailNavigator,
        navigationOptions: {
          header: null,
        },
      },
    },
      {
        transitionConfig: TransitionConfig,
        initialRouteName: 'CarDetail'
      }),
  },
}, DrawerConfig);

export default DrawerNavigator;
