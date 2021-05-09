import styled, { css } from 'styled-components';
import { SpacerProps } from './spacer.types';

export const StyledSpacer = styled.div<SpacerProps>`
  // vertical spacer
  ${(props) =>
    props.both &&
    css`
      margin-top: 1rem;
      margin-bottom: 1rem;
    `}
  // top spacer
  ${(props) =>
    props.top &&
    css`
      margin-top: 1rem;
    `}
  // bottom spacer
  ${(props) =>
    props.bottom &&
    css`
      margin-bottom: 1rem;
    `}
`;
