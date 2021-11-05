import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Rating } from 'react-native-ratings';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';
import { theme } from '../../styles/theme';
import { useBounceAnimation } from '../../hooks/useBounceAnimation';

import { Badge } from '../../components/Badge';
import { Divider } from '../../components/Divider';
import { CastList } from '../../components/CastList';
import { InfoCastModal } from '../../components/InfoCastModal';
import { SeasonListModal } from '../../components/SeasonListModal';
import { EpisodeCard } from '../../components/EpisodeCard';

import {
  EpisodeList,
  LinearGradient,
  Header,
  Image,
  Content,
  Title,
  InfoContainer,
  Premiered,
  SeasonsCount,
  BadgeContainer,
  Description,
  ContainerButton,
  ListTitleContainer,
  ListTitle,
  SeasonsSelectButton,
  SeasonText,
  SeasonsSelectContainer,
  SeasonEpisodesText,
} from './styles';
import useShow from '../../hooks/useShow';
import { getPremieredYear } from '../../utils/getPremieredYear';
import { normalizeText } from '../../utils/normalizeText';

type HomeProps = StackNavigationProp<Routes.RootStackParamList, 'Home'>;

export const Home = (): JSX.Element => {
  const [showMore, setShowMore] = useState(false);
  const [isInfoCastModalVisible, setIsInfoCastModalVisible] = useState(false);
  const [isSeasonListModalVisible, setIsSeasonListModalVisible] =
    useState(false);

  const [selectedSeason, setSelectedSeason] = useState({} as TVShow.Season);

  const translateY = useBounceAnimation(!showMore, 500);
  const { navigate } = useNavigation<HomeProps>();

  const { generalInfo, seasons, episodes } = useShow();

  useEffect(() => {
    setSelectedSeason(
      seasons.find((season) => season.number === 1) ?? ({} as TVShow.Season),
    );
  }, [seasons]);

  return (
    <>
      <InfoCastModal
        isVisible={isInfoCastModalVisible}
        onClose={() => setIsInfoCastModalVisible(false)}
      />
      <SeasonListModal
        isVisible={isSeasonListModalVisible}
        changeSeason={setSelectedSeason}
        onClose={() => setIsSeasonListModalVisible(false)}
      />
      <Header>
        <LinearGradient
          colors={['transparent', '#fff']}
          start={[0, 0.4]}
          end={[0, 0.95]}
        />
        <Image
          source={{
            uri: generalInfo.image.original,
          }}
          resizeMode="cover"
        />
      </Header>
      <EpisodeList
        data={episodes.filter(
          (episode) => episode.season === selectedSeason.number,
        )}
        keyExtractor={(episode) => episode.id}
        ListHeaderComponent={
          <Content>
            <Title>{generalInfo.name}</Title>
            <InfoContainer>
              <Premiered>{getPremieredYear(generalInfo.premiered)}</Premiered>
              <Divider
                style={{ marginLeft: 5, marginRight: 5 }}
                orientation="vertical"
              />
              <SeasonsCount>{`${seasons.length} seasons`}</SeasonsCount>
              <Rating
                type="heart"
                imageSize={14}
                startingValue={generalInfo.rating.average / 2}
                ratingCount={5}
                readonly
                style={{ marginLeft: 5 }}
              />
            </InfoContainer>
            <BadgeContainer>
              {generalInfo.genres.map((genre) => (
                <Badge key={genre} style={{ marginRight: 6 }}>
                  {genre}
                </Badge>
              ))}
            </BadgeContainer>
            <Description numberOfLines={showMore ? undefined : 4}>
              {normalizeText(generalInfo.summary)}
            </Description>

            <TouchableWithoutFeedback onPress={() => setShowMore(!showMore)}>
              <ContainerButton
                style={{
                  translateY,
                }}
              >
                <MaterialIcons
                  name={showMore ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                  size={24}
                  color={theme.colors.gray[700]}
                />
              </ContainerButton>
            </TouchableWithoutFeedback>

            <ListTitleContainer>
              <ListTitle>Cast & Characters</ListTitle>
              <TouchableWithoutFeedback
                onPress={() => setIsInfoCastModalVisible(true)}
              >
                <MaterialCommunityIcons
                  name="information-outline"
                  size={18}
                  color={theme.colors.gray[900]}
                />
              </TouchableWithoutFeedback>
            </ListTitleContainer>
            <CastList />

            <SeasonsSelectContainer>
              <SeasonsSelectButton
                onPress={() => setIsSeasonListModalVisible(true)}
              >
                <SeasonText>{`Season ${selectedSeason.number}`}</SeasonText>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={24}
                  color={theme.colors.gray[900]}
                />
              </SeasonsSelectButton>

              <SeasonEpisodesText>
                {`(${selectedSeason.episodeOrder} episodes)`}
              </SeasonEpisodesText>
            </SeasonsSelectContainer>
          </Content>
        }
        renderItem={({ item: episode }) => (
          <EpisodeCard
            episode={episode}
            onSelectEpisode={() =>
              navigate('EpisodeDetails', {
                episode,
              })
            }
          />
        )}
      />
    </>
  );
};
