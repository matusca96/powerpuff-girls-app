import React from 'react';

import { Container, BadgeText } from './styles';

interface BadgeProps {
  color?: string;
  children: string;
}

export const Badge = ({
  color = '#f1f1f1',
  children,
}: BadgeProps): JSX.Element => {
  return (
    <Container color={color}>
      <BadgeText>{children}</BadgeText>
    </Container>
  );
};
