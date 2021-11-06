import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import useShow from '../../hooks/useShow';
import { theme } from '../../styles/theme';

import {
  Container,
  ErrorEmoji,
  ErrorText,
  TryAgainButton,
  TryAgainText,
} from './styles';

export const ErrorMessage = (): JSX.Element => {
  const { loadData } = useShow();

  const translateY = useRef(new Animated.Value(80)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
        isInteraction: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
        isInteraction: false,
      }),
    ]).start();
  }, [translateY, opacity]);

  const handleReloadData = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: -80,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
        isInteraction: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
        isInteraction: false,
      }),
    ]).start(() => loadData());
  };

  return (
    <Container
      style={{
        shadowColor: theme.colors.gray[800],
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        transform: [{ translateY }],
        opacity,
      }}
    >
      <ErrorEmoji>😨</ErrorEmoji>
      <ErrorText>
        Oh-oh, something got wrong while we&apos;re loading the TV show data!
      </ErrorText>
      <TryAgainButton onPress={handleReloadData}>
        <TryAgainText>Try again</TryAgainText>
      </TryAgainButton>
    </Container>
  );
};
