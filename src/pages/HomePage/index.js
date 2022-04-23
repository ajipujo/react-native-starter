import React from 'react';
import { View, Text } from 'react-native';
import { Btn, SizedBox } from '../../components/Atoms';

export default function HomePage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <SizedBox height={10} />
      <Btn title='Logout' onPress={() => {navigation.push('Login')}} />
    </View>
  );
}
