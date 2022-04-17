import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import LeaderBoardScreen from '../screens/LeaderBoard';
import QuizScreen from '../screens/Quiz';

import { COLORS } from '../constants';

const Routes: FC = () => {
  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: COLORS.WHITE,
          },
          headerStyle: {
            shadowColor: 'transparent', // this covers iOS
            elevation: 0, // this covers Android
          },
        }}
      >
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '' }}
        />

        <MainStack.Screen
          name="Quiz"
          component={QuizScreen}

        />
        <MainStack.Screen
          name="LeaderBoard"
          component={LeaderBoardScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer >
  );
};

export default Routes;
