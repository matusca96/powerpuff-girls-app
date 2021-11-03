import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled(FlatList as new () => FlatList<TVShow.Cast>)``;

export const ListTitle = styled.Text`
  color: ${theme.colors.gray[900]};

  font-size: 22px;
  font-family: ${theme.fonts.bold};
`;
