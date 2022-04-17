import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { COLORS } from '../constants';
import { getScreenHeight, getScreenWidth } from '../utils/metrics';

interface Props {
    data: string;
    questionIndex: number;
    score: number;
    totalQuestion: number;
}

const Question: FC<Props> = ({ data, score, totalQuestion, questionIndex }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Question ${questionIndex}`}</Text>
            <Text style={styles.questionText}>{data}</Text>

            <View style={styles.ScoreContainer}>
                <Text>Score: {score} / {totalQuestion}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ScoreContainer: {
        position: 'absolute',
        right: 15,
        bottom: 15,
    },
    container: {
        width: getScreenWidth(),
        minHeight: 250,
        backgroundColor: COLORS.GRAY,
        borderColor: COLORS.GRAY,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        padding: 15,
    },
    title: {
        fontWeight: 'bold',
        color: COLORS.PRIMARY,
        fontSize: 22,
    },
    questionText: {
        marginTop: 10,
        fontSize: 16,
        color: COLORS.PRIMARY,
    },
})

export default Question