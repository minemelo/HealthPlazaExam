import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { getScreenWidth } from '../utils/metrics'

const Container = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: getScreenWidth() - (getScreenWidth() - 20),
    }
})

export default Container