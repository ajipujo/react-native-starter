import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {Btn, SizedBox, Input} from '../../components/Atoms';

export default function LoginPage({navigation}) {
  return (
    <>
      <ScrollView style={styles.wrapper}>
        <SizedBox height={40} />
        <Text style={{alignSelf: 'center'}}>Login Screen</Text>
        <SizedBox height={150} />
        <Input placeholder="Input Email Address..." />
        <SizedBox height={10} />
        <Input placeholder="Input Password..." />
        <SizedBox height={10} />
        <Btn
          title="Submit"
          onPress={() => {
            navigation.push('Home');
          }}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
});
