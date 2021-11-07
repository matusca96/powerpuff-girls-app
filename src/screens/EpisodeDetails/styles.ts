import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../styles/theme';

export const Container = styled.View`
  flex: 1;

  background-color: ${theme.colors.white};
`;

export const Header = styled.View`
  height: 220px;
`;

export const BackButton = styled(RectButton)`
  margin-top: ${getStatusBarHeight()}px;
  margin-left: 15px;

  width: 40px;
  height: 40px;

  border-radius: 20px;

  align-self: flex-start;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.white};
`;

export const EpisodeImage = styled.ImageBackground`
  height: 100%;
`;

export const Content = styled.View`
  padding: 12px;

  flex: 1;
`;

export const TitleContainer = styled(LinearGradient)`
  width: 100%;

  padding: 4px 12px;

  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.bold};

  text-align: center;

  color: ${theme.colors.gray[900]};
`;

export const ReleaseDate = styled.Text`
  margin-top: 6px;

  font-family: ${theme.fonts.regular};
  font-size: 14px;

  color: ${theme.colors.gray[700]};
`;

export const BadgeContainer = styled.View`
  margin-top: 6px;

  flex-direction: row;
  align-items: center;
`;

export const SummaryTitle = styled.Text`
  margin-top: 20px;

  font-size: 20px;
  font-family: ${theme.fonts.bold};

  color: ${theme.colors.gray[900]};
`;

export const Summary = styled.Text`
  margin-top: 2px;

  font-size: 14px;
  font-family: ${theme.fonts.regular};

  color: ${theme.colors.gray[700]};
`;

export const ButtonContainer = styled.View`
  margin-top: auto;
  padding-bottom: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PreviousEpisodeButton = styled(RectButton)`
  height: 100px;
  padding: 14px;

  align-items: center;
  justify-content: flex-start;

  border-radius: 50px;
  background-color: ${theme.colors.green[50]};
`;

export const NextEpisodeButton = styled(RectButton)`
  margin-left: 15px;

  height: 100px;
  padding: 14px;

  align-items: center;
  justify-content: flex-end;

  border-radius: 50px;
  background-color: ${theme.colors.blue[50]};
`;
