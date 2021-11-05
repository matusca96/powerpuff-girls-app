import React from 'react';
import { Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<Routes.RootStackParamList, 'EpisodeDetails'>;

export const EpisodeDetails = ({ route }: Props): JSX.Element => {
  console.log(route.params.episode);

  return <Text>Episode 01</Text>;
};
