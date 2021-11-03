import styled from 'styled-components/native';

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ color }) => color};

  padding: 2px 8px;
  border-radius: 4px;
`;

export const BadgeText = styled.Text`
  font-family: 'Inter_300Light';
  font-size: 12px;

  color: #808080;
`;
