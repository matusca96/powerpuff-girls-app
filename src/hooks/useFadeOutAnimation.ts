import { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

interface FadeOutAnimationResponse {
  translateY: Animated.Value;
  opacity: Animated.Value;
}

interface Props {
  status: 'loading' | 'success' | 'error';
  rate: number;
}

export const useFadeOutAnimation = ({
  status,
  rate = 300,
}: Props): FadeOutAnimationResponse => {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const anim = useRef(
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 100,
        duration: rate,
        easing: Easing.linear,
        useNativeDriver: true,
        isInteraction: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: rate,
        easing: Easing.linear,
        useNativeDriver: true,
        isInteraction: false,
      }),
    ]),
  ).current;

  useEffect(() => {
    if (status === 'loading') {
      anim.start();
    } else {
      translateY.setValue(0);
      opacity.setValue(0);
    }
  }, [status, anim, translateY, opacity]);

  return { translateY, opacity };
};
