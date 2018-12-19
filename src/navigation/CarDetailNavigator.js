import AboutCar from "../screens/CarDetail/AboutCar/AboutCar";
import AboutCompany from "../screens/CarDetail/AboutCompany/AboutCompany";
import AboutInfo from "../screens/CarDetail/AboutInfo/AboutInfo";
import { createMaterialTopTabNavigator } from 'react-navigation'

export default CarDetailNavigator = createMaterialTopTabNavigator({
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
    initialRouteName : 'AboutInfoScreen',
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