import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { EpisodeDetails } from '../screens/EpisodeDetails';

const Stack = createStackNavigator();

const stackOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: '#fff',
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
