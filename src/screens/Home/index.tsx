import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Rating } from 'react-native-ratings';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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

export const Home = (): JSX.Element => {
  const [showMore, setShowMore] = useState(false);
  const [isInfoCastModalVisible, setIsInfoCastModalVisible] = useState(false);
  const [isSeasonListModalVisible, setIsSeasonListModalVisible] =
    useState(false);

  const translateY = useBounceAnimation(!showMore, 500);
  const { navigate } = useNavigation<Routes.NavigationProp>();

  const episodes: TVShow.Episode[] = [
    {
      id: '1',
      name: 'Escape from Monster Island',
      season: 1,
      number: 1,
      runtime: 11,
      image: {
        medium:
          'https://static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg',
        original:
          'https://static.tvmaze.com/uploads/images/original_untouched/53/132617.jpg',
      },
      summary:
        "Bubbles wins two tickets to a concert and has to pick between Blossom and Buttercup to go with her. Meanwhile, the Mayor's plane goes down over Monster Island and it's up to the girls to rescue him.",
    },
  ];

  return (
    <>
      <InfoCastModal
        isVisible={isInfoCastModalVisible}
        onClose={() => setIsInfoCastModalVisible(false)}
      />
      <SeasonListModal
        isVisible={isSeasonListModalVisible}
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
            uri: 'https://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg',
          }}
          resizeMode="cover"
        />
      </Header>
      <EpisodeList
        data={episodes}
        keyExtractor={(episode) => episode.id}
        ListHeaderComponent={
          <Content>
            <Title>The Powerpuff Girls</Title>
            <InfoContainer>
              <Premiered>2016</Premiered>
              <Divider
                style={{ marginLeft: 5, marginRight: 5 }}
                orientation="vertical"
              />
              <SeasonsCount>3 seasons</SeasonsCount>
              <Rating
                type="heart"
                imageSize={14}
                startingValue={5.8 / 2}
                ratingCount={5}
                readonly
                style={{ marginLeft: 5 }}
              />
            </InfoContainer>
            <BadgeContainer>
              <Badge>Comedy</Badge>
              <Badge style={{ marginLeft: 6 }}>Action</Badge>
              <Badge style={{ marginLeft: 6 }}>Science-Fiction</Badge>
            </BadgeContainer>
            <Description numberOfLines={showMore ? undefined : 4}>
              The city of Townsville may be a beautiful, bustling metropolis,
              but dont be fooled! Theres evil afoot! And only three things can
              keep the bad guys at bay: Blossom, Bubbles and Buttercup, three
              super-powered little girls, known to their fans (and villains
              everywhere) as The Powerpuff Girls. Juggling school, bedtimes, and
              beating up giant monsters may be daunting, but together the
              Powerpuff Girls are up to the task. Battling a whos who of evil,
              they show what it really means to fight like a girl.
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
                <SeasonText>Season 1</SeasonText>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={24}
                  color={theme.colors.gray[900]}
                />
              </SeasonsSelectButton>

              <SeasonEpisodesText>(41 episodes)</SeasonEpisodesText>
            </SeasonsSelectContainer>
          </Content>
        }
        renderItem={({ item: episode }) => (
          <EpisodeCard
            episode={episode}
            onSelectEpisode={() => navigate('EpisodeDetails')}
          />
        )}
      />
    </>
  );
};
