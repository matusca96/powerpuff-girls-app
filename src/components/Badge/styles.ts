import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ color }) => color};

  padding: 2px 8px;
  border-radius: 12px;
`;

export const BadgeText = styled.Text`
  font-family: '${theme.fonts.light}';
  font-size: 12px;

  color: ${theme.colors.gray[800]};
`;
