import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { theme } from '../../styles/theme';

export const Container = styled(Animated.View)`
  position: absolute;
  top: 15%;

  align-items: center;

  width: 80%;
  padding: 12px;

  border-radius: 5px;
  background-color: ${theme.colors.white};
`;

export const ErrorEmoji = styled.Text`
  font-size: 24px;
`;

export const ErrorText = styled.Text`
  margin-top: 6px;

  font-size: 16px;
  font-family: ${theme.fonts.regular};

  text-align: center;

  color: ${theme.colors.gray[800]};
`;

export const TryAgainButton = styled(RectButton)`
  margin-top: 8px;
  padding: 10px;

  width: 100%;

  border-radius: 5px;
  background-color: ${theme.colors.pink[100]};
`;

export const TryAgainText = styled.Text`
  text-align: center;

  font-size: 16px;
  font-family: ${theme.fonts.regular};

  color: ${theme.colors.gray[800]};
`;
