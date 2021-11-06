import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import useShow from '../../hooks/useShow';

import { ErrorMessage } from '../ErrorMessage';

import { Container, HeartIcon } from './styles';

export const Loading = (): JSX.Element => {
  const heartAnimation = useRef(new Animated.Value(1)).current;

  const { errorOnLoadData } = useShow();

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(heartAnimation, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        // decrease size
        Animated.timing(heartAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [heartAnimation]);

  return (
    <Container>
      {errorOnLoadData && <ErrorMessage />}

      <HeartIcon
        accessibilityLabel="heart-icon"
        source={require('../../assets/heart.png')}
        resizeMode="contain"
        style={{ transform: [{ scale: heartAnimation }] }}
      />
    </Container>
  );
};
