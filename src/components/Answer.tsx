import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native'
import React, { FC, useRef, useState } from 'react'

import { COLORS } from '../constants';
import Button from './Button';

interface AnswerProps {
    data: string[];
    userAnswer: string;
    correct_answer: string;
    onPress: (answer: string) => void;
}

interface AnswerBoxProps {
    data: { id: string, answer: string };
    onPress: () => void;
    isCorrect: boolean;
    isAnswer: boolean;
    isSelected: boolean;
    isCorrectAnswer: boolean;
}

const ID: string[] = ['A', 'B', 'C', 'D'];

const Answer: FC<AnswerProps> = ({ data, userAnswer, correct_answer, onPress }) => {

    const [userSelect, setUserSelect] = useState<string>('');
    const isCorrectAnswer = useRef<React.MutableRefObject<React.MutableRefObject<boolean>>>(false);

    const handleOnPress = (answer: string) => () => {
        if (userSelect === '') {
            onPress(answer)
            setUserSelect(answer)
        }
    };

    return (
        <>
            <View style={styles.container}>
                {data.length > 0 && data.map((item, index) => (
                    <AnswerBox data={{ id: ID[index], answer: item }} key={'answerId' + index} onPress={handleOnPress(item)} isCorrectAnswer={item === correct_answer} isCorrect={userAnswer === correct_answer} isAnswer={userSelect !== ''} isSelected={userSelect === item} />
                ))}
            </View>
        </>
    )
}

const AnswerBox: FC<AnswerBoxProps> = ({ data, onPress, isCorrect, isAnswer, isCorrectAnswer, isSelected }) => {

    const scale = useRef<Animated.Value>(new Animated.Value(1)).current;

    const onPressIn = () => {
        if (!isAnswer) {
            Animated.timing(scale, {
                toValue: 0.98,
                duration: 100,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true,
            }).start()
        }

    };

    const onPressOut = () => {
        if (!isAnswer) {
            Animated.timing(scale, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }).start()
        }
    };

    const StylesBox = () => {
        if (isAnswer) {
            if (isSelected) {
                if (isCorrect) {
                    return stylesAnswerBox.correct
                } else {
                    return stylesAnswerBox.wrong
                }
            } else {
                if (isCorrectAnswer) {
                    return stylesAnswerBox.correct
                }
            }
        }
    };

    return (
        <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
            <Animated.View style={[stylesAnswerBox.container, { transform: [{ scale: scale }] }, StylesBox()]}>
                <View style={stylesAnswerBox.circleContainer}>
                    <Text style={[stylesAnswerBox.circleText]}>{data.id}</Text>
                </View>
                <Text style={[stylesAnswerBox.text]}>{data.answer}</Text>
            </Animated.View>
        </Pressable >

    )
};


const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
})

const stylesAnswerBox = StyleSheet.create({
    wrong: {
        backgroundColor: COLORS.SECONDARY,
    },
    correct: {
        backgroundColor: COLORS.GREEN,
    },
    selectedText: {
        color: COLORS.WHITE,
    },
    selected: {
        backgroundColor: COLORS.PRIMARY
    },
    circleText: {
        fontWeight: 'bold',
    },
    circleContainer: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: COLORS.GRAY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginLeft: 15,
        fontWeight: 'bold',
    },
    container: {
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: COLORS.GRAY,
        borderWidth: 2,
        height: 60,
        marginVertical: 10,
    },
})

export default React.memo(Answer)