import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../styles/theme';

export const Container = styled.View`
  position: relative;
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.white};

  z-index: 3;
`;

export const HeartIcon = styled(Animated.Image)`
  width: 70px;
  height: 70px;
`;
