import styled, { css } from 'styled-components';
import { AnchorProps } from './anchor.types';
import { tokens } from '../../constants';

const { $primary } = tokens.colors;

export const StyledAnchor = styled.a<AnchorProps>`
  text-decoration: none;
  color: ${$primary};
  cursor: pointer;
  /* visited Anchor */
  &:visited {
    color: 'purple';
  }
  /* mouse over Anchor */
  &:hover {
    color: #4285f4;
  }
  /* selected Anchor */
  &:active {
    color: #4285f4;
  }
  ${(props) =>
    props.asButton &&
    css`
      background-color: ${$primary};
      color: #fff;
      padding: 0.15rem 0.5rem;
      border-radius: 4px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 14px;
      font-weight: 500;
      /* mouse over Anchor */
      &:hover {
        background-color: #4285f4;
        color: #fff;
      }
      /* selected Anchor */
      &:active {
        background-color: #4285f4;
        color: #fff;
      }
    `}
`;
