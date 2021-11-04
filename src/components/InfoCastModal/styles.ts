import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { theme } from '../../styles/theme';

export const Container = styled.View`
  margin-top: auto;

  align-items: center;
  justify-content: center;

  padding: 18px;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  background-color: ${theme.colors.white};
`;

export const Message = styled.Text`
  margin: 18px 0;

  text-align: center;

  font-size: 16px;
  font-family: ${theme.fonts.medium};
`;

export const OkButton = styled(RectButton)`
  width: 100%;

  border-radius: 4px;
  background-color: ${theme.colors.pink[100]};

  padding: 12px;
`;

export const OkButtonText = styled.Text`
  text-align: center;

  font-size: 16px;
  font-family: ${theme.fonts.regular};
`;
