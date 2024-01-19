import { createStackNavigator } from '@react-navigation/stack';
import RecipeFoodList from '../components/Dashboard/RecipeFoodList';
import RecipeItemDetail from '../components/Dashboard/RecipeItemDetail';

function DashboardStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={RecipeFoodList} options={{ headerShown: false }}
      />
      <Stack.Screen name="RecipeItemDetail" component={RecipeItemDetail} options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default DashboardStack;