import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomePage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={() => {navigation.push('Login')}} title='Go to Login'></Button>
    </View>
  );
}
