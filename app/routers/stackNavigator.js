import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}



// export const HomeStack = StackNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         tabBarVisible: true
//       }
//     },
//   },
//   { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
// );
