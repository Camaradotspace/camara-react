import styled, { css } from 'styled-components';
import { DividerProps } from './divider.types';

export const StyledDivider = styled.hr<DividerProps>`
  display: block;
  min-width: 600px;
  border: 1px solid #dadce0;

  ${(props) =>
    props.type === 'dashed' &&
    css`
      border: 1px dashed #dadce0;
    `};
  ${(props) =>
    props.type === 'dotted' &&
    css`
      border: 1px dotted #dadce0;
    `};
  ${(props) =>
    props.type === 'normal' &&
    css`
      border: 1px solid #dadce0;
    `};
`;
