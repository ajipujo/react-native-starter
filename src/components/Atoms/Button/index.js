import React from 'react';
import {Button, StyleSheet} from 'react-native';

export default function Btn({title = 'Button', onPress}) {
    return (
        <Button title={title} onPress={onPress} />
    )
}