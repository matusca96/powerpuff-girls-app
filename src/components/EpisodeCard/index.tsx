import React from 'react';

import {
  Container,
  EpisodeImage,
  InfoContainer,
  Title,
  Runtime,
} from './styles';

interface EpisodeCardProps {
  episode: TVShow.Episode;
  onSelectEpisode: () => void;
}

export const EpisodeCard = ({
  episode,
  onSelectEpisode,
}: EpisodeCardProps): JSX.Element => {
  return (
    <Container onPress={onSelectEpisode}>
      <EpisodeImage source={{ uri: episode.image.original }} />
      <InfoContainer>
        <Title>{`${episode.number}. ${episode.name}`}</Title>
        <Runtime>{`${episode.runtime}m`}</Runtime>
      </InfoContainer>
    </Container>
  );
};
