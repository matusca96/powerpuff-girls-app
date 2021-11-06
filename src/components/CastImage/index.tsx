import React, { useEffect, useRef } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

import { Picture } from './styles';

interface CastImageProps {
  image?: TVShow.Image;
  type: 'char' | 'actor';
  toggleImageType: React.Dispatch<React.SetStateAction<'char' | 'actor'>>;
}

export const CastImage = ({
  image,
  type,
  toggleImageType,
}: CastImageProps): JSX.Element => {
  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   if (currentType !== type) {
  //     Animated.sequence([
  //       Animated.parallel([
  //         Animated.timing(translateY, {
  //           toValue: -5,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(translateX, {
  //           toValue: -5,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(opacity, {
  //           toValue: 0.5,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }),
  //       ]),
  //       Animated.parallel([
  //         Animated.timing(translateY, {
  //           toValue: 0,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(translateX, {
  //           toValue: 0,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(opacity, {
  //           toValue: 0,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }),
  //       ]),
  //     ]).start();
  //   } else {
  //     Animated.sequence([
  //       Animated.parallel([
  //         Animated.timing(translateY, {
  //           toValue: 5,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(translateX, {
  //           toValue: 5,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(opacity, {
  //           toValue: 0.5,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }),
  //       ]),
  //       Animated.parallel([
  //         Animated.timing(translateY, {
  //           toValue: 0,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(translateX, {
  //           toValue: 0,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(opacity, {
  //           toValue: 1,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }),
  //       ]),
  //     ]).start();
  //   }
  // }, [currentType, type, translateX, translateY, opacity]);

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 5,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 5,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 250,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [type, translateY, translateX, opacity]);

  const animateOnLeave = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -5,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -5,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      toggleImageType((prevState) => (prevState === 'char' ? 'actor' : 'char'));
    });
  };

  return (
    <TouchableWithoutFeedback
      accessibilityRole="button"
      onPress={animateOnLeave}
    >
      <Picture
        accessibilityLabel="cast-image"
        resizeMode={image?.isFallback ? 'contain' : 'cover'}
        source={image?.isFallback ? image.original : { uri: image?.original }}
        style={{
          opacity,
          transform: [{ translateY }, { translateX }],
        }}
      />
    </TouchableWithoutFeedback>
  );
};
