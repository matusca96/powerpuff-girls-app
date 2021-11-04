import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled(RectButton)`
  flex-direction: row;
  align-items: center;

  padding: 8px 16px;

  margin-bottom: 10px;
`;

export const EpisodeImage = styled.Image`
  width: 100px;
  height: 60px;

  border-radius: 5px;
`;

export const InfoContainer = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  width: 80%;

  font-size: 16px;
  font-family: ${theme.fonts.bold};

  color: ${theme.colors.gray[900]};
`;

export const Runtime = styled.Text`
  margin-top: 2px;

  font-family: ${theme.fonts.regular};

  color: ${theme.colors.gray[800]};
`;
