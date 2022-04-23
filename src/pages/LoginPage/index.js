import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginPage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button onPress={() => {navigation.push('Home')}} title='Go to Home'></Button>
    </View>
  );
}
