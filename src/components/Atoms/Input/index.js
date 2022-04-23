import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

export default function Input({placeholder = ''}) {
  return <TextInput style={styles.input} placeholder={placeholder} />;
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
