import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { Portal } from 'react-native-portalize';
import useShow from '../../hooks/useShow';
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
  changeSeason: React.Dispatch<React.SetStateAction<TVShow.Season>>;
  onClose: () => void;
}

export const SeasonListModal = ({
  isVisible,
  changeSeason,
  onClose,
}: SeasonListProps): JSX.Element => {
  const { seasons } = useShow();

  const handleOnChangeSeason = (season: TVShow.Season) => {
    changeSeason(season);
    onClose();
  };

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
              <GestureHandlerRootView>
                <SeasonContainer onPress={() => handleOnChangeSeason(season)}>
                  <SeasonTitle>{`Season ${season.number}`}</SeasonTitle>
                </SeasonContainer>
              </GestureHandlerRootView>
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
