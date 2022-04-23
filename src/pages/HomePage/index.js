import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Btn, SizedBox, Row, Col} from '../../components/Atoms';

export default function HomePage({navigation}) {
  return (
    <>
      <ScrollView style={styles.wrapper}>
        <Text style={{alignSelf: 'center'}}>Home Screen</Text>
        <SizedBox height={50} />
        <Row>
          <Col style={{alignItems: 'center',}} grid={6}>
            <Text>Col With Grid 5</Text>
          </Col>
          <Col style={{alignItems: 'center',}} grid={6}>
            <Text>Col With Grid 5</Text>
          </Col>
        </Row>
        <SizedBox height={50} />
        <Btn
          title="Logout"
          onPress={() => {
            navigation.push('Login');
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
