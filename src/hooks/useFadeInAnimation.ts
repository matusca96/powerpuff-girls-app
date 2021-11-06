import { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

interface FadeInAnimationResponse {
  translateY: Animated.Value;
  opacity: Animated.Value;
}

interface Props {
  status: 'loading' | 'success' | 'error';
  rate: number;
}

export const useFadeInAnimation = ({
  status,
  rate = 300,
}: Props): FadeInAnimationResponse => {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const anim = useRef(
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 50,
        duration: rate,
        easing: Easing.linear,
        useNativeDriver: true,
        isInteraction: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: rate,
        easing: Easing.linear,
        useNativeDriver: true,
        isInteraction: false,
      }),
    ]),
  ).current;

  useEffect(() => {
    if (status === 'error') {
      anim.start();
    } else {
      translateY.setValue(0);
      opacity.setValue(0);
    }

    return () => anim.stop();
  }, [status, anim, translateY, opacity]);

  return { translateY, opacity };
};
