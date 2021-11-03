import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled(FlatList as new () => FlatList<TVShow.Cast>)`
  margin-top: 5px;
`;

export const ListTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ListTitle = styled.Text`
  color: ${theme.colors.gray[900]};

  font-size: 22px;
  font-family: ${theme.fonts.bold};

  margin-right: 4px;
`;
