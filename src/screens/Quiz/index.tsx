import { Text, View } from 'react-native'
import React, { Component, createRef } from 'react'

import Question from '../../components/Question'
import Answer from '../../components/Answer'
import Button from '../../components/Button'

import styles from './styles'
import Container from '../../containers/Container'

import PagerView from 'react-native-pager-view'

import Mock from '../../mock.json'
import { HELPER } from '../../utils'

import { getData, storeData } from '../../utils/helper'

interface PropTypes {
    username: string;
}

interface StateTypes {
    page: number;
    data: [];
    points: number;
    userAnswer: string;
    pageRef: any;
}

export default class Quiz extends Component<PropTypes, any> {

    constructor(props: PropTypes) {
        super(props)
        this.state = {
            page: 0,
            data: HELPER.shuffle(Mock.map((item) => ({ question: item.question, correct_answer: item.correct_answer, answer: HELPER.shuffle([...item.incorrect_answers, item.correct_answer]) }))),
            points: 0,
            userAnswer: '',
        }
        this.pagerRef = createRef()
    }

    handleAnswer = (index: number) => (answer: string) => {
        this.setState({ userAnswer: answer })
        if (this.state.data[index].correct_answer === answer) {
            this.setState({ points: this.state.points += 1 })
        }
    }

    handleNext = () => {

        if (this.state.page >= this.state.data.length - 1) {
            this.handleFinished()
            return this.props.navigation.goBack();
        }

        this.setState({ userAnswer: '' })
        this.pagerRef.current.setPageWithoutAnimation(this.state.page += 1)
    };

    handleFinished = async () => {
        const data = await getData('userPoints');
        if (data === null || data === undefined) {
            await storeData('userPoints', JSON.stringify([{ username: this.props.route.params.username, points: this.state.points }]))
        } else {
            await storeData('userPoints', JSON.stringify([...JSON.parse(data), { username: this.props.route.params.username, points: this.state.points }]))
        }
    };


    renderPage = () => {
        return (
            <PagerView ref={this.pagerRef} style={{ flex: 1 }} initialPage={0} scrollEnabled={false}>
                {this.state.data.length > 0 && this.state.data.map((item: any, index: number) => {
                    return (
                        <View style={styles.container} key={'questionId' + index}>
                            <Question data={item.question} score={this.state.points} totalQuestion={this.state.data.length} questionIndex={index + 1} />
                            <Container>
                                <Answer
                                    data={item.answer}
                                    userAnswer={this.state.userAnswer}
                                    correct_answer={this.state.data[index].correct_answer}
                                    onPress={this.handleAnswer(index)}
                                />
                                {this.state.userAnswer !== '' && (
                                    <View style={styles.footerContainer}>
                                        <Button title={this.state.page >= this.state.data.length - 1 ? 'Finish' : 'Next'} onPress={this.handleNext} />
                                    </View>
                                )}
                            </Container>
                        </View>
                    )
                })}
            </PagerView>
        )
    };

    render() {
        return this.renderPage()
    }
}