import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
  flex: 1;

  max-height: 80%;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  flex: 1;

  font-size: 26px;
  font-family: ${theme.fonts.bold};

  color: ${theme.colors.pink[50]};
`;

export const SeasonList = styled(FlatList as new () => FlatList<TVShow.Season>)`
  margin-top: 10px;

  width: 100%;
`;

export const SeasonContainer = styled(RectButton)`
  padding: 10px;
  margin-bottom: 10px;

  width: 80%;

  align-self: center;

  border-radius: 5px;
`;

export const SeasonTitle = styled.Text`
  font-size: 22px;
  font-family: ${theme.fonts.regular};

  text-align: center;

  color: ${theme.colors.gray[50]};
`;

export const CloseButton = styled(RectButton)`
  margin-top: auto;

  width: 60px;
  height: 60px;

  border-radius: 30px;

  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.pink[50]};
`;
