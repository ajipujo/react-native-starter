import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Col(props) {
    return (
        <View style={[styles.col(props.grid), props.style]}>
            {props.children}
        </View>
    )
}

const calcColumn = (grid) => {
    let column = grid / 12 * 100;
    let precentage = `${column}%`;
    return precentage;
}

const styles = StyleSheet.create({
    col: (grid = 1) => ({
        width: calcColumn(grid),
    })
});