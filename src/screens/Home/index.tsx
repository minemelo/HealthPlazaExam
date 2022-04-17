import { Image, Text, TextInput, View } from 'react-native';
import React, { Component } from 'react';

import Button from '../../components/Button';
import styles from './styles';

import Logo from "../../assets/logo.svg";

interface Props {
  navigation: any;
}

interface State { }

export default class Home extends Component<Props, State> {

  state = {
    username: ''
  }

  handleOnPressQuiz = () => {
    this.props.navigation.navigate('Quiz', { username: this.state.username });
  }

  handleOnPressLeaderBoard = () => {
    this.props.navigation.navigate('LeaderBoard');
  };

  onChangeText = (username: string) => {
    this.setState({ username });
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo width={300} height={300} />
        <View>
          <Text style={styles.usernameText}>Username</Text>
          <TextInput style={styles.textInput} onChangeText={this.onChangeText} />
        </View>
        <Button title={'Quiz'} disabled={this.state.username === ''} style={styles.QuizButton} onPress={this.handleOnPressQuiz} />
        <Button title={'Leader Board'} style={styles.LeaderBoardButton} onPress={this.handleOnPressLeaderBoard} />
      </View>
    );
  }
}


