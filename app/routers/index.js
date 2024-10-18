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
import Detail from '../screens/DetailMovie';
import Splash from '../screens/Splash/index';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="DetailMovie" component={Detail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
