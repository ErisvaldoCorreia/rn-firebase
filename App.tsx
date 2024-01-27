import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';

import { Root } from './src';

import { Detail } from '~/detail';
import { Todo } from '~/todo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            options={{ headerShown: false }}
            name="home"
            component={Root}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="todo"
            component={Todo}
          />
          <Stack.Screen name="detail" component={Detail} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
