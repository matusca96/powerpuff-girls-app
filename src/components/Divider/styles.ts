import styled, { css } from 'styled-components/native';
import { theme } from '../../styles/theme';

interface ContainerProps {
  orientation: 'horizontal' | 'vertical';
}

export const Container = styled.View<ContainerProps>`
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          width: 100%;

          border-bottom-color: ${theme.colors.gray[700]};
          border-bottom-width: 1px;
        `
      : css`
          height: 90%;
          width: 1px;
          background-color: ${theme.colors.gray[700]};
        `}
`;
