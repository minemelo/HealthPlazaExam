import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { FC } from 'react'

import { COLORS } from '../constants'


interface Props {
    title: string;
    onPress: () => void;
    disabled: boolean;
}

const Button: FC<Props> = ({ title, onPress, style, disabled }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, disabled && styles.disabled, style]} disabled={disabled}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    disabled: {
        backgroundColor: COLORS.PRIMARYBLUR,
    },
    button: {
        width: 300,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
    },
})

export default Button