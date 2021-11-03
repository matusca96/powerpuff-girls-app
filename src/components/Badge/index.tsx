import React from 'react';
import { theme } from '../../styles/theme';

import { Container, BadgeText } from './styles';

interface BadgeProps {
  color?: string;
  children: string;
}

export const Badge = ({
  color = theme.colors.gray[100],
  children,
}: BadgeProps): JSX.Element => {
  return (
    <Container color={color}>
      <BadgeText>{children}</BadgeText>
    </Container>
  );
};
