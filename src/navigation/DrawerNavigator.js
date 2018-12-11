import { createDrawerNavigator } from 'react-navigation';
import { styles } from '../constants';
import DrawerContent from '../screens/DrawerContent/DrawerContent';
import Home from '../screens/Home/Home';
import AboutUs from '../screens/AboutUs/AboutUs';
import Payments from '../screens/Payments/Payments';


const { drawer } = styles;
const DrawerNavigator = createDrawerNavigator({
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
}, {
  contentComponent: DrawerContent,
  drawerWidth: drawer.drawerWidth,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});

export default DrawerNavigator;
