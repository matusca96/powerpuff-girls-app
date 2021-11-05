import React, { useEffect, useRef } from 'react';
import { Animated, Image } from 'react-native';

import Heart from '../../assets/heart.png';

import { Container, HeartIcon } from './styles';

const HEART_IMAGE = Image.resolveAssetSource(Heart).uri;

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
        source={{ uri: HEART_IMAGE }}
        resizeMode="contain"
        style={{ transform: [{ scale: anim }] }}
      />
    </Container>
  );
};
