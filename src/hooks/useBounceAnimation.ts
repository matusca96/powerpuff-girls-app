import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useBounceAnimation = (running = true, rate = 300) => {
  const val = useRef(new Animated.Value(0)).current;

  const anim = useRef(
    Animated.loop(
      Animated.sequence([
        Animated.timing(val, {
          toValue: 2,
          duration: rate,
          easing: Easing.linear,
          useNativeDriver: true,
          isInteraction: false,
        }),
        Animated.timing(val, {
          toValue: 0,
          duration: rate,
          easing: Easing.linear,
          useNativeDriver: true,
          isInteraction: false,
        }),
      ])
    ),
  ).current;

  useEffect(() => {
    if (running) {
      anim.start();
    } else {
      anim.stop();
      val.setValue(0);
    }

    return () => anim.stop();
  }, [running, anim]);

  return val;
};
