import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { Portal } from 'react-native-portalize';
import { theme } from '../../styles/theme';

import { Container, Message, OkButton, OkButtonText } from './styles';

interface InfoCastModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const InfoCastModal = ({
  isVisible,
  onClose,
}: InfoCastModalProps): JSX.Element => {
  return (
    <Portal>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        useNativeDriver
        statusBarTranslucent
        deviceHeight={Dimensions.get('screen').height}
        style={{ margin: 0 }}
      >
        <Container>
          <MaterialCommunityIcons
            name="information"
            size={30}
            color={theme.colors.gray[900]}
          />
          <Message>
            Tap on cast image to switch between actor and character picture.
          </Message>

          <GestureHandlerRootView style={{ width: '100%' }}>
            <OkButton onPress={onClose}>
              <OkButtonText>Got it!</OkButtonText>
            </OkButton>
          </GestureHandlerRootView>
        </Container>
      </Modal>
    </Portal>
  );
};
