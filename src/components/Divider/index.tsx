import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Container } from './styles';

interface DividerProps {
  orientation: 'vertical' | 'horizontal';
  style?: StyleProp<ViewStyle>;
}

export const Divider = ({ orientation, style }: DividerProps): JSX.Element => {
  return (
    <Container
      accessibilityLabel="spacer"
      style={style}
      orientation={orientation}
    />
  );
};
