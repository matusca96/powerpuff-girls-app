import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { StatusBar } from 'react-native';
import { Home } from '../screens/Home';
import { EpisodeDetails } from '../screens/EpisodeDetails';
import { theme } from '../styles/theme';

const Stack = createStackNavigator();

const stackOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: theme.colors.white,
  },
};

export const Routes = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={stackOptions} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="EpisodeDetails"
          component={EpisodeDetails}
          options={stackOptions}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
