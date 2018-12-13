import { styles } from '../constants';
import DrawerContent from '../screens/DrawerContent/DrawerContent';

const { drawer } = styles;

export default DrawerConfig = {
  contentComponent: DrawerContent,
  drawerWidth: drawer.drawerWidth,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
};
