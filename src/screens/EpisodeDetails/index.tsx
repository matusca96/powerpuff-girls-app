import React, { useEffect, useMemo } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { format, parseISO } from 'date-fns';

import { BackHandler } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
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
  ButtonContainer,
  PreviousEpisodeButton,
  NextEpisodeButton,
} from './styles';
import { Badge } from '../../components/Badge';
import { normalizeText } from '../../utils/normalizeText';
import useShow from '../../hooks/useShow';

type Props = StackScreenProps<Routes.RootStackParamList, 'EpisodeDetails'>;

export const EpisodeDetails = ({
  route: {
    params: { episode },
  },
  navigation,
}: Props): JSX.Element => {
  const { episodes, seasons } = useShow();

  const releaseDate = format(
    parseISO(episode.airdate),
    "eeee',' dd MMMM yyyy ",
  );

  const summary = episode.summary
    ? normalizeText(episode.summary)
    : 'Sorry, there is no description available for this episode. 😥';

  const isFirstEpisodeFirstSeason = useMemo((): boolean => {
    const isFirstEpisode = episode.number === 1;
    const isLastSeason = episode.season === 1;

    if (isFirstEpisode && isLastSeason) {
      return true;
    }

    return false;
  }, [episode]);

  const isLastEpisodeLastSeason = useMemo((): boolean => {
    const filteredEpisodes = episodes.filter(
      (epi) => epi.season === episode.season,
    );

    const isLastEpisode =
      episode.number === Math.max(...filteredEpisodes.map((epi) => epi.number));

    const isLastSeason =
      episode.season === Math.max(...seasons.map((s) => s.number));

    if (isLastEpisode && isLastSeason) {
      return true;
    }

    return false;
  }, [episode, episodes, seasons]);

  const handleMovePreviousEpisode = () => {
    const isFirstEpisode = episode.number === 1;

    const episodesOfPreviousSeason = episodes.filter(
      (epi) => epi.season === episode.season - 1,
    );

    const lastEpisodeOfPreviousSeason = episodesOfPreviousSeason.find(
      (epi) =>
        epi.number ===
        Math.max(...episodesOfPreviousSeason.map((e) => e.number)),
    );

    const previousEpisode = isFirstEpisode
      ? lastEpisodeOfPreviousSeason
      : episodes.find(
          (epi) =>
            epi.number === episode.number - 1 && epi.season === episode.season,
        );

    if (previousEpisode) {
      navigation.push('EpisodeDetails', { episode: previousEpisode });
    }
  };

  const handleMoveNextEpisode = () => {
    const filteredEpisodes = episodes.filter(
      (epi) => epi.season === episode.season,
    );

    const isLastEpisode =
      episode.number === Math.max(...filteredEpisodes.map((epi) => epi.number));

    const episodesOfNextSeason = episodes.filter(
      (epi) => epi.season === episode.season + 1,
    );

    const firstEpisodeOfNextSeason = episodesOfNextSeason.find(
      (epi) => epi.number === 1,
    );

    const nextEpisode = isLastEpisode
      ? firstEpisodeOfNextSeason
      : episodes.find(
          (epi) =>
            epi.number === episode.number + 1 && epi.season === episode.season,
        );

    if (nextEpisode) {
      navigation.push('EpisodeDetails', { episode: nextEpisode });
    }
  };

  useEffect(() => {
    const onBackPress = () => {
      navigation.popToTop();
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [navigation]);

  return (
    <Container>
      <EpisodeImageContainer>
        <EpisodeImage
          source={
            episode.image?.isFallback
              ? episode.image.original
              : { uri: episode.image?.original }
          }
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

        <ButtonContainer>
          {!isFirstEpisodeFirstSeason && (
            <PreviousEpisodeButton
              testID="previous-button"
              onPress={handleMovePreviousEpisode}
            >
              <AntDesign
                name="arrowup"
                size={24}
                color={theme.colors.gray[800]}
              />
            </PreviousEpisodeButton>
          )}

          {!isLastEpisodeLastSeason && (
            <NextEpisodeButton
              testID="next-button"
              onPress={handleMoveNextEpisode}
            >
              <AntDesign
                name="arrowdown"
                size={24}
                color={theme.colors.gray[800]}
              />
            </NextEpisodeButton>
          )}
        </ButtonContainer>
      </Content>
    </Container>
  );
};
