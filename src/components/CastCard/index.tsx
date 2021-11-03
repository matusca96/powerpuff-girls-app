import React from 'react';

import { Container, PersonName } from './styles';

interface CastCardProps {
  cast: TVShow.Cast;
}

export const CastCard = ({ cast }: CastCardProps): JSX.Element => {
  return (
    <Container>
      <PersonName>{cast.person.name}</PersonName>
    </Container>
  );
};
