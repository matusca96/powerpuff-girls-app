import React from 'react';
import useShow from '../../hooks/useShow';

import { CastCard } from '../CastCard';
import { Container } from './styles';

export const CastList = (): JSX.Element => {
  const { cast } = useShow();

  return (
    <Container
      accessibilityLabel="cast-list"
      data={cast}
      keyExtractor={(item) => item.character.id}
      renderItem={({ item: castItem }) => <CastCard cast={castItem} />}
      horizontal
      persistentScrollbar
    />
  );
};
