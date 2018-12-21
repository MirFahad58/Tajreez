import { createDrawerNavigator, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Home from '../screens/Home/Home';
import React from 'react'
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
import Loading from '../screens/Loading/Loading';
import { Text } from 'react-native'
import { HeaderComponent } from '../common/Header/Header';
import { NavigationActions } from 'react-navigation';

const DrawerNavigator = createDrawerNavigator({
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
        initialRouteName: 'CarDetail'
      }),
  },
}, DrawerConfig);

export default DrawerNavigator;
