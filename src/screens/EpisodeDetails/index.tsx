import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { format, parseISO } from 'date-fns';

import { theme } from '../../styles/theme';

import {
  Container,
  EpisodeImageContainer,
  EpisodeImage,
  Content,
  TitleContainer,
  Title,
  ReleaseDate,
  BadgeContainer,
  SummaryTitle,
  Summary,
} from './styles';
import { Badge } from '../../components/Badge';
import { normalizeText } from '../../utils/normalizeText';

type Props = StackScreenProps<Routes.RootStackParamList, 'EpisodeDetails'>;

export const EpisodeDetails = ({
  route: {
    params: { episode },
  },
}: Props): JSX.Element => {
  console.log(episode);

  const releaseDate = format(
    parseISO(episode.airdate),
    "eeee',' dd MMMM yyyy ",
  );

  const summary = episode.summary
    ? normalizeText(episode.summary)
    : 'Sorry, there is no description available for this episode. 😥';

  return (
    <Container>
      <EpisodeImageContainer>
        <EpisodeImage
          source={{ uri: episode.image?.original }}
          resizeMode={episode.image?.isFallback ? 'contain' : 'cover'}
          isFallback={episode.image?.isFallback}
        />
      </EpisodeImageContainer>
      <Content>
        <TitleContainer
          colors={['transparent', theme.colors.gray[50], 'transparent']}
          start={[0.1, 0.1]}
          end={[0.9, 0.9]}
        >
          <Title>{`"${episode.name}"`}</Title>
        </TitleContainer>
        <ReleaseDate>{`Release date: ${releaseDate}`}</ReleaseDate>
        <BadgeContainer>
          <Badge color={theme.colors.pink[50]}>{`${episode.runtime}m`}</Badge>
          <Badge
            style={{ marginLeft: 6 }}
            color={theme.colors.green[50]}
          >{`Season ${episode.season}`}</Badge>
          <Badge
            style={{ marginLeft: 6 }}
            color={theme.colors.blue[50]}
          >{`Episode ${episode.number}`}</Badge>
        </BadgeContainer>

        <SummaryTitle>Summary</SummaryTitle>
        <Summary>{summary}</Summary>
      </Content>
    </Container>
  );
};
