import React, { useState } from 'react';
import { theme } from '../../styles/theme';
import { CastImage } from '../CastImage';

import { Container, InfoContainer, PersonName, CharacterName } from './styles';

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
