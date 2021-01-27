import styled, { css } from 'styled-components';

export interface DividerProps {
  /**
   * What styled should the line be of?
   */
  type: 'dashed' | 'dotted' | 'normal';
}

export const Divider = styled.hr<DividerProps>`
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
