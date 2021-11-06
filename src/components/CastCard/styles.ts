import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../styles/theme';

export const Container = styled(LinearGradient)`
  flex-direction: row;

  padding: 5px 10px;

  min-width: 160px;
  height: 70px;

  border-radius: 5px;

  margin-right: 10px;
`;

export const InfoContainer = styled.View`
  margin-left: 10px;
`;

export const PersonName = styled.Text`
  font-family: ${theme.fonts.medium};
  color: ${theme.colors.gray[900]};
`;

export const CharacterName = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.light};

  color: ${theme.colors.gray[900]};
`;
