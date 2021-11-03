import React from 'react';
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
      <Picture source={{ uri: cast.character.image.original }} />
      <InfoContainer>
        <PersonName>{cast.person.name}</PersonName>
        <CharacterName>{`as ${cast.character.name}`}</CharacterName>
      </InfoContainer>
    </Container>
  );
};
