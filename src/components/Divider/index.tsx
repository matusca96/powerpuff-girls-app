import React from 'react';
import { Container } from './styles';

interface DividerProps {
  orientation: 'vertical' | 'horizontal';
}

export const Divider = ({ orientation }: DividerProps): JSX.Element => {
  return <Container orientation={orientation} />;
};
