import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardStack from './DashboardStack';
import RecipeProfileScreen from '../components/Signup/RecipeProfileScreen';
import RecipeLogout from '../components/RecipeLogout';
import RecipeAboutScreen from '../components/Dashboard/RecipeAboutScreen';
import DateTimeDisplay from '../components/Dashboard/DateTime'
export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: 'pink',
        width: 240,
      },
    }}
   >
      <Drawer.Screen name="Main" component={DashboardStack} />
      <Drawer.Screen name="Date Time" component={DateTimeDisplay} />
      <Drawer.Screen name="Profile" component={RecipeProfileScreen} />
      <Drawer.Screen name="About" component={RecipeAboutScreen} />
      <Drawer.Screen name="Logout" component={RecipeLogout} />
    </Drawer.Navigator>
  )
}