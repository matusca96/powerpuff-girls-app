import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { Portal } from 'react-native-portalize';
import { theme } from '../../styles/theme';

import {
  Container,
  SeasonContainer,
  SeasonList,
  SeasonTitle,
  Title,
  CloseButton,
} from './styles';

interface SeasonListProps {
  isVisible: boolean;
  onClose: () => void;
}

export const SeasonListModal = ({
  isVisible,
  onClose,
}: SeasonListProps): JSX.Element => {
  const seasons: TVShow.Season[] = [
    {
      id: '1',
      name: '',
      episodeOrder: 39,
      number: 1,
      summary: '',
    },
    {
      id: '2',
      name: '',
      episodeOrder: 41,
      number: 2,
      summary: '',
    },
    {
      id: '3',
      name: '',
      episodeOrder: 39,
      number: 3,
      summary: '',
    },
  ];

  return (
    <Portal>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        useNativeDriver
        statusBarTranslucent
        deviceHeight={Dimensions.get('screen').height}
        backdropOpacity={0.9}
        propagateSwipe
      >
        <Container>
          <Title>Choose a season</Title>
          <SeasonList
            data={seasons}
            keyExtractor={(season) => season.id}
            renderItem={({ item: season }) => (
              <SeasonContainer>
                <SeasonTitle>{`Season ${season.number}`}</SeasonTitle>
              </SeasonContainer>
            )}
          />

          <GestureHandlerRootView>
            <CloseButton onPress={onClose}>
              <Ionicons
                name="md-close"
                size={34}
                color={theme.colors.gray[900]}
              />
            </CloseButton>
          </GestureHandlerRootView>
        </Container>
      </Modal>
    </Portal>
  );
};
