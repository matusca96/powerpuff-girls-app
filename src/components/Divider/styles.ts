import styled, { css } from 'styled-components/native';

interface ContainerProps {
  orientation: 'horizontal' | 'vertical';
}

export const Container = styled.View<ContainerProps>`
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          width: 100%;

          border-bottom-color: #969598;
          border-bottom-width: 1px;
        `
      : css`
          height: 100%;
          width: 1px;
          background-color: #969598;
        `}
`;
