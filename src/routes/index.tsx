import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { EpisodeDetails } from '../screens/EpisodeDetails';
import { theme } from '../styles/theme';
import { Loading } from '../components/Loading';
import useShow from '../hooks/useShow';

const Stack = createStackNavigator<Routes.RootStackParamList>();

const stackOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: theme.colors.white,
  },
};

export const Routes = (): JSX.Element => {
  const { isLoading } = useShow();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={stackOptions} />
          <Stack.Screen
            name="EpisodeDetails"
            component={EpisodeDetails}
            options={{
              presentation: 'modal',
              ...stackOptions,
            }}
            initialParams={{ episode: {} as TVShow.Episode }}
          />
        </Stack.Navigator>
      )}
    </>
  );
};
