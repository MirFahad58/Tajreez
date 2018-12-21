import AboutCar from "../screens/CarDetail/AboutCar/AboutCar";
import AboutCompany from "../screens/CarDetail/AboutCompany/AboutCompany";
import AboutInfo from "../screens/CarDetail/AboutInfo/AboutInfo";
import { createMaterialTopTabNavigator } from 'react-navigation'
import React from 'react'
import { HeaderComponent } from "../common/Header/Header";

const CarDetailNavigator = createMaterialTopTabNavigator({
    AboutCarScreen: {
      screen: AboutCar,
      navigationOptions : {
        tabBarLabel : 'About car',
      },
    },
    AboutCompanyScreen: {
      screen: AboutCompany,
      navigationOptions : {
        tabBarLabel : 'Company'
      }
    },
    AboutInfoScreen: {
      screen: AboutInfo,
      navigationOptions : {
        tabBarLabel : 'Info'
      }
    },
  }
  ,{
    initialRouteName : 'AboutCompanyScreen',
    navigationOptions : {
      headerStyle: {
        backgroundColor: "blue"
      },
      upperCaseLabel : false
    },
    tabBarOptions:{
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      upperCaseLabel : false,
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
      style: {
        backgroundColor: '#60a08e',
      },
      labelStyle : {
        fontSize : 12,
      },
      tabStyle: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }
    }
  })

  CarDetailNavigator.navigationOptions = ({ navigation }) => {
    console.log(navigation , "is")
    const header = <HeaderComponent onPress={() => navigation.pop()} headerText={'BMW-250'} showBackButton />
    return {
      header,
    }
  }


  export default CarDetailNavigator;