import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Signin, Signup } from './src/screens/unauthorized';
import { Dashboard, Currency } from './src/screens/authorized';

import Tabs from './src/routes/authorized/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Signin'}
      >
        <Stack.Screen 
          name="Signin"
          component={Signin}
        />
        <Stack.Screen 
          name="Signup"
          component={Signup}
        />
        <Stack.Screen 
          name="Dashboard"
          component={Tabs}
        />
        <Stack.Screen 
          name="Currency"
          component={Currency}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
