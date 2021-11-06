import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { Container, HeartIcon } from './styles';

export const Loading = (): JSX.Element => {
  const anim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        // decrease size
        Animated.timing(anim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [anim]);

  return (
    <Container>
      <HeartIcon
        accessibilityLabel="heart-icon"
        source={require('../../assets/heart.png')}
        resizeMode="contain"
        style={{ transform: [{ scale: anim }] }}
      />
    </Container>
  );
};
