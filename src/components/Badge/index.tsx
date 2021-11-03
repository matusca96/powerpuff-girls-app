import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { theme } from '../../styles/theme';

import { Container, BadgeText } from './styles';

interface BadgeProps {
  color?: string;
  style?: StyleProp<ViewStyle>;
  children: string;
}

export const Badge = ({
  color = theme.colors.gray[100],
  style,
  children,
}: BadgeProps): JSX.Element => {
  return (
    <Container style={style} color={color}>
      <BadgeText>{children}</BadgeText>
    </Container>
  );
};
