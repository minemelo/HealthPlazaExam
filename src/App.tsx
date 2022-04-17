/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, { FC } from 'react';
import {
  DevSettings,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import Routes from './routes/Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  if (__DEV__) {
    DevSettings.addMenuItem('ClearAsync', () => {
      AsyncStorage.clear()
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Routes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
