import { createStackNavigator } from '@react-navigation/stack';
import RecipeLoginScreen from '../components/Login/RecipeLoginScreen';
import RecipeSignUpScreen from '../components/Signup/RecipeSignUpScreen';
import Drawer from './Drawer'

function StackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RecipeLogin" component={RecipeLoginScreen} />
      <Stack.Screen name="RecipeSignup" component={RecipeSignUpScreen} />
      <Stack.Screen name="RecipeHome" component={Drawer} />
    </Stack.Navigator>
  );
};
export default StackNavigator;