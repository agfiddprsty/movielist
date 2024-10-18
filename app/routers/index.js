// import { SwitchNavigator } from '@react-navigation/native';
// import { HomeStack } from './stackNavigator';
// // import { Drawer } from './drawerNavigator';

// export default SwitchNavigator(
//   {
//     Home: HomeStack,
//     // App: Drawer
//   },
//   {
//     initialRouteName: 'Home'
//   }
// );
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
