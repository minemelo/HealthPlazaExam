import { FlatList, Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './styles'
import Container from '../../containers/Container'

import Logo from "../../assets/logo.svg";
import { getData } from '../../utils/helper';


export default class LeaderBoard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const data = await getData('userPoints');
        if (data !== null && data !== undefined) {
            this.setState({ data: JSON.parse(data) })
        }
    }

    render() {
        return (
            <Container>
                <View style={styles.header}>
                    <Logo width={50} height={50} />
                    <Text style={styles.headerText}>Leaderboard</Text>
                </View>

                <FlatList
                    data={this.state.data.sort((a, b) => b.points - a.points)}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <View style={styles.listContainer}>
                            <Text style={styles.text}>{index + 1}</Text>
                            <View style={[styles.listContainer, { marginHorizontal: 20 }]}>
                                <Text style={styles.text}>{item.username}</Text>
                                <Text style={styles.text}>{item.points}</Text>
                            </View>
                        </View>
                    )}
                />

            </Container>
        )
    }
}