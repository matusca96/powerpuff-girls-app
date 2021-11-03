import React, { useEffect, useRef, useState } from 'react';
import { Animated, StatusBar } from 'react-native';
import { Rating } from 'react-native-ratings';
import { MaterialIcons } from '@expo/vector-icons';

import { Badge } from '../../components/Badge';
import { Divider } from '../../components/Divider';

import {
  ScrollContainer,
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
  ShowHideButton,
} from './styles';
import { useBounceAnimation } from '../../hooks/useBounceAnimation';

export const Home = (): JSX.Element => {
  const bounce = useRef(new Animated.Value(0)).current;
  const [showMore, setShowMore] = useState(false);

  const translateY = useBounceAnimation(!showMore, 500);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollContainer>
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
        <Content>
          <Title>The Powerpuff Girls</Title>
          <InfoContainer>
            <Premiered>2016</Premiered>
            <Divider orientation="vertical" />
            <SeasonsCount>3 seasons</SeasonsCount>
            <Rating
              type="heart"
              imageSize={14}
              startingValue={5.8 / 2}
              ratingCount={5}
              readonly
            />
          </InfoContainer>
          <BadgeContainer>
            <Badge>Comedy</Badge>
            <Badge>Action</Badge>
            <Badge>Science-Fiction</Badge>
          </BadgeContainer>
          <Description numberOfLines={showMore ? undefined : 4}>
            The city of Townsville may be a beautiful, bustling metropolis, but
            dont be fooled! Theres evil afoot! And only three things can keep
            the bad guys at bay: Blossom, Bubbles and Buttercup, three
            super-powered little girls, known to their fans (and villains
            everywhere) as The Powerpuff Girls. Juggling school, bedtimes, and
            beating up giant monsters may be daunting, but together the
            Powerpuff Girls are up to the task. Battling a whos who of evil,
            they show what it really means to fight like a girl.
          </Description>

          <ShowHideButton onPress={() => setShowMore(!showMore)}>
            <Animated.View
              style={{
                translateY,
              }}
            >
              <MaterialIcons
                name={showMore ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={24}
                color="#969598"
              />
            </Animated.View>
          </ShowHideButton>
        </Content>
      </ScrollContainer>
    </>
  );
};
