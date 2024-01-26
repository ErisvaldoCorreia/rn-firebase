import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Root } from './src';

import { Detail } from '~/detail';
import { Todo } from '~/todo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="todo">
        <Stack.Screen name="home" component={Root} />
        <Stack.Screen name="todo" component={Todo} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
