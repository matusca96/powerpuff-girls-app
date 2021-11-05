import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { theme } from '../../styles/theme';

import {
  Container,
  Picture,
  InfoContainer,
  PersonName,
  CharacterName,
} from './styles';

interface CastCardProps {
  cast: TVShow.Cast;
}

export const CastCard = ({ cast }: CastCardProps): JSX.Element => {
  const [imageType, setImageType] = useState<'char' | 'actor'>('char');

  return (
    <Container
      colors={[
        theme.colors.blue[50],
        theme.colors.pink[50],
        theme.colors.green[50],
      ]}
      start={[0.9, 0.1]}
      end={[0.1, 0.9]}
    >
      <CastImage
        image={imageType === 'char' ? cast.character.image : cast.person.image}
        type={imageType}
        toggleImageType={setImageType}
      />

      <InfoContainer>
        <PersonName>{cast.person.name}</PersonName>
        <CharacterName>{`as ${cast.character.name}`}</CharacterName>
      </InfoContainer>
    </Container>
  );
};

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
    <TouchableWithoutFeedback onPress={animateOnLeave}>
      <Picture
        resizeMode={image?.isFallback ? 'contain' : 'cover'}
        source={{ uri: image?.original }}
        style={{
          opacity,
          transform: [{ translateY }, { translateX }],
        }}
      />
    </TouchableWithoutFeedback>
  );
};
