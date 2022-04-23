import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage, HomePage} from '../src/pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginPage}
      />
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomePage}
      />
    </Stack.Navigator>
  );
};

export default Router;
