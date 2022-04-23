import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function SizedBox({width = 0, height = 0}) {
    return (
        <View style={styles.sizedBoxContainer(width, height)} />
    )
}

const styles = StyleSheet.create({
    sizedBoxContainer: (width, height) => ({
        width: width,
        height: height
    })
});