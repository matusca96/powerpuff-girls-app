import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(FlatList as new () => FlatList<TVShow.Cast>)`
  margin-top: 8px;
`;
